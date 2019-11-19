<template lang="pug">
  .about
    HeaderTitle(TitleEn="About" TitleJa="私達について")
    section.job-sec
      b-container.container--small
        p
          |必要項目を入力後、確認画面が表示されます。<br>内容に間違いがなければ、ページ最下部の確認ボタンを押して下さい。
        table.entry-table
          tr
            th 応募職種
            td
              b-form-select(v-model="jobTypeSelected" :options="jobType")
          tr
            th
              |お名前
              span.reading
                |（漢字）
            td
              b-form-input(type="text" placeholder="例）田中 太郎")
          tr
            th
              |お名前
              span.reading
                |（ふりがな）
            td
              b-form-input(type="text" placeholder="例）たなか たろう")
          tr
            th 性別
            td
              b-form-group
                b-form-radio-group
                  b-form-radio(v-model="selected" name="sex" value="male")
                    |男性
                  b-form-radio(v-model="selected" name="sex" value="female")
                    |女性
          tr
            th 生年月日
            td.entry-table__birth
              b-form-input(type="date" placeholder="")
          tr
            th メールアドレス
            td
              b-form-input(type="email" placeholder="例）recruit@aim-factory.co.jp")
          tr
            th 電話番号
            td
              b-form-input(type="tel" placeholder="※「-（ハイフン）」なし半角数字")
          tr
            th 住所
            td.entry-table__address
              b-form-input(type="text" placeholder="例）1020083")
              b-form-input(type="text" placeholder="例）東京都千代田区麹町3-2")
              b-form-input(type="text" placeholder="例）麹町共同ビル3F")
        .text-center.p-5
          p.mb-4
            |フォームへ入力する前に、
            a(href='https://www.aim-factory.com/privacy' target='_blank') 個人情報の取り扱い
            |についてをよくお読み下さい。
          b-button(size="lg" variant='primary' squared) ENTRY
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import FooterEntry from "../components/FooterEntry.vue";
export default {
  name: "job",
  components: {
    HeaderTitle,
    FooterEntry
  },
  data() {
    return {
      jobTypeSelected: null,
      jobType: [
        { value: null, text: "職種を選択して下さい" },
        {
          value: 1,
          text: "キャリアアドバイザー・コンサルタント職【正社員】"
        },
        { value: 2, text: "WEBマーケティング職【正社員】" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.entry-table {
  width: 100%;
  tr {
    border-bottom: 1px solid #ddd;
  }
  th,
  td {
    padding: 1.5rem 0;
    line-height: 1.6;
  }
  th {
    vertical-align: middle;
    width: 11rem;
    font-weight: bold;
  }
  .reading {
    font-size: 0.75rem;
    font-weight: normal;
  }
  &__address {
    input:not(:last-child) {
      margin-bottom: 0.3rem;
    }
    input:first-child {
      width: 8rem;
    }
  }
}
.form-group {
  margin-bottom: 0;
}
</style>
