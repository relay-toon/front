import type { Metadata } from 'next';
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

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
  const canonicalUrl = 'https://relaytoon.site';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: canonicalUrl,
    name: '릴레이툰',
    description: metadata.description,
    inLanguage: 'ko',
  };

  return (
    <html lang="ko">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="릴레이툰, 그림, 창의력, 스토리, relaytoon"
        />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
