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
import { Col, Row } from 'antd';
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
            )
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
            )
        }
    };

    const texts = content[lang] || content.en;

    const obj = getL4TData(product, l4t);
    if (!obj.product || !obj.l4t) {
        return <p>{texts.missingSelection}</p>;
    }

    const warnProducts = ['j4012classic', 'j4011classic', 'j4012industrial', 'j4011industrial'];
    const showDanger = cmpVersions(l4t, '36.4.0') > 0 && product && warnProducts.includes(product.toLowerCase());

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 20,
        }}>
            {showDanger && (
                <Admonition type="danger" title={texts.dangerTitle}>
                    {texts.dangerBody}
                </Admonition>
            )}

            <Row>
                <Col span={3}><p style={{ fontWeight: 'bold' }}>{texts.link}</p></Col>
                <Col span={4}><a href={obj.mainlink}>OneDrive1</a></Col>
                {obj.mirrorlink && (
                    <Col span={4}><a href={obj.mirrorlink}>OneDrive2</a></Col>
                )}
            </Row>

            <Row>
                <Col span={3}><p style={{ fontWeight: 'bold' }}>{texts.file}</p></Col>
                <Col><span>{obj.filename}</span></Col>
            </Row>

            <Row>
                <Col span={3}><p style={{ fontWeight: 'bold' }}>{texts.sha256}</p></Col>
                <Col><span>{obj.sha256}</span></Col>
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
    }
    return L4TData.find(item => item.product === product && item.l4t === l4t) || emptyObj;
}

export default OneDriveLink
