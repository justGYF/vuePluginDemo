const state = {
    homeBut: true
}

const getters = {
    changeHomeBut: state => state.homeBut
}

const mutations = {
    ['changeHomeBut'] (state, { homeBut }) {
        state.homeBut = homeBut
    }
}

const actions = {
    changeHomeButStatus: ({commit}, payload) => {
        commit('changeHomeBut', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}