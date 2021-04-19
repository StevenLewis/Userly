<template>
  <header class="sm:flex items-center mb-5">
    <p class="font-bold font-xl mr-5 mb-2 sm:mb-0">Choose a card background colour:</p>
    <div class="flex space-x-4">
        <button role="button"
                @click.prevent="selectColor('white')"
                class="lc-color lc-white h-6 w-6 border rounded-full bg-white focus:ring-2 focus-within:ring-blue-300 focus:outline-none"
                :class="{ 'lc-active ring-2 ring-yellow-500' : isCurrentColor('white') }"
        >
          <span class="invisible">Choose White Color</span>
        </button>
        <button role="button"
                @click.prevent="selectColor('gray')"
                class="lc-color lc-gray h-6 w-6 border border-opacity-0 rounded-full bg-gray-800 focus:ring-2 focus-within:ring-blue-300 focus:outline-none"
                :class="{ 'lc-active ring-2 ring-yellow-500' : isCurrentColor('gray') }"
        >
          <span class="invisible">Choose Gray Color</span>
        </button>
        <button role="button"
                @click.prevent="selectColor('yellow')"
                class="lc-color lc-yellow h-6 w-6 border border-opacity-0 rounded-full bg-yellow-200 focus:ring-2 focus-within:ring-blue-300 focus:outline-none"
                :class="{ 'lc-active ring-2 ring-yellow-500' : isCurrentColor('yellow') }"
        >
          <span class="invisible">Choose Yellow Color</span>
        </button>
        <button role="button"
                @click.prevent="selectColor('green')"
                class="lc-color lc-red h-6 w-6 border border-opacity-0 rounded-full bg-green-400 focus:ring-2 focus-within:ring-blue-300 focus:outline-none"
                :class="{ 'lc-active ring-2 ring-yellow-500' : isCurrentColor('green') }"
        >
          <span class="invisible">Choose Green Color</span>
        </button>
        <button role="button"
                @click.prevent="selectColor('blue')"
                class="lc-color lc-blue h-6 w-6 border border-opacity-0 rounded-full bg-blue-400 focus:ring-2 focus-within:ring-blue-300 focus:outline-none"
                :class="{ 'lc-active ring-2 ring-yellow-500' : isCurrentColor('blue') }"
        >
          <span class="invisible">Choose Blue Color</span>
        </button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Color } from '@/types'

@Component
export default class ColorPicker extends Vue {
  @Prop() readonly color!: Color

  isCurrentColor (color: Color): boolean {
    return color === this.color
  }

  @Emit()
  selectColor (color: Color): Color {
    return color
  }
}
</script>
