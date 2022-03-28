import { createStore } from 'vuex'
import result from './result'
import calculator from './calculator'

const store = createStore({
    state:{
    },
    modules:{
        result,
        calculator
    }
})

export default store