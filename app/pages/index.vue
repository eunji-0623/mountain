<script setup lang="ts">
const mountains = ref([]);
const { data } = await useFetch('/api/mountains');
mountains.value = data.value?.[0]?.results || [];
console.log('data: ', mountains.value);

definePageMeta({
  layout: 'common',
});
</script>

<template>
  <div>
    <h1>산 목록</h1>
    <ul v-if="mountains.length">
      <li v-for="m in mountains" :key="m.id">
        {{ m.name }} ({{ m.regionSido }}, {{ m.regionSigungu }})
      </li>
    </ul>
    <p v-else>데이터를 불러오는 중...</p>
  </div>
</template>

<style scoped></style>
