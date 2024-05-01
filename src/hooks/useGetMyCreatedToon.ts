import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyCreatedToon = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/toons/owned');
  return response.data;
};

export const useGetMyCreatedToon = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myCreatedToon'],
    queryFn: () => getMyCreatedToon(axiosInstance),
    staleTime: 1000 * 60 * 30,
  });
};
