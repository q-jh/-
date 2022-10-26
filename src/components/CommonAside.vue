<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"

  >
  <h3>{{isCollapse?'后台':'通用后台管理系统'}}</h3>
    <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="handle(item)">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,index) in item.children" :key="subItem.path">
        <el-menu-item :index="index" @click="handle(subItem)">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>


<script>
import { mapState } from 'vuex';
export default {
  name: "CommonAside",
  data() {
    return {
      memu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/goods",
          name: "goods",
          label: "商品管理",
          icon: "video-play",
          url: "goodsManage/goodsManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handle(item){
      this.$router.push({
        name:item.name
      }),
      this.$store.commit('selectMenu',item)
    },
  },
  computed: {
    noChildren(){
      return this.memu.filter(item => !item.children)
    },
    hasChildren(){
      return this.memu.filter(item => item.children)
    },
    ...mapState({isCollapse:state => state.tab.isCollapse})
  },
};
</script>

<style lang="less" scoped>
h3{
  text-align: center;
  color:#fff;
  line-height:65px;
  padding: 0 10px;
}
.el-menu-vertical-demo{
  width: auto;
  height: 100vh;//vh就是当前屏幕可见高度的1%，也就是说height:100vh == height:100%;但是有个好处是当元素没有内容时候，设置height:100%该元素不会被撑开，但是设置height:100vh，该元素会被撑开屏幕高度一致。
}

</style>