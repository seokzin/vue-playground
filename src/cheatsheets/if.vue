<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">토글 버튼</button>
  <h1 v-if="awesome">Vue는 굉장해! 엄청나!</h1>
  <h1 v-else>오 안돼 😢</h1>

  <!-- else-if -->
  <p id="A" v-if="showMessageA">A</p>
  <p id="B" v-else-if="showMessageB">B</p>
  <p id="C" v-else>C</p>
</template>
