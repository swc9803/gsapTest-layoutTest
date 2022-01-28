<template>
  <div class="container">
    <SpaceBackground />
    <div class="wrapper">
      <!-- 최성우 누르면 소개페이지로 -->
      <p ref="mainText">끝없이 배움을 추구하는 개발자<b> 최성우 </b>입니다</p>
      <p>hi</p>
    </div>
  </div>
  <div class="container">
    소개
  </div>
  <div class="container">
    백그라운드 이미지 피자처럼
  </div>
  <div class="container">
    작업물
  </div>
</template>

<script>
import SpaceBackground from '@/components/SpaceBackground'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const mainText = ref()

    onMounted(() => {
      gsap.from(mainText.value, {
        opacity: 0, yPercent: -20, duration: 1, ease: 'ease-out', delay: 1
      })
    })
    return {
      mainText
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
    padding: 6% 2%;
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
        transition: .3s;
        &:hover {
          color: rgb(255, 200, 80);
        }
        &::before {
          position: absolute;
          content: '★';
          color: white;
          font-size: 0.3em;
          margin: 1em 0 0 0.5em;
          animation: twinkle 5s infinite;
        }
        &::after {
          position: absolute;
          content: '★';
          color: white;
          font-size: 0.3em;
          margin: 2.5em 0 0 -4.2em;
          animation: twinkle 5s infinite;
        }
        @keyframes twinkle {
          0% {
            opacity: 0; rotate: 0deg;
          }
          5% {
            opacity: 1; transform: scale(1.3); rotate: 90deg;
          }
          10% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
