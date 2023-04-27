import * as React from 'react';
import { NextPage } from 'next';
import { LandingLayout } from '@/layouts';
import {
  AboutUsContent,
  AllMenu,
  ServicesContent,
  TestimoniContent,
  NewsLetterSection,
  LoadingSpinner,
  ServicesContentMobile,
  AboutUsContentMobile,
} from '@/components';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const CoffeShop: NextPage = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(true);
  const [bg, setBg] = React.useState<string>('');

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2500);
  }, [isLoaded]);

  const scrollToPanelHero = () => {
    const elem = isMobile
      ? (document.querySelector('#panel-hero-section') as HTMLDivElement | null)
      : (document.querySelector(
          '#panel-hero-section'
        ) as HTMLDivElement | null);
    // scrollTo?.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => {
      window.scrollTo({
        top: elem?.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    }, 1500);
  };

  React.useEffect(() => {
    isLoaded && scrollToPanelHero();
  }, [isLoaded]);

  return (
    <LandingLayout isLoading={isLoaded} pageTitle="Cafe Street | Coffee Shop">
      {isLoaded ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          <BrowserView>
            <ServicesContent />
            <AboutUsContent />
            <AllMenu setIsLoaded={setIsLoaded} isLoaded={isLoaded} />
            <TestimoniContent />
            <NewsLetterSection />
          </BrowserView>
          <MobileView>
            <ServicesContentMobile />
            <AboutUsContentMobile />
          </MobileView>
        </React.Fragment>
      )}
    </LandingLayout>
  );
};

export default CoffeShop;
