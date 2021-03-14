
<template>
  <div class="w-screen h-screen" :style="backgroundDiv"> 
    <!-- <Vscss />
    <ChangState /> -->
    <div class=" text-gray-900 flex w-3/12 justify-between">
      <a href="#" @click="toggleTabs('Vscss');">{{'Vscss'}}</a>
      <a href="#" @click="toggleTabs('ChangState');">{{'ChangState'}}</a>
      <a href="#" @click="toggleTabs('Apply');">{{'Apply'}}</a>
    </div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Apply from '../components/apply'
import Vscss from '../components/vscss'
import ChangState from '../components/chang-state'
export default {
  data() {
    return {
      currentTabComponent: 'Vscss',
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/bg.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  components: {
    Apply,
    Vscss,
    ChangState
  },
  methods: {
    toggleTabs(component) {
      this.currentTabComponent = component
    }
  },
  mounted() {
  }
}
</script>
<style scoped>

</style>
