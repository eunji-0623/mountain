<script setup lang="ts">
import { useMountainStore } from '~/stores/mountain';

const { getMountainInfo } = storeToRefs(useMountainStore());
const mountainInfo = getMountainInfo.value;

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
