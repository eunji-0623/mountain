<script setup lang="ts">
import type { Mountain } from '~/types/mountains';
import { useMountainStore } from '~/stores/mountain';

const { setMountainInfo } = useMountainStore();

async function getMountainInfo() {
  const { data, error } = await useFetch('/api/mountains');
  if (error.value) {
    console.error('API fetch error:', error.value);
  } else {
    setMountainInfo(data.value?.[0]?.results || []);
    await navigateTo('/list');
  }
}

onMounted(async () => {
  await getMountainInfo();
});
</script>

<template></template>

<style scoped></style>
