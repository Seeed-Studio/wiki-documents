import React from 'react';
import OriginalDropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import {useLocation} from '@docusaurus/router';

import {detectLocaleFromPath, localizeHref} from '../../../pages/home/lib/locale';
import {translateNavbarLabel} from '../navLabelHelper';

export default function DropdownNavbarItemWrapper(
  props: React.ComponentProps<typeof OriginalDropdownNavbarItem>
) {
  const {pathname} = useLocation();
  const locale = detectLocaleFromPath(pathname);

  const nextProps = {...props} as any;

  if (nextProps.label) {
    nextProps.label = translateNavbarLabel(nextProps.label, locale);
  }

  if (Array.isArray(nextProps.items)) {
    nextProps.items = nextProps.items.map((item: any) => {
      const nextItem = {...item};
      if (nextItem.label) {
        nextItem.label = translateNavbarLabel(nextItem.label, locale);
      }
      if (typeof nextItem.to === 'string') {
        nextItem.to = localizeHref(nextItem.to, locale);
      } else if (typeof nextItem.href === 'string') {
        nextItem.href = localizeHref(nextItem.href, locale);
      }
      return nextItem;
    });
  }

  if (typeof nextProps.to === 'string') {
    nextProps.to = localizeHref(nextProps.to, locale);
  } else if (typeof nextProps.href === 'string') {
    nextProps.href = localizeHref(nextProps.href, locale);
  }

  return <OriginalDropdownNavbarItem {...nextProps} />;
}
