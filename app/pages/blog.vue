<script setup lang="ts">
import { blogPosts } from "~/data/blog";

useSeoMeta({
  title: "Engineering Blog — Gunamaya",
  ogTitle: "Engineering Blog — Gunamaya",
  description:
    "Insights tentang engineering, AI, DevOps, dan arsitektur dari tim Gunamaya.",
  ogDescription: "Insights tentang engineering, AI, dan arsitektur.",
});

const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];
const activeCategory = ref("All");

const filteredPosts = computed(() => {
  if (activeCategory.value === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === activeCategory.value);
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="mb-6 font-mono text-sm text-primary">// blog</p>
        <h1
          class="max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Engineering Blog
        </h1>
        <p
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Deep dives ke engineering, arsitektur, AI integration, dan lessons
          learned dari proyek-proyek kami.
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="border-b border-border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex gap-6 overflow-x-auto pb-4">
          <button
            v-for="cat in categories"
            :key="cat"
            class="whitespace-nowrap font-mono text-sm font-medium transition-colors"
            :class="
              activeCategory === cat ? 'text-primary' : (
                'text-muted-foreground hover:text-foreground'
              )
            "
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in filteredPosts" :key="post.slug" :post="post" />
      </div>
      <div v-if="filteredPosts.length === 0" class="py-16 text-center">
        <p class="text-muted-foreground">No posts found in this category.</p>
      </div>
    </section>
  </div>
</template>
