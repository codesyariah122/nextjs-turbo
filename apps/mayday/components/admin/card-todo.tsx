import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Spinner } from '@components';
import { useTranslation } from 'react-i18next';

type TodoStatusType = {
  id: number;
  status_code: number;
  name: string;
};

type DataKeyType = {
  data?: string | undefined;
  [key: string]: any;
};

type TodosType = {
  ref?: React.LegacyRef<HTMLAnchorElement> | undefined;
  data?: string | undefined;
  [key: string]: any;
  id?: number;
  todo_name?: string | undefined;
  percentage?: number | undefined;
  type?: number | undefined;
  description?: string;
  created_at?: string;
  last_reviewed_by?: string;
  date_added?: string;
  date_modified?: string;
  status?: number;
};

type CardType = {
  todos: Array<TodosType>;
  todoStatus?: Array<TodoStatusType>;
  loading: boolean;
};

const CardTodo = (props: CardType) => {
  const { t: translation } = useTranslation();
  const { todos, loading, todoStatus }: TodosType = props;
  const [statusCode, setStatucCode] = React.useState<string[]>([]);
  const [statusColor, setStatusColor] = React.useState<string>('blue');

  // const colorRef = React.useRef<HTMLAnchorElement>(null);

  const renderStatus = (value: any) => {
    const statusTodo =
      (todoStatus &&
        todoStatus?.data
          ?.map((status: any) => status)
          .filter((code: any) => code.status_code === value)) ||
      [];
    return (statusTodo && statusTodo?.map((todo: any) => todo.name)) || [];
  };

  const renderColorClass = (status: any) => {
    return classNames(
      'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none',
      {
        'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800':
          status === 1,
        'bg-orange-500 hover:bg-orange-600 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800':
          status === 2,
        'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800':
          status === 3,
        'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800':
          status === 4 || undefined,
      }
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
      {(todos &&
        todos?.data?.map((todo: TodosType, index: number) => (
          <div key={Math.random()} className="col-span sm:mb-2">
            <div className="max-w-sm lg:w-9/12 sm:w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {todo.todo_name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {todo.description}
              </p>
              <a href="#" className={renderColorClass(todo.status)}>
                {renderStatus(todo.status)}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))) || (
        <div className="flex justify-center">
          <div className="col-span-fu">
            <Spinner />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTodo;
