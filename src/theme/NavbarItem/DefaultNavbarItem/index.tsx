import React from 'react';
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import {useLocation} from '@docusaurus/router';

import {
  detectLocaleFromPath,
  localizeHref,
  isLocaleHomePath,
} from '../../../pages/home/lib/locale';
import {translateNavbarLabel} from '../navLabelHelper';

export default function DefaultNavbarItemWrapper(
  props: React.ComponentProps<typeof OriginalDefaultNavbarItem>
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);
  const isHome = isLocaleHomePath(pathname);

  const nextProps = {...props} as any;

  if (nextProps.label) {
    nextProps.label = translateNavbarLabel(nextProps.label, locale);
  }

  // 仅站内/wiki 链接加前缀；外链保持不变
  if (isHome) {
    if (typeof nextProps.to === 'string') {
      nextProps.to = localizeHref(nextProps.to, locale);
    } else if (typeof nextProps.href === 'string') {
      nextProps.href = localizeHref(nextProps.href, locale);
    }
  }

  return <OriginalDefaultNavbarItem {...nextProps} />;
}
