<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Header></Header> -->
    <!-- <div id="Nav">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" class="top_item">首页</el-menu-item>
        <el-menu-item index="1" class="top_item">考试动态</el-menu-item>
        <el-menu-item index="1" class="top_item">报名指南</el-menu-item>
        <el-menu-item index="1" class="top_item">考试大纲</el-menu-item>
        <el-menu-item index="1" class="top_item">备考中心</el-menu-item>
        <el-menu-item index="1" class="top_item">互动交流</el-menu-item> -->

        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      <!-- </el-menu>
    </div> -->
    <!-- <firstPageVue></firstPageVue>
    <newsVue></newsVue> -->
   <div class="bg">
    <div style=" margin-top: 20px;">
      <div id="head">
        <div id="head_search">
          <div id="search">
            <el-input placeholder="查院校，查专业，查资讯" v-model="input2">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
          </div>
        </div>
        <div v-show="checked" id="btn_login">
          <el-button id="btn_search" @click="login()">登录/注册</el-button>
        </div>
        <el-popover
          placement="top"
          width="160"
          v-model="visible"
          trigger="hover">
          <div style="">
            <el-button size="normal" @click="logout()" style="width: 70px; height: 40px;">退出登录</el-button>
            <el-button size="normal" @click="goPersonal()" style="width: 70px; height: 40px;">个人主页</el-button>
          </div>
          <div id="login_amatur" v-show="!checked"  slot="reference">
          <img :src="amatur" style="width: 100%; height:100%; border-radius: 50%;" >
          </div>
        </el-popover>
      </div>
      <div class="login-box"  id="login-box">
        <h2>登录系统</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="username">
            <label>账号</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" v-model="password">
            <label>密码</label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a @click="handleSubmit()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登录
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a @click="cancel()">取消 </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style="color: aliceblue;"> 没有账号？点击</div><button @click="signUp_asd">注册</button>
        </form>
      </div>

      <div id="nav">
        <button class="btn_nav" @click="goHome()">首页</button>
        <button class="btn_nav" @click="goCol()">院校</button>
        <button class="btn_nav" @click="goSpe()">专业</button>
        <button class="btn_nav" @click="goEncy()">考研百科</button>
        <button class="btn_nav" @click="goPre()">备考中心</button>
        <button class="btn_nav" @click="goCom()">互动交流</button>
      </div>
      <div>
      <router-view :key="$route.fullPath"></router-view></div>
      <!-- </div> -->
    </div>
   </div>
   <!-- <div class="hide_main" id="hide_main"></div> -->

  </div>
</template>

<script>
import {userInfo, Reg} from '@/api/user.js'
import axios from 'axios'
// import bHeader from '@/components/Header.vue'
// import firstPage from '@/views/home'
// import newsVue from '@/components/News.vue'
export default {
  name: 'App',
  // components: {bHeader},
  // components: {firstPage, newsVue},
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      amatur: 'http://s9nrl7h4c.hn-bkt.clouddn.com/avatar2.jpg',
      checked: true,
      visible: false
    }
  },
  watch: {
    // $route (to, from) {
    //   if (to.path === `/newsuser/personal/${this.$store.state.id}`) {
    //     this.reload()
    //   } else if (to.path === `/newsuser/personal/${this.$route.params.id}`) {
    //     this.reload()
    //   }
    // }

  },
  mounted () {
    this.check()
  },
  methods: {
    load () {
      // this.check()
    },
    check () {
      let username = sessionStorage.getItem('userid')
      console.log(username)
      if (username) {
        userInfo(username).then((res) => {
          console.log('成功登录')
          let result = res.data.data[0]
          this.amatur = result.avatar
        })
        this.checked = false
        // let d1 = document.getElementById('btn_search')
        // let d2 = document.getElementById('login_amatur')
        // console.log(d1)
        // console.log(d2)
        // // d1.style.color('red')
        // d2.style.cssText('color: red')
      }
    },
    cancel () {
      var d1 = document.getElementById('login-box')
      d1.style.cssText = 'display: none'
    },
    login () {
      var d1 = document.getElementById('login-box')
      d1.style.cssText = 'display: block'
      // var d2 = document.getElementById('hide_main')

      // d2.style.height = '100vh'
      // d2.style.width = '100%'
      // d2.style.display = 'block'
    },
    goHome () {
      this.$router.push({
        path: '/'
      })
      // this.$router.go(0)
    },
    goCol () {
      this.$router.push({
        path: '/col'
      })
      // this.$router.go(0)
    },
    goSpe () {
      this.$router.push({
        path: '/spe'
      })
      // this.$router.go(0)
    },
    goEncy () {
      this.$router.push({
        path: '/ency'
      })
      // this.$router.go(0)
    },
    goCom () {
      this.$router.push({
        path: '/com'
      })
      // this.$router.go(0)
    },
    goPre () {
      this.$router.push({
        path: '/pre'
      })
      // this.$router.go(0)
    },
    goPersonal () {
      this.$router.push({
        name: 'personal',
        params: {
          id: this.$store.state.id
        }
      })
    },
    logout () {
      sessionStorage.removeItem('userid')
      this.checked = true
      this.$message({
        showClose: true,
        message: '退出成功',
        type: 'success'
      })
      this.$router.replace({path: '/'})
    },
    created () {

    },
    signUp_asd () {
      let _this = this
      // this.$router.replace({path: '/signUp'})
      Reg(this.username, this.password).then((res) => {
        // alert('注册成功')
        // _this.open3()
        if (res.data.code === 500) {
          _this.msg = res.data.msg
          _this.open3()
          console.log(_this)
        } else {
          _this.msg = '注册成功，请登录'
          _this.open2()
          _this.username = ''
          _this.password = ''
        }
        console.log(res.data)
      })
    },
    open1 () {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'warning'
      })
    },
    open2 () {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'success'
      })
    },
    open3 () {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'error'
      })
    },

    handleSubmit () {
      let _this = this
      if (this.username === '' || this.password === '') {
        this.msg = '请输入账号密码'
        this.open3()
      } else {
        axios.post('http://localhost:90/api/userLogin',
          {
            account: this.username,
            password: this.password
          })
          .catch(function (error) {
            console.log(error.response.data.msg)
            _this.msg = '请检查账号是否合法'
            _this.open3()
          }).then(function (response) {
            console.log(response.data)
            if (response.data.code === 200) {
              _this.msg = response.data.msg
              _this.open2()
              // 此处开始配置全局
              _this.$store.commit('setUserMsg', {
                id: response.data.data[0].id,
                account: response.data.data[0].account,
                nickname: response.data.data[0].nickname
              })
              _this.$store.commit('print')
              _this.cancel()
              sessionStorage.setItem('userid', response.data.data[0].id)
              _this.check()
            } else {
              _this.msg = response.data.msg
              _this.open3()
            }
          })
      }
    }

  }

}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  /* background-color: rgb(127, 92, 92); */
}

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: rgb(243, 236, 236); */
  /* margin-top: 60px; */
  text-align: left;
  background-image: url("~@/assets/img/html_bk3.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* opacity: 0.5; */
}
.el-menu-item{
  margin-left: 500px;
}

.bg{
  /* border: 1px solid red; */
  width: 70%;
  /* height: 2500px; */
  margin-left:15%;
}

#head{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
}
#head_search{
  width: 80%;
  /* height: 100px; */
  /* border: 1px solid red; */
  /* display: flex;
  flex-direction: row; */
  /* justify-content:flex-end; */
  /* height: 800px; */
}
#search{
  width: 98%;
  margin-left: 2%;
  margin-top: 7px;
  /* border: 1px solid red; */
  /* height: 800px; */
}
#btn_login{
  width: 20%;
  /* height: 100px; */
  /* border: 1px solid red; */
    display: flex;
  flex-direction: row;
  justify-content:flex-end;
}
#btn_search{
  width: 97px;
  height: 54px;
  display:block;
  /* margin-left: -5px; */
  /* height: ; */
}

#login_amatur{
    /* position: fixed; */
    /* left: 78%; */
    width: 65px;
    height: 65px;
    /* border: 1px solid red; */
    /* z-index: 1; */
    /* display: none; */
  }

#nav{
  /* margin-top: 10px; */
    width: 90%;
    height: 70px;
    /* border: 1px solid red; */
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}
.btn_nav{
  /* border-radius: 50%; */
  width: 110px;
  height: 60px;
  font-size: 1.3rem;
  color: rgb(231, 169, 34);
  /* background-color: rgba(234, 231, 219, 0); */
  border: none;
}
.btn_nav::before{
    border:none
}
.btn_nav:hover{
  background-color: rgb(253, 252, 249);
  border-radius: 50%;
}

/* .hide_main {
  // border: solid 3px green;
  background: #515257;
  position: fixed;
  display: none;
  top: 0;
  z-index: 1040;
} */

.login-box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(84, 55, 35, 0.7);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
    z-index: 1000;
    display: none;
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }

  .login-box a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  }

  .login-box a span {
    position: absolute;
    display: block;
  }

  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }

  .login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%, 100% {
      top: 100%;
    }
  }

  .login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%, 100% {
      right: 100%;
    }
  }

  .login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%, 100% {
      bottom: 100%;
    }
  }

</style>
