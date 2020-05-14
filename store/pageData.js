export const state = () => ({
    page: {}
})

export const getters = {
    getPage: state => {
        return state.page;
    },
    getPageTitle: state => {
        try {
            return state.page.json.page.title;
        } catch (e) {
            return null;
        }
    }
};

export const mutations = {
    setPage(state, page) {
        state.page = page;
    }
}
