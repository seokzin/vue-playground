<script setup>
import { ref, onMounted } from 'vue'

// useRef와 비슷한 기능
const p = ref(null)

// 템플릿 참조는 컴포넌트가 마운트된 후에만 접근할 수 있음
// 다양한 lifecycle hooks가 있음 - onUpdated, onUnmounted 등
onMounted(() => {
  p.value.textContent = '마운트 되었어요!'
})
</script>

<template>
  <p ref="p">안녕</p>
</template>
