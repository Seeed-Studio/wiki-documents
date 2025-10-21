import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ThemedImage from '@theme/ThemedImage';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';

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

// 封装主题图像渲染，保留官方主题的浅色/深色切换能力
function LogoThemedImage({
  logo,
  alt,
  imageClassName,
}: {
  logo: LogoConfig;
  alt: string;
  imageClassName?: string;
}) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );
  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
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
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
