<template lang='pug'>
  #app
    router-view(name='header')
    main
      router-view
    router-view(name='footer')
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='sass'>

</style>
