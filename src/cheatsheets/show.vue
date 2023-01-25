<template>
  <div>
    <button @click="toggleShow">Toggle</button>
    <p v-if="show">This text is only shown when "show" is true</p>
    <p v-show="show">
      This text is always rendered, but hidden when "show" is false
    </p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      show: true,
    })
    function toggleShow() {
      state.show = !state.show
    }
    return {
      ...toRefs(state),
      toggleShow,
    }
  },
}
</script>
