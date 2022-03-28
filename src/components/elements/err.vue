<template>
    <div :class="errValue? 'b-err': 'hidden'">{{text}}</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'err',
    props:{
        text:{
            type: String
        }
    },
    computed:{
        ...mapState({
            errValue: state => state.result.errValue
        })
    }
}
</script>
<style lang='sass'>
.b-err
    color: yellow
    font-size: 30px
</style>