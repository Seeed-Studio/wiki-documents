// src/pages/home/_Home.tsx
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Redirect, useLocation } from '@docusaurus/router';
import css from './home.module.scss'; // 保持你的样式文件名
import clsx from 'clsx'
import {
  ColorModeProvider,
} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import IndexForm from '../../components/home/form'
import IndexLatestedViki from '../../components/home/lasted'
import TopNav from '../../components/topNav';
import IndexPlatform from '../../components/home/platform'
import IndexBrowseBy from '../../components/home/browseBy'
import { judgeHomePath } from '../../utils/jsUtils'
// import { useThemeConfig,useColorMode} from '@docusaurus/theme-common';
const getIndexImage = (src) => {
  return src && require(`../../../assets/index/${src}`).default;
}

import BazaarAffiliate from '../../components/home/BazaarAffiliate';

// ---------------------- 语言工具（用于链接前缀 & 文案选择） ----------------------
type Locale = 'en' | 'cn' | 'ja' | 'es' | 'pt-br';
const LOCALE_PREFIX: Record<Locale, string> = { en: '', cn: '/cn', ja: '/ja', es: '/es', 'pt-br': '/pt-br' };
const LOCALE_BADGE: Record<Locale, string> = { en: 'EN', cn: 'CN', ja: 'JA', es: 'ES', 'pt-br': 'PT-BR' };

function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/pt-br' || pathname.startsWith('/pt-br/')) return 'pt-br';
  return 'en';
}

function localizedLink(path: string, locale: Locale) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${LOCALE_PREFIX[locale]}${p}`;
}

function localizeHref(href: string, locale: Locale) {
  try {
    const url = new URL(href);
    // 只给 wiki.seeedstudio.com 的链接加前缀；其他域名原样返回
    if (url.hostname !== 'wiki.seeedstudio.com') return href;

    // 已经带语言前缀的直接返回
    if (
      url.pathname.startsWith('/cn/') ||
      url.pathname.startsWith('/ja/') ||
      url.pathname.startsWith('/es/') ||
      url.pathname.startsWith('/pt-br/')
    ) {
      return href;
    }

    const prefix = LOCALE_PREFIX[locale] || '';
    // en 没前缀，其他语言加 /cn /ja /es /pt-br
    if (!prefix) return href;

    // 注意保留 query 和 hash
    url.pathname = `${prefix}${url.pathname}`;
    return url.toString();
  } catch {
    // 非绝对地址或解析失败时原样返回
    return href;
  }
}

// ---------------------------------------------------------------------------

import en from './locales/en/home.json';
import cn from './locales/cn/home.json';
import ja from './locales/ja/home.json';
import es from './locales/es/home.json';
import ptBr from './locales/pt-br/home.json';
const COPY: Record<Locale, any> = { en, cn, ja, es, 'pt-br': ptBr };

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

// 显示右侧徽标（EN/CN/JA/ES）
function GettingStartedSplit({ mainLink, text, locale }: { mainLink: string; text: string; locale: Locale; }) {
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
    { flag: '🇨🇳', label: '简体中文', href: '/cn/Getting_Started' },
    { flag: '🇯🇵', label: '日本語', href: '/ja/Getting_Started' },
    { flag: '🇪🇸', label: 'Español', href: '/es/Getting_Started' },
    { flag: '🇧🇷', label: 'Português (Brasil)', href: '/pt-br/Getting_Started' },
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
          {/* 根据当前 locale 显示 EN/CN/JA/ES */}
          <span style={{ fontWeight: 700, lineHeight: 1 }}>{LOCALE_BADGE[locale]}</span>
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

// ---------------------- 使用翻译文案 + 仅让主按钮跟随语言前缀 ----------------------
const renderBanner = (locale: Locale, t: any) => {
  const bannerList = [
    {
      title: t.banner.title,
      description: t.banner.description,
      link: '',
      bannerImg: 'platform.png',
      btnList: [
        { text: t.banner.btnGettingStarted, link: localizedLink('/Getting_Started', locale), class: 'green' },
        { text: t.banner.btnTechnology, link: localizeHref('https://wiki.seeedstudio.com/topicintroduction/', locale) },
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
                      btn.text === t.banner.btnGettingStarted ? (
                        // 这里把 locale 传进去，仅用于徽标显示；其他行为不变
                        <GettingStartedSplit key={i} mainLink={btn.link} text={btn.text} locale={locale} />
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
  const { pathname } = useLocation();                 // 拿到当前路径
  const locale = detectLocaleFromPath(pathname);      // 根据路径判定语言
  const t = COPY[locale];                              // 取对应语言文案

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
        {renderBanner(locale, t)}
        <IndexLatestedViki ></IndexLatestedViki>
        <IndexBrowseBy theme={theme}></IndexBrowseBy>
        {/* <IndexPlatform></IndexPlatform> */}
        <BazaarAffiliate></BazaarAffiliate>
        {/* <IndexForm ></IndexForm> */}

        <div className={clsx(css.tech_container, 'com_module')}>
          <h2>{t.techSupport.title}</h2>
          <p>{t.techSupport.desc}</p>

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