/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Image from 'next/image';
import { CoffeeCard } from '@components';

const sampleItems = [
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
];

const PanelHeroSection = () => {
  return (
    <div className="grid grid-cols-1 place-content-center w-[68px] h-[558px]">
      <div className="w-[1268px] h-[367px]">
        <svg
          width={1268}
          height={367}
          viewBox="0 0 1268 364"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[300.5px] top-[950.5px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 64.9359C0 28.0895 31.0343 -1.14672 67.8151 1.04973L1207.82 69.1273C1241.62 71.146 1268 99.149 1268 133.014V300C1268 335.346 1239.35 364 1204 364H64C28.6538 364 0 335.346 0 300V64.9359Z"
            fill="#F9D9AA"
          />
        </svg>

        <div
          className="grid grid-cols-1 justify-items-center -ml-24 mt-24"
          style={{ filter: 'drop-shadow(10px 10px 32px rgba(0,0,0,0.25))' }}
        >
          <div className="place-self-start">
            <Image
              src="/images/bg_img_hero.svg"
              width="1200"
              height="1200"
              alt="bg-panel"
              className="w-[569px] h-[394px] absolute object-none -ml-[3rem] -mt-[13rem] transform rotate-[350deg]"
            />
          </div>
          <div
            className="absolute"
            style={{ filter: 'drop-shadow(10px 10px 32px rgba(0,0,0,0.50))' }}
          >
            <CoffeeCard total={3} items={sampleItems} />
          </div>
        </div>

        <div className="w-[313px] h-[54px]">
          <p className="w-[313px] h-[54px] absolute left-[330.5px] top-[750px] text-[32px] font-semibold text-left text-black">
            Popular Now
          </p>
          <div className="w-[74px] h-1 absolute left-[28.8rem] top-[795px] rounded-xl bg-[#ff902b]" />
        </div>
      </div>
    </div>
  );
};

export default PanelHeroSection;
