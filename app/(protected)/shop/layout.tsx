import Header from '@/components/layouts/header';
import { currentRole } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface DasboardLayoutProps {
  children: React.ReactNode
}

const DasboardLayout: FC<DasboardLayoutProps> = async ({ children }) => {
  const role = await currentRole();
  if (role === "ADMIN") {
    return redirect("/dashboard")
  }
  return (
    <div className='border-t'>
      <div className='bg-background'>
        <div className='flex flex-row'>
          <div className='hidden lg:block w-[18%]'>
            SIDEBAR
          </div>
          <div className='col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]'>
            <div className='px-6 py-6 lg:px-8'>
              <div>
                <Header />
              </div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DasboardLayout;