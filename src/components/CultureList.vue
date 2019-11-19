<template lang="pug">
.culture-list
  b-img(v-bind:src="'/img/culture/' + Img + '.jpg'" class='culture-list__img' )
  .culture-list__body
    h3.culture-list__ttl {{Title}}
    p.culture-list__txt {{Txt}}
</template>

<script>
export default {
  name: "HeaderTitle",
  props: ["TitleEn", "TitleJa", "Title", "Txt", "Img"]
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.culture-list {
  margin: 1rem;
  &__img {
    width: 100%;
  }
  &__body {
    // background: #eee;
    padding: 1rem;
    // transform: translate(2rem, -5rem);
    // margin-bottom: -2rem;
  }
  &__ttl {
    font-family: Lato;
    font-weight: bold;
    line-height: 1.5;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    color: var(--gray);
  }
}
@include media-breakpoint-down(lg) {
}
</style>
