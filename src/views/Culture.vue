<template lang='pug'>
.culture
  section.culture-section
    b-container
      b-row
        b-col(cols="12" lg="9")
          h2.culture-section__title IT人材と企業のために<br>常に考え、行動する
          p IT業界の変化に終わりはありません。<br>私たちも「変化することが前提」で、変化し続けるニーズに対して臨機応変に対応できなければ、<br>将来に渡る事業成長は見込めません。
          p 私たちが目指すのは「変化を加速し、イノベーションを生み出せる人を増やす」こと。<br>だからこそ、私たち自身が大小さまざまな変化を楽しみながら挑戦していくことが必要です。
          p アイムファクトリーは、IT人材キャリア支援のプロとしてこの想いに共感し、<br>「常に考え、行動する」メンバーとともにミッションを実現していきたいと考えています。
  section.culture-section
    b-container
      b-row(align-h="end")
        b-col(cols="12" lg="6")
          h2.culture-section__title 働き方にとらわれず、<br>さまざまなスタッフが在籍
          b-form-row
            b-col(cols="12" lg="6")
              .worker
                .worker__count 68%
                span.worker__title 正社員
                span.worker__sub （フル勤務）
            b-col(cols="12" lg="6")
              .worker
                .worker__count 13%
                span.worker__title 正社員
                span.worker__sub （時短/リモート/週3勤務）
            b-col(cols="12" lg="6")
              .worker
                .worker__count 8%
                span.worker__title インターン＆アルバイト
            b-colspan(cols="12" lg="6")
              .worker
                .worker__count 11%
                span.worker__title ﾌﾘｰエンジニア・ﾌﾘｰデザイナー
  section.culturespan-section
    b-container
      b-row
        b-col(cols="12" lg="9")
          h2.culture-section__title 毎年約130%の売上げ拡大
  section.culture-overview
    b-container
      h3.text-center 会社概要
      table.culture-table.mt-5
        tr
          th 会社名
          td アイムファクトリー株式会社
        tr
          th 設立
          td 2008年7月8日
        tr
          th 資本金
          td 15,000,000円
        tr
          th 代表者
          td 久利可奈恵
        tr
          th 事業内容
          td
            |IT/Webエンジニアやクリエイターなど世の中に新しい価値を提供する人材に特化したビジネスを展開しています<br>
            |○プロジェクト就労支援事業（フリーランス）<br>
            |○人材紹介事業（正社員/契約社員）<br>
            |○IT/Webエンジニア向けのキャリア情報発信事業
            br
            a(href='https://www.engineer-factory.com/' target='_blank') エンジニアファクトリー
            br
            a(href='https://se-navi.jp/' target='_blank') 社内SE転職ナビ
        tr
          th 東京本社
          td
            |〒102-0083 東京都千代田区麹町3-2 麹町共同ビル3F
        tr
          th 大阪支社
          td 〒553-0003 大阪府大阪市福島区福島5-1-1 若杉西梅田ビル10F
        tr
          th 田川サテライト
          td 〒825-0002 福岡県田川市大字伊田4869-1-A
</template>

<script>
export default {
  name: 'Culture'
}
</script>

<style lang='scss' scoped>
@import "../assets/scss/custom.scss";

.culture-section{
  margin: 10rem 0 15rem;
  &__title{
    margin-bottom: 2.5rem;
  }
}

.worker{
  color: var(--primary);
  margin-bottom: 2rem;
  &__count{
    font-size: 4rem;
    line-height: 1;
    font-weight: bold;
  }
}

.culture-table {
  width: 100%;
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
.culture-overview {
  background: #eee;
  margin-bottom: -5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

</style>
