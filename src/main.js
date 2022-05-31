import { createApp } from "vue";

import App from "./App.vue";
import {appHooks} from ':/apphooks'

const {useStore,useUIKt,useRouter} = appHooks;

async function runApp() {
  const app = createApp(App);
  useStore(app);
  useUIKt(app);
  await useRouter(app);
  app.mount("#app");
}


await runApp();