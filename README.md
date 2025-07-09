# 💬 Real-Time Chat Application

A modern, feature-rich real-time chat application built with **Socket.IO**, **Express.js**, and **Vanilla JavaScript**. This app enables seamless real-time communication with a clean, responsive UI and robust backend.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-v4.7.4-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🚀 Features

### Core Functionality
- 🔄 Real-time messaging with WebSockets
- 👥 Multi-user support with online users list
- 🔔 Join/Leave notifications
- ✅ Username uniqueness and validation
- 📶 Connection status indicators

### User Experience
- 📱 Fully responsive design
- 🧼 Clean UI/UX with animations
- 🔔 Toast notifications
- ⏰ Message timestamps
- 📜 Auto-scroll and typing indicators

### Security & Performance
- 🛡️ Input and message validation
- 🚫 Rate limiting & spam protection
- 🔁 Auto reconnection on network drops
- ❌ XSS protection

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Socket.IO Client

### Backend
- Node.js, Express.js
- Socket.IO Server

---

## 📁 Project Structure

realtime-chat-app/
├── public/ # Static frontend files
│ ├── index.html # HTML structure
│ ├── styles.css # Styles and animations
│ └── client.js # Client-side JS
├── server.js # Express + Socket.IO backend
├── package.json # Project metadata and dependencies
└── README.md # Project documentation


---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
npm install
npm start
Open your browser and go to: http://localhost:3001
npm run dev


🎯 Usage Guide
Join the Chat
Enter a unique username

Wait for "Connected" status

Click Join Chat

Chat Features
Send messages via input bar

View online users

Real-time updates on user joins/leaves

Leave chat via the top-right button

🔧 Configuration
Server (server.js)
js
Copy
Edit
const PORT = process.env.PORT || 3001;
const pingTimeout = 60000;
const pingInterval = 25000;
Client (client.js)
js
Copy
Edit
const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling"],
  timeout: 5000,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
📊 API Endpoints
GET /health – Server status & connected user count

GET /stats – Server performance stats

Example Response:

json
Copy
Edit
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "connectedUsers": 5
}
🔒 Security
Input and message validation

Username constraints (2-20 chars, alphanumeric & underscore)

XSS protection via escaping

Rate limiting (10 msgs/min)

🌐 Browser Compatibility
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

Mobile browsers supporting WebSocket

🚀 Deployment
Local
Runs on http://localhost:3001 by default.

Production Tips
Set environment variable PORT

Use pm2 to keep the app alive

Use reverse proxy (e.g., nginx)

Enable CORS for your frontend domain

Environment Variables
bash
Copy
Edit
PORT=3001
NODE_ENV=production
🤝 Contributing
Fork the repo

Create your branch: git checkout -b feature/awesome-feature

Commit changes: git commit -m "Add awesome feature"

Push to GitHub: git push origin feature/awesome-feature

Open a Pull Request

Guidelines:

Follow ES6+ standards

Comment complex logic

Keep code consistent

🐛 Troubleshooting
Connection Issues
Check if server is running

Confirm correct port and browser support

Performance
Monitor system usage

Reduce message spam via rate limits

Username Errors
Use only alphanumeric & underscore

Must be unique (2–20 chars)

📞 Support
Open an issue on GitHub

Review this README or code comments

🎉 Acknowledgments
Socket.IO

Express.js

Contributors and testers 💖

Built with ❤️ using Node.js and Socket.IO

Let me know if you'd like help customizing the GitHub badges, adding screenshots/gifs, or deploying this app to platforms like **Render**, **Vercel**, or **Heroku**.
