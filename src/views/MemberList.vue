<template lang='pug'>
.interview-list
  .interview-wrap
    b-container
      CardMember(v-for='(n, index) in 2'
        :name='`${ list[index].name }`'
        :nameEn='`${ list[index].nameEn }`'
        :yearEntry='`${ list[index].yearEntry }`'
        :dep='`${ list[index].department }`'
        :title='`${ list[index].title }`'
        :id='`${ list[index].id }`'
        :key='list[index].id'
        :classRev='list[index].id  % 2 ? "cardInterview--large":"cardInterview--large cardInterview--large-rev"'
      )
  .interview-wrap.interview-wrap--rev
    b-container
      CardMember(v-for='(n, index) in 2'
        :name='`${ list[index + 2].name }`'
        :nameEn='`${ list[index + 2].nameEn }`'
        :yearEntry='`${ list[index + 2].yearEntry }`'
        :dep='`${ list[index + 2].department }`'
        :title='`${ list[index + 2].title }`'
        :id='`${ list[index + 2].id }`'
        :key='list[index + 2].id'
        :classRev='list[index].id  % 2 ? "cardInterview--large":"cardInterview--large cardInterview--large-rev"'
      )
  .interview-wrap
    b-container
      CardMember(v-for='(n, index) in 1'
        :name='`${ list[index + 4].name }`'
        :nameEn='`${ list[index + 4].nameEn }`'
        :yearEntry='`${ list[index + 4].yearEntry }`'
        :dep='`${ list[index + 4].department }`'
        :title='`${ list[index + 4].title }`'
        :id='`${ list[index + 4].id }`'
        :key='list[index + 4].id'
        :classRev='list[index].id  % 2 ? "cardInterview--large":"cardInterview--large cardInterview--large-rev"'
      )
</template>
<script>
import interview from '@/api/interview.js'
import ScrollOut from 'scroll-out'
import CardMember from '@/components/CardMember.vue'

export default {
  name: 'InterviewList',
  components: {
    CardMember
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
@import '../assets/scss/custom.scss';

.interview-wrap{
  position: relative;
  margin-bottom: 6rem;
  &:after{
    position: absolute;
    top: 2rem;
    left: 0;
    content: "";
    display: block;
    height: 100%;
    width: 0%;
    background: #F0F1F7;
    z-index: -1;
    transition: all 1s 100ms ease;
  }
  &.interview-wrap--rev{
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
  .cardInterview{
    margin-bottom: 3rem
  }
  @include media-breakpoint-up(lg) {
    margin-bottom: 12rem;
    &:after{
      top: 5rem;
    }
  }
}

</style>
