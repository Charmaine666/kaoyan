<template>
    <div id="baike">
      <div id="body">
        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>研究生种类</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button" @click="play()">学术型硕士</el-button>
            <el-button type="warning" plain class="box_button">专业型硕士</el-button>
            <el-button type="warning" plain class="box_button">同等学力考生</el-button>
            <el-button type="warning" plain class="box_button">在职研究生</el-button>
            <el-button type="warning" plain class="box_button">非全日制</el-button>
            <el-button type="warning" plain class="box_button">非定向研究生</el-button>
            <el-button type="warning" plain class="box_button">定向培养研究生</el-button>
            <el-button type="warning" plain class="box_button">统考</el-button>
            <el-button type="warning" plain class="box_button">学位博览</el-button>
          </div>
        </div>
        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>研招政策</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">考试大纲</el-button>
            <el-button type="warning" plain class="box_button">招生简章</el-button>
            <el-button type="warning" plain class="box_button">推免（保研）</el-button>
            <el-button type="warning" plain class="box_button">考研加分</el-button>
            <el-button type="warning" plain class="box_button">强军计划</el-button>
            <el-button type="warning" plain class="box_button">退役大学生士兵计划</el-button>
            <el-button type="warning" plain class="box_button">硕师计划</el-button>
            <el-button type="warning" plain class="box_button">少数民族骨干计划</el-button>
            <el-button type="warning" plain class="box_button">破格录取</el-button>
          </div>
        </div>
        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>学校</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">34所</el-button>
            <el-button type="warning" plain class="box_button">双一流</el-button>
            <el-button type="warning" plain class="box_button">985</el-button>
            <el-button type="warning" plain class="box_button">211</el-button>
            <el-button type="warning" plain class="box_button">研究生院</el-button>
            <el-button type="warning" plain class="box_button">强军计划高校</el-button>
            <el-button type="warning" plain class="box_button">推免高校</el-button>
          </div>
        </div>
        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>专业</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">学科门类</el-button>
            <el-button type="warning" plain class="box_button">热门专业</el-button>
            <el-button type="warning" plain class="box_button">学科排名</el-button>
            <el-button type="warning" plain class="box_button">学科评估</el-button>
          </div>
        </div>
        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>初试</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">初试时间</el-button>
            <el-button type="warning" plain class="box_button">统考科目</el-button>
            <el-button type="warning" plain class="box_button">非统考科目</el-button>
            <el-button type="warning" plain class="box_button">试卷结构</el-button>
            <el-button type="warning" plain class="box_button">注意事项</el-button>
          </div>
        </div>

        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>复试</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">复试流程</el-button>
            <el-button type="warning" plain class="box_button">国家线</el-button>
            <el-button type="warning" plain class="box_button">自主划线</el-button>
          </div>
        </div>

        <div class="baike_box">
          <div id="box_head">
            <div style="width: 7px;height: 100%; background-color: rgb(255, 110, 0); margin-right: 17px;"></div>
            <span>调剂</span>
          </div>
          <div id="buttons">
            <el-button type="warning" plain class="box_button">调剂申请</el-button>
            <el-button type="warning" plain class="box_button">调剂办法</el-button>
            <el-button type="warning" plain class="box_button">调剂指南</el-button>
          </div>
        </div>
      </div>

      <!-- <el-button @click="play()" type="primary" style="margin-left: 16px;">
        点我打开
      </el-button> -->

      <!-- <div class="imgBox">
          <div class="innerBox">
              <button style="--ljc:2">和技术都v</button>
              <button style="--ljc:3">爱上v给</button>
              <button style="--ljc:1">梵蒂冈</button>
              <button style="--ljc:4">vdz</button>
              <button style="--ljc:5">就展开了</button>

              <img src="../assets/aliya.jpg" style="--ljc:1;" alt="">
              <img src="../assets/aliya.jpg" style="--ljc:2;" alt="">
              <img src="../assets/aliya.jpg" style="--ljc:3;" alt="">
              <img src="../assets/aliya.jpg" style="--ljc:4;" alt="">
              <img src="../assets/aliya.jpg" style="--ljc:5;" alt="">
              <img src="../assets/aliya.jpg" style="--ljc:6;" alt="">
          </div>
      </div> -->

      <!-- <div class="heartbeat">
        考研百科
      </div> -->

      <el-drawer
        :visible.sync="drawer"
        :with-header="true" size="50%">
        <div slot="title">考研百科: {{ title }}</div>
        <div class="demo-image__lazy" style=" height: 800px; border:1px solid rgb(88, 88, 88); overflow: auto;">
          <!-- <button>vdb</button> -->
          <el-image  v-for="url in urls" :key="url" :src="url.data" lazy></el-image>
        </div>
      </el-drawer>
    </div>
  </template>

<script>
import { getMsg } from '@/api/baike.js'
export default {
  data () {
    return {
      drawer: false,
      title: '',
      urls: [
        // 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        // 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  },
  methods: {
    play (id) {
      // var d = document.getElementById('body')
      // d.style.left = '-300px'
      var d = id + 1
      // console.log(523462472)
      // console.log(d)
      getMsg(d).then((res) => {
        console.log('查询成功')
        console.log(res.data.data)
        this.urls = res.data.data
      })
      this.drawer = true
    }
  },
  mounted () {
    var buttons = document.getElementsByClassName('box_button')
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].index = i
    }
    // alert(buttons)
    let _this = this
    // alert(_this.drawer)
    for (i = 0; i < buttons.length; i++) {
      console.log(3334343)
      buttons[i].onclick = function () {
        // console.log(3334343)
        console.log(this.children[0].innerHTML)
        _this.title = this.children[0].innerHTML
        // _this.drawer = true
        _this.play(this.index)
      }
    }
  }
}
</script>

<style scoped src="@/assets/css/baike.css">

</style>
