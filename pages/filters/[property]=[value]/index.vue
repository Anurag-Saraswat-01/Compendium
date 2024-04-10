<template>
  <main>
    <h1 class="filter-header">
      {{ $route.params.property }}: {{ $route.params.value }}
    </h1>
    <CardGrid v-if="filteredEntries" :entries="filteredEntries" />
    <Loader v-else />
  </main>
</template>

<script>
import server from "~/utils/server";

export default {
  data() {
    return {
      filteredEntries: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const entries = await server.getAllEntries();
      this.filteredEntries = entries.filter((e) =>
        e[this.$route.params.property]?.includes(this.$route.params.value)
      );
    },
  },
};
</script>

<style lang="scss" scoepd>
.filter-header {
  text-transform: capitalize;
  margin-bottom: 2rem;
}
</style>
