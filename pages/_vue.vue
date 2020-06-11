<template>
    <section class="bg-gray-100">
        <section ref="header" class="slanted-bottom bg-gray-600 h-96 background">
            <div class="container mx-auto flex pt-5 items-center">
                <div class="ubuntu text-xl md:text-2xl text-white">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512" class="text-teal-500 svg-inline--fa fa-circle mr-2"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>windflow.io</div><div class="flex-grow"></div>
                <div class="text-white text-xs mr-1">help</div>
                <div class="flex w-10 h-6 rounded-full bg-gray-300 inner-shadow cursor-pointer" @click="helpModeOn = !helpModeOn">
                    <div class="w-4 h-4 rounded-full mt-1 shadow transition" :class="{'ml-5 bg-blue-600':helpModeOn, 'ml-1 bg-blue-900':!helpModeOn}"></div>
                </div>
                <div class="text-white text-xs ml-5 mr-1">edit</div>
                <div class="flex w-10 h-6 rounded-full bg-gray-300 inner-shadow cursor-pointer" @click="editModeOn = !editModeOn">
                    <div class="w-4 h-4 rounded-full mt-1 shadow transition" :class="{'ml-5 bg-red-700':editModeOn, 'ml-1 bg-red-900':!editModeOn}"></div>
                </div>
            </div>
            <div class="container mx-auto mt-10 md:mt-16">
                <div class="text-center">
                    <span class="text-3xl md:text-5xl inter font-medium text-white">Craft an incredible <span class="whitespace-no-wrap"><wind-rewriter text="website, online shop, personal profile, portfolio, coffee roastery" class="w-64 inline-block text-left"/></span> <br/>
                        <span class="text-teal-500 text-2xl md:text-4xl">in minutes</span>
                    </span>
                </div>
            </div>
        </section>
        <section ref="helpAndSelect" class="relative -mt-24">
            <div class="flex flex-col md:flex-row container mx-auto">
                <div ref="left" class="relative justify-center flex flex-grow items-end">
                    <img ref="videoCircle" src="https://i.imgur.com/MBr64Wx.jpg" class="rounded-full w-48 h-48 bg-gray-200 border-4 border-white shadow-lg"/>
                    <div ref="helpCircle" class="absolute rounded-full w-12 h-12 bg-teal-700 text-teal-100 hover:bg-teal-500 hover:text-white cursor-pointer shadow-md border-4 border-white ml-40 mb-10 flex items-center justify-center transition"><fa icon="play" class="text-md" /></div>
                    <div ref="helpCircle" class="absolute rounded-full w-12 h-12 bg-teal-700 text-teal-100 hover:bg-teal-500 hover:text-white cursor-pointer shadow-md border-4 border-white ml-24 -mb-1 flex items-center justify-center transition"><fa icon="question" class="text-md" /></div>
                </div>
                <div ref="right" class="justify-center items-center flex flex-grow mt-10 md:mt-24">
                    <span>
                        <input ref="subdomain" type="text" placeholder="your-name" class="text-right ubuntu text-2xl md:text-4xl border-black w-32 md:w-64 xl:w-96 bg-transparent" ><span class="ubuntu text-2xl md:text-4xl">.windflow.io</span> <fa icon="check-circle" class="text-green-600 text-lg md:text-2xl ml-1 md:ml-2" />
                    </span>
                </div>
            </div>
        </section>
        <section class="flex bg-gray-100 pt-20 pb-3 pl-5 flex-no-wrap overflow-hidden bg-gray-100">
            <div class="flex flex-shrink-0 inline-block bg-white shadow-lg w-48 h-32 p-5 m-5 rounded-lg" v-for="i in 11">
                Testing 123
            </div>
        </section>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import axios from "axios";
    import WindRewriter from "../components/windRewriter";

    export default {
        data() {
            return {
                editModeOn : false,
                helpModeOn : false
            }
        },
        components: {
            WindRewriter,
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

