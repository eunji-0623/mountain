<script setup lang="ts"></script>

<template>
  <div class="layout">
    <CustomHeader />
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
  background-color: rgb(255, 247, 232);
}
.content {
  flex: 1;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
