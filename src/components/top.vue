<template>
<header class='b-header'>
    <h1>Расчет перегородок из пазогребневых плит</h1>
    <h2>Test task by ООО «СОФТУСЛУГИ»</h2>
</header>
</template>
<script>
export default {
    name: 'top',
}
</script>
<style lang='sass' scoped>
.b-header
    display: flex
    flex-direction: column
    align-items: center
.b-header h1
    border-bottom: 1px solid $fontColor
.b-header h2 
    margin-top: 30px
.b-header h2::after
    content: ''
    display: inline-block
    width: 20px
    height: 20px
    background: $fontColor
    border-radius: 50px
    margin-left: 20px
.b-header h2::before
    content: ''
    display: inline-block
    width: 20px
    height: 20px
    background: $fontColor
    border-radius: 50px
    margin-right: 20px
</style>