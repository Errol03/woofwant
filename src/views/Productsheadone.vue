<template>
  <div
    id="productsheadone"
    style="
      width: 75%;
      margin: auto;
      padding: 60px;
      text-align: center;
      border-radius: 20px;
    "
  >
    <carousel id="carthr" style="width: 75%; margin: auto">
      <slide>
        <template>
          <div class="center">
            <b @click="active6 = !active6">
              <img src="../../images\防撞.jpg" height="400" />
            </b>
            <vs-dialog not-close auto-width not-padding v-model="active6">
              <div class="con-imagecoki">
                <img src="../../images\防撞.jpg" width="100%" />
              </div>
            </vs-dialog>
          </div>
        </template>
      </slide>
      <slide>
        <template>
          <div class="center">
            <b @click="active7 = !active7">
              <img src="../../images\防撞圈-21.svg" height="400" />
            </b>
            <vs-dialog not-close auto-width not-padding v-model="active7">
              <div class="con-image">
                <img src="../../images\防撞圈-21.svg" width="100%" />
              </div>
            </vs-dialog>
          </div>
        </template>
      </slide>
      <slide>
        <template>
          <div class="center">
            <b @click="active5 = !active5">
              <img src="../../images\頭-防撞.jpg" height="400" />
            </b>
            <vs-dialog not-close auto-width not-padding v-model="active5">
              <div class="con-image">
                <img src="../../images\頭-防撞.jpg" />
              </div>
            </vs-dialog>
          </div>
        </template>
      </slide>
      <slide>
        <template>
          <div class="center">
            <b @click="active8 = !active8">
              <img src="../../images\頭-防撞3.jpg" height="400" />
            </b>
            <vs-dialog not-close auto-width not-padding v-model="active8">
              <div class="con-image">
                <img src="../../images\頭-防撞3.jpg" height="600" />
              </div>
            </vs-dialog>
          </div>
        </template>
      </slide>

      <slide>
        <template>
          <div class="center">
            <b @click="active9 = !active9">
              <img src="../../images\測量方式-14.svg" height="400" />
            </b>
            <vs-dialog not-close auto-width not-padding v-model="active9">
              <div class="con-image3">
                <img src="../../images\測量方式-14.svg" height="800" />
              </div>
            </vs-dialog>
          </div>
        </template>
      </slide>
      <!-- <slide>
        <img src="../../images\null-15.jpg" height="350" />
      </slide> -->
    </carousel>
    <!-- 商品縮圖 -->
    <br />
    <h1 class="nt">
      失明安心圈
      <pre>NT$520</pre>
    </h1>
    <br />
    <br />
    <template>
      <vs-alert
        shadow
        border
        :page.sync="page"
        style="width: 70%; margin: auto"
        color="rgb(158, 116, 57)"
      >
        <template #page-1
          ><h1>商品資訊</h1>
          <strong style="font-size: 1rem; line-height: 30px"
            >猶記帶著車禍剛痊癒的泡芙散心，每每是一大挑戰。當時還不能跑跳，拉起來不需太費力，但是過馬路總是費神。
            <pre />
            於是以穿戴簡易與舒適度高為第一考量，於是這款H行胸帶就成為我第一選擇。</strong
          >
          <pre />
          <p style="line-height: 30px">
            一、不易拉傷頸部 二、穿戴方式簡單，降低不適時間 三、頸和胸部有調整環
            <br />三、五種尺寸適合各種體型狗狗 四、輕量、透氣、吸收衝力 五、All
            In Taiwan 台灣製造
          </p>
        </template>

        <template #page-2>
          <h1>購物須知</h1>

          <pre style="line-height: 20px">
購物須知 在訂單未成立前我們有權取消出貨及取消交易，同時也會與您聯絡。
          完成付款後約七個工作天(不含周六日、國定例假日、貨到付款除外)出貨。
          訂單成立後，線上刷卡請於當天內完成付款，未於當天內完成付款之訂單會自動取消並且不保留商品與通知。
          週五上午十一點後訂單統一於週一處理出貨。
          如遇連續假期等特殊節日，出貨事宜將公告在最新消息。
          訂單中如有不同溫層商品，將直接幫您取消此筆訂單並不另外通知。
          訂貨之發票將隨貨寄送，如另寄他處地址或開立統一編號，都請於備註欄填寫備註。
          如有產品缺貨或其他狀況導致出貨延遲，我們將會主動致電通知您。
          如需指定到貨時間，請於備註欄填寫希望配達日期。例如：到貨日05/01。
          海鮮、季節性商品指定到貨日以該商品規定細則為依據。</pre
          >
        </template>

        <template #page-3>
          <h1>備註</h1>
          O七天鑑賞期 X無提供貨到付款
        </template>
      </vs-alert>
    </template>
    <br />
    <template>
      <div class="center">
        <vs-button @click="addCart(item)" color="rgb(240,190,150)"
          >加入購物車</vs-button
        >
        <vs-dialog width="550px" not-center v-model="active4">
          <template #header> </template>

          <div class="con-content">
            <h2 class="addtocart" style="margin: 'auto'">添加至購物車</h2>
          </div>

          <template #footer>
            <div class="con-footer">
              <vs-button
                color="rgb(240,190,150)"
                @click="active4 = false"
                transparent
              >
                Ok
              </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'productsheadone',
  data: () => ({
    active: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
    active7: false,
    active8: false,
    active9: false,

    input1: '',
    page: 1
  }),
  methods: {
    addCart(item) {
      this.$store.commit('addCart', item)
    }
  }
}
</script>
<style lang="stylus">
#productsheadone
  background-color #F9EACB;
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-footer
  display flex
  align-items center
  justify-content flex-end
  .vs-button__content
    margin 0px
    color rgb(240,190,150) !important
      padding 10px 30px
    ~ .vs-button
      margin-left 10px
.not-margin
  margin 0px
  font-weight normal
  padding 10px
  padding-bottom 0px
.con-content
  width 100%
  p
    font-size .8rem
    padding 0px 10px
  .vs-checkbox-label
    font-size .8rem
  .vs-input-parent
    width 100%
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
    color rgb(240,190,150)
.addtocart
  margin auto
  position relative
  top 20px

.vs-alert
  filter:box-shadow(5px 5px 5px #333)
.VueCarousel-slide img
  border-radius 20px
.nt
  color #528f97
.VueCarousel-wrapper
  padding 2rem
  margin auto
#carthr
  padding 2rem
.con-imagecoki
  margin auto
  position relative
  right 10rem
.con-image3
  margin auto
  position relative
  right 15rem
.center
  margin auto
</style>
