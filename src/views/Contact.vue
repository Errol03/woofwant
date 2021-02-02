<template>
  <div id="contact">
    <!-- <img id="homelogo" src="../../images/LOGO-love-08.png" /> -->
    <img
      id="pinpeilogo"
      class="pinpeilogo"
      src="../../images/pinpeilogo.svg"
      width="450"
    />
    <template>
      <vs-alert id="alert" class="pinpeistory" shadow color="rgb(158, 116, 57)">
        <template #title class="center" style="margin: auto" id="brand">
          <h2 style="color: #4e878c; margin-top: 2.5rem; font-size: 2.5rem">
            品牌故事
          </h2>
        </template>
        <p style="font-weight: bold; font-size: 1.2rem; line-height: 3rem">
          這是23歲的我，與13歲米克斯狗狗泡芙的故事。
        </p>
        <pre
          style="
            font-weight: bold;
            font-size: 1.1rem;
            line-height: 2rem;
            padding-bottom: 2.5rem;
          "
        >
    Woof want 發音像牠的各種叫聲，
    念起來有互相守望相助的意思，中文又像搖搖尾巴討東西的模樣。
    這裡販售步入老犬的牠日常使用到的用品，也有我閱讀到的文章分享，
    比起電商，更像紀錄我們生活的部落格。</pre
        >
      </vs-alert>
    </template>
    <!-- 卡片組合 -->
    <!-- <template>
    <div class="grid" style="width:75%;margin:auto;text-align:center;">
     <vs-row justify="center">
        <vs-col :key="index" v-for="index in 5" w="4">
      <img src="https://picsum.photos/300/300/?random=1" alt="">
        </vs-col>
      </vs-row>
     </div>
  </template> -->
    <img class="talk" src="../../images\衣櫃-17.svg" alt="" />
    <div id="dog">
      <div id="cardgroupdog" class="row center">
        <router-link to="/products">
          <vs-card type="2" class="col-4">
            <template #title>
              <h3 style="display: flex; left: 10rem">頭/脖子</h3>
            </template>
            <template #img>
              <img src="../../images/head.png" alt="" />
            </template>
            <template #text>
              <p class="hovertext">從鼻子到脖子Loremc adipisicing elit.</p>
            </template>
          </vs-card>
        </router-link>
        <router-link to="/Body">
          <vs-card type="2">
            <template #title>
              <h3>身體</h3>
            </template>
            <template #img>
              <img src="../../images/body.png" alt="" />
            </template>
            <template #text>
              <p class="hovertext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
          </vs-card>
        </router-link>
        <router-link to="/Tail">
          <vs-card type="2" class="col-4">
            <template #title>
              <h3>尾巴</h3>
            </template>
            <template #img>
              <img src="../../images/tail.png" alt="" />
            </template>
            <template #text>
              <p class="hovertext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
          </vs-card>
        </router-link>
      </div>

      <div id="cardgroup" class="row center">
        <router-link to="/Hand">
          <vs-card type="2" class="col-4">
            <div class="vs-card"></div>
            <template #title>
              <h3>前腳</h3>
            </template>
            <template #img>
              <img src="../../images/hand-12.png" alt="" />
            </template>
            <template #text>
              <p class="hovertext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
          </vs-card>
        </router-link>
        <router-link to="/Leg">
          <vs-card type="2">
            <template #title>
              <h3>後腿</h3>
            </template>
            <template #img>
              <img src="../../images/leg-13.png" alt="" />
            </template>
            <template #text>
              <p class="hovertext">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
          </vs-card>
        </router-link>
      </div>
    </div>
    <!-- 中間 -->
    <div id="QA">
      <template>
        <div class="center">
          <vs-button
            block
            color="rgb(158, 116, 57)"
            style="width: 60%; margin: auto; text-algn: center"
          >
            常見Q&A
          </vs-button>
        </div>
      </template>
      <!-- 警報 -->
      <template>
        <vs-alert
          :hidden-content.sync="hidden1"
          color="rgb(241, 172, 126)"
          style="width: 60%; margin: auto; text-algn: center"
        >
          <template #title>哇嗚 ~ 毛孩的尺寸該怎麼量？</template>
          <pre>
跟著我念一遍：背長、胸圍、頸圍。
依每間商家的版型、款式的不同，頸圍、胸圍、背長都會有所不同，以下將會說明要注意的事項。
1.頸圍: 用皮尺繞脖子一圈，預留兩三根手指即可。
2.胸圍: 從胸口最凸的地方繞一圈測量。
3.背長: 後頸到屁股的距離。
</pre
          >
        </vs-alert>
        <vs-alert
          :hidden-content.sync="hidden2"
          color="rgb(80, 140, 145)"
          style="width: 60%; margin: auto; text-algn: center"
        >
          <template #title> 輪椅怎麼選？ </template>
          <pre>
