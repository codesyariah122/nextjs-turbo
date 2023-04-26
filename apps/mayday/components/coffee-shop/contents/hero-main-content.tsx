import * as React from 'react';
import Image from 'next/image';

const HeroMainContent = () => {
  const [bottom, setBottom] = React.useState<boolean>(false);
  const [zIndex, setZIndex] = React.useState<string>('z-6');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setZIndex('z-0');
      setBottom(true);
    } else {
      setBottom(false);
      setZIndex('z-6');
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
    <div className="flex justify-between space-x-36">
      <div className="flex-none w-[489px]">
        <h4 className="font-sans text-xl font-bold">
          Enjoy your <span className="text-[#FF902B]">coffee</span> before your
          activity
        </h4>
        <p className="text-[#7E7D7A] font-sans">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="grid grid-cols-2 gap-x-12 mt-6">
          <div>
            <button
              type="button"
              className="text-white bg-[#2F2105] hover:bg-bg-[#4a3917] focus:outline-none focus:ring-4 focus:ring-[#4a3917] font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#2F2105] dark:hover:bg-[#4a3917] dark:focus:ring-[#4a3917]"
            >
              <div className="flex justify-center space-x-6 p-2">
                <div className="font-sans">Order Now</div>
                <div>
                  <Image
                    src="/icons/order-now.svg"
                    alt="Order Now"
                    width="30"
                    height="30"
                  />
                </div>
              </div>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#F4AE26] focus:outline-none bg-transparent rounded-lg border border-transparent hover:bg-transparent hover:text-[#be7113] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-transparent dark:bg-transparent dark:text-[#F4AE26] dark:border-transparent dark:hover:text-[#d98e32] dark:hover:bg-transparent hover:border-[#d98e32]"
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
      <div className="flex-shrink-0 w-ful">
        <div className="flex jsutify-end">
          <div className={bottom ? 'z-20' : 'z-10'}>
            <Image
              src="/images/img-hero.svg"
              alt="img-hero"
              width={600}
              height={600}
            />
          </div>

          <div className={zIndex}>
            <Image
              src="/images/bg_img_hero-1.png"
              className="w-[599px] h-[394px] absolute left-[60%] top-[-1.5px] object-none"
              width={5000}
              height={5500}
              alt={''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMainContent;
