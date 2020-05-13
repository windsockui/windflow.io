export const state = () => ({
    host:'',
    path:'',
})

export const getters = {
    getHost: state => {
        return state.host;
    },
    getPath: state => {
        return state.path;
    }

};

export const mutations = {
    setHost(state, host) {
        state.host = host;
    }
}
