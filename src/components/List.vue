<template>
  <div class="container-fluid mt-5">
    <div class="d-flex justify-content-between mb-3">
      <div class="form-control-static">
        {{ status }}
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
        <tr v-for="(item, i) in listData">
          <th>{{ i }}</th>
          <td><img :src="item.picture.medium" width="50" alt=""></td>
          <td>{{ item.name.first }} {{ item.name.last }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary">選擇</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['status'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'Casper',
      listData: []
    }
  },
  methods: {
    getData () {
      let vm = this
      vm.$http.get('https://randomuser.me/api/?results=25').then(response => {
        console.log(response.body.results)
        vm.listData = response.body.results
      }, response => {
      })
    },
    updateUsername () {
      let vm = this
      console.log('vm.username', vm.username)
      vm.$emit('pushNewName', vm.username)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
