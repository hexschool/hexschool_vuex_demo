<template>
  <div class="container-fluid mt-5">
    <div class="d-flex justify-content-between mb-3">
      <div class="form-control-static">
        {{ showStatus }}
      </div>
      <div class="form-inline">
        <input type="text" class="form-control" v-model="username" placeholder="你的姓名">
        <button type="submit" class="btn btn-primary ml-3" @click="updateUsername">更新姓名</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>縮圖</th>
          <th>姓名</th>
          <th>選擇</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in getList" :class="{ 'bg-warning': item.selected }">
          <th>{{ i }}</th>
          <td><img :src="item.picture.medium" width="50" alt=""></td>
          <td>{{ item.name.first }} {{ item.name.last }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary" @click="selectItem(item, i)">選擇</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 引用 vuex
import { mapGetters } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'Casper'
    }
  },
  methods: {
    updateUsername () {
      let vm = this
      this.$store.state.username = vm.username
    },
    selectItem (item, i) {
      this.$store.commit('UPDATE_STATUS', i)
    }
  },
  computed: {
    showList () {
      return this.$store.state.listData
    },
    showStatus () {
      console.log(this.$store.state.status)
      return this.$store.state.status
    },
    ...mapGetters([
      'getList'
    ])
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
