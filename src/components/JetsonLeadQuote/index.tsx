import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Modal } from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SuccessModal from '../SuccessModal';
import styles from './styles.module.scss';

/** 各语言站点对应的留资表单 iframe 完整 base URL（含 /woo_proxy/lead） */
const IFRAME_BASE_BY_LOCALE: Record<string, string> = {
  'zh-CN': 'https://www.seeedstudio.com.cn/woo_proxy/lead',
  ja: 'https://www.seeed.co.jp/woo_proxy/lead',
};
const IFRAME_BASE_DEFAULT = 'https://www.seeed.cc/woo_proxy/lead';

// 测试站
// const IFRAME_BASE_BY_LOCALE: Record<string, string> = {
//   'zh-CN': 'https://cn.seeedstudio.com/',
//   ja: 'https://jp.fusionpcb.jp/',
// };
// const IFRAME_BASE_DEFAULT = 'https://cc.seeedstudio.com';

/** 根据 siteConfig.baseUrl 判断当前站点语言（各站点单 locale 构建，baseUrl 即语言） */
function getLocaleFromBaseUrl(baseUrl: string): string {
  const path = (baseUrl ?? '').replace(/\/+$/, '').toLowerCase();
  if (path === '/ja' || path.startsWith('/ja/')) return 'ja';
  if (path === '/cn' || path.startsWith('/cn/')) return 'zh-CN';
  return 'en';
}

const SUCCESS_MESSAGE_TYPE = 'unified_lead_form_submit_success';
const SUCCESS_MESSAGE_SOURCE = 'connect_lead';

interface JetsonLeadQuoteProps {
  buttonText?: string;
  triggerValue?: string;
  imageSrc?: string;
  imageAlt?: string;
}

function isLeadFormSuccessEvent(data: unknown): data is { type: string; source: string } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'type' in data &&
    (data as { type: string }).type === SUCCESS_MESSAGE_TYPE &&
    'source' in data &&
    (data as { source: string }).source === SUCCESS_MESSAGE_SOURCE
  );
}

function getIframeBase(locale: string): string {
  return IFRAME_BASE_BY_LOCALE[locale] ?? IFRAME_BASE_DEFAULT;
}

export default function JetsonLeadQuote({
  buttonText = 'Request Quote',
  triggerValue = '',
  imageSrc,
  imageAlt = 'Request Quote',
}: JetsonLeadQuoteProps) {
  const { siteConfig } = useDocusaurusContext();

  const iframeBase = useMemo(
    () => getIframeBase(getLocaleFromBaseUrl(siteConfig.baseUrl ?? '')),
    [siteConfig.baseUrl]
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const closeModal = useCallback(() => setModalOpen(false), []);
  const openModal = useCallback(() => setModalOpen(true), []);

  const handleFormSuccess = useCallback(() => {
    closeModal();
    setSuccessOpen(true);

    const timer = window.setTimeout(() => {
      setSuccessOpen(false);
      window.clearTimeout(timer);
    }, 5000);
  }, [closeModal]);

  useEffect(() => {
    if (!modalOpen) return;

    const handler = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (isLeadFormSuccessEvent(data)) {
          handleFormSuccess();
        }
      } catch {
        // ignore non-JSON or invalid payloads
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [modalOpen, handleFormSuccess]);

  const triggerParam = triggerValue ? `WIKI::${encodeURIComponent(triggerValue)}` : 'WIKI';
  const iframeSrc = `${iframeBase}?trigger=${triggerParam}`;

  return (
    <>
      {imageSrc ? (
        <button
          type="button"
          className={styles.bannerTrigger}
          onClick={openModal}
          aria-label={buttonText}
          title={imageAlt || buttonText}
        >
          <span className={styles.bannerImageWrapper}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.bannerImage}
              draggable={false}
            />
            <span className={styles.ctaOverlay}>
              {buttonText} →
            </span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className={styles.trigger}
          onClick={openModal}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      )}

      <Modal
        title={buttonText}
        open={modalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        width={760}
        destroyOnClose
        bodyStyle={{ padding: 0 }}
      >
        <div className={styles.iframeWrap}>
          <iframe
            title="Request Quote"
            src={iframeSrc}
            className={styles.iframe}
          />
        </div>
      </Modal>

      <SuccessModal
        visible={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Envío correcto"
        content="Gracias por su envío. Nos pondremos en contacto con usted pronto."
      />
    </>
  );
}