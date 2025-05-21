require("dotenv").config();
const express = require("express");
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize WhatsApp client with LocalAuth
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
    }
});

// Generate QR Code
client.on('qr', (qr) => {
    console.log('QR Code received. Scan with WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Client Ready Event
client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

// Message Handler
client.on('message', async (message) => {
    const lowerCaseMsg = message.body.toLowerCase();

    switch (lowerCaseMsg) {
        case 'hi':
            await message.reply('👋 Hello! How can I help you today?');
            break;
        case 'help':
            await message.reply('Available commands:\n- hi: Say hello\n- help: Show this help message');
            break;
    }
});

// Initialize WhatsApp client
client.initialize();

// Express server setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// test route
app.get("/", (req, res) => {
    res.send("WhatsApp Bot Server Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
