<template>
  <div class="b-wrapper">
    <div class="b-container">
      <top/>
      <forms/>
      <result/>
    </div>
  </div>
</template>

<script>
import top from './components/top'
import result from './components/result'
import forms from './components/forms'
export default {
  name: 'App',
  components: { top, forms, result },
}
</script>

<style lang='sass' scoped>
.b-wrapper
  max-width: 1140px
  margin: 0 auto
  background: $background
  border-radius: 30px
.b-container
  padding: 30px
</style>
