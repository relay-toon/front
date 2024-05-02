'use client';

import { useEffect, useState } from 'react';

interface Props {
  children: JSX.Element | null;
}

const Client = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return children;
};

export default Client;
