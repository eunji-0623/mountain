<script setup lang="ts">
import type { Mountain } from '~/types/mountains';
import Card from '~/components/Card.vue';

const mountainInfo = ref<Mountain[]>([]); // 산 정보

const { data, error } = await useFetch('/api/mountains');
if (error.value) {
  console.error('API fetch error:', error.value);
} else {
  // Cloudflare D1 응답 구조에 맞게 results 추출
  mountainInfo.value = data.value?.[0]?.results || [];
}

definePageMeta({
  layout: 'common',
});
</script>

<template>
  <Card v-for="mountain in mountainInfo" :key="mountain.id" :mountain-info="mountain" />
</template>

<style scoped></style>
