<template>
  <h1>Hello World</h1>
  <CounterButton />

  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import CounterButton from '@/components/CounterButton.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
