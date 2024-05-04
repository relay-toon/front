import axios, { AxiosInstance } from 'axios';
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

export const useGetToonInfo = (id: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['toonInfo'],
    queryFn: () => getCurrentToonInfo(axiosInstance, id),
  });
};
