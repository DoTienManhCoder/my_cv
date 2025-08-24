"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles = "", btnStyles = "", iconStyles = "" }) => {
  const swiper = useSwiper();

  // Phòng lỗi khi chưa có instance (ví dụ render trước khi Swiper mount)
  if (!swiper) return null;

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>

      <button
        type="button"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
