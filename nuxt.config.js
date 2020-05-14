export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'nuxt-purgecss'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    proxy: [
        ['/datastore', {
            target: process.env.DATABASE_URL || 'http://localhost:8080',
            pathRewrite: {'^/datastore': '/'}
        }]
    ],
    purgeCSS: {
        whitelist: 'a, .font-mono .h-24 .h-36 .h-48',
        whitelistPatterns: [/svg.*/],
        purgeCSSInDev: true,
        enabled: true
    },
    /*
    ** Build configuration
    */
    build: {
        analyze:true,
        extractCSS: true,
        extend(config, ctx) {
        }
    },
    server: {
        host: "0.0.0.0"
    }
}
