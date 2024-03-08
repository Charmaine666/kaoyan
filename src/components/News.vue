<template>
   <div class="container">
    <div class="heart" v-on:click="showsel"><h1>考试动态</h1>
    </div>
    <div id="hidden-box-1" class="hidden-box">
      <!-- Content of the hidden box 1 -->
    </div>
    <div id="hidden-box-2" class="hidden-box">
      <!-- Content of the hidden box 2 -->
    </div>
   </div>
</template>
<script>
export default{
  data: function () {
    return {
      isExpanded: true
    }
  },
  methods: {
    showsel: function (event) {
      const heart = document.getElementsByClassName('heart')
      const hiddenBox1 = document.getElementById('hidden-box-1')
      const hiddenBox2 = document.getElementById('hidden-box-2')
      this.isExpanded = !this.isExpanded
      if (this.isExpanded) {
        heart.style.transform = 'translateX(0)'
        hiddenBox1.style.opacity = 0
        hiddenBox2.style.opacity = 0
      } else {
        heart.style.transform = 'translateX(-50%)'
        hiddenBox1.style.opacity = 1
        hiddenBox2.style.opacity = 1
      }
      //   heart.
      alert('我被点击了')
    }
  }
}

</script>
<style scoped>
.container{
    width: 0 auto;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(45deg, #fffdfe, #a9a489);
}
.heart {
    width: 370px;
    height: 370px;
    background-color: #f47310;
    position: absolute;
    border-radius: 50%;
    box-shadow: -20px 20px 100px #f49b35;
    animation: bounce .8s linear infinite;
    text-align: center;
}
.heart h1{
    position: relative;
    font-size:130px;
    opacity: 0.5;
}

@keyframes bounce {
0% {
    transform: rotate(-45deg) scale(1.07);
}
80% {
    transform: rotate(-45deg) scale(1);
}
100% {
    transform: rotate(-45deg) scale(0.8);
}
}

</style>
