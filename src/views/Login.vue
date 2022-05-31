<script>
import { useRequest } from ":/apphooks/request";
export default {
  setup() {
    const http = useRequest();
    console.log(http.post('/'));
  },
};
</script>

<template></template>

<style lang="less" scoped>
</style>