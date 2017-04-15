import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'This is ExpressJS with EJS!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listning on', config.port);
});