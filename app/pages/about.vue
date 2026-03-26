<script setup lang="ts">
import { team } from "~/data/team";

useSeoMeta({
  title: "About — Gunamaya",
  ogTitle: "About — Gunamaya",
  description:
    "Tim di balik Gunamaya — Principal Engineers dengan 10+ tahun pengalaman membangun high-performance systems dan AI solutions.",
  ogDescription:
    "Tim di balik Gunamaya — Engineers yang membangun high-performance systems.",
});

const trackRecord = [
  {
    value: "10+",
    label: "Tahun pengalaman combined di enterprise dan startup engineering.",
  },
  {
    value: "6+",
    label: "Proyek flagship yang berhasil di-deliver ke production.",
  },
  {
    value: "100K+",
    label: "Requests/second yang di-handle oleh sistem yang kami bangun.",
  },
  {
    value: "99.9%",
    label: "Uptime target yang konsisten kami capai di production.",
  },
];

const principles = [
  {
    title: "Engineering Excellence",
    description:
      "Setiap baris kode ditulis dengan standar tinggi. Clean architecture, comprehensive testing, dan production-grade quality bukan opsional — itu default.",
  },
  {
    title: "Scalability First",
    description:
      "Arsitektur yang kami rancang bisa scale dari ratusan ke jutaan users tanpa rewrite. Kami memikirkan bottleneck sebelum mereka terjadi.",
  },
  {
    title: "Pragmatic Innovation",
    description:
      "Kami menggunakan teknologi cutting-edge ketika memang tepat, bukan karena hype. Setiap decision didasarkan pada data dan pengalaman.",
  },
  {
    title: "Transparency & Communication",
    description:
      "Progress yang jelas, timeline yang realistis, dan honest feedback. Kami percaya komunikasi yang baik adalah fondasi partnership yang kuat.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="mb-6 font-mono text-sm text-primary">// about us</p>
        <h1
          class="max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Engineers who build
          <span class="gradient-text">systems that matter</span>
        </h1>
        <p
          class="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Gunamaya adalah tim engineers dengan obsesi terhadap performa,
          scalability, dan clean architecture. Kami percaya bahwa teknologi yang
          tepat bisa menjadi competitive advantage terbesar untuk bisnis Anda.
        </p>
      </div>
    </section>

    <!-- Track Record Stats -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Track Record" label="// in numbers" />
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div v-for="stat in trackRecord" :key="stat.value">
            <div class="font-mono text-4xl font-bold text-primary md:text-5xl">
              {{ stat.value }}
            </div>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="The Team" label="// who we are" />
      <div class="grid gap-6 md:grid-cols-2">
        <TeamMemberCard
          v-for="member in team"
          :key="member.name"
          :member="member"
        />
      </div>
    </section>

    <!-- Principles -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="How we work" label="// principles" />
        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="principle in principles"
            :key="principle.title"
            class="rounded-2xl border border-border bg-card p-8"
          >
            <h3 class="font-serif text-xl font-bold text-foreground">
              {{ principle.title }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
              {{ principle.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="text-center">
        <p class="mb-4 font-mono text-sm text-primary">// let's talk</p>
        <h2
          class="mx-auto max-w-2xl font-serif text-3xl font-bold text-foreground md:text-4xl"
        >
          Siap membangun sesuatu yang luar biasa?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Mari diskusikan bagaimana kami bisa membantu bisnis Anda dengan
          engineering yang solid dan arsitektur yang scalable.
        </p>
        <div class="mt-10">
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
