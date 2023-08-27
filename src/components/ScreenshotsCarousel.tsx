import React, { FC } from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '250px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};

const ScreenshotsCarousel: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      style={{ marginBottom: 60 }}
      autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default ScreenshotsCarousel;
