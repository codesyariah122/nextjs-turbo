/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useTable } from 'react-table';

interface TableProductProps {
  name: string;
  stock: number;
  harga: number;
  type: number;
}

interface ProductTypeProps {
  id?: number;
  name?: string;
  permalink?: string;
}

interface TableProductParams {
  items: Array<TableProductProps> | string[];
  isLoading: boolean;
  Spinner: React.ReactNode;
  // setProductId?: React.Dispatch<React.SetStateAction<number>> | any;
  productTypes?: Array<ProductTypeProps> | string[];
}

const TableProduct = ({
  items,
  isLoading,
  Spinner,
  productTypes,
}: TableProductParams) => {
  const data: any = React.useMemo(() => items, [items]);

  const mapingProductType = React.useCallback(
    (type: number) => {
      const listTypes = productTypes
        ?.map((type: any) => type)
        .filter((t: any) => t.id === type)[0];
      return (listTypes?.name && `${listTypes?.icon}`) || '';
    },
    [productTypes]
  );

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Product Name',
        accessor: 'name',
        Cell: ({ row }: any) => <span>{row.original.name}</span>,
      },
      {
        Header: 'Stock',
        accessor: 'stock',
      },
      {
        Header: 'Price',
        accessor: 'harga',
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell: ({ row }: any) => (
          // <div
          //   dangerouslySetInnerHTML={{
          //     __html: mapingProductType(row.original.type),
          //   }}
          // ></div>
          <img
            src={`http://localhost:5555${mapingProductType(row.original.type)}`}
            alt={row.original.type}
            width={50}
            height={'auto'}
          />
        ),
      },
    ],
    [mapingProductType]
  );

  const tableProductsProps = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableProductsProps;

  return (
    <div className="flex justify-start w-[80%]">
      <table
        {...tableProductsProps}
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="px-6 py-3"
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {isLoading && (
          <tbody className="py-12 px-12 mb-16 mt-16 w-full">
            <tr>
              <th colSpan={12} className="max-w-screen-lg border-1">
                <div className="flex place-content-center items-center justify-center mt-6">
                  {Spinner}
                </div>
              </th>
            </tr>
          </tbody>
        )}
        <tbody {...getTableBodyProps()}>
          {rows &&
            rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()} className="px-6 py-4">
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
