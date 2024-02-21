import { FC } from 'react';

import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

interface AuthHeaderProps {
  label: string
}

const AuthHeader: FC<AuthHeaderProps> = ({ label }) => {
  return (
    <div className='flex w-full flex-col gap-y-4 items-center justify-center'>
      <h1 className={cn("text-3xl font-semibold", poppins.className)}>🔐Auth</h1>
      <p className='text-muted-foreground text-sm' >{label}</p>
    </div>
  )
}

export default AuthHeader;