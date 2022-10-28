<template>
  <div
    class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
  >
    <div class="relative object-cover w-full h-full rounded-xl bg-wine">
      <div class="w-full px-8 absolute top-8">
        <div class="flex justify-between">
          <div class="font-bold">
            <p>Cards holder's name</p>
            <p class="font-medium">{{ card.holdersName }}</p>
          </div>
          <svg
            class="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            width="2.11676in"
            height="1.5in"
            viewBox="0 0 152.407 108"
          >
            <g>
              <rect width="152.407" height="108" style="fill: none" />
              <g>
                <rect
                  x="60.4117"
                  y="25.6968"
                  width="31.5"
                  height="56.6064"
                  style="fill: #ff5f00"
                />
                <path
                  d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z"
                  transform="translate(-319.79649 -252)"
                  style="fill: #eb001b"
                />
                <path
                  d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z"
                  transform="translate(-319.79649 -252)"
                  style="fill: #f79e1b"
                />
                <path
                  d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z"
                  transform="translate(-319.79649 -252)"
                  style="fill: #f79e1b"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="pt-1">
          <p class="font-bold">Card number</p>
          <p class="font-medium tracking-more-wider">
            {{ card.number.toString().substring(0, 4) }}
            {{ card.number.toString().substring(4, 8) }}
            {{ card.number.toString().substring(8, 12) }}
            {{ card.number.toString().substring(12, 16) }}
          </p>
        </div>
        <div class="pt-6 pr-6">
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
                {{ card.expiryDate }} /
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
import Card from '~~/src/classes/card.js';

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
