
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
    entry: './src/js/index.js', 
    output: {
        filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), 
        clean: true,
        publicPath: './',
        assetModuleFilename: 'assets/[name].[contenthash][ext][query]', 
        // assetModuleFilename: isProduction ? 'assets/[name].[contenthash][ext][query]' : 'assets/[name][ext][query]',
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [
                    // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {

                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src/scss')],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext][query]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: isProduction ? {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            } : false,
        }),
        isProduction && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ].filter(Boolean),
    optimization: {
        minimize: isProduction,
        minimizer: [
            new CssMinimizerWebpackPlugin(), 
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
};