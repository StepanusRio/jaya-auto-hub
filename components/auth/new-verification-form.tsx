"use client"
import { newVerification } from '@/actions/new-verification';
import Cardwrapper from '@/components/auth/card-wrapper';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import { BeatLoader, } from "react-spinners";
import FormError from '../form-error';
import FormSuccess from '../form-success';

interface NewVerificationFormProps {
}

const NewVerificationForm: FC<NewVerificationFormProps> = ({ }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
      .catch(() => {
        setError("Something went wrong")
      })
  }, [token, success, error])
  useEffect(() => {
    onSubmit();
  }, [onSubmit])
  return (
    <Cardwrapper
      headerLabel='Confirm your verification'
      backButtonHref='/login'
      backButtonLabel='Back to Login'
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && (
          <BeatLoader />
        )}
        <FormSuccess message={success} />

        <FormError message={error} />
      </div>
    </Cardwrapper>
  )
}

export default NewVerificationForm;