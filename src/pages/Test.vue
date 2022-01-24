<template>
  <div class="wrapper">
    <div class="container">
      <div id="ring">
        <div class="img img1" @mouseenter="dd"/>
        <div class="img img2" />
        <div class="img img3" />
        <div class="img img4" />
        <div class="img img5" />
        <div class="img img6" />
      </div>
    </div>
  <div id="dragger" />
  </div>
</template>

<script>

import { gsap, Back } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      let xPos = 0
      const dragger = document.querySelector('#dragger')
      const ring = document.querySelector('#ring')

      gsap.timeline()
        .set(ring, { rotationY: 180 }) // set initial rotationY so the parallax jump happens off screen
        .set('.img', { // apply transform rotations to each image
          rotateY: (i) => i * -72,
          transformOrigin: '50% 50% 700px',
          z: -700,
          backgroundPosition: (i) => getBgPos(i),
          backfaceVisibility: 'hidden'
        })
        .from('.img', { duration: 1, yPercent: 100, opacity: 0, stagger: 0.4, ease: Back.easeOut.config(1.7) })

      Draggable.create(dragger, {
        onDragStart: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX
          xPos = Math.round(e.clientX)
        },
        onDrag: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX
          gsap.to(ring, {
            rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
            onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) }
          })
          xPos = Math.round(e.clientX)
        },
        onDragEnd: () => {
          // gsap.to(ring, { rotationY: Math.round(gsap.getProperty(ring,'rotationY')/36)*36 }) // move to nearest photo...at the expense of the inertia effect
          gsap.set(dragger, { x: 0, y: 0 }) // reset drag layer
        }
      })
      function getBgPos (i) { // returns the background-position string to create parallax movement in each image
        return (-gsap.utils.wrap(0, 360, gsap.getProperty(ring, 'rotationY') - 180 - i * 36) / 360 * 400) + 'px 0px'
      }
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
html, body, #ring, .img{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
#dragger {
  width: 100%;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  /* background: black; */
}
div {
  position: absolute;
}
.container {
  perspective: 1500px;
  width: 30%;
  height: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.img1 {
  background: black;
}
.img2 {
  background: rgb(110, 106, 106);
}
.img3 {
  background: rgb(189, 138, 138);
}
.img4 {
  background: rgb(102, 44, 44);
}
.img5 {
  background: rgb(86, 122, 51);
}
.img6 {
  background: rgb(125, 126, 64);
}
.img7 {
  background: rgb(189, 138, 138);
}
.img8 {
  background: rgb(51, 25, 41);
}
.img9 {
  background: rgb(86, 122, 51);
}
.img10 {
  background: rgb(24, 132, 165);
}
</style>
