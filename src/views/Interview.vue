<template lang='pug'>
.interview
  .title-interview(v-if='item')
    .title-interview__wrap
      picture.title-interview__img
        source(media="(min-width: 960px)" v-bind:srcset="'/static/images/interview/0' + `${num}` + '/header--pc.jpg'")
        source(media="(min-width: 320px)" v-bind:srcset="'/static/images/interview/0' + `${num}` + '/header--sp.jpg'")
        img(src="images/picture_s.gif" alt="")
    b-container
      .title-interview__body
        .title-interview__title(v-html='`${item.title}`')
        h3 {{ item.name }}
      //- .title-interview__introduction
      //-   p.title-interview__discription {{ item.discription }}
  b-container
    div(v-if='item' key='product')
      .interview-content
        .interview-content__section(v-for='(n,index) in 3' )
          h3.interview-content__q
            |{{question[index]}}
          .interview-content__a {{item.answer[`${index}`]}}
  .interview-image01
    b-img(v-bind:src="`/static/images/interview/0${ id }/image02.jpg`")
  b-container
    .interview-content.interview-content--rev
      .interview-content__section(v-for='(n,index) in 3')
        h3.interview-content__q
          |{{question[index +3]}}
        .interview-content__a(v-html="item.answer[`${index+3}`]")
    .interview-content
      .interview-content__section(v-for='(n,index) in 3')
        h3.interview-content__q
          |{{question[index +6]}}
        .interview-content__a(v-html="item.answer[`${index+6}`]")
    .interview-image02
      b-img(v-bind:src="`/static/images/interview/0${ id }/image03.jpg`")

</template>

<script>
import interview from '@/api/interview.js'
export default {
  name: 'Interview',
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
  }
}

</script>

<style lang='scss' scoped>
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
  &__title {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  @include media-breakpoint-up(md) {
    margin-bottom: 7rem;
    & {
      height: 40vw;
    }
    &__body{
      padding-right: 30%;
    }
    &__title{
      font-size: 2.5rem;
      font-weight: normal;
      margin-bottom: 2rem;
    }
  }
}
.interview{
  width: 100%;
  overflow: hidden;
}
.interview-content{
  margin-right: auto;
  margin-bottom: 8rem;
  &--rev{
    position: relative;
    margin-right: 0;
    margin-left: auto;
    &:before{
      content: '';
      display: block;
      background: lighten(#001377, 73%);
      width: 120%;
      height: 110%;
      position: absolute;
      z-index: -1;
      margin-top: -5%;
      margin-left: -10%;
    }
  }
  &__section{
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted c;
  }
  &__q{
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    position: relative;
    color: #001377;
    &:first-letter{
      font-size: 1.8em;
      border-bottom: 3px solid #001377;
    }
  }
  &__a{
    // font-size: 0.8125rem;
  }
  @include media-breakpoint-up(md) {
    width: 80%;
  }
}
.interview-image01{
  overflow: hidden;
  position: relative;
  z-index: -1;
  margin-bottom: -5rem;
  img{
    display: block;
    width: 75%;
    margin-left: auto;
    z-index: -1;
  }
}
.interview-image02{
  img{
    width: 100%;
  }
}
@keyframes grow {
  /*微差で拡大/縮小するアニメーション設定*/
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
}
</style>
