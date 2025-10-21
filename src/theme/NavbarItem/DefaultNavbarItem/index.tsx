import React from 'react';
import OriginalDefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import {useLocation} from '@docusaurus/router';

import {detectLocaleFromPath, localizeHref} from '../../../pages/home/lib/locale';
import {translateNavbarLabel} from '../navLabelHelper';

export default function DefaultNavbarItemWrapper(
  props: React.ComponentProps<typeof OriginalDefaultNavbarItem>,
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);

  const nextProps = {...props} as any;

  if (nextProps.label) {
    nextProps.label = translateNavbarLabel(nextProps.label, locale);
  }

  // 仅为站内 wiki 链接加上对应语言前缀，外部链接保持原状。
  if (typeof nextProps.to === 'string') {
    nextProps.to = localizeHref(nextProps.to, locale);
  } else if (typeof nextProps.href === 'string') {
    nextProps.href = localizeHref(nextProps.href, locale);
  }

  return <OriginalDefaultNavbarItem {...nextProps} />;
}
