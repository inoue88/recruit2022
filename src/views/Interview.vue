<template lang='pug'>
.interview(:class="`interview--` + `${num}`")
  .title-interview(v-if='item')
    .title-interview__wrap
      picture.title-interview__img
        source(media="(min-width: 960px)" v-bind:srcset="'/static/images/interview/0' + `${num}` + '/header--pc.jpg'")
        source(media="(min-width: 320px)" v-bind:srcset="'/static/images/interview/0' + `${num}` + '/header--sp.jpg'")
        img(src="images/picture_s.gif" alt="")
    b-container
      .title-interview__body
        .title-interview__title(v-html='`${item.title}`')
        div.title-interview__name {{ item.name }}
        span.title-interview__dep
          |{{ item.yearEntry }}入社 /
          |{{ item.department }}
  b-container(v-if='item')
      .interview-content
        section.interview-content__section(v-for='(n,index) in 3')
          h3.interview-content__q
            |{{question[index]}}
          .interview-content__a {{item.answer[`${index}`]}}
  .interview-image01
    b-img(v-bind:src="`/static/images/interview/0${ id }/image02.jpg`")
  b-container(v-if='item')
    .interview-content.interview-content--rev
      section.interview-content__section(v-for='(n,index) in 3')
        h3.interview-content__q
          |{{question[index +3]}}
        .interview-content__a(v-html="item.answer[`${index+3}`]")
  .interview-message
    .interview-message__text.interview-message__text01
    .interview-message__text.interview-message__text02
    .interview-message__text.interview-message__text03
    .interview-message__text.interview-message__text04
    .interview-message__text.interview-message__text05
  b-container(v-if='item')
      .interview-content
        section.interview-content__section(v-for='(n,index) in 3')
          h3.interview-content__q
            |{{question[index +6]}}
          .interview-content__a(v-html="item.answer[`${index+6}`]")
      .interview-footer
        b-img.interview-footer__img(v-bind:src="`/static/images/interview/0${ id }/image03.jpg`")
        .interview-footer__discription
          span.interview-footer__dep
            |{{ item.yearEntry }}入社/
            |{{ item.department }}
          h3.interview-footer__name {{ item.name }}
          p {{ item.discription }}
</template>

<script>
import interview from '@/api/interview.js'
import ScrollOut from 'scroll-out'

export default {
  name: 'Interview',
  components: {},
  props: {id: Number},
  data () {
    return {
      item: null,
      num: this.id
    }
  },
  computed: {
    question: function () {
      let list = [
        '出身校と学生のときに打ち込んだことを教えてください。',
        'アイムファクトリーに入社する前に、「IT」に関する知識はありましたか？',
        'アイムファクトリーの第一印象は？/会社(会社説明や会社の雰囲気)で、印象に残っていることは？',
        '就職活動を行うとき優先順位を高くしたものは？/会社の話を聞いていて、これいいなと思ったところは？',
        'アイムファクトリーに入社した理由は？',
        'アイムファクトリーってどんな会社？',
        '仕事で心がけていること　/　自分の「成長したな」と思うところは?',
        '目標はありますか？',
        'あなたにとって[社会に変革をもたらすヒトと企業を加速する]ミッションとは？'
      ]
      if (this.item.division === 2) {
        list = [
          '(職種の確認)お仕事内容を教えてください。/一日のスケジュールを教えてください。',
          '前職はどんな業界で、どんなお仕事をしていましたか？-ご転職のきっかけは？',
          'アイムファクトリーの第一印象は？',
          '転職活動を行うとき優先順位を高くしたものは？/会社の話を聞いていて、これいいなと思ったところは？',
          'なぜアイムファクトリーに入社しようと思いましたか？',
          '入社直後/入ってみて、アイムファクトリーをどう感じましたか？',
          'いまの仕事の課題/目標は？/どんなことを、どんな手段で達成したいですか？',
          'あなたにとって[社会に変革をもたらすヒトと企業を加速する]ミッションとは'
        ]
      }
      return list
    }
  },
  watch: {
    id: {
      handler () {
        interview.asyncFind(this.id, item => {
          this.item = item
        })
      },
      immediate: true
    }
  },
  updated () {
    this.$nextTick(function () {
      ScrollOut({
        once: true,
        targets: '.interview-content__section'
      })
      ScrollOut({
        once: true,
        targets: '.interview-image01'
      })
    })
  }
}

</script>

<style lang='scss'>
@import "../assets/scss/custom.scss";

.title-interview {
  position: relative;
  margin-bottom: 6rem;
  background: var(--primary);
  z-index: 2;
  height: 50vh;
  max-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &__wrap{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  &__img img{
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
  &__body {
    position: relative;
    color: var(--white);
    width: 100%;
    z-index: 3;
    padding-bottom: 8%;
  }
  &__discription{
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 0
  }
  &__introduction{
    background: #222;
    padding: 1.5rem;
  }
  &__name{
    font-size: 1.4rem;
  }
  &__dep{
    border: 1px solid white;
    padding: .3rem;
    font-size: 0.8125rem;
    vertical-align: text-bottom;
  }
  &__title {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    br{
      display: none;
    }
  }
  @include media-breakpoint-up(lg) {
    margin-bottom: 7rem;
    & {
      height: 40vw;
    }
    &__body{
      padding-left: 40%;
    }
    &__title{
      font-size: 3.2rem;
      font-weight: normal;
      margin-bottom: 2rem;
      br{
        display: inline;
      }
    }
  }
}
.interview{
  width: 100%;
  overflow: hidden;
}
.interview-content{
  margin-right: auto;
  margin-bottom: 6rem;
  &--rev{
    position: relative;
    margin-right: 0;
    margin-left: auto;
    &:before{
      content: '';
      display: block;
      background: lighten(#001377, 73%);
      width: 120%;
      height: 105%;
      position: absolute;
      z-index: -1;
      margin-top: -5%;
      margin-left: -10%;
    }
  }
  &__section{
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    opacity: 0;
    transform: translateY(50px);
    transition-duration: 2s;
  }
  &__section[data-scroll="in"]{
    transform: translateY(0);
    opacity: 1;
  }
  &__q{
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    position: relative;
    color: #001377;
    &:first-letter{
      font-size: 1.6em;
      border-bottom: 3px solid #001377;
    }
  }
  &__a{
    font-size: 0.9375rem;

  }
  @include media-breakpoint-up(lg) {
    width: 80%;
    margin-bottom: 9rem;
    &--rev{
        &:before{
          height: 110%;
        }
      }
    &__q{
      font-size: 1.4rem;
      &:first-letter{
        font-size: 1.8em;
      }
    }
  }
}
.interview-image01{
  overflow: hidden;
  position: relative;
  z-index: -1;
  opacity: 0;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  transition-duration: 2s;
  img{
    display: block;
    width: 140%;
    margin-left: auto;
    z-index: -1;
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: -5rem;
    img{
      display: block;
      width: 75%;
      margin-left: auto;
      z-index: -1;
    }
  }
}
.interview-image01[data-scroll="in"]{
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}
.interview-footer{
  position: relative;
  overflow: visible;
  margin-bottom: 3rem;
  &__img{
    width: 160%;
    margin-bottom: -2rem;
    z-index: -1;
    position: relative;
    transform: translate(-5%,0);
  }
  &__name{
    font-size: 1.4rem;
    margin: .5rem 0 1rem;
  }
  &__dep{
    border: 1px solid white;
    padding: .3rem;
    font-size: 0.8125rem;
    vertical-align: text-bottom;
  }
  &__discription{
    padding: 2rem 2rem 1rem;
    background: var(--primary);
    color: #fff;
    width: 100%;
    font-size: 0.8125rem;
    // transform: translate(-5%,-0);
  }
  @include media-breakpoint-up(lg) {
    &__img{
      width: 100%;
      transform: translate(0,0);
    }
    &__discription{
      width: 480px;
      transform: translate(-5%,-100%);
    }
  }
}
.interview-message{
  overflow: hidden;
  padding: 40px;
  position: relative;
  z-index: -2;
  margin-bottom: -760px;
  &__text{
    background-position: right center;
    height: 140px;
    width: 3600px;
  }
  &__text01{
    background: url(/static/images/interview/text01.svg) repeat-x;
    animation: slide1 60s linear infinite;
  }
  &__text02{
    background: url(/static/images/interview/text02.svg) repeat-x;
    animation: slide2 60s linear infinite;
  }
  &__text03{
    background: url(/static/images/interview/text03.svg) repeat-x;
    animation: slide1 60s linear infinite;
  }
  &__text04{
    background: url(/static/images/interview/text04.svg) repeat-x;
    animation: slide1 60s linear infinite;
  }
  &__text05{
    background: url(/static/images/interview/text05.svg) repeat-x;
    animation: slide1 60s linear infinite;
  }
}
.interview{
  @include media-breakpoint-up(lg) {
    &--1,&--5{
      .title-interview__body{
        padding-right: 40%;
        padding-left: 0;
      }
    }
    &--1,&--2,&--5,&--6{
      .interview-footer__discription{
        margin-left: auto;
        transform: translate(5%,-100%);
      }
    }
  }
}

@keyframes slide1{
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-1692px, 0, 0);
  }
}
@keyframes slide2{
  0%{
    transform: translate3d(-1692px, 0, 0);
  }
  100%{
    transform: translate3d(0, 0, 0);
  }
}

</style>
