import { Button } from '@/components/ui/button';
import { FC } from 'react';
import {
  AiOutlineBarChart,
  AiOutlineDashboard,
  AiOutlineDatabase,
  AiOutlineHome,
  AiOutlineStock,
  AiOutlineUser
} from "react-icons/ai";
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { MdOutlineLibraryBooks } from "react-icons/md";

interface SidebarProps {
}

const Sidebar: FC<SidebarProps> = ({ }) => {
  return (
    <div className='pb-12 min-h-screen'>
      <div className='space-y-4 py-4'>
        {/* Overview */}
        <div className='px-3 py-2'>
          <h2 className='flex items-center mb-2 px-4 text-lg font-semibold'> <AiOutlineDashboard className='mr-2' /> Dashboard</h2>
          <div className='space-y-3'>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <AiOutlineHome className='w-4 h-4 mr-2' /> Overview
            </Button>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <AiOutlineBarChart className='w-4 h-4 mr-2' /> Analytical
            </Button>
          </div>
        </div>
        {/* Master Data */}
        <div className='px-3 py-2'>
          <h2 className='flex items-center mb-2 px-4 text-lg font-semibold'> <AiOutlineDatabase className='mr-2' /> Master Data</h2>
          <div className='space-y-3'>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <AiOutlineUser className='w-4 h-4 mr-2' /> Customers
            </Button>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <AiOutlineStock className='w-4 h-4 mr-2' /> Stock
            </Button>
          </div>
        </div>
        {/* Report */}
        <div className='px-3 py-2'>
          <h2 className='flex items-center mb-2 px-4 text-lg font-semibold'> <MdOutlineLibraryBooks className='mr-2' />Report</h2>
          <div className='space-y-3'>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <BsFillCartCheckFill className='w-4 h-4 mr-2' /> Sales Report
            </Button>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <BsFillCartDashFill className='w-4 h-4 mr-2' /> Purchases Report
            </Button>
            <Button variant={"ghost"} className='w-full justify-start rounded-none'>
              <GrServices className='w-4 h-4 mr-2' /> Services Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;