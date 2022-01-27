<template>
  <div class="dd"></div>
  <div>
    <div class="em">
      <p>em</p>
      <p>em</p>
      <p>em</p>
      <p>em</p>
    </div>
  </div>
  <div class="rem">
    <p>em</p>
    <p>em</p>
    <p>em</p>
    <p>em</p>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.dd {
  width: 100%;
  height: 50px;
  background: red;
  position: relative;
  // left: 50%;
}
.em {
  font-size: 5em;
  display: flex;
  p {
    // margin: 40px;
    // padding: 40px;
    border: 3px black solid;
  }
}
.rem {
  font-size: 5rem;
  display: flex;
  p {
    // margin: 40px;
    // padding: 40px;
    border: 3px black solid;
  }
}
</style>
