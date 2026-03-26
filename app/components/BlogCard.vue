<script setup lang="ts">
import type { BlogPost } from "~/data/blog";

defineProps<{
  post: BlogPost;
}>();
</script>

<template>
  <NuxtLink
    to="/blog"
    class="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
  >
    <!-- Dot grid header -->
    <div class="aspect-16/10 w-full bg-secondary dot-grid">
      <div class="flex h-full items-center justify-center">
        <span class="font-mono text-sm text-primary/20">{{
          post.category
        }}</span>
      </div>
    </div>
    <div class="p-6">
      <div class="mb-3">
        <span class="font-mono text-xs text-primary">{{ post.category }}</span>
      </div>
      <h3
        class="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary"
      >
        {{ post.title }}
      </h3>
    </div>
  </NuxtLink>
</template>
