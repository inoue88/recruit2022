<template lang='pug'>
.message
  section.sec-message
    b-container
      b-row.sec-message(align-v="center")
        b-col.sec-message__body(cols="12" lg="6")
          h2.sec-message__title 700年の歴史ある産業が、<br>創業数ヶ月の会社に完敗する時代
          p.sec-message__txt ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。<br>すでに進歩を通り越した突然変異が起きる時代です。<br>非連続で誰も想像しなかったことが一気に起きる時代。<br>
          p.sec-message__txt 先日もサービスインして数ヶ月の質屋アプリ開発会社が大手資本に70億円で買収されたということが話題になりました。<br>買収価格70億円ということはその企業には少なくとも70億円以上の価値を生み出す力があるということです。質屋産業は鎌倉時代に誕生したと言われていますので700年以上の歴史があります。それだけの企業価値を数ヶ月で作れた会社が今までありましたでしょうか？<br>ここ数十年の間に旧来の個人商店型から大型化、特定商品への特化などで急激に成長した企業もありました。ただ、それでも数十年かかっています。
        b-col.sec-message__img-wrap
          img.sec-message__img(src='https://placehold.jp/800x800.png')
          img.sec-message__img-bg(src='https://placehold.jp/800x800.png')
  section.sec-message
    b-container
      b-row.sec-message.sec-message--rev(align-v="center")
        b-col.sec-message__body(cols="12" lg="6")
          h2.sec-message__title 変化し続ける顧客のニーズに<br>対して臨機応変に対応
          p.sec-message__txt 我々はITエンジニアに特化したビジネスを展開していますが、前述のように今すべての業界で急速なIT化が進み、一人ひとりの働き方も変化しています。<br>それに伴い、ITエンジニア自身の働き方も大きく変化。
          p.sec-message__txt 「ITエンジニア＝プログラムを書いて開発する」というスタイルから、「サービス自体を考え、設計し、プロデュースする」<br>といったように、より広範囲かつ大きな責任を伴うポジションに変化してきています。
          p.sec-message__txt そうなると私たちが顧客に対して提供すべきサービスにも、大きな変化が求められることになり、毎日新しい技術が開発されるIT業界の変化に終わりはありません。<br>つまり私たちのビジネスも「変化することが前提」で、変化し続ける顧客のニーズに対して臨機応変に対応していかなければ、将来に渡る事業成長はないということです。
        b-col.sec-message__img-wrap
          img.sec-message__img(src='https://placehold.jp/800x800.png')
          img.sec-message__img-bg(src='https://placehold.jp/800x800.png')
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.sec-message {
  $parent: &;
  position: relative;
  // margin-bottom: 10rem;
  overflow: hidden;
  &__body {
    background: #fff;
    // padding: 2rem;
  }
  &__title {
    font-size: 1.6rem;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    margin-top: 1.5rem;
  }
  &__img {
    width: 110%;
    transform: translate(10%, 0%);
  }
  &__img-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-10%, 15%);
    z-index: -1;
  }
  &__img-wrap {
    z-index: inherit;
    position: relative;
  }
  &--rev {
    flex-direction: row-reverse;
    #{$parent}__img {
      transform: translate(-10%, 0%);
    }
    #{$parent}__img-bg {
      transform: translate(10%, 15%);
    }
  }
  @include media-breakpoint-up(md) {
    padding: 0 5rem 5rem;
    &__body {
      background: #fff;
      padding: 2rem;
    }
    &__txt {
      margin-top: 3rem;
    }
  }
}

</style>
