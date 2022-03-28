<template>
    <form class="b-form" @submit.prevent="getResult" novalidate>   
          <div class="b-field-block">
            <div class="b-field">
              <field v-for="(el,i) of params.length" :key='i' :index="i" :dataField="el"/>
              <field v-for="(el,i) of params.height" :key='i' :index="i" :dataField="el"/>
            </div>
          </div>
          <div class="b-field-block">
            <h3>Проёмы (для дверей или других целей)</h3>
            <div class="b-field">
              <field v-for="(el,i) of params.opening" :key='i' :index="i" :dataField="el"/>
            </div>
            <btn :text="'Добавить проем'" :check="false" @click="addOppeningA"/>
            <btn :text="'Удалить проем'" :check="false" @click="removeOppeningA"/>
          </div>
          <div class="b-field-block">
          <h3>Скорректировать стоимость материалов и работ</h3>
            <div class="b-field">
              <field v-for="(el,i) of params.priceBlock" :key='i' :index="i" :dataField="el"/>
              <field v-for="(el,i) of params.priceWork" :key='i' :index="i" :dataField="el"/>
            </div>
          </div>
        <btn :text="'Произвести расчет'" :check="true"/>
        <err :text="'Please enter data correctly'"/>
      </form>
</template>
<script>
import btn from './elements/btn'
import field from './elements/field'
import err from './elements/err'
import { mapActions, mapState } from 'vuex'
export default {
    name:'forms',
    components: {  btn, field, err },
    methods:{
    ...mapActions(['changeVisibilityA', 'addOppeningA', 'removeOppeningA', 'getResultA']),
    getResult(){
        let result = true
        if(result === true){
          this.changeVisibilityA({valBool: true, valBlock: 'viewResult'})
          this.check()
        } else{
          this.changeVisibilityA({valBool: true, valBlock: 'errValue'})
        }
    },
    check(){
      for(let[key, value] of Object.entries(this.params)){
        console.log(key, value)
      }
    }
  },
  computed:{
    ...mapState({
      params: state => state.result.params,
    }),
  },
}
</script>
<style lang='sass' scoped>
.b-form
  display: grid
  grid-auto-rows: minmax(60px, auto)
  grid-gap: 20px
  border: 1px solid $fontColor
  margin-top: 30px
  padding: 30px
  border-radius: 10px
.b-field
  width: 80%
.b-btn-container
  margin-top: 10px
  margin-bottom: 10px
</style>