<template lang="html">
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/contact">Contact</router-link> -->
      <div class="con-type-example">
    </div>
    <router-view/>
    <vs-navbar :type="type" v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Type {{type}}
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <!-- <a href="#">Home</a> -->
      <router-link to="/">首頁</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">商品</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <!-- <a href="#">News</a> -->
      <router-link to="/contact">聯絡我們</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <a href="#">相關文章</a>
      </vs-navbar-item>
      <vs-navbar-item index="4">
      <a href="#">購物車</a>
      </vs-navbar-item>
      <vs-navbar-item index="5">
      <a href="#">登入/註冊</a>
      </vs-navbar-item>
    </vs-navbar>
    <!-- card -->
  </div>
  </div>
  <div>
    
</template>
<script>
</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

// visited出現的顏色
#nav a.router-link-exact-active {
  color: #b98142;
}

.con-type-example
  .vs-navbar
    margin-top 10px
</style>
