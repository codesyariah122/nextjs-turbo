import * as React from 'react';
import { Combobox, Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import _ from 'lodash';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { useGetAllMenus } from '@/hooks';
import { ShoppingCart } from '@/components';

interface NavbarProps {
  zIndex?: string;
  bottom?: boolean;
  bg?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | any;
  setMenuId?: React.Dispatch<React.SetStateAction<number>> | any;
}

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
];

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
  const [active, setActive] = React.useState<boolean>(false);

  const listDataMenus = React.useCallback(() => {
    const listsMenu = allMenus ?? allMenus;
    setDataMenus(listsMenu);
  }, [allMenus]);

  const getSelectedOptions = React.useCallback(() => {
    allMenus && setSelected(dataMenus?.data[0]);
  }, [allMenus, dataMenus?.data]);

  const handleQuery = (event: any) => {
    setQuery(event.target.value);
  };

  const handleSelected = (id: any) => {
    props.setIsOpen(true);
    props.setMenuId(id);
  };

  const handleKeyPress = (e: any) => {
    console.log(e.keyCode);
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
              fillRule="evenodd"
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
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <Combobox.Input
                      className="w-full border-none py-2 pl-12 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 rounded-lg"
                      displayValue={(menu: any) => menu.name}
                      onChange={(event) => handleQuery(event)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  {props.bottom && query && (
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery('')}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredMenus?.length === 0 && query !== '' ? (
                          <div className="relative cursor-pointer select-none py-2 px-4 text-gray-700">
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
                                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? 'bg-[#FF902B] text-white'
                                      : 'text-gray-900'
                                  }`
                                }
                                value={menu}
                                onClick={() => handleSelected(menu.id)}
                                // onKeyPress={(e) => handleKeyPress(e)}
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
              <Popover className="relative">
                {({ open }) => (
                  <React.Fragment>
                    <Popover.Button className="text-white bg-transparent hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0">
                      {active ? (
                        <i className="icon-cart-active"></i>
                      ) : (
                        <ShoppingCart />
                      )}
                    </Popover.Button>

                    {props.bottom && active && (
                      <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-64 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid  bg-white p-7">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="grid grid-cols-1 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                  <div className="flex items-center w-full text-white ">
                                    <div>
                                      <item.icon aria-hidden="true" />
                                    </div>
                                    <div className="flex-non w-full ml-4">
                                      <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    )}
                  </React.Fragment>
                )}
              </Popover>
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
