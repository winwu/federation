const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DEV_SERVER_PORT = 3003;

module.exports = {
    entry: './src/index.tsx',
    // @TODO improve it by checking --env
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: DEV_SERVER_PORT,
        historyApiFallback: true,
        // headers: {
        //     // resolve webpack dev server CORS issue as reqeust from 3001 or 3002
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        //     'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        // },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.json'],
        // alias: {},
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                // Match .js, .jsx, .ts & .tsx files
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                options: {
                    // JavaScript version to compile to
                    target: 'es2015', // = ES6
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        /* new ModuleFederationPlugin({
            name: "shared",
            filename: "remoteEntry.js",
            exposes: {
              "./CustomButton": "./src/CustomButton.tsx",
              "./CustomLabel": "./src/CustomLabel.tsx",
            },
        }), */
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'shared component',
            template: './public/index.html',
        }),
    ],
    optimization: {
        minimizer: [
            new EsbuildPlugin({
                target: 'es2015', // Syntax to compile
                css: true, // Apply minification to CSS assets
            }),
        ],
    },
};
