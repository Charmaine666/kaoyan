<template>
  <div>
    <div class="Search">
      <el-input
        v-model="school"
        placeholder="请输入专业名称"
        prefix-icon="el-icon-search"
        @keyup.enter.native="handleSearch"
      />
      <el-button type="warning" icon="el-icon-search"
        >搜索</el-button
      >
    </div>
    <div class="menu">
      <div id="menu">
        <p>学位类别</p>
        <el-select v-model="select_xw" clearable placeholder="请选择" @change="select_col()">
          <el-option
            v-for="item in xw_type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div id="menu">
        <p>门类</p>
        <el-select v-model="select_ml" clearable placeholder="请选择" @change="select_col2()">
          <el-option
            v-for="item in m_type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div id="menu">
        <p>学科类别</p>
        <el-select v-model="select_xk" clearable placeholder="请选择" @change="select_col3()">
          <el-option
            v-for="item in xk_type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="school">
      <el-card class="box-card" shadow="never">
        <div v-for="o in speList" :key="o.id" class="text item">
          <div class="school_body">
            <div class="school_head">
              <el-link :underline="false">{{ o.subName }}</el-link>
            </div>
            <div class="tag">
              <el-tag type="success" >专业代码：{{o.code}}</el-tag>
              <span style="color: gray;">|</span>
              <el-tag type="warning" v-show="o.is_Acd">学位类别：学术型硕士</el-tag>
              <el-tag type="warning" v-show="o.is_Special">学位类别：专业型硕士</el-tag>
            </div>
          </div>
          <div class="school_button">
            <!-- <el-button type="warning">简章</el-button>
            <el-button type="warning">分数线</el-button> -->
            <el-button type="warning">开设院校</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getSub, getMl, getXk } from '@/api/sub.js'
export default {
  data () {
    return {
      speList: [],
      school: '',
      is_spe: '',
      is_acd: '',
      sub_type: '',
      select_xw: '',
      select_ml: '',
      select_xk: '',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      School: [
      ],
      School2: [],
      xw_type: [
        {
          value: '1',
          label: '专业型硕士'
        },
        {
          value: '0',
          label: '学术型硕士'
        }
      ],
      m_type: [
      ],
      xk_type: [
      ]

    }
  },
  created () {
    getMl().then((res) => {
      var result = res.data.data
      var obj
      for (var i = 0; i < result.length; i++) {
        obj = {value: result[i].id, label: result[i].st_name}
        this.m_type.push(obj)
      }
      // console.log(this.m_type)
    })
  },
  mounted () {
    getSub(this.select_xw, this.select_ml, this.select_xk).then((res) => {
      // alert('查询院校成功')
      this.speList = res.data.data
      console.log(this.speList)
    })
  },
  methods: {
    select_col () {
      if (this.select_ml === '') {
        getSub(this.select_xw, this.select_ml, this.select_xk).then((res) => {
          // alert('查询院校成功')
          this.speList = res.data.data
          console.log(this.speList)
        })
      } else {
        this.select_col2()
      }
    },
    select_col2 () {
      this.xk_type = []
      this.is_spe = this.select_xw
      this.select_xk = ''
      getXk(this.select_ml, this.is_spe).then((res) => {
        var result = res.data.data
        var obj
        for (var i = 0; i < result.length; i++) {
          obj = {value: result[i].id, label: result[i].category}
          this.xk_type.push(obj)
        }
      })
      getSub(this.select_xw, this.select_ml, this.select_xk).then((res) => {
      // alert('查询院校成功')
        this.speList = res.data.data
        console.log(this.speList)
      })
    },
    select_col3 () {
      getSub(this.select_xw, this.select_ml, this.select_xk).then((res) => {
        // alert('查询院校成功')
        this.speList = res.data.data
        console.log(this.select_xw === '')
        console.log(this.select_ml)
        console.log(this.select_xk)
      })
    }
  }
}
</script>

<style scoped>
.school_body {
  display: flex;
  /* 纵向 */
  flex-direction: column;
}
.school_button {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 30px;
}
.school_body .tag {
  margin: 20px;
}
.school_head .el-icon-location:before {
  margin-left: 10px;
}
.school_head .el-tag {
  margin-left: 10px;
}
.school{
  margin-left: 20px;
}
.text.item {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* 下边框 */
  border-bottom: 1px solid #eee;
  margin: 10px;
  /* 圆角 */
  border-radius: 5px;
  /* 阴影 */
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
}
.text.item .el-link {
  font-size: 20px;
  margin-left: 20px;
  height: 30px;
}
.box-card {
  position: relative;

}
#menu {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.menu {
  display: flex;

  align-items: center;
  margin: 20px;
  /* 边框 */
  border: 1px solid #dcdfe6;
  /* 边框颜色 */
  border-radius: 4px;
  /* 边框圆角 */
}
.menu p {
  margin-right: 10px;
}
.Search {
  display: flex;
  width: 400px;
  margin: 20px;
}
.el-button {
  margin-left: 20px;
}
</style>
