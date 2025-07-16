const express = require('express');
const qrcode = require('qrcode-terminal');

const app = express();
const PORT = process.env.PORT || 3000;

// Print QR code to console when app starts
console.log('\nScan this QR code to open WhatsApp Web:\n');
qrcode.generate('https://web.whatsapp.com/', { small: true });

app.get('/', (req, res) => {
  res.send(`
    <h1>WhatsApp Web QR</h1>
    <p>Check your deployment logs for the QR code to open WhatsApp Web.</p>
    <a href="https://web.whatsapp.com/" target="_blank">Open WhatsApp Web</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
