"use client";

import LoginButton from "@/components/auth/login-button";
import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { AxeIcon, Home, LucideIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

type NavItem = {
  href: string;
  label: string;
  offset?: number;
  duration?: number;
  icon: LucideIcon;
};

const MainNavbar = () => {
  const user = useCurrentUser();
  const [open, setOpen] = useState(true);
  const items: NavItem[] = [
    {
      href: "home",
      label: "Beranda",
      icon: Home,
      offset: -100,
      duration: 500
    },
    {
      href: "layanan",
      label: "Layanan",
      icon: AxeIcon,
      offset: 30,
      duration: 500
    },
    {
      href: "tentangkami",
      label: "Tentang Kami",
      icon: Home,
      offset: 30,
      duration: 500,
    },
    {
      href: "/commingsoon",
      label: "Cek Antrian",
      icon: Home,
      offset: 30,
      duration: 500
    },
  ];
  return (
    <header>
      <nav className="py-9 px-4">
        <div className="mx-auto text-white">
          <div className="flex justify-between items-center">
            {open ? (
              <>
                <Menu
                  className="md:hidden transition-all ease-in-out delay-200 duration-700"
                  size={24}
                  onClick={() => setOpen(!open)}
                />
              </>
            ) : (
              <X onClick={() => setOpen(!open)} size={24} />
            )}
            <ul className="hidden md:mx-auto md:mr-5 md:block">
              {items?.length
                ? items.map(
                  (item, i) =>
                    item.href && (
                      <Link spy={true} smooth={true} offset={item.offset} duration={item.duration} to={item.href} className="md:px-4 hover:text-slate-300" key={i} href={item.href}>
                        {item.label}
                      </Link>
                    )
                )
                : null}
            </ul>
            {user ? (
              <UserButton />
            ) : (
              <LoginButton mode="modal" asChild>
                <Button>Login</Button>
              </LoginButton>
            )}
          </div>
        </div>
        <div
          // transition-all flex justify-center w-full ease-in-out delay-200 duration-700 fixed bottom-0 p-4
          className={
            !open
              ? "transition-all flex justify-center bottom-0 ease-in-out delay-200 duration-700 left-0 right-0 fixed p-4"
              : "hidden"
          }
        >
          <ul className="justify-between text-gray-400 text-center">
            <div className="flex bg-primary py-3 rounded-xl">
              {items?.length
                ? items.map(
                  (item, i) =>
                    item.href && (
                      <Link spy={true} smooth={true} offset={item.offset} duration={item.duration} key={i} to={item.href}>
                        <div className="flex flex-col px-2 justify-center items-center gap-1">
                          <div>
                            {React.createElement(item?.icon, {
                              size: "20",
                            })}
                          </div>
                          <span className="text-[12px]">{item.label}</span>
                        </div>
                      </Link>
                    )
                )
                : null}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
