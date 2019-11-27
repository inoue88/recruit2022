<template lang='pug'>
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
export default {
  name: 'interview',
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
</style>
