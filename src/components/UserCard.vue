<template>
  <li role="listitem" class="py-10 px-6 bg-gray-800 text-center text-white rounded-lg xl:px-10 xl:text-left">
    <header class="flex items-center space-x-4 mb-4 border-b border-gray-700 pb-3">
      <img class="h-20 w-20 rounded-full xl:w-30 xl:h-30" :src="user.picture.medium" :alt="`Profile photo of ${fullName}`" />
      <div class="font-medium text-lg leading-6 space-y-1">
        <h3>{{ fullName }}</h3>
        <a :href="`mailto:${user.email}`" :alt="`Send an email to ${user.name.first}`" class="text-sm text-yellow-400">{{ user.email }}</a>
        <p class="text-sm">{{ user.phone }}</p>
      </div>
    </header>

    <footer class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div class="text-sm">
        <p>{{ streetName }}</p>
        <p>{{ user.location.city }}</p>
        <p>{{ user.location.state }}</p>
        <p>{{ user.location.postcode }}</p>
      </div>
    </footer>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { User } from '@/interfaces'

@Component
export default class UserCard extends Vue {
  @Prop() readonly user!: User

  get fullName (): string {
    return this.user.name.first + ' ' + this.user.name.last
  }

  get streetName (): string {
    return this.user.location.street.number + ' ' + this.user.location.street.name
  }
}
</script>
