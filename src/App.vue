<template>
  <div id="app">
    <div id="nav">
      <div class="con-type-example"></div>
      <!-- <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
          </vs-navbar-item> -->
      <div class="hidden">
        <vs-navbar
          id="vs-navbar"
          shadow
          square
          center-collapsed
          v-model="active"
          style="overflow-x: hidden"
        >
          <template #left>
            <vs-button
              @click="activeSidebar = !activeSidebar"
              flat
              icon
              color="rgb(255,255,255)"
            >
              <!-- navbar logo -->
              <img id="navlogo" :src="'./images/LOGO-16.svg'" />
            </vs-button>
          </template>
          <router-link to="/">
            <vs-navbar-item :active="active == '/'" id="app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                role="img"
                class="iconify iconify--bx"
                width="1.2em"
                height="1.3em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                style="transform: rotate(360deg)"
              >
                <path
                  d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593a.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.949-.316C8.98 13.779 9.762 16 12 16c2.269 0 3.042-2.287 3.05-2.311l1.9.621C16.901 14.461 15.703 18 12 18s-4.901-3.539-4.95-3.689l1.899-.627z"
                  fill="currentColor"
                ></path>
              </svg>
              首頁
              <!-- <router-link to="/contact">Contact</router-link>
          v-if="user.id.length > 0"  先拿掉 -->
            </vs-navbar-item>
          </router-link>
          <a href="#" v-scroll-to="'#btb'">
            <router-link to="/products">
              <vs-navbar-item :active="active > '/products'" id="products">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  class="iconify iconify--fa-solid"
                  width="1.2em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 640 512"
                  style="transform: rotate(360deg)"
                >
                  <path
                    d="M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86c-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96C33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53c9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86c7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53c-9.42-4.71-9.42-18.17.01-22.88z"
                    fill="currentColor"
                  ></path>
                </svg>
                日常用品
              </vs-navbar-item>
            </router-link>
          </a>
          <a href="#" v-scroll-to="'#paw3'"
            ><router-link to="/contact">
              <vs-navbar-item :active="active > '/contacts'" id="contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  class="iconify iconify--fa"
                  width="1.3em"
                  height="1.2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1664 1536"
                  style="transform: rotate(360deg)"
                >
                  <path
                    d="M780 344q0 60-19 113.5T698 550t-105 39q-76 0-138-57.5T363 396t-30-151q0-60 19-113.5T415 39T520 0q77 0 138.5 57.5t91.5 135T780 344zM438 827q0 80-42 139t-119 59q-76 0-141.5-55.5T35 836T0 684q0-80 42-139.5T161 485q76 0 141.5 55.5t100.5 134T438 827zm394-27q118 0 255 97.5t229 237t92 254.5q0 46-17 76.5t-48.5 45t-64.5 20t-76 5.5q-68 0-187.5-45T832 1446q-66 0-192.5 44.5T439 1535q-183 0-183-146q0-86 56-191.5T451.5 1005T639 859t193-59zm239-211q-61 0-105-39t-63-92.5T884 344q0-74 30-151.5t91.5-135T1144 0q61 0 105 39t63 92.5t19 113.5q0 73-30 151t-92 135.5t-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5T1387 1025q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134T1503 485z"
                    fill="currentColor"
                  ></path>
                </svg>
                聯絡我們
              </vs-navbar-item>
            </router-link></a
          >
          <router-link to="/note">
            <vs-navbar-item :active="active > '/note'" id="note">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                role="img"
                class="iconify iconify--fa-solid"
                width="1.13em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
                style="transform: rotate(360deg)"
              >
                <path
                  d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59c-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49c69.18-34.82 169.23-44.32 218.7-46.92c16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05C15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66c49.49 2.6 149.59 12.11 218.77 46.95c10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                  fill="currentColor"
                ></path>
              </svg>
              好聞共讀
            </vs-navbar-item>
          </router-link>
          <router-link to="/cart">
            <vs-navbar-item :active="active > '/cart'" id="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                role="img"
                class="iconify iconify--fa-solid"
                width="1.2em"
                height="1.2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
                style="transform: rotate(360deg)"
              >
                <path
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  fill="currentColor"
                ></path>
              </svg>
              寵物籃
            </vs-navbar-item>
          </router-link>
          <template #right id="relogtextcolor">
            <vs-button
              id="reg-button"
              color="rgb(240,190,150)"
              @click="active1 = !active1"
            >
              登入
            </vs-button>
            <!--登出-->
            <vs-button
              v-if="user.id.length > 0"
              id="logout"
              color="rgb(240,190,150)"
              @click="logout"
            >
              登出
            </vs-button>
            <vs-button
              id="reg-button"
              color="rgb(240,190,150)"
              @click="active2 = !active2"
            >
              註冊
            </vs-button>
            <div id="log">
              <vs-dialog prevent-close v-model="active1">
                <template #header>
                  <h4 id="login" class="not-margin">
                    <b class="login-textcolor">登入 Woofwant</b>
                  </h4>
                </template>
                <div class="con-form">
                  <vs-input v-model="account" placeholder="Email">
                    <template #icon>
                      <box-icon name="envelope" color="#959595"></box-icon>
                    </template>
                  </vs-input>
                  <br />
                  <vs-input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                  >
                    <template #icon>
                      <box-icon
                        name="lock"
                        type="solid"
                        color="#959595"
                      ></box-icon>
                    </template>
                  </vs-input>
                  <div class="flex">
                    <vs-checkbox v-model="checkbox1" id="checkbox1"
                      >Remember me</vs-checkbox
                    >
                    <a id="forgot-log" href="#" class="rgb(158, 158, 158)"
                      >Forgot Password?</a
                    >
                  </div>
                </div>
                <template #footer>
                  <div class="footer-dialog">
                    <vs-button block @click="onSubmit"> Log In </vs-button>
                  </div>
                </template>
              </vs-dialog>

              <vs-dialog prevent-close v-model="active3"> </vs-dialog>
              <!--結束 -->

              <vs-dialog prevent-close v-model="active2">
                <template #header>
                  <h4 id="regnav" class="not-margin">
                    <b class="login-textcolor">註冊 Woofwant</b>
                  </h4>
                </template>
                <div class="con-form-two">
                  <vs-input v-model="input3" placeholder="您的姓名"> </vs-input>
                  <vs-input v-model="input4" placeholder="password"> </vs-input>
                  <vs-input v-model="input5" placeholder="收件信箱"> </vs-input>
                  <vs-input v-model="input6" placeholder="收件地址"> </vs-input>
                  <vs-input v-model="input7" placeholder="狗狗姓名"> </vs-input>
                  <vs-input v-model="input8" placeholder="狗狗生日  yyyy/mm/dd">
                  </vs-input>
                  <div class="flex"></div>
                </div>
                <!-- v-if="user.id.length == 0" -->
                <template #footer>
                  <div class="footer-dialog">
                    <vs-button block @click="onSubmit2"> Sign Up </vs-button>
                  </div>
                </template>
              </vs-dialog>
            </div>
          </template>
        </vs-navbar>
        <vs-sidebar
          right
          v-model="active"
          :open.sync="activeSidebar"
          color="rgb(240,190,140)"
        >
          <template #logo>
            <!-- img logo  -->
          </template>
          <br />
          <br />
          <br />
          <vs-sidebar-item to="/" color="rgb(240,190,140)">
            <template #icon>
              <!-- <i class='bx bx-home'></i> -->
              <box-icon
                name="home-smile"
                type="solid"
                color="rgb(240,190,140)"
              ></box-icon>
            </template>
            首頁
          </vs-sidebar-item>
          <vs-sidebar-group color="rgb(240,190,140)">
            <template #header>
              <vs-sidebar-item arrow to="/products">
                <template #icon>
                  <i class="bx bx-group"></i>
                </template>
                日常用品
              </vs-sidebar-item>
            </template>
            <vs-sidebar-item id="sideproducts" to="products">
              <template #icon> <i class="bx bxl-facebook"></i> </template>
              頭部
            </vs-sidebar-item>
            <vs-sidebar-item id="sidebody" to="body">
              <template #icon> <i class="bx bxl-facebook"></i> </template>
              脖子/身體
            </vs-sidebar-item>
            <vs-sidebar-item id="sidehand" to="hand">
              <template #icon>
                <i class="bx bxl-facebook"></i>
              </template>
              前腳
            </vs-sidebar-item>
            <vs-sidebar-item id="sideleg" to="leg">
              <template #icon>
                <i class="bx bxl-twitter"></i>
              </template>
              後腿
            </vs-sidebar-item>
            <vs-sidebar-item id="sidetail" to="tail">
              <template #icon>
                <i class="bx bxl-facebook"></i>
              </template>
              屁股/尾巴
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate" to="contact">
            <template #icon>
              <i class="bx bxs-donate-heart"></i>
            </template>
            聯絡我們
          </vs-sidebar-item>
          <vs-sidebar-item id="sidenote" to="note">
            <template #icon>
              <i class="bx bxs-donate-heart"></i>
            </template>
            好聞共讀
          </vs-sidebar-item>
          <vs-sidebar-item id="sidecart" to="cart">
            <template #icon>
              <i class="bx bx-drink"></i>
            </template>
            寵物籃
          </vs-sidebar-item>
          <template #footer> </template>
          <img class="sidedog" :src="'./images/sidebar-20.svg'" alt="" />
        </vs-sidebar>
      </div>
      <br />
    </div>
    <router-view />
    <div id="footerp">
      <p class="footertext">
        客服專線 02-52055555(Mon-Fri 11:00-18:00) || 客服信箱 opto8543@gmail.com
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    active: 'app',
    active1: false,
    active2: false,
    active3: false,
    account: '',
    password: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    checkbox1: false,
    activeSidebar: false,
    value: '',
    hasVisiblePassword: false
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
    getProgress() {
      let progress = 0
      if (/\d/.test(this.value)) {
        progress += 10
      }

      return progress
    }
  },
  methods: {
    logout() {
      this.axios
        .delete(process.env.VUE_APP_API + '/users/logout')
        .then(res => {
          if (res.data.success) {
            alert('登出成功')
            this.$store.commit('logout')

            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            alert(res.data.message)
          }
        })
        .catch(error => {
          alert(error.rsponse.data.message)
        })
    },
    onSubmit() {
      // 如果帳號密碼驗證通過
      console.log(process.env.VUE_APP_API + '/users/login')

      this.axios
        .post(process.env.VUE_APP_API + '/users/login', this.$data)
        .then(res => {
          if (res.data.success) {
            this.active1 = false
            this.$store.commit('login', res.data.result)
            this.$swal({
              icon: 'success',
              title: '登入成功'
            }).then(() => {
              // sweet alert 對話框關掉後才跳到相簿頁
              this.$router.push('/cart')
            })
          } else {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: res.data.message
            })
          }
        })
        .catch(err => {
          this.$swal({
            icon: 'error',
            title: '發生錯誤',
            text: err.response.data.message
          })
        })
    },
    onSubmit2() {
      this.axios
        .post(process.env.VUE_APP_API + '/users/', {
          account: this.input5,
          password: this.input4
        })
        .then(res => {
          if (res.data.success) {
            this.active2 = false
            this.$swal({
              icon: 'success',
              title: '註冊成功',
              text: 'woof'
            })
          } else {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: res.data.message
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.$swal({
            icon: 'error',
            title: '發生錯誤',
            text: '123'
          })
        })
    },
    heartbeat() {
      // console.log(process.env.VUE_APP_API + '/users/heartbeat')
      this.axios
        .get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          // 如果 vuex 是登入中
          if (this.user.id.length > 0) {
            // 但是後端沒登入
            if (!res.data) {
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: '登入時效已過'
              })
              // 登出
              this.$store.commit('logout')
              // 導回首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤'
          })
          // 登出
          this.$store.commit('logout')
          // 導回首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted() {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 90000)
  }
}
</script>
<style lang="stylus">
body
    overflow-x: hidden;
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

