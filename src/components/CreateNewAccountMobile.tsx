import Button from "./Button";
import whatsapp from "./../assets/whatsapp.svg";

import manMobile from "./../assets/man-mobile.svg";

const CreateNewAccountMobile: React.FC = () => {
  return (
    <section className="flex relative flex-col px-8 pt-16 pb-80 w-full mt-10 aspect-[0.571]">
      <img
        loading="lazy"
        src={manMobile}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center items-center py-8 mb-0 bg-[#10C78F]">
        <h1 className="text-3xl font-semibold leading-8 text-center">
          Quero criar minha conta na Pague Safe agora mesmo.
        </h1>
        <div className="flex flex-col justify-center items-center mt-4 text-sm font-bold gap-2">
          <Button className="flex justify-center bg-[#EFFFFA] items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
            <span className="self-stretch my-auto">Criar conta agora</span>
          </Button>
          <div>
            <span className="self-stretch hidden sm:inline my-auto font-bold">
              ou
            </span>
          </div>
          <Button className="flex gap-2 justify-center bg-[#EFFFFA] items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
            <img
              loading="lazy"
              src={whatsapp}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">Entre em contato</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreateNewAccountMobile;
