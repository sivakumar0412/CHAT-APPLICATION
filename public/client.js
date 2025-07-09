// Import the io object from the CDN
const io = window.io

class ChatClient {
  constructor() {
    this.socket = null
    this.username = ""
    this.isConnected = false
    this.hasJoined = false
    this.onlineUsers = []

    this.initializeElements()
    this.attachEventListeners()
    this.connectSocket()
  }

  initializeElements() {
    // Login elements
    this.loginContainer = document.getElementById("loginContainer")
    this.usernameInput = document.getElementById("usernameInput")
    this.joinButton = document.getElementById("joinButton")
    this.loginStatusDot = document.getElementById("loginStatusDot")
    this.loginStatusText = document.getElementById("loginStatusText")

    // Chat elements
    this.chatContainer = document.getElementById("chatContainer")
    this.messagesContainer = document.getElementById("messagesContainer")
    this.messageInput = document.getElementById("messageInput")
    this.sendButton = document.getElementById("sendButton")
    this.usersList = document.getElementById("usersList")
    this.usersCount = document.getElementById("usersCount")
    this.chatStatusDot = document.getElementById("chatStatusDot")
    this.chatStatusText = document.getElementById("chatStatusText")
    this.welcomeMessage = document.getElementById("welcomeMessage")
    this.leaveButton = document.getElementById("leaveButton")
    this.notificationContainer = document.getElementById("notificationContainer")
  }

