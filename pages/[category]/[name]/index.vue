<template>
  <main v-if="data">
    <!-- NAME -->
    <h2>Entry: {{ data.name }}</h2>

    <!-- IMAGE -->
    <img :src="data.image" :alt="data.name" loading="lazy" />

    <!-- DESCRIPTION -->
    <div>
      {{ data.description }}
    </div>

    <!-- COMMON LOCATIONS -->
    <div>
      <span>Common Locations: </span>
      <span>{{ data.common_locations }}</span>
    </div>

    <!-- EDIBLE -->
    <div v-if="hasEdible">
      <span>Edible: </span>
      <span>{{ data.edible }}</span>
    </div>

    <!-- HEARTS RECOVERED -->
    <div v-if="hasHeartsRecovered">
      <span>Hearts Recovered: </span>
      <span>{{ data.hearts_recovered }}</span>
    </div>

    <!-- COOKING EFFECT -->
    <div v-if="hasCookingEffect">
      <span>Cooking Effect: </span>
      <span>{{ data.cooking_effect }}</span>
    </div>

    <!-- DROPS -->
    <div v-if="hasDrops">
      <span>Drops: </span>
      <span>{{ data.drops }}</span>
    </div>

    <!-- PROPERTIES -->
    <div v-if="hasProperties">
      <span>Properties:</span>
      <div>
        <span>Attack: </span>
        <span>{{ data.properties.attack }}</span>
      </div>
      <div>
        <span>Defense: </span>
        <span>{{ data.properties.defense }}</span>
      </div>
    </div>
  </main>
  <Loader v-else />
</template>

<script>
import server from "~/server";

export default {
  data() {
    return {
      data: null,
    };
  },

  mounted() {
    this.init();
  },

  computed: {
    hasEdible() {
      return this.data?.edible !== undefined;
    },

    hasHeartsRecovered() {
      return this.data?.hearts_recovered !== undefined;
    },

    hasCookingEffect() {
      return this.data?.cooking_effect !== undefined;
    },

    hasDrops() {
      return this.data?.drops !== undefined;
    },

    hasProperties() {
      return this.data?.properties !== undefined;
    },
  },

  methods: {
    async init() {
      this.data = await server.getEntry(this.$route.params.name);
    },
  },
};
</script>
