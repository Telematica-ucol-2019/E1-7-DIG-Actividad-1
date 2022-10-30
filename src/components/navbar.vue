<template>
  <nav
    class="bg-light-white px-2 sm:px-4 py-2.5 dark:bg-dark-wine fixed w-full z-20 top-0 left-0 shadow"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="flex lg:hidden md:order-1">
        <button
          class="md:hidden"
          aria-label="Toggle theme mode button"
          @click="setColor($colorMode.preference == 'dark' ? 'light' : 'dark')"
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-light-cherry-blossom-pink"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <svg
            v-else-if="$colorMode.value == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-light-wine hover:text-light-red-munsell"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="flex lg:order-1 md:order-2">
        <NuxtLink
          to="/"
          class="flex items-center"
          aria-label="Brand company's icon"
        >
          <!-- <img
          src="../assets/images/logo.png"
          class="rounded mr-3 h-6 sm:h-9"
          :alt="company + ' Picture'"
        /> -->
          <span
            class="text-light-wine dark:text-light-cherry-blossom-pink hover:text-light-red-munsell dark:hover:text-light-white self-center text-xl font-semibold whitespace-nowrap"
            >{{ company }}</span
          >
        </NuxtLink>
      </div>
      <div class="flex lg:hidden md:order-3">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-light-wine dark:text-light-cherry-blossom-pink rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-light-red-munsell dark:focus:ring-dark-white hover:text-light-red-munsell dark:hover:text-dark-white dark:hover:bg-dark-siena dark:focus:ring-crimsom-ua"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="lg:order-2 md:order-4 hidden justify-between items-center w-full md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 bg-light-cherry-blossom-pink dark:bg-dark-dark-siena-3 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-light-white dark:bg-dark-siena md:dark:bg-light-wine border-light-wine dark:border-light-cherry-blossom-pink"
        >
          <li>
            <NuxtLink to="/home">
              <a
                class="block py-2 pr-4 pl-3 md:p-0 rounded text-light-wine dark:text-dark-cherry-blossom-pink hover:bg-light-white dark:hover:bg-light-wine hover:text-light-red-munsell dark:hover:text-light-white"
                aria-current="page"
                >Home</a
              >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              <a
                class="block py-2 pr-4 pl-3 md:p-0 rounded text-light-wine dark:text-dark-cherry-blossom-pink hover:bg-light-white dark:hover:bg-light-wine hover:text-light-red-munsell dark:hover:text-light-white"
                >About</a
              >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services">
              <a
                class="block py-2 pr-4 pl-3 md:p-0 rounded text-light-wine dark:text-dark-cherry-blossom-pink hover:bg-light-white dark:hover:bg-light-wine hover:text-light-red-munsell dark:hover:text-light-white"
                >Services</a
              >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              <a
                class="block py-2 pr-4 pl-3 md:p-0 rounded text-light-wine dark:text-dark-cherry-blossom-pink hover:bg-light-white dark:hover:bg-light-wine hover:text-light-red-munsell dark:hover:text-light-white"
                >Contact</a
              >
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex lg:order-3 max-md:hidden">
        <button
          aria-label="Toggle theme mode button"
          @click="setColor($colorMode.preference == 'dark' ? 'light' : 'dark')"
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-dark-cherry-blossom-pink hover:text-dark-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <svg
            v-else-if="$colorMode.value == 'light'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-light-wine hover:text-light-red-munsell"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { setColor } from '~~/src/typescript/scripts/setColor';
</script>
<script lang="ts">
export default {
  props: {
    company: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
