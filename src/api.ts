import axios from 'axios'
import { AxiosResponse } from '@/interfaces'

export default {
  fetchUsers (page: number, resultsPerPage: number, seed: string): Promise<AxiosResponse> {
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
