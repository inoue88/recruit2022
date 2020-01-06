<template lang="pug">
router-link.interview-list(
  :to="`/interview/${ id }`"
  v-bind:class="`${ id % 2 ? '':'interview-list--odd'}`"
  v-bind:key="`${ id }`" data-scroll)
  //- b-img.interview-list__image(v-bind:src="`/img/interview/0${ id }/image01.jpg`")
  figure.interview-list__image
    b-img(v-bind:src="`/static/images/interview/0${ id }/image01.jpg`")
  .interview-list__body
    .interview-list__count 0{{id}}
    div
      span.interview-list__dep 2016年入社/HRC事業部 CAチーム
    h3.interview-list__name {{name}}
      span.interview-list__name-en {{nameEn}}
</template>

<script>
import ScrollOut from 'scroll-out'
export default {
  props: ['name', 'nameEn', 'yearEntry', 'title', 'id'],
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
@import "../assets/scss/custom.scss";
.interview-list {
  $parent: &;
  display: block;
  margin-bottom: 3rem;
  &:hover{
    text-decoration: none;
    color: var(--primary);
    figure img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: .8;
    }
  }
  &__wrap{
    width: 100%;
    background: #ccc;
  }
  // &__image {
  //   display: block;
  //   width: 100%;
  //   margin-bottom: 1rem;
  // }
  &__name {
    margin-top: .5rem;
  }
  &__name-en {
    margin-left: 1rem;
    font-weight: normal;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
  &__image {
    width: 100%;
    padding-top: 60%;
    background: var(--primary);
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: .6s ease-in-out;
      transition: .6s ease-in-out;
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
    }
  }
  &__dep {
    border: 1px solid var(--primary);
    color: var(--primary);
    display: inline-block;
    padding: 0.2rem .4rem;
    font-size: 0.8125rem
  }
  &__count {
    position: absolute;
    color: var(--primary);
    right: 0;
    top: -17rem;
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
    display: flex;
    flex-direction: column;
  }
  @include media-breakpoint-up(md) {
    margin: 1rem;
    &--odd {
      margin-top: 10rem;
      margin-bottom: 0;
    }

    &__title {
      margin-bottom: auto;
    }
    &__count {
      top: 0;
    }
  }
}
</style>
