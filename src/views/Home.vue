<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <img src="../assets/user.png" alt="" />
            <div class="text">
              <span class="sp1">Admin</span>
              <span>超级管理员</span>
            </div>
          </div>
          <div class="p1">
            <p>上次登陆时间：2022-8-10</p>
            <p>上次登陆地点：清远</p>
          </div>
        </el-card>
        <el-card class="cardtable">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(item, key) in tabelLabel"
              :key="key"
              :prop="key"
              :label="item"
              width="150"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <div class="sum">
          <el-card v-for="item in countData" :key="item.name">
            <div class="sumitem">
              <div>
                <i
                  class="icon"
                  :class="`el-icon-${item.icon}`"
                  :style="{ background: item.color }"
                ></i>
              </div>
              <div class="sumtext">
                <p>￥{{ item.value }}</p>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </el-card>
        </div>
        <div class="rightcenter">
          <el-card>
            <div ref="echarts" style="height: 280px"></div>
          </el-card>
        </div>
        <div class="rightfooter">
          <div class="footer1">
            <el-card>
              <div ref="bar" style="height: 200px"></div>
            </el-card>
          </div>
          <div class="footer2">
            <el-card>
              <div ref="pie" style="height: 200px"></div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reqGetData } from "@/api/index";
import * as echarts from "echarts";
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "华为",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tabelLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: "218",
          icon: "s-claim",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: "1234",
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: "1234",
          icon: "s-claim",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: "1234",
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      lineData: [],
      order: [],
      keyArray: [],
      seriesdata: [],
      date: [],
      userdata: [],
      userseries: [],
      videodata: [],
    };
  },
  mounted() {
    this.getData();
    // setTimeout(() => {
    //   var myChart = echarts.init(this.$refs.echarts);
    //   myChart.setOption({
    //     title: {
    //       text: "每月销售情况",
    //     },
    //     tooltip: {
    //       trigger: "axis",
    //     },
    //     legend: {
    //       data: this.keyArray,
    //     },
    //     grid: {
    //       left: "3%",
    //       right: "4%",
    //       bottom: "3%",
    //       containLabel: true,
    //     },
    //     toolbox: {
    //       feature: {
    //         saveAsImage: {},
    //       },
    //     },
    //     xAxis: {
    //       type: "category",
    //       boundaryGap: false,
    //       data: this.date,
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: this.seriesdata,
    //   });
    // }, 1000);
  },

  watch: {
    seriesdata(newValue, oldValue) {
      this.$nextTick(() => {
        var myChart = echarts.init(this.$refs.echarts);
        myChart.setOption({
          title: {
            text: "每月销售情况",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            // data: this.keyArray,
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.date,
          },
          yAxis: {
            type: "value",
          },
          series: this.seriesdata,
        });
      });
    },
    userdata(newValue, oldValue) {
      this.$nextTick(() => {
        var mybar = echarts.init(this.$refs.bar);
        mybar.setOption({
          title: {
            text: "每天用户情况",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            // data:[]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.userdata.map((item) => item.date),
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "新增用户",
              data: this.userdata.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: this.userdata.map((item) => item.active),
              type: "bar",
            },
          ],
        });
      });
    },
    videodata(newValue, oldValue) {
      this.$nextTick(() => {
        var mypie = echarts.init(this.$refs.pie);
        mypie.setOption({
          title: {
            text: "各品牌手机销售总量",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "销售总量",
              type: "pie",
              radius: "50%",
              data: this.videodata,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        });
      });
    },
  },
  methods: {
    async getData() {
      let result = await reqGetData();
      if (result.code == 20000) {
        console.log(result);
        this.lineData = result.data.tableData;
        this.order = result.data.orderData.data;
        this.date = result.data.orderData.date;
        this.userdata = result.data.userData;
        this.videodata = result.data.videoData;
        this.keyArray = Object.keys(this.order[0]);
        this.keyArray.forEach((key) => {
          this.seriesdata.push({
            name: key,
            data: this.order.map((item) => item[key]),
            type: "line",
          });
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  margin: 10px;
  .clearfix {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .text {
      margin-left: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .sp1 {
        font-weight: 600;
      }
    }
  }
}
.cardtable {
  margin: 10px;
}
.sum {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 10px;
  .el-card {
    margin: 0px 10px 10px 10px;
  }
  .sumitem {
    display: flex;
    justify-content: start;
    .icon {
      margin: 10px 10px;
    }
  }
}
.rightcenter {
  width: 900px;
  margin: 10px 10px;
  background: red;
}
.rightfooter {
  margin: 10px 10px;
  width: 900px;
  height: 200px;
  // background: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .footer1 {
  width: 500px;
    margin-right: 10px;
  }
  
}
</style>