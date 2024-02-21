import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const cy = new Date().getFullYear();
  return (
    <footer className="hidden bg-primary text-white md:grid px-24 py-16 grid-cols-4 grid-flow-row w-full gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Akses Cepat</h1>
        <Link href="/">Beranda</Link>
        <Link href="/">Cek Antrian</Link>
        <Link href="/">Booking Antrian</Link>
        <Link href="/">Sign In</Link>
        <Link href="/">Sign Up</Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Teknologi Kami</h1>
        <Link href="/">Dry Sanding</Link>
        <Link href="/">Cat Oven</Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Layanan Kami</h1>
        <Link href="/">Service Mesin</Link>
        <Link href="/">Body Treatment</Link>
        <Link href="/">Suku Cadang</Link>
        <Link href="/">Pickup Service</Link>
        <Link href="/">Car Wash</Link>
        <Link href="/">Derek</Link>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Tentang Kami</h1>
        <Link href="/">Alamat</Link>
        <Link href="/">Cabang Kami</Link>
      </div>
      <div className="flex flex-col col-span-2 gap-8">
        <div className="bg-white w-fit p-3 rounded-lg">
          <Image
            src="/Logo.svg"
            alt="Jaya Auto"
            style={{ width: "288", height: "65" }}
            width={288}
            height={65}
          />
        </div>
        <span>© Copyright 2023 - {cy} | Jaya Auto</span>
        <div>
          <Link
            className="flex gap-2"
            target="_blank"
            href="https://instagram.com/jayaauto_semarang/"
          >
            <InstagramIcon />
            Jaya Auto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
