<template>
  <div class="wrapper">
    <div
      class="slide"
      v-for="index in slideCount"
      :style="{ backgroundColor: randomColor() }"
    >
      <div class="inner-wrapper">
        <div class="content">
          <p>Slide {{ index }} of {{ slideCount }}</p>
          <p style="color:white">Slide {{ index }} of {{ slideCount }}</p>
          <div v-if="index == 3">
            <p v-for="i2 in 200">Slide {{ index }} of {{ slideCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  path: '/',
  data() {
    return {
      slideCount: 10,
      hello_message:
        'Welcome to ' + (process.env.VUE_APP_TITLE || 'Your Vue.js App'),
      custom_logo:
        process.env.VUE_APP_CUSTOM_LOGO || require('@/assets/logo.png'),
    }
  },
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random())
      return `rgb(${r()}, ${r()}, ${r()})`
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
  overflow-y: scroll;

.slide
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
</style>
