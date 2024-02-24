"use client"

import Heading from '@/components/layouts/heading';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CustomerSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { $Enums, User } from '@prisma/client';
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface CustomerFormProps {
  initialData: User & {
    role: $Enums.UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  }
  | undefined;
}
type CustomerFormValues = z.infer<typeof CustomerSchema>;

const CustomerForm: FC<CustomerFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit Customers" : "Add Customers";
  const description = initialData
    ? "Edit Customers"
    : "Add New Customers 😊";
  const toastMessage = initialData
    ? "Yey, You success edit customers ! 🙌"
    : "Yay, You have a new customers ! 🙌";
  const action = initialData ? "Save Edit" : "Add Customers";
  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      name: initialData?.name || undefined,
      email: initialData?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: initialData?.role || undefined,
      isTwoFactorEnabled: initialData?.isTwoFactorEnabled || undefined
    }
  });
  const onSubmit = async (values: CustomerFormValues) => {
    console.log(values);
    // TODO: API CUSTOMERS POST PATCH
  }
  const onDelete = async () => {
    console.log("DELETE")
    // TODO: API CUSTOMERS DELETE
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User Name ...."
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

export default CustomerForm;