import Header from '@/src/components/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#F7F7F7] w-[390px]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
