import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker.vue'

describe('ColorPicker', () => {
  test('There are five options available', () => {
    const wrapper = shallowMount(ColorPicker)

    const colors = wrapper.findAll('.lc-color')
    const white = wrapper.findAll('.lc-white')
    const gray = wrapper.findAll('.lc-gray')
    const yellow = wrapper.findAll('.lc-yellow')
    const red = wrapper.findAll('.lc-red')
    const blue = wrapper.findAll('.lc-blue')

    expect(colors).toHaveLength(5)
    expect(white).toHaveLength(1)
    expect(gray).toHaveLength(1)
    expect(yellow).toHaveLength(1)
    expect(red).toHaveLength(1)
    expect(blue).toHaveLength(1)
  })

  test('It can select a new color', async () => {
    const wrapper = shallowMount(ColorPicker)

    await wrapper.find('.lc-red').trigger('click')

    expect(wrapper.emitted('select-color')).toBeTruthy()
  })
})
