<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <!-- '동적' 값을 바인딩 -->
  <h1 :class="titleClass">나를 빨갛게 만들어 보세요</h1>
</template>

<style>
.title {
  color: red;
}
</style>
