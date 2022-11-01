<template>
  <div
    class="w-96 h-56 m-auto rounded-xl relative text-light-white dark:text-dark-wine shadow-2xl transition-transform transform hover:scale-110 max-lg:hover:scale-90 max-lg:scale-75"
  >
    <div
      class="flex items-center justify-center object-cover w-full h-full rounded-xl bg-light-wine dark:bg-dark-cherry-blossom-pink dark:bg-dark-siena"
    >
      <div class="w-full px-6 py-4">
        <div class="flex py-2 justify-between items-center">
          <div class="font-bold">
            <p>Cards holder's name</p>
            <p class="font-medium">{{ card.holdersName }}</p>
          </div>
          <img
            class="w-1/5 h-1/5 justify-end rounded-lg bg-light-white dark:bg-dark-white"
            src="../../assets/svg/mastercard.svg"
            alt="Mastercard logo"
            v-show="card.type === 'Mastercard'"
          />
          <img
            class="w-1/5 h-1/5 justify-end rounded-lg bg-light-white dark:bg-dark-white"
            src="../../assets/svg/visa.svg"
            alt="Visa logo"
            v-show="card.type === 'Visa'"
          />
        </div>
        <div class="py-2">
          <p class="font-bold">Card number</p>
          <p class="font-medium tracking-more-wider">
            {{ card.number.substring(0, 4) }}
            {{ card.number.substring(4, 8) }}
            {{ card.number.substring(8, 12) }}
            {{ card.number.substring(12, 16) }}
          </p>
        </div>
        <div class="py-2 pr-6">
          <div class="flex justify-between">
            <!-- <div class="">
              <p class="font-bold">Valid</p>
              <p class="font-medium tracking-wider text-sm">
                {{ card.validDate }} /
                {{ card.validDate }}
              </p>
            </div> -->
            <div class="">
              <p class="font-bold">Expiry</p>
              <p class="tracking-wider text-sm">
                {{ card.expiryDate }}
              </p>
            </div>

            <div class="">
              <p class="font-bold">CVV</p>
              <p class="tracking-more-wider text-sm">
                {{ card.securityCode }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import Card from '../../typescript/classes/card';

export default {
  props: {
    card: {
      type: Object as PropType<Card>,
      default: new Card({}),
      required: true,
    },
  },
};
</script>
<style></style>
