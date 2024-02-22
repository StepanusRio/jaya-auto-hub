"use client"
import LogoutButton from '@/components/auth/logout-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/hooks/use-current-user';
import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';

interface UserButtonProps {
}

const UserButton: FC<UserButtonProps> = ({ }) => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-3'>
        <p>{user?.name}</p>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className='bg-sky-500'>
            <FaUser className='text-white' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='end'>
        {/* User Settings Preferences */}
        <DropdownMenuItem>
          <Link href="/settings" className='flex'>
            <GrUserSettings className='h-4 w-4 mr-2' /> Settings
          </Link>
        </DropdownMenuItem>
        {/* Log out Button */}
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className='h-4 w-4 mr-2' /> Log out
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton;