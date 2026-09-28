import React, {type ReactNode, useState, useEffect} from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type {Props} from '@theme/DocRoot/Layout';

import styles from './styles.module.css';

export default function DocRootLayout({children}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const normalizedPath = pathname.replace(/\/+$/, '');
  const isRoboticsLandingPage =
    normalizedPath === '/robotics_page' ||
    normalizedPath === '/cn/robotics_page';

  useEffect(() => {
    document.documentElement.classList.toggle(
      'robotics-landing-page',
      isRoboticsLandingPage,
    );
    return () => {
      document.documentElement.classList.remove('robotics-landing-page');
    };
  }, [isRoboticsLandingPage]);

  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <div
        className={clsx(
          styles.docRoot,
          isRoboticsLandingPage && styles.fullWidthPage,
        )}>
        {sidebar && !isRoboticsLandingPage && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain
          hiddenSidebarContainer={
            isRoboticsLandingPage || hiddenSidebarContainer
          }>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
