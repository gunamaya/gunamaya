<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  description: string;
  link: string;
}>();
</script>

<template>
  <div
    class="group flex flex-1 flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30"
  >
    <h3 class="font-serif text-2xl font-bold text-foreground">{{ title }}</h3>
    <p class="mt-2 font-mono text-sm font-medium text-primary/70">
      {{ subtitle }}
    </p>
    <p class="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
      {{ description }}
    </p>
    <NuxtLink
      :to="link"
      class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
    >
      Learn More
      <svg
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </NuxtLink>
  </div>
</template>
