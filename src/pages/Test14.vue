<template>
  <div class="container" @mousemove="cursorMove">
    <section style="background: white">
      <div class="ball" ref="ball" />
      <div class="ball2" ref="balls" />
      1
    </section>
    <section style="background: skyblue">
      2
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const ball = ref()
    const balls = ref([])
    const cursorMove = (e) => {
      const x = e.pageX
      const y = e.pageY
      ball.value.style.transform = 'translate(' + x / 4 + '%,' + y / 4 + '%)'
      balls.value.style.transform = 'translate(' + x + 'px,' + y + 'px)'
    }
    return {
      ball, balls, cursorMove
    }
  }
}
</script>

<style lang="scss" scoped>
.ball{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;;
  border: 15px solid #333333;
  mix-blend-mode: difference;
  will-change: transform;
}
.ball2{
  position: absolute;
  // left: 70%;
  // transform: translate(-50%, -50%);
  z-index: 100;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;;
  border: 15px solid #333333;
  mix-blend-mode: difference;
  will-change: transform;
}
.container {
  position: relative;
  overflow-x: hidden;
  section {
    width: 100%;
    height: 100vh;
  }
}
</style>
