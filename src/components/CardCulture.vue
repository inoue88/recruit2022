<template lang='pug'>
.culture-list
  b-img(v-bind:src="'/static/images/culture/image0' + id + '.jpg'" class='culture-list__img' )
  .culture-list__body
    .culture-list__count {{id}}
    h2.culture-list__ttl {{title}}
    p.culture-list__txt {{txt}}
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: ['title', 'txt', 'id']
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.culture-list {
  &__img {
    width: 100%;
  }
  &__body {
    padding: 1rem;
    margin-bottom: 2rem;
    position: relative;
  }
  &__ttl {
    font-family: Lato;
    font-weight: bold;
    line-height: 1.5;
    font-size: 2rem;
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
    margin: 0 3rem;
  }
}
</style>
