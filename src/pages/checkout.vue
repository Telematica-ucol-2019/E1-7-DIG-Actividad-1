<template>
  <main>
    <div
      class="grid grid-cols-1 bg-white m-10 rounded items-center justify-center"
    >
      <div class="grid items-center justify-center py-12">
        <h1 class="text-2xl text-wine font-semibold">Checkout</h1>
      </div>
      <div
        class="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center justify-center xl:h-screen"
      >
        <div class="flex items-center justify-center">
          <CardsCreditCard :card="card" />
        </div>
        <div class="flex items-center justify-center">
          <CardsPayment
            v-model:card="card"
            v-on:input="card = $event.target.value"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Card from '~/classes/card';
export default {
  data() {
    return {
      card: new Card({}),
    };
  },
};
</script>
<style></style>
