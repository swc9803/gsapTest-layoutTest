<template>
  <div class="stars">
    <div class="star star1">★</div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      const setRandomPosition = item => {
        gsap.set(item, {
          x: gsap.utils.random(0, 100),
          y: gsap.utils.random(0, 100)
        })
      }
      setRandomPosition()
      gsap.to('.star1', {
        opacity: 0,
        scale: 2,
        duration: 0.3,
        yoyo: true,
        onComplete () {
          gsap.delayedCall(gsap.utils.random(1, 5, 0.1), () => {
            setRandomPosition()
            this.restart()
          })
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.stars {
  width: 100px;
  height: 100px;
  background: black;
}
.star {
  position: absolute;
  color: white;
}
</style>
