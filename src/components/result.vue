<template>
<div class="b-calculation" v-if="viewResult">
    <h3>Разультат расчета</h3>
    <div class='b-result'>
        <ul class="b-result-list">
            <li>Пазогребневых гипсовых блоков:<span></span>р.</li>
            <li>Клея для блоков:<span></span></li>
            <li>Стоимость работы по кладке:<span></span>р.</li>
            <li>Вес всех плит составит:<span></span>кг.</li>
            <li>Нагрузка на метр погонный:<span></span> кг./м.п.</li>
        </ul>
    </div>
    <btn :text="'Скрыть расчет'" @click="changeVisibility()"/>
</div>
</template>

<script>
import btn from './elements/btn'
import  { mapState, mapActions } from 'vuex'
export default {
    name: 'calculation',
    components: { btn },
    computed:{
        ...mapState({
            viewResult: state => state.result.viewResult
        })
    },
    methods:{
        ...mapActions(['changeVisibilityA']),
        changeVisibility(){
            this.changeVisibilityA({valBool: false, valBlock: 'viewResult'})
        }
    }
}
</script>

<style lang='sass'>
.b-result-list
    margin: 30px 150px
.b-result-list li
    margin-top: 10px
    font-size: 1.5em
    color: $fontColor
.b-result-list span
    font-size: 1.7em
</style>