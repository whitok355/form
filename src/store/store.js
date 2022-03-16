import { createStore } from 'vuex'

const store = createStore({
    state:{
        isVisiblePopup: false,
        city: null,
        data:[
            {
                id: 1,
                name: "Москва"
            },
            {
                id: 2,
                name: "Санкт-Петербург"
            },
            {
                id: 3,
                name: "Казань"
            }
           ]
    },
    actions:{
        changeVisibleA({commit}, city){
            commit('changeVisibleM'),
            commit('postCityM', city)
        }
    },
    mutations:{
        changeVisibleM(state){
            state.isVisiblePopup = !state.isVisiblePopup;
        },
        postCityM(state, city){
            state.city = city
        }
    },
    getters:{

    },

})

export default store