/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: React.ComponentInstance
 */

import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FolderPlusIcon } from '@heroicons/react/24/solid';
import { RootLayout } from '@/layouts/RootLayout';
import { useGetTodos, useGetMenus, useGetTodoStatus } from '@/hooks';
import { CardTodo, Spinner } from '@/components';
import { useTranslation } from 'react-i18next';

const AdminIndex: NextPage = () => {
  const router = useRouter();
  const { t: translation } = useTranslation();
  const {
    data: dataMenus,
    isLoading: isLoadingMenus,
    isError: isErrorMenus,
  } = useGetMenus();

  const {
    data: dataTodos,
    isLoading: isLoadingTodos,
    isFetching: isFetchingTodos,
    isError: isErrorTodos,
    status: statusTodos,
  } = useGetTodos();

  const {
    data: dataTodoStatus,
    isLoading: isLoadingTodoStatus,
    isFetching: isFetchingTodoStatus,
    isError: isErrorTodoStatus,
    status: statusTodoStatus,
  } = useGetTodoStatus('/todos-status');
  const [todos, setTodos] = React.useState<Object[]>([]);
  const [load, setLoad] = React.useState<boolean>(true);

  const handleRedirect = (val: string) => {
    router.push(`/admin/${val}`);
  };

  React.useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('locale', 'id');
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      setTodos(dataTodos);
    }, 1500);
  }, [dataTodos, load, todos]);

  return (
    <RootLayout
      menus={dataMenus}
      fields={dataTodos}
      colors={{ bg: 'bg-blue-700', color: 'text-white' }}
      header={'Header Admin Page'}
      pageTitle={'Admin Page | Home'}
    >
      <header>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-6 mb-6"
          onClick={() => handleRedirect('/add-todo')}
        >
          <div className="flex space-x-2">
            <div>
              <FolderPlusIcon className="h6 w-4" />
            </div>
            <div>{translation('Add New Todo')}</div>
          </div>
        </button>
      </header>
      <CardTodo
        todos={todos}
        loading={isLoadingTodos}
        todoStatus={dataTodoStatus}
      />
    </RootLayout>
  );
};

export default AdminIndex;
