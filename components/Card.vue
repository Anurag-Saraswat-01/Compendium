<template>
  <NuxtLink :to="entryUrl">
    <div>
      <img :src="entry.image" :alt="entry.name" />
      <span>{{ entry.name }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["entry"],

  computed: {
    entryUrl() {
      return `/${this.entry.category}/${this.entry.name}`;
    },
  },
};
</script>
