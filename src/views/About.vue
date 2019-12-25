<template lang='pug'>
.about
  section
    b-container
      b-row
        b-col
          h2 IT人材と企業の<br>ために常に考え、<br>行動する
        b-col(cols="12" lg="9")
          p IT業界の変化に終わりはありません。<br>私たちも「変化することが前提」で、変化し続けるニーズに対して臨機応変に対応できなければ、将来に渡る事業成長は見込めません。
          p 私たちが目指すのは「変化を加速し、イノベーションを生み出せる人を増やす」こと。<br>だからこそ、私たち自身が大小さまざまな変化を楽しみながら挑戦していくことが必要です。
          p アイムファクトリーは、IT人材キャリア支援のプロとしてこの想いに共感し、<br>「常に考え、行動する」メンバーとともにミッションを実現していきたいと考えています。
  section
    b-container
      b-row(class='text-center about-sec-member')
        b-col(cols="6" lg="3")
          span.about-sec-member__title 68
          |%
          p.about-sec-member__txt 正社員<br>（フル勤務）
        b-col(cols="6" lg="3")
          span.about-sec-member__title 13
          |%
          p.about-sec-member__txt 正社員<br>（時短/週3勤務等）
        b-col(cols="6" lg="3")
          span.about-sec-member__title 8
          |%
          p.about-sec-member__txt インターン＆<br>アルバイト
        b-col(cols="6" lg="3")
          span.about-sec-member__title 11
          |%
          p.about-sec-member__txt フリーエンジニア<br>フリーデザイナー
  section.about-sec
    b-container
      .about-sec02
        .about-sec02__img
          img(src='https://placehold.jp/300x400.png')
        .about-sec02__body
          h1.about-sec__title 毎年約130%の売上げ拡大
          p.about-sec__txt ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。すでに進歩を通り越した突然変異が起きる時代です。非連続で誰も想像しなかったことが一気に起きる時代。
  section.about-sec
    b-container
      b-row
        b-col(cols="12" lg="6")
          h2.about-sec__title
            |働き方にとらわれず、<br>さまざまなスタッフが在籍
          p.about-sec__txt ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。すでに進歩を通り越した突然変異が起きる時代です。非連続で誰も想像しなかったことが一気に起きる時代。
        b-col
  section.about-overview
    b-container
      h3.text-center 会社概要
      table.about-table.mt-5
        tr
          th 社名
          td アイムファクトリー株式会社
        tr
          th 代表者
          td 久利可奈恵
        tr
          th 本社所在地
          td
            |〒102-0083 東京都千代田区麹町3-2 麹町共同ビル3F
        tr
          th 大阪サテライト
          td 〒553-0003 大阪府大阪市福島区福島5-1-1 若杉西梅田ビル10F
        tr
          th 事業内容
          td
            | ○ 人材紹介事業（正社員/契約社員）
            br
            | ○ プロジェクト就労支援事業（フリーランス）
            br
            | ○ IT/Webエンジニア向けのキャリア情報発信事業
            br
            | 「> エンジニアファクトリー」
            br
            | 「> 社内SE転職ナビ®」
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang='scss' scoped>
@import "../assets/scss/custom.scss";
.about-intro {
  margin-bottom: 6rem;
}
.home-intro {
  background: red;
}
.about-sec01 {
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: end;
  align-items: flex-end;
  height: 439px;
  margin-bottom: 3rem;
  &__body {
    width: 50%;
    height: auto;
    /* margin-right: -5%; */
    padding: 2rem;
    z-index: 2;
    background: #fff;
    position: relative;
  }
  &__img {
    width: 80%;
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 100%;
    }
  }
}
.about-sec02 {
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 439px;
  margin-bottom: 3rem;
  flex-direction: row-reverse;
  &__body {
    width: 50%;
    height: auto;
    /* margin-right: -5%; */
    padding: 2rem;
    z-index: 2;
    background: #fff;
    position: relative;
  }
  &__img {
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
    }
  }
}
.about-sec-member {
  color: var(--primary);
  font-size: 1.4rem;
  &__title {
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.2;
  }
  &__txt {
    line-height: 1.2;
  }
}
.about-sec {
  margin: 8rem 0;
  &__title {
    font-weight: bold;
    line-height: 1.5;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  &__txt {
    line-height: 1.8;
  }
}
.about-table {
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
.about-overview {
  background: #eee;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.delighter {
  transition: all 0.8s ease-out;
  transform: translatey(-50%);
  opacity: 0;
}
.delighter.started {
  transform: none;
  opacity: 1;
}
</style>
