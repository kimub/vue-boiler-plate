<template>
  <div v-show="isLoading">
    <Spinner />
  </div>
  <div v-show="!isLoading">
    {{ data }}
  </div>
  <button @click="onClick">sadas</button>
  <input type="text" v-model="params.message" />
  <div class="text-3xl text-slate-400 md:text-red-500">Home</div>
  ci/cd 테스트 중
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '@/composables/useFetch';
import { useMutation } from '@/composables/useMutation';
import Spinner from '@/components/common/Spinner.vue';

const params = ref({
  message: ''
});

const { data, isLoading, isSuccess, isError } = useFetch('/todos');
const { mutate } = useMutation('/posts');

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
