<template>
  <el-container style="height:100%">
    <el-aside width="auto" >
        <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <CommonTag class="tag"></CommonTag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonTag from '@/components/CommonTag'

export default {
  name: "Main",
  components:{
      CommonAside,
      CommonHeader,
      CommonTag
  }
};
</script>

<style lang="less" scoped>
.el-aside{
  height:100vh;
}
.el-header{
    background: rgb(0, 0, 0);
}
.el-main{
    padding: 0;

}

</style>