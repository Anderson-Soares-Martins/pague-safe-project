import bgCreateAccount from './../assets/bg-create-account.svg'
import Button from './Button'
import whatsapp from './../assets/whatsapp.svg'
import man from './../assets/man.svg'

const CreateNewAccount: React.FC = () => {
  return (
    <section className="flex justify-center items-center relative mt-44 mx-auto w-full text-teal-950 self-center  ">
      <div className="w-full xl:mx-[113px] relative">
        <img
          loading="lazy"
          src={bgCreateAccount.src}
          alt="Checkout interface demonstration"
          className="object-contain w-full h-full "
        />
        <div className="absolute flex w-full h-full top-0">
          <div className="flex relative w-full px-[81px] items-center">
            <div className="flex flex-col justify-center items-start min-w-[40%] px-4 py-6 bg-[#10C78F] ">
              <h2 className="text-clamp font-semibold text-start z-10">
                Quero criar minha
                <br /> conta na Pague
                <br /> Safe agora mesmo.
              </h2>
              <div className="flex gap-4 justify-center items-center mt-4 z-10">
                <Button className="flex justify-center bg-[#EFFFFA] items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
                  <span className="self-stretch my-auto">
                    Criar conta agora
                  </span>
                </Button>
                <div>
                  <span className="self-stretch my-auto font-bold">ou</span>
                </div>
                <Button className="flex gap-2 justify-center bg-[#EFFFFA] items-center px-6 py-3.5 text-sm font-bold rounded-xl max-md:px-5">
                  <img
                    loading="lazy"
                    src={whatsapp.src}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <span className="self-stretch my-auto">Entre em contato</span>
                </Button>
              </div>
              <img
                loading="lazy"
                src={man.src}
                alt="Checkout interface demonstration"
                className="object-contain absolute  h-[120%] bottom-0 right-16 z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateNewAccount
