export default {
    state: () => ({
        name: 'Nicollas Feitosa'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        }
    },
    actions: {
        setName({ commit }, data) {
            commit('SET_NAME', data)
        }
    },
}
