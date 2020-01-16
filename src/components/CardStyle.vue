<template lang='pug'>
.card-style
  //- b-img(v-bind:src="'/static/images/culture/image0' + id + '.jpg'" class='card-style__img' )
  .card-style__img(:style="{ backgroundImage: 'url(' + imageUrl(`${id}`) + ')' }")
  .card-style__body
    .card-style__count {{id}}
    h2.card-style__ttl {{title}}
    p.card-style__txt {{txt}}
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
      targets: '.card-style'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.card-style {
  overflow: hidden;
  &__img {
    width: 100%;
    padding-top: 60%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
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

// animation
.card-style {
  $parent: &;
  transform: translateY(50px);
  transition-duration: 2s;
  &__img {
    opacity: 0;
    background-color: var(--primary);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 2s;
  }
  &[data-scroll="in"] {
    transform: translateY(0);
    #{$parent}__img{
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
