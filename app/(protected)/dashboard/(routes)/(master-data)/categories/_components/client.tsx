"use client"
import Heading from '@/components/layouts/heading';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { CategoryColumn, columns } from './columns';

interface CategoryFormClientProps {
  data: CategoryColumn[];
}

const CategoryFormClient: FC<CategoryFormClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Stock Categories[0]`} description='Manage your category stocks 🎉' />
        <Button
          onClick={() =>
            router.push(`/dashboard/categories/new`)
          }
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='label' />
    </>
  )
}

export default CategoryFormClient;