<template>
  <aside>
    <div v-for="category in categories">
      <NuxtLink :to="`/category/${category}`">
        {{ category }}
      </NuxtLink>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "all",
        "creatures",
        "equipment",
        "materials",
        "monsters",
        "treasure",
      ],
    };
  },
};
</script>
