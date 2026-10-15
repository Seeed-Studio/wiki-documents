import React, {type ReactNode, useState, useEffect} from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type {Props} from '@theme/DocRoot/Layout';

import styles from './styles.module.css';
import '/src/css/rebot-wiki-style.css';

// Sidebars owned by the AI Robotics wiki area (sites/*/robotics-sidebar.js and
// sites/*/rebot-course-sidebar.js). Keep in sync when adding a robotics product
// sidebar: robotics-only doc styles scope under `html.robotics-docs-page`.
const ROBOTICS_SIDEBARS = new Set([
  'RoboticsSidebar',
  'ActuatorSidebar',
  'LidarSidebar',
  'CameraSidebar',
  'ImuSidebar',
  'RosSidebar',
  'IsaacLabSidebar',
  'VlaSidebar',
  'PhosphoSidebar',
  'LekiwiSidebar',
  'AmazingHandSidebar',
  'StarAiSidebar',
  'ReachyMiniSidebar',
  'StackForceSidebar',
  'AtomSidebar',
  'RebotCourseSidebar',
  'RebotRsSidebar',
  'RebotDmSidebar',
]);

export default function DocRootLayout({children}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const normalizedPath = pathname.replace(/\/+$/, '');
  const isRoboticsLandingPage = normalizedPath.endsWith('/robotics_page');
  const isRoboticsDocsPage =
    sidebar?.name != null && ROBOTICS_SIDEBARS.has(sidebar.name);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'robotics-landing-page',
      isRoboticsLandingPage,
    );
    return () => {
      document.documentElement.classList.remove('robotics-landing-page');
    };
  }, [isRoboticsLandingPage]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'robotics-docs-page',
      isRoboticsDocsPage,
    );
    return () => {
      document.documentElement.classList.remove('robotics-docs-page');
    };
  }, [isRoboticsDocsPage]);

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
