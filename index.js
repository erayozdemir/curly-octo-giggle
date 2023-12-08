const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    res.send('Express.js ile merhaba dünya!');
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});

