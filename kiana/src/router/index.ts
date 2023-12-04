import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Lottery from "../views/Lottery.vue";
import SelectLotteryPeople from "../views/SelectLotteryPeople.vue";
import Vote from "../views/vote.vue";
import WinPlayerUser from "../views/WinPlayerUser.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/lottery",
      component: Lottery,
    },
    {
      path: "/selectLotteryPeople",
      component: SelectLotteryPeople,
    },
    {
      path: "/vote",
      component: Vote,
    },
    {
      path: "/winPlayerUser",
      component: WinPlayerUser,
    },
  ],
});
export default router;
