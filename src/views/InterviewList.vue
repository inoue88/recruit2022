<template lang='pug'>
.interview-list
  .interview-wrap
    b-container
      CardInterview(v-for='(n, index) in 2'
        :name='`${ list[index].name }`'
        :nameEn='`${ list[index].nameEn }`'
        :yearEntry='`${ list[index].yearEntry }`'
        :dep='`${ list[index].department }`'
        :title='`${ list[index].title }`'
        :id='`${ list[index].id }`'
          v-bind:key='list[index].id'
      )
  .interview-wrap.interview-wrap--rev-bg
    b-container
      CardInterview(v-for='(n, index) in 2'
        :name='`${ list[index + 2].name }`'
        :nameEn='`${ list[index + 2].nameEn }`'
        :yearEntry='`${ list[index + 2].yearEntry }`'
        :dep='`${ list[index + 2].department }`'
        :title='`${ list[index + 2].title }`'
        :id='`${ list[index + 2].id }`'
          v-bind:key='list[index + 2].id'
      )
  .interview-wrap
    b-container
      CardInterview(v-for='(n, index) in 2'
        :name='`${ list[index + 4].name }`'
        :nameEn='`${ list[index + 4].nameEn }`'
        :yearEntry='`${ list[index + 4].yearEntry }`'
        :dep='`${ list[index + 4].department }`'
        :title='`${ list[index + 4].title }`'
        :id='`${ list[index + 4].id }`'
          v-bind:key='list[index + 4].id'
      )
</template>
<script>
import interview from '@/api/interview.js'
import ScrollOut from 'scroll-out'
import CardInterview from '@/components/CardInterview.vue'

export default {
  name: 'InterviewList',
  components: {
    CardInterview
  },
  computed: {
    list: () => interview.fetch()
  },
  mounted () {
    ScrollOut({
      once: true,
      targets: '.interview-wrap'
    })
  }
}
</script>

<style lang='scss' scoped>
.interview-wrap{
  position: relative;
  margin-bottom: 12rem;
  &:after{
    position: absolute;
    top: 5rem;
    left: 0;
    content: "";
    display: block;
    height: 100%;
    width: 0%;
    background: #F0F1F7;
    z-index: -1;
    transition: all 1s 100ms ease;
  }
  &.interview-wrap--rev-bg{
    &:after{
      left: inherit;
      right: 0;
    }
  }
  &[data-scroll="in"]{
    &:after{
      width: 86%;
    }
  }
}

</style>
