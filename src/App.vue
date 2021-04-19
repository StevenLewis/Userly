<template>
  <div id="app" role="main">
    <div class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="mb-8 text-gray-800 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Userly 👋</h2>
          <ColorPicker :color="color" @select-color="updateColor" />
          <UserCards :color="color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorPicker from '@/components/ColorPicker.vue'
import UserCards from './components/UserCards.vue'
import { Color } from '@/./types'

@Component({
  components: {
    ColorPicker,
    UserCards
  }
})

export default class App extends Vue {
  private color: Color = Color.White

  updateColor (color: Color): void {
    this.color = color
  }
}
</script>
