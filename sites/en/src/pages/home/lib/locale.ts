import type {ReactElement} from 'react';

export type Locale = 'en' | 'cn' | 'ja' | 'es' | 'pt-br';

export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
  cn: '/cn',
  ja: '/ja',
  es: '/es',
  'pt-br': '/pt-br',
};

const KNOWN_PREFIXES = Object.values(LOCALE_PREFIX).filter(Boolean);

// 如需指定仅提供英文内容的页面，请在此列表补充路径；当前保持为空以启用完整本地化。
const EN_ONLY_PATHS = new Set<string>(['/contributors', '/ranger']);

function normalizePath(path: string): string {
  if (!path) return '/';
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  if (withLeading === '/') return '/';
  return withLeading.replace(/\/+$/, '');
}

function isEnglishOnlyPath(path: string): boolean {
  return EN_ONLY_PATHS.has(normalizePath(path));
}

// 判断当前访问路径是否是首页（含各语言版本入口）
export function isLocaleHomePath(pathname: string): boolean {
  const base = normalizePath(pathname);
  return base === '/' || KNOWN_PREFIXES.includes(base);
}

// 导航切换徽标文本
export const LOCALE_BADGE: Record<Locale, string> = {
  en: 'EN',
  cn: 'CN',
  ja: 'JA',
  es: 'ES',
  'pt-br': 'PT-BR',
};

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/pt-br' || pathname.startsWith('/pt-br/')) return 'pt-br';
  return 'en';
}

// 内部相对链接自动加语言前缀；若原本已带前缀或属于英文专属页面，则保持原状
export function localizedLink(path: string, locale: Locale) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const prefix = LOCALE_PREFIX[locale] || '';

  const isAnyLocalePrefixed = KNOWN_PREFIXES.some(
    (p) => normalized === p || normalized.startsWith(`${p}/`)
  );
  if (isAnyLocalePrefixed) return normalized;

  if (isEnglishOnlyPath(normalized)) return normalized;
  if (!prefix) return normalized;

  if (normalized === '/') return `${prefix}/`;
  return `${prefix}${normalized}`;
}

// 处理相对链接与 wiki.seeedstudio.com 下的绝对链接
export function localizeHref(href: string, locale: Locale) {
  if (!href) return href;

  if (/^https?:\/\//i.test(href)) {
    try {
      const url = new URL(href);
      if (url.hostname === 'wiki.seeedstudio.com') {
        if (isEnglishOnlyPath(url.pathname)) return url.toString();

        const prefix = LOCALE_PREFIX[locale] || '';
        if (!prefix) return url.toString();

        const pathname = url.pathname || '/';
        const hasKnownPrefix = KNOWN_PREFIXES.some(
          (p) => pathname === p || pathname.startsWith(`${p}/`)
        );

        if (!hasKnownPrefix) {
          url.pathname = pathname === '/' ? `${prefix}/` : `${prefix}${pathname}`;
        }
        return url.toString();
      }
      return href;
    } catch {
      return href;
    }
  }

  return localizedLink(href, locale);
}

// 提供一个默认导出，避免构建时因缺少页面组件而报错
export default function LocaleHelpersPage(): ReactElement | null {
  return null;
}