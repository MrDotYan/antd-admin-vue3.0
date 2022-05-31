<script setup>
import { ref } from "vue";
import { SearchOutlined } from '@ant-design/icons-vue';


defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>

  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="primary" shape="circle">A</a-button>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <br />
  <br />
  <a-tooltip title="search">
    <a-button type="primary" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="primary" shape="circle" size="large">A</a-button>
  <a-button type="primary" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <br />
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button type="dashed" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="dashed" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button size="large" href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}
</style>
