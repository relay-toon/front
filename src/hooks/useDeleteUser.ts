import { AxiosInstance } from 'axios';
import { useAuthStore } from '../store/authStore';

export const useDeleteUser = (axiosInstance: AxiosInstance) => {
  const handleDelete = async () => {
    try {
      const serverDeleteUserResponse = await axiosInstance.delete('/users/me', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      useAuthStore.getState().setIsLoggedIn(false);
      console.log('user delete success:', serverDeleteUserResponse.data);
      window.location.href = '/';
    } catch (error) {
      console.error('user delete failed:', error);
    }
  };

  return handleDelete;
};
