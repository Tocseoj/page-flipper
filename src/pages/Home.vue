<template>
  <div
    class="wrapper"
    ref="home"
    v-scroll="onScroll"
    :style="{ backgroundColor }"
  >
    <div class="slide" v-for="(slide, index) in slides">
      <div class="inner-wrapper">
        <div class="content">
          <youtube
            style=""
            :video-id="ytId(slide.url)"
            :player-vars="ytVars(slide.url, 1)"
            :mute="index !== currentIndex"
            :player-width="
              $refs.home
                ? $refs.home.clientWidth > 420
                  ? 420
                  : $refs.home.clientWidth
                : 420
            "
            :player-height="
              $refs.home
                ? ($refs.home.clientWidth > 420
                    ? 420
                    : $refs.home.clientWidth) * 0.5625
                : 420 * 0.5625
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  name: 'Home',
  path: '/',
  data() {
    return {
      slides: [
        {
          url: 'https://www.youtube.com/watch?v=BNOVlrqfQSo',
          color: {
            r: 110,
            g: 117,
            b: 251,
          },
        },

        {
          url: 'https://www.youtube.com/watch?v=095l0MJF7-w',
          color: {
            r: 243,
            g: 116,
            b: 70,
          },
        },
        {
          url: 'https://www.youtube.com/watch?v=4GHRLuNq7D8',
          color: {
            r: 10,
            g: 84,
            b: 134,
          },
        },
        {
          url: 'https://www.youtube.com/watch?v=4VGyoYVNZkk',
          color: {
            r: 238,
            g: 92,
            b: 120,
          },
        },
      ],
      backgroundColor: this.toCSS({
        r: 110,
        g: 117,
        b: 251,
      }),
      scrollLeft: 0,
      currentIndex: 0,
      hello_message:
        'Welcome to ' + (process.env.VUE_APP_TITLE || 'Your Vue.js App'),
      custom_logo:
        process.env.VUE_APP_CUSTOM_LOGO || require('@/assets/logo.png'),
    }
  },
  methods: {
    randomColor() {
      const rand = () => Math.floor(256 * Math.random())
      return {
        r: rand(),
        g: rand(),
        b: rand(),
      }
    },
    onScroll(event, current) {
      if (this.$refs.home) {
        // console.log('scroll')
        let viewWidth = this.$refs.home.clientWidth
        // let width = this.$refs.home.scrollWidth
        let from = Math.floor(current.scrollLeft / viewWidth)
        let to = Math.ceil(current.scrollLeft / viewWidth)
        let fraction = (current.scrollLeft - viewWidth * from) / viewWidth
        // console.log(`${from} : ${to} = ${fraction}`)
        if (fraction < 0.01) {
          this.currentIndex = from
          console.log(this.currentIndex)
        }

        this.backgroundColor = this.toCSS(
          from === to
            ? this.slides[from].color
            : this.interpolateRGB(
                this.slides[from].color,
                from + 1 === this.slides.length
                  ? this.slides[from].color
                  : this.slides[to].color,
                fraction
              )
        )
      }
    },
    setupSlides() {
      let s = []
      for (let i = 0; i < 10; i++) {
        s.push({
          backgroundColor: this.randomColor(),
        })
      }
      return s
    },
    interpolateRGB(from, to, fraction) {
      return {
        r: (to.r - from.r) * fraction + from.r,
        g: (to.g - from.g) * fraction + from.g,
        b: (to.b - from.b) * fraction + from.b,
      }
    },
    toCSS(color) {
      return `rgb(${color.r}, ${color.g}, ${color.b})`
    },
    ytId(url) {
      return getIdFromURL(url)
    },
    ytVars(url, autoplay = 0) {
      return {
        start: getTimeFromURL(url),
        autoplay: autoplay,
        playsinline: 1,
        rel: 0,
        loop: 1,
        playlist: getIdFromURL(url),
      }
    },
  },
}
</script>

<style lang="stylus">
.wrapper
  height 100vh
  width 100vw

  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;

.inner-wrapper
  height 100vh
  width 100vw
  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;

.slide
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
</style>
