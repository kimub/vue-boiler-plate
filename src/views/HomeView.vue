<template>
  <div v-show="isLoading">
    <Spinner />
  </div>
  <div v-show="!isLoading">
    {{ data }}
  </div>
  <button @click="onClick">sadas</button>
  <div class="text-3xl text-slate-400 md:text-red-500">Home</div>
</template>

<script setup lang="ts">
import Spinner from '@/components/common/Spinner.vue';
import { useFetch } from '@/composables/useFetch';
import { useMutation } from '@/composables/useMutation';

const { data, isLoading, isSuccess, isError, refetch } = useFetch('/todos', {
  onSuccess: (res) => {
    console.log('success!');
    console.log(res);
  },
  onError: (err) => {
    console.error('error!');
    console.log(err);
  }
});

const { mutate } = useMutation('/posts', {
  onSuccess: (res) => {
    console.log('success!');
    console.log(res);
  },
  onError: (err) => {
    console.error('error!');
    console.log(err);
  }
});

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
