<template lang='pug'>
.culture
  b-container
    b-row
      b-col(v-for='(list) in list' v-bind:key='list.id' cols='12' lg='6')
        CardCulture(
          :title='`${list.title}`'
          :txt='`${list.txt}`'
          :id='`${list.id}`'
          )
</template>

<script>
import CardCulture from '../components/CardCulture.vue'
import culture from '@/api/culture.js'

export default {
  name: 'Culture',
  components: {
    CardCulture
  },
  computed: {
    list: () => culture.fetch()
  }
}
</script>

<style lang='scss' scoped>
</style>
