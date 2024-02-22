import RegisterForm from '@/components/auth/regsiter-form';
import { FC } from 'react';

interface RegisterPageProps {
}

const RegisterPage: FC<RegisterPageProps> = ({ }) => {
  return (
    <RegisterForm />
  )
}

export default RegisterPage;