<script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <!-- before: bind와 on을 활용한 양방향 바인딩 -->
  <input :value="text" @input="onInput" placeholder="여기에 입력하기" />

  <!-- after: v-model은 양방향 바인딩을 단순화 하는 디렉티브. 더이상 이벤트핸들러 필요 X -->
  <input v-model="text" placeholder="여기에 입력하기" />
  <p>{{ text }}</p>
</template>
