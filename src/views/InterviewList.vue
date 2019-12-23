<template lang='pug'>
.interview-list
  b-container
    CardInterview(v-for='(list) in list'
      :name='`${ list.name }`'
      :nameEn='`${ list.nameEn }`'
      :yearEntry='`${ list.yearEntry }`'
      :dep='`${ list.department }`'
      :title='`${ list.title }`'
      :id='`${ list.id }`'
        v-bind:key='list.id'
    )
</template>
<script>
import interview from '@/api/interview.js'
import CardInterview from '@/components/CardInterview.vue'

export default {
  name: 'InterviewList',
  components: {
    CardInterview
  },
  computed: {
    list: () => interview.fetch()
  }
}
</script>

<style lang='scss' scoped>
// .interview-list{
//   padding: 3rem;
// }
</style>
