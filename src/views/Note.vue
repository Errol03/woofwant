<template>
  <div id="note">
    <br />
    <br />
    <br />
    <!-- <h1>This is a note page</h1> -->
    <!-- <router-link to="/Write"> -->
    <div
      id="cardread"
      class="center"
      style="width: 80%; margin: auto; text-align: center"
    >
      <vs-row justify="space-around" w="12">
        <vs-card
          id="teone"
          @click="active = !active"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              牠已經是老狗狗了嗎?
            </h3>
          </template>
          <template #img>
            <img :src="'./images/notebanner1-02-01.jpg'" alt="" />
          </template>
          <template #text>
            <p class="notetext">
              老齡犬年齡表及衰老特徵、老年犬常見六大疾病及老狗日常護理
            </p>
          </template>
        </vs-card>
        <vs-card
          @click="active2 = !active2"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              乾食 ? 濕食 ?
            </h3>
          </template>
          <template #img>
            <img :src="'./images/乾食濕食.jpg'" alt="" />
          </template>
          <template #text>
            <p class="notetext">
              老齡犬年齡表及衰老特徵、老年犬常見六大疾病及老狗日常護理
            </p>
          </template>
        </vs-card>
        <vs-card
          @click="active3 = !active3"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              最適合老狗的5個運動
            </h3>
          </template>
          <template #img>
            <img :src="'./images/notebanner3-01.png'" width="100px" />
          </template>
          <template #text>
            <p class="notetext">
              老齡犬年齡表及衰老特徵、老年犬常見六大疾病及老狗日常護理
            </p>
          </template>
        </vs-card>
      </vs-row>
      <vs-dialog overflow-hidden full-screen v-model="active">
        <template #header>
          <h1 class="onetitle">牠已經是老狗狗了嗎?</h1>
        </template>
        <div class="vs-dialog__content">
          <img
            :src="'./images/notebanner1.1-01.jpg'"
            width="90%"
            style="border-radius: 30px"
          />
        </div>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
      <vs-dialog overflow-hidden full-screen v-model="active2">
        <template #header>
          <h1 class="onetitle">乾食? <b>濕食?</b></h1>
        </template>
        <div class="vs-dialog__content">
          <img
            :src="'./images/乾食濕食.jpg'"
            width="90%"
            style="border-radius: 30px"
          />
        </div>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
      <vs-dialog overflow-hidden full-screen v-model="active3">
        <template #header>
          <h1 class="onetitle">牠， <b>已經是老狗狗了嗎?</b></h1>
        </template>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
    </div>
    <div
      id="cardsecondreadtwo"
      class="center"
      style="width: 80%; margin: auto; text-align: center"
    >
      <vs-row justify="space-around" w="12">
        <vs-card
          @click="active4 = !active4"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              不同品種常見的疾病與護理
            </h3>
          </template>
          <template #img>
            <img :src="'.//images/white-dog.jpg'" alt="" />
          </template>
          <template #text>
            <p class="notetext">不同品種常見的疾病與護理</p>
          </template>
        </vs-card>
        <vs-card
          @click="active5 = !active5"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              老狗狗生日蛋糕的選擇??
            </h3>
          </template>
          <template #img>
            <img
              :src="'./images/b5d4b85c317b82c562cbfd437872d78e.jpg'"
              alt=""
            />
          </template>
          <template #text>
            <p class="notetext">
              老齡犬年齡表及衰老特徵、老年犬常見六大疾病及老狗日常護理
            </p>
          </template>
        </vs-card>
        <vs-card
          @click="active6 = !active6"
          type="1"
          class="col-3"
          :key="index"
          v-for="index in 1"
          w="4"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <template #title>
            <h3 id="alerttitle" style="color: #a89477; font-size: 1.3rem">
              人犬互通的傳播疾病與因應政策
            </h3>
          </template>
          <template #img>
            <img
              :src="'./images/0731767770926579db7fae1c6417247e.jpg'"
              alt=""
            />
          </template>
          <template #text>
            <p class="notetext">人犬互通的傳播疾病與因應政策</p>
          </template>
        </vs-card>
      </vs-row>
    </div>
    <template>
      <vs-dialog overflow-hidden full-screen v-model="active4">
        <template #header>
          <h1 class="onetitle">第四篇 <b>濕食?</b></h1>
        </template>
        <div class="vs-dialog__content">
          <img
            :src="'./images/乾食濕食.jpg'"
            width="90%"
            style="border-radius: 30px"
          />
        </div>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
      <vs-dialog overflow-hidden full-screen v-model="active3">
        <template #header>
          <h1 class="onetitle">牠， <b>已經是老狗狗了嗎?</b></h1>
        </template>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>

      <div class="center con-pagination">
        <vs-pagination
          not-margin
          v-model="page"
          :length="20"
          color="rgb(241, 172, 126)"
        />
      </div>
    </template>
    <template>
      <vs-dialog overflow-hidden full-screen v-model="active5">
        <template #header>
          <h1 class="onetitle">第五篇 <b>濕食?</b></h1>
        </template>
        <div class="vs-dialog__content">
          <img
            :src="'./images/乾食濕食.jpg'"
            width="90%"
            style="border-radius: 30px"
          />
        </div>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
      <vs-dialog overflow-hidden full-screen v-model="active3">
        <template #header>
          <h1 class="onetitle">牠， <b>已經是老狗狗了嗎?</b></h1>
        </template>
        <template #footer>
          <div class="footer-dialog">
            <h3 class="doni">
              當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
            </h3>
            <br />
            <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
            <br />
            1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
            2.中型犬：十歲以上，如米格魯等品種<br />
            3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
            <br />
            <br />
            <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
            體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
            <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
            因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
            <br />
            <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

            狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
            （A）、心臟老化，易生腹水現象
            老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
            <br />（B）、胰臟衰退，注意熱量攝取
            老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
          </div>
        </template>
      </vs-dialog>
      <template>
        <vs-dialog overflow-hidden full-screen v-model="active6">
          <template #header>
            <h1 class="onetitle">第六篇 <b>濕食?</b></h1>
          </template>
          <div class="vs-dialog__content">
            <img
              :src="'./images/乾食濕食.jpg'"
              width="90%"
              style="border-radius: 30px"
            />
          </div>
          <template #footer>
            <div class="footer-dialog">
              <h3 class="doni">
                當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
              </h3>
              <br />
              <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
              <br />
              1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
              2.中型犬：十歲以上，如米格魯等品種<br />
              3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
              <br />
              <br />
              <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
              體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
              <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
              因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
              <br />
              <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

              狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
              （A）、心臟老化，易生腹水現象
              老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
              <br />（B）、胰臟衰退，注意熱量攝取
              老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
            </div>
          </template>
        </vs-dialog>
        <vs-dialog overflow-hidden full-screen v-model="active3">
          <template #header>
            <h1 class="onetitle">牠， <b>已經是老狗狗了嗎?</b></h1>
          </template>
          <template #footer>
            <div class="footer-dialog">
              <h3 class="doni">
                當你發現狗狗有一天不一樣了，你擔心牠可能病了，或者老了
              </h3>
              <br />
              <h3 style="color: #f1bf96">一、老齡犬、老年犬對照表</h3>
              <br />
              1.小型犬：十二歲以上，如瑪爾濟斯、西施、貴賓等品種<br />
              2.中型犬：十歲以上，如米格魯等品種<br />
              3.大型犬：九歲以上，如黃金獵犬、金毛等品種<br />
              <br />
              <br />
              <h3 style="color: #f1bf96">二、狗狗衰老的特徵表現</h3>
              體重的改變，行動不便皮膚與毛髮的改變，皮毛顯得又薄又干脫毛嚴重，
              <br />身體變弱肌肉萎縮，關節間的液體開始干竭，引致發炎及不適。<br />
              因為牙齒、口腔問題，造成的口臭。聽力衰退，有些動物會逐漸失去聽覺。<br />眼球晶體變得混濁，微顯灰藍。口、鼻、耳周圍的皮毛變白或變黃。<br />
              <br />
              <h3 style="color: #f1bf96">三、老年犬常見六大疾病</h3>

              狗狗年齡逐漸增長之後，身體器官和其他功能就會出現退化現象，<br />尤其以心臟、關節和視覺方面退化得最為厲害。老狗常見的疾病及注意事項包括以下幾點：<br />
              （A）、心臟老化，易生腹水現象
              老狗最常見的疾病就是心臟病。如果心臟老化，則每一次輸出血液的能量就會減少，<br />血液無法順利地回到心臟就會造成「腹水現象」，水分堆積在腹部和四肢，產生水腫和浮腫。此外，肺部也容易產生積水，<br />肺部積水的狗狗會出現發紺症狀，黏膜發黑呈紫灰色，走幾步路就會嚴重喘氣，這都是因為心臟方面疾病造成的臨床病症。<br />
              <br />（B）、胰臟衰退，注意熱量攝取
              老狗的胰臟功能會逐漸衰退，如果還給老狗攝取過多的熱量，造成肥胖，就很容易患糖尿病。<br />當狗狗出現「三多」——吃多、喝多和尿多的時候就要留意，若是吃得很多還不斷消瘦，<br />那麼應該馬上做詳細的檢查（糖尿病也可能引發白內障）。糖尿病除了控制飲食外，必須注射胰島素，<br />每隔1-2個月固定測量血糖質，以確認狗狗的健康狀況是否惡化。
            </div>
          </template>
        </vs-dialog>
      </template>
    </template>
    <br />
  </div>
