<script setup lang="ts">
import calendar from '~/assets/images/icon_calendar.png';
import calendarActive from '~/assets/images/icon_calendar_active.png';
import list from '~/assets/images/icon_list.png';
import listActive from '~/assets/images/icon_list_active.png';

const route = useRoute();
const isCalendar = computed(() => route.path?.includes('calendar'));
const isList = computed(() => route.path?.includes('list'));
const isMap = computed(() => route.path?.includes('map'));
const isMenu = computed(() => route.path?.includes('menu'));

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
    <button @click="handleCalendarClick">
      <img :src="isCalendar ? calendarActive : calendar" alt="달력" />
    </button>
    <!--  산 (목록)  -->
    <button @click="handleListClick">
      <img :src="isList ? listActive : list" alt="목록" />
    </button>
    <!--  산 (지도)  -->
    <button @click="handleMapClick">MAP</button>
    <!--  my menu  -->
    <button @click="handleMyMenuClick">MY</button>
  </footer>
</template>

<style scoped>
@import '~/assets/layout.scss';
</style>
