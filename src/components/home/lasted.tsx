import React, { useState, useRef } from 'react';
import css from './form.module.scss'
import clsx from 'clsx'

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import getLatestDocs from '../../utils/getLatestDocs';
// import fs from 'fs-extra';
// import * as path from 'path';
// import fm from 'front-matter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import docList from '../../utils/wiki'
const getIndexImage = (src) => {
  return src && require(`../../../assets/index/${src}`).default;
}

function IndexLatestedViki() {
  const numLatestDocs = 10; // 获取的最新文档数量
  // getLatestDocs(10)
  // const docsDir = path.join(__dirname, '..', 'docs')
  const [tabActive, setTabActive] = useState('Contributors')
  const [loading, setLoading] = useState(false)
  const [docs, setDocs] = React.useState([]);
  const swiperRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState((docList.length/8)>0);
  // 示例：滑动到下一个 slide
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // 示例：滑动到上一个 slide
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleSlideChange = () => {
    console.log(swiperRef.current.swiper )
    if (swiperRef.current && swiperRef.current.swiper) {
      setCanGoPrev(!swiperRef.current.swiper.isBeginning);
      setCanGoNext(!swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <div className={clsx(css.latested, 'com_module')}>
      <div className={css.latested_header}>
        <div className={css.latested_header_left}>
          <div className={css.latested_header_title}>
            Latest Wiki
          </div>
          <div className={css.arrow}>
            <button className={clsx(css.arrow_left,css.arrow_btn)} onClick={handlePrev} disabled={!canGoPrev}><FaChevronLeft /></button>
            <button className={clsx(css.arrow_right,css.arrow_btn)} onClick={handleNext} disabled={!canGoNext}> <FaChevronRight /></button>
          </div>
        </div>
      </div>
      <div className={css.latested_container}>
        <Swiper
         ref={swiperRef} 
         autoplay={{
          delay: 1000, // 每个幻灯片之间的延迟时间（毫秒）
          disableOnInteraction: false, // 用户交互时是否禁用自动播放
        }}
          slidesPerView={4} // 每次显示的幻灯片数量
          spaceBetween={24}
          pagination={{ clickable: false }} // 显示分页器
          scrollbar={{ draggable: false }} // 显示滚动条
          onSlideChange={handleSlideChange}
        >
    
          {docList.map((arr, index) => {
            return (
              <SwiperSlide>
                {
                  arr.map((item, index) => {
                    return (
                      <a className={css.wiki_item} href={item.path}>
                        <img src={item.image} alt="" />
                        <div className={css.wiki_name}>{item.title}</div>
                      </a>
                    )
                  })
                }
              </SwiperSlide>
            )

          })}
        </Swiper>
      </div>
    </div>
  )
}

export default IndexLatestedViki;