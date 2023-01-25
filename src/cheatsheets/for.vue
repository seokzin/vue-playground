<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'HTML 배우기' },
  { id: id++, text: 'JavaScript 배우기' },
  { id: id++, text: 'Vue 배우기' },
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <!-- event.preventDefault() 호출 -->
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>할 일 추가</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>

    <!-- destructuring 가능. 좋은 패턴인지는..? -->
    <li v-for="{ text, id } in todos" :key="id">
      {{ text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
