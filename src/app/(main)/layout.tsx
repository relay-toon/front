import Header from '@/src/components/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ backgroundColor: `rgb(246,246,246)` }}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
