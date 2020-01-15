<template lang="pug">
.imageSlider
  transition-group(name="fade", tag="div")
    div.imageSlider-wrapper(v-for="number in [currentNumber]", :key="number")
      img.imageSlider-item(:src="currentImage",)
  .header-hero__scroll
    |SCROLL
    span.header-hero__bar

</template>

<script>
// import ScrollOut from 'scroll-out'

export default {
  data () {
    return {
      images: [
        'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      ],
      currentNumber: 0,
      timer: null
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 7000)
    },
    next: function () {
      this.currentNumber += 1
    }
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';

.imageSlider {
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  //overflow: hidden;
  .imageSlider-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .imageSlider-item {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    //transform: translateY(-25%);
  }
}

.fade-enter-active,
.fade-leave-active {
  //position: absolute;
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}

.header-hero__scroll {
  z-index: 1;
  display: block;
  position: absolute;
  right: 35px;
  bottom: 0;
  width: 18px;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  transition: opacity .8s cubic-bezier(.43,.2,.02,1);
  color: white;
}
.header-hero__bar {
  position: relative;
  display: block;
  width: 1px;
  height: 160px;
  margin: 0 auto;
  overflow: hidden;
  &:before{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    -webkit-animation: cmn-induction 3s cubic-bezier(.43,.2,.02,1) 1s infinite;
    animation: cmn-induction 3s cubic-bezier(.43,.2,.02,1) 1s infinite;
  }
}
@keyframes cmn-induction {
  0% {
      transform: translateY(-101%)
  }
  70% {
      transform: translateY(101%)
  }
  to {
      transform: translateY(101%)
  }
}

</style>
