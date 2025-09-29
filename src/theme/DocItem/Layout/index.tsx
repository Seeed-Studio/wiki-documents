import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import type { Props } from '@theme/DocItem/Layout';
import styles from './styles.module.css';
import Comment from '../../../components/comment';
import { useLocation } from '@docusaurus/router';
import { judgeHomePath } from '../../../utils/jsUtils';
import TopNav from '../../../components/topNav';
import Head from '@docusaurus/Head';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }: Props): JSX.Element {
  const docTOC = useDocTOC();
  const { frontMatter } = useDoc();
  
  // 使用类型断言解决 TypeScript 错误
  const { hide_comment: hideComment, sku, type: docType } = frontMatter as any;
  
  const location = useLocation()
  useEffect(() => {
    judgeHomePath();
  }, [location.pathname]);
  
  return (
    <div className="row">
      {/* 添加 Head 组件用于动态 meta 标签 */}
      <Head>
        {sku && <meta name="sku" content={sku} />}
        {docType && <meta name="type" content={docType} />}
      </Head>
      
      {/* 添加数据属性到静态 HTML 元素 */}
      <div 
        className={clsx('col', !docTOC.hidden && styles.docItemCol)}
        data-sku={sku || ''}
        data-doc-type={docType || ''}
      >
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
        {!hideComment && <Comment />}
      </div>
      <TopNav></TopNav>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}