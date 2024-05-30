import MyGallery from './_component/MyGallery';
import { Suspense } from 'react';

export const metadata = {
  title: '갤러리 / 릴레이툰',
  description: '갤러리 페이지입니다.',
};

export default function MyGalleryPage() {
  return (
    <Suspense>
      <MyGallery />;
    </Suspense>
  );
}
