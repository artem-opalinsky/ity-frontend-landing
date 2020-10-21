<template>
  <div class="bg-frame">
    <b-button block variant="primary" size="lg">Don't have iToldYa yet? Try it now!</b-button>
    <Challenge />
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Challenge from '@/components/Challenge'

export default {
  components: { Challenge }
}
</script>

<style scoped>
.bg-frame{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
