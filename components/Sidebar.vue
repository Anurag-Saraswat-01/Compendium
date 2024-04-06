<template>
  <aside :class="classes">
    <button class="close-btn" @click="onCloseButtonClick">Close</button>
    <h1 class="sidebar-title">Categories</h1>
    <div class="category-list">
      <div v-for="category in categories" class="category">
        <NuxtLink :to="`/category/${category}`">
          {{ category }}
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["showSidebar"],

  data() {
    return {
      categories: [
        "all",
        "creatures",
        "equipment",
        "materials",
        "monsters",
        "treasure",
      ],
    };
  },

  computed: {
    classes() {
      return {
        "sidebar-visible": this.showSidebar,
        "sidebar-hidden": !this.showSidebar,
      };
    },
  },

  methods: {
    onCloseButtonClick() {
      this.$emit("close-click");
    },
  },
};
</script>

<style lang="scss" scoped>
aside.sidebar-hidden {
  display: none;
}

aside.sidebar-visible {
  background: whitesmoke;
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: block;

  .close-btn {
    position: absolute;
    right: 1rem;
  }

  .sidebar-title {
    margin-bottom: 0.5rem;
  }

  .category-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .category {
      text-transform: capitalize;
    }
  }
}
</style>
