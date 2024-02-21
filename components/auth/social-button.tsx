"use client"
import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SocialButtonProps {
}

const SocialButton: FC<SocialButtonProps> = ({ }) => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button variant={"outline"} className='w-full' size={"lg"} onClick={() => onClick("google")}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button className='w-full' size={"lg"} onClick={() => onClick("github")}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}

export default SocialButton;