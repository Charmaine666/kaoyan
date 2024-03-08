<template>
    <div id="pre">
      <div id="pre_body">
        <div class="imgBox">
          <div class="innerBox" style="left: -180px; margin-top: -50px;" @click="goDaG()">
              <button style="--ljc:1">考研大纲</button>
              <button style="--ljc:2">考研大纲</button>
              <button style="--ljc:3">考研大纲</button>
              <button style="--ljc:4">考研大纲</button>
              <button style="--ljc:5">考研大纲</button>
          </div>
       </div>
       <div class="imgBox">
           <div class="innerBox" style="left: 40px;" @click="goReq()">
              <button style="--ljc:1">报考要求</button>
              <button style="--ljc:2">报考要求</button>
              <button style="--ljc:3">报考要求</button>
              <button style="--ljc:4">报考要求</button>
              <button style="--ljc:5">报考要求</button>
           </div>
       </div>
       <div class="imgBox">
           <div class="innerBox" style="left: 270px;" @click="goLi()">
              <button style="--ljc:1">历年真题</button>
              <button style="--ljc:2">历年真题</button>
              <button style="--ljc:3">历年真题</button>
              <button style="--ljc:4">历年真题</button>
              <button style="--ljc:5">历年真题</button>
           </div>
       </div>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
    goDaG () {
      window.open('https://pan.quark.cn/s/79a7949d74e0#/list/share', '_blank')
    },
    goReq () {
      window.open('https://pan.quark.cn/s/c8e4f925a2e1', '_blank')
    },
    goLi () {
      window.open('https://pan.baidu.com/s/1peCeUu3lFRdRR5A8Pe-Rgw?pwd=g8th  ', '_blank')
    }
  }
}
</script>

<style scoped src="@/assets/css/pre.css">

</style>
