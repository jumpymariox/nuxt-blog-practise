export const state = () => {
  return { blogs: [] }
}

export const mutations = {
  updateBlogs(state, { blogs }) {
    state.blogs = blogs
  },
}
