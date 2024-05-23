import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getLock = async (toonId: string, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get(`toons/${toonId}/lock`);
  return response.data;
};

export const useGetLock = (toonId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['getLock', toonId],
    queryFn: () => getLock(toonId, axiosInstance),
  });
};
