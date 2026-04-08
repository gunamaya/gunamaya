<script setup lang="ts">
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Portofolio — Gunamaya",
  ogTitle: "Portofolio — Gunamaya",
  description:
    "Proyek-proyek yang telah kami bangun: dari enterprise platform sampai AI-powered systems.",
  ogDescription: "Proyek-proyek yang telah kami bangun.",
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 relative">
      <EffectLineWaves
        :speed="0.3"
        :innerLineCount="32"
        :outerLineCount="36"
        :warpIntensity="1"
        :rotation="-45"
        :edgeFadeWidth="0"
        :colorCycleSpeed="1"
        :brightness="0.2"
        color1="#baeaff"
        color2="#baeaff"
        color3="#baeaff"
        :enableMouseInteraction="true"
        :mouseInfluence="2"
        class="opacity-20"
      />
      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <TypewriterLabel text="portofolio" trigger="animate" class="mb-6" />
        <Motion
          as="h1"
          class="max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Sistem yang
          <span class="gradient-text">dibangun</span
          ><span class="text-primary">,</span><br />
          masalah yang <span class="gradient-text">diselesaikan</span>.
        </Motion>
        <Motion
          as="p"
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Setiap proyek adalah bukti komitmen kami terhadap engineering
          excellence dan arsitektur yang scalable.
        </Motion>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2">
        <Motion
          as="div"
          v-for="(project, i) in projects"
          :key="project.slug"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.1 }"
          :transition="{ duration: 0.5, delay: (i % 2) * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <ProjectCard :project="project" />
        </Motion>
      </div>
    </section>
  </div>
</template>
