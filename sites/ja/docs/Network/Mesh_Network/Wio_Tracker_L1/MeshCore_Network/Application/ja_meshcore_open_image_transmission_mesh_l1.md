---
description: このガイドでは、Card Tracker wio tracker L1 をベースにした超低ビットレート画像圧縮を用いて、MeshCore 上で AI により再構成された画像を送信する方法を説明します。
title: 画像伝送
keywords:
  - MeshCore
  - MeshCore Open
  - Wio Tracker L1
  - Image Transmission
  - AI Image Compression
  - LoRa Mesh
  - AEIC-SE
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Image_Transmission_MeshCore.png
slug: /meshcore_ai_image_transmission_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 9/19/2026
  author: Michelle Huang
createdAt: 2026-09-19
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/meshcore_ai_image_transmission_l1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}>

<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreOpen/MeshCore_Open_Project.png" style={{width:900, height:'auto'}}/>

</div>

[MeshCore](https://meshcore.io/) は、低帯域幅の LoRa メッシュ通信向けに設計されています。通常の写真は数百キロバイト以上のデータを必要とするため、従来の画像伝送は困難でした。[MeshCore Open](https://meshcoreopen.org/) は、次の要素を組み合わせることで MeshCore 上での**超低ビットレート画像伝送**を実現します：

- MeshCore Open アプリ
- AI ベースの画像圧縮
- MeshCore の `GRP_DATA` パケット


この画像伝送機能は、インターネットや携帯電話ネットワークが信頼できない場所で視覚情報を共有する必要があるユーザーに適しています。

- **アウトドア探検家**：ハイカー、クライマー、遠征チームが、登山道の状況を共有したり、遠隔地の風景画像を送信したり、テキストだけでは不十分な場合に視覚情報を提供できます。
- **緊急・災害対応チーム**：現場の状況を共有し、迅速なビジュアルアップデートを提供し、画像を通じてチームの状況認識を向上させることができます。
- **オフグリッド通信愛好家**：AI を活用したエッジ通信を探求したい MeshCore やアマチュア無線ユーザーに適しています。


## MeshCore における画像伝送の仕組み

画像は**直接送信されるわけではありません**。送信側ではローカルの AI エンコーダーを使用して、画像を非常に小さなバイナリファイルに変換します。受信側は元のピクセルを復元しません。その代わりに、ローカルの AI デコーダーが圧縮データを用いて、見た目が類似した画像を生成します。


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

1. MeshCore Open アプリをインストールします。[Click here](https://discord.com/channels/@me/1547501987703037965/1547520066478936134) から、画像伝送をサポートする APP リリースをインストールします。
2. MeshCore ノードを APP に接続します。L1 の接続ガイドを読むには [Click here](https://wiki.seeedstudio.com/ja/get_started_with_other_mesh_firmware/#connect-via-app) をクリックしてください。
3. LoRa のリージョンとネットワーク設定を構成します。
4. 受信側として利用可能な別の MeshCore ノードがあることを確認します。

一般的な MeshCore のセットアップ手順については、[MeshCore Open Getting Start Guide](https://meshcoreopen.org/docs/getting-started/) を参照してください：

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

## AI により再構成された画像について

出力画像は元の画像をピクセル単位で完全にコピーしたものではありません。デコーダーは、送信されていない追加のディテールを生成する場合があります。そのため、この機能はシーン認識、屋外での通信、遠隔監視、視覚情報の共有には適していますが、証拠収集、本人確認、科学的画像解析、正確な画像再現を必要とする用途には適していません。

## リソース

- [MeshCore Open Documentation](https://meshcoreopen.org/docs/getting-started/)
- [AEIC-SE Ultra-Low Bitrate Image Codec](https://huggingface.co/zjs81/aeic-se-onnx)
