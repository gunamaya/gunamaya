<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps<{
  value: string;
  label: string;
}>();

const target = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const displayValue = ref(props.value);

useIntersectionObserver(
  target,
  ([entry]) => {
    if (entry?.isIntersecting && !isVisible.value) {
      isVisible.value = true;
    }
  },
  { threshold: 0.3 },
);
</script>

<template>
  <div ref="target" class="text-center">
    <div
      class="font-mono text-3xl font-bold text-primary transition-all duration-700 md:text-4xl"
      :class="
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      "
    >
      {{ displayValue }}
    </div>
    <p
      class="mt-2 text-sm text-muted-foreground transition-all delay-200 duration-700"
      :class="
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      "
    >
      {{ label }}
    </p>
  </div>
</template>
