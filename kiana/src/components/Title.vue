<template>
  <div class="notification" :class="type" v-if="isShow">
    {{ message }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    message: {
      type: String,
      required: true,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.notification {
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  position: fixed;
  left: 50%;
  top: 10px;
  z-index: 999;
  transform: translateX(-50%);
}

.info {
  background-color: #2196f3;
}

.success {
  background-color: #4caf50;
}

.warning {
  background-color: #ffc107;
}

.error {
  background-color: #f44336;
}
</style>
