import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/route";
import { loadKakaoMapSDK } from "./utils/kakaoMapLoader";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

async function initApp() {
  try {
    await loadKakaoMapSDK();

    const app = createApp(App);

    app.use(store).use(router).use(VueSweetalert2);

    app.config.globalProperties.$kakao = window.kakao;

    app.mount("#app");
  } catch (err) {
    console.error("Error : ", err);
  }
}

initApp();
