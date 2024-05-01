import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyParticipatedToon = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/toons/participated');
  return response.data;
};

export const useGetMyParticipatedToon = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myParticipatedToon'],
    queryFn: () => getMyParticipatedToon(axiosInstance),
    staleTime: 1000 * 60 * 30,
  });
};
