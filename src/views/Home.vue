<template lang="pug">
.home
  .header-hero
    carousel(
      :per-page="1"
      :pagination-enabled='false'
      :pagination-position='top'
      :mouse-drag="false"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="1000"
      )
      slide
        picture
          source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-job--pc.jpg'")
          source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-job--sp.jpg'")
          img(src="images/picture_s.gif" alt="")
      slide
        picture
          source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-about--pc.jpg'")
          source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-about--sp.jpg'")
          img(src="images/picture_s.gif" alt="")
      //- slide
      //-   picture
      //-     source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-message--pc.jpg'")
      //-     source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-message--sp.jpg'")
      //-     img(src="images/picture_s.gif" alt="")
    .header-hero__content
      h1 社会に変革をもたらす<br>ヒトと企業を加速する
      p Bringing change to society Accelerate people and companies
    p.header-hero__scroll
      |SCROLL
      span.header-hero__bar
  b-container
    .section-intro
      h2 社会に変革をもたらすヒトと企業を加速する
      p 私たち、アイムファクトリー株式会社は世の中に新しい価値を提供する【IT人材】に特化したビジネスを展開し、2008年の創業以来、増収増益を続けています。
      p 2018年には関西サテライトオフィスがオープン。これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
    .section
      .section__bg
        img.section__img(src="")
      .section__body
        h2 私達について
        p 2018年には関西サテライトオフィスがオープン。これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
        a.btn(href='#') READ ME
    .section.section--rev
      .section__bg
        img.section__img(src="")
      .section__body
        h2 代表メッセージ
        p 2018年には関西サテライトオフィスがオープン。これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
        a.btn(href='#') READ ME
    section
      b-row(align-v="center")
        b-col(cols="12" lg="6")
          h1.sec-common__title 社員インタビュー
          span.sec-common__sub-title Interview
          p.sec-common__txt 目指すことこそ共有はしているけれど、哲学や美意識、信念、強みはさまざま。あなたにも、自分自身の譲れないものを胸に、あなたにしか生み出せない価値を発揮してほしいと思います。
      b-row(align-v="center" class='interview-lists')
        b-col(cols="12" lg="6" v-for='(list) in list' v-bind:key="list.id")
          CardInterviewSmall(
                :name="`${ list.name }`"
                :nameEn="`${ list.nameEn }`"
                :yearEntry="`${ list.yearEntry }`"
                :id="`${ list.id }`",
                :title="`${ list.title }`"
              )
</template>

<script>
import interview from '@/api/interview.js'
import CardInterviewSmall from '@/components/CardInterviewSmall.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    CardInterviewSmall
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    list: () => interview.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-hero{
  position: relative;
  &__content{
    position: absolute;
    color: #fff;
    bottom: 40%;
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
    height: 96px;
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
}
.VueCarousel{
  &-slide{
    position: relative;
    width: 100%;
    height: 100%;
    height: 80vh;
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

}
.section-intro{
  text-align: center;
  padding: 6rem 4rem 12rem;
}
.section{
  $parent:&;
  position: relative;
  padding-bottom: 10rem;
  &__bg{
    width: 100%;
    height: 480px;
    background: #ccc;
  }
  &__body{
    position: absolute;
    right: calc(50% - 50vw);
    top: 160px;
    width: 40vw;
    padding: 80px;
    background: #fff;
  }
  &--rev{
    #{$parent}__body{
      left: calc(50% - 50vw);
    }
  }
}
.list-interview{
  display: flex;
  flex-wrap: wrap;
  &__item{
    height: 6rem;
    width: 50%;
    &:nth-child(even){
      background: red;
      margin-top: 3rem;
    }
  }
}
.VueCarousel-pagination{
  background: red;
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
