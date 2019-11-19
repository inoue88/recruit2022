<template lang="pug">
  div
    router-link.interview-list(
      v-for="(item, index, n) in Interview"
      v-bind:key="item.id" :to="item.path"
      v-bind:class="{'interview-list--rev': index % 2 !== 0 }")
      b-img.interview-list__img(v-bind:src='`/img/interview/image0${index +1 }.jpg`')
      //- b-img(v-bind:src="'/img/about/image01.jpg'")
      .interview-list__body
        h3.interview-list__title(v-html="item.Title")
        div
          span.interview-list__dep {{item.YearEntry}} / {{item.Department}}
        div
          h3.interview-list__name {{item.Name}}
          span.interview-list__name-en {{item.NameEn}}
        .interview-list__count 0{{index +1 }}
</template>

<script>
// import InterviewData from "../api/Interview.json";
import Interview from "../api/Interview.json";
export default {
  name: "InterviewList",
  // props: ["Title", "Name", "Department", "DataNum"],
  data() {
    return {
      Interview: Interview
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";

.interview-list {
  $parent: &;
  display: block;
  margin-bottom: 15rem;
  display: flex;
  color: var(--body-color);
  &--rev {
    flex-direction: row-reverse;
    #{$parent}__count {
      left: 0;
      right: unset;
    }
    #{$parent}__body {
      padding: 6rem 2rem 0 0;
    }
  }

  &__title {
    line-height: 1.6;
  }
  &__dep {
    border: 1px solid var(--primary);
    color: var(--primary);
    display: inline-block;
    padding: 0.5rem 3rem;
  }
  &__count {
    position: absolute;
    color: var(--primary);
    right: 0;
    top: 0;
    line-height: 1;
    font-size: 3rem;
    padding-left: 2.4rem;
    padding-top: 1rem;
    letter-spacing: 2px;
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
      position: relative;
      transform: rotate(-50deg);
      display: block;
      width: 45px;
      height: 1px;
      background: var(--primary);
      right: 1.8rem;
      top: -2.4rem;
    }
  }
  &__body {
    position: relative;
    padding: 6rem 0 0 2rem;
    display: flex;
    flex-direction: column;
  }
  &__name {
    display: inline-block;
    margin-top: 1rem;
  }
  &__name-en {
    padding-left: 1rem;
  }
  @include media-breakpoint-up(lg) {
    &__body {
    }
    &__img {
      max-width: 630px;
    }
    &__title {
      margin-bottom: auto;
    }
  }
}
</style>
