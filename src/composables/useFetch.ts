import { instance } from '@/api/instances';
import { isRef, ref, watchEffect } from 'vue';

type useFetchArgs = {
  params?: any;
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
};

export function useFetch(url: string, config: useFetchArgs = {}) {
  const data = ref(null);
  const isLoading = ref(false);
  const isSuccess = ref(false);
  const isError = ref(false);

  const { params, onSuccess, onError } = config;

  const fetch = async () => {
    try {
      isSuccess.value = false;
      isError.value = false;
      isLoading.value = true;

      const res = await instance(url, {
        params: params && params.value
      });

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

  if (isRef(params)) {
    watchEffect(fetch);
  } else {
    fetch();
  }

  return { data, isLoading, isSuccess, isError };
}
