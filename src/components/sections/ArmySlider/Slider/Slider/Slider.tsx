import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from '../context'
import Content from '../Content/Content'
import SlideButton from '../SlideButton/SlideButton'
import SliderWrapper from '../SliderWrapper/SliderWrapper'
import useSliding from '../useSliding'
import useSizeElement from '../useSizeElement'
import styles from './styles.module.css'

const Slider: React.FC<any> = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div
          className={`${styles.slider} ${currentSlide != null ? styles['slider--open'] : '' }`}
        >
          <div ref={containerRef} className={styles.slider__container} {...slideProps}>{children}</div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
