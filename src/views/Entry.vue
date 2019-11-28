<template lang='pug'>
  .entry
    b-container.container-small
      p 必要項目を入力後、確認画面が表示されます。<br>内容に間違いがなければ、ページ最下部の確認ボタンを押して下さい。
      table.entry-table
        tr
          th 応募職種
          td
            b-form-select(v-model='selectJob' :options='optJob')
        tr
          th
            |お名前
            span.entry-table__supplement (漢字)
          td
            b-row
              b-col(lg='7')
                b-form-input(v-model='text' placeholder='田中 太郎')
        tr
          th
            |お名前
            span.entry-table__supplement (カタカナ)
          td
            b-row
              b-col(lg='7')
                b-form-input(v-model='text' placeholder='タナカタロウ')
        tr
          th 性別
          td
            b-row
              b-col(lg='3')
                b-form-select(v-model='selected' :options='options')
        tr
          th 生年月日
          td
            b-row(no-gutters)
              b-col(lg='3')
                b-form-select(v-model='selected' :options='options')
              b-col(lg='3')
                b-form-select(v-model='selected' :options='options')
              b-col(lg='3')
                b-form-select(v-model='selected' :options='options')
        tr
          th メールアドレス
          td
            b-form-input(v-model='text' placeholder='recruit@aim-factory.co.jp')
        tr
          th 電話番号
          td
            b-row
              b-col(lg='7')
                b-form-input(v-model='text' placeholder='※「-（ハイフン）」なし半角数字')
        tr
          th 住所
          td
            b-row
              b-col(lg='3')
                b-form-input(v-model='text' placeholder='※「-（ハイフン）」なし半角数字')
            b-row
              b-col(lg='11')
                b-form-input(v-model='text' placeholder='※「-（ハイフン）」なし半角数字')
            b-row
              b-col(lg='11')
                b-form-input(v-model='text' placeholder='※「-（ハイフン）」なし半角数字')
      div.entry__agreement
        |フォームへ入力する前に、
        a(href='#')
          |個人情報の取り扱い
        |についてをよくお読み下さい。
      .text-center.mb-5
        b-button(size='lg' squared variant='aimred' to='/entry') ENTRY
</template>

<script>
export default {
  name: 'Entry',
  data () {
    return {
      selectJob: null,
      optJob: [
        {
          value: null,
          text: '応募する求人を選択してください'
        },
        {
          value: 1,
          text: 'キャリアアドバイザー・コンサルタントセールス職【正社員】'
        },
        { value: 2, text: 'WEBマーケティング職【正社員】' },
        { value: 3, text: '事業開発職【正社員】' },
        { value: 5, text: '職種希望なし【正社員】' },
        { value: 4, text: '学生インターン（大学1年生～3年生対象）' }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.entry-table {
  width: 100%;
  &__supplement {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    font-weight: normal;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  th,
  td {
    padding: 0.5rem 0;
    line-height: 1.6;
    display: block;
  }
  th {
    margin-top: 1rem;
    padding-bottom: 0;
  }
  @include media-breakpoint-up(lg) {
    th,
    td {
      padding: 1.5rem 0;
      display: table-cell;
    }
    th {
      width: 12rem;
    }
  }
}
.entry__agreement {
  text-align: center;
  padding: 3rem 1rem;
}
</style>
