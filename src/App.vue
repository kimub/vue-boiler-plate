<template>
  <BaseBlackHeader />
  <section class="h-[calc(100vh_-_115px)]">
    <RouterView />
  </section>
  <BaseFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseFooter from '#/layout/BaseFooter.vue'
import BaseBlackHeader from '#/layout/BaseBlackHeader.vue'
</script>

<style scoped></style>
