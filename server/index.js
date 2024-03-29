const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('./../public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./../index.html'));
});

app.listen(port, () => {
    console.log("It's running");
});




console.log(`The server is running on port: ${port}`);
