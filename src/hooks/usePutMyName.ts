import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const putMyName = async (name: string, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.put('/users/me', { name });
  return response.data;
};

export const usePutMyName = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => putMyName(name, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('myInfo'),
      });
    },
  });
};
