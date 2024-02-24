import React, { FC } from 'react';
import { Toaster } from 'sonner';

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout: FC<ProtectedLayoutProps> = async ({ children }) => {

  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export default ProtectedLayout;