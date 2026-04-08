<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";
import { NuxtLink } from "#components";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all",
  {
    variants: {
      variant: {
        aurora: "btn-aurora text-primary-foreground",
        outline:
          "ring-2 ring-border ring-inset text-foreground hover:ring-primary hover:text-primary",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        default: "px-8 py-3.5 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "aurora",
      size: "default",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

const props = defineProps<{
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  label?: string;
  as?: string;
  to?: string;
  type?: string;
  class?: string;
}>();

const classes = computed(() =>
  cn(buttonVariants({ variant: props.variant, size: props.size }), props.class),
);
const isExternal = computed(
  () => props.to?.startsWith("http") || props.to?.startsWith("mailto:"),
);
</script>

<template>
  <component
    :is="
      to ?
        isExternal ? 'a'
        : NuxtLink
      : as || 'button'
    "
    :to="to && !isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :type="!to && (as || 'button') === 'button' ? type || 'button' : undefined"
    :class="classes"
  >
    <template v-if="variant === 'aurora' || !variant">
      <span v-if="label" class="btn-aurora-content" :data-text="label">
        <span
          ><slot>{{ label }}</slot></span
        >
      </span>
      <slot v-else />
    </template>
    <slot v-else />
  </component>
</template>
