<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  selected: T
}>()
</script>