<template>
  <main v-if="data">
    <!-- NAME -->
    <h1 class="entry-name">{{ data.name }}</h1>

    <!-- DESCRIPTION -->
    <p class="entry-desc">{{ data.description }}</p>

    <!-- IMAGE -->
    <div class="entry-content">
      <div class="entry-image-wrapper">
        <img
          class="entry-image"
          :src="data.image"
          :alt="data.name"
          loading="eager"
        />
      </div>

      <div class="entry-data">
        <h2>Data</h2>
        <!-- COMMON LOCATIONS -->
        <div class="data-section">
          <h3 class="section-header">Common Locations</h3>
          <div class="badge-list">
            <Badge
              v-for="location in data.common_locations"
              :label="location"
            />
          </div>
        </div>

        <!-- EDIBLE -->
        <div v-if="hasEdible" class="data-section">
          <h3 class="section-header">Edible</h3>
          <p class="section-content">{{ data.edible }}</p>
        </div>

        <!-- HEARTS RECOVERED -->
        <div v-if="hasHeartsRecovered" class="data-section">
          <h3 class="section-header">Hearts Recovered</h3>
          <p class="section-content">{{ data.hearts_recovered }}</p>
        </div>

        <!-- COOKING EFFECT -->
        <div v-if="hasCookingEffect" class="data-section">
          <h3 class="section-header">Cooking Effect</h3>
          <p class="section-content">{{ cookingEffect }}</p>
        </div>

        <!-- DROPS -->
        <div v-if="hasDrops" class="data-section">
          <h3 class="section-header">Drops</h3>
          <div class="badge-list">
            <Badge v-for="drop in data.drops" :label="drop" />
          </div>
        </div>

        <!-- PROPERTIES -->
        <div v-if="hasProperties" class="data-section">
          <h3 class="section-header">Properties</h3>
          <table class="properties-table">
            <thead>
              <tr>
                <th>Attack</th>
                <th>Defense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ attack }}</td>
                <td>{{ defense }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <Loader v-else />
</template>

<script>
import server from "~/utils/server";

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

    cookingEffect() {
      return this.data?.cooking_effect !== "" ? this.data?.cooking_effect : "-";
    },

    attack() {
      return this.data?.properties?.attack > 0
        ? this.data?.properties?.attack
        : "-";
    },

    defense() {
      return this.data?.properties?.defense > 0
        ? this.data?.properties?.defense
        : "-";
    },
  },

  methods: {
    async init() {
      this.data = await server.getEntry(this.$route.params.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-name {
  text-align: center;
  text-transform: capitalize;
}

.entry-desc {
  margin-block: 2rem;
}

.entry-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .entry-image-wrapper {
    display: grid;
    place-items: center;

    .entry-image {
      border-radius: 0.25rem;
    }
  }

  .entry-data {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .data-section {
      .section-header {
        margin-bottom: 0.5rem;
      }

      .section-content {
        text-transform: capitalize;
      }

      .badge-list {
        display: flex;
        gap: 0.25rem;
      }

      .properties-table {
        width: 100%;
        text-align: center;

        tr,
        th,
        td {
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
