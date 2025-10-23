import React, { useState, useRef, useEffect } from 'react';
import css from './form.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import docList from '../../utils/wiki';
import { judgeIsMobile } from '../../utils/jsUtils';
import { detectLocaleFromPath, localizedLink } from '../../pages/home/lib/locale';

// 组件内可选：按 path 覆盖标题翻译（如果 utils/wiki 暂时没加 title_cn/ja/es，可先在这里填）
// 例：'/gun_detection_with_frigate_nvr_on_r2000': { cn:'...', ja:'...', es:'...' }
const LOCAL_TITLE_MAP: Record<
  string,
  Partial<Record<'cn' | 'ja' | 'es', string>>
> = {
  // '/some_path': { cn: '中文标题', ja: '日本語タイトル', es: 'Título en español' },
};

// 读取本地化标题（优先取数据里的 title_xx，其次取 LOCAL_TITLE_MAP，最后回退英文 title）
function getLocalizedDocTitle(
  doc: any,
  locale: 'en' | 'cn' | 'ja' | 'es'
): string {
  if (locale === 'cn' && (doc.title_cn || LOCAL_TITLE_MAP[doc.path]?.cn))
    return doc.title_cn || LOCAL_TITLE_MAP[doc.path]?.cn!;
  if (locale === 'ja' && (doc.title_ja || LOCAL_TITLE_MAP[doc.path]?.ja))
    return doc.title_ja || LOCAL_TITLE_MAP[doc.path]?.ja!;
  if (locale === 'es' && (doc.title_es || LOCAL_TITLE_MAP[doc.path]?.es))
    return doc.title_es || LOCAL_TITLE_MAP[doc.path]?.es!;
  return doc.title;
}

function IndexLatestedViki() {
  const [tabActive, setTabActive] = useState('Contributors');
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState<any[][]>([]);
  const swiperRef = useRef<any>(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 当前语言
  const locale = detectLocaleFromPath(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  // 标题多语言
  const I18N_TITLE: Record<'en' | 'cn' | 'ja' | 'es', string> = {
    en: 'Latest Wiki',
    cn: '最新文档',
    ja: '最新のWiki',
    es: 'Wiki más reciente',
  };

  useEffect(() => {
    // 展平 `docList`，将所有子数组合并为一个数组
    const flattenedDocs: any[] = (docList as any[]).flat();

    // 按日期排序
    const sortedDocs = flattenedDocs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // 截取前 12 个文档
    const topDocs = sortedDocs.slice(0, 12);

    // 将文档按每两个分成一组
    const groupedDocs: any[][] = [];
    for (let i = 0; i < topDocs.length; i += 2) {
      groupedDocs.push(topDocs.slice(i, i + 2)); // 每次取两个文档
    }

    // 更新 state
    setDocs(groupedDocs);

    // 如果分组后的文档超过一行，允许向后滑动
    setCanGoNext(groupedDocs.length > 1);

    setIsMobile(judgeIsMobile());
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
            {I18N_TITLE[locale]}
          </div>
          <div className={css.arrow}>
            <button
              className={clsx(css.arrow_left, css.arrow_btn)}
              onClick={handlePrev}
              disabled={!canGoPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className={clsx(css.arrow_right, css.arrow_btn)}
              onClick={handleNext}
              disabled={!canGoNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className={css.latested_container}>
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={isMobile ? 2 : 4}
          spaceBetween={24}
          pagination={{ clickable: false }}
          scrollbar={{ draggable: false }}
          onSlideChange={handleSlideChange}
        >
          {docs.map((group, index) => (
            <SwiperSlide key={index}>
              <div className={css.wiki_group}>
                {group.map((doc, subIndex) => (
                  <a
                    className={css.wiki_item}
                    href={localizedLink(doc.path, locale)} // 站内链接自动加语言前缀
                    key={subIndex}
                  >
                    <img src={doc.image} alt={doc.title} />
                    <div className={css.wiki_name}>
                      {getLocalizedDocTitle(doc, locale)}
                    </div>
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
