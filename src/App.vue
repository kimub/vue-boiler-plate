<template>
  <BaseBlackHeader />
  <section class="h-[calc(100vh_-_115px)] overflow-y-auto">
    <RouterView />
  </section>
  <BaseFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import BaseFooter from '@/components/layout/BaseFooter.vue';
import BaseBlackHeader from '@/components/layout/BaseBlackHeader.vue';
</script>

<style scoped></style>
