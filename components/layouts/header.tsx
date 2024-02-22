import { FC } from 'react';
import UserButton from '../auth/user-button';

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <div className='py-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
      <div>
        <div>Company</div>
        <div className='font-semibold'>Jaya Auto</div>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default Header;