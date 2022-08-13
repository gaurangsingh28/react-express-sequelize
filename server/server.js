const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const publicPath = '/';
let outputPath;
outputPath = path.resolve(process.cwd(), 'build');
app.use(publicPath, express.static(outputPath));
app.use(bodyParser.urlencoded({ extended: false }));

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
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
});

const PORT = 5050;
app.listen(PORT,()=>{
    console.log('Server listening at port ', PORT);
})