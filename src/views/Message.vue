<template lang='pug'>
.message
  section.sec-message
    b-container
      .sec-message
        .sec-message__body
          h2.sec-message__title 仕事の根幹
          p.sec-message__txt 私のビジネスパーソンとして始まりは、従業員10名程の小さなベンチャー企業からスタートしました。業種は今と同じく、IT人材のキャリア支援をやっていたのですが、当時はOJTもなく女性の営業は私のみでもちろんメンター制度などもありません。
          p.sec-message__txt 何もかも自分で考えながらやっていかなければならない状況の中、ビジネスの本質も理解できていなかったので毎日が試行錯誤の連続でした。
          p.sec-message__txt しかし私としては給与をもらいながらトライアンドエラーを繰り返していける環境というのは非常に魅力的で不満は一切ありませんでした。顧客の声を聴き世の中のニーズを理解し最適解を見つける。一つひとつの体験を幅広く積み上げていけたのはベンチャーならではだったと思います。
          p.sec-message__txt 会社も自分の成長と歩調を合わせるように大きくなっていったので、とてもやりがいを感じビジネスの醍醐味を経験できました。
        .sec-message__img-wrap
          b-img(v-bind:src="`/static/images/message/image01.jpg`" class="sec-message__img")
      .sec-message.sec-message--rev(data-scroll)
        .sec-message__body
          h2.sec-message__title 卒業と起業
          p.sec-message__txt 出産などのライフイベントが重なり自身のバランスと時間を確保する為にその会社を卒業しましたが今なら様々な働き方がありますので辞めていなかったかもしれません。<br>そして当時はリーマンショックが起こったまさにその時だったので、多くの組織が崩壊し色々な人が職を失っていくのをみました。「安定」とは何か、「キャリア」とはどうあるべきなのか。
          p.sec-message__txt 世の中を通し、感じ、見て、じっくり考えることができたのは幸運でもありました。
          p.sec-message__txt 新しい価値観が生れ、また大きく変わっていくであろう節目にマンションの一室を借りて、スタートしたのがアイムファクトリーです。
        .sec-message__img-wrap
          b-img(v-bind:src="`/static/images/message/image02.jpg`" class="sec-message__img")
      .sec-message(data-scroll)
        .sec-message__body
          h2.sec-message__title アイムファクトリーという<br>会社でのやりがい
          p.sec-message__txt 私たちの仕事は「IT×人材」の領域にあります。
          p.sec-message__txt IT業界には「世の中はもっと便利になる」イノベーションを起こし熱意と技術を持って臨んでいる人々がたくさんいます。私たちはその企業と人、そして世の中の点と線を繋げる仕事です。
          p.sec-message__txt ITエンジニアは技術と経験さえあれば、年齢も性別も問いません。<br >働き方もキャリアも多様化しています。転職回数が多いのは悪いことですか。正社員が安定？非正規はネガティブでしょうか。正解はつねに変化しています。
          p.sec-message__txt 答えがないものを考えサービスを豊かにすることがイノベーティブでありキャリアだと思います。
        .sec-message__img-wrap
          b-img(v-bind:src="`/static/images/message/image03.jpg`" class="sec-message__img")
      .sec-message(data-scroll)
        .sec-message__body-center
          h2.sec-message__title メッセージ
          p.sec-message__txt 今はクリック一つで仕事も選択できる時代です。
          p.sec-message__txt では我々はなぜ存在しているのか。
          p.sec-message__txt 我々の介在価値はどこにあるのか。
          p.sec-message__txt これからキャリアはもっと自由になっていく。
          p.sec-message__txt そんな世の中で我々は必要とされるサービスを常に生み出していきたい、
          p.sec-message__txt そう考えています。
          p.sec-message__txt 様々なキャリアを受容し、圧倒的な成長と共に変化していく仲間を求めています。
</template>

<script>
import ScrollOut from 'scroll-out'
export default {
  name: 'Message',
  mounted () {
    ScrollOut({
      threshold: 0.2,
      once: true,
      onShown: function (el) {
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000)
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/custom.scss';
.sec-message {
  $parent: &;
  margin: 0 0 28rem 0;
  position: relative;
  &__title {
    font-size: 1.6rem;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    margin-top: 1.5rem;
  }
  &__img {
    width: 100%;
    -webkit-box-shadow: 40px 40px F0F1F7;
    box-shadow: 40px 40px #F0F1F7;
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
    width: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 2rem;
    z-index: -1;
  }
  &--rev {
    #{$parent}__body {
      margin-left: auto;
    }
    #{$parent}__img-wrap {
      right: inherit;
      left: 0;
    }
  }
  @include media-breakpoint-up(md) {
    padding: 0 0 3rem;
    margin: 8rem 0 0 0;
    &__body {
      background: rgba(255, 255, 255, .9);
      padding: 2rem;
      width: 580px;
    }
    &__body-center {
      margin: 0 auto;
      text-align: center;
      width: 800px;
    }
    &__txt {
      margin-top: 2rem;
    }
    &__img-wrap {
      z-index: inherit;
      width: 70%;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: -5rem;
      z-index: -1;
    }
  }
}
</style>
