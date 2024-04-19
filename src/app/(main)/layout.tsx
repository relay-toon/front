import Header from '@/src/components/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-[390px] bg-[#F7F7F7]">
      <Header />
      <main>{children}</main>
    </div>
  );
}
