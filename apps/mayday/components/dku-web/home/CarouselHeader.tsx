import * as React from 'react';
import { stylesResponsive } from '@/styles';
import classNames from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface ItemProps {
  id?: number;
  type?: string;
  title?: string;
  text?: string;
  name?: string;
  imageUrl?: string;
}

interface CarouselProps {
  objItems?: {
    items?: ItemProps | any;
  };
  items?: ItemProps[] | any;
}

const CarouselHeader = ({ ...items }: CarouselProps['objItems']) => {
  const swiper = Array.isArray(items.items) ? items.items : [];

  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={true}
      showThumbs={false}
      className={classNames('relative w-full', stylesResponsive['mySwiper'])}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 z-50 flex cursor-pointer items-center justify-center p-3 opacity-80 hover:opacity-100 -left-32`}
            onClick={clickHandler}
          >
            <i className="chevron-left"></i>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 z-20 flex cursor-pointer items-center justify-center p-3 opacity-80 hover:opacity-100 -right-32`}
            onClick={clickHandler}
          >
            <i className="chevron-right"></i>
          </div>
        );
      }}
    >
      {swiper.map((item: ItemProps) => (
        // <div key={item.id} className={stylesResponsive['swipItem']}>
        //   <div className={stylesResponsive['imgBox']}>
        //     <img src={item.imageUrl} alt="slides" />
        //   </div>
        // </div>
        <div key={item.id}>
          <img src={item.imageUrl} alt="slides" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselHeader;
