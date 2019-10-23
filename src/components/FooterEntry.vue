<template lang="pug">
  .foot-entry
    video(src="https://vimeo.com/333834999" poster="//into-the-program.com/asset/video/header-video.png" autoplay loop muted)
    b-container
      b-row(align-v="center")
        b-col(lg='9')
          h1.foot-entry__title 社会に変革をもたらす<br>ヒトと企業を加速する
          div 私たちは、ミッションである「社会に変革をもたらすヒトと企業を加速する」を着実に実現してきました。<br>しかし、まだまだご支援したい企業・IT人材のため、実現したいサービス、チャレンジしたい事業があり、私たちの挑戦は続きます。<br>ともに挑戦し、アイムファクトリーの未来を創るトップリーダーとして活躍してください。
        b-col.text-right
          b-button(size="lg") ENTRY
</template>

<style lang="scss" scoped>
.foot-entry {
  margin-top: 10rem;
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  color: #fff;
  &__title {
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  &::before {
    content: "";
    display: block;
    background: red;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.3;
  }
  video {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
}
</style>
