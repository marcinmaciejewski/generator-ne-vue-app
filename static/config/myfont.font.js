const config = require('./config');

module.exports = {
    // 'files' property expects an Array
    files: [config.svg],
    fontName: config.fontName,
    classPrefix: `${config.fontName}-`,
    baseSelector: `.${config.fontName}`,
    types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
    fileName: 'fonts/app.[fontname].[chunkhash].[ext]',
};
