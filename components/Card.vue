<template>
  <NuxtLink :to="entryUrl">
    <div class="card">
      <img class="card-img" :src="entry.image" :alt="entry.name" />
      <div class="card-title-wrapper">
        <span class="card-title">{{ entry.name }}</span>
      </div>
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
  border: 1px solid black;
  border-radius: 0.25rem;
  height: 100%;

  .card-img {
    flex-grow: 1;
    width: 100%;
    object-fit: cover;
  }

  .card-title-wrapper {
    flex-grow: 1;
    height: 100%;
    padding: 0.5rem;
    text-align: center;
    display: grid;
    place-items: center;

    .card-title {
      text-transform: capitalize;
    }
  }
}
</style>
