import * as React from 'react';
import { RootLayout } from '@/layouts/RootLayout';

import { FormTodo, Spinner } from '@/components';
import { NextPageWithLayout } from '@/app';

const AddTodo: NextPageWithLayout = () => {
  const [load, setLoad] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, [load]);

  return <FormTodo />;
};
AddTodo.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <RootLayout header={'Add New Todo'} pageTitle={'Admin Page | Add New Todo'}>
      {page}
    </RootLayout>
  );
};

export default AddTodo;