  attachEventListeners() {
    // Login events
    this.joinButton.addEventListener("click", () => this.joinChat())
    this.usernameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.joinChat()
    })
    this.usernameInput.addEventListener("input", () => this.validateUsername())

    // Chat events
    this.sendButton.addEventListener("click", () => this.sendMessage())
    this.messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.sendMessage()
    })
    this.leaveButton.addEventListener("click", () => this.leaveChat())

    // Window events
    window.addEventListener("beforeunload", () => {
      if (this.socket && this.hasJoined) {
        this.socket.disconnect()
      }
    })
  }

  connectSocket() {
    try {
      // Use the global io object from the CDN
      this.socket = io("http://localhost:3001", {
        transports: ["websocket", "polling"],
        timeout: 5000,
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      })

      this.setupSocketListeners()
    } catch (error) {
      console.error("Failed to connect to server:", error)
      this.showNotification("Failed to connect to server", "error")
    }
  }

  setupSocketListeners() {
    this.socket.on("connect", () => {
      console.log("Connected to server")
      this.isConnected = true
      this.updateConnectionStatus()
      this.validateUsername()
      this.showNotification("Connected to server", "success")
    })

    this.socket.on("disconnect", (reason) => {
      console.log("Disconnected from server:", reason)
      this.isConnected = false
      this.updateConnectionStatus()
      this.disableChat()
      this.showNotification("Disconnected from server", "error")
    })

    this.socket.on("connect_error", (error) => {
      console.error("Connection error:", error)
      this.showNotification("Connection error", "error")
    })

    this.socket.on("message", (message) => {
      this.displayMessage(message)
    })

    this.socket.on("userJoined", (data) => {
      this.onlineUsers = data.users
      this.updateUsersList()
      this.displaySystemMessage(`${data.username} joined the chat`)
      this.showNotification(`${data.username} joined`, "info")
    })

    this.socket.on("userLeft", (data) => {
      this.onlineUsers = data.users
      this.updateUsersList()
      this.displaySystemMessage(`${data.username} left the chat`)
      this.showNotification(`${data.username} left`, "info")
    })

    this.socket.on("users", (users) => {
      this.onlineUsers = users
      this.updateUsersList()
    })

    this.socket.on("error", (error) => {
      console.error("Socket error:", error)
      this.showNotification("An error occurred", "error")
    })
  }

  validateUsername() {
    const username = this.usernameInput.value.trim()
    const isValid = username.length >= 2 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username)
    this.joinButton.disabled = !isValid || !this.isConnected

    if (username && !isValid) {
      this.usernameInput.style.borderColor = "#f44336"
    } else {
      this.usernameInput.style.borderColor = "#e9ecef"
    }
  }

  updateConnectionStatus() {
    const statusElements = [
      { dot: this.loginStatusDot, text: this.loginStatusText },
      { dot: this.chatStatusDot, text: this.chatStatusText },
    ]

    statusElements.forEach(({ dot, text }) => {
      if (this.isConnected) {
        dot.classList.remove("disconnected")
        dot.classList.add("connected")
        text.textContent = "Connected"
      } else {
        dot.classList.remove("connected")
        dot.classList.add("disconnected")
        text.textContent = "Disconnected"
      }
    })
  }

  joinChat() {
    const username = this.usernameInput.value.trim()
    if (username && this.socket && this.isConnected) {
      // Check if username is already taken
      const userExists = this.onlineUsers.some((user) => user.username.toLowerCase() === username.toLowerCase())
      if (userExists) {
        this.showNotification("Username already taken", "error")
        return
      }

      this.username = username
      this.socket.emit("join", username)
      this.hasJoined = true

      this.loginContainer.classList.add("hidden")
      this.chatContainer.classList.remove("hidden")
      this.welcomeMessage.textContent = `Welcome, ${username}!`

      this.enableChat()
      this.messageInput.focus()
      this.showNotification("Successfully joined the chat", "success")
    }
  }

  leaveChat() {
    if (this.socket && this.hasJoined) {
      this.socket.disconnect()
      this.hasJoined = false
      this.chatContainer.classList.add("hidden")
      this.loginContainer.classList.remove("hidden")
      this.usernameInput.value = ""
      this.messagesContainer.innerHTML = ""
      this.onlineUsers = []
      this.updateUsersList()
      this.connectSocket() // Reconnect for potential rejoin
    }
  }

  enableChat() {
    this.messageInput.disabled = false
    this.sendButton.disabled = false
  }

  disableChat() {
    this.messageInput.disabled = true
    this.sendButton.disabled = true
  }

  sendMessage() {
    const messageText = this.messageInput.value.trim()
    if (messageText && this.socket && this.hasJoined && messageText.length <= 500) {
      const message = {
        username: this.username,
        text: messageText,
        timestamp: new Date(),
      }

      this.socket.emit("message", message)
      this.messageInput.value = ""
      this.messageInput.focus()
    }
  }

  displayMessage(message) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${message.username === this.username ? "own" : "other"}`

    const bubble = document.createElement("div")
    bubble.className = "message-bubble"

    if (message.username !== this.username) {
      const sender = document.createElement("div")
      sender.className = "message-sender"
      sender.textContent = message.username
      bubble.appendChild(sender)
    }

    const text = document.createElement("div")
    text.className = "message-text"
    text.textContent = message.text
    bubble.appendChild(text)

    const time = document.createElement("div")
    time.className = "message-time"
    time.textContent = this.formatTime(new Date(message.timestamp))
    bubble.appendChild(time)

    messageDiv.appendChild(bubble)
    this.messagesContainer.appendChild(messageDiv)
    this.scrollToBottom()
  }

  displaySystemMessage(text) {
    const messageDiv = document.createElement("div")
    messageDiv.className = "message system"

    const bubble = document.createElement("div")
    bubble.className = "message-bubble"
    bubble.textContent = text

    messageDiv.appendChild(bubble)
    this.messagesContainer.appendChild(messageDiv)
    this.scrollToBottom()
  }

  updateUsersList() {
    this.usersList.innerHTML = ""

    this.onlineUsers.forEach((user) => {
      const userDiv = document.createElement("div")
      userDiv.className = "user-item"

      const dot = document.createElement("div")
      dot.className = "user-dot"

      const name = document.createElement("span")
      name.className = `user-name ${user.username === this.username ? "current-user" : ""}`
      name.textContent = `${user.username}${user.username === this.username ? " (You)" : ""}`

      userDiv.appendChild(dot)
      userDiv.appendChild(name)
      this.usersList.appendChild(userDiv)
    })

    const count = this.onlineUsers.length
    this.usersCount.textContent = `${count} user${count !== 1 ? "s" : ""} online`
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.textContent = message

    this.notificationContainer.appendChild(notification)

    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  formatTime(date) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight
  }
}

// Initialize the chat client when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new ChatClient()
})
