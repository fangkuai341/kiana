<!-- GlobalWatermark.vue -->
<template>
  <div class="global-watermark" :style="{ opacity: opacity }">
    <span class="watermark-text">{{ watermarkText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    watermarkText: {
      type: String,
      required: true,
    },
    opacity: {
      type: Number,
      default: 0.5,
    },
  },
};
</script>

<style scoped>
.global-watermark {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* 水印高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 水印背景颜色 */
}
.watermark-text {
  font-size: 24px; /* 水印文字大小 */
  font-weight: bold; /* 水印文字粗细 */
  color: #ffffff; /* 水印文字颜色 */
}
</style>
