<template lang="pug">
.Hero
  video(playsinline autoplay muted loop)
    source(src="/static/images/common/hero.mp4" type="video/mp4")
    //- source(src="/static/images/common/footer-entry.webm" type="video/webm")
  h1 message
</template>

<script>
export default {
  data () {
  },
  mounted: function () {
    this.startRotation()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';
.Hero{
  height: 100vh;
  width: 100%;
  background: var(--primary);
}
video {
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  z-index: -1;
  z-index: 1;
  opacity: 0.4;
}

</style>
