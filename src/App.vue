<template lang='pug'>
  #app
    router-view(name='header')
    router-view(name='title')
    main
      router-view
    router-view(name='footerEntry')
    router-view(name='footer')
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='sass'>

</style>
