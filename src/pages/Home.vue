<template>
  <div class="home">
    <img alt="app logo" :src="custom_logo" />
    <HelloWorld :msg="hello_message" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  path: '/',
  data() {
    return {
      hello_message:
        'Welcome to ' + (process.env.VUE_APP_TITLE || 'Your Vue.js App'),
      custom_logo:
        process.env.VUE_APP_CUSTOM_LOGO || require('@/assets/logo.png'),
    }
  },
  created() {
    console.log('Logging environment')
    console.log(process.env)
  },
}
</script>
