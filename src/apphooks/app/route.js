import router from ':/router';

export async  function useRouter (app) {
  app.use(router);
  await router.isReady();
}