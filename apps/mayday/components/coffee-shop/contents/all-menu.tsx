import * as React from 'react';
import Image from 'next/image';

const AllMenu = () => {
  const items = [
    {
      id: 1,
      name: 'Vanilla Late',
      img: '/images/product-coffee/vanilla_late.svg',
      price: 21000,
      rate: 5,
    },
    {
      id: 2,
      name: 'Espresso',
      img: '/images/product-coffee/espresso.svg',
      price: 12000,
      rate: 5.7,
    },
    {
      id: 3,
      name: 'Hazelnut Late',
      img: '/images/product-coffee/hazelnut_late.svg',
      price: 23000,
      rate: 5.9,
    },
    {
      id: 4,
      name: 'Sandwich',
      img: '/images/all-menu/sandwich.svg',
      price: 12000,
      rate: 4.8,
      desc: 'Bread with meat and vegetables',
    },
    {
      id: 5,
      name: 'Hot Milk',
      img: '/images/all-menu/hot-milk.svg',
      price: 12000,
      rate: 4,
      desc: 'Hot milk with less sugar',
    },
    {
      id: 6,
      name: 'Coffee Ice Cream',
      img: '/images/all-menu/coffee-ice-cream.svg',
      price: 12000,
      rate: 4.5,
      desc: 'Coffee with ice cream vanilla ice cream',
    },
    {
      id: 7,
      name: 'Cappucinno',
      img: '/images/all-menu/cappucinno.svg',
      price: 12000,
      rate: 4.5,
      desc: 'Hot cappucinno with creamy latte',
    },
    {
      id: 8,
      name: 'Moccacinno',
      img: '/images/all-menu/moccacinno.svg',
      price: 12000,
      rate: 4.5,
      desc: 'Hot moccacino with brown sugar',
    },
    {
      id: 9,
      name: 'Waffle Ice Cream',
      img: '/images/all-menu/waffle-ice-cream.svg',
      price: 12000,
      rate: 4.5,
      desc: 'Waffle cruchy with soft ice cream',
    },
    {
      id: 10,
      name: 'Cake Strawberry With Vanilla Soft Ice Cream',
      img: '/images/all-menu/waffle-ice-cream.svg',
      price: 12000,
      rate: 4.5,
      desc: 'Waffle cruchy with soft ice cream',
    },
  ];

  const formatterNum = (val: number) => {
    const formatVal = Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 3,
    });
    return formatVal.format(val);
  };

  return (
    <section className="w-[1148px] h-[895px]">
      <div className="container mx-auto w-[368px] h-[53.17px]">
        <div className="grid grid-cols-1 w-full">
          <div className="col-span-12">
            <div className="w-[121px] h-[4.43px] absolute left-[575px] top-[2950.03px] rounded-xl bg-[#ff902b]" />
            <p className="w-[368px] h-[53.17px] absolute left-[350px] top-[2900px] text-[32px] font-semibold text-left text-black font-sans">
              Special menu for you
            </p>
          </div>
        </div>
        <div className="w-[1148px] h-[810px] grid grid-cols-3 gap-x-4 mt-[10rem]">
          {items.slice(0, 6).map((item: any, idx: number) => (
            <div key={Math.random()} className="mb-12">
              <div className="w-[355px] h-[385px] bg-white border border-[#FFD28F] rounded-xl shadow-xl drop-shadow-lg dark:bg-white dark:border-[#FFD28F]">
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
                  <div className="flex justify-between space-x-4 mt-6">
                    <div>
                      <p className="font-sans text-semibold text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                    <div className="place-self-end -mt-1">
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
      </div>
    </section>
  );
};

export default AllMenu;
