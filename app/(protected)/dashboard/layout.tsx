import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';
import { currentRole } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface DasboardLayoutProps {
  children: React.ReactNode
}

const DasboardLayout: FC<DasboardLayoutProps> = async ({ children }) => {
  const role = await currentRole();
  if (role === "USER") {
    return redirect("/shop")
  }
  return (
    <div className='border-t'>
      <div className='bg-background'>
        <div className='flex flex-row'>
          <Sidebar />
          <div className='col-span-3 overflow-auto lg:col-span-5 lg:border-l w-full'>
            <div className='px-6 py-6 lg:px-8'>
              <Header />
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