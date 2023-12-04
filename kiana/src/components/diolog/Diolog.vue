<template>
  <div class="diolog">
    <div class="dialogue-container">
      <div class="dialogue-box">
        <div class="dialogue-text">
          <p style="color: #fff">
            {{ props.msg }}
          </p>
        </div>
      </div>
    </div>
    <img src="../../../public/img/q1.png" style="width: 130px" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
});
</script>

<style scoped>
.dialogue-container {
  position: relative;
  width: 180px;
  border-radius: 5px;
  flex-grow: 1;
}

.dialogue-box {
  position: relative;
  padding: 10px;
  background-color: rgb(232, 126, 61);
  border-radius: 5px;
}

.dialogue-box::before {
  content: "";
  position: absolute;
  top: calc(100% - 26px);
  left: -20px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent rgb(232, 126, 61) transparent transparent;
}

.dialogue-text {
  margin: 0;
  padding: 0;
}
.diolog {
  display: flex;
  flex-direction: row-reverse;
  width: 89vw;
  justify-content: center;
}
</style>
