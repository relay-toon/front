import Header from '@/src/components/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
