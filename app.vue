<template>
  <main>
    <Header :showSidebar="showSidebar" @menu-click="onShowSidebar" />
    <div class="main-content">
      <Sidebar :showSidebar="showSidebar" @close-click="onHideSidebar" />
      <div class="inner-content">
        <NuxtPage />
        <Footer />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },

  methods: {
    onShowSidebar() {
      this.showSidebar = true;
    },

    onHideSidebar() {
      this.showSidebar = false;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a,
a.hover,
a.visited {
  color: inherit;
  text-decoration: none;
}

// .main-content {
//   position: fixed;
//   top: 2.75rem;
//   width: 100%;
// }

.inner-content {
  position: fixed;
  top: 2.75rem;
  width: 100%;
  overflow-y: auto;
  width: 100%;
  height: calc(100vh - 2.75rem);
}
</style>
