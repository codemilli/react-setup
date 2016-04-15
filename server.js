/**
 * Created by hckrmoon on 4/14/16.
 */

const path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    compiler = webpack(config),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    PORT = 3000,
    app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, './client/dist')));
} else {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
    app.use(express.static(path.resolve(__dirname, './client/public')));
}

app.use(express.static(`${__dirname}/client/`));
app.get('/*', (req, res, next) => {
    if (req.accepts('html')) {
        res.sendFile(`${__dirname}/client/index.html`);
    } else {
        next();
    }
});

app.listen(PORT, () => {
    console.log(`app running on PORT ${PORT}`);
});