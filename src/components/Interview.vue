<template lang='pug'>
.interview
  h1 Interview
  p {{$route.params.id}}
</template>

<script>
export default {
  name: 'Interview'
}
</script>

<style lang='scss' scoped>
.interview{
  padding: 3rem;
}
</style>
