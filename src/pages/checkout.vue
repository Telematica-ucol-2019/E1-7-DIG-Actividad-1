<template>
  <main>
    <div
      class="grid grid-cols-1 bg-light-white dark:bg-light-wine m-10 lg:py-12 max-lg:pt-6 space-y-4 rounded items-center justify-center"
    >
      <div class="grid items-center justify-center">
        <h1
          class="text-2xl text-light-wine dark:text-dark-cherry-blossom-pink font-semibold"
        >
          Checkout
        </h1>
      </div>
      <div
        class="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center justify-center"
      >
        <div class="flex items-center justify-center">
          <CardsCreditCard :card="card" />
        </div>
        <div
          class="flex items-center justify-center max-lg:rounded-t-3xl max-lg:rounded-b max-lg:shadow max-lg:border dark:max-lg:border-none dark:max-lg:bg-dark-dark-siena-1"
        >
          <CardsPayment v-model:card="card" />
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Card from '../typescript/classes/card';
export default {
  data() {
    return {
      card: new Card({}),
    };
  },
};
</script>
<style></style>
