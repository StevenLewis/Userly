<template>
  <section>
      <ul class="mb-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        <UserCard v-for="user in users" :key="user.email" :user="user" class="lc-user" />
      </ul>

      <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <a @click.prevent="previousPage"
           alt="Load the previous page of users"
           href="#"
           class="lc-previous border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium"
           :class="hasPreviousPage ? 'text-gray-500 hover:text-gray-700 hover:border-gray-300' : 'text-gray-300 cursor-not-allowed'"
        >
          <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Previous
        </a>

        <div class="hidden md:-mt-px md:flex">
          <a v-if="hasPreviousPage" @click.prevent="selectPage(page - 1)" :alt="`Go to page ${page - 1}`" href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
            {{ page - 1 }}
          </a>
          <a @click.prevent="selectPage(page)" :alt="`Go to page ${page}`" href="#" class="lc-page border-yellow-500 text-yellow-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">
            {{ page }}
          </a>
          <a v-if="hasNextPage" @click.prevent="selectPage(page + 1)" :alt="`Go to page ${page + 1}`" href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
            {{ page + 1 }}
          </a>
        </div>

        <a @click.prevent="nextPage"
           alt="Load the next page of users"
           href="#"
           class="lc-next border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium "
           :class="hasNextPage ? 'text-gray-500 hover:text-gray-700 hover:border-gray-300' : 'text-gray-300 cursor-not-allowed'"
        >
          Next
          <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { User } from '@/interfaces'
import api from '@/api'
import UserCard from '@/components/UserCard.vue'

@Component({
  components: {
    UserCard
  }
})

export default class UserCards extends Vue {
  private users: Array<User> = []
  private page = 1
  private resultsPerPage = 3
  private seed = 'xyz'
  private isLoading = true
  private maxResults = 100

  get maxPages (): number {
    return Math.floor(this.maxResults / this.resultsPerPage)
  }

  get hasPreviousPage (): boolean {
    return this.page > 1
  }

  get hasNextPage (): boolean {
    return this.page < this.maxPages
  }

  mounted (): void {
    this.fetchUsers(this.page)
  }

  public fetchUsers (page: number): void {
    api.fetchUsers(page, this.resultsPerPage, this.seed)
      .then(({ data }) => {
        this.users = data.results
        this.isLoading = false
      })
  }

  public nextPage (): void {
    if (this.page >= this.maxPages) return

    this.page += 1

    this.fetchUsers(this.page)
  }

  public previousPage (): void {
    if (this.page === 1) return

    this.page -= 1

    this.fetchUsers(this.page)
  }

  public selectPage (page: number): void {
    if (page < 1 || page > this.maxPages) return

    this.page = page

    this.fetchUsers(page)
  }
}
</script>
