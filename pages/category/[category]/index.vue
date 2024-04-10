<template>
  <main>
    <h1 class="category-name">{{ $route.params.category }}</h1>
    <CardGrid v-if="entries" :entries="entries" />
    <Loader v-else />
  </main>
</template>

<script>
import server from "~/utils/server";

export default {
  data() {
    return {
      entries: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      if (this.$route.params.category === "all") {
        this.entries = await server.getAllEntries();
      } else {
        this.entries = await server.getCategory(this.$route.params.category);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category-name {
  text-transform: capitalize;
  margin-bottom: 2rem;
}
</style>
