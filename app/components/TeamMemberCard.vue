<script setup lang="ts">
import type { TeamMember } from "~/data/team";

defineProps<{
  member: TeamMember;
}>();
</script>

<template>
  <div
    class="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
  >
    <div
      class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10"
    >
      <span class="font-mono text-xl font-bold text-primary">
        {{
          member.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")
        }}
      </span>
    </div>
    <h3 class="text-base font-semibold text-foreground">{{ member.name }}</h3>
    <p class="mt-1 font-mono text-xs text-primary/70">{{ member.role }}</p>
    <p
      v-if="'description' in member && member.description"
      class="mt-3 text-sm leading-relaxed text-muted-foreground"
    >
      {{ (member as any).description }}
    </p>
  </div>
</template>
