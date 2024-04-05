<template>
  <main>
    <h2>Category: {{ $route.params.category }}</h2>
    <div>
      <Card v-for="entry in entries" :entry="entry" />
    </div>
  </main>
</template>

<script>
import server from "~/server";

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
