<template lang="pug">
  div
    router-link.interview-list(v-for="(item, index, n) in Interview" v-bind:key="item.id" v-bind:to="/interview/01")
      img(src='http://placehold.jp/600x400.png')
      .interview-list__body
        h3.interview-list__title(v-html="item.Title")
        div
          span.interview-list__dep 2016年入/HRC事業部 CAチーム  
        div
          span.interview-list__name {{item.Name}}
          span.interview-list__name-en {{item.NameEn}}
        .interview-list__count 01
</template>

<script>
import Interview from "../api/Interview.json";
export default {
  name: "InterviewList",
  props: ["Title", "Name", "Department", "DataNum"],
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
  display: block;
  margin-bottom: 15rem;
  display: flex;

  &__title {
    line-height: 1.6;
  }
  // &__img {
  //   // transform: translateY(-50%);
  // }
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
    top: 0;
    line-height: 1;
    font-size: 3rem;
    letter-spacing: -0.1em;
    &:before {
      content: "case";
      font-size: 12px;
      position: absolute;
      left: -2.5em;
      top: -1.4em;
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
      right: 1.8rem;
      top: 2px;
    }
  }
  &__body {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  @include media-breakpoint-up(lg) {
    &__body {
      padding-top: 6rem;
      padding-right: 5rem;
      padding-bottom: 0;
    }
    &__title {
      margin-bottom: auto;
    }
  }
}
</style>
