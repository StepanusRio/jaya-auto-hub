"use client"
import Heading from '@/components/layouts/heading';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { MdDangerous } from 'react-icons/md';
import { CustomersColumn, columns } from './columns';

interface CustomerFormClientProps {
  data: CustomersColumn[];
}

const CustomerFormClient: FC<CustomerFormClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Customers [ ${data.length} ]`} description='Manage your customers data 🎉' />
        <div>
          <Button disabled
            onClick={() =>
              router.push(`/dashboard/customers/new`)
            }
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </Button>
          <p className='flex text-sm items-center justify-center gap-2 text-destructive'> <MdDangerous /> Undermaintenance</p>
        </div>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
    </>
  )
}

export default CustomerFormClient;