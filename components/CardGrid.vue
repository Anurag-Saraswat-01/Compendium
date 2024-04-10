<template>
  <div class="card-grid">
    <Card v-for="entry in entries" :entry="entry" />
  </div>
</template>

<script>
export default {
  props: ["entries"],
};
</script>

<style lang="scss" scope>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
}
</style>
