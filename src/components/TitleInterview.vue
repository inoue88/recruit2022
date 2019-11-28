<template lang="pug">
.title-intervie
  h1 title-intervie
  //- picture.TitleCommon__img
  //-   source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--pc.jpg'")
  //-   source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--sp.jpg'")
  //-   img(src="images/picture_s.gif" alt="")
  //- .TitleCommon__wrap
  //-   h1.TitleCommon__main {{title.Ja}}
  //-   span.TitleCommon__sub {{title.En}}
</template>

<script>
export default {
  data () {
    return {
      // path: this.$route.path
    }
  },
  computed: {
    title: function () {
      let title = this.$route.path
      switch (title) {
        case '/about':
          title = {En: 'about', Ja: '私達について', Code: 'about'}
          return title
        case '/message':
          title = {En: 'message', Ja: '代表メッセージ', Code: 'message'}
          return title
        case '/culture':
          title = {En: 'culture', Ja: 'カルチャー', Code: 'culture'}
          return title
        case '/interview':
          title = {En: 'nterview', Ja: '社員インタビュー', Code: 'interview'}
          return title
        case '/job':
          title = {En: 'job', Ja: '採用情報', Code: 'job'}
          return title
        case '/entry':
          title = {En: 'Entry', Ja: 'エントリー', Code: 'Entry'}
          return title
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.TitleCommon {
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--primary);
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 2;
  height: 60vh;
  max-height: 500px;
  &__img {
    overflow: hidden;
    width: 100%;
    height: 60vw;
    opacity: 0.6;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      min-width: 100%;
      min-height: 100%;
      max-width: inherit;
      background-attachment: fixed;
      animation: grow 60s linear 10ms infinite;
      transition: all 0.2s ease-in-out;
    }
  }
  &__wrap {
    position: absolute;
    color: var(--white);
    width: 100%;
    top: 50%;
    text-align: center;
    // left: 50%;
    // -webkit-transform: translate(-50%, 0%);
    // transform: translate(-50%, 0%);
    z-index: 3;
  }
  &__title {
    font-size: 40px;
    font-weight: 600;
  }
  @include media-breakpoint-up(md) {
    margin-bottom: 7rem;
    & {
      height: 25vw;
    }
  }
}
@keyframes grow {
  /*微差で拡大/縮小するアニメーション設定*/
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
}
</style>
