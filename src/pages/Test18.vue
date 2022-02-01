<template>
  <div class="items" ref="slider"
  @mousedown="sliderDown" @mouseleave="sliderLeave" @mouseup="sliderUp" @mousemove="sliderMove">
    <div class="item">01</div>
    <div class="item">02</div>
    <div class="item">03</div>
    <div class="item">04</div>
    <div class="item">05</div>
    <div class="item">06</div>
    <div class="item">07</div>
    <div class="item">08</div>
    <div class="item">09</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const slider = ref()
    let isDown = false
    let startX
    let scrollLeft

    const sliderDown = (e) => {
      isDown = true
      startX = e.pageX - slider.value.offsetLeft
      scrollLeft = slider.value.scrollLeft
    }
    const sliderLeave = () => {
      isDown = false
    }
    const sliderUp = () => {
      isDown = false
    }
    const sliderMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.value.offsetLeft
      const walk = (x - startX) * 2
      slider.value.scrollLeft = scrollLeft - walk
    }
    return {
      slider, sliderDown, sliderLeave, sliderUp, sliderMove
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s;
  will-change: transform;
  position: relative;
  background: rgba(255,255,255,0.1);
  perspective: 500px;
  transition: .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: grab;
  .item {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    font-weight: 100;
    color: rgba(0,0,0,0.5);
    box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
    margin-right: 50px;
  }
}

.item:nth-child(1) { background: dodgerblue;}
.item:nth-child(2) { background: goldenrod;}
.item:nth-child(3) { background: paleturquoise;}
.item:nth-child(4) { background: gold;}
.item:nth-child(5) { background: cadetblue;}
.item:nth-child(6) { background: tomato;}
.item:nth-child(7) { background: lightcoral;}
.item:nth-child(8) { background: darkslateblue;}
.item:nth-child(9) { background: rebeccapurple;}

</style>
