import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

const getToonInfo = async (axiosInstance: AxiosInstance, id: string) => {
  try {
    const response = await axiosInstance.get(`/toons/${id}`);
    return response.data;
  } catch (err) {
    alert('툰 정보를 불러오는데 실패했습니다.');
    throw err;
  }
};

export const useGetToonInfo = (id: string | string[]) => {
  const { axiosInstance } = useAxios();
  const toonId = Array.isArray(id) ? id[0] : id;
  return useQuery({
    queryKey: ['toonInfo', toonId],
    queryFn: () => getToonInfo(axiosInstance, toonId),
  });
};
