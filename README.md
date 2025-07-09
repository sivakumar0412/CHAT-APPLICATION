# Real-Time Chat Application

A modern, feature-rich real-time chat application built with Socket.IO, Express.js, and vanilla JavaScript. This application provides seamless real-time communication with a clean, responsive user interface and robust backend architecture.

![Chat Application Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-v14+-green) ![Socket.IO](https://img.shields.io/badge/Socket.IO-v4.7.4-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Features

### Core Functionality
- **Real-time messaging** - Instant message delivery using WebSocket technology
- **Multi-user support** - Multiple users can chat simultaneously
- **User management** - Live online users list with join/leave notifications
- **Connection status** - Visual indicators showing connection state
- **Message validation** - Input sanitization and length restrictions
- **Username uniqueness** - Prevents duplicate usernames in chat rooms

### User Experience
- **Responsive design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean interface with smooth animations and transitions
- **Toast notifications** - Real-time feedback for user actions
- **Message timestamps** - Shows when each message was sent
- **Auto-scroll** - Automatically scrolls to newest messages
- **Typing indicators** - Visual feedback during message composition

### Security & Performance
- **Input validation** - Server-side validation for all user inputs
- **Rate limiting** - Prevents spam and abuse
- **Error handling** - Comprehensive error management and recovery
- **Connection recovery** - Automatic reconnection on network issues
- **XSS protection** - Secure message rendering and display

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript** - ES6+ features with class-based architecture
- **Socket.IO Client** - Real-time bidirectional communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Socket.IO** - Real-time engine with WebSocket and polling fallback
- **HTTP Server** - Built-in Node.js HTTP server

## 📁 Project Structure

\`\`\`
realtime-chat-app/
├── public/                 # Frontend static files
│   ├── index.html         # Main HTML structure
│   ├── styles.css         # All CSS styles and animations
│   └── client.js          # Frontend JavaScript logic
├── server.js              # Backend server with Socket.IO
├── package.json           # Dependencies and npm scripts
└── README.md             # Project documentation
\`\`\`

## 🚦 Getting Started

### Prerequisites
- **Node.js** (version 14.0.0 or higher)
- **npm** (comes with Node.js)
- Modern web browser with WebSocket support

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/realtime-chat-app.git
   cd realtime-chat-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the server**
   \`\`\`bash
   npm start
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3001`

5. **Start chatting**
   - Enter a unique username (2-20 characters, alphanumeric and underscore only)
   - Click "Join Chat" to enter the chat room
   - Start sending messages and see them appear in real-time

### Development Mode

For development with automatic server restart on file changes:

\`\`\`bash
npm run dev
\`\`\`

## 🎯 Usage Guide

### Joining the Chat
1. Enter a unique username in the login screen
2. Wait for the connection status to show "Connected"
3. Click "Join Chat" to enter the chat room

### Sending Messages
1. Type your message in the input field at the bottom
2. Press Enter or click the "Send" button
3. Your message will appear instantly for all connected users

### User Management
- View all online users in the left sidebar
- See real-time join/leave notifications
- Your username is highlighted in the users list

### Leaving the Chat
- Click the "Leave Chat" button in the top-right corner
- You'll be returned to the login screen for potential rejoin

## 🔧 Configuration

### Server Configuration
You can modify these settings in `server.js`:

\`\`\`javascript
const PORT = process.env.PORT || 3001  // Server port
const pingTimeout = 60000              // Connection timeout
const pingInterval = 25000             // Ping interval
\`\`\`

### Client Configuration
Modify connection settings in `client.js`:

\`\`\`javascript
const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling"],
  timeout: 5000,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
})
\`\`\`

## 📊 API Endpoints

### Health Check
- **GET** `/health` - Returns server status and connected users count
- **GET** `/stats` - Returns detailed server statistics

Example response:
\`\`\`json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "connectedUsers": 5
}
\`\`\`

## 🔒 Security Features

### Input Validation
- Username validation (2-20 characters, alphanumeric + underscore)
- Message length limits (max 500 characters)
- HTML/XSS protection through proper escaping

### Rate Limiting
- Message rate limiting (10 messages per minute per user)
- Connection rate limiting to prevent abuse
- Automatic disconnection for suspicious activity

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** with WebSocket support

## 🚀 Deployment

### Local Deployment
The application runs on `localhost:3001` by default.

### Production Deployment
1. Set the `PORT` environment variable
2. Configure CORS settings for your domain
3. Use a process manager like PM2 for production
4. Consider using a reverse proxy (nginx) for better performance

### Environment Variables
\`\`\`bash
PORT=3001                    # Server port
NODE_ENV=production         # Environment mode
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ES6+ JavaScript standards
- Maintain consistent code formatting
- Add comments for complex functionality
- Test thoroughly before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Connection Problems:**
- Ensure the server is running on the correct port
- Check firewall settings
- Verify WebSocket support in your browser

**Performance Issues:**
- Monitor server resources and memory usage
- Check network connectivity and latency
- Review rate limiting settings if messages are delayed

**Username Issues:**
- Usernames must be 2-20 characters
- Only alphanumeric characters and underscores allowed
- Each username must be unique in the chat room

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review the code comments for implementation details

## 🎉 Acknowledgments

- Socket.IO team for the excellent real-time communication library
- Express.js community for the robust web framework
- Contributors and testers who helped improve this application

---

**Built with ❤️ using Node.js and Socket.IO**
\`\`\`


