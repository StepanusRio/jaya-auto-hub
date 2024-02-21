import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Services = () => {
  return (
    <section className="my-10" id="layanan">
      <div className="text-center flex-col flex items-center">
        <h1 className="mb-5 text-2xl md:text-[36px]">Layanan Kami</h1>
        <p className="leading-10 max-w-[334px] text-xs md:text-[24px] md:max-w-[824px] my-10">
          Kami berkomitmen memberikan layanan unggulan dan berorientasi pada
          kepuasan pelanggan. Dengan penekanan pada Kecepatan layanan, pilihan
          terlengkap kualitas tanpa kompromi, dan harga yang terjangkau.
        </p>
        <div className="grid grid-rows-6 grid-flow-col md:grid-rows-3 xl:grid-rows-2">
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/ServiceMesin.png"
                alt="service mesin"
                width={200}
                height={200}
              />
              <CardTitle>Service Mesin</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Menyediakan layanan service mesin dengan standar kualitas
                tertinggi.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/BodyTreatment/File.svg"
                alt="Body Treatement"
                width={200}
                height={200}
              />
              <CardTitle>Body Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Memiliki fasilitas Body Repair modern untuk merestorasi
                kendaraan yang rusak.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/SukuCadang/Group 35.svg"
                alt="Suku Cadang"
                width={200}
                height={200}
              />
              <CardTitle>Suku Cadang</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Menyediakan sparepart terlengkap dari berbagai merek dan model
                kendaraan.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/PickUp/Group 36.svg"
                alt="Pickup Service"
                width={200}
                height={200}
              />
              <CardTitle>Pick-up Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Layanan yang memungkinkan kami menjemput kendaraan anda di
                lokasi yang diinginkan.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/CarWash/File.svg"
                alt="Car Wash"
                width={200}
                height={200}
              />
              <CardTitle>Car Wash</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Layanan Car Wash yang dilakukan dengan cermat dan teliti oleh
                tim terlatih kami.
              </p>
            </CardContent>
          </Card>
          <Card className="max-w-[338px] mx-5 mt-5 shadow-md">
            <CardHeader className="flex items-center gap-2">
              <Image
                style={{ height: "auto", width: "auto" }}
                src="/Derek/File.svg"
                alt="Derek"
                width={200}
                height={200}
              />
              <CardTitle>Derek</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Layanan derek untuk membantu pelanggan dalam mengevakuasi
                kendaraan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
