Here is your cleaned-up and properly formatted **README.md** file for your **Real-Time Chat Application** project. I've fixed markdown formatting issues, removed backtick clutter, and ensured consistency:

---

```markdown
# 💬 Real-Time Chat Application

A modern, feature-rich real-time chat application built with **Socket.IO**, **Express.js**, and **vanilla JavaScript**. It provides seamless real-time communication with a clean, responsive user interface and robust backend architecture.

![Chat Application Demo](https://img.shields.io/badge/Status-Active-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-v4.7.4-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🚀 Features

### ✅ Core Functionality
- Real-time messaging via WebSocket
- Multi-user support with simultaneous chatting
- Live user list with join/leave notifications
- Connection status indicators
- Input sanitization and validation
- Unique usernames per session

### ✨ User Experience
- Fully responsive design for mobile & desktop
- Smooth animations and transitions
- Toast-style notifications
- Message timestamps
- Auto-scroll on new messages
- Typing indicators

### 🔐 Security & Performance
- Server-side input validation
- Rate limiting to prevent spam
- Error handling and recovery
- Auto-reconnect support
- XSS-safe message rendering

---

## 🛠️ Technology Stack

### 💻 Frontend
- HTML5, CSS3
- Vanilla JavaScript (ES6+)
- Socket.IO client

### 🖥️ Backend
- Node.js
- Express.js
- Socket.IO
- Built-in HTTP server

---

## 📁 Project Structure

```

realtime-chat-app/
├── public/                 # Frontend static files
│   ├── index.html          # Main HTML structure
│   ├── style.css           # CSS styles and animations
│   └── script.js           # Frontend JS logic
├── server.js               # Backend server with Socket.IO
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation

````

---

## ⚙️ Getting Started

### 🔧 Prerequisites
- Node.js v14+  
- npm (comes with Node.js)

### 📦 Installation

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
npm install
npm start
````

Then open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 🧪 Development Mode

For hot reloading using nodemon:

```bash
npm run dev
```

*(Add a dev script and install `nodemon` if not already done.)*

---

## 🎯 Usage Guide

### 👤 Joining the Chat

1. Enter a unique username (2–20 characters)
2. Click “Join Chat”

### 💬 Messaging

* Type in the input field
* Press Enter or click “Send”

### 👥 User Management

* View online users
* See join/leave alerts
* Your name is highlighted

### 🚪 Leaving the Chat

Click “Leave Chat” to disconnect and return to login.

---

## 🔧 Configuration

### Server (`server.js`)

```js
const PORT = process.env.PORT || 3001;
const pingTimeout = 60000;
const pingInterval = 25000;
```

### Client (`script.js`)

```js
const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling"],
  timeout: 5000,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
```

---

## 📊 API Endpoints

### `/health`

* Returns server health status and user count

### `/stats`

* Returns server uptime, memory usage, and active users

```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "connectedUsers": 5
}
```

---

## 🔒 Security Features

* Username & message validation
* HTML escaping for XSS protection
* Rate limiting (10 messages/min)
* Session timeout & reconnection limits

---

## 🌐 Browser Support

* ✅ Chrome 60+
* ✅ Firefox 55+
* ✅ Safari 12+
* ✅ Edge 79+
* ✅ Mobile browsers with WebSocket

---

## 🚀 Deployment

### 🧪 Local

```bash
npm start
```

Visit: [http://localhost:3001](http://localhost:3001)

### 🌍 Production

* Set `PORT` in environment
* Use **PM2** for process management
* Configure reverse proxy (e.g., nginx)
* Enable SSL for secure WebSocket

### Environment Variables

```bash
PORT=3001
NODE_ENV=production
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a pull request

### Guidelines

* Use ES6+ syntax
* Keep code clean and commented
* Test before submitting

---

## 📝 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for full details.

---

## 🐛 Troubleshooting

### Can't Connect?

* Server not running on specified port?
* Browser supports WebSocket?
* Firewall or antivirus blocking port?

### Chat Not Updating?

* Check `script.js` for errors
* Is Socket.IO client loading?

### Duplicate Username?

* Must be 2–20 characters
* No special symbols (only letters, numbers, underscore)
* Must be unique in room

---

## 📞 Support

* Open an issue on GitHub
* Refer to comments in source code
* Email maintainer (if applicable)

---

## 🎉 Acknowledgments

* [Socket.IO](https://socket.io/)
* [Express.js](https://expressjs.com/)
* You — for using this project!

---

**Built with ❤️ using Node.js and Socket.IO**

```

