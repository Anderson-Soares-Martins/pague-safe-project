"use client";

import React from "react";
import Header from "./../components/HeaderSecundary";
import Footer from "./../components/Footer";
import PolicySection from "./../components/PolicySection";

const PrivacyPolicy: React.FC = () => {
  const policySections = [
    {
      number: "01",
      title: "O que são Cookies",
      content: `
      São pequenos arquivos que ficam armazenados nos navegadores após o usuário acessar um site. Através deles é possível identificar o dispositivo de acesso utilizado. Os cookies possibilitam o reconhecimento do dispositivo e tornam possível diversas atividades durante a navegação pelo site, melhorando a experiência do usuário.`
    },
    {
      number: "02",
      title: "Por qual motivo a Pague Safe utiliza cookies?",
      content: `Utilizamos cookies para diversas funções, dentre as quais, possibilitar e facilitar a utilização das nossas Plataformas pelos usuários, diminuir a ocorrência de falhas durante o acesso às nossas Plataformas, possibilitar uma navegação personalizada pelos usuários, segmentar a publicidade que exibimos e analisar de forma estatística as preferências dos usuários.`
    },
    {
      number: "03",
      title: "Quando os Cookies são coletados e utilizados pela Pague Safe?",
      content: `A coleta e utilização de cookies ocorrerá durante a navegação em nossas Plataformas, conforme suas preferências.`
    },
    {
      number: "04",
      title: "Quais Cookies são coletados e utilizados pelo Pague Safe?",
      content: `Classificamos, de acordo com o uso, os cookies em: essenciais, desempenho, funcionalidade e publicidade.
Vejamos as características de cada um desses tipos de cookies:`,
      sections: [
        { title: "", content: `` },
        { title: "", content: `` },
        { title: "", content: `` },
        { title: "", content: `` }
      ]
    },
    {
      number: "05",
      title: "Não quero permitir a coleta de Cookies, o que posso fazer?",
      content: ``
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Aviso de cookies" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[874px] max-md:mt-10">
          <p className="mb-4 text-teal-50">
            Para a Pague Safe transparência é fundamental, por isso, preparamos
            este aviso para informar de forma clara e direta como e em que
            momentos utilizamos cookies em nossos sites, portais e plataformas
            (“Plataformas”).
          </p>
          {policySections.map((section, index) => (
            <PolicySection
              key={index}
              number={section.number}
              title={section.title}
              content={section.content}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
