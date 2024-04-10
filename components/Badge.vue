<template>
  <NuxtLink :to="`/filters/${property}=${label}`">
    <div class="badge">
      {{ label }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["label", "property"],
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
