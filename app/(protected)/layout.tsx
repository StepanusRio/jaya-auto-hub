import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react';

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout: FC<ProtectedLayoutProps> = async ({ children }) => {

  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
    </>
  )
}

export default ProtectedLayout;