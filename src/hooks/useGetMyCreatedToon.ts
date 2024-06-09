import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyCreatedToon = async (
  axiosInstance: AxiosInstance,
  page: number,
  completed: boolean,
) => {
  const response = await axiosInstance.get('/toons/owned', {
    params: {
      page,
      completed,
    },
  });
  return response.data;
};

export const useGetMyCreatedToon = (page: number, completed: boolean) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myCreatedToon', page, completed],
    queryFn: () => getMyCreatedToon(axiosInstance, page, completed),
    staleTime: 1000 * 60 * 30,
  });
};
