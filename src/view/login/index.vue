<template>
  <div class="login-wrapper">
    <el-form class="login-form" >
      <div class="title-wrapper">
        <h3 class="title">企业级管理系统</h3>
      </div>
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          placeholder="密码"
          name="password"
          type="text"
          show-password
        >
        </el-input>
      </el-form-item>
      
      <el-button type="primary" @click.prevent="handleLogin">登陆</el-button>
    </el-form>
    <div class="password"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '888888'
      },
      redirect: undefined,
      otherQuery: {}
    }
  },
  methods: {
    handleLogin () {
      // this.$router.push('/dashboard')
      this.$store.dispatch('login',this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery})
        }).catch(e => {})
    }
  }
}
</script>
<style lang="scss" >
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
/* reset element-ui css */
.login-wrapper {
  .el-input {
    display: inline-block;
    height: 47px;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg_gray: #2d3a4b;
$icon_gray: #889aa4;
$light_gray: #eee;

.login-wrapper{
  min-height: 100%;
  width: 100%;
  background-color: $bg_gray;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-wrapper {
    position: relative;

      .title {
        font-size: 26px;
        color: #ffffff;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .el-form-item {
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.1);
      border-radius: 5px;
      color: #454545;
      overflow: hidden;

    }
    .el-button{
      width:100%;
      margin-bottom:30px;
    }
  }
}
</style>
