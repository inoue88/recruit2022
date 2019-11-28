<template lang="pug">
  .foot-entry
    video(src="/static/images/common/footer-entry.mp4" poster="//into-the-program.com/asset/video/header-video.png" autoplay loop muted)
    b-container
      b-row(align-v="center")
        b-col(lg='9')
          h1.foot-entry__title 社会に変革をもたらす<br>ヒトと企業を加速する
          p 私たちは、ミッションである「社会に変革をもたらすヒトと企業を加速する」を着実に実現してきました。<br>しかし、まだまだご支援したい企業・IT人材のため、実現したいサービス、チャレンジしたい事業があり、私たちの挑戦は続きます。<br>ともに挑戦し、アイムファクトリーの未来を創るトップリーダーとして活躍してください。
        b-col
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
  &__title {
    line-height: 1.4;
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 2rem;
  }
  &::before {
    content: "";
    display: block;
    background: var(--primary);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.4;
  }
  video {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
  @include media-breakpoint-up(lg) {
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
