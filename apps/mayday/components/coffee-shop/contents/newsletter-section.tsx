const NewsLetterSection = () => {
  return (
    <section className="w-[1170px] h-[392px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="col-span-full items-center">
            <img
              className="w-screen h-[392px] absolute -left-[25.5px] top-[4680.5px] rounded-3xl shadow-sm mb-[2rem]"
              src="/images/newsletter.svg"
              alt="subscribe-email"
            />
            <p className="absolute left-[640px] top-[4791px] text-[32px] font-semibold text-center text-white">
              Subscribe to get 50% discount price
            </p>
            <div className="w-[486px] h-[54px]">
              <div className="w-[486px] h-[54px] absolute left-[689.5px] top-[4855.5px] rounded-[42px] bg-white" />
              <p className="w-[136px] h-[18px] absolute left-[695px] top-[4872px] text-base font-semibold text-center text-[#7e7d7a]">
                Email address
              </p>
              <div
                className="flex justify-center items-center h-11 absolute left-[1040px] top-[4860px] gap-2.5 px-8 py-3 rounded-[33px] bg-[#2f2105]"
                style={{ boxShadow: '0px 4px 32px 0 rgba(223,195,124,0.25)' }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white">
                  Order now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
