module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>',
    },
    collectCoverage: true,
    transform: {
        '^.+\\.js$': './node_modules/babel-jest',
        '.*\\.(vue)$': './node_modules/jest-vue-preprocessor',
    },
    globals: {
        version: true,
        configs: true,
    },
    verbose: true,
    testURL: 'http://localhost:2137/',
    coverageDirectory: './coverage/',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/.node/',
        '/jest/',
    ],
};
