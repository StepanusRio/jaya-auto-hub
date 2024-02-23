"use client"

import Heading from '@/components/layouts/heading';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CategoriesSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Categories } from '@prisma/client';
import axios from "axios";
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { z } from 'zod';

interface CategoryFormProps {
  initialData: Categories | null;
}
type CategoryFormValues = z.infer<typeof CategoriesSchema>;

const CategoryForm: FC<CategoryFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit Category" : "Add Category";
  const description = initialData
    ? "Edit Category"
    : "Add New Category 😊";
  const toastMessage = initialData
    ? "Yey, You success edit category ! 🙌"
    : "Yay, You have a new category ! 🙌";
  const action = initialData ? "Save Edit" : "Add Kategori";
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(CategoriesSchema),
    defaultValues: initialData || {
      label: ""
    }
  });
  const onSubmit = async (values: CategoryFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(`/api/dashboard/categories/${params.categoriesId}`, values)
      } else {
        await axios.post(`/api/dashboard/categories`, values)
      }
      router.push('/dashboard/categories')
      toast.success(toastMessage, {
        closeButton: true
      })
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!", {
        closeButton: true
      })
      router.push("/dashboard/categories")
      router.refresh();
    } finally {
      setLoading(false)
    }
  }
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/dashboard/categories/${params.categoriesId}`)
      router.push(`/dashboard/categories`)
      router.refresh();
      toast.success("Yey, You success delete category ! 🙌", {
        closeButton: true
      })
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!", { closeButton: true })
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex justify-between items-center">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            variant="destructive"
            disabled={loading}
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-flow-col grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nama Kategori"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default CategoryForm;