輪椅是行動障礙狗狗日常最緊密接觸的日用品，選購上需要考量的事情更多，
我整理了簡單摘要、以及購買輪椅前的注意事項供釐清思緒：
1.目的性：最主要希望輪椅能幫狗狗能做到？
2.支撐方式：穩定性是輪椅最重要的一環，根據不同部位，支撐的方式也會有所不同。
3.使用環境：地面材質與面積也是影響功能性不可或缺的因素。
4.舒適度：除客製化輪椅外，狗狗試坐的反應也是重要參考依據喔</pre
          >
        </vs-alert>
        <vs-alert
          :hidden-content.sync="hidden3"
          color="rgb(241, 172, 126)"
          style="width: 60%; margin: auto; text-algn: center"
        >
          <template #title>關於商品退、換貨</template>
          <pre>
若您收到的商品出現瑕疵、尺寸不合適時，
           依據產品種類不同，請洽詢聯絡我們，將提供最完整的售後服務。
         </pre
          >
        </vs-alert>
      </template>
      <template>
        <vs-alert
          :hidden-content.sync="hidden4"
          color="rgb(80, 140, 145)"
          style="width: 60%; margin: auto; text-algn: center"
        >
          <template #title>狗狗復健與治療醫院 </template>
          <pre>
民間有許多狗狗復健醫院，到底挑哪間好，其實最主要交通便捷、狗狗感到自在以外，剩下的衡量空間很大。
            網路上也有一些專門機構，在家就可以做功課，不用一間間跑https://www.doctordog.org.tw/aboutdrdog.php</pre
          >
        </vs-alert>
      </template>
    </div>
    <template>
      <img class="paws2" src="../../images/腳印-18.png" alt="" />
      <img class="paws" src="../../images/腳印-18.png" alt="" />
      <img id="paw3" class="paws3" src="../../images/腳印-18.png" alt="" />
      <br />
      <br />
      <br />
      <div class="table-responsive" id="table-responsive">
        <img class="contactpic" src="../../images/contact-22.svg" />
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data: () => ({
    hidden: true,
    hidden1: true,
    hidden2: true,
    hidden3: true,
    hidden4: true
  })
}
</script>

<style lang="stylus">
#contact
  background-color: #F9EACB
  background-image: linear-gradient(280deg, #ffe2ca 10%, #F9EACB 30%, #ffffff 90%)
  overflow-x: hidden

#alert{
  width: 50%;
  margin:0 auto 5rem auto !important;
  text-align: center
}
#text
  text-align center
  left 200px
  color #2c3e50

.center
  display flex
  justify-content  center

#cardgroup
  margin auto

.talk
  opacity 0.8
  position relative
  margin auto
  margin-top 5rem
  height 300px
#dog h3
  position relative
  top 1.5rem
  margin auto
  color #4e878c
//   display flex
//   width 70%
//   height 800px
//   justify-content flex-end
//   flex-wrap nowrap
//   flex-direction row
//   align-items flex-end
.vs-card
  background none !important

// 聯絡我們
.contactpic
  margin-left auto
  width 70%
  padding-bottom 15rem
#homelogo
  width 500px
  height 500px
  margin 5rem
  margin-top 10rem

a .vs-card-content col-4 type-2
  width 250px !important
  height 250px
.vs-alert
  background-color rgba(255,255,255,0.3)
  // filter drop-shadow(5px 5px 5px #fff)
  border-radius 15px
.vs-alert__title
  margin auto
  display flex
  justify-content center
  align-items center
  font-size 1.3rem
  font-weight 600

.vs-alert__title h2
  position relative
  top 20px
.vs-alert__content__text
  font-weight 600
  line-height 25px
  font-size 15px
.vs-alert::after
  display none
.vs-navbar__center a
  color #333
#QA
  margin 5rem
#boxicon
  color rgb(80, 140, 145)
  margin auto

.paws
  margin-top 5rem
  width 80px
  height 80px
  position relative
  left 50px
  bottom 50px
  opacity 0.8
.paws2
  width 120px
  height 120px
  position relative
  right 30px
  top 60px
  transform: rotate(300deg)
.paws3
  width 150px
  height 150px
  position relative
  right 500px
  top 100px
.pinpeistory
  background-color #f9eacb

.vs-card-content.type-2 .vs-card__text{
  background: none !important
}
.vs-card:hover .vs-card__text{
  background-image:linear-gradient(0deg,rgba(250,235,205,0.5),transparent) !important
}
// .vs-card__text h3
//   padding-bottom 100px
.vs-card__text .hovertext
  color rgb(249, 234, 204, 0)
</style>
