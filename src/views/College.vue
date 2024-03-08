<template>
  <div>
    <div class="Search">
      <el-input
        v-model="school"
        placeholder="请输入学校名称"
        prefix-icon="el-icon-search"
        @keyup.enter.native="handleSearch"
      />
      <el-button type="warning" icon="el-icon-search"
        >搜索</el-button
      >
    </div>
    <div class="menu">
      <div id="menu">
        <p>院校位置</p>
        <el-select v-model="select_area" clearable placeholder="请选择" @change="select_col()">
          <el-option
            v-for="item in area"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div id="menu">
        <p>院校类型</p>
        <el-select v-model="select_type" clearable placeholder="请选择" @change="select_col()">
          <el-option
            v-for="item in type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div id="menu">
        <p>院校特色</p>
        <el-select v-model="select_special" clearable placeholder="请选择" @change="select_col()">
          <el-option
            v-for="item in special"
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
        <div v-for="o in School" :key="o.id" class="text item">
          <el-image
            style="width: 100px; height: 100px"
            :src="o.img"
            fit="fit"
          ></el-image>
          <div class="school_body">
            <div class="school_head">
              <el-link :underline="false">{{ o.colName }}</el-link>
              <i class="el-icon-location"></i>
              <el-tag effect="plain">{{ o.area }}</el-tag>
            </div>
            <div class="tag">
              <el-tag type="success" v-show="o.is_Gd">高等院校</el-tag>
              <el-tag type="info" v-show="o.is_985">985</el-tag>
              <el-tag type="warning" v-show="o.is_211">211</el-tag>
              <el-tag v-show="o.is_Syl">双一流</el-tag>
              <el-tag type="success" v-show="o.is_Zhx">自划线</el-tag>
              <el-tag type="info" v-show="o.is_ky">科研院所</el-tag>
            </div>
          </div>
          <div class="school_button">
            <el-button type="warning">简章</el-button>
            <el-button type="warning">分数线</el-button>
            <el-button type="warning">问招办</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { colInfo } from '@/api/college.js'
export default {
  data () {
    return {
      colList: [],
      school: '',
      select_area: '',
      select_type: '',
      select_special: '',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      School: [
        {
          id: 1,
          name: '四川大学',
          address: '上海',
          characteristic: '高等院校',
          type: '理工类'
        },
        {
          id: 2,
          name: '四川大学',
          address: '上海',
          characteristic: '高等院校',
          type: '理工类'
        },
        {
          id: 3,
          name: '四川大学',
          address: '上海',
          characteristic: '高等院校',
          type: '理工类'
        },
        {
          id: 4,
          name: '四川大学',
          address: '上海',
          characteristic: '高等院校',
          type: '理工类'
        },
        {
          id: 5,
          name: '四川大学',
          address: '上海',
          characteristic: '高等院校',
          type: '理工类'
        }
      ],
      School2: [],
      area: [
        {
          value: '上海',
          label: '上海'
        },
        {
          value: '北京',
          label: '北京'
        },
        {
          value: '天津',
          label: '天津'
        },
        {
          value: '河北',
          label: '河北'
        },
        {
          value: '山西',
          label: '山西'
        },
        {
          value: '辽宁',
          label: '辽宁'
        },
        {
          value: '吉林',
          label: '吉林'
        },
        {
          value: '黑龙江',
          label: '黑龙江'
        },
        {
          value: '江苏',
          label: '江苏'
        },
        {
          value: '浙江',
          label: '浙江'
        },
        {
          value: '安徽',
          label: '安徽'
        },
        {
          value: '福建',
          label: '福建'
        },
        {
          value: '江西',
          label: '江西'
        },
        {
          value: '山东',
          label: '山东'
        },
        {
          value: '河南',
          label: '河南'
        },
        {
          value: '湖北',
          label: '湖北'
        },
        {
          value: '湖南',
          label: '湖南'
        },
        {
          value: '广东',
          label: '广东'
        },
        {
          value: '重庆',
          label: '重庆'
        },
        {
          value: '四川',
          label: '四川'
        },
        {
          value: '陕西',
          label: '陕西'
        },
        {
          value: '内蒙古',
          label: '内蒙古'
        },
        {
          value: '广西',
          label: '广西'
        },
        {
          value: '海南',
          label: '海南'
        },
        {
          value: '贵州',
          label: '贵州'
        },
        {
          value: '云南',
          label: '云南'
        },
        {
          value: '西藏',
          label: '西藏'
        },
        {
          value: '甘肃',
          label: '甘肃'
        },
        {
          value: '青海',
          label: '青海'
        },
        {
          value: '宁夏',
          label: '宁夏'
        },
        {
          value: '新疆',
          label: '新疆'
        },
        {
          value: '台湾',
          label: '台湾'
        },
        {
          value: '香港',
          label: '香港'
        },
        {
          value: '澳门',
          label: '澳门'
        }
      ],
      type: [
        {value: '综合类'},
        {value: '理工类'},
        {value: '农林类'},
        {value: '医药类'},
        {value: '师范类'},
        {value: '语言类'},
        {value: '财经类'},
        {value: '政法类'},
        {value: '体育类'},
        {value: '艺术类'},
        {value: '民族类'},
        {value: '军事类'},
        {value: '其他'}
      ],
      special: [
        {
          value: '1',
          label: '985'
        },
        {
          value: '2',
          label: '211'
        },
        {
          value: '3',
          label: '双一流'
        },
        {
          value: '4',
          label: '自划线'
        },
        {
          value: '5',
          label: '高等院校'
        },
        {
          value: '6',
          label: '科研院校'
        }
      ]

    }
  },
  mounted () {
    colInfo(this.select_area, this.select_type, this.select_special).then((res) => {
      // alert('查询院校成功')
      this.colList = res.data.data
      console.log(this.colList)
      this.School = this.colList
    })
  },
  methods: {
    select_col () {
      colInfo(this.select_area, this.select_type, this.select_special).then((res) => {
      // alert('查询院校成功')
        this.colList = res.data.data
        console.log(this.colList)
        this.School = this.colList
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
