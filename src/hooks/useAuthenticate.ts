import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';
import Cookie from 'js-cookie';

export const useAuthenticate = () => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  useEffect(() => {
    const loggedInStatus = Cookie.get('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, [setIsLoggedIn]);
};
