import React, { useState, useRef, useEffect } from 'react';
import css from './form.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import docList from '../../utils/wiki';
import { judgeIsMobile } from '../../utils/jsUtils';

function IndexLatestedViki() {
  const [tabActive, setTabActive] = useState('Contributors');
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState([]);
  const swiperRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
	const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 展平 `docList`，将所有子数组合并为一个数组
    const flattenedDocs = docList.flat();

    // 按日期排序，假设每个文档都有 `date` 属性
    const sortedDocs = flattenedDocs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 截取前 10 个文档
    const topDocs = sortedDocs.slice(0, 12);

    // 将文档按每两个分成一组
    const groupedDocs = [];
    for (let i = 0; i < topDocs.length; i += 2) {
      groupedDocs.push(topDocs.slice(i, i + 2)); // 每次取两个文档
    }

    // 更新 state
    setDocs(groupedDocs);

    // 如果分组后的文档超过一行，允许向后滑动
    setCanGoNext(groupedDocs.length > 1);

		setIsMobile(judgeIsMobile())

  }, []);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
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
            <button className={clsx(css.arrow_left, css.arrow_btn)} onClick={handlePrev} disabled={!canGoPrev}>
              <FaChevronLeft />
            </button>
            <button className={clsx(css.arrow_right, css.arrow_btn)} onClick={handleNext} disabled={!canGoNext}>
              <FaChevronRight />
            </button>
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
          slidesPerView={isMobile?2:4} // 每个滑动页显示一个 group
          spaceBetween={24}
          pagination={{ clickable: false }} // 不显示分页器
          scrollbar={{ draggable: false }} // 不显示滚动条
          onSlideChange={handleSlideChange}
        >
          {docs.map((group, index) => (
            <SwiperSlide key={index}>
              <div className={css.wiki_group}>
                {group.map((doc, subIndex) => (
                  <a className={css.wiki_item} href={doc.path} key={subIndex}>
                    <img src={doc.image} alt={doc.title} />
                    <div className={css.wiki_name}>{doc.title}</div>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default IndexLatestedViki;
