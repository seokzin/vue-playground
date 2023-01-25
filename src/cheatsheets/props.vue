<script setup>
import { ref } from 'vue'
import propsChild from './propsChild.vue'

const greeting = ref('부모 컴포넌트로부터 💌을 전달받았어요!')
</script>

<template>
  <propsChild :msg="greeting" />
</template>
