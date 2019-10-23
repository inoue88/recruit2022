<template lang="pug">
.home
  .home-visual
    .home-visual__message
      h1 社会に変革をもたらす<br>ヒトと企業を加速する
    b-carousel(id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-height="100vh")
      b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=10")
      b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=12")
  b-container
    section.sec-intro
      h1.sec-intro__title 社会に変革をもたらす<br>ヒトと企業を加速する
      p.sec-intro__read 私たち、アイムファクトリー株式会社は<br>世の中に新しい価値を提供する【IT人材】に特化したビジネスを展開し、2008年の創業以来、増収増益を続けています。
      p.sec-intro__read 2018年には関西サテライトオフィスがオープン。<br>これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
    section
      b-row.sec-common(align-v="center")
        b-col.sec-common__img-wrap
          img.sec-common__img(src='https://placehold.jp/800x600.png')
          //- img.sec-common__img-bg(src='https://placehold.jp/800x600.png')
        b-col(cols="12" lg="6")
          h2.sec-common__title 私達について
          span About Us
          p.sec-common__txt 2018年には関西サテライトオフィスがオープン。これから、IT人材サービスのプラットフォームとしてサービスのフルラインナップ化を実現すべく事業領域拡大にも力を入れていきます。
          .mt-4
            b-button(size="sm" variant='outline-dark' squared) READ MORE
    section
      b-row.sec-common.sec-common--rev(align-v="center")
        b-col.sec-common__img-wrap
          img.sec-common__img(src='https://placehold.jp/800x600.png')
          //- img.sec-common__img-bg(src='https://placehold.jp/800x600.png')
        b-col(cols="12" lg="6")
          h2.sec-common__title 代表メッセージ
          span.sec-common__sub-title Message
          p.sec-common__txt ITによって世の中が進歩するとよく言われますが、実際は違うと思っています。すでに進歩を通り越した突然変異が起きる時代です。非連続で誰も想像しなかったことが一気に起きる時代。
          .mt-4
            b-button(size="sm" variant='outline-dark' squared) READ MORE
    section
      b-row.sec-common.sec-common--culteur(align-v="center" align-h="end")
        b-col.sec-common__img-wrap
          //- img.sec-common__img(src='https://placehold.jp/800x400.png')
        b-col(cols="12" lg="9")
          .sec-common__body
            h1.sec-common__title カルチャー
            span.sec-common__sub-title culture
            p.sec-common__txt スキルアップやキャリアアップのための様々な機会を創出するだけでなく、個々のポテンシャルと意欲を信じて任せる文化があります。<br>新規事業プロジェクトや、チームリーダーには若手社員、時短ママ社員などを、働き方にとらわれず抜擢しています。
            .mt-4.text-right
              b-button(size="sm" variant='outline-dark' squared) READ MORE
  section.home-sec
    b-container 
      b-row(align-v="center")
        b-col(cols="12" lg="6")
          h1.home-sec__title 社員インタビュー
          span.home-sec__sub-title Interview
          p.home-sec__txt 目指すことこそ共有はしているけれど、哲学や美意識、信念、強みはさまざま。あなたにも、自分自身の譲れないものを胸に、あなたにしか生み出せない価値を発揮してほしいと思います。
      b-row(align-v="center" class='interview-lists')
          b-col(cols="6")(v-for="(item, index, n) in Interview" v-bind:key="item.id")
            a.interview-card(href='#')
              .interview-card__img
                img(src='http://placehold.jp/600x400.png' class='interview-card__img')
              .interview-card__body
                .interview-card__subtitle
                  strong {{item.YearEntry}}年入社
                  span.interview-card__slash
                  span {{item.Department}}
                .interview-card__title
                  span.interview-card__name {{item.Name}}
                  span.interview-card__name-en {{item.NameEn}}
                .interview-card__count
                  |0{{index +1}}
      .mt-4.text-center
        b-button(size="lg" variant='outline-dark' squared) READ MORE

  FooterEntry
</template>

<script>
import FooterEntry from "../components/FooterEntry.vue";
import Interview from "../api/Interview.json";
export default {
  components: {
    FooterEntry
  },
  data() {
    return {
      Interview: Interview
    };
  }
};
``;
</script>

<style lang="scss">
.home-visual {
  position: relative;
  &__message {
    position: absolute;
    color: #fff;
    z-index: 2;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
.sec-intro {
  text-align: center;
  padding: 10rem;
  &__title {
    font-size: 46px;
    margin-bottom: 2rem;
    letter-spacing: 0.3em;
    line-height: 1.6;
  }
  &__read {
    line-height: 1.8;
    margin-bottom: 1rem;
  }
}
.sec-common {
  $parent: &;
  position: relative;
  padding: 5rem 0 10rem;
  &__title {
    font-size: 2.6rem;
  }
  &__sub-title {
    font-weight: 400;
    letter-spacing: 0.2em;
  }
  &__txt {
    font-size: 0.875rem;
    line-height: 1.8;
    margin-top: 3rem;
  }
  &__img {
    width: 100%;
  }
  &__img-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-10%, 10%);
    z-index: -1;
  }
  &__img-wrap {
    position: relative;
  }
  &--rev {
    flex-direction: row-reverse;
    #{$parent}__img-bg {
      transform: translate(10%, 10%);
    }
  }
  &--culteur {
    #{$parent}__img {
      width: 400%;
    }
    #{$parent}__body {
      padding: 2rem;
      background: #fff;
    }
  }
}
.interview-lists {
  margin-top: 5rem;
}
.interview-card {
  margin: 0 2rem 2rem;
  display: block;
  &:hover {
    text-decoration: none;
  }
  &__subtitle {
    display: inline-block;
    border: 1px solid var(--primary);
    padding: 0.4rem 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: var(--primary);
  }
  &__img {
    width: 100%;
  }
  &__body {
    background: #fff;
    margin-top: 1rem;
    position: relative;
  }
  &__slash:after {
    content: "/";
    padding: 0 0.5rem;
  }
  &__name {
    font-size: 1.4rem;
    font-weight: 600;
  }
  &__name-en {
    padding-left: 1rem;
  }
  &__count {
    position: absolute;
    color: var(--primary);
    right: 0;
    top: 0;
    line-height: 1;
    font-size: 3rem;
    &:before {
      content: "case";
      font-size: 12px;
      position: absolute;
      left: -2.5em;
      top: -0.8em;
    }
    &:after {
      content: "";
      position: absolute;
      transform: rotate(-40deg);
      display: block;
      width: 45px;
      height: 1px;
      background: var(--primary);
      right: 2rem;
      top: 2px;
    }
  }
}
</style>
