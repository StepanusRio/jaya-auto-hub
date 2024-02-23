import { db } from "@/lib/db";
import { format } from "date-fns";
import { FC } from 'react';
import CategoryFormClient from './_components/client';
import { CategoryColumn } from './_components/columns';

interface CategoriesPageProps {
}

const CategoriesPage: FC<CategoriesPageProps> = async ({ }) => {
  const categoriesData = await db.categories.findMany();
  const formatedCategoriesData: CategoryColumn[] = categoriesData.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }))
  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoryFormClient data={formatedCategoriesData} />
      </div>
    </div>
  )
}

export default CategoriesPage;