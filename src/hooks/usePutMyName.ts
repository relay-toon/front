import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const putMyName = async (name: string, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.put('/users/me', { name });
  return response.data;
};

export const usePutMyName = (name: string) => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => putMyName(name, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('myInfo'),
      });
      alert('닉네임이 변경되었습니다.');
    },
    onError: () => {
      alert('닉네임 변경에 실패했습니다.');
    },
  });
};
