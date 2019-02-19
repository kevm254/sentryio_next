const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('received a request');
    res.send('this is data sent back');
});

app.post('/', (req, res) => {
    console.log('within post');
    console.log(req.body);
    res.send('thanks for that data');
});

app.set('port', 5000);
const port = app.get('port');

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});