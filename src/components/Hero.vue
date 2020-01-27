<template lang="pug">
.Hero
  video(playsinline autoplay muted loop poster="/static/images/common/hero.jpg")
    source(src="/static/images/common/hero.mp4" type="video/mp4")
    source(src="/static/images/common/hero.mp4.webm" type="video/webm")
  .Hero__contain
     .Hero__message.Hero__message-1
        span AIM FACTORY
        span RECRUIT 2021
     .Hero__message.Hero__message-2
        span 変革で世の中に影響を与え、
        span テクノロジーと企業が作る<br>未来を紡ぐ
</template>

<script>
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
    position: relative;
    margin-top: 86%;
    margin-left: 1rem;
    z-index: 1;
    font-size: 1.4rem;
    padding: 0 1rem;
    color: #fff;
    height: 200px;
    width: auto;
  }
  &__message{
    position: absolute;
    top: 0;
    left: 0;
    span{
      width: 100%;
      float: left;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      transform: translateY(-50px);
      opacity: 0;
      animation-timing-function:ease;
      animation-duration: 3s;
    }
    &-1 span{
      animation-name: titleAnimation-1;
      animation-delay: 0.6s;
      -webkit-animation-fill-mode: forwards;
      &:first-child{
        animation-delay: 0.7s;
      }
      &:last-child{
        animation-delay: 0.5s;
      }
    }
    &-2 span{
      animation-name: titleAnimation-2;
      animation-delay: 5.1s;
      -webkit-animation-fill-mode: forwards;
      &:first-child{
        animation-delay: 5.2s;
      }
      &:last-child{
        animation-delay: 5s;
      }
    }
  }

  @include media-breakpoint-up(lg) {
    &__contain{
      margin-top: 30%;
      font-size: 2.4rem;
      left: 5%;
      br{
        display: none;
      }
    }
  }

  @keyframes titleAnimation-1 {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    80% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }

  @keyframes titleAnimation-2 {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
  }
}
video {
  position: absolute;
  right: -45%;
  top: 0;
  width: auto;
  height: auto;
  min-width: 101%;
  min-height: 101%;
  background-size: cover;
  z-index: -1;
  z-index: 1;
  opacity: 0.6;
  @include media-breakpoint-up(lg) {
    right: inherit;
    left: 0;
  }
}
</style>
