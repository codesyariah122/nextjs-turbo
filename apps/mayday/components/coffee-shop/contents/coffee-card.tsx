/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Image from 'next/image';

interface CardItemsType {
  id?: number;
  name?: string;
  img?: string;
  price?: number;
  rate?: number;
}

interface CoffeeCardArg {
  total?: number;
  items?: CardItemsType[] | string[] | any[] | any;
}

const CoffeeCard = ({ total, items }: CoffeeCardArg) => {
  const formatterNum = (val: number) => {
    const formatVal = Intl.NumberFormat('id', {
      notation: 'compact',
      maximumFractionDigits: 3,
    });
    return formatVal.format(val);
  };

  return (
    <React.Fragment>
      <div className="flex justify-start space-x-12">
        {items?.data?.map((item: any, idx: number) => (
          <div key={Math.random()}>
            <div className="w-[355px] h-[385px] bg-white border border-[#FFD28F] rounded-xl shadow dark:bg-white dark:border-[#FFD28F]">
              <div className="flex justify-center items-center">
                <div className="relative py-6">
                  <button
                    type="button"
                    className="cursor-pointer absolute top-0 left-0 mt-8 ml-2 hover:shadow-outline inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-[#2F2105] bg-white rounded-full hover:bg-[#d6d6d6f] focus:ring-4 focus:outline-none focus:ring-[#d3d3d3] dark:bg-[#FFFFFF] dark:hover:bg-[#d6d6d6] dark:focus:ring-[#dcdcdc] dark:border-[#FFFFFF]"
                  >
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold font-sans text-md">
                          {item.rate}
                        </span>
                      </div>
                      <div className="ml-2">
                        <i className="icon-star-card"></i>
                      </div>
                    </div>
                  </button>
                  <Image
                    className="rounded-lg"
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="container px-8">
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-lg font-bold tracking-tight text-[##2F2105] dark:text-[##2F2105]">
                      {item.name}
                    </h5>
                  </div>
                  <div>
                    <h6 className="text-md font-bold font-sans text-[##2F2105] dark:text-[##2F2105]">
                      {formatterNum(item.price)}
                    </h6>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-x-0 p-0 mt-6 mb-6">
                  <div>
                    <span className="bg-transparent text-[#FF902B] text-xs font-medium -mr-6 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-[#FF902B] border border-[#FF902B]">
                      Hot
                    </span>
                  </div>
                  <div>
                    <span className="bg-transparent text-[#FF902B] text-xs font-medium mr-0 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-[#FF902B] border border-[#FF902B]">
                      Cold
                    </span>
                  </div>
                  <div className="place-self-end -mt-2">
                    <button
                      type="button"
                      className="text-white bg-[#FF902B] hover:bg-[#733e0d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs text-center w-[40px] h-[40px]  dark:bg-[#FF902B] dark:hover:bg-[#733e0d] dark:focus:ring-[#FF902B] p-2"
                    >
                      <i className="icon-cart-card"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CoffeeCard;
