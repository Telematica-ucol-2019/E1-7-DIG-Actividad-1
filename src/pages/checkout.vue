<template>
  <main>
    <div
      class="grid grid-cols-1 bg-light-white dark:bg-light-wine m-10 py-12 space-y-4 rounded items-center justify-center"
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
        <div class="flex items-center justify-center">
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
