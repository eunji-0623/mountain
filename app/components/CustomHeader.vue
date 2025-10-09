<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMountainStore } from '~/stores/mountain';

const { completedCount } = storeToRefs(useMountainStore());
</script>

<template>
  <header>
    <h1>
      지금까지 <span>{{ completedCount || 0 }}</span
      >곳 정복 완료
    </h1>
  </header>
</template>

<style scoped>
@import '~/assets/layout.scss';
</style>
