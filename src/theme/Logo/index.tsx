import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// 支持的语言路径前缀，保持与站点实际启用的语言一致
const LOCALE_PREFIXES = ['/cn', '/ja', '/es'] as const;

// 根据当前地址推导出对应语言的首页路径
function resolveLocaleHome(pathname: string) {
  const match = LOCALE_PREFIXES.find(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  if (!match) {
    return '/';
  }
  return `${match.replace(/\/$/, '')}/`;
}

type LogoConfig = {
  src: string;
  srcDark?: string;
  className?: string;
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
};

// 封装 Logo 图片的主题切换，避免初次渲染时的浅色/深色闪烁
function LogoThemedImage({
  logo,
  alt,
  imageClassName,
  defaultMode,
}: {
  logo: LogoConfig;
  alt: string;
  imageClassName?: string;
  defaultMode: 'light' | 'dark';
}) {
  const lightSrc = useBaseUrl(logo.src);
  const darkSrc = useBaseUrl(logo.srcDark || logo.src);
  const {colorMode} = useColorMode();

  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const themeAttr = document.documentElement.getAttribute('data-theme');
      return themeAttr === 'dark' ? 'dark' : 'light';
    }
    return defaultMode;
  });

  useEffect(() => {
    setResolvedMode(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);

  const image = (
    <img
      className={logo.className}
      src={resolvedMode === 'dark' ? darkSrc : lightSrc}
      alt={alt}
      height={logo.height}
      width={logo.width}
      style={logo.style}
      loading="eager"
      decoding="async"
    />
  );

  return imageClassName ? <div className={imageClassName}>{image}</div> : image;
}

type LogoProps = {
  imageClassName?: string;
  titleClassName?: string;
} & Omit<React.ComponentProps<typeof Link>, 'to'>;

export default function Logo({
  imageClassName,
  titleClassName,
  ...props
}: LogoProps) {
  // 读取站点配置，用于提供缺省的 alt 文案和标题
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
    colorMode: themeColorMode,
  } = useThemeConfig();
  const location = useLocation();

  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;

  // 根据当前页面的语言，决定 Logo 应跳转到哪个首页
  const localizedHref = useMemo(() => {
    const localeHome = resolveLocaleHome(location.pathname);
    if (!logo?.href) {
      return localeHome;
    }
    return localeHome === '/' ? logo.href : localeHome;
  }, [logo?.href, location.pathname]);

  const logoLink = useBaseUrl(localizedHref);

  return (
    <Link
      to={logoLink}
      {...props}
      {...(logo?.target && {target: logo.target})}>
      {logo?.src && (
        <LogoThemedImage
          logo={logo as LogoConfig}
          alt={alt}
          imageClassName={imageClassName}
          defaultMode={themeColorMode?.defaultMode === 'dark' ? 'dark' : 'light'}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
