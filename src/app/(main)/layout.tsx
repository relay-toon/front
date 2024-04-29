'use client';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAuthStore } from '@/src/store/authStore';
import Cookie from 'js-cookie';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  useEffect(() => {
    const loggedInStatus = Cookie.get('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, [setIsLoggedIn]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[24.375rem] bg-[#F7F7F7]">
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  );
}
