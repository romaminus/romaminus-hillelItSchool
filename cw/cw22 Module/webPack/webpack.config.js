const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js',
        // publicPath: '/',
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                        ['@babel/preset-env']
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                    "style-loader",
                  // Translates CSS into CommonJS
                    "css-loader",
                  // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}