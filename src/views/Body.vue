<template>
  <div
    id="body"
    style="width: 75%; margin: auto; padding: 60px; text-align: center"
  >
    <div id="btb">
      <br />
      <img
        class="headtitle"
        src="../../images\images\身體-張眼-01.gif"
        alt=""
      />
      <br />
      <br />
      <div class="center" style="width: 90%; margin: auto; text-align: center">
        <vs-row justify="space-between">
          <router-link to="/productsbodyone">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>Y字背心牽引帶</h3>
              </template>
              <template #img>
                <img src="../../images\3330163_R3.jpg" alt="" />
              </template>
              <template #text>
                <p>保護失明動物免於碰撞，躺臥也不影響，行動自如</p>
              </template>
            </vs-card>
          </router-link>
          <router-link to="/productsheadone">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>安定背心</h3>
              </template>
              <template #img>
                <img src="../../images\身體-背心.jpg" />
              </template>
              <template #text>
                <p>
                  針對焦慮產生過度反應狗狗推出的背心，是一種專利貼身包覆的衣服，透過恆壓對神經系統釋放出鎮靜的效果
                </p>
              </template>
            </vs-card>
          </router-link>
          <router-link to="/productsheadone">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>恆溫保暖支撐墊</h3>
              </template>
              <template #img>
                <img src="../../images\身體-沙發.jpg" />
              </template>
              <template #text>
                <p>
                  蓄熱保暖，恆溫舒適，雙面依季節變換。支撐性佳，可以讓老犬輕鬆起身；
                  靠枕設計，可以舒緩頸部壓力
                </p>
              </template>
            </vs-card>
          </router-link>
        </vs-row>
      </div>
      <div
        id="secondphead"
        class="center"
        style="width: 90%; margin: auto; text-align: center; padding-top: 3rem"
      >
        <vs-row justify="space-between">
          <router-link to="/productsbodytwo">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>牽引帶背心</h3>
              </template>
              <template #img>
                <img src="../../images\身體-背心-22.jpg" alt="" />
              </template>
              <template #text>
                <p>
                  高回彈泡棉搭配透氣網布，能有效減輕狗狗暴衝時的壓力，提供毛孩極佳舒適度。
                </p>
              </template>
            </vs-card>
          </router-link>
          <router-link to="/productsheadone">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>保暖雨衣</h3>
              </template>
              <template #img>
                <img src="../../images\身體-雨衣.jpg" />
              </template>
              <template #text>
                <p>100%polyester，材質保暖有質感，毛孩穿著柔軟舒適</p>
              </template>
            </vs-card>
          </router-link>
          <router-link to="/productsheadone">
            <vs-card
              type="4"
              class="vs-card-head"
              :key="index"
              v-for="index in 1"
              w="4"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
            >
              <template #title>
                <h3>大型老犬寵物推車</h3>
              </template>
              <template #img>
                <img src="../../images\身體-搖籃.jpg" />
              </template>
              <template #text>
                <p>
                  結構堅固耐重50kg，灌氣胎與高避震，車輪可拆組，狗屋／外出兩用
                </p>
              </template>
            </vs-card>
          </router-link>
        </vs-row>
      </div>
    </div>
    <div class="more">\ 猜牠也想要 /</div>
    <carousel id="car" style="width: 90%">
      <router-link to="/products">
        <div class="hover-box">
          <div class="img-box">
            <slide id="headcoki">
              <img src="../../images\banner-01.png" height="400" />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>頭部</h2>
              <span>
                <pre>
防撞安心圈、隨身水壺、
防抓傷後頭套...點我看更多</pre
                >
              </span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/hand">
        <div class="hover-box">
          <div class="img-box">
            <slide id="handfox">
              <img src="../../images\banner2-01.png" height="400" />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>前腳</h2>
              <span>前腳復健鞋、點我看更多...</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="body">
        <div class="hover-box">
          <div class="img-box">
            <slide id="neckpuff">
              <img src="../../images\7440A147.jpg" height="400" />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>脖子</h2>
              <span>點我看更多...</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="body">
        <div class="hover-box">
          <div class="img-box">
            <slide id="bodyellow">
              <img src="../../images\carbody-21.jpg" height="400" />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>身體</h2>
              <span>點我看更多...</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="leg">
        <div class="hover-box">
          <div class="img-box">
            <slide id="headcoki">
              <img
                src="../../images\後腳-十字韌帶復健護膝-21.jpg"
                height="400"
              />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>後腿</h2>
              <span>點我看更多...</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="tail">
        <div class="hover-box">
          <div class="img-box">
            <slide id="headcoki">
              <img src="../../images\屁股尾巴-21.jpg" height="400" />
            </slide>
          </div>
          <div class="info-box">
            <div class="info-content">
              <h2>屁股/尾巴</h2>
              <span>點我看更多...</span>
            </div>
          </div>
        </div>
      </router-link>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
      <slide class="carhead">
        <img id="headcoki" src="../../images\防撞圈2.svg" height="400" />
      </slide>
    </carousel>
  </div>
