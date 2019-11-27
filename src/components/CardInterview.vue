<template lang="pug">
router-link.cardInterview(:to="`/interview/${ id }`" v-bind:class="`${ id % 2 ? '':'cardInterview--rev'}`" v-bind:key="`${ id }`")
  //- img(src='http://placehold.jp/600x400.png')
  b-img.cardInterview__image(v-bind:src="`/img/interview/0${ id }/image01.jpg`")
  .cardInterview__body
    h3.cardInterview__title(v-html='`${title}`')
    .cardInterview__count 0{{id}}
    div
      span.cardInterview__dep 2016年入/HRC事業部 CAチーム
    div
      span.cardInterview__name {{name}}
      span.cardInterview__name-en {{nameEn}}
</template>

<script>
export default {props: ['name', 'nameEn', 'yearEntry', 'title', 'id']}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';
.cardInterview {
  $parent: &;
  display: block;
  margin-bottom: 5rem;
  &--rev {
    flex-direction: row-reverse;
    #{$parent}__count {
      left: 0;
      right: unset;
    }
    // #{$parent}__body {
    //   padding: 6rem 3rem 0 0;
    // }
  }
  &__title {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  &__image {
    width: 100%;
  }

  &__dep {
    border: 1px solid var(--primary);
    color: var(--primary);
    display: inline-block;
    padding: 0.5rem;
  }
  &__count {
    position: absolute;
    color: var(--primary);
    right: 0;
    top: -18rem;
    line-height: 1;
    font-size: 3rem;
    letter-spacing: -0.1em;
    padding-left: 3rem;
    &:before {
      content: "case";
      font-size: 12px;
      position: absolute;
      left: 0;
      top: 0;
      letter-spacing: 0.1em;
    }
    &:after {
      content: "";
      position: absolute;
      transform: rotate(-50deg);
      display: block;
      width: 45px;
      height: 1px;
      background: var(--primary);
      left: 1rem;
      top: 1rem;
    }
  }
  &__body {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }
  @include media-breakpoint-up(lg) {
    margin-bottom: 10rem;
    display: flex;
    &--rev {
      #{$parent}__body {
        padding: 6rem 3rem 0 0;
      }
    }
    &__image {
      width: 50%;
    }
    &__title {
      font-size: 2rem;
      margin-bottom: auto;
    }
    &__count {
      top: 0;
    }
    &__body {
      padding: 6rem 0 0 3rem;
    }
  }
}
</style>
