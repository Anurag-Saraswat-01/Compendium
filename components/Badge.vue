<template>
  <div class="badge">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style lang="scss" scoped>
.badge {
  background: lightblue;
  border: 1px solid skyblue;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: 1rem;
}
</style>
