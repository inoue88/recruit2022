<template lang='pug'>
.message
  .sec-message-intro
    .sec-message-intro__body
      p 今はクリック一つで仕事も選択できる時代。
      p では我々はなぜ存在しているのか。
      p 我々の介在価値はどこにあるのか。
      p これからキャリアはもっと自由になっていく。
      p そんな世の中で我々は必要とされるサービスを常に生み出していきたい、そう考えています。
      p 様々なキャリアを受容し、圧倒的な成長と共に変化していく仲間を求めています。
    .sec-message-intro__text.sec-message-intro__text01
    .sec-message-intro__text.sec-message-intro__text02
    .sec-message-intro__text.sec-message-intro__text03
    .sec-message-intro__text.sec-message-intro__text04
    .sec-message-intro__text.sec-message-intro__text05
  b-container
    section.sec-message
      .sec-message__body
        h2.sec-message__title 仕事の根幹
        p.sec-message__txt 私のビジネスパーソンとして始まりは、従業員10名程の小さなベンチャー企業からスタートしました。業種は今と同じく、IT人材のキャリア支援をやっていたのですが、当時はOJTもなく女性の営業は私のみでもちろんメンター制度などもありません。
        p.sec-message__txt 何もかも自分で考えながらやっていかなければならない状況の中、ビジネスの本質も理解できていなかったので毎日が試行錯誤の連続でした。
        p.sec-message__txt しかし私としては給与をもらいながらトライアンドエラーを繰り返していける環境というのは非常に魅力的で不満は一切ありませんでした。顧客の声を聴き世の中のニーズを理解し最適解を見つける。一つひとつの体験を幅広く積み上げていけたのはベンチャーならではだったと思います。
        p.sec-message__txt 会社も自分の成長と歩調を合わせるように大きくなっていったので、とてもやりがいを感じビジネスの醍醐味を経験できました。
      .sec-message__img(:style="{ backgroundImage: 'url(/static/images/message/image01.jpg)' }")
    section.sec-message.sec-message--rev
      .sec-message__body
        h2.sec-message__title 卒業と起業
        p.sec-message__txt 出産などのライフイベントが重なり自身のバランスと時間を確保する為に、その会社を卒業しました。しかし今なら様々な働き方がありますので、辞めていなかったかもしれません。
        p.sec-message__txt そして当時はリーマンショックが起こったまさにその時だったので、多くの組織が崩壊し色々な人が職を失っていくのを見ました。「安定」とは何か、「キャリア」とはどうあるべきなのか。
        p.sec-message__txt 世の中を通し、感じ、見て、じっくり考えることができたのは幸運でもありました。
        p.sec-message__txt 新しい価値観が生れまた大きく変わっていくであろう節目に、マンションの一室を借りてスタートしたのがアイムファクトリーです。
      .sec-message__img(:style="{ backgroundImage: 'url(/static/images/message/image02.jpg)' }")
    section.sec-message
      .sec-message__body
        h2.sec-message__title アイムファクトリーという<br>会社でのやりがい
        p.sec-message__txt 私たちの仕事は「IT×人材」の領域にあります。
        p.sec-message__txt IT業界には「世の中はもっと便利になる」。イノベーションを起こし熱意と技術を持って臨んでいる人々がたくさんいます。私たちの仕事はその企業と人、そして世の中の点と線を繋げる事です。
        p.sec-message__txt ITエンジニアは技術と経験さえあれば、年齢も性別も問いません。<br >働き方もキャリアも多様化しています。転職回数が多いのは悪いことですか？正社員が安定？非正規はネガティブでしょうか？正解はつねに変化しています。
        p.sec-message__txt 答えがないものから新しい価値観を見つける事でサービスは豊かになります。<br>様々なキャリアを受容し我々は常にイノベーティブで在り続けたいと考えています。
      .sec-message__img(:style="{ backgroundImage: 'url(/static/images/message/image03.jpg)' }")
</template>
ｘ
<script>
import ScrollOut from 'scroll-out'
export default {
  name: 'Message',
  mounted () {
    ScrollOut({
      once: true,
      targets: '.sec-message__img'
    })
    ScrollOut({
      once: true,
      targets: '.sec-message__body'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';

.message{
  .container{
    overflow: hidden;
  }
}
.sec-message-intro{
  &__body{
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
  margin-bottom: 3rem;
  padding: 6rem 1rem 8rem;
  @include media-breakpoint-up(md) {
    padding: 8rem 1rem 11rem;
    margin-bottom: 6rem;
  }
  @include media-breakpoint-up(lg) {
    padding: 8rem 0 12rem;
    &__body-center  {
      font-size: 1.3rem;
      margin: 0 auto;
      width: 800px;
    }
  }
}

.sec-message {
  $parent: &;
  margin-bottom: 8rem;
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
    font-size: 2rem;
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
  &--rev {
    #{$parent}__body {
      margin-left: auto;
    }
    #{$parent}__img {
      right: inherit;
      left: 0;
    }
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: 12rem;
    &__body {
      background: rgba(255, 255, 255, .9);
      padding: 2rem;
      width: 580px;
    }
    &__title {
      br{
        display: block;
      }
    }
    &__txt {
      margin-top: 2rem;
    }
    &__img {
      width: 60%;
      padding-top: 50%;
      position: absolute;
      right: 0;
      top: -3rem;
    }
  }
}

.sec-message-intro{
  overflow: hidden;
  position: relative;
  z-index: -2;
  &__text{
    background-position: right center;
    height: 100px;
    width: 4800px;
    position: absolute;
    z-index: -1;
  }
  &__text01{
    background: url(/static/images/message/text01.svg) repeat-x;
    background-size: contain;
    animation: slide1 60s linear infinite;
    top: 0;
  }
  &__text02{
    background: url(/static/images/message/text02.svg) repeat-x;
    background-size: contain;
    animation: slide2 60s linear infinite;
    top: 100px;
  }
  &__text03{
    background: url(/static/images/message/text03.svg) repeat-x;
    background-size: contain;
    animation: slide1 60s linear infinite;
    top: 200px;
  }
  &__text04{
    background: url(/static/images/message/text04.svg) repeat-x;
    background-size: contain;
    animation: slide2 60s linear infinite;
    top: 300px;
  }
  &__text05{
    background: url(/static/images/message/text05.svg) repeat-x;
    background-size: contain;
    animation: slide1 60s linear infinite;
    top: 400px;
  }
  @keyframes slide1{
    0%{
      transform: translate3d(0, 0, 0);
    }
    100%{
      transform: translate3d(-1692px, 0, 0);
    }
  }
  @keyframes slide2{
    0%{
      transform: translate3d(-1692px, 0, 0);
    }
    100%{
      transform: translate3d(0, 0, 0);
    }
  }
}

</style>
