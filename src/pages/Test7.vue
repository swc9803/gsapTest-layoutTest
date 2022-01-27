<template>
  <div class="wrapper" @mousemove="move">
    <div class="circle" />
    <div class="fixed"/>

    <div class="ss">
      <div class="eye">
        <div class="ball" ref="ball1"></div>
      </div>
      <div class="eye">
        <div class="ball" ref="ball2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const ball1 = ref()
    const ball2 = ref()
    const move = (e) => {
      const x = e.clientX + 'px'
      const y = e.clientY + 'px'
      const rex = e.clientX + 'px'
      const rey = e.clientY + 'px'

      ball1.value.style.left = x
      ball1.value.style.top = y
      ball2.value.style.left = rex
      ball2.value.style.top = rey
    }
    onMounted(() => {
      const circle = document.querySelector('.circle')
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        circle.style.left = mouseX + 'px'
        circle.style.top = mouseY + 'px'
      })
    })
    return {
      ball1, ball2, move
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}
.fixed {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/city.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  filter: grayscale(1);
}
.circle:hover ~ fixed {
  filter: none;
}
.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background-color: black; */
  border: 2px rgb(255, 255, 255) solid;
  /* opacity: 0.7; */
  filter: grayscale(0) blur(5px);
  transform: translate(-50%, -50%);
  z-index: 1;
}

.ss{
  position: absolute;
  width: 100%;
  text-align: center;
}
.ball{
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 40px;
  height: 40px;
  background: #aca9a9;
  border-radius: 50%;;
  border: 15px solid #333333;
}
</style>
