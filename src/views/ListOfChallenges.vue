<template>
  <div>
    <NavBar />
    <Challenge />
    <Challenge />
    <Challenge />
    <Challenge />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Challenge from '@/components/Challenge'

export default {
  components: {
    Challenge,
    NavBar
  }
}
</script>