</template>
<script>
export default {
  name: 'Body'
}
</script>
<script>
export default {
  data: () => ({
    active: false,
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false
  })
}
</script>
<style lang="stylus">
#body
  overflow hidden;
  // background-color: #F9EACB
  // background-image: linear-gradient(280deg, #ffe2ca 0%, #F9EACB 30%, #ffffff 80%)
  border-radius 20px
  // background-color #F9EACB
  background-image: linear-gradient(180deg, #F9EACB 55%, #ffe2ca 20%, #ffffff 100%)
  height 1800px
#car
  // border 0px dashed rgb(240,190,140);
  top 30rem
  margin auto
  overflow hidden

.vs-card-head{
   display: inline-block
}

.vs-card-head img
  border-redius: 20px
  height  250px
  border 4px solid rgb(240,190,140)
  margin auto
  position relative
.vs-card__text
  position relative
  backdrop-filter none !important
  background-size contain !important
.vs-card:hover .vs-card__text
  background-image linear-gradient(0deg, rgba(250,234,205,0.5), transparent) !important
.vs-card__text p
  color:#528f97
  font-weight 600
  margin auto
.vs-card-p
  // height 250px;
  background-size contain
  display flex

a
  text-decoration none
// #vs-card
//   border 4px solid rgb(240,190,140)
#smallpic
  margin auto
  width 80%
.VueCarousel-slide img
  border-radius 20px
  padding 2rem
  box-shadow -2px 3px 12px -2px rgba(0, 0, 0, 0.5)
  background-size contain
.headtitle
  width 50%
  margin auto
  margin-bottom 3rem
  // margin-top 1rem
  position relative
  bottom 30px
  border 4px dashed #F1BE96
  box-shadow 5px 3px 12px 2px rgba(167, 148, 118, 0.5)
  border-radius 20px
  padding 1.5rem

  // background-color #fff
// .tooltip
//   margin-bottom 2.5rem
#btb
  height 550px
  border-radius 20px
  margin auto
  padding 2.5rem
.vs-row
  margin auto
  display flex
  justify-content flex-end
  position relative
  overflow-y hidden
.VueCarousel-wrapper
  border-radius 20px
  box-shadow none
  margin auto

.tags {
  display: inline
  position: relative
}
// 從這裡改
.tags:hover:after {
  background: #F9EACB
  background: rgba(0, 0, 0, .8);
  border-radius: 5px;
  bottom: -34px;
  color: #fff;
  content: attr(gloss);
  left: 20%;
  padding: 5px 15px;
  position: absolute;
  z-index: 98;
  width: 100px;
  background-color #4e878c
}

.tags:hover:before {
  border: solid;
  border-color: #4e878c transparent;
  border-width: 0 6px 6px 6px;
  bottom: -4px;
  content: "";
  left: 20%;
  position: absolute;
  // z-index: 99;
}
.vs-tooltip top
  display none
// hoverbox
.hover-box {
  max-width: 100%;
  margin: auto;
  // background: #4d674a;
  box-sizing: border-box;
  position:relative;
}

.hover-box .img-box {
  position: relative;
  // overflow: hidden;
  margin-right 4rem

}

.hover-box .img-box img {
  margin: auto;
  transition: transform 0.5s;
}

.hover-box:hover .img-box img {
  transform: scale(1.2);
}

 .hover-box .info-box {
  position: absolute;
  left: 100px;
  top: 100px;
  bottom:100px;
  right:100px;
  color:#fff;
  font-size 1.5rem
  background:rgba(78,135,140,0.6);
   text-align:center;
   transform:scaleY(0);
   transition:transform .5s;
   border-radius 50px
}

.hover-box .info-box .info-content{
  position:absolute;
  top:70%;
  transform:translateY(-50%);
  padding:15px;
}

.hover-box:hover .info-box {
  transform:scaleY(1);
}

.hover-box .info-box h2{
  display flex
  justify-content center
  align-items center
  position relative
  bottom 4rem
  left 7rem
  font-size 3rem
}
.hover-box .info-box span
  display flex
  justify-content center
  align-items center
  position relative
  bottom 5rem
  left 7rem
  font-size 15px
.secondhead
  display flex
  margin-top 4rem
  width 100%
.secondhead
  display flex
  margin-top 4rem
  width 100%
.more
    position: relative;
    top: 28rem;
    color: #528f97;
    font-size: 2rem;
    font-weight 600

  @media (max-width:768px)
    #secondphead
      display none
h3
  color #a79476
</style>
