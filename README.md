
*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: D SIVA KUMAR

*INTERN ID*: CT06DH1140

*DOMAIN*: Full Stack Web Development

*DURATION*: 6 WEEEKS

*MENTOR*:NEELA SANTOSH

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
- **Leave chat functionality** - Easy exit and rejoin capability

### Security & Performance
- **Input validation** - Server-side validation for all user inputs
- **Error handling** - Comprehensive error management and recovery
- **Connection recovery** - Automatic reconnection on network issues
- **XSS protection** - Secure message rendering and display
- **Rate limiting ready** - Prepared for spam prevention implementation

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with Flexbox, animations, and responsive design
- **Vanilla JavaScript** - ES6+ features with class-based architecture
- **Socket.IO Client** - Real-time bidirectional communication (CDN)

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Socket.IO** - Real-time engine with WebSocket and polling fallback
- **HTTP Server** - Built-in Node.js HTTP server

## 📁 Project Structure
```
realtime-chat-app/
├── public/                 # Frontend static files directory
│   ├── index.html          # Main HTML structure and layout
│   ├── styles.css          # Complete CSS styles and animations
│   └── client.js           # Frontend JavaScript logic and Socket.IO client
├── server.js               # Backend Express server with Socket.IO integration
├── package.json            # Node.js dependencies and npm scripts
└── README.md               # Project documentation and setup guide
```
### File Descriptions

#### Frontend Files (`/public/`)
- **`index.html`** (Main HTML File)
  - Complete HTML structure with login and chat interfaces
  - Responsive meta tags and Socket.IO CDN integration
  - Semantic HTML elements for accessibility
  - Login form, chat interface, sidebar, and notification containers

- **`styles.css`** (Stylesheet)
  - Modern CSS with CSS3 features (Flexbox, Grid, animations)
  - Responsive design with mobile-first approach
  - Custom animations and transitions
  - Dark/light theme support with gradient backgrounds
  - Cross-browser scrollbar styling

- **`client.js`** (Frontend JavaScript)
  - ES6+ class-based architecture (`ChatClient` class)
  - Socket.IO client integration and event handling
  - DOM manipulation and user interface management
  - Real-time message handling and display
  - User validation and error handling
  - Notification system implementation

#### Backend Files
- **`server.js`** (Main Server File)
  - Express.js server setup and configuration
  - Socket.IO server integration with CORS support
  - User management and message handling
  - Input validation and security measures
  - Health check endpoints (`/health`)
  - Graceful shutdown handling

- **`package.json`** (Dependencies Configuration)
  - Node.js project metadata and configuration
  - Production dependencies (express, socket.io)
  - NPM scripts for development and production
  - Engine requirements and version specifications

#### Documentation
- **`README.md`** (Project Documentation)
  - Comprehensive setup and usage instructions
  - Feature descriptions and technical specifications
  - API documentation and configuration options
  - Troubleshooting guide and contribution guidelines

## 🚦 Getting Started

### Prerequisites
- **Node.js** (version 14.0.0 or higher)
- **npm** (comes with Node.js)
- Modern web browser with WebSocket support

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/sivakumar0412/CHAT APPLICATION.git
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

For development with file monitoring:

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
Modify connection settings in `public/client.js`:

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

Example response:
\`\`\`json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "connectedUsers": 5
}
\`\`\`

### Static Files
- **GET** `/index.html` - Serves the main chat application 
- **GET** `/styles.css` - Serves the stylesheet
- **GET** `/client.js` - Serves the client-side JavaScript

## 🔒 Security Features

### Input Validation
- Username validation (2-20 characters, alphanumeric + underscore)
- Message length limits (max 500 characters)
- HTML/XSS protection through proper escaping

### Connection Security
- CORS configuration for cross-origin requests
- Socket.IO transport security (WebSocket + polling fallback)
- Automatic disconnection handling for invalid users

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
- Ensure proper file serving from `/public` directory

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
## 📬 Contact
Feel free to reach out via email: [sivakumar041203@gmail.com](mailto:sivakumar041203@gmail.com)

Project Link: [https://github.com/yourusername/api-integration-dashboard](https://github.com/sivakumar0412/CHAT-APPLICATION)

---
**Built with ❤️ using Node.js and Socket.IO**
