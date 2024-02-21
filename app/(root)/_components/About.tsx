import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section className="my-10 w-full h-full" id="tentangkami">
      <div className="grid gap-10 md:mx-20">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly md:text-start items-center text-center">
          <Image
            className="px-5 md:w-[504px]"
            src="/About1.jpg"
            alt="About Me"
            width={337}
            height={312}
          />{" "}
          <div>
            <h1 className="my-5 md:text-[56px] md:w-max-[415px]">
              Cari Tahu Tentang Kami
            </h1>
            <p className="leading-loose md:font-normal md:text-base md:max-w-[415px] text-xs text-zinc-500 max-w-[336px] mb-7">
              Sejak tahun 2000, kami telah menjadi mitra setia bagi ribuan
              pelanggan dengan menyediakan layanan terbaik di bidang otomotif.
              Dengan berbagai bengkel yang sudah terkenal dan tersebar di
              beberapa daerah di Jawa Tengah, serta lokasi strategis di jalan
              Raya Randugarut KM. 14, akses dan pelayanan terbaik bagi anda.
            </p>
            <Button size="lg" className="px-20">
              Cari Tahu
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly md:text-end items-center text-center">
          <Image
            className="px-5 md:w-[504px]"
            src="/About2.jpg"
            alt="About Me"
            width={328}
            height={313}
          />{" "}
          <div className="md:flex md:flex-col md:items-end">
            <h1 className="my-5 md:text-[56px] md:w-max-[415px]">
              Jaya Auto One Stop Service
            </h1>
            <p className="leading-loose text-xs md:font-normal md:text-base md:max-w-[415px] text-zinc-500 max-w-[336px] mb-7">
              Jaya Auto menawarkan one stop service yang lengkap, mulai dari
              servis mesin, body repair, hingga penyediaan sparepart terlengkap
              dari berbagai merek. Kualitas tanpa kompromi, harga terjangkau,
              dan kendaraan anda beroprasi dengan optimal. Bersama Jaya Auto,
              anda akan merasakan pengalaman otomotif yang tak tertandingi dan
              merasa tenang mengemudi kendaraan anda.
            </p>
            <Button size="lg" className="px-20">
              Menuju Lokasi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
