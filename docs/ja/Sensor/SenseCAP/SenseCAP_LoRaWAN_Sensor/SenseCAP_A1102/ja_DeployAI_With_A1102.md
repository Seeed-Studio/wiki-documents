---
description: Deploy_AI_With_A1102
title: SenseCraft AIを使用したSenseCAP A1102へのAIモデルのデプロイ
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
- Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /ja/deploy_ai_with_a1102
sidebar_position: 3
# sidebar_class_name: hidden
last_update:
  date: 11/26/2025
  author: Twelve
---

# SenseCraft AIを使用したSenseCAP A1102へのAIモデルのデプロイ

## 概要

SenseCAP A1102は、高度なAI機能とデプロイの容易さを組み合わせた強力なセンサーデバイスです。このガイドでは、**SenseCraft AI**ウェブサイトを使用してA1102に公式またはカスタムAIモデルをデプロイする方法を、ペアリング、設定、テストの手順を含めて詳しく説明します。

## 前提条件

### 必要なハードウェア

- SenseCAP A1102デバイス
- USB Type-Cデータケーブル
- PC

### 必要なソフトウェア
- [SenseCraft AIプラットフォーム](https://sensecraft.seeed.cc/ai/home)

## AIモデルフラッシュプロセス

### ステップ1. プラットフォームを開き、ワークスペースでA1102を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. シリアルポート経由でプラットフォームに接続

- Type-Cケーブルを使用してデバイスをPCに接続します（下の画像に示すように、Himaxシリアルポートである上部のType-Cポートに接続していることを確認してください）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- `Connect`をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- ポップアップウィンドウで正しいシリアルポートを選択し、`Connect`をクリック

正しいポートが選択されている場合、Invokeを通じてプレビュービデオストリームを表示でき、モデルの選択とフラッシュを正常に進めることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. デバイスにデプロイしたいAIモデルを選択

- `Select Model`をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- パブリックモデルまたはSenseCraft AIで独自に訓練したモデルから選択

- モデルをクリックするとフラッシュプロセスが開始されます

### 独自のAIモデルをアップロードしてデバイスにデプロイ

:::warning note
当社のAIモデル伝送は**RS485**ベースで、**最大9つの認識クラス**のみをサポートします。
:::

- `Upload Model`をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- モデル情報を設定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: TFLiteモデルの訓練とエクスポートの詳細な手順については、この[ガイド](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma/)を参照してください

- `Object`: モデルのラベル順序（0から8）に対応するカテゴリ名。最大9つのクラスのみサポートされ、追加のクラスは表示されません。

- `Send`をクリックしてフラッシュプロセスを待機

## 結果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 各結果には10の測定値が含まれ、これらは10のRS485チャンネルに対応します：

- 最初の9つの測定値は、各クラスインデックス（0から8）の信頼度スコア（measurementValue）を表します。

- 10番目の測定値は、デプロイされたAIモデルに関連するメタデータを含むモデル情報を運びます。

## **技術サポート＆製品ディスカッション**

当社の製品をお選びいただき、ありがとうございます！当社の製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
