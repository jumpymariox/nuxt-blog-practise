<template>
  <div class="blog">
    <a-card :title="blog.title" :bordered="false">
      {{ blog.content }}
    </a-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    console.log('asyncData')
    const { data } = await axios.get(`http://localhost:3002/blogs/${params.id}`)
    return { blog: data }
  },
  data() {
    return {
      blog: null,
    }
  },
}
</script>

<style lang="less">
.blog {
  height: 100vh;
  padding: 30px;
  background: #ececec;
  overflow: auto;
}
.ant-card {
  margin: 0 auto;
  width: 1000px;
}
.ant-card-body {
  white-space: pre-wrap;
}
</style>
