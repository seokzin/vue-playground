<script setup>
import { ref } from 'vue'
import emitChild from './emitChild.vue'

const childMsg = ref('자식 컴포넌트로부터 아직 메시지를 받지 못했어요!')
</script>

<template>
  <emitChild @response="(msg) => (childMsg = msg)" />
  <p>{{ childMsg }}</p>
</template>
