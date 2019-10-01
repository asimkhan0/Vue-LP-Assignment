import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import store from '@/store'
import Vuetify from 'vuetify'
import Vue from 'vue'
import ignoredElements from "../Constants/ignore.constants.js"

const localVue = createLocalVue();
Vue.config.ignoredElements = ignoredElements

let vuetify = new Vuetify()
const wrapper = shallowMount(Home, { localVue, vuetify, store })

describe('Test: Home.vue', () => {
  
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains text fields', () => {
    expect(wrapper.contains(`v-text-field`)).toBe(true)
  })
})







// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })