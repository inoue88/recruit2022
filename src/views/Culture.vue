<template lang='pug'>
.culture
  b-container
    .culture-head
      .culture-head__title 「転職」のプロとして「天職」は自らが切り開く
      .culture-head__text 私たちは、【社会に変革をもたらす】IT人材のキャリアビジョン実現をサポートするために自分の選択した【WILL＝キャリアビジョン】に向かって、【CAN＝できること】を拡大させ、アイムファクトリーの【MUST＝ミッション実現】できる人材を求めています。
    b-row.mb-4
      b-col(v-for='(n, index) in 3' v-bind:key='list.id' cols='12' lg='4')
        CardCulture(
          :title='`${list[index].title}`'
          :txt='`${list[index].txt}`'
          :id='`${n}`'
          )
  .div.culture-wrap
    b-container
      .culture-head
        .culture-head__title 仕事を「引き受ける」のではなく「生み出す」人材へ
        .culture-head__text スキルアップやキャリアアップのための様々な機会を創出するだけでなく、個々のポテンシャルと意欲を信じて任せる文化があります。新規事業プロジェクトや、チームリーダーにも新卒入社のメンバーが抜擢されています。
      b-row.mb-4
        b-col(v-for='(n, index) in 3' v-bind:key='list.id' cols='12' lg='4')
          CardCulture(
            :title='`${list[index + 3].title}`'
            :txt='`${list[index + 3].txt}`'
            :id='`${index + 3}`'
            )
  b-container
    .culture-head
      .culture-head__title ライフイベントに左右されない環境で自己成長を続ける
      .culture-head__text アイムファクトリーは、ライフが充実するからこそ、仕事でアウトプットの質も上がると考えます。出産・育児・介護などライフイベントを経ても、ビジネスパーソンとして成長できる職場環境を目指して様々な制度、イベントでバックアップしています。
    b-row.mb-4
      b-col(v-for='(n, index) in 3' v-bind:key='list.id' cols='12' lg='4')
        CardCulture(
          :title='`${list[index + 6].title}`'
          :txt='`${list[index + 6].txt}`'
          :id='`${index + 6}`'
          )
</template>

<script>
import CardCulture from '../components/CardCulture.vue'
import culture from '@/api/culture.js'
import ScrollOut from 'scroll-out'

export default {
  name: 'Culture',
  components: {
    CardCulture
  },
  computed: {
    list: () => culture.fetch()
  },
  mounted () {
    ScrollOut({
      once: true,
      offset: 400,
      targets: '.culture-wrap'
    })
  }
}
</script>

<style lang='scss'>
  .culture-head{
    padding: 0 0 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #000;
    &__title{
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1.5;
    }
  }
  .culture-wrap{
    position: relative;
    padding: 5rem 0 1rem;
    margin-bottom: 5rem;
    &:after{
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: block;
      height: 100%;
      width: 0%;
      background: #F0F1F7;
      z-index: -1;
      -webkit-transition: all 1s 100ms ease;
      transition: all 1s 100ms ease;
    }
    &[data-scroll="in"]{
      &:after{
        width: 86%;
      }
    }
  }
</style>
