<template>
    <section class="custom-shadow">
        <section ref="header" class="slanted-bottom bg-gray-600 h-96">
            <div class="container mx-auto flex pt-5">
                <div class="ubuntu text-2xl text-white"><fa icon="tint" class="text-md mr-2" />windflow.io</div><div class="flex-grow"></div>
                <div class="text-white">About | Edit</div>
            </div>
            <div class="container mx-auto mt-10 md:mt-16">
                <div class="text-center">
                    <span class="text-3xl md:text-5xl ubuntu font-medium text-white">craft an incredible online shop <br/>
                        <span class="text-gray-500">in minutes</span>
                    </span>
                </div>
            </div>
        </section>
        <section ref="helpAndSelect" class="relative -mt-24">
            <div class="flex flex-col md:flex-row container mx-auto">
                <div ref="left" class="relative justify-center flex flex-grow items-end">
                    <img ref="videoCircle" src="https://i.imgur.com/MBr64Wx.jpg" class="rounded-full w-48 h-48 bg-gray-200 border-4 border-white"/>
                    <div ref="helpCircle" class="absolute rounded-full w-12 h-12 bg-gray-300 border-4 border-white ml-40 mb-10 flex items-center justify-center"><fa icon="play" class="text-md" /></div>
                    <div ref="helpCircle" class="absolute rounded-full w-12 h-12 bg-gray-300 border-4 border-white ml-24 -mb-1 flex items-center justify-center"><fa icon="question" class="text-md" /></div>
                </div>
                <div ref="right" class="justify-center items-center flex flex-grow mt-10 md:mt-24">
                    <span>
                        <input ref="subdomain" type="text" placeholder="your-name" class="text-right ubuntu text-2xl md:text-4xl border-black w-32 md:w-64 xl:w-96" ><span class="ubuntu text-2xl md:text-4xl">.windflow.io</span> <fa icon="check-circle" class="text-green-600 text-lg md:text-2xl ml-1 md:ml-2" />
                    </span>
                </div>
            </div>
        </section>
        <section class="flex bg-gray-100 mt-20 pt-3 pb-3 pl-5 flex-no-wrap overflow-hidden">
            <div class="flex flex-shrink-0 inline-block bg-white shadow-lg w-48 h-32 p-5 m-5 rounded-lg" v-for="i in 11">
                Testing 123
            </div>
        </section>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import axios from "axios";

    export default {
        components: {
            Logo
        },
        mounted() {
            console.log ("focus")
            this.$refs.subdomain.focus();
        },
        async fetch ({store,  params, req, res}) {
            return
            try {
                if (process.server) {
                    store.commit('metaData/setHost', req.headers.host);
                    //const url = 'http://localhost:3000/datastore/data/' + req.headers.host + req.originalUrl;
                    const url = "https://windsockui-datastore.herokuapp.com/data/www.windsockui.com/"
                    const result = await axios.get(url);
                    if (typeof result  === 'object') {
                        store.commit('pageData/setPage', result.data);
                        return {}
                    }
                }
                throw "Unexpected result from server"
            } catch (error) {
                console.error("Fetching the data failed");
                console.error(error);
            }
        },
        computed: {
            host: function() {
                return this.$store.getters['metaData/getHost'];
            }
        },
        head() {
            return {
                title: this.$store.getters['pageData/getPageTitle']
            }
        }
    }
</script>

