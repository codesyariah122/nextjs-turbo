import { PanelHeroSection, HeroMainContent } from '@/components';

const HeroSection = () => {
  return (
    <section className="bg-[#f6ebda] dark:bg-[#f6ebda] w-full 2xl:h-[1004px]">
      <div className="container mx-auto px-[10rem] py-36">
        <HeroMainContent />
        <PanelHeroSection />
      </div>
    </section>
  );
};

export default HeroSection;
