<template>
  {{ data }}
  <button @click="onClick">sadas</button>
  <div class="text-3xl text-slate-400 md:text-red-500">Home</div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';
import { useMutation } from '@/composables/useMutation';

const { data, isLoading, isSuccess, isError, refetch } = useFetch('todos', {});
const { mutate } = useMutation('/posts', {});

const onClick = () => {
  mutate({
    method: 'POST',
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  });
};
</script>

<style scoped></style>
