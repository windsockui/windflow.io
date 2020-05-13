<template>
    <div class="container">
        <div>
            <logo/>
            <h2 class="subtitle">
                Launching your online business.
            </h2>
            <h2 class="subtitle">
                {{host}}
            </h2>
            <div class="links">
                <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        class="button--green"
                >
                    Documentation
                </a>
                <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        class="button--grey"
                >
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import axios from "axios";

    export default {
        components: {
            Logo
        },
        async fetch ({store,  params, req, res}) {

            try {
                //@TODO: HOW TO WE GET THE HOST IN HERE???
                const result = await axios.get('http://localhost:3000/datastore/data/www.windsockui.com');
                if (typeof result  === 'object') {
                    store.commit('pageData/setPage', result.data);
                    if (process.server) {
                        console.log(req.headers.host);
                        store.commit('metaData/setHost', req.headers.host);
                    }
                    return {}
                }
                throw "Unexpected result from server"
            } catch (error) {
                console.error("Fetching the data failed");
                console.error(error);
            }
        },
        computed: {
            host: function() {
                return this.$store.state.metaData.host
            }
        },
        head() {
            return {
                //@TODO: This is ugly. Create nicer methods in the store
                title: this.$store.state.pageData.page.json.page.title + this.host
            }
        }
    }
</script>

<style>
    /* Sample `apply` at-rules with Tailwind CSS
    .container {
      @apply min-h-screen flex justify-center items-center text-center mx-auto;
    }
    */
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
