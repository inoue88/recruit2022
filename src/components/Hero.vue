<template lang="pug">
.Hero
  video(playsinline autoplay muted loop)
    source(src="/static/images/common/hero.mp4" type="video/mp4")
    //- source(src="/static/images/common/footer-entry.webm" type="video/webm")
  .Hero__contain
     .Hero__message
        span 変革で世の中に影響を与え、
        span テクノロジーと企業が作る未来を紡ぐ
</template>

<script>

export default {
  data () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';

.Hero{
  height: 100vh;
  width: 100%;
  background: var(--primary);
  position: relative;
  overflow: hidden;
  &__contain{
    font-family: "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", "Noto Serif JP", serif;
    position: absolute;
    z-index: 1;
    font-size: 2.6rem;
    top: 46%;
    color: #fff;
    margin: 0 auto;
  }
  &__message{
    span{
      display: block;
      position: relative;
      margin-bottom: .5rem;
      &:after{
        content: '';
        width: 101%;
        height: 101%;
        position: absolute;
        top: -.5%;
        left: -.5%;
        background: #fff;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        transition-duration: 0s;
        transition-property: -webkit-transform;
        transition-property: transform;
      }
    }
  }
  @include media-breakpoint-up(lg) {
    &__contain{
      left: 5%;
    }
  }
}
video {
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: auto;
  min-width: 101%;
  min-height: 101%;
  background-size: cover;
  z-index: -1;
  z-index: 1;
  opacity: 0.6;
}
</style>
