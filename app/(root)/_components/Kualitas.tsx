import { BadgeDollarSign, CheckCircle, HelpingHand, Timer } from "lucide-react";

const Kualitas = () => {
  return (
    <section className="w-full bg-slate-900 h-full my-10" id="tentangkami">
      <div className="flex items-center flex-col gap-10 text-white text-center">
        <h1 className="mt-10 max-w-[374px] md:max-w-[836px] md:text-5xl">
          Our Values
        </h1>
        <p className="max-w-[374px] md:max-w-[836px] md:text-lg">
          Tekad perusahaan untuk menjadi mitra terpercaya dan memastikan
          kepuasan pelanggan serta membangun hubungan yang kuat dengan seluruh
          mitra bisnis dan stakeholders
        </p>
        <div className="grid grid-rows-4 grid-flow-col mb-10 gap-5 text-lg leading-[31px] md:grid-rows-1 md:max-w-[692px]">
          <div className="flex flex-col items-center gap-4 md:mr-8">
            <Timer size={24} />
            Cepat
          </div>
          <div className="flex flex-col items-center gap-4 md:mr-8">
            <CheckCircle size={24} />
            Lengkap
          </div>
          <div className="flex flex-col items-center gap-4 md:mr-8">
            <HelpingHand size={24} />
            Berkualitas
          </div>
          <div className="flex flex-col items-center gap-4 md:mr-8">
            <BadgeDollarSign size={24} />
            Terjangkau
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kualitas;
