<template lang="pug">
.title-common
  .title-common__wrap
    picture.title-common__img
      source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--pc.jpg'")
      source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-' + `${title.Code}` + '--sp.jpg'")
      img(src="images/picture_s.gif" alt="")
  .title-common__body
    h1.title-common__main {{title.Ja}}
    span.title-common__sub {{title.En}}
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
        case '/message':
          title = {En: 'message', Ja: 'メッセージ', Code: 'message'}
          return title
        case '/culture':
          title = {En: 'culture', Ja: 'カルチャー', Code: 'culture'}
          return title
        case '/style':
          title = {En: 'style', Ja: 'スタイル', Code: 'style'}
          return title
        case '/member':
          title = {En: 'member', Ja: 'メンバー', Code: 'member'}
          return title
        case '/job':
          title = {En: 'Recruitment information', Ja: '採用情報', Code: 'job'}
          return title
        case '/entry':
          title = {En: 'entry', Ja: 'エントリー', Code: 'entry'}
          return title
        case '/entry/completed':
          title = {En: 'Entry Completed', Ja: '応募完了', Code: 'EntryCompleted'}
          return title
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";
.title-common {
  position: relative;
  margin-bottom: 3rem;
  background: var(--primary);
  z-index: 2;
  height: 60vh;
  max-height: 600px;
  &__wrap{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  &__img img{
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-width: 100%;
    // min-height: 100%;
    max-width: inherit;
    background-attachment: fixed;
    animation: grow 60s linear 10ms infinite;
  }
  &__body {
    position: absolute;
    color: var(--white);
    width: 100%;
    top: 60%;
    text-align: center;
    z-index: 3;
  }
  &__title {
    font-size: 40px;
    font-weight: 600;
  }
  @include media-breakpoint-up(lg) {
    &__body {
      top: 50%;
    }
    margin-bottom: 5rem;
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
