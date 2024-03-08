<template>
    <div>
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div
          v-show="isVisible"
          v-if="isExpanded"
          key="expanded-box"
          class="expanded-box"
          @click="shrinkAndSlide"
        >
          <!-- Content of the expanded box -->
        </div>
      </transition>

      <div class="hidden-box-container">
        <div v-show="!isExpanded" key="hidden-box-1" class="hidden-box">Box 1</div>
        <div v-show="!isExpanded" key="hidden-box-2" class="hidden-box">Box 2</div>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      isExpanded: true,
      isVisible: true
    }
  },
  methods: {
    shrinkAndSlide () {
      this.isExpanded = !this.isExpanded
    },
    beforeEnter (el) {
      el.style.transform = 'translateX(0)'
    },
    enter (el, done) {
      this.$nextTick(() => {
        el.offsetHeight = 1 // Trigger reflow
        el.style.transition = 'transform 0.5s'
        el.style.transform = 'translateX(-50%)' // Move left by 50%
        done()
      })
    },
    leave (el, done) {
      // You can customize the leave transition if needed
      done()
    }
  }
}
</script>

  <style>
  .expanded-box {
    width: 33.33%; /* Occupies one-third of the viewport width */
    height: 100vh; /* Occupies full viewport height */
    background-color: lightblue;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    padding: 20px; /* Add padding as needed */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* Add other styles as needed */
  }

  .hidden-box-container {
    display: flex;
    justify-content: space-between;
    padding: 20px; /* Add padding as needed */
  }

  .hidden-box {
    width: 30%;
    height: 100px;
    background-color: lightgreen;
    /* Add other styles as needed */
  }
  </style>
