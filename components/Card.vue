<template>
  <NuxtLink :to="entryUrl">
    <div class="card">
      <img class="card-img" :src="entry.image" :alt="entry.name" />
      <span class="card-title">{{ entry.name }}</span>
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

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  // padding: 0.5rem;
  width: 100%;
  overflow: hidden;

  .card-img {
    flex-basis: 1;
    width: 100%;
    object-fit: cover;
  }

  .card-title {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
}
</style>
