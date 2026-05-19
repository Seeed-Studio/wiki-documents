---
description: ....
title: reBot Arm Jetson バンドル
tags:
  - reBot Arm 
  - reComputer Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /rebot_arm_jetson_bundle
sku: 100060965 | E26041401
last_update:
  date: 05/18/2026
  author: Youjiang
createdAt: '2026-05-18'
updatedAt: '2026-05-18'
url: https://wiki.seeedstudio.com/ja/rebot_arm_jetson_bundle/
---

# reBot Arm B601 × NVIDIA Jetson 入門ガイド

## はじめに
新時代の Physical AI のためのオールインワン具現化 AI 開発プラットフォーム。
生成 AI が単に「世界を理解する」段階から、積極的に「世界とインタラクトする」段階へと進化するにつれ、ロボティクス開発は新たな時代、すなわち Physical AI の時代に突入しています。
開発者、研究者、教育者が具現化 AI の世界へ踏み出すスピードを加速させるため、Seeed Studio は完全オープンソースの reBot Arm B601 と最先端の NVIDIA Jetson Developer Kit を組み合わせ、強力な次世代ロボティクス開発バンドルを提供します。

このバンドルは、高精度なロボットマニピュレーション機能だけでなく、マルチモーダル AI モデルや Vision-Language Model（VLM）、リアルタイムロボット推論をエッジでローカル実行するために必要な膨大な AI 計算能力も提供します。
学習・研究から迅速なプロトタイピング、実運用まで、次世代のインテリジェントロボットを構築するための完全なプラットフォームです。

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> reComputer Classic J3011 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110147.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> クイックスタート </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/quick_start.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> クイックスタート </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reComputer_J30_40_with_Jetson_getting_start/">
                    <strong><span><font color={'FFFFFF'} size={"4"}> クイックスタート </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::danger
ここでは、NVIDIA Jetson Thor を例として使用し、Jetson で reBot Arm B601 ロボットアームを素早く制御する方法を説明します。用途に応じて、他の Jetson デバイスを選択することもできます。
:::

## なぜこのバンドルなのか？
完全な具現化 AI 開発プラットフォーム

従来のロボティクス開発には、しばしば次のような制約があります：
1. クローズドなハードウェアエコシステム
2. 不十分な AI 計算能力
3. 断片化されたソフトウェアスタック
4. 高い開発ハードル
5. 実世界の Physical AI シナリオの検証が困難

reBot Arm × Jetson バンドルは、これらの課題を解決するために設計されています。

このバンドルにより、次のものが得られます：
1. 完全オープンソースの 6+1 自由度ロボットアームプラットフォーム
2. GPU によって駆動される NVIDIA のフラッグシップエッジ AI コンピューティングプラットフォーム
3. ROS1、ROS2、Isaac Sim、LeRobot のネイティブサポート
4. マルチモーダル AI および生成 AI ワークフローへの対応
5. 教育・研究・AI ロボティクスプロトタイピングのための統合環境

## セットアップ

### ハードウェア接続
1. ロボットアームの組み立てについては、[このガイド](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)を参照してください。
2. USB-to-CAN アダプタを使用して、Type-C インターフェース経由でロボットアームを NVIDIA Jetson に接続します。

### ワンクリックでアームドライバをインストール

Jetson 上でターミナルウィンドウを開き、次のコマンドを実行します。

```bash
uv pip install motorbridge
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/install_driver.png" />
</div>


### WebUI

Nvidia Jetson 上で次のコマンドを実行します：

```bash
motorbridge-gateway --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port /dev/ttyACM0 --serial-baud 921600 --dt-ms 20
```

その後、ブラウザで `https://rebot-devarm.w0x7ce.eu/` を開くと、次のページが表示されます。このインターフェースから、モーターパラメータの調整、ロボットアームの状態確認、その他の操作を行うことができます。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/webui.png" />
</div>

## アプリケーション
<div
    style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginTop: '24px'
    }}
>

    <a [LINE_169]        href="/ja/rebot_arm_b601_dm_lerobot/"
        style={{
        textDecoration: 'none',
            color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
            }}
        >
    <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
        <img
            src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_bundle/lerobot.png"
                alt="LeRobot for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
                />
            </div>
        <div style={{padding: '18px'}}>
        <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
            LeRobot で reBot Arm B601-DM を始める
                </h3>
            </div>
        </a>

    <a [LINE_196]        href="/ja/rebot_arm_b601_dm_grasping_demo/"
    style={{
        textDecoration: 'none',
        color: 'inherit',
            border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
            }}
            >
        <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
    <img
        src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png"
            alt="Visual Grasping Demo for reBot Arm B601-DM"
                style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
                />
                </div>
            <div style={{padding: '18px'}}>
        <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
        reBot Arm B601-DM ビジュアル把持デモ
            </h3>
                </div>
            </a>

    <a [LINE_223]        href="/ja/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor/"
        style={{
    textDecoration: 'none',
        color: 'inherit',
        border: '1px solid #d9d9d9',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#443f3f',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            display: 'block'
            }}
            >
            <div style={{height: '220px', padding: '12px', background: '#ffffff'}}>
        <img
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/rebot_arm_nemoclaw/robot_webui.png"
        alt="Control reBot Arm with NemoClaw on Nvidia Jetson Thor"
            style={{width: '100%', height: '100%', objectFit: 'contain', display: 'block'}}
                />
                </div>
                <div style={{padding: '18px'}}>
            <h3 style={{margin: 0, fontSize: '1.05rem', lineHeight: 1.4}}>
        Nvidia Jetson Thor 上で NemoClaw を使って reBot Arm を制御
        </h3>
            </div>
                </a>
            </div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
