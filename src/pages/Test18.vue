<template>
  <div class="items">
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
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      const slider = document.querySelector('.items')
      let isDown = false
      let startX
      let scrollLeft

      slider.addEventListener('mousedown', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })

      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 2
        slider.scrollLeft = scrollLeft - walk
      })

      slider.addEventListener('touchstart', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })

      slider.addEventListener('touchend', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('touchcancel', () => {
        isDown = false
        slider.classList.remove('active')
      })

      slider.addEventListener('touchmove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 2
        slider.scrollLeft = scrollLeft - walk
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.items {
  height: 400px;
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
  &.active {
    cursor: grabbing;
  }
  .item {
    width: 300px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    font-weight: 100;
    color: rgba(0,0,0,0.5);
    box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
    &:hover {
      transform: scale(2);
    }
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
