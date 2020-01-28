<template lang="pug">
.home
  Hero
  b-container
    .section-intro
      h2.section-intro__title 社会に変革をもたらす<br>ヒトと企業を加速する
      p アイムファクトリー株式会社は世の中に新しい価値を提供する<br class='wb'>【IT人材】に特化したビジネスを展開しています。
      p 変化が早いIT業界だから湧いてくる好奇心。<br>柔軟な思考と対応力を誇り、常に進化し続けるそれがアイムファクトリーです。
    .section.section--rev(data-scroll)
      .section__bg
        .section__img(:style="{ backgroundImage: 'url(/static/images/home/message.jpg)' }")
        .section__img-blind
      .section__body
        span.section__sub-title message
        h2.section__title 代表メッセージ
        p.small 次々に進化を続けるIT業界の変革スピード。IT人材と企業の間に、私たちアイムファクトリーが存在する価値とは。アイムファクトリー代表久利からのメッセージ。
        .section__action
          b-button(variant='primary' to="/message" squared class='entry-button btn-sm') READ ME
    .section
      .section__bg
        .section__img(:style="{ backgroundImage: 'url(/static/images/home/about.jpg)' }")
        .section__img-blind
      .section__body
        span.section__sub-title CULTURE
        h2.section__title カルチャー
        p.small IT人材と企業のために私達が大切にすること。それは変化を続けるニーズに即時対応する柔軟な対応力。常に考え、行動し、新たなイノベーションを生み出す私たちの企業風土をご紹介します。
        .section__action
          b-button(variant='primary' to="/culture" squared class='entry-button btn-sm') READ ME
    .section.section--spread(data-scroll)
      .section__bg
        .section__img(:style="{ backgroundImage: 'url(/static/images/home/culture.jpg)' }")
        .section__img-blind
      .section__body
        span.section__sub-title STYLE
        h2.section__title スタイル
        p.small 転職のプロとして天職は自らが切り開く。自分で選択したキャリアビジョンがチームと自らを成長させミッションを実現させる力になる。社員それぞれが自己成長を続ける、アイムファクトリーの社内制度とは。
        .section__action
          b-button(variant='primary' to="/style" squared class='entry-button btn-sm') READ ME
    .section.section--rev(data-scroll)
      .section__bg
        .section__img(:style="{ backgroundImage: 'url(/static/images/home/member.jpg)' }")
        .section__img-blind
      .section__body
        span.section__sub-title MEMBER
        h2.section__title メンバー
        p.small 次々に進化を続けるIT業界の変革スピード。IT人材と企業の間に、私たちアイムファクトリーが存在する価値とは。アイムファクトリー代表久利からのメッセージ。
        .section__action
          b-button(variant='primary' to="/message" squared class='entry-button btn-sm') READ ME
</template>

<script>
import interview from '@/api/interview.js'
import CardMember from '@/components/CardMember.vue'
import Hero from '@/components/Hero.vue'
import { Carousel, Slide } from 'vue-carousel'
import ScrollOut from 'scroll-out'

export default {
  name: 'home',
  components: {
    Carousel,
    Hero,
    Slide,
    CardMember
  },
  computed: {
    list: () => interview.fetch()
  },
  mounted () {
    ScrollOut({
      once: true,
      targets: '.section__img'
    })
    ScrollOut({
      once: true,
      targets: '.section__img-blind'
    })
    ScrollOut({
      once: true,
      targets: '.section-intro'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';

.header-hero{
  position: relative;
  &__content{
    position: absolute;
    color: #fff;
    bottom: 38%;
    left: 50%;
    font-weight: normal;
    transform: translateX( -50%);
    text-align: center;
  }
  &__scroll {
    z-index: 1;
    display: block;
    position: absolute;
    right: 35px;
    bottom: 0;
    width: 18px;
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    transition: opacity .8s cubic-bezier(.43,.2,.02,1);
    color: white;
  }
  &__bar {
    position: relative;
    display: block;
    width: 1px;
    height: 160px;
    margin: 0 auto;
    overflow: hidden;
    &:before{
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      -webkit-animation: cmn-induction 3s cubic-bezier(.43,.2,.02,1) 1s infinite;
      animation: cmn-induction 3s cubic-bezier(.43,.2,.02,1) 1s infinite;
    }
  }
  @include media-breakpoint-up(md) {
    &__bar {
      height: 96px;
    }
  }
}

.VueCarousel{
  &-slide{
    position: relative;
    width: 100%;
    height: 100%;
    height: 100vh;
    max-height: 1800px;
    background: var(--primary);
    img{
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      max-width: inherit;
      background-attachment: fixed;
      animation: grow 60s linear 10ms infinite;
    }
  }
  @include media-breakpoint-up(md) {
    height: 100vh;
    max-height: 1800px;
  }
}

.section-intro{
  text-align: center;
  padding: 5rem 0 3rem;
  &__title{
    line-height: 1.5em;
    font-size: 1.5rem;
    margin-bottom: 1em;
  }
  .wb{
    display: none;
  }
  @include media-breakpoint-up(lg) {
    .wb{
      display: block;
    }

    &__title{
      font-size: 2rem;
      line-height: 1.5em;
    }
    padding: 6rem 4rem 12rem;
  }
  opacity: 0;
  transform: translateY(50px);
  transition-duration: 4s;
}

.section-intro[data-scroll="in"]{
  transform: translateY(0);
  opacity: 1;
}

.section{
  $parent:&;
  position: relative;
  margin-bottom: 5rem;
  &__sub-title{
    text-transform: uppercase;
    color: var(--primary);
  }
  &__title{
    color: var(--primary);
    margin-bottom: 1rem;
  }
  &__action{
    margin-top: 2rem;
    text-align: right;
  }
  &__bg{
    width: 100%;
    padding-top: 45%;
    overflow: hidden;
    position: relative;
  }
  &__img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 2s;
  }
  &__img[data-scroll="in"] {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  &__img-blind{
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
  &__img-blind[data-scroll="in"]{
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition-duration: .6s;
  }
  &__body{
    right: 0;
    bottom: 0;
    padding: 1rem 0 0;
    background: #fff;
  }
  &--rev{
    #{$parent}__body{
      left: 0;
    }
  }
  &--spread{
    // height: 200px;
    position: unset;
    left: 0;
    #{$parent}__bg{
      position: relative;
      left: 0;
      width: 100%;
      padding-top: 45%;
    }
    // #{$parent}__body{
    // }
    @include media-breakpoint-up(lg) {
      height: 600px;
        #{$parent}__bg{
        position: absolute;
        left: 0;
        width: 100%;
        padding: 0;
        padding-top: 600px;
      }
      #{$parent}__body{
        position: relative;
        width: 60%;
        top: 50%;
        margin-left: auto;
        transform: translate(0,-50%)
      }
    }
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: 10rem;
    &__body{
      position: absolute;
      width: 45%;
      padding: 3rem;
    }
    &__action{
      text-align: left
    }
  }
}

.home{
  .container{
    position: inherit;
  }
}

@keyframes cmn-induction {
    0% {
        transform: translateY(-101%)
    }
    70% {
        transform: translateY(101%)
    }
    to {
        transform: translateY(101%)
    }
}
</style>
