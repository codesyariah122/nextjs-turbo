/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { useGetDetailMenu } from '@/hooks';

interface PopupMenuProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  menuId?: number;
  setMenuId?: React.Dispatch<React.SetStateAction<number>>;
}

const PopupMenu = ({ ...props }) => {
  const {
    data: detailMenu,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
  } = useGetDetailMenu(props.menuId);

  const [dataMenu, setDataMenu] = React.useState<any>([]);

  const getDetailMenu = React.useCallback(() => {
    const menu = detailMenu ?? detailMenu;
    setDataMenu(menu);
  }, [detailMenu]);

  function closeModal() {
    props.setIsOpen(false);
  }

  function openModal() {
    props.setIsOpen(true);
  }

  const formatterNum = (val: number) => {
    const formatVal = Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 3,
    });
    return formatVal.format(val);
  };

  React.useEffect(() => {
    setTimeout(() => {
      getDetailMenu();
    }, 1000);
  }, [getDetailMenu]);

  return (
    <React.Fragment>
      <Transition appear show={props.isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {dataMenu?.data?.name}
                  </Dialog.Title>
                  <div className="container mx-auto mt-12">
                    <div className="flex justify-center">
                      <div>
                        <button
                          type="button"
                          className="cursor-pointer absolute top-12 left-0 mt-8 ml-2 hover:shadow-outline inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#2F2105] bg-white rounded-full hover:bg-[#d6d6d6f] focus:ring-4 focus:outline-none focus:ring-[#d3d3d3] dark:bg-[#FFFFFF] dark:hover:bg-[#d6d6d6] dark:focus:ring-[#dcdcdc] dark:border-[#FFFFFF]"
                        >
                          <div className="flex justify-between">
                            <div>
                              <span className="font-bold font-sans text-md">
                                {dataMenu?.data?.rate}
                              </span>
                            </div>
                            <div className="ml-2">
                              <i className="icon-star-card"></i>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="flex-none w-full">
                        <img
                          src={`http://localhost:5555${dataMenu?.data?.img}`}
                          alt={dataMenu?.data?.name}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full py-6">
                      <p className="text-sm text-gray-500 font-sans">
                        {dataMenu?.data?.desc}
                      </p>
                      <span className="text-2xl">
                        {formatterNum(dataMenu?.data?.price)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Order Now !
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default PopupMenu;
