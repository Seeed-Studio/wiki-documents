/*
 * Component: OneDriveLink
 * -----------------------
 * Displays download links and file metadata for selected Jetson products and L4T versions.
 * Data is sourced from an external JSON file (L4TData.json).
 *
 * Requirements:
 * - User must select a product and L4T version from the state (managed by Zustand via useJetsonStore).
 * - If either product or L4T is not selected or data is missing, an instructional message is shown.
 */

import React from 'react';
import { Col, Row, Tag } from 'antd';
import { useJetsonStore } from '@site/src/stores/useJetsonStore';
import L4TData from "@site/src/data/jetson/L4TData.json"

/**
 * A React component that displays download links and file information
 * based on the selected product and L4T version.
 */
import Admonition from '@theme/Admonition';

const cmpVersions = (a, b) => {
    const toNums = v => String(v).match(/\d+/g)?.map(Number) ?? [];
    const A = toNums(a), B = toNums(b);
    const n = Math.max(A.length, B.length);
    for (let i = 0; i < n; i++) {
      const x = A[i] ?? 0, y = B[i] ?? 0;
      if (x > y) return 1;
      if (x < y) return -1;
    }
    return 0;
  };


  export const OneDriveLink = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const l4t = useJetsonStore(state => state.l4t);

    const content = {
      en: {
        missingSelection: "Finish the selection first, or corresponding information is missing.",
        link: "Link",
        file: "File",
        sha256: "SHA256",
        dangerTitle: "Warning",
        dangerBody: (
          <>
            If you are using an <strong>Orin NX 16GB/8GB</strong> module,{" "}
            <strong>do not enable MAXN SUPER mode</strong>.<br />
            The cooling capacity of <strong>J4011/J4012</strong> is insufficient to support it,
            and forcing this mode may result in <strong>permanent damage</strong> to the module.
          </>
        ),
      },
      zh: {
        missingSelection: "请先完成选择，否则缺失相关信息。",
        link: "链接",
        file: "文件",
        sha256: "SHA256",
        dangerTitle: "警告",
        dangerBody: (
          <>
            如果您使用的是 <strong>Orin NX 16GB/8GB</strong> 模块，请
            <strong>不要启用 MAXN SUPER 模式</strong>。<br />
            <strong>J4011/J4012</strong> 的散热能力不足以支撑此模式，强制启用可能导致
            <strong>模块永久损坏</strong>。
          </>
        ),
      },
      ja: {
        missingSelection: "まず選択を完了してください。対応する情報が不足しています。",
        link: "リンク",
        file: "ファイル",
        sha256: "SHA256",
        dangerTitle: "警告",
        dangerBody: (
          <>
            <strong>Orin NX 16GB/8GB</strong> モジュールを使用している場合は、
            <strong>MAXN SUPER モードを有効にしないでください</strong>。<br />
            <strong>J4011/J4012</strong> の冷却能力ではこのモードを支えられず、
            強制するとモジュールが<strong>恒久的に損傷</strong>する可能性があります。
          </>
        ),
      },
      es: {
        missingSelection: "Primero complete la selección o falta la información correspondiente.",
        link: "Enlace",
        file: "Archivo",
        sha256: "SHA256",
        dangerTitle: "Advertencia",
        dangerBody: (
          <>
            Si utiliza un módulo <strong>Orin NX 16GB/8GB</strong>,{" "}
            <strong>no active el modo MAXN SUPER</strong>.<br />
            La capacidad de refrigeración de <strong>J4011/J4012</strong> es insuficiente para soportarlo
            y forzarlo puede causar <strong>daños permanentes</strong> al módulo.
          </>
        ),
      },
      pt: {
        missingSelection: "Conclua a seleção primeiro ou as informações correspondentes estão ausentes.",
        link: "Link",
        file: "Arquivo",
        sha256: "SHA256",
        dangerTitle: "Aviso",
        dangerBody: (
          <>
            Se você estiver usando um módulo <strong>Orin NX 16GB/8GB</strong>,{" "}
            <strong>não ative o modo MAXN SUPER</strong>.<br />
            A capacidade de resfriamento do <strong>J4011/J4012</strong> é insuficiente para suportá-lo,
            e forçar esse modo pode resultar em <strong>danos permanentes</strong> ao módulo.
          </>
        ),
      },
    };

    const texts = content[lang] || content.en;

    const obj = getL4TData(product, l4t);
    if (!obj.product || !obj.l4t) {
      return <p>{texts.missingSelection}</p>;
    }

    const stableFilename = obj.stableFilename || obj.filename;
    const showStableMetadata =
      Boolean(obj.mirrorlink) && stableFilename && stableFilename !== obj.filename;
    const stableSha256 = obj.stableSha256 || (showStableMetadata ? 'TBD' : obj.sha256);
    const downloadRowStyle = { marginBottom: 12 };
    const metadataStackStyle = { display: 'flex', flexDirection: 'column', gap: 8 };
    const metadataLineStyle = { display: 'flex', alignItems: 'flex-start', gap: 4, lineHeight: 1.6 };

    const warnProducts = ['j4012classic', 'j4011classic', 'j4012industrial', 'j4011industrial'];
    // 如需阈值为 36.4.3 请改成 '36.4.3'
    const showDanger =
    cmpVersions(l4t, '36.4.0') > 0 && typeof product === 'string' && warnProducts.includes(product.toLowerCase());

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 20 }}>
        {showDanger && (
          <Admonition type="danger" title={texts.dangerTitle}>
            {texts.dangerBody}
          </Admonition>
        )}

        <Row align="middle" style={downloadRowStyle}>
          <Col span={3}><p style={{ fontWeight: 'bold', margin: 0 }}>{texts.link}</p></Col>
          <Col span={5}>
            <a href={obj.mainlink}>OneDrive1</a> <Tag color="blue">latest</Tag>
          </Col>
          {obj.mirrorlink && (
            <Col span={5}>
              <a href={obj.mirrorlink}>OneDrive2</a> <Tag color="green">stable</Tag>
            </Col>
          )}
        </Row>

        <Row align="top" style={downloadRowStyle}>
          <Col span={3}><p style={{ fontWeight: 'bold', margin: 0 }}>{texts.file}</p></Col>
          <Col style={metadataStackStyle}>
            <div style={metadataLineStyle}><Tag color="blue">latest</Tag><span>{obj.filename}</span></div>
            {showStableMetadata && (
              <div style={metadataLineStyle}><Tag color="green">stable</Tag><span>{stableFilename}</span></div>
            )}
          </Col>
        </Row>

        <Row align="top">
          <Col span={3}><p style={{ fontWeight: 'bold', margin: 0 }}>{texts.sha256}</p></Col>
          <Col style={metadataStackStyle}>
            <div style={metadataLineStyle}><Tag color="blue">latest</Tag><span style={{ whiteSpace: 'pre-line' }}>{obj.sha256}</span></div>
            {showStableMetadata && (
              <div style={metadataLineStyle}><Tag color="green">stable</Tag><span style={{ whiteSpace: 'pre-line' }}>{stableSha256}</span></div>
            )}
          </Col>
        </Row>
      </div>
    );
  };



/**
 * getL4TData
 * ----------
 * Finds download information based on the given product and L4T version.
 *
 * @param {string|null} product - Product ID (e.g. "j4012s")
 * @param {string|null} l4t - L4T version string (e.g. "36.4.3")
 * @returns {Object} An object containing download links and file metadata.
 *          Returns an empty placeholder object if no match is found.
 */
export const getL4TData = (product, l4t) => {
    // fallback
    const emptyObj = {
        "product": "",
        "l4t": "",
        "mainlink": "",
        "mirrorlink": "",
        "filename": "",
        "foldername": "",
        "sha256": "",
        "stableFilename": "",
        "stableSha256": "",
    }
    return L4TData.find(item => item.product === product && item.l4t === l4t) || emptyObj;
}

export default OneDriveLink
