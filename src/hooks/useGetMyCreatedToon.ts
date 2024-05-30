import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyCreatedToon = async (axiosInstance: AxiosInstance, page: number) => {
  const response = await axiosInstance.get('/toons/owned', {
    params: {
      page,
    },
  });
  return response.data;
};

export const useGetMyCreatedToon = (page: number) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myCreatedToon', page],
    queryFn: () => getMyCreatedToon(axiosInstance, page),
    staleTime: 1000 * 60 * 30,
  });
};
