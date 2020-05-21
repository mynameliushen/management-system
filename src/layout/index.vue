<template>
  <div class="app-wrapper">
    <sildebar />
    <div class="main-wrapper">
      <app-main />
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Sildebar from './components/Sildebar'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Sildebar
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
  .main-wrapper {
    margin-left: 210px;
    position: relative;
    min-height:100%;
  }
}

</style>
