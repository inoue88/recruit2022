<template lang="pug">
  .CultureTitle
    .CultureTitle__img
      img(src="https://picsum.photos/1024/480/?image=10")
    .CultureTitle__body
      h1 {{Title}}
      span {{TitleSub}}
      p.CultureTitle__txt {{Txt}}
</template>

<script>
export default {
  name: "HeaderTitle",
  props: ["Title", "TitleSub", "Txt"]
};
</script>

<style lang="scss" scoped>
.CultureTitle {
  position: relative;
  margin-bottom: 5rem;
  height: 360px;
  &__img {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 1200px;
    width: 85.7142857143vw;
    height: 360px;
    img {
      width: 120%;
    }
  }
  &__body {
    background: var(--white);
    padding: 3rem 6rem;
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 78px;
    width: 60vw;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 0;
  }
  &--rev {
    background: red;
  }
}
</style>
