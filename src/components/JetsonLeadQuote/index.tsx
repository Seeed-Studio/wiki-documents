import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from 'antd';
import SuccessModal from '../SuccessModal';
import styles from './styles.module.scss';

const IFRAME_BASE = 'https://cc.seeedstudio.com/woo_proxy/lead';
const SUCCESS_MESSAGE_TYPE = 'unified_lead_form_submit_success';
const SUCCESS_MESSAGE_SOURCE = 'connect_lead';

interface JetsonLeadQuoteProps {
  buttonText: string;
  /** 用于 iframe trigger 参数：WIKI::{triggerValue}，如当前页 slug 或路径 */
  triggerValue?: string;
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

export default function JetsonLeadQuote({ buttonText, triggerValue = '' }: JetsonLeadQuoteProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleFormSuccess = useCallback(() => {
    closeModal();
    setSuccessOpen(true);
    const timer = setTimeout(() => {
      setSuccessOpen(false);
      clearTimeout(timer);
    }, 5000);
  }, [closeModal]);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (isLeadFormSuccessEvent(data)) handleFormSuccess();
      } catch {
        // ignore non-JSON or invalid payloads
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [modalOpen, handleFormSuccess]);

  const triggerParam = triggerValue ? `WIKI::${encodeURIComponent(triggerValue)}` : 'WIKI';
  const iframeSrc = `${IFRAME_BASE}?trigger=${triggerParam}`;

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setModalOpen(true)}
      >
        {buttonText}
      </button>

      <Modal
        title={buttonText}
        open={modalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        width={480}
        destroyOnClose
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
