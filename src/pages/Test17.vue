<template>
  <!-- 타이핑 애니메이션 -->
  <div class="result">
    끝없이 배움을 추구하는 개발자 최성우 입니다
  </div>
  <p class="dd">hi</p>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      // eslint-disable-next-line no-extend-native
      String.prototype.toKorChars = function () {
        var cCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
        var cJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']; var cho; var jung; var jong
        var str = this
        var cnt = str.length
        var chars = []
        var cCode
        for (var i = 0; i < cnt; i++) {
          cCode = str.charCodeAt(i)
          if (cCode === 32) {
            chars.push(' ')
            continue
          }
          if (cCode < 0xAC00 || cCode > 0xD7A3) {
            chars.push(str.charAt(i)); continue
          }
          cCode = str.charCodeAt(i) - 0xAC00

          jong = cCode % 28
          jung = ((cCode - jong) / 28) % 21
          cho = (((cCode - jong) / 28) - jung) / 21

          chars.push(cCho[cho])
          chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28)))
          if (cJong[jong] !== '') {
            chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28) + jong))
          }
        }

        return chars
      }

      var result = '끝없이 배움을 추구하는 개발자<p class="dd"> 최성우 </p>입니다'
      var typeing1 = []
      result = result.split('')

      for (var k = 0; k < result.length; k++) {
        typeing1[k] = result[k].toKorChars()
      }

      var resultDiv = document.getElementsByClassName('result')[0]

      var text = ''
      var i = 0
      var j = 0

      var imax = typeing1.length

      var inter = setInterval(typi, 50)

      function typi () {
        if (i <= imax - 1) {
          var jmax = typeing1[i].length
          resultDiv.innerHTML = text + typeing1[i][j]
          j++
          if (j === jmax) {
            text += typeing1[i][j - 1]
            i++
            j = 0
          }
        } else {
          clearInterval(inter)
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .dd {
    font-size: 50px;
    color: yellow;
  }
div {
  display: inline-block;
  font-size:30px;
  line-height: 28px;
  border-right: 1px solid #000;
  padding-right: 2px;
  box-sizing: border-box;
  animation: cursor 0.4s infinite;
}

 @keyframes cursor{
  0% {
    border-right: 1px solid #fff
  }
  50% {
    border-right: 1px solid #000
  }
  100% {
    border-right: 1px solid #fff
  }
}
</style>
