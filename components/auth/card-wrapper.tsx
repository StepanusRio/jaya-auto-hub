import AuthHeader from '@/components/auth/auth-header';
import BackButton from '@/components/auth/back-button';
import Social from '@/components/auth/social-button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { FC } from 'react';

interface CardwrapperProps {
  children: React.ReactNode
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string,
  showSocial?: boolean
}

const Cardwrapper: FC<CardwrapperProps> = ({ children, backButtonHref, backButtonLabel, headerLabel, showSocial }) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}

export default Cardwrapper;