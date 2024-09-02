import React from 'react'
import bgHeaderSecundary from '../assets/bg-header-secundary.png'

const HeaderSecundary: React.FC = () => {
  return (
    <header className="flex overflow-hidden relative flex-col px-20 py-16 w-full min-h-[266px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={bgHeaderSecundary.src}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-5 justify-between w-full text-sm font-bold max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c097beed4402c02214913b6e60d474137ccbaf5b06d5817abedf5065210306?placeholderIfAbsent=true&apiKey=5a9d282623aa4233aef0b702c2cfebc6"
          alt="Pague Safe Logo"
          className="object-contain shrink-0 my-auto max-w-full aspect-[6.13] w-[196px]"
        />
        <nav className="flex gap-2 items-center">
          <a
            href="#checkout"
            className="gap-2 self-stretch px-6 py-3.5 my-auto text-teal-50 rounded-xl border border-teal-400 border-solid max-md:px-5"
          >
            Acessar Checkout
          </a>
          <a
            href="#gateway"
            className="gap-2 self-stretch px-6 py-3.5 my-auto bg-teal-400 rounded-xl text-teal-950 max-md:px-5"
          >
            Acessar Gateway
          </a>
        </nav>
      </div>
      <h1 className="relative self-center mt-20 text-3xl font-semibold leading-loose text-center text-teal-50 max-md:mt-10">
        Política de privacidade
      </h1>
    </header>
  )
}

export default HeaderSecundary
