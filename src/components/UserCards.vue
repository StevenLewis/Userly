<template>
    <section>
      <div v-if="users.length > 0">
        <article v-for="user in users" :key="user.email" class="flex mb-10 space-x-4">
          <p>{{ user.name.first }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
        </article>
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
}
</script>
