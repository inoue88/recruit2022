<template lang="pug">
  .message
    HeaderTitle(TitleEn="Message" TitleJa="メッセージ")
    section.sec-message
      b-container
        b-row.sec-message--rev(align-v="center")
          b-col.sec-message__img-wrap
            img.sec-message__img(src='https://placehold.jp/800x800.png')
            img.sec-message__img-bg(src='https://placehold.jp/800x800.png')
          b-col.sec-message__body(cols="12" lg="6")
            h2.sec-message__title 700年の歴史ある産業が、<br>創業数ヶ月の会社に完敗する時代
            p.sec-message__txt ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。<br>すでに進歩を通り越した突然変異が起きる時代です。<br>非連続で誰も想像しなかったことが一気に起きる時代。<br>
            p.sec-message__txt 先日もサービスインして数ヶ月の質屋アプリ開発会社が大手資本に70億円で買収されたということが話題になりました。<br>買収価格70億円ということはその企業には少なくとも70億円以上の価値を生み出す力があるということです。質屋産業は鎌倉時代に誕生したと言われていますので700年以上の歴史があります。それだけの企業価値を数ヶ月で作れた会社が今までありましたでしょうか？<br>ここ数十年の間に旧来の個人商店型から大型化、特定商品への特化などで急激に成長した企業もありました。ただ、それでも数十年かかっています。
    section.sec-message
      b-container
        b-row(align-v="center")
          b-col.sec-message__img-wrap
            img.sec-message__img(src='https://placehold.jp/800x800.png')
            img.sec-message__img-bg(src='https://placehold.jp/800x800.png')
          b-col.sec-message__body(cols="12" lg="6")
            h2.sec-message__title 変化し続ける顧客のニーズに<br>対して臨機応変に対応
            p.sec-message__txt 我々はITエンジニアに特化したビジネスを展開していますが、前述のように今すべての業界で急速なIT化が進み、一人ひとりの働き方も変化しています。<br>それに伴い、ITエンジニア自身の働き方も大きく変化。
            p.sec-message__txt 「ITエンジニア＝プログラムを書いて開発する」というスタイルから、「サービス自体を考え、設計し、プロデュースする」<br>といったように、より広範囲かつ大きな責任を伴うポジションに変化してきています。
            p.sec-message__txt そうなると私たちが顧客に対して提供すべきサービスにも、大きな変化が求められることになり、毎日新しい技術が開発されるIT業界の変化に終わりはありません。<br>つまり私たちのビジネスも「変化することが前提」で、変化し続ける顧客のニーズに対して臨機応変に対応していかなければ、将来に渡る事業成長はないということです。
      //- section
      //-   b-row.sec-common(align-v="center")
      //-     b-col.sec-common__img-wrap
      //-       img.sec-common__img(src='https://placehold.jp/800x600.png')
      //-       //- img.sec-common__img-bg(src='https://placehold.jp/800x600.png')
      //-     b-col(cols="12" lg="6")
      //-       h2.sec-common__title 私達について
      //-       span About Us
      //-       p.sec-common__txt 2018年には関西サテライトオフィスがオープン。これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
      //-       .mt-4
      //-         b-button(size="sm" variant='outline-dark' squared) READ MORE
      //- section.about-sec
      //-   .message-intro
      //-     h2 イノベーションに関わるすべての人と企業を<br>支援するため常に挑戦し、変化し続ける
      //-     h4.mt-4 代表久利 可奈恵<br>KANAE KURI
      //-   b-row(align-v="center" class='mb-5')
      //-     b-col(cols="12" lg="5")
      //-       h3 700年の歴史ある産業が、<br>創業数ヶ月の会社に完敗する時代
      //-       p ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。すでに進歩を通り越した突然変異が起きる時代です。非連続で誰も想像しなかったことが一気に起きる時代。
      //-       p 先日もサービスインして数ヶ月の質屋アプリ開発会社が大手資本に70億円で買収されたということが話題になりました。買収価格70億円ということはその企業には少なくとも70億円以上の価値を生み出す力があるということです。質屋産業は鎌倉時代に誕生したと言われていますので700年以上の歴史があります。それだけの企業価値を数ヶ月で作れた会社が今までありましたでしょうか？ここ数十年の間に旧来の個人商店型から大型化、特定商品への特化などで急激に成長した企業もありました。ただ、それでも数十年かかっています。
      //-     b-col
      //-       b-img(src="//discover.candiac.ca/assets/images/candiac-banner.jpg" fluid)
      //-   b-row(align-v="center")
      //-     b-img(src="//discover.candiac.ca/assets/images/candiac-banner.jpg" fluid)
      //-     b-col(cols="12" lg="5")
      //-       h3 すべての業界で急速なIT化が進み、一人ひとりの働き方も変化
      //-       p 我々はITエンジニアに特化したビジネスを展開していますが、前述のように今すべての業界で急速なIT化が進み、一人ひとりの働き方も変化しています。それに伴い、ITエンジニア自身の働き方も大きく変化。「ITエンジニア＝プログラムを書いて開発する」というスタイルから、「サービス自体を考え、設計し、プロデュースする」といったように、より広範囲かつ大きな責任を伴うポジションに変化してきています。
      //-       p そうなると私たちが顧客に対して提供すべきサービスにも、大きな変化が求められることになり、毎日新しい技術が開発されるIT業界の変化に終わりはありません。つまり私たちのビジネスも「変化することが前提」で、変化し続ける顧客のニーズに対して臨機応変に対応していかなければ、将来に渡る事業成長はないということです。
      //-   div
      //-     h3 自由な発想で新しいビジネスモデルを築くための挑戦をしていく。
      //-     p 変化をすることは、決して大変なことばかりではありません。私たちがこれまでのビジネスで培った膨大なデータと、一人ひとりのメンバーの中に蓄積された独自のノウハウをうまく組み合わせながら、自由な発想で新しいビジネスモデルを築くための挑戦をしていく。そのためには、これまでの常識や現状に疑問を持ち、変化することをとことん楽しむ意識を持つことが、結果的に革新的な挑戦につながっていくのだと思います。
      //-     p 私たちが目指すのは「世の中に変化を与え、イノベーションを生み出せる人を増やす」こと。だからこそ、まずは私たち自身が大小さまざまな変化を楽しみながら挑戦していくことが必要ですし、アイムファクトリーはそれができる会社だと確信しています。そしてこれからさらに挑戦できる環境を作り出していきます。
      //-     p こうした私たちの思いに共感していただける方だけを共に成長できる仲間として歓迎します。
    FooterEntry
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
import FooterEntry from "../components/FooterEntry.vue";

export default {
  name: "about",
  components: {
    HeaderTitle,
    FooterEntry
  }
};
</script>

<style lang="scss" scoped>
.sec-message {
  $parent: &;
  position: relative;
  // 分岐が必要
  padding: 0 5rem 5rem;
  margin-bottom: 10rem;
  overflow: hidden;
  &__body {
    background: #fff;
    padding: 2rem;
  }
  &__title {
    font-size: 1.6rem;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    margin-top: 3rem;
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
}
</style>
