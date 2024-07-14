const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { dependencies } = require('./package.json');

const DEV_SERVER_PORT = 3000;

module.exports = {
    entry: './src/index.ts',
    // @TODO improve it by checking --env
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: DEV_SERVER_PORT,
        historyApiFallback: true,
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
        new ModuleFederationPlugin({
            name: 'app1',
            remotes: {
                app2: 'app2@http://localhost:3001/remoteEntry.js',
                // shared: 'shared@http://localhost:3003/remoteEntry.js',
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: dependencies['react-dom'],
                },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: dependencies['react-router-dom'],
                },
                'react-redux': {
                    singleton: true,
                    requiredVersion: dependencies['react-redux'],
                },
            },
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'App 1',
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
