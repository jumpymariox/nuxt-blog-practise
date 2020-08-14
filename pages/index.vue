<template>
  <div class="layout">
    <div class="layout-side-nav">
      <h1 class="logo">Technology Blog</h1>
      <a-menu
        mode="inline"
        :default-selected-keys="['ssr']"
        :default-open-keys="['blogs']"
        :selected-keys="[current]"
        @click="handleClick"
      >
        <a-sub-menu key="blogs">
          <span slot="title">
            <a-icon type="reconciliation" />
            <span>Blogs</span>
          </span>

          <a-menu-item key="ssr">
            <span>服务端渲染</span>
          </a-menu-item>
          <a-menu-item key="db">
            <span>数据库</span>
          </a-menu-item>
          <a-menu-item key="mvvm">
            <span>前端MVVM框架</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="layout-content">
      <a-list item-layout="horizontal" :data-source="blogs">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta :description="item.description">
            <nuxt-link slot="title" :to="'blog/' + item.id">{{
              item.title
            }}</nuxt-link>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  async fetch() {
    const { data } = await axios.get('http://localhost:3002/blogs')
    this.updateBlogs({ blogs: data })
    console.log('fetch')
  },
  data() {
    return {
      current: 'ssr',
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs.map((blog) => ({
        ...blog,
        description: blog.content.substr(0, 200),
      }))
    },
  },
  methods: {
    handleClick(e) {
      this.current = e.key
    },
    ...mapMutations({ updateBlogs: 'blogs/updateBlogs' }),
  },
}
</script>

<style lang="less">
ul,
li {
  list-style: none;
}
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
  &-side-nav {
    border-right: 1px solid #ddd;
  }
  &-content {
    padding: 24px 48px;
  }
}
.logo {
  font-family: cursive;
  padding: 6px 0;
  color: white;
  background-color: #5d849f;
  text-align: center;
  font-weight: 800;
}
.ant-list-item-meta-content {
  width: 0;
}
.ant-list-item-meta-description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
