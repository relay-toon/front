import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getCurrentToonInfo = async (axiosInstance: AxiosInstance, id: string) => {
  try {
    const response = await axiosInstance.get(`/toons/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const useGetToonInfo = (id: string | string[]) => {
  const { axiosInstance } = useAxios();
  const toonId = Array.isArray(id) ? id[0] : id;
  return useQuery({
    queryKey: ['toonInfo', toonId],
    queryFn: () => getCurrentToonInfo(axiosInstance, toonId),
  });
};
