import * as HttpStatus from 'http-status-codes'

export const state = () => ({
  posts: [],
  postDetail: null
})

export const getters = {
  postsGetter: state => state.posts,
  detailPostsGetter: state => state.postDetail
}

export const mutations = {
  setPosts (state, data) {
    state.posts = data
  },
  setDetailPost (state, data) {
    state.postDetail = data
  }
}

export const actions = {
  async getListPost ({ commit }, data) {
    const dataPost = await this.$axios.get('posts')
    if (dataPost.status === HttpStatus.OK) {
      commit('setPosts', dataPost.data)
    } else {
      commit('setPosts', [])
    }
  },
  async getDetailPost ({ commit }, data) {
    const dataPost = await this.$axios.get(`posts/${data}`)
    if (dataPost.status === HttpStatus.OK) {
      commit('setDetailPost', dataPost.data)
    } else {
      commit('setDetailPost', null)
    }
  }
}
