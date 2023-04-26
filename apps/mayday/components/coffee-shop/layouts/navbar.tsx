import * as React from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import _ from 'lodash';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { useGetAllMenus } from '@/hooks';

interface NavbarProps {
  zIndex?: string;
  bottom?: boolean;
  bg?: string;
}

const Navbar = ({ ...props }) => {
  const {
    data: allMenus,
    isLoading: isLoadingMenus,
    isError: isErrorMenus,
  } = useGetAllMenus();

  const [dataMenus, setDataMenus] = React.useState<any>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [selected, setSelected] = React.useState('');
  const [query, setQuery] = React.useState('');

  const listDataMenus = React.useCallback(() => {
    const listsMenu = allMenus ?? allMenus;
    setDataMenus(listsMenu);
  }, [allMenus]);

  const getSelectedOptions = React.useCallback(() => {
    allMenus && setSelected(dataMenus?.data[0]);
  }, [allMenus, dataMenus?.data]);

  const handleKeyUp = (val: any) => {
    if (val) {
      setSearchValue(val.target.value);
    }
  };

  const filteredMenus =
    query === ''
      ? dataMenus?.data
      : dataMenus?.data?.filter((menu: any) =>
          menu.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  React.useEffect(() => {
    listDataMenus();
    setTimeout(() => {
      getSelectedOptions();
    }, 2500);
  }, [dataMenus, getSelectedOptions, listDataMenus]);

  return (
    <nav>
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/coffee-shop" className="flex items-center 2xl:mb-0 mb-6">
          <Image
            src="/logo/logo_coffe.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={150}
            height={50}
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex md:order-2">
          <div className="flex space-x-4">
            <div>
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <Combobox.Input
                      className="w-full border-none py-2 pl-12 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 rounded-lg"
                      displayValue={(menu: any) => menu.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  {props.bottom && (
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery('')}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredMenus?.length === 0 && query !== '' ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredMenus?.map(
                            (menu: {
                              id: React.Key | null | undefined;
                              name:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<
                                    any,
                                    string | React.JSXElementConstructor<any>
                                  >
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                            }) => (
                              <Combobox.Option
                                key={menu.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? 'bg-[#FF902B] text-white'
                                      : 'text-gray-900'
                                  }`
                                }
                                value={menu}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {menu.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active
                                            ? 'text-white'
                                            : 'text-teal-600'
                                        }`}
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Combobox.Option>
                            )
                          )
                        )}
                      </Combobox.Options>
                    </Transition>
                  )}
                </div>
              </Combobox>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-transparent hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0"
              >
                <i className="icon-cart"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="items-end justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#f6ebda] md:bg-transparent rounded-lg bg-[#f6ebda] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-[#f6ebda] md:dark:bg-transparent dark:border-[#f6ebda]">
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 text-white bg-transparent rounded md:bg-transparent md:text-[#FF902B] md:p-0 dark:text-white md:dark:text-[#FF902B]`}
                aria-current="page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 text-gray-900  hover:bg-transparent bg-transparent rounded md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-[#FF902B] md:p-0 dark:text-[#1D1D1D] md:dark:hover:text-[#FF902B] dark:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Our Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4 text-gray-900 bg-transparent rounded md:bg-transparent rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-[#FF902B] md:p-0 dark:text-[#1D1D1D]md:dark:hover:text-[#FF902B] dark:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Delivery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
