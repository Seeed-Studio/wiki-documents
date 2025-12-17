import React, { useMemo, useState } from 'react';
import { Select, Image, ConfigProvider, theme } from 'antd';
import { useColorMode } from '@docusaurus/theme-common';
import L4TData from '@site/src/data/jetson/L4TData.json';

const texts = {
  en: {
    selectProduct: 'Select a product',
    warningPrefix:
      'If you are using an Orin NX 16GB/8GB module, do not enable MAXN SUPER mode.',
    warningSuffix:
      'The cooling capacity of the {board} is insufficient and forcing this mode may result in permanent damage to the module.',
    packageTitle: 'OTA payload package',
    versionLabel: 'Target L4T',
    fileLabel: 'Filename',
    shaLabel: 'SHA256',
    downloadLabel: 'Download',
    missing: 'No OTA payload metadata was found for this product. Please contact Seeed support.',
  },

  zh: {
    selectProduct: '选择一个产品',
    warningPrefix:
      '如果你使用的是 Orin NX 16GB/8GB 模组，请不要启用 MAXN SUPER 模式。',
    warningSuffix:
      '{board} 的散热能力不足，强行使用该模式可能会对模组造成永久性损坏。',
    packageTitle: 'OTA 负载包',
    versionLabel: '目标 L4T',
    fileLabel: '文件名',
    shaLabel: 'SHA256',
    downloadLabel: '下载',
    missing: '未找到该产品的 OTA 负载元数据，请联系 Seeed 技术支持。',
  },

  ja: {
    selectProduct: '製品を選択してください',
    warningPrefix:
      'Orin NX 16GB/8GB モジュールを使用している場合は、MAXN SUPER モードを有効にしないでください。',
    warningSuffix:
      '{board} の冷却性能は不十分であり、このモードを強制するとモジュールが恒久的な損傷を受ける可能性があります。',
    packageTitle: 'OTA ペイロードパッケージ',
    versionLabel: '対象 L4T',
    fileLabel: 'ファイル名',
    shaLabel: 'SHA256',
    downloadLabel: 'ダウンロード',
    missing: 'この製品の OTA ペイロードメタデータが見つかりませんでした。Seeed サポートまでお問い合わせください。',
  },

  es: {
    selectProduct: 'Selecciona un producto',
    warningPrefix:
      'Si estás utilizando un módulo Orin NX de 16 GB u 8 GB, no habilites el modo MAXN SUPER.',
    warningSuffix:
      'La capacidad de refrigeración de {board} es insuficiente y forzar este modo puede causar daños permanentes al módulo.',
    packageTitle: 'Paquete de payload OTA',
    versionLabel: 'L4T objetivo',
    fileLabel: 'Nombre de archivo',
    shaLabel: 'SHA256',
    downloadLabel: 'Descargar',
    missing:
      'No se encontró metadatos de payload OTA para este producto. Ponte en contacto con el soporte de Seeed.',
  },
};

const toNumericArray = (value = '') => (value.match(/\d+/g) || []).map(Number);
const compareVersion = (a = '', b = '') => {
  const A = toNumericArray(a);
  const B = toNumericArray(b);
  const length = Math.max(A.length, B.length);
  for (let i = 0; i < length; i += 1) {
    const diff = (A[i] || 0) - (B[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

const findOtaRecord = (productValue, preferredL4T) => {
  const records = L4TData.filter((item) => item.product === productValue);
  if (!records.length) return null;
  if (preferredL4T) {
    const exact = records.find((item) => item.l4t === preferredL4T);
    if (exact) return exact;
  }
  return [...records].sort((a, b) => compareVersion(b.l4t, a.l4t))[0];
};

const OtaProductSelect = ({ options = [], lang = 'en' }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value ?? null);
  const { colorMode } = useColorMode();
  const themeConfig = colorMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;
  const locale = texts[lang] || texts.en;

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === selectedValue),
    [options, selectedValue],
  );

  const otaRecord = useMemo(() => {
    if (!selectedValue) return null;
    return findOtaRecord(selectedValue, selectedOption?.otaL4T);
  }, [selectedValue, selectedOption]);

  const payload = selectedOption?.otaPayload && selectedOption.otaPayload.mainlink
    ? selectedOption.otaPayload
    : otaRecord;

  const needsCoolingWarning = selectedOption
    ? !/agx/i.test(selectedOption.label || selectedOption.value || '')
    : false;
  const warningBoardName = selectedOption?.warningName || selectedOption?.label || 'this carrier board';

  return (
    <ConfigProvider theme={{ algorithm: themeConfig }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          padding: '1rem',
        }}
      >
        {selectedOption?.img && (
          <Image width={600} src={selectedOption.img} alt={selectedOption.label} />
        )}
        <Select
          showSearch
          size="large"
          placeholder={locale.selectProduct}
          optionFilterProp="label"
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
          style={{ width: '100%', maxWidth: 600 }}
        />
        {needsCoolingWarning && (
          <div className="alert alert--danger" role="alert" style={{ width: '100%' }}>
            <strong>Warning</strong>
            <br />
            {locale.warningPrefix}{' '}
            {locale.warningSuffix.replace('{board}', warningBoardName)}
          </div>
        )}

        {payload ? (
          <div className="card" style={{ width: '100%', maxWidth: 720 }}>
            <div className="card__header">
              <h3>{locale.packageTitle}</h3>
              {selectedOption?.otaDescription && <p>{selectedOption.otaDescription}</p>}
            </div>
            <div className="card__body">
              {payload.l4t && (
                <p>
                  <strong>{locale.versionLabel}:</strong> {payload.l4t}
                </p>
              )}
              {payload.filename && (
                <p>
                  <strong>{locale.fileLabel}:</strong> {payload.filename}
                </p>
              )}
              {payload.sha256 && (
                <p>
                  <strong>{locale.shaLabel}:</strong> {payload.sha256}
                </p>
              )}
              {payload.mainlink && (
                <p>
                  <strong>{locale.downloadLabel}:</strong>{' '}
                  <a href={payload.mainlink} target="_blank" rel="noreferrer">
                    OneDrive 1
                  </a>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="alert alert--warning" role="alert" style={{ width: '100%' }}>
            {locale.missing}
          </div>
        )}
      </div>
    </ConfigProvider>
  );
};

export default OtaProductSelect;
