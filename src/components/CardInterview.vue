<template lang="pug">
router-link.cardInterview(:to="`/interview/${ id }`" v-bind:key="`${ id }`" v-bind:class="`${ classRev }`" data-scroll)
  .cardInterview__image
    div(:style="{ backgroundImage: 'url(' + imageUrl(`${id}`) + ')' }")
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
  props: ['name', 'nameEn', 'yearEntry', 'title', 'id', 'dep', 'classRev'],
  methods: {
    imageUrl: function (id) {
      return '/static/images/interview/0' + id + '/image01.jpg'
    }
  },
  mounted () {
    ScrollOut({
      once: true,
      targets: '.cardInterview__image'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';
.cardInterview {
  $parent: &;
  display: block;
  &:hover{
    text-decoration: none;
    color: var(--primary);
    #{$parent}__image div {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: .8;
      transition-duration: 1s;
    }
  }
  &__title {
    font-size: 1.4rem;
    line-height: 1.4;
  }
  &__image {
    width: 100%;
    padding-top: 50%;
    background: var(--primary);
    position: relative;
    overflow: hidden;
    >div{
      width: 100%;
      height: 100%;
      position: absolute;
      background-size: cover;
      top: 0;
      left: 0;
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      transition-duration: 2s;
    }
  }
  &__image[data-scroll="in"] div{
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  &__name{
    font-size: 1.5rem;
  }
  &__name-en{
    padding-left: 1rem;
    text-transform: uppercase;
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
    top: -2rem;
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
    padding: 1rem 0 0;
  }
  @include media-breakpoint-up(lg) {
    &--large{
      margin-bottom: 10rem;
      display: flex;
      #{$parent}__image {
        width: 60%;
        padding-top: 36%;
        margin-bottom: 0;
      }
      #{$parent}__title {
        font-size: 2rem;
        margin-bottom: 3rem;
      }
      #{$parent}__count {
        top: 0;
        right: 2rem;
      }
      #{$parent}__body {
        padding: 5rem 0 0 3rem;
        width: 45%;
      }
      &-rev {
        flex-direction: row-reverse;
        #{$parent}__body {
          padding: 5rem 3rem 0 0 ;
          width: 45%;
        }
      }
    }
  }
}
</style>
