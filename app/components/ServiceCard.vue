<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon?: string;
  link?: string;
  linkLabel?: string;
}>();
</script>

<template>
  <AppCard variant="interactive">
    <div
      v-if="icon"
      class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"
    >
      <Icon :name="icon" class="h-6 w-6" />
    </div>
    <h3 class="font-serif text-2xl font-bold text-foreground">{{ title }}</h3>
    <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
      {{ description }}
    </p>
    <NuxtLink
      v-if="link"
      :to="link"
      class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
    >
      {{ linkLabel || "Selengkapnya" }}
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
  </AppCard>
</template>
