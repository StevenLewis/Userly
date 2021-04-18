<template>
    <section>
      <div v-if="users.length > 0">
        <article v-for="user in users" :key="user.email" class="lc-user flex mb-10 space-x-4">
          <p>{{ user.name.first }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
        </article>

        <footer class="flex space-x-10">
          <button @click.prevent="previousPage" class="lc-previous">Previous</button>
          <div class="lc-page">{{ page }}</div>
          <button @click.prevent="nextPage" class="lc-next">Next</button>
        </footer>
      </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { User } from '@/interfaces'
import api from '@/api'

@Component
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
}
</script>
