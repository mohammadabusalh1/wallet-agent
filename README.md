# 💬 Jarafi WhatsApp Wallet Agent

A powerful WhatsApp chatbot that lets users create a wallet, view balances, send and swap stablecoins — all within a WhatsApp conversation.

---

## 📦 Features

✅ Create Wallet (via GetPara)  
✅ View Wallet Address  
✅ Check Stablecoin Balance (cUSD, cEUR, etc.)  
✅ Send Funds to Another Address  
✅ Swap Between Stablecoins  
✅ PIN-secured Transactions  
✅ Smart Natural Language Command Parsing  
✅ Linked to WhatsApp Phone Number

---

## ⚙️ Tech Stack

| Layer      | Tech                                                   |
| ---------- | ------------------------------------------------------ |
| BOT        | [WhatsApp bot framework](https://github.com/pedroslopez/whatsapp-web.js) |
| Wallet SDK | [@getpara](https://docs.getpara.com/)                  |
| Backend    | Node.js + Express                                      |
| Database   | MongoDB                                                |
| Auth       | Phone number + PIN                                     |
| Logging    | Pino (structured logs)                                 |

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-org/jarafi-whatsapp-agent.git
cd jarafi-whatsapp-agent

# Install dependencies
npm install

# Create your .env config
touch .env
```

## 🔑 .env Example

```env
# Messaging
PORT=3000

# Twilio WhatsApp
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# GetPara SDK
GETPARA_API_KEY=your_getpara_api_key

# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/whatsapp-agent

# Security
ENCRYPTION_SECRET=super_secret_phrase

# Optional
OPENAI_API_KEY=sk-...
```

## 🚦 Running the App

```bash
# Start dev server
npm run dev

# Or start in production
npm start
```

## 📄📦🧱 Project Structure

```
wallet-agent/
│
├── index.js # App entry point
├── .env # Environment variables
├── .gitignore
├── README.md
│
└── src/
    ├── bot/ # WhatsApp message parser + handler
    ├── wallet/ # GetPara SDK logic (create, balance, send, swap)
    ├── commands/ # Command logic
    ├── auth/ # PIN setup, session validation
    ├── db/ # MongoDB connection + user models
    └── utils/
```

## ✨ How It Works

1. User sends WhatsApp message
   - Twilio forwards the message to our /webhook endpoint.

2. Bot interprets message
   - A command parser detects intent (e.g. create wallet, send 5 cUSD, etc.).

3. Wallet action is triggered
   - Using GetPara SDK, we execute the action (create wallet, send token, etc.).

4. User receives a WhatsApp response
   - The bot replies with the result — wallet address, success confirmation, etc.

## 📲 Supported Commands

| Command | Description |
|---------|-------------|
| create wallet | Initializes a new wallet tied to the WhatsApp number |
| my address | Returns the user's wallet address |
| balance | Displays stablecoin balances |
| send 5 cUSD to 0x... | Transfers tokens |
| swap 10 cUSD to cEUR | Swaps tokens using backend logic |
| help | Lists available commands |

Advanced NLP and command validation planned for v2.

## 🔐 Security

- Wallets are generated per user via the GetPara SDK.
- Users must set a 6-digit PIN before performing sensitive actions.
- Private keys are encrypted using AES-256 with a secret from .env.
- No blockchain private keys are stored in plain text.

## 🚧 Roadmap

### MVP ✅
- Wallet creation
- View address + balances
- PIN setup and auth
- Basic send functionality

### v1.1 (Next Sprint) 🔜
- Token swap
- Smart command parsing (NLP or regex fallback)
- Logging & error tracking (Sentry / LogSnag)
- Optional web dashboard

## 👨‍💻 Contributing

Pull requests and issue reports welcome!
Please fork the repo and use a feature branch.

```bash
git checkout -b feature/new-command
```

## 🧠 Credits

Built with ❤️ by the Jarafi Dev Team
Powered by GetPara, Twilio, and Node.js

## 📄 License

MIT © 2025 Jarafi
