<template lang="pug">
  .HeaderTitle
    .HeaderTitle__img
      img(src="https://picsum.photos/1024/480/?image=10")
    .HeaderTitle__wrap
      h1.HeaderTitle__main {{TitleJa}}
      span.HeaderTitle__sub {{TitleEn}}
</template>

<script>
export default {
  name: "HeaderTitle",
  props: ["TitleEn", "TitleJa"]
};
</script>

<style lang="scss" scoped>
.HeaderTitle {
  position: relative;
  height: 450px;
  margin-bottom: 7rem;
  text-align: center;
  background: var(--primary);
  &__img {
    overflow: hidden;
    width: 100%;
    height: 450px;
    opacity: 0.6;
    img {
      width: 100%;
      // margin: -50px 0 0 -120px;
    }
  }
  &__wrap {
    position: absolute;
    color: var(--white);
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
  }
  &__title {
    font-size: 40px;
    font-weight: 600;
  }
}
</style>
