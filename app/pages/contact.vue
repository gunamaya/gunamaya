<script setup lang="ts">
useSeoMeta({
  title: "Kontak — Gunamaya",
  ogTitle: "Kontak — Gunamaya",
  description:
    "Jadwalkan konsultasi strategis untuk diskusikan kebutuhan AI, backend, dan arsitektur teknologi Anda.",
  ogDescription: "Jadwalkan konsultasi strategis dengan tim Gunamaya.",
});

const form = reactive({
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
});

const projectTypes = [
  "Pengembangan Software Kustom",
  "Integrasi AI & Otomasi",
  "Konsultasi Teknologi",
  "Review Arsitektur Sistem",
  "Lainnya",
];

function handleSubmit() {
  alert("Terima kasih! Kami akan menghubungi Anda segera.");
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <TypewriterLabel text="kontak" trigger="animate" class="mb-6" />
        <Motion
          as="h1"
          class="max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Jadwalkan
          <span class="gradient-text">Konsultasi</span> Strategis
        </Motion>
        <Motion
          as="p"
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Ceritakan tantangan teknis Anda. Kami akan membantu merancang solusi
          yang scalable dan production-ready.
        </Motion>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div class="grid gap-16 lg:grid-cols-2">
        <!-- Form -->
        <Motion
          as="div"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <form class="space-y-8" @submit.prevent="handleSubmit">
            <div>
              <label
                for="name"
                class="mb-2 block font-mono text-sm font-medium text-foreground"
                >Nama</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full border-b border-border bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label
                for="email"
                class="mb-2 block font-mono text-sm font-medium text-foreground"
                >Email</label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full border-b border-border bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                for="company"
                class="mb-2 block font-mono text-sm font-medium text-foreground"
                >Perusahaan</label
              >
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="w-full border-b border-border bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                placeholder="Nama perusahaan Anda"
              />
            </div>

            <div>
              <label
                for="projectType"
                class="mb-2 block font-mono text-sm font-medium text-foreground"
                >Jenis Proyek</label
              >
              <select
                id="projectType"
                v-model="form.projectType"
                class="w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary"
              >
                <option
                  value=""
                  disabled
                  class="bg-background text-muted-foreground"
                >
                  Pilih jenis proyek
                </option>
                <option
                  v-for="opt in projectTypes"
                  :key="opt"
                  :value="opt"
                  class="bg-background text-foreground"
                >
                  {{ opt }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="mb-2 block font-mono text-sm font-medium text-foreground"
                >Ceritakan tentang proyek Anda</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-primary"
                placeholder="Jelaskan proyek, tantangan teknis, dan tujuan Anda..."
              />
            </div>

            <AppButton type="submit" label="Kirim Pesan" as="button" />
          </form>
        </Motion>

        <!-- Right side info -->
        <Motion
          as="div"
          class="flex flex-col justify-center"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.15 }"
        >
          <div class="space-y-10">
            <div>
              <h3 class="font-mono text-sm font-semibold text-primary">
                Email
              </h3>
              <a
                href="mailto:we@gunamaya.id"
                class="mt-2 block text-foreground transition-colors hover:text-primary"
              >
                we@gunamaya.id
              </a>
            </div>
            <div>
              <h3 class="font-mono text-sm font-semibold text-primary">
                WhatsApp Bisnis
              </h3>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-2 block text-foreground transition-colors hover:text-primary"
              >
                +62 812-3456-7890
              </a>
            </div>
            <div>
              <h3 class="font-mono text-sm font-semibold text-primary">
                Terhubung
              </h3>
              <div class="mt-3 flex flex-col gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >GitHub</a
                >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >LinkedIn</a
                >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >Instagram</a
                >
              </div>
            </div>
            <AppCard padding="sm">
              <p class="font-mono text-xs text-primary">// response time</p>
              <p class="mt-2 text-sm text-muted-foreground">
                Kami biasanya merespons dalam 24 jam di hari kerja. Untuk urgent
                request, gunakan WhatsApp.
              </p>
            </AppCard>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>
