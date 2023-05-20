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
import { CarouselHeader, Navbar, BottomNav } from '@components/dku-web';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

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

export const AppLayout: React.FC<Props> = ({ children, ...props }) => {
  const [bottom, setBottom] = React.useState<boolean>(false);
  const [zIndex, setZIndex] = React.useState<string>('-z-10');
  const [bg, setBg] = React.useState<string>('bg-[#f6ebda]');
  let [isOpen, setIsOpen] = React.useState<boolean>(false);
  let [menuId, setMenuId] = React.useState<number>(0);

  const { t, i18n } = useTranslation();

  const carouselItems = [
    {
      id: 1,
      imageUrl: '/dku-asset/images/Banner3.jpeg',
    },
    {
      id: 2,
      imageUrl: '/dku-asset/images/Banner2.png',
    },
    {
      id: 3,
      imageUrl: '/dku-asset/images/Banner1.svg',
    },
  ];

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

      <main
        className={classNames('container mx-auto max-w-[500px]')}
        style={{ maxWidth: '500px' }}
      >
        <div className="grid justify-items-center">
          {bottom && (
            <header
              className={`w-full sticky top-0 ${zIndex} ${
                bottom
                  ? 'transition delay-250 duration-300 shadow-2xl drop-shadow-2xl'
                  : 'shadow-xl'
              }`}
            >
              <Navbar />
            </header>
          )}
          <section className="py-2">
            <CarouselHeader items={carouselItems} />
          </section>
          <section className="py-2 place-self-start">{children}</section>
        </div>

        <BottomNav />
      </main>
    </React.Fragment>
  );
};
