<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span
    class="inline-block rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-muted-foreground"
  >
    {{ label }}
  </span>
</template>
