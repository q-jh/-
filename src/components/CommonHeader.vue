<template>
  <div class="header">
    <div class="left">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="changeCollapse"
      ></el-button>
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in tags"
            :key="index"
            :to="{ path: item.path }"
            class="myColor"
            >{{ item.label }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="@/assets/user.png" alt="" /><i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tablist,
    }),
  },
  methods: {
    changeCollapse() {
      this.$store.commit("collapseMenue");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    div {
      margin-left: 10px;
      .myColor /deep/ .el-breadcrumb__inner {
        color: #fff;
      }
    }
  }
  .right {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>