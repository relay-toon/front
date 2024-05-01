import { AxiosInstance } from 'axios';
import { useAxios } from '../lib/axios';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

interface InquiryData {  
  content: string;
}
const postInquiry = async (
  axiosInstance: AxiosInstance,
  inquiryData: InquiryData,
) => {
  const formData = new FormData();
  
  formData.append('content', inquiryData.content);

  const response = await axiosInstance.post('/suggestion', formData);
  return response.data;
};

export const usePostInquiry = () => {
  const { axiosInstance } = useAxios();
  const mutationFn = (inquiryData: InquiryData) =>
    postInquiry(axiosInstance, inquiryData);
  const options: UseMutationOptions<any, Error, InquiryData, unknown> = {
    mutationFn,
  };
  return useMutation(options);
};
