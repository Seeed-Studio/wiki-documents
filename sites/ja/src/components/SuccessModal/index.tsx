import React from 'react';
import { Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  title = 'Submission successful',
  content = 'The project has been successfully uploaded. After it is been accepted, you can refer the generated link to see it. Thank you so much for your contributions!'
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={520}
      className={styles.successModal}
    >
      <div className={styles.successContent}>
        <div className={styles.successIcon}>
          <CheckCircleOutlined  style={{fontSize: 64}}/>
        </div>
        <div className={styles.successText}>
          <div className={styles.successTitle} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={styles.successBody} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;

