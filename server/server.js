const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const publicPath = '/';
const router = require('../routers');
let outputPath;
outputPath = path.resolve(process.cwd(), 'build');
app.use(publicPath, express.static(outputPath));

app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();
const log = require('aditya-logger');
log.info('Successful log', { meta: 1 });
log.warn('Warning');
log.error('Error');
log.error(new Error('Oops something went wrong'));

const crossMiddleware = cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Origin',
        'Content-type',
        'Content-Length',
        'Authorization',
        'Accept',
        'X-Requested-With'],
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200
});

app.use(crossMiddleware);
app.use('*', crossMiddleware);
app.use('/api', router);

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
});
app.get('/log', (req, res) => {
    res.send('Hello');
});

const PORT = 5050;
app.listen(PORT, () => {
    console.log('Server listening at port ', PORT);
})