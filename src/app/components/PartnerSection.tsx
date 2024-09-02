import React from "react";
import bancoDoBrasil from "./../assets/partners/banco-do-brasil.svg";
import Inter from "./../assets/partners/Inter.svg";
import bradesco from "./../assets/partners/bradesco.svg";
import cartaoElo from "./../assets/partners/cartao-elo.svg";
import mastercard from "./../assets/partners/mastercard.svg";
import pixBancoCentral from "./../assets/partners/pix-banco-central.svg";
import visa from "./../assets/partners/visa.svg";
import InfiniteScroll from "./infitiniScroller";

const partners = [
  {
    src: Inter,
    alt: "Partner logo 1"
  },
  {
    src: bradesco,
    alt: "Partner logo 2"
  },
  {
    src: mastercard,
    alt: "Partner logo 3"
  },
  {
    src: bancoDoBrasil,
    alt: "Partner logo 4"
  },
  {
    src: pixBancoCentral,
    alt: "Partner logo 5"
  },
  {
    src: visa,
    alt: "Partner logo 6"
  },
  {
    src: cartaoElo,
    alt: "Partner logo 7"
  }
];

const PartnerSection: React.FC = () => {
  return (
    <section className="mt-9 w-full">
      <h2 className="text-2xl font-semibold leading-8 text-center text-teal-50 w-full mb-6">
        Pague Safe tem os melhores parceiros e métodos de pagamento para dar
        suporte e segurança a sua operação.
      </h2>

      <InfiniteScroll speed="fast">
        <ul className="flex gap-4 sm:gap-8 items-center min-w-max">
          {[...partners, ...partners].map((partner, index) => (
            <li
              key={index}
              className="flex flex-col self-stretch my-auto rounded-none w-[4%]"
            >
              <div className="flex flex-col justify-center px-4 py-3 sm:px-10 sm:py-6 bg-teal-50 rounded-xl h-20 sm:h-24 md:h-28">
                <img
                  loading="lazy"
                  src={partner.src.src}
                  alt={partner.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </section>
  );
};

export default PartnerSection;
