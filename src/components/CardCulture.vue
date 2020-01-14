<template lang='pug'>
.culture-list
  //- b-img(v-bind:src="'/static/images/culture/image0' + id + '.jpg'" class='culture-list__img' )
  .culture-list__img(:style="{ backgroundImage: 'url(' + imageUrl(`${id}`) + ')' }")
  .culture-list__body
    .culture-list__count {{id}}
    h2.culture-list__ttl {{title}}
    p.culture-list__txt {{txt}}
</template>

<script>
import ScrollOut from 'scroll-out'
export default {
  name: 'HeaderTitle',
  props: ['title', 'txt', 'id'],
  methods: {
    imageUrl: function (id) {
      return '/static/images/culture/image0' + id + '.jpg'
    }
  },
  mounted () {
    ScrollOut({
      once: true,
      targets: '.culture-list__img'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.culture-list {
  &__img {
    width: 100%;
    padding-top: 60%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0;
    background-color: var(--primary);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 2s;
  }
  &__img[data-scroll="in"] {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  &__body {
    padding: 1rem 0;
    margin-bottom: 2rem;
    position: relative;
  }
  &__ttl {
    font-family: Lato;
    font-weight: bold;
    line-height: 1.5;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
  }
  &__count {
    position: absolute;
    color: var(--primary);
    right: 1rem;
    top: -3rem;
    font-size: 8rem;
    font-weight: bold;
    line-height: 1;
    // z-index: -1;
    opacity: 0.2;
  }
  @include media-breakpoint-up(lg) {
    margin: 0 1rem;
  }
}
</style>
