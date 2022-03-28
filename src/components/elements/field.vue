<template>
    <div :class="dataField.text2 ? 'b-border': 'b-field-container'">
        <label class="b-field-label">{{dataField.text}} <input :class="dataField.validTest ? 'b-field-input' : 'b-field-input-red'" :placeholder="dataField.placeholder" v-model="value" @input="validData(value)"></label>
        <div :class="dataField.validTest? 'hidden' : 'msg-err'">Please check form, and enter value correctly</div>
        <label :class="dataField.text2 ? 'b-field-label' : 'hidden'">{{dataField.text2}} <input :class="dataField.validTest? 'b-field-input' : 'b-field-input-red'" :placeholder="dataField.placeholder" v-model="value2" @input="validData(value2)" ></label>
        <div v-if="dataField.text2" :class="dataField.validTest? 'hidden' : 'msg-err'">Please check form, and enter value correctly</div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex' 
export default {
    name:"field",
    props:{
        dataField:{
            type: Object
        },
        index:{
            type: Number
        }
    },
    data(){
        return{
            value: null,
            value2: null,
        }
    },
    methods:{
        ...mapActions(['validDataA']),
        validData(value){
            if(this.valid(value)){
                this.validDataA({value: value, name: this.dataField.name, index: this.index, boolValue: true})
            } else{
                this.validDataA({value: value, name: this.dataField.name, index: this.index, boolValue: false})
            }
        },
        valid(value){
            let regExp = /^\d+$/;
            return regExp.test(value)
        }
    },
    computed:{
        ...mapState({
            params: state => state.result.params
        })
    }
}
</script>
<style lang='sass' scoped>
.b-field-container
    margin-top:10px
    margin-bottom: 10px
.b-border:not(:first-child)
    border-top: 1px solid $fontColor
.b-field-label
    display: flex
    justify-content: space-between
    align-items: center
    color: $black
    font-size: 23px
    margin-top: 10px
    margin-bottom: 10px
.b-field-input
    padding: 5px 10px
    border-radius: 10px
.b-field-input-red
    padding: 5px 10px
    border-radius: 10px
    border: 5px solid black
.msg-err
    color: yellow
</style>