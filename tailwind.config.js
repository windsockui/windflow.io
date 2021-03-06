/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    purge: [
        './src/**/*.vue'
    ],
    theme: {
        container: {
            padding: '2rem',
        },
        extend: {
            spacing: {
                '96': '24rem',
                '128': '32rem',
                '160': '40rem',
            },
            width: {
                '3/10': '30%'
            }
        }
    },
    variants: {},
    plugins: []
}
