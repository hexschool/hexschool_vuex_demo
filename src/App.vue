<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/List' }">列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/User' }">個人資料</router-link>
          </li>
        </ul>
        <div class="form-inline mr-3">
          <select name="" id="" class="form-control" @change="changeStatus" v-model="status">
            <option value="線上">線上</option>
            <option value="線下">線下</option>
          </select>
        </div>
        <span class="navbar-text">
          Hi {{ showUserName }}
        </span>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      status: this.$store.state.status
    }
  },
  methods: {
    getNewName (newName) {
      console.log(newName)
      let vm = this
      vm.username = newName
    },
    getData () {
      let vm = this
      vm.$http.get('https://randomuser.me/api/?results=25').then(response => {
        console.log(response.body.results)
        // vm.$store.state.listData = response.body.results
        vm.$store.commit('UPDATE_DATA', response.body.results)
      }, response => {
      })
    },
    changeStatus (e) {
      this.$store.state.status = this.status
    }
  },
  computed: {
    showUserName () {
      return this.$store.state.username
    }
  },
  mounted () {
    let vm = this
    vm.getData()
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
