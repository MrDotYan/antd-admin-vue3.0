<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const { state } = store;
    const { app } = state;
    const appState = reactive({
      ...app,
    });

    return {
      ...toRefs(appState),
    };
  },
});
</script>

<template>
  <a-config-provider
    :componentSize="size"
    :autoInsertSpaceInButton="autoInsertSpaceInButton"
    :csp="csp"
    :direction="direction"
    :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
    :form="form"
  >
    <router-view></router-view>
  </a-config-provider>
</template>

<style>
</style>
