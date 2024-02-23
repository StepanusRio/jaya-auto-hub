import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react';
import { Toaster } from 'sonner';

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout: FC<ProtectedLayoutProps> = async ({ children }) => {

  return (
    <>
      <SessionProvider>
        <Toaster />
        {children}
      </SessionProvider>
    </>
  )
}

export default ProtectedLayout;