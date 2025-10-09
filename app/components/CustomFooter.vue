<script setup lang="ts">
function handleCalendarClick() {
  navigateTo('/calendar');
}

function handleListClick() {
  navigateTo('/list');
}

function handleMapClick() {
  navigateTo('/map');
}

function handleMyMenuClick() {
  navigateTo('/my-menu');
}
</script>

<template>
  <footer>
    <!--  캘린더   -->
    <button @click="handleCalendarClick">CAL</button>
    <!--  산 (목록)  -->
    <button @click="handleListClick">LIST</button>
    <!--  산 (지도)  -->
    <button @click="handleMapClick">MAP</button>
    <!--  my menu  -->
    <button @click="handleMyMenuClick">MY</button>
  </footer>
</template>

<style scoped>
@import '~/assets/layout.scss';
</style>