</template>
<script>
export default {
  name: 'Note'
}
</script>
<script>
export default {
  data: () => ({
    page: 1,
    active: false,
    input1: '',
    input2: '',
    checkbox1: false,
    active2: false,
    input3: '',
    input4: '',
    checkbox2: false,
    active3: false,
    input5: '',
    input6: '',
    checkbox2: false,
    active4: false,
    input1: '',
    input2: '',
    checkbox1: false,
    active5: false,
    input3: '',
    input4: '',
    checkbox2: false,
    active6: false,
    input5: '',
    input6: '',
    checkbox2: false
  })
}
</script>
<style lang="stylus">

#note
  transition 1s
#cardgroup
  display: flex
  // text-align center
  // justify-content center
  transition: 1s;
.center
  display flex
  justify-content center
  align-items center
  margin 5rem
#cardsecondread
  padding-bottom 5rem
#cardsecondreadtwo
  padding: 3rem;
.vs-dialog
  width 120%
  margin auto
  overflow-y:scroll
  overflow-x:hidden
.onetitle
  color #F1BE96
  font-size 50px
.footer-dialog
  color #A79476
  font-size 1.2rem
  margin-top 2rem
  margin-bottom 5rem

.vs-dialog__header
  width 100%
  height 20%
  background-color #F9EACB
  font-size 1.2rem

.doni
  padding 2rem
.vs-card__text p
  color #538f97
.vs-alert
  filter none !important
.vs-dialog__content
  margin-top 2rem
.notetext
  margin-top 1.2rem
  height 50px
.alerttitle
  position fixed
</style>
