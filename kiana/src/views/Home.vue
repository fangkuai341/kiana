<template>
  <div>
    <button @click="register">登记</button>
    <button @click="vote">投票</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const register = () => {
  router.push("/register");
};
const lottery = () => {
  router.push("/lottery");
};
const selectLotteryPeople = () => {
  router.push("/selectLotteryPeople");
};
const vote = () => {
  router.push("/vote");
};
</script>

<style scoped></style>
