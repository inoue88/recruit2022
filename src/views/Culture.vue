<template lang='pug'>
.culture
  section
    b-container
      section.sec-message
        .sec-message__body
          h2.sec-message__title IT人材と企業のために<br>常に考え、行動する
          p.sec-message__txt IT業界の変化に終わりはありません。<br>私たちも「変化することが前提」で、変化し続けるニーズに対して臨機応変に対応できなければ、<br>将来に渡る事業成長は見込めません。
          p.sec-message__txt 私たちが目指すのは「変化を加速し、イノベーションを生み出せる人を増やす」こと。<br>だからこそ、私たち自身が大小さまざまな変化を楽しみながら挑戦していくことが必要です。
          p.sec-message__txt アイムファクトリーは、IT人材キャリア支援のプロとしてこの想いに共感し、<br>「常に考え、行動する」メンバーとともにミッションを実現していきたいと考えています。
        .sec-message__img(:style="{ backgroundImage: 'url(/static/images/culture/image01.jpg)' }")
      section.sec-message.sec-message--rev
        .sec-message__body
          h2.sec-message__title 働き方にとらわれず、<br>さまざまなスタッフが在籍
          b-form-row
            b-col(cols="6")
              .worker
                .worker__count 68%
                span.worker__title 正社員
                span.worker__sub （フル勤務）
            b-col(cols="6")
              .worker
                .worker__count 13%
                span.worker__title 正社員
                span.worker__sub （時短/リモート/週3勤務）
            b-col(cols="6")
              .worker
                .worker__count 8%
                span.worker__title インターン＆アルバイト
            b-col(cols="6")
              .worker
                .worker__count 11%
                span.worker__title フリーランス
        .sec-message__img(:style="{ backgroundImage: 'url(/static/images/culture/image02.jpg)' }")
      section.sec-message.sec-message--narrow
        .sec-message__body
          h2.sec-message__title 毎年120%以上の売上げ拡大
        img.sec-message__img-wide(src="/static/images/culture/image03.svg")
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
          th 役員
          td
            |<span class='mr-4'>代表取締役社長</span>久利 可奈恵
            br
            |<span class='mr-4'>　　　　取締役</span>飯田 陽二郎
            br
            |<span class='mr-4'>　　社外取締役</span>岡本 和己
        tr
          th 事業内容
          td
            |IT/Webエンジニアやクリエイターなど<br class='wb--rev'>世の中に新しい価値を提供する人材に特化したビジネスを展開<br>
            |○プロジェクト就労支援事業<br class='wb'>（フリーランス）<br>
            |○人材紹介事業（正社員/契約社員）<br>
            |○キャリア情報発信事業
            br
            a(href='https://www.engineer-factory.com/' target='_blank')
              |　エンジニアファクトリー
            br
            a(href='https://se-navi.jp/' target='_blank')
              |　エンジニアファクトリー
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
import ScrollOut from 'scroll-out'
export default {
  name: 'Culture',
  mounted () {
    ScrollOut({
      once: true,
      targets: '.sec-message__img, .sec-message__img-wide'
    })
    ScrollOut({
      once: true,
      targets: '.sec-message__body'
    })
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/scss/custom.scss";

.worker{
  color: var(--primary);
  margin: 1rem 0 1rem;
  line-height: 1.2;
  &__count{
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: .25em;
  }
  &__sub{
    font-size: .85rem;
  }
  @include media-breakpoint-up(lg) {
  margin-bottom: 3rem;
    &__count{
      font-size: 4rem;
    }
    &__sub{
      font-size: .85rem;
    }
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
  .wb--rev{
    display: none;
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
    .wb{
      display: none;
    }
    .wb--rev{
      display: block;
    }
  }
}

.culture-overview {
  margin-top: 6rem;
  background: #eee;
  margin-bottom: -5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.sec-message {
  $parent: &;
  margin-bottom: 6rem;
  position: relative;
  &__body{
    opacity: 0;
    transform: translateY(50px);
    transition-duration: 2s;
    &[data-scroll="in"] {
      transform: translateY(0);
      opacity: 1;
    }
  }
  &__title {
    font-size: 1.6rem;
    br{
      display: none;
    }
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    margin-top: 1.5rem;
  }
  &__img {
    width: 100%;
    padding-top: 60%;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    box-shadow: 0 0 #F0F1F7;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 2s;
    z-index: -1;
    &[data-scroll="in"] {
      box-shadow: 40px 40px #F0F1F7;
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  &__img-wide{
    width: 100%;
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition-duration: 2s;
    &[data-scroll="in"] {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  &--rev {
    #{$parent}__body {
      margin-left: auto;
    }
    #{$parent}__img {
      right: inherit;
      left: 0;
      &[data-scroll="in"] {
        box-shadow: -40px 40px #F0F1F7;
      }
    }
  }
  @include media-breakpoint-up(lg) {
    margin-bottom: 16rem;
    margin-top: 10rem;
    &__body {
      width: 620px;
    }
    &__title {
      font-size: 2.2rem;
      br{
        display: block;
      }
      margin-bottom: 2rem;
    }
    &__img {
      width: 50%;
      padding-top: 40%;
      position: absolute;
      right: 0;
      top: -3rem;
    }
    &--rev {
      #{$parent}__body {
        padding-left: 16%;
      }
    }
    &--narrow {
      margin-top: -8rem;
    }
  }
}

</style>
