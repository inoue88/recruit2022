<template lang='pug'>
  .entry
    #entry__message
    b-container.container-small
      p.mb-4 必要項目を入力後、確認画面が表示されます。<br>内容に間違いがなければ、ページ最下部の確認ボタンを押して下さい。
      div#error
      <form @submit.prevent="post_entry">
        table.entry-table
          tr
            th 応募職種
            td
              b-form-select(v-model='entry.entry_type' :options='optJob' required='required')
          tr
            th
              |お名前
              span.entry-table__supplement (漢字)
            td
              b-row
                b-col(lg='7')
                  b-form-input(v-model='entry.name' required='required' placeholder='田中 太郎')
          tr
            th
              |お名前
              span.entry-table__supplement (フリガナ)
            td
              b-row
                b-col(lg='7')
                  b-form-input(v-model='entry.name_kana' required='required' placeholder='タナカタロウ')
          tr
            th 性別
            td
              b-row
                b-col(lg='3')
                  b-form-select(v-model='entry.gender' required='required' :options='gender')
          tr
            th 生年月日
            td
              b-row.cell-space(no-gutters)
                b-col(lg='3')
                  b-form-input(v-model='entry.birth' placeholder='2000' type='date' required='required')
          tr
            th メールアドレス
            td
              b-row
                b-col.mb-1(lg='7')
                  b-form-input(v-model='entry.email' type='email' placeholder='recruit@aim-factory.co.jp' required='required')
                b-col(lg='7')
                  b-form-input(v-model='entry.email_confirmation' type='email' placeholder='確認のためもう一度ご入力ください' required='required')
          tr
            th 電話番号
            td
              b-row
                b-col(lg='9')
                  b-form-input(v-model='entry.tel1' placeholder='※「-（ハイフン）」なし半角数字' required='required')
          tr
            th 郵便番号
            td
              b-row
                b-col(lg='7')
                  b-form-input(v-model='entry.zip' required='required')
          tr
            th 住所
            td
              b-row.mb-1
                b-col(lg='3')
                  b-form-select(v-model='entry.prefecture_id' :options='prefecture_id' required='required')
              b-row.mb-1
                b-col(lg='11')
                  b-form-input(v-model='entry.address' placeholder='都道府県以降の住所をご入力ください' required='required')
        div.entry__agreement
          |フォームへ入力する前に、
          a(href='/privacy' target='_blank')
            |個人情報の取り扱い
          |についてをよくお読み下さい。
        .text-center.mb-5
          b-button(size='lg' type="submit" squared variant='aimred') 個人情報の取扱に同意して応募
      </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Entry',
  data () {
    return {
      entry: {
        entry_type: null,
        gender: null,
        prefecture_id: null,
        name: '',
        name_kana: '',
        birth: '',
        email: '',
        email_confirmation: '',
        tel1: '',
        tel2: '',
        zip: '',
        address: '',
        agreement: '1',
        confirming: '1',
        entry_year: '2021'
      },
      optJob: [
        {value: null, text: '応募する求人を選択してください'},
        {value: 1, text: 'キャリアアドバイザー・コンサルタントセールス職【正社員】'},
        // {value: 2, text: 'WEBマーケ職【正社員】'},
        {value: 3, text: '事業開発職【正社員】'}
      ],
      gender: [
        {value: null, text: ''},
        {value: 1, text: '男'},
        {value: 2, text: '女'},
        {value: 3, text: '回答しない'}
      ],
      prefecture_id: [
        {value: null, text: '都道府県'},
        {value: 1, text: '北海道'},
        {value: 2, text: '青森県'},
        {value: 3, text: '岩手県'},
        {value: 4, text: '宮城県'},
        {value: 5, text: '秋田県'},
        {value: 6, text: '山形県'},
        {value: 7, text: '福島県'},
        {value: 8, text: '茨城県'},
        {value: 9, text: '栃木県'},
        {value: 10, text: '群馬県'},
        {value: 11, text: '埼玉県'},
        {value: 12, text: '千葉県'},
        {value: 13, text: '東京都'},
        {value: 14, text: '神奈川県'},
        {value: 15, text: '新潟県'},
        {value: 16, text: '富山県'},
        {value: 17, text: '石川県'},
        {value: 18, text: '福井県'},
        {value: 19, text: '山梨県'},
        {value: 20, text: '長野県'},
        {value: 21, text: '岐阜県'},
        {value: 22, text: '静岡県'},
        {value: 23, text: '愛知県'},
        {value: 24, text: '三重県'},
        {value: 25, text: '滋賀県'},
        {value: 26, text: '京都府'},
        {value: 27, text: '大阪府'},
        {value: 28, text: '兵庫県'},
        {value: 29, text: '奈良県'},
        {value: 30, text: '和歌山県'},
        {value: 31, text: '鳥取県'},
        {value: 32, text: '島根県'},
        {value: 33, text: '岡山県'},
        {value: 34, text: '広島県'},
        {value: 35, text: '山口県'},
        {value: 36, text: '徳島県'},
        {value: 37, text: '香川県'},
        {value: 38, text: '愛媛県'},
        {value: 39, text: '高知県'},
        {value: 40, text: '福岡県'},
        {value: 41, text: '佐賀県'},
        {value: 42, text: '長崎県'},
        {value: 43, text: '熊本県'},
        {value: 44, text: '大分県'},
        {value: 45, text: '宮崎県'},
        {value: 46, text: '鹿児島県'},
        {value: 47, text: '沖縄県'}
      ]
    }
  },
  methods: {
    post_entry: function () {
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
      axios.post('/api/entries', { new_graduate: this.entry }).then((response) => {
        if (response.data.status === 'success') {
          // TODO:inoue thanksページへ遷移。thanksページができたら以下のpathをthanksページに修正お願いします！
          this.$router.push({ path: '/entry/completed' })
        } else {
          var errorMessages = response.data.messages.join('\n')
          // TODO:inoue 不正な値などの場合のエラーメッセージです。いい感じに表示お願いします！
          // alert(errorMessages)
          var error = document.getElementById('error')
          error.innerHTML = errorMessages
        }
      }, (error) => {
        console.log(error)
        // TODO:inoue サーバー側の予期せぬエラー(500系)の場合です。装飾と文章の調整をお願いいたします
        alert('申し訳ございません。エラーが発生しました。\n時間をおいて、再度お試しください。')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';

#error{
  &__txt{
    background-color: #ffdada;
    padding: 1rem;
    border: 1px solid red;
    color: red;
    font-weight: bold;
  }
}

.entry{
  margin-bottom: 10rem;
}
.entry-table {
  width: 100%;
  margin-top: 2rem;
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
.cell-space{
  [class^="col"]{
    margin-right: .3rem;
    margin-bottom: .3rem;
  }
}

</style>
