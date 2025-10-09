<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMountainStore } from '~/stores/mountain';

const { getMountainInfo } = storeToRefs(useMountainStore());
const mountainInfo = getMountainInfo.value;

const complete = ref('all');
const sort = ref('name');

definePageMeta({
  layout: 'common',
});
</script>

<template>
  <div class="filter-wrap">
    <div class="filter">
      <p>완료여부</p>
      <select v-model="complete">
        <option value="all">전체</option>
        <option value="completed">완료</option>
        <option value="notCompleted">미완료</option>
      </select>
    </div>
    <div class="filter">
      <p>정렬</p>
      <select v-model="sort">
        <option value="name">이름순</option>
        <option value="difficulty">난이도순</option>
      </select>
    </div>
  </div>
  <div class="card-container">
    <Card v-for="mountain in mountainInfo" :key="mountain.id" :mountain-info="mountain" />
  </div>
</template>

<style scoped>
@import '~/assets/card.scss';
</style>
