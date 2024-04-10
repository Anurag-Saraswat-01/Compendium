<template>
  <input
    type="search"
    list="entries"
    placeholder="Search..."
    v-model="selectedValue.name"
    @change="onChange"
  />
  <datalist id="entries">
    <option v-for="entry in entries" :value="entry.name" />
  </datalist>
</template>

<script>
import server from "~/utils/server";

export default {
  data() {
    return {
      selectedValue: {},
      entries: null,
    };
  },

  mounted() {
    this.init();
  },

  computed: {
    entryUrl() {
      return `/${this.selectedValue.category}/${this.selectedValue.name}`;
    },
  },

  methods: {
    async init() {
      this.entries = await server.getAllEntries();
    },

    onChange(e) {
      this.selectedValue = this.entries.find(
        (entry) => entry.name === e.target.value
      );
      navigateTo(this.entryUrl);
      this.selectedValue = {};
    },
  },
};
</script>
