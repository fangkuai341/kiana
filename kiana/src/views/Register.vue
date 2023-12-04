<template>
  <div>
    <Title :type="title.type" :message="title.message" :isShow="title.isShow" />
    <div v-if="!isIdPage && !isRegister">
      <div class="img">
        <img src="../../public/img/headImg.jpg" style="width: 100%" />
        <div class="img-div"></div>
      </div>

      <h2 style="text-align: center; color: #000; margin-top: 20px">
        用户登记
      </h2>
      <form @submit.prevent="submitForm" style="margin-top: 10px">
        <div>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="我们该如何称呼你(昵称)"
          />
        </div>
        <div>
          <input
            type="text"
            id="contact"
            v-model="contact"
            placeholder="我们该如何联系你(QQ)"
          />
        </div>
        <div
          class="question"
          style="
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding: 10px 12px;
          "
        >
          <div style="font-weight: 600">请回答如下问题：</div>
          <div v-for="(item, index) in random" :key="index">
            <div style="margin-top: 5px">
              {{ index + 1 }}. {{ queAnswer[item].q }}
            </div>
            <input
              type="text"
              style="margin-top: 5px"
              v-model="danan[index]"
              :placeholder="`请回答问题${index + 1}`"
            />
          </div>
        </div>

        <button type="submit">提交</button>
      </form>
    </div>
    <a-watermark :content="isRegister" style="position: static">
      <div v-if="isIdPage && !isRegister">
        <div>核验数:{{ insertId }}</div>
      </div>
      <div class="insertId" v-if="isIdPage && !isRegister">
        <Diolog
          :msg="`${name},过了嗷~，偷偷告诉你我准备了好多有意思的活动`"
        /></div
    ></a-watermark>
    <a-watermark :content="isRegister" style="position: static">
      <div v-if="isRegister">
        <div>核验数:{{ isRegister }}</div>
      </div>
      <div v-if="isRegister" class="insertId">
        <Diolog msg="你已经登记过了，期待与你的见面哦" /></div
    ></a-watermark>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { setUser } from "../serve/api";
