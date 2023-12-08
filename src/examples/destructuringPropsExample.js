<script setup>
import { watchEffect } from 'vue'

const { msg = 'hello' } = defineProps(['msg'])

watchEffect(() => {
  // доступ к msg в слежении (watchers) и вычисляемых свойствах (computed getters) 
  // рассматривается как зависимость, так же, как доступ к props.msg
  console.log(`msg is: ${msg}`)
})
</script>

<template>{{ msg }}</template>