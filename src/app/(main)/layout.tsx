'use client';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useAuthenticate } from '@/src/hooks/useAuthenticate';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useAuthenticate();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[24.375rem] bg-[#F7F7F7]">
        <main>{children}</main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
}
