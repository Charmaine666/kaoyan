<template>
    <div id="comm">
      <div id="comm_head">
          <img src="../../assets/icon/msg.png" style="width:40px; height: 50px;">
          <div>
            <button class="btn">广场</button>
            <button class="btn">关注</button>
          </div>
          <img src="../../assets/icon/plus3.png" style="width:40px; height: 40px;">

      </div>
      <div id="comm_search">
        <el-input placeholder="查找内容、用户" v-model="input2">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>

      <div id="content">
        <div v-for="i in 4" :key="i" class="card_find">
          <div id="content_head">
            <span style="width: 88%; font-weight: bold; font-size: 1.2rem; margin-left: 13px;">title</span>
            <img src="../../assets/icon/dianzan.png" class="icon_1">
            <img src="../../assets/icon/pinglun.png" class="icon_1">
          </div>
          <div id="content_content">
            <span>今天去爬山啦放松放松心情</span>
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
            <div style="font-size: 1.4rem;text-align: center; width:3%;height: 170px; border:1px solid gray;">
            查看更多
            </div>
          </div>

          <div id="author">
            <div id="author_left">
              <span>name</span>
              <img src="http://s9nrl7h4c.hn-bkt.clouddn.com/avatar2.jpg" style="width: 100%; height: 100%; border-radius: 22px; margin-left: 10px;">
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
export default {
  name: 'Commu',
  data () {
    return {
      imgList: [
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m1.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m2.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m3.jpg',
        'http://s9nrl7h4c.hn-bkt.clouddn.com/m4.jpg'
      ]
    }
  }
}
</script>

<style src="@/assets/css/comm.css">

</style>
