import React, { FC } from 'react';
import { Carousel, Empty } from 'antd';
import { IScreenshotsCarouselProps } from '../../types/types';

const carouselStyle: React.CSSProperties = {
  width: 450,
  height: 250,
  marginBottom: 60,
};

const contentStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#EEEEEE',
  objectFit: 'cover',
};

const noContentStyle: React.CSSProperties = {
  width: 450,
  height: 250,
  marginBottom: 60,
  backgroundColor: '#F4F4F4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const ScreenshotsCarousel: FC<{
  screenshots: IScreenshotsCarouselProps[]
}> = ({ screenshots }) => {
  if (screenshots.length === 0) {
    return (
      <div style={noContentStyle}>
        <Empty />
      </div>
    );
  }

  return (
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
};

export default ScreenshotsCarousel;
