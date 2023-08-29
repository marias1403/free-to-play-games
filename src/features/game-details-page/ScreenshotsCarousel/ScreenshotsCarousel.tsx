import React, { FC } from 'react';
import { Carousel, Empty } from 'antd';
import styles from './ScreenshotsCarousel.module.css';
import { IScreenshotsCarouselProps } from '../../../types/types';

const ScreenshotsCarousel: FC<{
  screenshots: IScreenshotsCarouselProps[]
}> = ({ screenshots }) => {
  if (screenshots.length === 0) {
    return (
      <div className={styles.noContent}>
        <Empty />
      </div>
    );
  }

  return (
    <Carousel
      className={styles.carousel}
      autoplay>
      {screenshots.map((screenshot: IScreenshotsCarouselProps) => (
        <div key={screenshot.id}>
          <img
            className={styles.screenshot}
            src={screenshot?.image}
            alt='Скриншот из игры' />
        </div>
      ))}
    </Carousel>
  );
};

export default ScreenshotsCarousel;
