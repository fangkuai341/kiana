<template>
  <div class="winPlay">
    <div style="height: 100px; background: rgb(179, 178, 183)">
      <div>{{ winPlayerUser[1]?.name }}</div>
    </div>
    <div style="height: 160px; background: rgb(229, 158, 36)">
      <div>
        <div>{{ winPlayerUser[0]?.name }}</div>
        <img src="../../public/img/wg.png" alt="" />
      </div>
    </div>
    <div style="height: 90px; background: rgb(199, 86, 26)">
      <div>{{ winPlayerUser[2]?.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getWinPlayerUser } from "../serve/api";
const winPlayerUser: any = ref([]);
onMounted(async () => {
  let res = await getWinPlayerUser({});
  winPlayerUser.value = res.data;
});
</script>

<style scoped>
.winPlay {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50vh;
}

.winPlay > div {
  width: 20%;
  position: relative;
}

.winPlay > div > div {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-110%);
  font-size: 28px;
  font-weight: 600;
}
img {
  width: 100px;
  position: absolute;
  top: calc(-100% - 24px);
  left: calc(100% - 48px);
  transform: rotateZ(18deg);
}
</style>
