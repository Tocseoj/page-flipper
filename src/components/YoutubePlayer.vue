<template>
  <youtube
    style=""
    :video-id="ytId(video.url)"
    :player-vars="ytVars(video.url, 1)"
    :mute="index !== currentIndex"
    :player-width="$refs.home ? $refs.home.clientWidth : 350"
    :player-height="$refs.home ? $refs.home.clientWidth * 0.5625 : 350 * 0.5625"
  />
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>
