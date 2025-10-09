<script setup lang="ts"></script>

<template>
  <div class="layout">
    <main class="content">
      <slot />
    </main>
    <CustomFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding-bottom: 4rem;
}
</style>
