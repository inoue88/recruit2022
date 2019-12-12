<template lang="pug">
.home
  .header-hero
    carousel(
      :per-page="1"
      :pagination-enabled='false'
      :mouse-drag="false"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="8000")
      slide
        picture
          source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-job--pc.jpg'")
          source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-job--sp.jpg'")
          img(src="images/picture_s.gif" alt="")
      //- slide
      //-   picture
      //-     source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-about--pc.jpg'")
      //-     source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-about--sp.jpg'")
      //-     img(src="images/picture_s.gif" alt="")
      //- slide
      //-   picture
      //-     source(media="(min-width: 960px)" v-bind:srcset="'/static/images/common/header-message--pc.jpg'")
      //-     source(media="(min-width: 320px)" v-bind:srcset="'/static/images/common/header-message--sp.jpg'")
      //-     img(src="images/picture_s.gif" alt="")
    .header-hero__content
      h1 社会に変革をもたらす<br>ヒトと企業を加速する
      p Bringing change to society Accelerate people and companies
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'home',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-hero{
  position: relative;
  &__content{
    position: absolute;
    color: #fff;
    bottom: 40%;
    left: 50%;
    font-weight: normal;
    transform: translateX( -50%);
    text-align: center;
  }
}
.VueCarousel{
  &-slide{
    position: relative;
    width: 100%;
    height: 100%;
    height: 80vh;
    background: var(--primary);
    img{
      opacity: 0.6;
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
    }
  }
}
</style>