import Diolog from "../components/diolog/Diolog.vue";
import Title from "../components/Title.vue";
const name = ref("");
const title = reactive({
  type: "",
  message: "",
  isShow: false,
});
const contact = ref("");
const insertId = ref();
const isIdPage = ref(false);
const danan = ref([]);
const isRegister = computed(() => {
  return localStorage.getItem("isRegister");
});
const queAnswer = ref([
  {
    q: "琪宝生日具体日期（XX月XX日）",
    a: [
      "12月7",
      "12月7日",
      "12月07日",
      "12月07",
      "12.07",
      "12.7",
      "12/7",
      "12/07",
    ],
  },
  { q: "圣芙蕾雅学院的围墙因琪宝加高过几次？", a: ["3", "3次", "三次", "三"] },
  { q: "游戏开始cg琪宝从飞机跳下的城市是？", a: ["沧海市", "沧海"] },
  {
    q: "烧焦的吐司披萨是用什么烧焦的",
    a: ["天火", "天火圣裁", "天火大剑", "微波炉", "烤箱"],
  },
  {
    q: "琪天大圣指的？",
    a: [
      "琪宝",
      "琪亚娜",
      "虫虫",
      "草履虫",
      "终焉之律者",
      "终焉",
      "琪猫猫",
      "k423",
      "k-423",
      "Tuna",
      "tuna",
      "薪炎之律者",
      "薪炎",
    ],
  },
  {
    q: "琪宝的身高是？",
    a: ["163", "163cm", "163厘米", "1.63", "1.63m", "1.63米"],
  },
  {
    q: "月光装甲的qte是？",
    a: ["光翼展开"],
  },
  {
    q: "琪宝的中文配音是？",
    a: ["陶典", "陶典老师"],
  },
  {
    q: "琪宝和班长抽卡谁欧？",
    a: [
      "琪宝",
      "琪亚娜",
      "虫虫",
      "草履虫",
      "终焉之律者",
      "终焉",
      "琪猫猫",
      "k423",
      "k-423",
      "Tuna",
      "tuna",
      "薪炎之律者",
      "薪炎",
      "琪天大圣",
    ],
  },
  {
    q: "老玩家骗萌新sss后可以变月光的装甲是？",
    a: ["白练", "领域装·白练"],
  },
  {
    q: "白练是第几代女武神装甲？",
    a: ["第三代", "第三", "3", "三", "3代", "三代", "第3代", "第3"],
  },
  {
    q: "薪炎的9600卡池皮肤是？",
    a: ["时砾逐光"],
  },
  {
    q: "琪亚娜和英雄凯文最后对决的时候身披哪套装甲？",
    a: ["女武神·游侠", "游侠"],
  },
  {
    q: "琪亚娜在千羽学园楼顶拉住救下了谁？",
    a: ["芽衣", "芽1", "雷电芽衣"],
  },
  {
    q: "Coco联动剧情里帮琪宝宣传的人是？",
    a: [
      "爱莉",
      "爱莉希雅",
      "粉色妖精小姐",
      "真我",
      "人之律者",
      "Elysia",
      "elysia",
    ],
  },
  {
    q: "琪亚娜曾经跟谁学习过太虚剑气？",
    a: [
      "符华",
      "班长",
      "华",
      "赤鸢仙人",
      "赤鸢真人",
      "榆木脑袋",
      "Hua",
      "黑虎阿符",
      "符壮实",
      "神州平板",
      "老古董",
    ],
  },
  {
    q: "琪亚娜在月球上时，曾和谁一起进入互相对方的意识空间",
    a: ["芽衣", "芽1", "雷电芽衣"],
  },
  {
    q: "2023年新年活动中，在大家分散后，琪亚娜曾和谁一起行动",
    a: [
      "凯文",
      "凯文·卡斯拉娜",
      "凯文酱",
      "基佬凯文",
      "凯爹",
      "孤独的观测者",
      "凯文老祖",
      "尊主",
      "冰棍",
    ],
  },
]);
const random: any = computed(() => {
  //获取三个不同的随机数，用于随机问题
  let arr: Number[] = [];
  while (arr.length < 3) {
    let num = Math.floor(Math.random() * queAnswer.value.length);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
});

const submitForm = async () => {
  //判断全部是否回答正确
  for (let i = 0; i < random.value.length; i++) {
    if (!queAnswer.value[random.value[i]].a.includes(danan.value[i])) {
      title.type = "error";
      title.message = `第${i + 1}回答错误`;
      title.isShow = true;
      setTimeout(() => {
        title.isShow = false;
      }, 4000);
      return;
    }
  }
  let data: any = await setUser({
    name: name.value,
    contactInformation: contact.value,
  });
  if (data.code === 200) {
    //打开新页面，并传递参数
    isIdPage.value = true;
    insertId.value = data.data.insertId;
    localStorage.setItem("isRegister", insertId.value);
  } else {
    //提示错误信息
    title.type = "error";
    title.message = "服务器被玩坏了,请与管理员联系";
    title.isShow = true;
    setTimeout(() => {
      title.isShow = false;
    }, 4000);
  }
};
</script>

<style scoped>
.insertId {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
form > div,
form > button {
  margin-top: 10px;
  color: #000;
}

form > div:not(:last-child) {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
}
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
form > button {
  font-size: 16px;
  width: 80px;
  margin: 10px auto 0;
  background: #4c78fc;
  color: #fff;
  height: 41px;
  border: 0;
  border-radius: 6px;
  margin-bottom: 40px;
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
  width: 100%;
}
input:focus {
  border-color: #2196f3;
  outline: none;
}
.question {
  margin-top: 25px;
  border-top: 1px #000 dashed;
}
.img {
  position: relative;
}
.img-div {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
