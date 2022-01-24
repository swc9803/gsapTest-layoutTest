<template>
  <div class="em">
    <p>em</p>
    <p>em</p>
    <p>em</p>
    <p>em</p>
  </div>
  <div class="rem">
    <p>rem</p>
    <p>rem</p>
    <p>rem</p>
    <p>rem</p>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.em {
  font-size: 2em;
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
