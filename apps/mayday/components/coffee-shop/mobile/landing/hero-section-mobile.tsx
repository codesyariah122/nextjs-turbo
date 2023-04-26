import * as React from 'react';
import Image from 'next/image';
import { HeroMainMobile, PanelHeroSectionMobile } from '@/components';

const HeroSectionMobile = () => {
  return (
    <section className="bg-[#f6ebda] dark:bg-[#f6ebda] w-full">
      <div className="container mx-auto">
        <HeroMainMobile />
        <PanelHeroSectionMobile />
      </div>
    </section>
  );
};

export default HeroSectionMobile;
