<template>
    <div class="login">
      <div class="login-box">
        <h1 class="title">欢迎登录</h1>
        <el-input placeholder="用户名" v-model="username" class="username"></el-input>
        <el-input placeholder="密码" v-model="password" type="password"></el-input>
        <el-input placeholder="验证码" v-model="valid" size="medium"></el-input>
        <el-button @click="login()">登录</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:'',
      valid:''
    }
  },
  methods:{
    login(){
      this.$router.push('./main')
    }
  }
}
</script>

<style scoped>

.login{
  height: 100%;
  background:rgba(235,234,243,1);
  padding-top:200px;
  .login-box{
    width:400px;
    height:450px;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    border:1px solid rgba(230,230,241,1);
    padding:60px 40px 0;
  box-sizing:border-box;
    .title{
      font-size:28px;
      font-family:SourceHanSansCN-Regular;
      color:rgba(35,42,74,1);
      line-height:42px;
      text-align: left;
    }
    .username{
      margin:36px 0 22px;
    }
    .el-input{
      margin-bottom: 22px;
    }
    .el-button{
      width:320px;
      height:46px;
      background:rgba(86,86,214,1);
      border-radius:4px;
      font-size:18px;
      font-family:SourceHanSansCN-Medium;
      color:rgba(255,255,255,1);
      line-height:27px;
    }
  }
}
</style>
