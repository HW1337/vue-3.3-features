// До
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
console.log(props.modelValue)

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input :value="modelValue" @input="onInput" />
</template>

// После
<script setup>
const modelValue = defineModel()
console.log(modelValue.value)
</script>

<template>
  <input v-model="modelValue" />
</template>