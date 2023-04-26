import * as React from 'react';
import Image from 'next/image';

const HeroMainMobile = () => {
  const [bottom, setBottom] = React.useState<boolean>(false);
  const [zIndex, setZIndex] = React.useState<string>('z-0');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 6) {
      setZIndex('z-0');
      setBottom(true);
    } else {
      setBottom(false);
      setZIndex('z-10');
    }
  };

  React.useEffect(() => {
    handleScroll;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex justify-center py-2">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className={`flex-none w-64 ${bottom ? 'z-20' : 'z-10'}`}>
            <Image
              src="/images/img-hero.svg"
              className="max-w-sm rounded-lg w-[330px] h-[250px]"
              alt="hero-image"
              width={650}
              height={750}
            />
          </div>
          <div className={`flex-none w-32 ${zIndex}`}>
            <Image
              src="/images/bg_img_hero-1.png"
              className="absolute left-[5rem] top-[5.5rem] object-none"
              width={250}
              height={150}
              alt={''}
            />
          </div>

          <div className="flex-shrink-0 w-full py-2 px-6">
            <h4 className="font-sans text-xl font-bold">
              Enjoy your <span className="text-[#FF902B]">coffee</span> before
              your activity
            </h4>
            <p className="text-[#7E7D7A] font-sans">
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </p>
          </div>

          <div className="flex-shrink-0 w-full py-4 px-4">
            <button
              type="button"
              className="text-white bg-[#2F2105] hover:bg-bg-[#4a3917] focus:outline-none focus:ring-4 focus:ring-[#4a3917] font-medium rounded-full text-md px-3 py-2 text-center mr-2 mb-2 dark:bg-[#2F2105] dark:hover:bg-[#4a3917] dark:focus:ring-[#4a3917] w-full"
            >
              <div className="flex justify-center space-x-6 p-2">
                <div className="font-sans">Order Now</div>
                <div className="-mt-1">
                  <Image
                    src="/icons/order-now.svg"
                    alt="Order Now"
                    width={27}
                    height={27}
                  />
                </div>
              </div>
            </button>
          </div>

          <div className="flex-shrink-0 w-full px-24">
            <button
              type="button"
              className="py-2.5 px-3 ml-2  mb-2 text-sm font-medium text-[#F4AE26] focus:outline-none bg-transparent rounded-lg border border-transparent hover:bg-transparent hover:text-[#be7113] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-transparent dark:bg-transparent dark:text-[#F4AE26] dark:border-transparent dark:hover:text-[#d98e32] dark:hover:bg-transparent hover:border-[#d98e32]"
            >
              <div className="flex justify-center p-2">
                <div className="text-lg font-sans font-extrabold">
                  More Menu
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMainMobile;
