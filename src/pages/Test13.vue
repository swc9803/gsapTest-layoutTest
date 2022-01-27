<template>
  <div class="hwrap">
    <div class="hmove">
      <img class="hitem" src="@/assets/city.jpg">
      <img class="hitem" src="@/assets/img.jpg">
      <img class="hitem" src="@/assets/img.jpg">
      <img class="hitem" src="@/assets/img.jpg">
    </div>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.hwrap {
  overflow: hidden;
  .hmove {
    display: flex;
    .hitem {
      flex-shrink: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      text-align: center;
    }
  }
}

/* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
@keyframes tickerh {
  0% {
    transform: translate3d( 100%, 0, 0)
  }
  100% {
    transform: translate3d( -400%, 0, 0)
  }
}
.hmove { animation: tickerh linear 5s infinite; }
</style>
