import { db } from '@/lib/db';
import { $Enums, User } from '@prisma/client';
import { FC } from 'react';
import CustomerForm from './_components/customer-form';

interface CustomersNewProps {
  params: {
    customersId: string
  }
}

const CustomersNew: FC<CustomersNewProps> = async ({ params }) => {
  const Customers = await db.user.findUnique({
    where: {
      id: params.customersId
    }
  })
  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CustomerForm initialData={
          Customers as User & {
            role: $Enums.UserRole;
            isTwoFactorEnabled: boolean;
            isOAuth: boolean;
          }
        } />
      </div>
    </div>
  )
}

export default CustomersNew;