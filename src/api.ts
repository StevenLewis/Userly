import axios from 'axios'

export default {
  fetchUsers (page: number, resultsPerPage: number, seed: string): Promise<any> {
    return axios.get('https://randomuser.me/api/', {
      params: {
        inc: 'name,email,phone,picture,location',
        results: resultsPerPage,
        page,
        seed
      }
    })
  }
}
