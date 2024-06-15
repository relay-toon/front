import { NextResponse } from 'next/server';
import { useAuthStore } from './store/authStore';

export function middleware(req) {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;
  const { pathname } = req.nextUrl;

  // 예외 페이지들 설정
  const allowedPaths = ['/', /^\/prev-picture\/.*/, /^\/drawing\/.*/];

  // 예외 페이지가 아닌 경우 로그인 상태를 검사
  const isAllowed = allowedPaths.some((path) => {
    if (typeof path === 'string') {
      return pathname.startsWith(path);
    } else {
      return path.test(pathname);
    }
  });

  if (!isLoggedIn && !isAllowed) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!login).*)'], // 로그인 페이지 제외
};
