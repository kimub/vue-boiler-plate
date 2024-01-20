import { instance } from '@/api/instances';
import { ref } from 'vue';

type useMutationArgs = {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
};

export function useMutation(url: string, config: useMutationArgs = {}) {
  const data = ref();
  const isLoading = ref(false);
  const isSuccess = ref(false);
  const isError = ref(false);

  const { onSuccess, onError } = config;

  const mutate = async ({ method, data }: { method: string; data: any }) => {
    try {
      isSuccess.value = false;
      isError.value = false;
      isLoading.value = true;

      const res = await instance({ url, method, data });

      data.value = res.data;
      isSuccess.value = true;

      onSuccess && onSuccess(res.data);
    } catch (err) {
      isError.value = true;

      onError && onError(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { data, isLoading, isSuccess, isError, mutate };
}
