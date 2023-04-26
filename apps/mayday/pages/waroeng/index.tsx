/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.ComponentInstance
 */

import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FolderPlusIcon } from '@heroicons/react/24/solid';
import { RootLayout } from '@/layouts/RootLayout';
import {
  useGetMenusWaroeng,
  useGetProducts,
  useAllProductTypes,
} from '@/hooks';
import { Spinner, TableProduct } from '@/components';
import { useTranslation } from 'react-i18next';

const WaroengIndex: NextPage = () => {
  const router = useRouter();
  const { t: translation } = useTranslation();
  const {
    data: menus,
    isLoading: isLoadingMenus,
    isError: isErrorMenus,
  } = useGetMenusWaroeng();
  const {
    data: products,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useGetProducts();
  const {
    data: productTypes,
    isLoading: isLoadingProductType,
    isError: isErrorProductType,
  } = useAllProductTypes();

  // state local
  const [dataMenus, setDataMenus] = React.useState<string[]>([]);
  const [loadMenus, setLoadMenus] = React.useState<boolean>(true);
  const [loadProducts, setLoadProducts] = React.useState<boolean>(true);
  const [dataProducts, setDataProducts] = React.useState<string[]>([]);
  const [dataProductTypes, setDataProductTypes] = React.useState<string[]>([]);

  const listDataMenus = React.useCallback(() => {
    const listsMenu = menus ? menus : [];
    setDataMenus(listsMenu);
  }, [menus]);

  const listDataProducts = React.useCallback(() => {
    const listsProduct = products ? products.data : [];
    setDataProducts(listsProduct);
  }, [products]);

  const listDataProductTypes = React.useCallback(() => {
    const listsType = productTypes ? productTypes.data : [];
    setDataProductTypes(listsType);
  }, [productTypes]);

  React.useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('locale', 'id');
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoadMenus(false);
      setLoadProducts(false);
      listDataMenus();
      listDataProducts();
      listDataProductTypes();
    }, 1500);
  }, [listDataMenus, listDataProductTypes, listDataProducts, loadMenus, menus]);

  return (
    <RootLayout
      menus={dataMenus}
      header={'Waroeng Digital'}
      pageTitle={'Waroeng Digital | Home'}
      fields={{ message: 'Daftar Produk Waroeng' }}
      colors={{ bg: 'bg-indigo-300', color: 'text-white' }}
    >
      <header>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-6 mb-6"
          onClick={() => router.replace('/waroeng/add-products')}
        >
          <div className="flex space-x-2">
            <div>
              <FolderPlusIcon className="h6 w-4" />
            </div>
            <div>{translation('Add New Product')}</div>
          </div>
        </button>
      </header>

      <div className="mt-6 grid grid-cols-1">
        <div className="col-span-full">
          <TableProduct
            items={dataProducts}
            isLoading={loadProducts}
            Spinner={<Spinner />}
            productTypes={dataProductTypes}
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default WaroengIndex;
