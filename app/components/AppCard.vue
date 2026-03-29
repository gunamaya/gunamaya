<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const cardVariants = cva(
  "rounded-2xl border border-border bg-card transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        interactive:
          "hover:border-primary/30 hover:shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_5%,transparent)]",
        clickable:
          "group block overflow-hidden hover:border-primary/30 hover:shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_5%,transparent)]",
      },
      padding: {
        none: "",
        sm: "p-6",
        default: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  },
);

type CardVariants = VariantProps<typeof cardVariants>;

const props = defineProps<{
  variant?: CardVariants["variant"];
  padding?: CardVariants["padding"];
  as?: string;
  to?: string;
  class?: string;
}>();

const classes = computed(() =>
  cn(
    cardVariants({ variant: props.variant, padding: props.padding }),
    props.class,
  ),
);
</script>

<template>
  <component
    :is="to ? resolveComponent('NuxtLink') : as || 'div'"
    :to="to"
    :class="classes"
  >
    <slot />
  </component>
</template>
