import UserCards from '@/components/UserCards.vue'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

jest.mock('@/api', () => ({
  fetchUsers: () => Promise.resolve({
    data: {
      results: [
        {
          name: 'Steve',
          email: 'steve@test.com',
          phone: '0123456789',
          location: {
            street: '1 Long Walk',
            city: 'London',
            state: 'London',
            postcode: 'SW123',
            coordinates: {
              longitude: '1213',
              latitude: '1213'
            },
            timezone: {
              offset: '0',
              discription: 'UTC'
            }
          },
          picture: {
            medium: 'steve-medium.jpg',
            large: 'steve-large.jpg',
            thumbnail: 'steve-thumb.jpg'
          }
        },
        {
          name: 'Bill',
          email: 'bill@test.com',
          phone: '0123456789',
          location: {
            street: '2 Short Walk',
            city: 'Glasgow',
            state: 'Glasgow',
            postcode: 'GL123',
            coordinates: {
              longitude: '1213',
              latitude: '1213'
            },
            timezone: {
              offset: '0',
              discription: 'UTC'
            }
          },
          picture: {
            medium: 'bill-medium.jpg',
            large: 'bill-large.jpg',
            thumbnail: 'bill-thumb.jpg'
          }
        },
        {
          name: 'Jane',
          email: 'jane@test.com',
          phone: '0123456789',
          location: {
            street: '1 Long Walk',
            city: 'Bristol',
            state: 'Bristol',
            postcode: 'BR123',
            coordinates: {
              longitude: '1213',
              latitude: '1213'
            },
            timezone: {
              offset: '0',
              discription: 'UTC'
            }
          },
          picture: {
            medium: 'jane-medium.jpg',
            large: 'jane-large.jpg',
            thumbnail: 'jane-thumb.jpg'
          }
        }
      ]
    }
  })
}))

describe('UserCards', () => {
  test('It will load the correct number of users initially', async () => {
    const wrapper = shallowMount(UserCards)

    await flushPromises()

    expect(wrapper.findAll('.lc-user').length).toEqual(3)
  })

  test('It will load the next page', async () => {
    const wrapper = shallowMount(UserCards)

    await flushPromises()
    await wrapper.find('.lc-next').trigger('click')

    expect(wrapper.findAll('.lc-user').length).toEqual(3)
    expect(wrapper.find('.lc-page').text()).toBe('2')
  })

  test('It will load the previous page', async () => {
    const wrapper = shallowMount(UserCards, {
      data () {
        return {
          page: 5
        }
      }
    })

    await flushPromises()
    await wrapper.find('.lc-previous').trigger('click')

    expect(wrapper.findAll('.lc-user').length).toEqual(3)
    expect(wrapper.find('.lc-page').text()).toBe('4')
  })

  test('It will not load the next page when at maximum', async () => {
    const wrapper = shallowMount(UserCards, {
      data () {
        return {
          page: 33
        }
      }
    })

    await flushPromises()
    await wrapper.find('.lc-next').trigger('click')

    expect(wrapper.find('.lc-page').text()).toBe('33')
  })

  test('It will not load the previous page when at one', async () => {
    const wrapper = shallowMount(UserCards, {
      data () {
        return {
          page: 1
        }
      }
    })

    await flushPromises()
    await wrapper.find('.lc-previous').trigger('click')

    expect(wrapper.find('.lc-page').text()).toBe('1')
  })
})
