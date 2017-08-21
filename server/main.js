import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';

const app = express();
const port = 3000;
const devPort = 4000;

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect('elebit:4banana4@ds143201.mlab.com:43201/heroku_dqq6q70l');

app.use(session({
    secret: 'OHong2!@#$',
    resave: false,
    saveUninitialized: true
}));
app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/hello', (req,res) => {
   return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log("Express is listening on port: ", port);
});

app.use(function (err, req, res, next) {
    console.error(err, stack);
    res.status(500).send('Something Broke!')
});

if(process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler =webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port: ', devPort);
        }
    );
}