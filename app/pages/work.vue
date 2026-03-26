<script setup lang="ts">
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Portfolio — Gunamaya",
  ogTitle: "Portfolio — Gunamaya",
  description:
    "Proyek-proyek yang telah kami bangun: dari enterprise platform sampai AI-powered systems.",
  ogDescription: "Proyek-proyek yang telah kami bangun.",
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="mb-6 font-mono text-sm text-primary">// portfolio</p>
        <h1
          class="max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Systems we've
          <span class="gradient-text">built</span
          ><span class="text-primary">,</span><br />
          problems we've solved.
        </h1>
        <p
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Setiap proyek adalah bukti komitmen kami terhadap engineering
          excellence dan arsitektur yang scalable.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="border-t border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p
          class="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Punya ide atau tantangan teknis? Kami siap membantu merancang dan
          membangun solusi yang tepat untuk bisnis Anda.
        </p>
        <div class="mt-10 text-center">
          <NuxtLink
            to="/contact"
            class="inline-block rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]"
          >
            Book a Consultation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
