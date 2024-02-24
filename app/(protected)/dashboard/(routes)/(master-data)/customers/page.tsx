import { db } from '@/lib/db';
import { FC } from 'react';
import CustomerFormClient from './_components/client';
import { CustomersColumn } from './_components/columns';

interface CustomersPageProps {
}

const CustomersPage: FC<CustomersPageProps> = async ({ }) => {
  const customersData = await db.user.findMany({
    where: {
      role: "USER"
    }
  })
  const formatedCustomersData: CustomersColumn[] = customersData.map((item) => ({
    id: item.id,
    email: item.email as string,
    name: item.name as string
  }))
  return (
    <div className='flex flex-col'>
      <div>
        <CustomerFormClient data={formatedCustomersData} />
      </div>
    </div>
  )
}

export default CustomersPage;