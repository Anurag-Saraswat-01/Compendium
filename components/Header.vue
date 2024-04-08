<template>
  <nav class="navbar">
    <NuxtLink to="/">
      <h1>Compendium</h1>
    </NuxtLink>
    <div class="actions">
      <Searchbar />
      <button class="menu-btn" @click="onMenuButtonClick">Menu</button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["showSidebar"],

  methods: {
    onMenuButtonClick() {
      this.$emit("menu-click");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  width: 100%;

  .menu-btn {
    margin-left: 0.5rem;
  }
}
</style>
