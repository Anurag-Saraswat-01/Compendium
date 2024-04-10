<template>
  <main>
    <h2>Category: {{ $route.params.category }}</h2>
    <div v-if="entries" class="card-grid">
      <Card v-for="entry in entries" :entry="entry" />
    </div>
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
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
}
</style>
