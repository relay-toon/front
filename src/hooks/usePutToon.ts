import { AxiosInstance } from 'axios';
import { Toon } from '../types/Toon';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const putToon = async (toonData: Toon, axiosInstance: AxiosInstance) => {
  const formData = new FormData();
  if (toonData.name) {
    formData.append('name', toonData.name);
  }
  if (toonData.userId) {
    formData.append('userId', toonData.userId);
  }
  if (toonData.image) {
    formData.append('image', toonData.image);
  }
  const response = await axiosInstance.put(`/toons/${toonData.id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const usePutToon = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  // const router = useRouter();
  return useMutation({
    mutationFn: (toonData: Toon) => putToon(toonData, axiosInstance),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('toon', data.id),
      });
      // router.push(
      //   `/finished-drawing/${data.id}?count=${data.participants.length}`,
      // );
    },

    onError: (err: Error) => {
      // ! 데이터는 다 정상적으로 들어오는데 에러가 뜸
      console.log('custom hook err', err);
      alert('에러가 발생했습니다. 다시 시도해주세요.');
    },
  });
};
