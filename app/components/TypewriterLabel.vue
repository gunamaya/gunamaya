<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  text: string;
  trigger?: "animate" | "inView";
  class?: HTMLAttributes["class"];
}>();

const el = ref<HTMLElement | null>(null);
const displayed = ref("");
const started = ref(false);

const full = computed(() => `// ${props.text}`);

function typeText() {
  if (started.value) return;
  started.value = true;
  displayed.value = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < full.value.length) {
      displayed.value = full.value.slice(0, i + 1);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 60);
}

onMounted(() => {
  if (props.trigger === "animate") {
    typeText();
    return;
  }

  if (!el.value) return;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        typeText();
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(el.value);
  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <p ref="el" :class="cn(['font-mono text-sm text-primary', props.class])">
    <span>{{ displayed }}</span>
    <span
      v-if="displayed.length < full.length"
      class="inline-block w-0.5 h-[1em] bg-primary animate-pulse align-middle ml-px"
    />
  </p>
</template>
