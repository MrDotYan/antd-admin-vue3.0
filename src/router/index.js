import {createWebHashHistory,createRouter} from 'vue-router';
import {useRouterGuards} from './guards';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    {
      path:'/',
      component:() => import(':/views/Login')
    }
  ],
  strict: true
});



export default useRouterGuards(router);