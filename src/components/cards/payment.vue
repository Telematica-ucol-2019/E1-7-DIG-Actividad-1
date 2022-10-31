<template>
  <div
    class="bg-light-white dark:bg-dark-dark-siena-1 max-sm:bg-transparent black:max-sm:bg-transparent rounded-lg lg:border lg:dark:border-none lg:shadow-md flex items-center justify-center max-w-xs formulario"
  >
    <form class="p-10">
      <div class="relative z-0 mb-6 w-full group">
        <input
          class="block py-2.5 px-0 w-full text-sm text-crimsom-ua bg-transparent border-0 border-b-2 appearance-none text-light-wine dark:text-dark-cherry-blossom-pink focus:text-light-red-munsell dark:focus:text-dark-white border-light-wine dark:border-dark-cherry-blossom-pink focus:border-light-red-munsell dark:focus:border-light-white focus:outline-none focus:ring-0 peer"
          name="floating_card_holders_name"
          ref="floating_card_holders_name"
          id="floating_card_holders_name"
          type="text"
          placeholder=" "
          required
          :value="card.holdersName"
          @input="changeCardValue"
        />
        <label
          class="peer-focus:font-medium absolute text-sm text-light-wine dark:text-dark-cherry-blossom-pink peer-focus:text-light-red-munsell dark:peer-focus:text-light-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          for="floating_card_holders_name"
          >Card holder's name</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          class="block py-2.5 px-0 w-full text-sm text-crimsom-ua bg-transparent border-0 border-b-2 appearance-none text-light-wine dark:text-dark-cherry-blossom-pink focus:text-light-red-munsell dark:focus:text-dark-white border-light-wine dark:border-dark-cherry-blossom-pink focus:border-light-red-munsell dark:focus:border-light-white focus:outline-none focus:ring-0 peer"
          name="floating_card_number"
          ref="floating_card_number"
          id="floating_card_number"
          type="text"
          inputmode="numeric"
          autocomplete="cc-number"
          maxlength="16"
          pattern="[0-9\s]{13,19}"
          placeholder=" "
          required
          :value="card.number"
          @input="changeCardValue"
        />
        <label
          for="floating_card_number"
          class="peer-focus:font-medium absolute text-sm text-light-wine dark:text-dark-cherry-blossom-pink peer-focus:text-light-red-munsell dark:peer-focus:text-light-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Card number</label
        >
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-crimsom-ua bg-transparent border-0 border-b-2 appearance-none text-light-wine dark:text-dark-cherry-blossom-pink focus:text-light-red-munsell dark:focus:text-dark-white border-light-wine dark:border-dark-cherry-blossom-pink focus:border-light-red-munsell dark:focus:border-light-white focus:outline-none focus:ring-0 peer"
            name="floating_card_expiry_date"
            ref="floating_card_expiry_date"
            id="floating_card_expiry_date"
            type="text"
            placeholder=" "
            required
            :value="card.expiryDate"
            @input="changeCardValue"
          />
          <label
            class="peer-focus:font-medium absolute text-sm text-light-wine dark:text-dark-cherry-blossom-pink peer-focus:text-light-red-munsell dark:peer-focus:text-light-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            for="floating_card_expiry_date"
            >Expiry date</label
          >
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            class="block py-2.5 px-0 w-full text-sm text-crimsom-ua bg-transparent border-0 border-b-2 appearance-none text-light-wine dark:text-dark-cherry-blossom-pink focus:text-light-red-munsell dark:focus:text-dark-white border-light-wine dark:border-dark-cherry-blossom-pink focus:border-light-red-munsell dark:focus:border-light-white focus:outline-none focus:ring-0 peer"
            name="floating_card_cvv"
            ref="floating_card_cvv"
            id="floating_card_cvv"
            type="number"
            max="999"
            placeholder=" "
            required
            :value="card.securityCode"
            @input="changeCardValue"
          />
          <label
            class="peer-focus:font-medium absolute text-sm text-light-wine dark:text-dark-cherry-blossom-pink peer-focus:text-light-red-munsell dark:peer-focus:text-light-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            for="floating_card_cvv"
            >CVV</label
          >
        </div>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="save_card"
          type="checkbox"
          value=""
          class="w-4 h-4 rounded focus:ring-2 text-light-red-munsell focus:ring-light-red-munsell bg-transparent border-2"
        />
        <label
          for="save_card"
          class="ml-2 text-xs text-light-wine dark:text-light-cherry-blossom-pink"
          >Save this card for future transactions</label
        >
      </div>
      <div class="flex flex-auto relative z-0 mb-6 w-full group justify-center">
        <label for="total" class="ml-2 text-s text-gray-500 dark:text-gray-400">
          <span class="text-light-wine dark:text-dark-white">Total: </span>
          <span class="text-green-700 dark:text-green-300">$</span>
          <span class="text-green-700 dark:text-green-300">500</span>
        </label>
      </div>
      <div class="flex flex-auto relative z-0 w-full group justify-center">
        <button
          type="submit"
          class="text-light-cherry-blossom-pink dark:text-dark-wine bg-light-wine dark:bg-dark-cherry-blossom-pink hover:bg-light-red-munsell dark:hover:bg-dark-white focus:ring-4 focus:outline-none focus:ring-light-brink-pink dark:focus:ring-dark-brink-pink font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Proceed to pay
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import * as creditCardType from 'credit-card-type';
import Card from '../../typescript/classes/card';

export default {
  props: {
    card: {
      type: Object as PropType<Card>,
      default: new Card({}),
      required: false,
    },
  },
  methods: {
    changeCardValue() {
      const type = creditCardType(
        this.$refs.floating_card_number.value
      )?.shift()?.niceType;
      this.$emit(
        'update:card',
        new Card({
          expiryDate: this.$refs.floating_card_expiry_date.value,
          holdersName: this.$refs.floating_card_holders_name.value,
          number: this.$refs.floating_card_number.value,
          securityCode: this.$refs.floating_card_cvv.value,
          type: this.$refs.floating_card_number.value ? type : '',
          validDate: this.$refs.floating_card_valid_date?.value,
        })
      );
    },
  },
};
</script>
<style>
@media (max-width: 640px) {
  .formulario {
    display: contents;
  }
}
</style>
