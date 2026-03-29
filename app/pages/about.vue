<script setup lang="ts">
import { team } from "~/data/team";

useSeoMeta({
  title: "Tentang — Gunamaya",
  ogTitle: "Tentang — Gunamaya",
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
    title: "Keunggulan Engineering",
    description:
      "Setiap baris kode ditulis dengan standar tinggi. Clean architecture, comprehensive testing, dan production-grade quality bukan opsional — itu default.",
  },
  {
    title: "Skalabilitas Utama",
    description:
      "Arsitektur yang kami rancang bisa scale dari ratusan ke jutaan users tanpa rewrite. Kami memikirkan bottleneck sebelum mereka terjadi.",
  },
  {
    title: "Inovasi Pragmatis",
    description:
      "Kami menggunakan teknologi cutting-edge ketika memang tepat, bukan karena hype. Setiap decision didasarkan pada data dan pengalaman.",
  },
  {
    title: "Transparansi & Komunikasi",
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
        <TypewriterLabel text="tentang kami" trigger="animate" class="mb-6" />
        <Motion
          as="h1"
          class="max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Engineer yang membangun
          <span class="gradient-text">sistem yang bermakna</span>
        </Motion>
        <Motion
          as="p"
          class="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Gunamaya adalah tim engineers dengan obsesi terhadap performa,
          scalability, dan clean architecture. Kami percaya bahwa teknologi yang
          tepat bisa menjadi competitive advantage terbesar untuk bisnis Anda.
        </Motion>
      </div>
    </section>

    <!-- Track Record Stats -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Rekam Jejak" label="// dalam angka" />
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
          <Motion
            as="div"
            v-for="(stat, i) in trackRecord"
            :key="stat.value"
            :initial="{ opacity: 0, y: 24 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
          >
            <div class="font-mono text-4xl font-bold text-primary md:text-5xl">
              {{ stat.value }}
            </div>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              {{ stat.label }}
            </p>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="Tim Kami" label="// siapa kami" />
      <div class="grid gap-6 md:grid-cols-4">
        <Motion
          as="div"
          v-for="(member, i) in team"
          :key="member.name"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <TeamMemberCard :member="member" />
        </Motion>
      </div>
    </section>

    <!-- Principles -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Cara kami bekerja" label="// prinsip" />
        <div class="grid gap-8 md:grid-cols-2">
          <Motion
            as="div"
            v-for="(principle, i) in principles"
            :key="principle.title"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
          >
            <AppCard>
              <h3 class="font-serif text-xl font-bold text-foreground">
                {{ principle.title }}
              </h3>
              <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
                {{ principle.description }}
              </p>
            </AppCard>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>
