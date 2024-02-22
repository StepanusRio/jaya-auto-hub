import React, { FC } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='flex justify-center items-center relative top-10'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout;