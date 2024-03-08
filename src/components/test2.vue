<template>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for-key="(i,index) in count" class="infinite-list-item">{{ i }}</li>
    </ul>
  </template>

<script>
export default {
  data () {
    return {
      count: []
    }
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>
