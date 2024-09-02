import React from "react";
import Button from "./Button";
import arrouUpRight from "./../assets/arrow-up-right.svg";

import celular from "./../assets/imagem-celular-2.svg";
import bgSound from "./../assets/bg-sound-2.svg";
import bgGreen from "./../assets/bg-green-2.svg";
import { SlideOutSection } from "./SlideOutSection";

const SupportSection: React.FC = () => {
  return (
    <section className="mt-24 w-full">
      <div className="flex gap-5 flex-col-reverse lg:flex-row">
        <div className="flex w-full lg:w-[57%] justify-center items-center">
          <div className="w-full h-fit relative flex">
            <div className="w-full h-fit relative overflow-hidden rounded-[40px]">
              <img
                loading="lazy"
                src={bgSound}
                alt="Checkout interface demonstration"
                className="object-contain grow w-full rounded-none absolute"
              />
              <SlideOutSection>
                <img
                  loading="lazy"
                  src={bgGreen}
                  alt="Checkout interface demonstration"
                  className="object-contain grow w-full rounded-none "
                />
              </SlideOutSection>{" "}
              <img
                loading="lazy"
                src={celular}
                alt="Checkout interface demonstration"
                className="object-contain grow w-[90%] h-[90%] rounded-none absolute bottom-0 left-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[43%]">
          <div className="flex flex-col justify-center self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full text-base leading-6 text-teal-50 max-md:max-w-full">
              <h2 className="text-lg font-bold leading-8 text-emerald-500 max-md:max-w-full">
                Apoio técnico
              </h2>
              <h3 className="mt-2 text-4xl font-semibold leading-10 max-md:max-w-full">
                Suporte especializado para sua operação
              </h3>
              <p className="mt-2 opacity-70 max-md:max-w-full">
                A equipe da Pague Safe está disposta e atenta 24 horas por dia,
                para ajudar sua operação a crescer cada vez mais!
              </p>
              <ul className="mt-2 opacity-70 max-md:max-w-full list-disc list-inside">
                <li>
                  Time de especialistas dedicados ao sucesso da sua operação.
                </li>
                <li>
                  Diversos artigos para auxiliar sua jornada na Pague Safe.
                </li>
                <li>Equipe especializada pronta para atender suas dúvidas.</li>
              </ul>
            </div>
            <Button className="flex gap-2 justify-center items-center self-start px-6 py-3 mt-6 text-sm font-bold rounded-xl min-h-[45px] max-md:px-5">
              <span className="self-stretch my-auto">
                Quero criar minha conta
              </span>
              <img
                loading="lazy"
                src={arrouUpRight}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
