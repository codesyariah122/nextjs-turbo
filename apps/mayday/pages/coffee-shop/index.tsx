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

  return (
    <LandingLayout isLoading={isLoaded} pageTitle="Cafe Street | Coffee Shop">
      {isLoaded ? (
        <LoadingSpinner />
      ) : (
        <>
          <BrowserView>
            <ServicesContent />
            <AboutUsContent />
            <AllMenu />
            <TestimoniContent />
            <NewsLetterSection />
          </BrowserView>
          <MobileView>
            <ServicesContentMobile />
            <AboutUsContentMobile />
          </MobileView>
        </>
      )}
    </LandingLayout>
  );
};

export default CoffeShop;
