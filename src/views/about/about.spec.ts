import About from './about.vue'
import { mount } from '@vue/test-utils'

describe('About', () => {
  describe('Snapshots', () => {
    beforeAll(() => {
      jest.useFakeTimers()
      jest.setSystemTime('2022-05-25')
    })

    afterAll(() => {
      jest.useRealTimers()
    })

    it('should mount correctly', () => {
      const wrapper = mount(About)

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Methods', () => {
    beforeAll(() => {
      jest.useFakeTimers()
      jest.setSystemTime('2022-05-25')
    })

    afterAll(() => {
      jest.useRealTimers()
    })

    it('eventDate', done => {
      const context = {
        activeMovieId: 0,
      }

      const response = About.methods?.eventDate.call(context)

      expect(response).toBe('5/25/2022')
      done()
    })
  })

  describe('Computed', () => {
    it('location', () => {
      const response = About.computed?.location.call({})

      expect(response).toBe('Porto')
    })
  })

  describe('Watch', () => {})
})
