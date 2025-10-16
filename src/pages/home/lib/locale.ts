export type Locale = 'en' | 'cn' | 'ja' | 'es';

export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '', cn: '/cn', ja: '/ja', es: '/es',
};

// 供 UI 显示徽标（如按钮右侧 EN/CN/JA/ES）
export const LOCALE_BADGE: Record<Locale, string> = {
  en: 'EN', cn: 'CN', ja: 'JA', es: 'ES',
};

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/cn' || pathname.startsWith('/cn/')) return 'cn';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'en';
}

// 仅处理站内“相对路径”
export function localizedLink(path: string, locale: Locale) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${LOCALE_PREFIX[locale]}${p}`;
}

// ✅ 新增：同时处理相对路径 & wiki 绝对链接；其他域名不改
export function localizeHref(href: string, locale: Locale) {
  if (!href) return href;

  // 绝对链接
  if (/^https?:\/\//i.test(href)) {
    try {
      const u = new URL(href);
      if (u.hostname === 'wiki.seeedstudio.com') {
        const pref = LOCALE_PREFIX[locale] || '';
        // 避免重复叠加前缀
        const needsPrefix =
          pref &&
          u.pathname !== '/' &&
          !u.pathname.startsWith(pref + '/');

        if (needsPrefix) u.pathname = `${pref}${u.pathname}`;
        return u.toString();
      }
      // 其他域名原样返回
      return href;
    } catch {
      return href;
    }
  }

  // 相对路径 -> 加前缀
  return localizedLink(href, locale);
}
