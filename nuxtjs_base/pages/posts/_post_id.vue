<template>
  <div>
    <table class="table table-primary">
      <thead>
        <tr>
          <th scope="col">
            ID
          </th>
          <th scope="col">
            Title
          </th>
          <th scope="col">
            Description
          </th>
          <th scope="col">
            Image
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="postDetail">
          <th scope="row">
            {{ postDetail.id }}
          </th>
          <td>{{ postDetail.title }}</td>
          <td>{{ postDetail.description }}</td>
          <td>
            <img :src="postDetail.image" class="img-thumbnail" width="100" height="100">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.post_id)
  },
  computed: {
    ...mapState({
      postDetail: state => state.posts.postDetail
    }),
    ...mapGetters({
      detailPostsGetter: 'posts/detailPostsGetter'
    })
  },
  created () {
    this.demoPage()
  },
  methods: {
    ...mapActions({
      getDetailPost: 'posts/getDetailPost'
    }),
    async demoPage () {
      // await this.$store.dispatch('getDetailPost')
      await this.getDetailPost(this.$route.params.post_id)
    }
  }
}
</script>
