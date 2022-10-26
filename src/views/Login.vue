<template>
  <div class="loginitem">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="logincontain">
    <h3 class="formtitle">系统登陆</h3>
    <el-form-item label="用户名" label-width="80px" prop="username" class="">
        <el-input v-model="form.username" placeholder="请输入用户名" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password" class="">
        <el-input v-model="form.password" placeholder="请输入登陆密码" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button> 
        <el-button type="info">取消</el-button> 

         </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reqGetPermission} from '@/api/index'
import Mock from 'mockjs'
export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入登陆密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
      async login(){
          const token = Mock.random.guid()
          this.$store.commit('setToken',token)
          this.$router.push({name:'home'})
          let result = await reqGetPermission(this.form)
          if(result == 20000){
              
          }

      }
  }
};
</script>

<style lang="less" scoped>
.loginitem{
    width:500px;
    margin:100px auto;
    padding:20px 20px
    
}
.logincontain{
    padding:50px 50px;

    background: rgb(219, 214, 214);
}
    .formtitle{
        margin-bottom: 20px;
        text-align: center;
    }
    


</style>