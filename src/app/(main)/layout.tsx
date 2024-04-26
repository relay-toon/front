'use client';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[24.375rem] bg-[#F7F7F7]">
        <main>{children}</main>
      </div>
    </QueryClientProvider>
  );
}
