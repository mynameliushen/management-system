<template>
  <div class="sidebar">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">Table</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sildebar',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
$textColor: rgb(191, 203, 217);
$activeColor: #1890ff;
.sidebar{
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  width:210px;
  z-index: 1;
  overflow: hidden;
  background: #304156;
  height: 100%;
  font-size:0;

  .el-menu-item {
    color: $textColor;
    &:hover{
      background: #263445;
    }
    &:focus{
      background-color: #304156;
    }
  }

  .el-menu-vertical-demo {
    height: 100%;
    background: #304156;
    color: $textColor;

    .is-active{
      color: $activeColor;
    }
  }
}
</style>
