import { AxiosInstance } from 'axios';
import { useAuthStore } from '../store/authStore';

export const useLogout = (axiosInstance: AxiosInstance) => {
  const handleLogout = async () => {
    try {
      const serverLogoutResponse = await axiosInstance.get('/auth/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      useAuthStore.getState().setIsLoggedIn(false);
      console.log('로그아웃 성공:', serverLogoutResponse.data);
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return handleLogout;
};
