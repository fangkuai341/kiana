<template>
  <Title :type="title.type" :message="title.message" :isShow="title.isShow" />

  <div
    style="background: #f2f4f7; height: 100vh; overflow: hidden"
    v-if="!isVoted"
  >
    <div class="title">
      <div style="font-size: 22px; margin-bottom: 10px">配音比赛投票</div>
      <div class="label">
        <div style="background: #ffe58f" v-if="isRun">进行中</div>
        <div style="background: #f2f4f7" v-else>已结束</div>
        <div style="background: rgb(250, 173, 20)">可选1~2个选项</div>
      </div>
    </div>
    <div
      style="margin: 0 10px; max-height: 60%; overflow: scroll"
      class="zhuti"
    >
      <div
        v-for="item in people"
        :key="item.id"
        @click="peopleClick(item.id)"
        :style="{
          border: SelectedPlayers.includes(item.id)
            ? ' 2px rgb(250, 173, 20) solid'
            : ' 2px #00000033 solid',
        }"
      >
        <div>
          <div>{{ item.name }}（{{ item.matchingRoles }}役）</div>
          <div style="margin-top: 5px; color: #beadad; font-size: 14px">
            作品：{{ item.fragmentName }}
          </div>
        </div>
      </div>
    </div>
    <div class="button">
      <button
        @click="ok"
        :disabled="!isRun"
        :style="{ background: !isRun ? 'rgb(190, 173, 173)' : '#4c78fc' }"
      >
        投票
      </button>
    </div>
    <div class="dec">
      <div>本次投票最少选一个，最多选两个</div>
      <div>投票后无法撤回</div>
      <div>本次投票不可查看票数</div>
      <div>本次投票最终解释权归主办方所有</div>
    </div>
  </div>
  <div
    v-else
    style="
      background: rgb(242, 244, 247);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    你已经投过票了
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { selectPlayerUser, vote } from "../serve/api";
import Title from "../components/Title.vue";
const isRun = ref(new Date().getTime() < 1701500400000);
const people: any = ref([]);
const SelectedPlayers: any = ref([]);
const isVoted = ref();
const title = reactive({
  type: "",
  message: "",
  isShow: false,
});
const peopleClick = (id) => {
  if (
    SelectedPlayers.value.length >= 2 &&
    !SelectedPlayers.value.includes(id)
  ) {
    return;
  }
  //SelectedPlayers有id删除，没有就添加
  if (SelectedPlayers.value.includes(id)) {
    SelectedPlayers.value = SelectedPlayers.value.filter((item) => item !== id);
  } else {
    SelectedPlayers.value.push(id);
  }
};
const ok = async () => {
  let data: any = await vote({ ids: JSON.stringify(SelectedPlayers.value) });
  console.log(data, "data");
  if (data.code === 200) {
    localStorage.setItem("isVoted", "1");
    isVoted.value = localStorage.getItem("isVoted");
    title.type = "success";
    title.message = "投票成功";
    title.isShow = true;
    setTimeout(() => {
      title.isShow = false;
    }, 3000);
  }
};
onMounted(async () => {
  isVoted.value = localStorage.getItem("isVoted");
  let data = await selectPlayerUser({});
  people.value = data.data;
});
</script>

<style scoped>
.title {
  padding: 20px;
  margin: 10px;
  border: 1px solid #00000022;
  background-image: url(/public/img/voteTitBg.png);
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 70px;
  background-origin: content-box;
}
.label {
  display: flex;
}
.label > div {
  margin-right: 10px;
  padding: 3px;
  border-radius: 6px;
}
.dec {
  background: #fff;
  padding: 20px;
  margin: 10px;
  border: 1px solid #00000022;
  color: #ccc;
}
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}
.button button {
  width: 100%;
  font-size: 16px;
  margin: 10px auto 0;
  background: #4c78fc;
  color: #fff;
  height: 41px;
  border: 0;
  border-radius: 6px;
}

.button div {
  margin-top: 5px;
  color: #646a73;
}
.zhuti > div {
  border: 1px #00000033 solid;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 5px;
}
</style>
