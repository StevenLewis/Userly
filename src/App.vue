<template>
  <div id="app" role="main">
    <div class="bg-white">
      <div class="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <h2 class="mb-4 text-gray-800 text-3xl font-extrabold text-white tracking-tight sm:text-4xl sm:mb-8">Userly 👋</h2>
        <ColorPicker :color="color" @select-color="updateColor" />
        <UserCards :color="color" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColorPicker from '@/components/ColorPicker.vue'
import UserCards from './components/UserCards.vue'
import { Color } from '@/./types'
import Cookies from 'js-cookie'

@Component({
  components: {
    ColorPicker,
    UserCards
  }
})

export default class App extends Vue {
  private color: Color = Cookies.get('color') ? Cookies.get('color') : Color.White

  updateColor (color: Color): void {
    Cookies.set('color', color)
    this.color = color
  }
}
</script>
