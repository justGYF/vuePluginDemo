const state = {
    homeBut: true,
    title: ''
}

const getters = {
    changeHomeBut: state => state.homeBut,
    getTitle: state => state.title
}

const mutations = {
    ['changeHomeBut'] (state, { homeBut }) {
        state.homeBut = homeBut
    },
    ['changeHomeTitle'] (state, { title }) {
        state.title = title
    }
}

const actions = {
    changeHomeButStatus: ({commit}, payload) => {
        commit('changeHomeBut', payload)
    },
    changeHomeTitle: ({commit}, payload) => {
        commit('changeHomeTitle', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}