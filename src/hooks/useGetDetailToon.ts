import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getDetailToon = async (axiosInstance: AxiosInstance, id: string) => {
  try {
    const response = await axiosInstance.get(`/toons/${id}`);
    return response.data;
  } catch (error) {
    alert('툰 정보를 불러오는데 실패했습니다.');
    throw error;
  }
};

export const useGetDetailToon = (id: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['detailToon', id],
    queryFn: () => getDetailToon(axiosInstance, id),
  });
};
