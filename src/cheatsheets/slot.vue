<script setup>
import { ref } from 'vue'
import slotChild from './slotChild.vue'

const msg = ref('Vue는 개발자에게 정말 유용하죠! 🎁')
</script>

<template>
  <slotChild>부모로부터: {{ msg }}</slotChild>
</template>
