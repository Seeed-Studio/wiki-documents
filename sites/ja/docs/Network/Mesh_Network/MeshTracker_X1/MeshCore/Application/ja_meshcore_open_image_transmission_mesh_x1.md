---
description: このガイドでは、超低ビットレート画像圧縮を使用して、MeshCore 上で AI によって再構成された画像を送信する方法を説明します。
title: 画像伝送
keywords:
  - MeshCore
  - MeshCore Open
  - MeshTracker X1
  - Image Transmission
  - AI Image Compression
  - LoRa Mesh
  - AEIC-SE
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png
slug: /meshcore_ai_image_transmission_x1
sku: 100087698
sidebar_position: 1
last_update:
  date: 9/19/2026
  author: Michelle Huang
createdAt: 2026-09-19
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/meshcore_ai_image_transmission_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MeshTracker X1 向け MeshCore AI 画像伝送

<div style={{textAlign:'center'}}>

<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Project.png" style={{width:900, height:'auto'}}/>

</div>

[MeshCore](https://meshcore.io/) は、低帯域幅の LoRa メッシュ通信向けに設計されています。通常の写真は数百キロバイト以上のデータを必要とするため、従来の画像伝送は困難です。[MeshCore Open](https://meshcoreopen.org/) は、次の要素を組み合わせることで MeshCore 上での**超低ビットレート画像伝送**を実現します：

- MeshCore Open App
- AI ベースの画像圧縮
- MeshCore `GRP_DATA` パケット


この画像伝送機能は、信頼できるインターネットや携帯電話ネットワークがない場所で視覚情報を共有する必要があるユーザーに適しています。

- **アウトドア探検家**：ハイカー、クライマー、遠征チームが、登山道の状況を共有したり、遠隔地の風景画像を送信したり、テキストだけでは不十分な場合に視覚情報を提供できます。
- **緊急・災害対応チーム**：チームは現場の状況を共有し、迅速なビジュアルアップデートを提供し、画像を通じてチームの状況認識を向上させることができます。
- **オフグリッド通信愛好家**：AI を活用したエッジ通信を探求したい MeshCore やアマチュア無線ユーザーに適しています。


## MeshCore における画像伝送の仕組み

画像は**直接送信されるわけではありません**。送信側はローカルの AI エンコーダーを使用して、画像を非常に小さなバイナリファイルに変換します。受信側は元のピクセルを復元しません。その代わりに、ローカルの AI デコーダーが圧縮データを使用して、見た目が類似した画像を生成します。


ワークフローは次のとおりです：

```text
Original Image
      ↓
AI Encoder
      ↓
Small Compressed Data
(~100–200 bytes)
      ↓
MeshCore Network
      ↓
AI Decoder
      ↓
Reconstructed Image
```

## MeshCore Open を使い始める

### 初期セットアップ

1. MeshCore Open App をインストールします。[Click here](https://discord.com/channels/@me/1547501987703037965/1547520066478936134) から、画像伝送をサポートする APP リリースをインストールします。
2. MeshCore ノードを APP に接続します。[Click here](https://wiki.seeedstudio.com/ja/sensecap_meshtracker_x1_meshcore/#app-connection) から MeshTracker X1 接続ガイドを参照してください。
3. LoRa のリージョンとネットワーク設定を構成します。
4. 受信側として利用可能な別の MeshCore ノードがあることを確認します。

一般的な MeshCore セットアップ手順については、[MeshCore Open Getting Start Guide](https://meshcoreopen.org/docs/getting-started/) を参照してください：

### モデルのインストール

画像伝送を有効にし、APP の設定で ml モデルファイルをダウンロードします。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Setting.png" style={{width:600, height:'auto'}}/>
</div>

### 画像伝送

スマートフォンから画像を選択します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshOpen_PhotoSelection.png" style={{width:300, height:'auto'}}/>
</div>

APP は送信前に自動的に画像を処理します。圧縮された画像データは MeshCore ネットワークを通じて送信されます。送信時間は、メッシュホップ数、無線設定、ネットワークトラフィック、信号品質によって異なります。送信されるデータには元の画像ではなく、圧縮表現のみが含まれます。

受信ノードが圧縮データを受信すると、デコーダーが画像再構成を実行します。再構成された画像はチャット画面に表示されます。
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png" style={{width:600, height:'auto'}}/>
</div>

## AI によって再構成された画像について

出力画像は、元の画像をピクセル単位で完全にコピーしたものではありません。デコーダーは、送信されていない追加のディテールを生成する場合があります。そのため、この機能はシーン認識、アウトドア通信、遠隔監視、視覚情報の共有に適しています。証拠収集、本人確認、科学的画像解析、正確な画像再現が求められる用途には適していません。

## リソース

- [MeshCore Open Documentation](https://meshcoreopen.org/docs/getting-started/)
- [AEIC-SE Ultra-Low Bitrate Image Codec](https://huggingface.co/zjs81/aeic-se-onnx)
