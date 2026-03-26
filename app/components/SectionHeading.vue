<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  label?: string;
}>();
</script>

<template>
  <div class="mb-12">
    <p v-if="label" class="mb-3 font-mono text-sm text-primary">{{ label }}</p>
    <h2
      class="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl"
    >
      <span v-if="subtitle"
        >{{ title }}<span class="text-primary">,</span><br />{{
          subtitle
        }}</span
      >
      <span v-else>{{ title }}</span>
    </h2>
  </div>
</template>
