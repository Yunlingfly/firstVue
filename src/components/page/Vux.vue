<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <icon type="success"></icon>
    <span class="vux-close"></span>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Icon } from "vux";

export default {
  components: {
    Group,
    Cell,
    Icon
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!"
    };
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
<!-- 设置局部背景色 -->
<style lang="less">
body {
  background-color: #fbf9fe;
}
</style>

