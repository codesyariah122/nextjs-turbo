/* eslint-disable @next/next/no-img-element */
/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.FC
 */

import * as React from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navbar, HeroSection, Footer, FooterMobile } from '@/components';

import classNames from 'classnames';
import { HeroSectionMobile } from '@/components/coffee-shop/mobile';

interface Props {
  children: React.ReactNode;
  menus?: any;
  fields?: any;
  isLoading?: boolean;
  messagePage?: string;
  pageTitle?: string;
  header?: string;
  colors?: Object | string | any;
  styles?: any;
  bg?: string | any;
}

export const LandingLayout: React.FC<Props> = ({ children, ...props }) => {
  const [bottom, setBottom] = React.useState<boolean>(false);
  const [zIndex, setZIndex] = React.useState<string>('-z-10');
  const [bg, setBg] = React.useState<string>('bg-[#f6ebda]');

  const router = useRouter();
  const pathName = router.pathname;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setBottom(true);
      setZIndex('z-40');
    } else {
      setBottom(false);
      setZIndex('-z-10');
    }

    if (scrollPosition >= 1200) {
      setBg('bg-[#ffffff]');
    } else {
      setBg('bg-[#f6ebda]');
    }
  };

  React.useEffect(() => {
    console.log(isMobile);
    handleScroll;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{props?.pageTitle}</title>
      </Head>

      <main className={classNames('flex flex-col min-h-screen')}>
        <header
          className={`${bg} w-full sticky top-0 ${zIndex} ${
            bottom
              ? 'transition delay-150 duration-300 shadow-xl drop-shadow-xl'
              : 'shadow-xl'
          }`}
        >
          <Navbar zIndex={zIndex} bg={bg} bottom={bottom} />
        </header>

        <MobileView>
          <HeroSectionMobile />
        </MobileView>

        <BrowserView>
          <HeroSection />
        </BrowserView>

        {children}
      </main>
      <MobileView>
        <FooterMobile />
      </MobileView>

      <BrowserView>
        <Footer />
      </BrowserView>
    </React.Fragment>
  );
};
