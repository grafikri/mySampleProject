<template>
  <div id="app">
    <router-view name="layout">
      <router-view />
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>
