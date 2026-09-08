const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    // Если есть index.html — отдаст его автоматически благодаря static
    // А если нет — покажет это сообщение
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            res.send('Привет! Это моё резюме!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});