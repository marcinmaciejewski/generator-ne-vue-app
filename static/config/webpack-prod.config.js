const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');

module.exports = merge(webpackBaseConfig, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    // This plugin allows to extract compiled
                    // .scss files to separate file
                    // Plugin is added in webpack base config
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        // Make sure ./dist/ is cleared
        // before every build
        // allowExternal flag - allow the plugin to clean folders outside of the webpack root.
        new CleanWebpackPlugin(['../dist'], {allowExternal: true}),
    ],
});
