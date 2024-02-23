import { db } from '@/lib/db';
import { FC } from 'react';
import CategoryForm from './_components/category-form';

interface CategoriesNewProps {
  params: {
    categoriesId: string
  }
}

const CategoriesNew: FC<CategoriesNewProps> = async ({ params }) => {
  const Category = await db.categories.findUnique({
    where: {
      id: params.categoriesId
    }
  })
  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoryForm initialData={Category} />
      </div>
    </div>
  )
}

export default CategoriesNew;