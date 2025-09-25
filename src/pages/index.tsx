import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Redirect } from '@docusaurus/router';
import css from './index.module.scss'
import clsx from 'clsx'
import {
  ColorModeProvider,
} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import IndexForm from '../components/home/form'
import IndexLatestedViki from '../components/home/lasted'
import TopNav from '../components/topNav';
import IndexPlatform from '../components/home/platform'
import IndexBrowseBy from '../components/home/browseBy'
import { judgeHomePath } from '../utils/jsUtils'
// import { useThemeConfig,useColorMode} from '@docusaurus/theme-common';
const getIndexImage = (src) => {
  return src && require(`../../assets/index/${src}`).default;
}

import BazaarAffiliate from '../components/home/BazaarAffiliate';

// 浏览器语言识别逻辑
// function _guessLocaleCode() {
//   const lang = typeof navigator !== 'undefined'
//     ? (navigator.languages?.[0] || navigator.language || 'en')
//     : 'en';
//   const L = lang.toLowerCase();
//   if (L.startsWith('zh')) return 'ZH';
//   if (L.startsWith('ja')) return 'JA';
//   if (L.startsWith('es')) return 'ES';
//   return 'EN';
// }

function GlobeIconSky(props: React.SVGProps<SVGSVGElement>) {
  const sky = '#7EC8FF';
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false" width="1.2em" height="1.2em" {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke={sky} strokeWidth="2" />
      <path d="M3 12h18" fill="none" stroke={sky} strokeWidth="2" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" fill="none" stroke={sky} strokeWidth="2" />
    </svg>
  );
}
function Caret({ up, ...rest }: { up?: boolean } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false" {...rest}>
      {up ? (
        <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function GettingStartedSplit({ mainLink, text }: { mainLink: string; text: string; }) {
  const [coords, setCoords] = useState<{ left: number; top: number; width: number }>({ left: 0, top: 0, width: 0 });
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [hoverToggle, setHoverToggle] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const open = (ignoreHover ? false : (hoverToggle || hoverMenu)) || manualOpen;

  const closeTimer = useRef<number | null>(null);
  const clearCloseTimer = () => { if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; } };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setHoverToggle(false);
      setHoverMenu(false);
      setManualOpen(false);
      setIgnoreHover(false);
    }, 140);
  };

  useEffect(() => {
    if (!open) return;
    const el = wrapRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setCoords({ left: rect.left, top: rect.bottom + 6, width: rect.width });
    }
    const onScrollOrResize = () => {
      const node = wrapRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      setCoords({ left: rect.left, top: rect.bottom + 6, width: rect.width });
    };
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('scroll', onScrollOrResize);
    };
  }, [open]);

  const languages = [
    { flag: '🇺🇸', label: 'English', href: '/Getting_Started' },
    { flag: '🇨🇳', label: '中文', href: '/cn/Getting_Started' },
    { flag: '🇯🇵', label: '日本語', href: '/ja/Getting_Started' },
    { flag: '🇪🇸', label: 'Español', href: '/es/Getting_Started' },
  ];

  const onToggleClick = () => {
    if (!manualOpen && (hoverToggle || hoverMenu)) {
      setManualOpen(false);
      setHoverToggle(false);
      setHoverMenu(false);
      setIgnoreHover(true);
      return;
    }
    setManualOpen(v => !v);
    setHoverToggle(false);
    setHoverMenu(false);
    setIgnoreHover(false);
  };

  return (
    <>
      <div ref={wrapRef} className={css.gsGroup}>
        <a href={mainLink} className={clsx(css.gsMain, css.gsGreen)}>{text}</a>
        <span
          className={clsx(css.gsToggle, css.gsGreen)}
          role="button"
          aria-label="Open language menu"
          aria-expanded={open}
          title="Languages"
          onMouseEnter={() => { 
            clearCloseTimer(); 
            if (!ignoreHover) setHoverToggle(true); 
          }}
          onMouseLeave={scheduleClose}
          onClick={onToggleClick}
        >
          <GlobeIconSky style={{ width: '1.2em', height: '1.2em', display: 'block', flex: '0 0 auto' }} />
          <span style={{ fontWeight: 700, lineHeight: 1 }}>EN</span>
          <Caret up={open} style={{ width: '1em', height: '1em', display: 'block', flex: '0 0 auto' }} />
        </span>
      </div>

      {open && createPortal(
        <div
          id="gs-dd-portal"
          role="menu"
          onMouseEnter={() => { 
            clearCloseTimer(); 
            if (!ignoreHover) setHoverMenu(true); 
          }}
          onMouseLeave={scheduleClose}
          style={{
            position: 'fixed',
            left: coords.left,
            top: coords.top,
            minWidth: Math.max(220, coords.width),
            background: 'var(--ifm-dropdown-background-color, #fff)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: 8,
            boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
            zIndex: 9999,
            padding: 8,
          }}
        >
          {languages.map((loc, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <a
                key={loc.href}
                href={loc.href}
                role="menuitem"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  textDecoration: 'none',
                  padding: '8px 10px',
                  borderRadius: 6,
                  color: 'var(--ifm-font-color-base)',
                  fontWeight: 500,
                  background: isHovered ? 'var(--ifm-hover-overlay, rgba(0,0,0,0.06))' : 'transparent',
                  boxShadow: isHovered ? 'inset 0 0 0 1px var(--ifm-color-emphasis-300)' : 'none',
                  transition: 'background 120ms ease, box-shadow 120ms ease',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: 18, lineHeight: 1 }}>{loc.flag}</span>
                <span>{loc.label}</span>
              </a>
            );
          })}
        </div>,
        document.body
      )}
    </>
  );
}

