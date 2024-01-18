import { instance } from '@/api/instances';
import { ref, watch } from 'vue';

export function useFetch(
  url: string,
  {
    onSuccess,
    onError
  }: {
    onSuccess?: (res: any) => void;
    onError?: (err: any) => void;
  }
) {
  const data = ref();
  const isLoading = ref(false);
  const isSuccess = ref(false);
  const isError = ref(false);
  const isFlag = ref(Date.now());

  const refetch = () => (isFlag.value = Date.now());

  watch(isFlag, () => {
    fetch();
  });

  const fetch = async () => {
    try {
      isSuccess.value = false;
      isError.value = false;
      isLoading.value = true;

      const res = await instance(url);

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

  fetch();

  return { data, isLoading, isSuccess, isError, refetch };
}
