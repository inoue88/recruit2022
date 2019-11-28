<template lang='pug'>
.interview
  .interview-header
    picture.interview-header__img
      //- source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--pc.jpg'")
      //- source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--sp.jpg'")
      //- img(src="images/picture_s.gif" alt="")
    interview-header__wrap
      h1.TitleCommon__main {{ item.name }}
      span.TitleCommon__sub {{ item.name }}
  b-container
    div(v-if='item' key='product')
      .interview__intro
        p {{ item.name }}
      .interview__body
        .interview__section(v-for='(n,index) in 3' )
          h3.interview__q {{question[index]}}
          .interview__a {{item.answer[`${index}`]}}
      .interview__body
        .interview__section(v-for='(n,index) in 3')
          h3.interview__q {{question[index +3]}}
          .interview__a(v-html="item.answer[`${index+3}`]")
        hr
        .interview__section(v-for='(n,index) in 3')
          h3.interview__q {{question[index +6]}}
          .interview__a(v-html="item.answer[`${index+6}`]")
</template>

<script>
import interview from '@/api/interview.js'
// import TitleInterview from '@/components/TitleInterview.vue'

export default {
  name: 'Interview',
  props: {id: Number},
  // components: {
  //   TitleInterview
  // },
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
.interview-header {
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--primary);
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 2;
  height: 60vh;
  max-height: 640px;
  &__img {
    overflow: hidden;
    width: 100%;
    height: 60vw;
    opacity: 0.6;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    img {
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
      transition: all 0.2s ease-in-out;
    }
  }
  &__wrap {
    position: absolute;
    color: var(--white);
    width: 100%;
    top: 50%;
    text-align: center;
    // left: 50%;
    // -webkit-transform: translate(-50%, 0%);
    // transform: translate(-50%, 0%);
    z-index: 3;
  }
  &__title {
    font-size: 40px;
    font-weight: 600;
  }
  @include media-breakpoint-up(md) {
    margin-bottom: 7rem;
    & {
      height: 40rem;
    }
  }
}
</style>