const renderBanner = () => {
  const bannerList = [
    {
      title: 'Seeed Studio Wiki Platform',
      description: 'Seeed Studio has dedicated to realizing interactive digital replica of our physical world, as being an IoT hardware partner since 2008. This is an open platform collecting all the wikis published by Seeed Studio, to show you the full picture of our efforts, natural environments digitization and outcome production.',
      link: '',
      bannerImg: 'platform.png',
      btnList: [
        { text: 'Getting Started', link: '/Getting_Started', class: 'green' },
        { text: 'Technology', link: 'https://wiki.seeedstudio.com/topicintroduction/' },
        { text: 'GitHub', link: 'https://github.com/Seeed-Studio/wiki-documents' },
      ]
    },
  ]
  return (
    <div className={clsx(css.index_banner)}>
      <Swiper modules={[Autoplay]} loop autoplay={{ delay: 5000, disableOnInteraction: true }} slidesPerView={1} pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
        {bannerList.map((item, index) => {
          return (
            <SwiperSlide className="com_module" key={index}>
              <div className={clsx(css.banner_item)}>
                <div className={css.banner_item_info}>
                  <h1 className={clsx(css.banner_item_info_title, css.green)}>{item.title1}</h1>
                  <h2 className={clsx(css.banner_item_info_title)}>{item.title}</h2>
                  <p className={clsx(css.banner_description)}>{item.description}</p>
                  <div className={css.banner_btn}>
                    {item.btnList.map((btn, i) => (
                      btn.text === 'Getting Started' ? (
                        <GettingStartedSplit key={i} mainLink={btn.link} text={btn.text} />
                      ) : (
                        <a href={btn.link} className={clsx(css.banner_btn_item, css[btn.class])} key={i}>{btn.text}</a>
                      )
                    ))}
                  </div>
                </div>

                <div className={css.banner_item_img}>
                  <img src={getIndexImage(item.bannerImg)} alt="" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    judgeHomePath()
    const htmlElement = document.documentElement;
    const dataTheme = htmlElement.getAttribute('data-theme');
    setTheme(dataTheme)
  }, [])
  return (
    <Layout>
      <div className={clsx(css.index_container, css[theme])}>
        <TopNav></TopNav>
        {renderBanner()}
        <IndexLatestedViki ></IndexLatestedViki>
        <IndexBrowseBy theme={theme}></IndexBrowseBy>
        {/* <IndexPlatform></IndexPlatform> */}
        <BazaarAffiliate></BazaarAffiliate>
        {/* <IndexForm ></IndexForm> */}

        <div className={clsx(css.tech_container, 'com_module')}>
          <h2>Tech Support & Product Discussion</h2>
          <p>
            Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.
          </p>

          <div className={clsx(css.tech_container, 'com_module')}>
            <div className={clsx(css.tech_wrapper,"button_tech_support_container")} >
              <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
              <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
            </div>

            <div className={clsx(css.tech_wrapper,"button_tech_support_container")}>
              <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
              <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
  // return <Redirect to="/Getting_Started" />;
}

export default Home;
