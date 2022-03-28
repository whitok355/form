<template>
<div class="b-btn-container">
    <button v-if="check" class="b-btn">
        {{text}}
    </button>
    <div v-else class="b-btn">{{text}}</div>
</div>
</template>
<script>
export default {
    name:'btn',
    props:{
        text:{
            type: String,
        },
        check:{
            type: Boolean
        }
    }
}
</script>
<style lang='sass'>
.b-btn-container
    display: flex
    justify-content: center
.b-btn-container:hover
    cursor: pointer
.b-btn
    padding: 10px 40px
    background: grey
    border-radius: 10px
    color: $fontColor
    display: flex
    align-items: center
    border: none
    font-size: 20px
</style>