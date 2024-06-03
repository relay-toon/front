import { AxiosInstance } from 'axios';
import { Toon } from '../types/Toon';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const putToon = async (toonData: Toon, axiosInstance: AxiosInstance) => {
  const formData = new FormData();
  if (toonData.name) {
    formData.append('name', toonData.name);
  }
  if (toonData.userId) {
    formData.append('userId', toonData.userId);
  }
  if (toonData.image) {
    formData.append('image', toonData.image);
  }
  const response = await axiosInstance.put(`/toons/${toonData.id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const usePutToon = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (toonData: Toon) => putToon(toonData, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myParticipatedToon'] });
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
