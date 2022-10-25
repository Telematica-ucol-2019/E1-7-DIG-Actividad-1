<template>
  <div
    class="bg-white rounded-lg border border-white-200 shadow-md dark:bg-white-800 dark:border-white-700 flex items-center justify-center max-w-xs"
  >
    <form class="p-10">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="tel"
          inputmode="numeric"
          pattern="\d*"
          autocomplete="cc-number"
          maxlength="19"
          name="floating_card_number"
          id="floating_card_number"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-wine focus:outline-none focus:ring-0 focus:border-wine peer"
          placeholder=" "
          required
        />
        <label
          for="floating_card_number"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-wine peer-focus:dark:text-wine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Card number</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_card_holders_name"
          id="floating_card_holders_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-wine focus:outline-none focus:ring-0 focus:border-wine peer"
          placeholder=" "
          required
        />
        <label
          for="floating_card_holders_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-wine peer-focus:dark:text-wine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Card holder's name</label
        >
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="number"
            maxlength="3"
            name="floating_cvv"
            id="floating_cvv"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-wine focus:outline-none focus:ring-0 focus:border-wine peer"
            placeholder=" "
            required
          />
          <label
            for="floating_cvv"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-wine peer-focus:dark:text-wine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >CVV</label
          >
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_expiration_date"
            id="floating_expiration_date"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-wine focus:outline-none focus:ring-0 focus:border-wine peer"
            placeholder=" "
            required
          />
          <label
            for="floating_expiration_date"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-wine peer-focus:dark:text-wine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Expiration date</label
          >
        </div>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="save_card"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="save_card"
          class="ml-2 text-xs text-gray-500 dark:text-gray-400"
          >Save this card for future transactions</label
        >
      </div>
      <div class="flex flex-auto relative z-0 mb-6 w-full group justify-center">
        <label for="total" class="ml-2 text-s text-gray-500 dark:text-gray-400">
          <span class="text-black">Total: </span>
          <span class="text-green-600">$</span>
          <span class="text-green-600">500</span>
        </label>
      </div>
      <div class="flex flex-auto relative z-0 w-full group justify-center">
        <button
          type="submit"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-wine rounded-lg hover:bg-wine focus:ring-4 focus:outline-none focus:ring-wine dark:bg-wine dark:hover:bg-wine dark:focus:ring-wine"
        >
          Proceed to Pay
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
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Go to',
    },
  },
};
</script>
<style></style>
