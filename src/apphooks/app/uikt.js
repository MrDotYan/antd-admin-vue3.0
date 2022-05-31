import ':/styles/normalize.css';
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export function useUIKt(app) {
  return app.use(Antd);
}
