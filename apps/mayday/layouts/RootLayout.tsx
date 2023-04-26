/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.FC
 */
import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Spinner } from '@/components';
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
}

export const RootLayout: React.FC<Props> = ({ children, ...props }) => {
  let current = 'Welcome in Admin Panel';
  const router = useRouter();
  const pathName = router.pathname;

  if (props.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Head>
        <title>{props?.pageTitle}</title>
      </Head>

      <main className="flex flex-col min-h-screen">
        <header
          className={classNames(
            `grid grid-cols-1 gap-2 px-24 py-24 ${props.colors?.bg} ${props.colors?.color}`
          )}
        >
          <div className="col-span-full place-self-center">
            <h1 className="text-4xl font-bold">{props.header}</h1>
          </div>
        </header>
        <div className="overflow-x-hidden flex justify-start place-content-start space-x-36 px-12 bg-blue-50">
          <div className="flex-none w-6 sticky top-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-12">
                <ul className="mt-6 sticky top-0">
                  {(props.menus &&
                    props.menus?.data?.map((menu: any) => (
                      <li
                        onClick={() => router.push(`${menu.permalink}`)}
                        className={`${
                          menu.permalink === pathName
                            ? 'text-blue-600 hover:text-blue-800 hover:underline'
                            : 'text-black'
                        } mb-4 text-1xl cursor-pointer`}
                        key={menu.id}
                      >
                        {menu.name}
                      </li>
                    ))) || (
                    <div className="flex justify-center mt-12">
                      <div>
                        <Link href="/admin">
                          <Spinner />
                        </Link>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="shrink min-w-full bg-neutral-50 min-h-screen p-6">
            <div className="grid grid-cols-1">
              <div className="col-span-full">
                <h1 className="text-2xl font-semibold capitalize">
                  {(props.fields &&
                    (props.fields.message ? props.fields.message : current)) ||
                    current}
                </h1>
              </div>
              <div className="col-span-full p-6 w-90">{children}</div>
            </div>
          </div>
        </div>
        <footer className="mt-auto bg-orange-400 w-full">
          <div className="grid grid-cols-3 gap-x-4">
            <div className="place-self-center">
              <h2>Footer Store Page</h2>
            </div>
            <div className="place-self-center">Sitemap Link</div>
            <div className="place-self-center">Social Icon</div>
          </div>
        </footer>
      </main>
    </>
  );
};
