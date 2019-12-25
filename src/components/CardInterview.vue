<template lang="pug">
router-link.cardInterview(:to="`/interview/${ id }`" v-bind:class="`${ id % 2 ? '':'cardInterview--rev'}`" v-bind:key="`${ id }`" data-scroll)
  figure.cardInterview__image
    b-img(v-bind:src="`/static/images/interview/0${ id }/image01.jpg`")
  .cardInterview__body
    h3.cardInterview__title(v-html='`${title}`')
    .cardInterview__count 0{{id}}
    div
      span.cardInterview__dep
        |{{ yearEntry }}入社/
        |{{ dep }}
    div
      span.cardInterview__name {{name}}
      span.cardInterview__name-en {{nameEn}}
</template>

<script>
import ScrollOut from 'scroll-out'
export default {
  props: ['name', 'nameEn', 'yearEntry', 'title', 'id', 'dep'],
  mounted () {
    ScrollOut({
      threshold: 0.2,
      once: true,
      onShown: function (el) {
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000)
      }
    })
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';
.cardInterview {
  $parent: &;
  display: block;
  margin-bottom: 5rem;
  &:hover{
    text-decoration: none;
    color: var(--primary);
    figure img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: .8;
    }
  }
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
    font-size: 2rem;
    line-height: 1.6;
  }
  &__image {
    width: 100%;
    padding-top: 50%;
    background: var(--primary);
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
    }
  }
  &__name{
    font-size: 1.5rem;
  }
  &__name-en{
    padding-left: 1rem;
  }
  &__dep {
    border: 1px solid var(--primary);
    color: var(--primary);
    display: inline-block;
    padding: 0.3rem;
    font-size: 0.8125rem;
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
        padding: 5rem 3rem 0 0;
      }
    }
    &__image {
    width: 50%;
    padding-top: 32%;
    }
    &__title {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    &__count {
      top: 0;
    }
    &__body {
      padding: 5rem 0 0 3rem;
      width: 45%;
    }
  }
}
</style>
