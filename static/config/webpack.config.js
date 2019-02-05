const HtmlWebPackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config');

const webpackBaseConfig = {
    entry: {
        main: config.scripts,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                // use enforce flag to make sure that eslint checks unbabeled files
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.font\.js/,
                use: [
                    // Needed to insert newly created font
                    // in styles file
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // Disable url() filtering
                            // https://github.com/webpack-contrib/css-loader#url
                            url: false,
                        },
                    },
                    {
                        loader: 'webfonts-loader',
                        options: {
                            // prefix for generated font links in main.css file
                            publicPath: './',
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Plugin allows to lint sa/css files
        // https://www.npmjs.com/package/sass-lint-webpack
        new SassLintPlugin(),
        new MiniCssExtractPlugin({
            // filename allwos styles file
            // to be extracted to separate file
            filename: 'main.css',
        }),
    ],
};

// Following part tells webpack to
// digest every template partial
// given in config object
const templates = config.templates;

templates.forEach((template) => {
    webpackBaseConfig.plugins.push(
        new HtmlWebPackPlugin({
            template: `src/${template}`,
            filename: template,
        })
    );
});

module.exports = webpackBaseConfig;
