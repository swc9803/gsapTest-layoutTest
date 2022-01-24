<template>
  <div class="home">
    <div class="container">
      <div class="wrapper">
        <p>This is a fairly short sentence.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      const r = 100
      const adjustJank = 4
      const scrollElems = document.querySelectorAll('.container p')
      function adjustTween (obj, d) {
        let progress = 0
        if (obj.tween) {
          progress = obj.tween.progress()
          obj.tween.kill()
        }

        var t = d / r

        obj.tween = gsap.fromTo(obj.parentElement, { x: 0 }, {
          duration: t,
          x: '-' + (d + adjustJank),
          ease: 'linear',
          repeat: -1
        }).progress(progress)
      }

      scrollElems.forEach((obj, i) => {
        var d = obj.offsetWidth
        var parent = obj.parentElement
        var clone = obj.cloneNode(true)
        parent.appendChild(clone)
        gsap.set(parent.parentElement, { width: d })

        adjustTween(obj, d)
      })
    })
    return {

    }
  }
}
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container{
  white-space: nowrap;
  margin: 1em;
  overflow: hidden;
  background: #CCC;
}
.container p{
  margin: 0;
  padding: 0;
  display: inline-block;
  font-size: 4vw;
  font-family: arial;
}

</style>
