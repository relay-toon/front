import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyParticipatedToon = async (
  axiosInstance: AxiosInstance,
  page: number,
) => {
  const response = await axiosInstance.get('/toons/participated', {
    params: {
      page,
    },
  });
  return response.data;
};

export const useGetMyParticipatedToon = (page: number) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myParticipatedToon', page],
    queryFn: () => getMyParticipatedToon(axiosInstance, page),
    staleTime: 1000 * 60 * 30,
  });
};
