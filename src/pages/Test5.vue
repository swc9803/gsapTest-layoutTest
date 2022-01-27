<template>
  <div class="wrapper">
    <img class="dd" src="@/assets/gro.png">
    <img style="left: 100%" class="dd" src="@/assets/gro.png">
    모바일 배려 = 4줄 pc = 3줄?
  </div>
</template>

<script>
// import { gsap } from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      // gsap
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  background: rgb(77, 77, 77);
}
.dd {
  position: absolute;
  width: 100%;
  filter: grayscale(0.7);
}
</style>
