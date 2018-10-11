<template>
   <div class="singer-details">

   </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";//取数据 语法糖

export default {
  computed: {//计算属性
    ...mapGetters(["singer"])
  },
  created() {
    console.log(this.singer);
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer-details {
  position: fixed;
  z-index: 31;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #222;
}
</style>
