import React, { FC } from 'react';
import { Carousel } from 'antd';
import { IScreenshotsCarouselProps } from '../../types/types';

const carouselStyle: React.CSSProperties = {
  width: 450,
  height: 250,
  marginBottom: 60,
};

const contentStyle: React.CSSProperties = {
  width: '100%',
  background: '#EEEEEE',
  objectFit: 'cover',
};

const ScreenshotsCarousel: FC<{
  screenshots: IScreenshotsCarouselProps[]
}> = ({ screenshots }) => (
  <Carousel
    style={carouselStyle}
    autoplay>
    {screenshots.map((screenshot: IScreenshotsCarouselProps) => (
      <div key={screenshot.id}>
        <img
          style={contentStyle}
          src={screenshot?.image}
          alt='Скриншот из игры' />
      </div>
    ))}
  </Carousel>
);

export default ScreenshotsCarousel;
