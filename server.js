const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
})

const PORT = process.env.PORT || 3001

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")))

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Store connected users
const users = new Map()

// Message validation
function validateMessage(message) {
  if (!message || typeof message !== "object") return false
  if (!message.username || typeof message.username !== "string") return false
  if (!message.text || typeof message.text !== "string") return false
  if (message.text.length > 500) return false
  if (message.username.length > 20) return false
  return true
}

// Username validation
function validateUsername(username) {
  if (!username || typeof username !== "string") return false
  if (username.length < 2 || username.length > 20) return false
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return false
  return true
}

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`)

  // Handle user joining
  socket.on("join", (username) => {
    try {
      // Validate username
      if (!validateUsername(username)) {
        socket.emit("error", "Invalid username")
        return
      }

      // Check if username is already taken
      const existingUser = Array.from(users.values()).find(
        (user) => user.username.toLowerCase() === username.toLowerCase(),
      )

      if (existingUser) {
        socket.emit("error", "Username already taken")
        return
      }

      const user = {
        id: socket.id,
        username: username,
        joinedAt: new Date(),
      }

      users.set(socket.id, user)
      socket.username = username

      // Notify all users about the new user
      socket.broadcast.emit("userJoined", {
        username: username,
        users: Array.from(users.values()),
      })

      // Send current users list to the new user
      socket.emit("users", Array.from(users.values()))

      console.log(`${username} joined the chat (Total users: ${users.size})`)
    } catch (error) {
      console.error("Error in join handler:", error)
      socket.emit("error", "Failed to join chat")
    }
  })

  // Handle messages
  socket.on("message", (messageData) => {
    try {
      // Validate message
      if (!validateMessage(messageData)) {
        socket.emit("error", "Invalid message")
        return
      }

      // Check if user has joined
      const user = users.get(socket.id)
      if (!user || user.username !== messageData.username) {
        socket.emit("error", "User not authenticated")
        return
      }

      const message = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        username: messageData.username,
        text: messageData.text.trim(),
        timestamp: new Date(),
      }

      // Broadcast message to all connected clients
      io.emit("message", message)

      console.log(
        `Message from ${message.username}: ${message.text.substring(0, 50)}${message.text.length > 50 ? "..." : ""}`,
      )
    } catch (error) {
      console.error("Error in message handler:", error)
      socket.emit("error", "Failed to send message")
    }
  })

  // Handle disconnection
  socket.on("disconnect", (reason) => {
    try {
      const user = users.get(socket.id)
      if (user) {
        users.delete(socket.id)

        // Notify all users about user leaving
        socket.broadcast.emit("userLeft", {
          username: user.username,
          users: Array.from(users.values()),
        })

        console.log(`${user.username} left the chat (${reason}) (Total users: ${users.size})`)
      }
    } catch (error) {
      console.error("Error in disconnect handler:", error)
    }
  })

  // Handle errors
  socket.on("error", (error) => {
    console.error("Socket error:", error)
  })
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    connectedUsers: users.size,
  })
})

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Chat server running on http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/health`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully")
  server.close(() => {
    console.log("Server closed")
    process.exit(0)
  })
})

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully")
  server.close(() => {
    console.log("Server closed")
    process.exit(0)
  })
})
