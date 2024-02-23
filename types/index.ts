import { LibraryBig } from 'lucide-react';
import { AiOutlineBarChart, AiOutlineDashboard, AiOutlineDatabase, AiOutlineHome, AiOutlineStock, AiOutlineUser } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import { GrServices } from 'react-icons/gr';
import { MdOutlineLibraryBooks } from "react-icons/md";
export const ROUTER_ADMIN_NAVBAR = [
  {
    head: "Dashboard",
    headIcon: AiOutlineDashboard,
    links: [
      {
        linksLabel: "Overview",
        linksIcon: AiOutlineHome,
        href: "/dashboard"
      },
      {
        linksLabel: "Analytical",
        linksIcon: AiOutlineBarChart,
        href: "/dashboard/analytical"
      }
    ]
  },
  {
    head: "Master Data",
    headIcon: AiOutlineDatabase,
    links: [
      {
        linksLabel: "Customers",
        linksIcon: AiOutlineUser,
        href: "/dashboard/customers"
      },
      {
        linksLabel: "Category",
        linksIcon: LibraryBig,
        href: "/dashboard/categories"
      },
      {
        linksLabel: "Stock",
        linksIcon: AiOutlineStock,
        href: "/dashboard/stocks"
      },
    ]
  },
  {
    head: "Report",
    headIcon: MdOutlineLibraryBooks,
    links: [
      {
        linksLabel: "Sales Report",
        linksIcon: BsFillCartCheckFill,
        href: "/dashboard/sales-report"
      },
      {
        linksLabel: "Purchases Report",
        linksIcon: BsFillCartDashFill,
        href: "/dashboard/stock"
      },
      {
        linksLabel: "Services Report",
        linksIcon: GrServices,
        href: "/dashboard/stock"
      }
    ]
  },
]