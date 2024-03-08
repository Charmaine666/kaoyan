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
        <div>
          <el-button id="btn_search">登录/注册</el-button>
        </div>
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
      <router-view></router-view></div>
      <!-- </div> -->
    </div>
   </div>
  </div>
</template>

<script>

// import bHeader from '@/components/Header.vue'
// import firstPage from '@/views/home'
// import newsVue from '@/components/News.vue'
export default {
  name: 'App',
  // components: {bHeader},
  // components: {firstPage, newsVue},
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        path: '/'
      })
    },
    goCol () {
      this.$router.push({
        path: '/col'
      })
    },
    goSpe () {
      this.$router.push({
        path: '/spe'
      })
    },
    goEncy () {
      this.$router.push({
        path: '/ency'
      })
    },
    goCom () {
      this.$router.push({
        path: '/com'
      })
    },
    goPre () {
      this.$router.push({
        path: '/pre'
      })
    },
    changeCol () {
      if (this.page + 9 > this.chapterList.length) {
        this.page = 0
      } else {
        this.page += 9
      }
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    autoPlay () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    }
  },
  created () {
    this.play()
  }

}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
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
}
.el-menu-item{
  margin-left: 500px;
}

.bg{
  /* border: 1px solid red; */
  width: 70%;
  height: 2500px;
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
  width: 90%;
  /* border: 1px solid red; */
  /* height: 800px; */
}
#btn_search{
  width: 97px;
  height: 45px;
  /* margin-left: -5px; */
  /* height: ; */
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

#carousel{
  margin-top: 10px;
  width: 100%;
  height: 580px;
  /* border: 1px solid red; */
}
.slide {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    /* border: 1px solid red; */
  }
  .slideshow {
    /* width: 100%; */
    /* height: 150px; */
  }
  li {
    position: absolute;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    /* border: 1px solid; */
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: #bfd6b6 !important;
  }

  #colleges{
    margin-top: 15px;
    width: 100%;
    height: 500px;
    /* border: 1px solid red; */
  }
  #col_head{
    border-bottom: 2px solid rgb(244, 73, 5);
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    font-weight:bold;
  }
  #col_head_nav{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
  }
  .col_nav{
    margin-left: 25px;
    color: black;
    text-decoration: none;
  }
  .col_nav:active{
    text-decoration:underline;
    color: rgb(250, 92, 13);
  }

  #col_body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  #rep{
    width: 30%;
    height: 85%;
    /* border: 1px solid rgb(89, 85, 85); */
    background-color: rgba(244, 116, 51, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #name_col{
    color: aliceblue;
    /* border: 1px solid rgb(89, 85, 85); */
    font-size: 1.7rem;
    padding-bottom: 19px;
  }
  #type_col{
    color: white;
    border: 0.7px solid rgb(237, 232, 232);
    font-size: 0.5rem;
    width: 45px;
    text-align: center;
    margin-bottom: 10px;
  }
  #img_col{
    width: 70%;
    height: 60%;
    /* border: 1px solid rgb(89, 85, 85); */
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #img_col_img{
    width: 74%;
    height: 74%;
    /* border: 1px solid rgb(89, 85, 85); */
  }
  #img_col_go{
    margin-top: 7px;
    color: rgb(89, 85, 85);
    font-size: 0.9rem;
  }
  #img_col_go a{
  text-decoration: none;
  }

  #card_col{
    width: 31%;
    height: 85%;
    border: 0.2px solid rgb(103, 101, 101);
    text-align: center;
    display: flex;
    flex-direction: row;
    border-radius: 2px;
    /* justify-content: center;
    align-items: center; */
  }

  #card_col:hover{
    box-shadow: 0px 10px 15px #666;
    transition: all 0.5s;
    transform: translateY(-11px);
  }
  #col_avater{
    /* border: 1px solid rgb(89, 85, 85); */
    background-color: white;
    width: 37%;
    height: 100%;
  }

  #special{
    margin-top: 15px;
    width: 100%;
    height: 500px;
    /* border: 1px solid red; */
  }
  #spe_head{
    border-bottom: 0.4px solid rgb(139, 138, 138);
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight:bold;
  }
  #spe_body{
    width: 100%;
    height: 85%;
    /* border:1px solid black; */
    display: flex;
    flex-direction: row;
  }
  #spe1{
    width: 30%;
    height: 96%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-top: 15px;
  }
  #spe2{
    width: 17%;
    height: 96%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-left: 10px;
    margin-top: 15px;
  }
  #spe3{
    width: 17%;
    height: 96%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-left: 10px;
    margin-top: 15px;
  }
  .spe2_chil{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 48%;
    /* border:1px solid rgb(187, 71, 71); */
  }
  .spe2_chil:hover,#spe1:hover,#spe2:hover{
    box-shadow: 0px 10px 15px #666;
    transition: all 0.5s;
    transform: translateY(-11px);
  }
  .lay_spe{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }
  .spe_title{
    font-weight: bold;
    font-size: 1.27rem;
    width: 100%;
    height: 27px;
    /* border:1px solid rgb(187, 71, 71); */
    text-align: center;
  }
  .spe_school{
    font-size: 0.6rem;
    margin-top:-40px;
  }
  .spe2_school{
    font-size: 0.6rem;
    margin-top:-10px;
  }
  .spe_icon1{
    width: 28%;
    height: 20%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-top:-40px;
  }
  .spe_icon2{
    width: 65%;
    height: 40%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-bottom:26px;
  }
  .spe_icon3{
    width: 50%;
    height: 44%;
    /* border:1px solid rgb(187, 71, 71); */
    margin-bottom:16px;
  }

  #spot{
    margin-top: 15px;
    width: 100%;
    height: 660px;

    border: 1px solid red;
  }
  #spot_head{
    border-bottom: 0.4px solid rgb(139, 138, 138);
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight:bold;
  }
</style>
