<script setup lang="ts">
defineProps({
  mountainInfo: Object,
});
</script>

<template>
  <div class="card-wrap">
    <div class="card-header">
      <div class="flex items-center gap-half-4">
        <div :class="`difficulty diff${mountainInfo?.difficulty}`">
          {{ mountainInfo?.difficulty }}
        </div>
        <h1>
          {{ mountainInfo?.name
          }}<span v-if="mountainInfo?.completed">({{ mountainInfo?.completedAt }})</span>
        </h1>
      </div>
      <div class="stamp-wrap" v-if="mountainInfo?.completed">
        <div class="stamp"></div>
      </div>
    </div>
    <div class="card-content">
      <div class="card-image">
        <img
          v-if="!mountainInfo?.imageUrl"
          src="~/assets/images/defaultImage.png"
          alt="산 이미지 없음"
        />
      </div>
      <div class="description">
        <div class="location">
          {{ mountainInfo?.regionSido }} {{ mountainInfo?.regionSigungu }}
          {{ mountainInfo?.regionDetail }}
        </div>
        <div class="height">
          {{ mountainInfo?.height }}<span v-if="mountainInfo?.height">m</span>
        </div>
        <div v-if="mountainInfo?.completed" class="comment">{{ mountainInfo?.comment }}</div>
        <div v-else class="regist">
          <button>등산 기록 등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~/assets/card.scss';
@import '~/assets/common.scss';
</style>
