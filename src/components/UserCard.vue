<template>
  <li role="listitem" class="py-6 px-6 mb-4 rounded-lg shadow-md sm:h-full" :class="[backgroundColor, textColor]">
    <header class="flex space-x-4 mb-4 sm:flex-col sm:items-center sm:text-center sm:pb-3 sm:border-b sm:border-black sm:border-opacity-10">
      <img :srcset="`${user.picture.thumbnail} 48w, ${user.picture.large} 128w`"
           sizes="(max-width: 640px) 48px, 128w"
           class="rounded-full h-10 w-10 sm:h-20 sm:w-20 sm:mb-2 xl:w-30 xl:h-30"
           :src="user.picture.large"
           :alt="`Profile photo of ${fullName}`"
      />
      <div class="font-medium text-lg leading-6 space-y-1">
        <h3>{{ fullName }}</h3>
        <a :href="`mailto:${user.email}`" :alt="`Send an email to ${user.name.first}`" class="text-sm" :class="linkColor">{{ user.email }}</a>
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
        <p class="hidden sm:block">{{ user.location.state }}</p>
        <p class="hidden sm:block">{{ user.location.postcode }}</p>
      </div>
    </footer>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { User } from '@/interfaces'
import { Color } from '@/types'

@Component
export default class UserCard extends Vue {
  @Prop() readonly user!: User
  @Prop() readonly color!: Color

  get fullName (): string {
    return this.user.name.first + ' ' + this.user.name.last
  }

  get streetName (): string {
    return this.user.location.street.number + ' ' + this.user.location.street.name
  }

  get backgroundColor (): string {
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-800',
      yellow: 'bg-yellow-200',
      green: 'bg-green-200',
      blue: 'bg-blue-600'
    }

    return backgrounds[this.color]
  }

  get textColor (): string {
    const text = {
      white: 'text-gray-800',
      gray: 'text-white',
      yellow: 'text-gray-800',
      green: 'text-gray-800',
      blue: 'text-white'
    }

    return text[this.color]
  }

  get linkColor (): string {
    const link = {
      white: 'text-indigo-600',
      gray: 'text-yellow-300',
      yellow: 'text-indigo-800',
      green: 'text-indigo-600',
      blue: 'text-yellow-300'
    }

    return link[this.color]
  }
}
</script>
