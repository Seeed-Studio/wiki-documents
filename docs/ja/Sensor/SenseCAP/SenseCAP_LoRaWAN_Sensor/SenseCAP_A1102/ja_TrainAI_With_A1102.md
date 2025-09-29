---
description: Train_AI_With_A1102
title: SenseCraft AIを使用してSenseCAP A1102にAIモデルをデプロイする
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /ja/train_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 3/12/2024
  author: Zeke
---

# SenseCraft AIを使用してSenseCAP A1102にAIモデルをデプロイする

SenseCAP A1102は、高度なAI機能と簡単なデプロイメントを組み合わせた強力なセンサーデバイスです。このガイドでは、**SenseCraft AI**アプリを使用してA1102にAIモデルをデプロイする方法を、ペアリング、設定、テストの手順を段階的に説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **SenseCAP A1102の使用開始**

### **SenseCAP A1102とは？**

SenseCAP A1102は、エッジAIアプリケーション向けに設計されたインテリジェントカメラセンサーです。8GBのメモリを搭載し、以下の機能を提供します：

- カスタムAIモデルのデプロイ
- 認識された画像の自動保存
- 高精度でのリアルタイム認識

### **要件**

開始する前に、以下をご用意ください：

- SenseCAP A1102デバイス
- スマートフォンにインストールされた**SenseCraft AI**アプリ
- デプロイ用の事前訓練されたAIモデル

## **SenseCAP A1102の設定**

### Vision AIカメラの電源投入

:::tip
AIカメラの設定を変更する必要がある場合は、以下の手順に従ってAIカメラの電源を投入する必要があります。

LoRaWAN送信関連の設定のみを変更する場合は、このセクションをスキップできます。
:::

以下の指示に従って、Type-CポートをA1102からコンピューターに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

正しく接続されている場合、2つのインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **詳細設定へのアクセス**

下部ナビゲーションバーで「ユーザー」を選択し、「デバイスBluetooth設定」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

下部までスライドして「SenseCAP A1102」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

SenseCAP A1102の電源ボタンを**3秒間**長押しして、ペアリングモードを有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

ペアリングが完了したら、SenseCraft AIアプリで**詳細設定**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

**詳細設定**を再度クリックして、追加の設定オプションに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

## **AIモデルのデプロイ**

### **AIモデルの選択**

設定メニューから、デプロイしたいAIモデルを選択します。プリロードされたモデルから選択するか、カスタムモデルをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **モデルパラメータの設定**

以下のようなパラメータを設定します：

- **信頼度レベル**: オブジェクト認識の閾値を調整します（例：80%の信頼度）。
- **認識画像の保存**: 認識された画像をメモリカードに保存するかどうかを有効または無効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **モデルのテストと実行**

### **カメラキャプチャのプレビュー**

モデルをデプロイした後、アプリ内でカメラが撮影した画像を直接プレビューして、モデルが期待通りに動作していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **デバイス情報の表示**

アプリのホームページに戻り、A1102のデバイス情報（モデルステータス、接続性など）を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **認識結果の確認**

認識データとログを表示します。例えば、レポート間隔（例：5分ごと）を設定して、認識されたオブジェクトを追跡します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **SDカードへのアクセス**

A1102ユニットの隙間を見つけて、ドライバーを優しく挿入します。少し力を加えてこじ開けます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

4つのネジ穴を見つけて、ノブを回転させて開けます。回転させる際は、確実に緩むように一定の圧力をかけてください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

ネジが緩んだら、カバーを取り外してSDカードスロットにアクセスします。その後、SDカードを取り出して、内部に保存されている情報を読み取ることができます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **自動画像保存**

8GBの内蔵メモリを搭載したA1102は、認識された画像を自動的にメモリカードに保存できます。これらの画像は後で分析やレポート作成のためにアクセスして取得できます。

:::tip
8GBのメモリを搭載したA1102は、ターゲットが認識されたときに画像を自動的にメモリカードに保存することができます。この画像情報にアクセスする必要がある場合、メモリカードから必要な画像データを直接抽出してアクセスできます。
:::

## **技術サポート & 製品ディスカッション**

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
