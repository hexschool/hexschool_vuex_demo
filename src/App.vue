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
          <select name="" id="" class="form-control" v-model="status">
            <option value="線上">線上</option>
            <option value="線下">線下</option>
          </select>
        </div>
        <span class="navbar-text">
          Hi {{ username }}
        </span>
      </div>
    </nav>
    <router-view :status="status" @pushNewName="getNewName"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      status: '線上',
      username: 'Casper2'
    }
  },
  methods: {
    getNewName (newName) {
      console.log(newName)
      let vm = this
      vm.username = newName
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
