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
        <tr v-for="post in postsGetter" :key="post.id">
          <th scope="row">
            {{ post.id }}
          </th>
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>
            <img :src="post.image" class="img-thumbnail" width="100" height="100">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: state => state.posts.posts
    }),
    ...mapGetters({
      postsGetter: 'posts/postsGetter'
    })
  },
  created () {
    this.demoPage()
  },
  methods: {
    ...mapActions({
      getListPost: 'posts/getListPost'
    }),
    async demoPage () {
      // await this.$store.dispatch('getListPost')
      await this.getListPost()
    }
  }
}
</script>
