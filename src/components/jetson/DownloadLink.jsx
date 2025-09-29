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
export const OneDriveLink = ({ lang = 'en' }) => {
    const product = useJetsonStore(state => state.product);
    const l4t = useJetsonStore(state => state.l4t);

    // 多语言内容
    const content = {
        en: {
            missingSelection: "Finish the selection first, or corresponding information is missing.",
            link: "Link",
            file: "File",
            sha256: "SHA256"
        },
        zh: {
            missingSelection: "请先完成选择，否则缺失相关信息。",
            link: "链接",
            file: "文件",
            sha256: "SHA256"
        },
        ja: {
            missingSelection: "まず選択を完了してください。対応する情報が不足しています。",
            link: "リンク",
            file: "ファイル",
            sha256: "SHA256"
        },
        es: {
            missingSelection: "Primero complete la selección o falta la información correspondiente.",
            link: "Enlace",
            file: "Archivo",
            sha256: "SHA256"
        }
    };

    const texts = content[lang] || content.en;

    // Retrieve the associated download metadata
    let obj = getL4TData(product, l4t)

    // Show fallback message if required selection is incomplete
    if (!obj.product || !obj.l4t) {
        return <p>{texts.missingSelection}</p>;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 20,
        }}>
            <Row>
                <Col span={3}><p style={{ userSelect: 'none', fontWeight: 'bold' }}>{texts.link}</p></Col>
                <Col span={4}><a href={obj.mainlink}>OneDrive1</a></Col>
                {/* conditional rendering mirrorlink */}
                {obj.mirrorlink && (
                    <Col span={4}><a href={obj.mirrorlink}>OneDrive2</a></Col>
                )}
            </Row>

            <Row>
                <Col span={3}><p style={{ userSelect: 'none', fontWeight: 'bold' }}>{texts.file}</p></Col>
                <Col><span>{obj.filename}</span></Col>
            </Row>
            <Row>
                <Col span={3}><p style={{ userSelect: 'none', fontWeight: 'bold' }}>{texts.sha256}</p></Col>
                <Col><span>{obj.sha256}</span></Col>
            </Row>
        </div>
    );
}

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
