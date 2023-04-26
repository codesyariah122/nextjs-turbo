/* eslint-disable @next/next/no-img-element */
const ServicesContent = () => {
  return (
    <section className="mt-80 w-[1170px] h-[370px]">
      <div className="container mx-auto w-[473px] h-12">
        <div className="w-[123px] h-1 absolute left-[665px] top-[1550.5px] rounded-xl bg-[#ff902b]" />
        <p className="absolute left-[350px] top-[1500px] text-[32px] font-semibold text-left text-black">
          How to use delivery service
        </p>
      </div>
      <div className="w-[1170px] h-[290px]">
        <div className="flex flex-col justify-start items-center w-[371px] h-[290px] absolute left-[750px] top-[1600px] gap-[15px] px-6 py-4">
          <img
            src="/icons/services-panel/food-truck.svg"
            className="flex-grow-0 flex-shrink-0 w-[159px] h-[159px] object-cover"
            alt="food-truck-1"
          />
          <div className="flex-grow-0 flex-shrink-0 w-[262px] h-[71px]">
            <p className="absolute left-[54.5px] top-[190px] text-2xl font-semibold text-center text-[#2f2105]">
              we delivery it to you
            </p>
            <p className="absolute left-[71px] top-[234px] text-lg text-center text-[#2f2105]">
              Choose delivery service
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[365px] h-[290px] absolute left-[1150px] top-[1600px]  gap-6 px-6 py-4">
          <img
            src="/icons/services-panel/coffee-cup-2.svg"
            className="flex-grow-0 flex-shrink-0 w-[159px] h-[159px] object-cover"
            alt="coffee-cup-2"
          />
          <div className="flex-grow-0 flex-shrink-0 w-[229px] h-[71px]">
            <p className="absolute left-[70.5px] top-[201px] text-2xl font-semibold text-center text-[#2f2105]">
              Enjoy your coffee
            </p>
            <p className="absolute left-[68px] top-[245px] text-lg text-center text-[#2f2105]">
              Choose delivery service
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-[370px] h-[290px] absolute left-[350px] top-[1600px]  gap-[17px] px-6 py-4">
          <div className="flex-grow-0 flex-shrink-0 w-[159px] h-[159px]">
            <img
              src="/icons/services-panel/coffee-cup-2.svg"
              className="w-[131.38px] h-[135.15px] absolute left-[105px] top-[15.5px] object-cover"
              alt="coffee-cup-2"
            />
            <img
              src="/icons/services-panel/tap-1.svg"
              className="w-[79.43px] h-[81.71px] absolute left-[184.57px] top-[92.79px] object-cover"
              alt="tap-1"
            />
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[279px] h-[71px]">
            <p className="absolute left-[61px] top-48 text-2xl font-semibold text-center text-[#2f2105]">
              choose your coffee
            </p>
            <p className="absolute left-[45.5px] top-[236px] text-lg text-center text-black">
              there are 20+ coffees for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
