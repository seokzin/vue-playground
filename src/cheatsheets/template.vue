<script setup>
import { reactive, ref } from 'vue'

// reactive - 반응형 상태를 객체로 선언
const counter = reactive({ count: 0 })

// ref - 반응형 상태. 모든 타입 가능. value 프로퍼티로 값 접근하지만 자동 언래핑 가능
const message = ref('안녕 Vue!')
</script>

<template>
  <h1>{{ message }}</h1>
  <p>숫자 세기: {{ counter.count }}</p>
</template>
