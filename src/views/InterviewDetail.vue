<template lang="pug">
  div
    TitleInterview(Title="自分の価値を高めるためには?と考えたときそれを実現できる会社はどんなものなのか考えて")
    b-container
      .interview-intro
        span.interview-intro__dep 2016年入社 / TOS Division
        div
          h2.interview-intro__name 岡安 恒壽
          span.interview-intro__name-en Okayasu Tsunetoshi
        .interview-intro__discription
          |人材紹介事業部で今期から、キャリアアドバイザーを務める松浦悠河（まつうらゆうが）。昨期は全社MVPを獲得し、1月からは会社初の支店である関西オフィスの立ち上げに挑戦する。新規事業にチャレンジする意気込み、入社3年目での抜擢、今後のキャリアビジョンについて聞いてみた。
      .interview-first
          .interview-section
            .interview-section__count 01
            h3.interview-section__title 出身校と学生のときに打ち込んだことを教えてください。
            .interview-section__content 東京農業大学出身で、お酒を造る仕組みを学ぶ醸造学というのを専攻していました。大学時代はサークルに「基礎スキー」をするところがあって、そこに所属していました。シーズンになると白馬でずっと住み込みをしつつ練習に明け暮れる。そんな時代を過ごしていました。
          .interview-section
            .interview-section__count 01
            h3.interview-section__title 出身校と学生のときに打ち込んだことを教えてください。
            .interview-section__content 東京農業大学出身で、お酒を造る仕組みを学ぶ醸造学というのを専攻していました。大学時代はサークルに「基礎スキー」をするところがあって、そこに所属していました。シーズンになると白馬でずっと住み込みをしつつ練習に明け暮れる。そんな時代を過ごしていました。
          .interview-section
            .interview-section__count 01
            h3.interview-section__title 出身校と学生のときに打ち込んだことを教えてください。
            .interview-section__content 東京農業大学出身で、お酒を造る仕組みを学ぶ醸造学というのを専攻していました。大学時代はサークルに「基礎スキー」をするところがあって、そこに所属していました。シーズンになると白馬でずっと住み込みをしつつ練習に明け暮れる。そんな時代を過ごしていました。
          .interview-section
            .interview-section__count 01
            h3.interview-section__title 出身校と学生のときに打ち込んだことを教えてください。
            .interview-section__content 東京農業大学出身で、お酒を造る仕組みを学ぶ醸造学というのを専攻していました。大学時代はサークルに「基礎スキー」をするところがあって、そこに所属していました。シーズンになると白馬でずっと住み込みをしつつ練習に明け暮れる。そんな時代を過ごしていました。
</template>

<script>
import Header from "../layout/Header.vue";
import TitleInterview from "../components/TitleInterview.vue";
import Footer from "../layout/Footer.vue";

export default {
  components: {
    Header,
    TitleInterview,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/custom.scss";

.interview-intro {
  padding: 2rem;
  // 変数で指定できるように
  background-color: #292b2e;
  color: white;
  width: 60%;
}
.interview-first {
  margin-top: 5rem;
  width: 80%;
}
.interview-section {
  border-bottom: 1px dotted var(--primary);
  margin-bottom: 2rem;
  padding: 1rem 1rem 1rem 7rem;
  position: relative;
  &__title {
    margin-bottom: 1rem;
  }
  &__count {
    position: absolute;
    color: var(--primary);
    left: 1rem;
    top: 1rem;
    line-height: 1;
    font-size: 3rem;
    padding-top: 1rem;
    letter-spacing: 2px;
    text-align: center;
    font-weight: bold;
    &:before {
      content: "Question";
      font-size: 12px;
      position: absolute;
      left: 0;
      top: 0;
      font-weight: normal;
      letter-spacing: 0.1em;
    }
  }
}
</style>
