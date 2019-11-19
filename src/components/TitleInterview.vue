<template lang="pug">
  .HeaderTitle
    .HeaderTitle__img
      b-img.interview-list__img(v-bind:src='`/img/interview/image01-header.jpg`')
    h1.HeaderTitle__title {{Title}}
      .HeaderTitle__line
</template>

<script>
export default {
  name: "HeaderTitle",
  props: ["Title"]
};
</script>

<style lang="scss" scoped>
.HeaderTitle {
  position: relative;
  height: 640px;
  margin-bottom: 7rem;
  background: var(--primary);
  &__img {
    overflow: hidden;
    width: 100%;
    height: 640px;
    opacity: 0.6;
    img {
      width: 100%;
    }
  }
  &__title {
    position: absolute;
    color: var(--white);
    padding-top: 4rem;
    width: 520px;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-570px, 0%);
    transform: translate(-570px, 0%);
    font-size: 40px;
    font-weight: normal;
  }
  &__line {
    content: "";
    display: block;
    width: 70%;
    border-bottom: 4px solid white;
    position: absolute;
    top: 0;
    transform: rotate(-10deg);
    &::before {
      content: "";
      display: block;
      width: 20%;
      border-bottom: 8px solid white;
      position: absolute;
      top: -20px;
    }
    &::after {
      content: "";
      display: block;
      width: 5%;
      border-bottom: 4px solid white;
      position: absolute;
      bottom: -20px;
      right: -5%;
    }
  }
}
</style>
