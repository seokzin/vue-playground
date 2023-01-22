<script setup>
import { ref } from 'vue'

const count = ref(0)

// 함수 내에서 ref 변경 가능. 선언식도 되는 것 같은데 좋은 패턴인지는..
const increment = () => {
  count.value++
}
</script>

<template>
  <button @click="increment">숫자 세기: {{ count }}</button>
</template>
