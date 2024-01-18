<template>
  <footer class="w-full h-[71px]">
    <ul class="flex justify-center cursor-pointer items-center text-center">
      <li class="flex-grow px-8 py-[14px] flex items-center flex-col gap-2 text-xl font-medium">
        <IconHome />
        홈
      </li>
      <li class="flex-grow px-8 py-[14px] flex items-center flex-col gap-2 text-xl font-medium">
        <IconDj />
        DJ
      </li>
      <li class="flex-grow px-8 py-[14px] flex items-center flex-col gap-2 text-xl font-medium">
        <IconCommunityVue />
        커뮤니티
      </li>
      <li class="flex-grow px-8 py-[14px] flex items-center flex-col gap-2 text-xl font-medium">
        <IconStorage />
        보관함
      </li>
      <li class="flex-grow px-8 py-[14px] flex items-center flex-col gap-2 text-xl font-medium">
        <IconMore />
        더보기
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import IconHome from '#/icons/IconHome.vue'
import IconDj from '#/icons/IconDj.vue'
import IconCommunityVue from '#/icons/IconCommunity.vue'
import IconStorage from '#/icons/IconStorage.vue'
import IconMore from '#/icons/IconMore.vue'
</script>

<style scoped></style>
