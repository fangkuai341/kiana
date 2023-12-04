<template>
  <div>
    <img src="../../public/img/lotteryBg.png" class="lotteryBg" />
    <img
      src="../../public/img/lotteryBg2.png"
      class="lotteryBg"
      style="left: 0; transform: scaleX(-1); height: 50%"
    />
    <div style="overflow: hidden">
      <Title
        :type="title.type"
        :message="title.message"
        :isShow="title.isShow"
      />
      <div
        style="    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 10px;
    margin-left: 20px;
}"
      >
        <label
          for="num"
          style="font-size: 16px; font-weight: 600; margin-right: 10px"
          >中奖人数</label
        >
        <input
          type="number"
          id="num"
          v-model="participantCount"
          min="1"
          max="100"
          style="margin-right: 10px"
        />

        <button :disabled="isStart" v-if="isShowStartButton" @click="start">
          开始
        </button>
        <button :disabled="isStart" v-else @click="stop">停止</button>
        <button
          v-if="!isAnimal && isShowStartButton && people.length"
          style="width: 80px; margin-left: 10px"
          @click="cjAllOK"
        >
          一键确认
        </button>
      </div>

      <div v-if="isAnimal" class="list" style="margin-top: 20px">
        <div
          v-for="(item, index) in participantCount"
          :key="item"
          style="width: 150px"
        >
          <!-- 随机数值动画 -->
          <img
            :src="
              avatarList[random + index > 29 ? random - index : random + index]
            "
            alt=""
            class="img"
          />
          <div class="name">
            {{
              nameList[random + index > 29 ? random - index : random + index]
            }}
          </div>
          <div>
            {{ random + index > 29 ? random - index : random + index }}*******
          </div>
        </div>
      </div>
      <div v-else class="list" style="margin-top: 20px">
        <div v-for="(item, index) in people" :key="index" style="width: 150px">
          <img
            :src="avatarList[Math.floor(Math.random() * 30)]"
            alt=""
            class="img"
          />
          <div class="name">{{ item.name }}</div>
          <div>{{ item.contactInformation.slice(0, 2) }}*******</div>
          <button v-if="!isAnimal && isShowStartButton" @click="cjOK(item)">
            确认
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getTranslateUser, saveWinUser, saveAllWinUser } from "../serve/api";
import { message } from "ant-design-vue";
import Title from "../components/Title.vue";
const isStart = ref(false); //是否开始（对应的是接口是否调用完毕）
const isShowStartButton = ref(true); //是否显示开始按钮
const isAnimal = ref(false); //是否开始动画
const avatarList = ref([]); //头像列表

const nameList = [
  "琪亚娜·卡斯兰娜",
  "领域装·白练",
  "女武神·游侠",
  "圣女祈祷",
  "白骑士·月光",
  "空之律者",
  "天穹游侠",
  "薪炎之律者",
  "终焉之律者",
  "雷电芽衣",
  "脉冲装·绯红",
  "影舞冲击",
  "女武神·强袭",
  "雷电女王的鬼铠",
  "破晓强袭",
  "雷之律者",
  "断罪影舞",
  "始源之律者",
  "布洛妮娅·扎伊切克",
  "女武神·战车",
  "驱动装·山吹",
  "雪地狙击",
  "次元边界突破",
  "银狼的黎明",
  "异度黑核侵蚀",
  "彗星驱动",
  "理之律者",
  "迷城骇兔",
  "次生银翼",
  "真理之律者",
]; //名字列表
const people: any = ref([]);
const timer = ref();
const random = ref(0);
const participantCount = ref(1);
const title = reactive({
  type: "",
  message: "",
  isShow: false,
});
const start = async () => {
  isAnimal.value = true;
  isStart.value = true;
  isShowStartButton.value = false;
  let data: any = await getTranslateUser({ num: participantCount.value });
  if (data.code === 200) {
    people.value = data.data;
    isStart.value = false;
  } else {
    message.error("失败");
    isShowStartButton.value = true;
    isStart.value = false;
  }

  for (let i = 0; i < 30; i++) {
    avatarList.value.push(`../../img/head/a${i + 1}.png`);
  }
  //开始动画
  timer.value = setInterval(() => {
    random.value = Math.floor(Math.random() * 30);
  }, 100);
};
const stop = () => {
  clearInterval(timer.value);
  isAnimal.value = false;
  isShowStartButton.value = true;
};
const cjOK = async (item: any) => {
  let data: any = await saveWinUser({ id: item.id });
  if (data.code === 200) {
    message.success("确认成功");
  } else {
    message.error("失败");
  }
};

const cjAllOK = async () => {
  let data: any = await saveAllWinUser({
    ids: JSON.stringify(people.value.map((item: any) => item.id)),
  });
  if (data.code === 200) {
    message.success("确认成功");
  } else {
    message.error("失败");
  }
};
onMounted(() => {
  //加载图片，避免图片空白
  for (let i = 0; i < 30; i++) {
    let img = new Image();
    img.src = `../../img/head/a${i + 1}.png`;
  }
});
</script>

<style scoped>
.lotteryBg {
  position: absolute;
  height: 80%;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  z-index: -1;
}
.img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 1px solid #f0f0f0;
}
.list {
  display: flex;
  margin: 0 50px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.list > div {
  padding: 5px 20px;
}
input {
  height: 25px;
  border-bottom: 1px solid rgb(127, 116, 135);
  border: 0px;
  border-bottom: 1px #7f7487 solid;
  background: transparent;
  color: #000;
  font-family: PingFang SC;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 8px;
  padding: 7px 0;
  width: 100px;
}
input:focus {
  border-color: #2196f3;
  outline: none;
}
button {
  font-size: 16px;
  width: 58px;
  background: #4c78fc;
  color: #fff;
  height: 30px;
  border: 0;
  border-radius: 6px;
}
</style>
