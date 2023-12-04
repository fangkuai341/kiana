import { createApp } from "vue";
import Antd from "ant-design-vue";
import router from "./router";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
createApp(App).use(Antd).use(router).mount("#app");
