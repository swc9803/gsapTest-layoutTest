<template>
  <div class="container">
    <SpaceBackground />
    <div class="wrapper">
      <!-- 최성우 누르면 소개페이지로 -->
      <p ref="mainText">끝없이 배움을 추구하는 웹퍼블리셔
        <span v-for="star in stars" :key="star.id" class="twinkle" :ref="twinkle">★</span>
        <b> 최성우 </b>입니다
      </p>
      <p>hi</p>
    </div>
  </div>
  <div class="container">
    About Me
  </div>
  <div class="container">
    작업물
  </div>
  <div class="container">
    Contact
  </div>
</template>

<script>
import SpaceBackground from '@/components/SpaceBackground'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const mainText = ref()
    const array = ref([])
    const twinkle = (el) => array.value.push(el)
    const star = ref()
    const stars = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])

    onMounted(() => {
      gsap.from(mainText.value, {
        // opacity: 0, yPercent: -20, duration: 1, ease: 'ease-out', delay: 1
      })
      for (var i = 0; i < 4; i++) {
        gsap.set(array.value[i], {
          xPercent: gsap.utils.random(0, 900),
          yPercent: gsap.utils.random(0, 300)
        })
        gsap.to(array.value[i], {
          // xPercent: gsap.utils.random(0, 900),
          // yPercent: gsap.utils.random(0, 300),
          opacity: 0,
          scale: 2,
          duration: 0.3,
          yoyo: true,
          onComplete () {
            gsap.delayedCall(gsap.utils.random(2, 5, 0.1), () => this.restart())
          }
        })
      }
      // gsap.utils.toArray(array.value).forEach(function (star) {
      //   gsap.to(star, {
      //     opacity: 0,
      //     scale: 2,
      //     duration: 0.5,
      //     repeat: -1,
      //     repeatDelay: gsap.utils.random(1.5, 2, 0.1),
      //     repeatRefresh: true
      //   })
      // })
    })
    return {
      mainText, twinkle, star, stars, array
    }
  },
  components: {
    SpaceBackground
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'KOTRALEAP';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRALEAP.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(22, 22, 22);
  }
  .wrapper {
    position: relative;
    padding: 20% 2%;
    text-align: center;
    font-family: 'KOTRALEAP';
    p {
      margin: 0;
      font-size: 1.8em;
      font-weight: 400;
      color: white;
      b {
        color: rgb(255, 255, 175);
        transform-origin: center center;
        cursor: pointer;
        transition: .5s;
        &:hover {
          color: rgb(255, 200, 80);
        }
      }
      .twinkle {
        position: absolute;
        pointer-events: none;
        font-size: 0.3em;
      }
    }
  }
}
</style>
