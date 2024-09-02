"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import PartnerSection from "../components/PartnerSection";
import CheckoutSection from "../components/CheckoutSection";
import SupportSection from "../components/SupportSection";
import PricingSection from "../components/PricingSection";
import ConversionSection from "../components/ConversionSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import banner from "../assets/banner.png";
import bannerMobile from "../assets/banner-mobile.svg";
import { FadeInSection } from "../components/FadeInSection";
import CreateNewAccount from "../components/CreateNewAccount";
import logo from "../assets/Logo.svg";
import CreateNewAccountMobile from "../components/CreateNewAccountMobile";

export default function HomePage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-[#09160F]">
      <main className="flex overflow-hidden flex-col self-stretch pb-12 sm:pb-48 w-full">
        <div className="hidden sm:inline">
          <img
            loading="lazy"
            src={banner.src}
            alt=""
            className="object-cover inset-0 w-full"
          />
        </div>
        <div className="inline sm:hidden">
          <img
            loading="lazy"
            src={bannerMobile.src}
            alt=""
            className="object-cover inset-0 w-full"
          />
        </div>
        <div className="absolute px-6 sm:px-8 md:px-[50px] lg:px-[60px] pt-14 w-full">
          <Header logo={logo.src} />
          <Hero />
        </div>
        <div className="px-6 sm:px-8 md:px-[50px] lg:px-[60px] w-full flex flex-col">
          <div className="flex flex-col justify-center items-center mt-20 sm:mt-28 max-w-full text-center text-teal-50 w-full">
            <h2 className="self-stretch text-lg font-bold leading-8 text-emerald-500 max-md:max-w-full">
              Mais sobre a Pague Safe
            </h2>
            <h3 className="mt-2 text-4xl font-semibold leading-10 w-[748px] max-md:max-w-full">
              Uma Plataforma de pagamento poderosa e exclusiva
            </h3>
            <p className="mt-2 text-sm leading-6 opacity-70 w-[660px] max-md:max-w-full">
              Com a Pague Safe, você tem tudo o que precisa para aumentar seu
              faturamento: Gateway de Alta conversão e Checkout personalizável.
            </p>
          </div>
          <PartnerSection />
          <FadeInSection>
            <CheckoutSection />
          </FadeInSection>
          <FadeInSection>
            <FeatureSection />
          </FadeInSection>
          <FadeInSection>
            <SupportSection />
          </FadeInSection>
          <FadeInSection>
            <PricingSection />
          </FadeInSection>
          <ConversionSection />
          <FadeInSection>
            <div className="hidden md:inline">
              <CreateNewAccount />
            </div>
            <div className="inline md:hidden">
              <CreateNewAccountMobile />
            </div>
          </FadeInSection>
          <FAQSection />
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
