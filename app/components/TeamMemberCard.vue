<script setup lang="ts">
import type { TeamMember } from "~/data/team";

defineProps<{
  member: TeamMember;
}>();
</script>

<template>
  <AppCard variant="interactive" padding="sm">
    <div
      class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
    >
      <img
        v-if="member.user"
        :src="'https://github.com/' + member.user + '.png'"
        alt="Avatar"
        class="rounded-full"
      />
      <span v-else class="font-mono text-xl font-bold text-primary">
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
  </AppCard>
</template>
