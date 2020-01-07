<template lang='pug'>
.culture
  b-container
    .culture-head
      .culture-head__title 「転職」のプロとして「天職」は自らが切り開く
      .culture-head__text 私たちは、【社会に変革をもたらす】IT人材のキャリアビジョン実現をサポートするために自分の選択した【WILL＝キャリアビジョン】に向かって、【CAN＝できること】を拡大させ、アイムファクトリーの【MUST＝ミッション実現】できる人材を求めています。
    b-row.mb-4
      b-col(v-for='(n, index) in 3' v-bind:key='list.id' cols='12' lg='4')
        CardCulture(
          :title='`${list[n].title}`'
          :txt='`${list[n].txt}`'
          :id='`${n}`'
          )
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

    //- b-row
    //-   b-col(v-for='(list) in list' v-bind:key='list.id' cols='12' lg='6')
    //-     CardCulture(
    //-       :title='`${list.title}`'
    //-       :txt='`${list.txt}`'
    //-       :id='`${list.id}`'
    //-       )
</template>

<script>
import CardCulture from '../components/CardCulture.vue'
import culture from '@/api/culture.js'

export default {
  name: 'Culture',
  components: {
    CardCulture
  },
  computed: {
    list: () => culture.fetch()
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
    &__text{}
  }
</style>
