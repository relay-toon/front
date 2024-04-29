import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface ToonData {
  title: string;
  headCount: number;
  timer: number;
}

const postToon = async (
  axiosInstance: AxiosInstance,
  toonData: ToonData,
): Promise<any> => {
  const formData = new FormData();
  formData.append('title', toonData.title);
  formData.append('headCount', toonData.headCount.toString());
  formData.append('timer', toonData.timer.toString());

  const response = await axiosInstance.post('/toons', formData);
  return response.data;
};

export const usePostToon = () => {
  const { axiosInstance } = useAxios();

  const mutationFn = (toonData: ToonData) => postToon(axiosInstance, toonData);

  const options: UseMutationOptions<any, Error, ToonData, unknown> = {
    mutationFn,
  };

  return useMutation<any, Error, ToonData, unknown>(options);
};
