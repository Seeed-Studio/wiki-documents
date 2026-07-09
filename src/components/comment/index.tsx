import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus, { GiscusProps } from '@giscus/react';
import { useThemeConfig, useColorMode, ThemeConfig } from '@docusaurus/theme-common';

import dup from '../../utils/giscus-dup.json';

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme?: string };
}

function normalizePathname(p: string) {
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

export const Comment = () => {
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const { colorMode } = useColorMode();
  const { theme = 'light', darkTheme = 'dark_dimmed' } = giscus;
  const giscusTheme = colorMode === 'dark' ? darkTheme : theme;

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => {
        const pathname = normalizePathname(window.location.pathname);
        const usePathname = (dup.usePathnameTerm as string[]).includes(pathname);

        // ✅ 默认完全不变：老页面继续用 title（继承历史评论）
        // ✅ 仅对“重复 title 的非保留页”：改为 title + (pathname)
        const term = usePathname ? `${document.title} (${pathname})` : document.title;

        return (
          <div style={{ paddingTop: 50 }}>
            <Giscus
              {...giscus}
              id="comments"
              mapping="specific"
              term={term}
              strict="1"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              lang="en"
              loading="lazy"
              theme={giscusTheme}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default Comment;
