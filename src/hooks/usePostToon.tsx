import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useMutation } from '@tanstack/react-query';

const postToon = async (
  axiosInstance: AxiosInstance,
  toonData: string,
): Promise<any> => {
  const response = await axiosInstance.post('/toons', { image: toonData });
  return response.data;
};

export const usePostToon = () => {
  const { axiosInstance } = useAxios();

  const mutation = useMutation<any, Error, string, unknown>({
    mutationFn: (toonData) => postToon(axiosInstance, toonData),
    onSuccess: (data) => {
      console.log('Image posted successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to post image:', error);
    },
  });

  return mutation;
};
