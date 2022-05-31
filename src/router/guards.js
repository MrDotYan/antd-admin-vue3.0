import NProgress from "nprogress";
import "nprogress/nprogress.css"; // 进度条样式
import store from ":/store";
import { isNotEmpty } from ":/utils/helper";
import { useConfig } from "./config";

NProgress.configure({ showSpinner: true }); // 设置进度条的圈圈

const { getters } = store;
const { LOGIN } = useConfig();

function before(to, from, next) {
  NProgress.start();
  const { token } = getters;
  const { path } = to;
  if (isNotEmpty(token)) {
    if (path !== LOGIN) {
      next();
    }
  }
  next();
}

function after(to, from) {
  NProgress.done();
}

export function useRouterGuards(router) {
  router.beforeEach(before);
  router.afterEach(after);
  return router;
}
