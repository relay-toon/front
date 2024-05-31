import type { Metadata } from 'next';
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: '릴레이툰',
  description:
    '릴레이툰에서 다양한 사용자와 함께 그림을 이어 그려보세요. 창의력을 발휘하고 재미있는 스토리를 완성하세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
