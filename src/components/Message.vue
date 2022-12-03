<template>
  <div class="bg-green p-5 rounded-lg text-xl w-3/4" :class="position">
    <slot />
  </div>
</template>

<script setup lang="ts">import { computed } from 'vue';

interface Props {
  position: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left'
})

const position = computed<string>(() => {
  return props.position === 'left' ? 'self-start' : 'self-end'
})

</script>

<style scoped>

</style>