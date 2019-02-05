const pkg = require('./package');

module.exports = {

    /*
    ** Run app in 'universal' (ssr)
    ** or 'spa' mode
    */
    mode: 'universal',

    /*
    ** Headers of the page
    ** taken from package.json
    */
    head: {
        title: pkg.name,
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description,
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {
        color: '#3B8070',
    },

    /*
    ** Global CSS
    */
    css: [
        './../static/dist/main.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],

    /*
    ** Axios module configuration
    */
    axios: {
    // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Workbox configuration
    */
    workbox: {
    // https://pwa.nuxtjs.org/modules/workbox
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },
};
