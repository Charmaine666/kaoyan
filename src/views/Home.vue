<template>
    <div>
        <div id="carousel">
        <div id="topBanner" class="slide" >
            <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow">
                  <a href="#">
                    <img :src=imgUrl style="width:100%;height:580px;">
                  </a>
            </div>
            <div class="bar">
                   <span v-for="(item, index) in bannerList" :class="{ 'active':index===mark }" :key="index"></span>
            </div>
        </div>
      </div>

      <div id="colleges">
        <div id="col_head">
          <p style="width: 30%; margin-left: 10px;">▎热门院校</p>
          <div id="col_head_nav">
            <div style="width: 70%;">
              <a class="col_nav" href="#">推荐院校</a>
              <a class="col_nav" href="#">高等院校</a>
              <a class="col_nav" href="#">科研院校</a>
            </div>
            <div style="margin-right: 10px;">
              <img src="../assets/exchange.png">
              <a href="#" style="text-decoration: none; color: rgb(250, 92, 13);font-size: 0.8rem; font-weight: normal;" @click="changeCol()">换一换</a>
            </div>
          </div>
        </div>

        <div id="col_body">

          <div id="rep">
            <div id="name_col">
              四川轻化工大学
            </div>
            <div id="type_col">
              综合类
            </div>
            <div id="img_col">
              <div id="img_col_img">
                <img src="https://static.kaoyan.cn/image/logo/1047_log.jpg" style="width:100%;height:100%;">
              </div>
              <div id="img_col_go">
                <a href="#">进入学校 ></a>
              </div>
            </div>
          </div>

          <div style="width: 70%; height: 85%;">
            <table id="example" style="width: 100%; height: 100%;">
              <tbody>
              <!--满足4条数据换行-->

                <tr v-for="i in 3" :key="i" style="width: 100%; height: 33%; display: flex;
        flex-direction: row; justify-content: space-around; margin-bottom: 9px; margin-top: 9px;">

                  <th  v-for="(chapter) in chapterList.slice((i-1)*3+page,(i-1)*3+3+page)" :key="chapter.id" id="card_col">
                    <div id="col_avater">
                      <img  style="width: 74%; height: 62%; margin-top: 24%;" :src=chapter.imgUrl>
                    </div>
                    <div style="width: 63%; display: flex; flex-direction: column; justify-content: center;">
                      <div style="font-size:1.1rem; width: 100%; height: 30px;">{{chapter.name}}</div>
                      <div style="height: 20px;">
                        <p style="width: 50px; float: left; font-size: 5px; border-radius: 10px;border: 1px solid rgb(237, 130, 36); color: rgb(252, 111, 41);">{{chapter.type}}</p>
                        <a href="#" style="float: right; font-size: 12px; color: rgb(97, 93, 93) ; text-decoration: none;">进入学校 ></a>
                      </div>
                    </div>
                    <!-- {{ chapter.name}} -->

                  </th>

                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div id="special">
        <div id="spe_head">
          <p style="width: 30%; margin-left: 10px;">▎热门专业</p>
          <!-- <div id="col_head_nav"> -->
              <a href="#" style="text-decoration: none; color: rgb(250, 92, 13);font-size: 0.8rem; font-weight: normal; margin-right: 10px;">更多 ></a>
          <!-- </div> -->
        </div>
        <div id="spe_body">
          <div id="spe1" class="lay_spe" style="background-color: rgb(255,243,236);">
            <div class="spe_title">法律（非法学）</div>
            <div class="spe_school">西南大学</div>
            <div class="spe_icon1">
              <img style="width: 90%; height: 90%; margin-top: 10%; margin-left: 5%;" src="../assets/spe1-1.png">
            </div>
            <div  class="spe_icon2">
              <img style="width: 80%; height: 100%;margin-left: 10%;" src="https://www.kaoyan.cn/static/media/accountancy.7a967ba8.png">
            </div>
          </div>
          <div id="spe2" class="lay_spe" style="background-color: rgb(235,243,255);">
            <div class="spe_title">会计</div>
            <div class="spe_school">南京师范大学</div>
            <div  class="spe_icon1">
              <img style="width: 100%; height: 80%; margin-top: 20%;" src="../assets/spe2-1.png">
            </div>
            <div  class="spe_icon2">
              <img style="width: 100%; height: 100%;" src="../assets/spe2.png">
            </div>
          </div>
          <div id="spe2" class="lay_spe"  style="background-color: rgb(255,250,236);">
            <div class="spe_title">电子信息</div>
            <div class="spe_school">暨南大学</div>
            <div  class="spe_icon1">
              <img style="width: 100%; height: 80%; margin-top: 20%;" src="../assets/spe3-1.png">
            </div>
            <div  class="spe_icon2">
              <img style="width: 100%; height: 100%;" src="../assets/spe3.png">
            </div>
          </div>
          <div id="spe3">
            <div class="spe2_chil"  style="background-color: rgb(253,253,235);">
              <div class="spe_title">计算机技术</div>
              <div class="spe2_school">苏州大学</div>
              <div  class="spe_icon3">
                <img style="width: 100%; height: 100%;" src="../assets/spe4.png">
              </div>
            </div>
            <div class="spe2_chil" style="margin-top: 14px; background-color: rgb(255,243,234);">
              <div class="spe_title">社会工作</div>
              <div class="spe2_school">厦门大学</div>
              <div  class="spe_icon3">
                <img style="width: 100%; height: 100%;" src="../assets/spe5.png">
              </div>
            </div>
          </div>
          <div id="spe3">
            <div class="spe2_chil" style="background-color: rgb(234,252,235);">
              <div class="spe_title">计算机科学与技术</div>
              <div class="spe2_school">南京大学</div>
              <div  class="spe_icon3">
                <img style="width: 100%; height: 100%;" src="../assets/spe6.png">
              </div>
            </div>
            <div class="spe2_chil" style="margin-top: 14px; background-color: rgb(233,248,252);">
              <div class="spe_title">物流工程与管理</div>
              <div class="spe2_school">武汉理工大学</div>
              <div  class="spe_icon3">
                <img style="width: 100%; height: 100%;" src="../assets/spe7.png">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="spot">
        <div id="spot_head">
          <p style="width: 30%; margin-left: 10px;">▎热点</p>
          <!-- <div id="col_head_nav"> -->
              <a href="#" style="text-decoration: none; color: rgb(250, 92, 13);font-size: 0.8rem; font-weight: normal; margin-right: 10px;">更多 ></a>
          <!-- </div> -->
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="发布时间" width="180">
          </el-table-column>
          <!-- <el-table-column  prop="name"  label="姓名" width="180">
          </el-table-column> -->
          <el-table-column  label="内容">
            <template slot-scope="scope">
        <el-link :underline="false">{{scope.row.content }}</el-link>
      </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      page: 0,
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      mark: 0, // 比对图片索引的变量
      tableData: [{
        date: '2024-02-07',
        content: '北师港浸大授课型研究生课程再开新专修 -- 运动、健康与传播专修方向现已开放申请!'
      }, {
        date: '2024-01-30',
        content: '益权VIP统系询查剂调研考2024'
      }, {
        date: '2024-02-24',
        content: '!改整过通科学”流一双“持支!文发方官'
      }, {
        date: '2024-02-23',
        content: '直播预告西交利物浦大学未来教育学院2024年硕士研究生招生宣讲会即将开启!'
      }, {
        date: '2024-02-23',
        content: '场现卷评击直者记?的阅评何如是卷试考研:津天'
      }],
      bannerList: ['https://img.zcool.cn/community/0119015c6675f4a801213f26120f09.png@1280w_1l_2o_100sh.png',
        'https://bpic.588ku.com/element_origin_min_pic/21/02/26/9abdec0781ea30a4788bfc31d325d1ce.jpg!r650',
        'https://img.zcool.cn/community/0193be5a3b5f19a80121db80cc14f7.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100'
      ],
      'chapterList': [{
        'id': 1,
        'name': '清华大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/5_log.jpg'
      }, {
        'id': 2,
        'name': '北京大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/147_log.jpg'
      }, {
        'id': 3,
        'name': '浙江大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/171_log.jpg'
      }, {
        'id': 4,
        'name': '上海交通大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/267_log.jpg'
      }, {
        'id': 5,
        'name': '复旦大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/254_log.jpg'
      }, {
        'id': 6,
        'name': '南京大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/39_log.jpg'
      }, {
        'id': 7,
        'name': '中国科学技术大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/160_log.jpg'
      }, {
        'id': 8,
        'name': '华中科技大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/37_log.jpg'
      }, {
        'id': 9,
        'name': '武汉大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/3_log.jpg'
      }, {
        'id': 10,
        'name': '西安交通大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/225_log.jpg'
      }, {
        'id': 11,
        'name': '中山大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/231_log.jpg'
      }, {
        'id': 12,
        'name': '四川大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/208_log.jpg'
      }, {
        'id': 13,
        'name': '哈尔滨工业大学',
        'type': '理工类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/378_log.jpg'
      }, {
        'id': 14,
        'name': '北京航天航空大学',
        'type': '理工类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/182_log.jpg'
      }, {
        'id': 15,
        'name': '东南大学',
        'type': '综合类',
        'imgUrl': 'https://static.kaoyan.cn/image/logo/287_log.jpg'
      }]
    }
  },
  methods: {
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
    cursor: pointer;
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
    cursor: pointer;
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
    /* height: 660px; */

    border: 1px solid rgb(102, 95, 95);
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
  #example{
    cursor: pointer;
  }
</style>
