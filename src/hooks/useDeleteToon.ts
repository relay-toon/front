import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const deleteToon = async (
  toonId: string | string[],
  axiosInstance: AxiosInstance,
) => {
  //  배열이면 그대로, 아니면 배열로 만들어서 전달
  const ids = Array.isArray(toonId) ? toonId : [toonId]
  const deleteAll = ids.map((id) => axiosInstance.delete(`/toons/${id}`));
  const response = await Promise.all(deleteAll);

  return response.every((response) => response.status === 204);
  // if (response.status === 204) {
  //   return {};
  // }
  // return response.data;
};

export const useDeleteToon = () => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (toonId: string | string[]) => deleteToon(toonId, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('myCreatedToon'),
      });
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey.includes('myParticipantsToon'),
      });
      alert('삭제가 완료되었습니다.');
      router.push('/my-gallery');
    },
    onError: () => {
      alert('에러가 발생했습니다. 다시 시도해주세요.');
    },
  });
};
