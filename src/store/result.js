"use strict";

const result = {
    state:{
        viewResult: false,
        params:{
            length:[{name:'length',text: 'Введите общую длину стены-перегородки в метрах погонных:', type:'number', placeholder:"в метрах", value: null, validTest:"false"}],
            height:[{name:'height',text: 'Введите высоту её в метрах:', type:'number', placeholder:"в метрах", value: null, validTest:"false"}],
            opening:[{ name:'opening',text: 'Ширина проема', text2: 'Высота проема', type:'number', placeholder:"в метрах", value: null, value2: null, validTest:"false" }],
            priceBlock:[{name:'priceBlock',text: 'Цена за 1 блок:', type:'number', placeholder:"в рублях", value: null, validTest:"false"}],
            priceWork:[{name:'priceWork',text: 'Стоимость кладки одного блока', type:'number', placeholder:"в рублях", value: null, validTest:"false"}],
        },
        errValue: false
    },
    actions:{
        changeVisibilityA({commit}, values){
            commit('changeVisibilityM', values)
        },
        addOppeningA({commit}){
            commit('addOppeningM')
        },
        removeOppeningA({commit}){
            commit('removeOppeningM')
        },
        validDataA({commit}, values){
            commit('validDataM', values)
        },
    },
    mutations:{
        changeVisibilityM(state, values){
            state[`${values.valBlock}`] = values.valBool
        },
        addOppeningM(state){
            state.params.opening.push({ name: 'opening',text: 'Ширина проема', text2: 'Высота проема', type:'number', placeholder:"в метрах", value: null, value2:null, validTest:"false" })
        },
        removeOppeningM(state){
            let length = state.params.opening.length
            state.params.opening.splice((length - 1), length)
        },
        validDataM(state, values){
            state.params[`${values.name}`][`${values.index}`].value = values.value
            state.params[`${values.name}`][`${values.index}`].validTest = values.boolValue
        }
    }
}

export default result