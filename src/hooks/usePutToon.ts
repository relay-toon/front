import { AxiosInstance } from 'axios';
import { Toon } from '../types/Toon';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const putToon = async (toonData: Toon, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.put(`/toons/${toonData.id}`, toonData);
  return response.data;
};

export const usePutToon = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (toonData: Toon) => putToon(toonData, axiosInstance),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('toon', data.id),
      });
    },
    onError: () => {
      alert('에러가 발생했습니다. 다시 시도해주세요.');
    },
  });
};
