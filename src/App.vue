<template>
  <div id="app" role="main">
    <UserCards />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import UserCards from './components/UserCards.vue'

@Component({
  components: {
    HelloWorld,
    UserCards
  }
})

export default class App extends Vue {}
</script>
