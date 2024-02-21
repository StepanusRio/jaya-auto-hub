import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Sponsor = () => {
  return (
    <section className="bg-gray-100 py-10 flex flex-col items-center gap-5 text-center">
      <div>
        <h1 className="text-2xl mb-2 md:text-5xl">Sponsor Kami</h1>
        <p className="leading-loose text-xs md:text-lg">
          Beberapa sponsor yang terus mendukung kami
        </p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-6 md:grid-rows-1">
        <Card className="max-w-[170px] shadow-lg rounded-2xl h-24 flex items-center justify-center">
          <CardContent className="p-5">
            <Image
              src="/Bank_Mandiri_logo_2016 1.png"
              alt="Logo Bank Mandiri"
              width={133}
              height={100}
              style={{ width: "133px", height: "auto" }}
            />
          </CardContent>
        </Card>
        <Card className="max-w-[170px] shadow-lg rounded-2xl h-24 flex items-center justify-center">
          <CardContent className="p-5">
            <Image
              src="/BRI 1.png"
              alt="Logo Bank Mandiri"
              width={133}
              height={100}
              style={{ width: "133px", height: "auto" }}
            />
          </CardContent>
        </Card>
        <Card className="max-w-[170px] shadow-lg rounded-2xl h-24 flex items-center justify-center">
          <CardContent className="p-5">
            <Image
              src="/sinarmas logo 1.png"
              alt="Logo Bank Mandiri"
              width={133}
              height={100}
              style={{ width: "133px", height: "auto" }}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Sponsor;
