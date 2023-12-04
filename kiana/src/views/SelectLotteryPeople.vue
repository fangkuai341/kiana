<template>
  <a-table :dataSource="dataSource" :columns="columns" size="small" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { selectWinUser } from "../serve/api";
const dataSource = ref([]);
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "昵称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "QQ号",
    dataIndex: "contactInformation",
    key: "contactInformation",
  },
];
onMounted(async () => {
  let data: any = await selectWinUser({});
  if (data.code === 200) {
    dataSource.value = data.data;
  }
});
</script>

<style scoped lang="less"></style>
