const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './app.ts',
    devtool: 'inline-source-map',
    target: 'node',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),
    },
};
