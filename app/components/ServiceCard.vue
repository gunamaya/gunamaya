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
  <div
    class="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_10px_rgba(0,229,160,0.05)]"
  >
    <div
      v-if="icon"
      class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
    >
      <Icon :name="icon" class="h-6 w-6 text-primary" />
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
      {{ linkLabel || "Learn More" }}
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
