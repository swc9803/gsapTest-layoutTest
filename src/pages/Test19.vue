<template>
  <!-- stagger 테스트 -->
  <button @click="re">restart</button>
  <div class="flex">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    const re = () => {
      gsap.fromTo('.box', { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 })
    }
    onMounted(() => {
      gsap.fromTo('.box', { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 })
    })
    return {
      re
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
