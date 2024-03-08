<template>
    <div id="comm">
      <div id="comm_head">
          <img src="../../assets/icon/msg.png" style="width:40px; height: 50px;">
          <div>
            <el-button class="btn">广场</el-button>
            <el-button class="btn">关注</el-button>
          </div>
          <img src="../../assets/icon/plus3.png" style="width:40px; height: 40px;">

      </div>
      <div id="comm_search">
        <el-input placeholder="查找内容、用户" v-model="input2">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>

      <div id="content">
        <div v-for="o in infoList" :key="o.blog_id" class="card_find">
          <div id="content_head">
            <span style="width: 85%; font-weight: bold; font-size: 1.2rem; margin-left: 13px;">{{o.title}}</span>
            <!-- <img :src="dz_src" class="icon_1" @click="dianzan()">{{ 99 }} -->
            <div  class="iconfont" @click="dianzan(o.blog_id)">
              <div id="dz" class="icon-dianzan" v-bind="dzList[o.blog_id]">{{dzList[o.blog_id]}}</div>
            </div>
            <!-- <img src="../../assets/icon/pinglun1.png" class="icon_1">{{ 12 }} -->
            <div class="iconfont">
              <div class="icon-pinglun">{{23}}</div>
            </div>
          </div>
          <div id="content_content">
            <span>{{o.contend}}</span>
          </div>

          <div id="content_img">
            <div class="box">
              <img :src=imgList[0]>
            </div>
            <div class="box">
              <img :src=imgList[1]>
            </div>
            <div class="box">
              <img :src=imgList[2]>
            </div>
            <div class="box">
              <img :src=imgList[3]>
            </div>
            <div style="font-size: 1.4rem;text-align: center; width:6%;height: 170px;color: rgba(220, 210, 220,0.9); background-color: rgba(70,70,70,0.2); display: flex;justify-content: center;align-items: center;">
            <a href="#" style="text-decoration: none; color:aliceblue;">>></a>
            </div>
          </div>

          <div id="author">
            <div id="author_left">
              <span>{{o.nickname}}</span>
              <img :src="o.avatar" style="width: 50px; height: 50px; border-radius: 50%;">
            </div>
            <div id="time">
              2024-03-02 11:50
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>

<script>
import { getBlog } from '@/api/blog.js'
export default {
  name: 'Commu',
  data () {
    return {
      dzList: [66, 22, 42, 64, 12, 45],
      dz_src: require('@/assets/icon/dianzan1.png'),
      imgList: [
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m1.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m2.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m3.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m4.jpg'
      ],
      infoList: [],
      beforeRouteLeave (to, from, next) {
        // ...
      }
    }
  },
  mounted () {
    getBlog().then((res) => {
      // alert('查询院校成功')
      var result = res.data.data
      this.infoList = result
      console.log(result)
    })
  },
  methods: {
    dianzan (id) {
      var d = document.getElementById('dz')
      d.style.color = 'red'
      this.dzList[id] = this.dzList[id] + 1
    }
  }
}
</script>

<style src="@/assets/css/comm.css">
   @import 'https://at.alicdn.com/t/c/font_4458996_hw7bssopbtq.css'
</style>
