<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle?: string;
  label?: string;
}>();

const labelText = computed(() =>
  props.label ? props.label.replace(/^\/\/\s*/, "") : "",
);
</script>

<template>
  <div class="mb-12">
    <TypewriterLabel
      v-if="label"
      :text="labelText"
      trigger="inView"
      class="mb-3"
    />
    <Motion
      as="h2"
      class="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl"
      :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{ duration: 0.5, delay: 0.1 }"
    >
      <span v-if="subtitle"
        >{{ title }}<span class="text-primary">,</span><br />{{
          subtitle
        }}</span
      >
      <span v-else>{{ title }}</span>
    </Motion>
  </div>
</template>
