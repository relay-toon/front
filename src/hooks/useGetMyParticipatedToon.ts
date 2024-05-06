import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getMyParticipatedToon = async (
  axiosInstance: AxiosInstance,
  page: number,
  completed: boolean,
) => {
  const response = await axiosInstance.get('/toons/participated', {
    params: {
      page,
      completed,
    },
  });
  return response.data;
};

export const useGetMyParticipatedToon = (page: number, completed: boolean) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myParticipatedToon', page],
    queryFn: () => getMyParticipatedToon(axiosInstance, page, completed),
    staleTime: 1000 * 60 * 30,
  });
};
