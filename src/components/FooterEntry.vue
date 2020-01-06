<template lang="pug">
  .foot-entry
    video(playsinline autoplay muted loop)
      source(src="/static/images/common/footer-entry.mp4" type="video/mp4")
      source(src="/static/images/common/footer-entry.webm" type="video/webm")
    b-container
      b-row(align-v="center")
        b-col(lg='9')
          h2.foot-entry__title 社会に変革をもたらす<br>ヒトと企業を加速する
          p 私たちは、ミッションである「社会に変革をもたらすヒトと企業を加速する」を着実に実現してきました。<br>しかし、まだまだご支援したい企業・IT人材のため、実現したいサービス、チャレンジしたい事業があり、私たちの挑戦は続きます。<br>ともに挑戦し、アイムファクトリーの未来を創るトップリーダーとして活躍してください。
        b-col(lg='3')
          b-button(size="lg" variant='aimred' squared) ENTRY
</template>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.foot-entry {
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  color: #fff;
  text-align: center;
  margin-top: 5rem;
  background: var(--primary);
  &__title {
    line-height: 1.4;
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 2rem;
  }
  video {
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    background: url('/static/images/common/footer-entry.jpg') no-repeat;
    background-size: cover;
    z-index: -1;
    z-index: 1;
    opacity: 0.4;
  }
  .container{
    position: relative;
    z-index: 2;
  }
  .col-lg-3{
    padding-top: 2rem;
  }
  @include media-breakpoint-up(lg) {
    video {
      min-width: 100%;
    }
    text-align: left;
    &__title {
      font-size: 3rem;
    }
  }
}
.embed-container {
  height: 0;
  overflow: hidden;
  max-width: 100%;
  padding-bottom: 56.25%; /* 16:9 の高さなので 56.25% (= 9 ÷ 16) */
  position: relative;
}

.embed-container iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
