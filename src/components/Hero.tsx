import React from "react";
import Button from "./Button";
import arrouUpRight from "./../assets/arrow-up-right.svg";
import users from "@/assets/users.svg";
import imgOfBannher from "@/assets/img-of-banner.png";

const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col mt-16 mb-0 max-w-full font-semibold text-teal-50 w-[90%] sm:w-1/3">
      <h1 className="text-[60px] leading-[58px] w-full">
        Aumento de imediato 98,4% das suas conversões.
      </h1>
      <div className="flex gap-2 items-center self-start mt-6 text-lg leading-5">
        <img
          loading="lazy"
          src={users}
          alt="User ratings"
          className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.48] w-[151px]"
        />
        <div className="self-stretch my-auto w-[75px]">+3.900 usuários</div>
      </div>
      <p className="mt-6 text-base font-medium leading-6 max-md:max-w-full">
        Gateway de alta conversão, segurança, saque rápido, antifraude eficiente
        e alta aprovação. Tudo que o seu negócio precisa em um só lugar.
      </p>
      <Button className="flex gap-2 justify-center items-center self-start px-6 py-3 mt-6 text-sm font-bold rounded-xl min-h-[45px] max-md:px-5">
        <span className="self-stretch my-auto">Quero criar minha conta</span>
        <img
          loading="lazy"
          src={arrouUpRight}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </Button>

      <div className="inline sm:hidden mt-10 self-end">
        <img
          loading="lazy"
          src={imgOfBannher}
          alt=""
          className="object-contain inset-0 w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
