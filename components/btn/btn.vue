<template>
  <button v-on:click="click" class="btn">{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: String,
    click: Function
  }
}
</script>
<style scoped lang="scss">

$dark-grey: #5f5f5f;
$light-grey: #e0e0e0;

.btn {
  width: 100px;
  height: 32px;
  margin: .5rem;
  left: -1px;
  top: -3px;

  background: #fff;
  font-weight: 600;
  font-size: 14px;
  color: $dark-grey;
  border-radius: 5px;
  border: solid 1px #fff;
  box-shadow: inset 0px 0px 5px 5px rgba(255,255,255,1);
  transition: background 500ms, color 300ms, box-shadow 150ms;
}

.btn:hover {
  background: #1EB6A7;
  color: white;
  cursor: pointer;
  border: solid 2px $dark-grey;
  box-shadow: inset 0px 0px 5px 5px rgba(30,182,167,1);
  transition: background 300ms, color 300ms, box-shadow 150ms;
}

.btn:disabled{
  cursor: default;
  color: $light-grey;
}
.btn:disabled:hover {
  background-color: #fff;
  box-shadow: none;
  border: none;
}
</style>
