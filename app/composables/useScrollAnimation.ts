import { useIntersectionObserver } from "@vueuse/core";
import { ref, type Ref } from "vue";

export function useScrollAnimation(threshold = 0.15) {
  const target = ref<HTMLElement | null>(null) as Ref<HTMLElement | null>;
  const isVisible = ref(false);

  useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold },
  );

  return { target, isVisible };
}