#nav
  padding: 30px;
.vs-navbar
  position fixed
  background-color #fff

#nav a
  font-weight: bold;
  color: #528f97;

// 按鈕變色
#nav a.router-link-exact-active
  // color: #379799
  color: #f1ac7e

.con-type-example
  .vs-navbar
    margin-top 10px
  .template #img
    width 20px

#sidebar a:visited
  color: #f1ac7e;

#vs-button__content
  display none

#nav a
  text-decoration none

  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
  .con-form
    width 100%
    .flex
      display flex
      align-items center
      justify-content space-between

  .con-form-two
    width 100%
    position relative
    bottom 100px

      a
        font-size .8rem
        opacity .7
        &:hover
          opacity 1
    .vs-checkbox-label
      font-size .8rem
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('warm') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
.vs-navbar__item
  opacity 1

.vs-button block
  background-color rgb(240,190,150) !important

.vs-button vs-button--null vs-button--size-null vs-button--block vs-button--primary vs-button--default
  display none

.footer-dialog button
  background-color rgb(240,190,150) !important
  box-shadow rgb(0,0,0,0.5) !important

.vs-icon-close:hover
  background-color rgba(246, 227, 184,0.5)
  border-radius 10px
  box-shadow rgb(0, 0, 0,0.5)

.vs-input-content
  margin 10px auto

.login-textcolor
  font-size 1.5rem
  color rgb(240,190,150)
  margin auto
.vs-dialog__header
  background-color #f9eacb
  border-radius 20px

.footer-dialog button:hover
  box-shadow rgb(156, 146, 137) !important

#navlogo
  width 80px

#relogtextcolor
  color rgb(158, 158, 158)

#forgot-log
  color rgb(158, 158, 158)
  display flex
  justify-content flex-start

#checkbox1
  color rgb(158, 158, 158)
  display flex
  justify-content flex-end
  position relative
  top 25px
.vs-navbar__center a
  color #528f97
.vs-tooltip top
  display none
.vs-sidebar a
  color #528f97
.sidedog
  position relative
  width 300px
  top 5rem
#footerp
  margin auto
  display flex
  width 100%
  height 60px
  background-color: #4e878c
  opacity: 1
  border-radius 5px 5px 25px 25px
  z-index: 999;
p.footertext
  margin auto
  position: relative;
  color #fff
  opacity: 0.7;
  z-index: 1000;
</style>
