import { useQuery } from '@tanstack/react-query';
import { useAxios } from '../lib/axios';
import { AxiosInstance } from 'axios';

const getMyInfo = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/users/me');
  return response.data;
};
export const useGetMyInfo = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo(axiosInstance),
    staleTime: 1000 * 60 * 30,
  });
};
