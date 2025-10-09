<script setup lang="ts">
import type { Mountain } from '~/types/mountains';
import Card from '~/components/Card.vue';

const mountainInfo = ref<Mountain[]>([]); // 산 정보

async function getMountainInfo() {
  const { data, error } = await useFetch('/api/mountains');
  if (error.value) {
    console.error('API fetch error:', error.value);
  } else {
    mountainInfo.value = data.value?.[0]?.results || [];
  }
}

onMounted(async () => {
  await getMountainInfo();
});

definePageMeta({
  layout: 'common',
});
</script>

<template>
  <div class="card-container">
    <Card v-for="mountain in mountainInfo" :key="mountain.id" :mountain-info="mountain" />
  </div>
</template>

<style scoped></style>
