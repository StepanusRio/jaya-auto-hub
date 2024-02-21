import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MainNavbar from "./Navbar";

const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat w-full h-full" id="home">
      <MainNavbar />
      <div className="flex flex-col items-center md:items-start text-center text-white pb-20 md:text-left md:mx-20">
        <h1 className="text-[42px] my-5 max-w-[374px] md:text-[56px] md:max-w-[665px]">
          Selamat Datang Di Jaya Auto
        </h1>
        <p className="text-[12px] max-w-[336px] mx-5 leading-9 md:mx-0 md:text-base md:max-w-[665px]">
          Apakah anda mencari bengkel otomotif yang dapat diandalkan untuk
          merawat, memperbaiki, atau memberikan sentuhan istimewa pada kendaraan
          anda? Kami adalah pilihan terbaik yang siap memenuhi segala kebutuhan
          anda.
        </p>
        <Link
          href="/commingsoon"
          className="flex py-4 px-10 text-sm bg-primary rounded-lg mt-4 max-w-[230px]"
        >
          <span>Booking Service</span>
          <ArrowRight className="ml-2" size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
