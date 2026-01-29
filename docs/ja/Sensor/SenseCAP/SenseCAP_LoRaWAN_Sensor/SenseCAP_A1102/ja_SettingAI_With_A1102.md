---
description: Set_AI_With_A1102
title: SenseCraft APP を使用した SenseCAP A1102 での AI モデル設定
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /ja/setting_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 12/31/2025
  author: Twelve
---

# SenseCraft APP を使用した SenseCAP A1102 での AI モデル設定

SenseCAP A1102 は、高度な AI 機能と簡単な展開を組み合わせた強力なセンサーデバイスです。このガイドでは、**SenseCraft** アプリを使用して A1102 に AI モデルを展開する方法を、ペアリング、設定、テストの手順を段階的に説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **SenseCAP A1102 の開始**

### **SenseCAP A1102 とは？**

SenseCAP A1102 は、エッジ AI アプリケーション向けに設計されたインテリジェントカメラセンサーです。8GB のメモリを搭載し、以下のことが可能です：

- カスタム AI モデルの展開
- 認識された画像の自動保存
- 高精度でのリアルタイム認識の実現

### **要件**

開始する前に、以下をご用意ください：

- SenseCAP A1102 デバイス
- スマートフォンにインストールされた **SenseCraft AI** アプリ
- 展開用の事前訓練済み AI モデル

## **SenseCAP A1102 の設定**

### Vision AI カメラの電源投入

:::tip
AI カメラの設定を変更する必要がある場合は、以下の手順に従って AI カメラの電源を入れる必要があります。

LoRaWAN 送信関連の設定のみを変更する場合は、このセクションをスキップできます。
:::

以下の指示に従って、Type-C ポートを A1102 からコンピューターに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

正しく接続されている場合、2つのインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **詳細設定へのアクセス**

下部のナビゲーションバーで "User" を選択し、"Device Bluetooth Configuration" をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

下にスライドして "SenseCAP A1102" を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

SenseCAP A1102 の電源ボタンを **3秒間** 長押しして、ペアリングモードを有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

ペアリングが完了したら、SenseCraft AI アプリで **Advanced Settings** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

**Advanced Settings** を再度クリックして、追加の設定オプションに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

**AI Camera** を再度クリックして A1102 オプションを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/picture10.png" style={{width:400, height:'auto'}}/></div>

## **AI モデルの展開**

### **AI モデルの選択**

設定メニューから、展開したい AI モデルを選択します。プリロードされたモデルから選択するか、カスタムモデルをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **モデルパラメーターの設定**

:::warning note
AI カメラの設定を変更する必要がある場合は、AI カメラの電源を入れる手順に従う必要があります。  
[Vision AI カメラの電源投入](#Vision-AI-カメラの電源投入)を参照してください。
:::

以下のようなパラメーターを設定します：

- **信頼度レベル**: オブジェクト認識の閾値を調整（例：80% の信頼度）
- **認識画像の保存**: 認識された画像をメモリカードに保存するかどうかを有効または無効にする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **モデルのテストと実行**

### **カメラキャプチャのプレビュー**

モデルを展開した後、アプリでカメラがキャプチャした画像を直接プレビューして、モデルが期待通りに動作していることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **デバイス情報の表示**

LoRaWAN Sensor S2100 の QR コードをスキャンしてデバイスをバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture1.png" style={{width:400, height:'auto'}}/></div>

アプリのホームページに戻って、A1102 のデバイス情報（モデルステータス、接続性など）を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **認識結果の確認**

認識データとログを表示します。例えば、レポート間隔（例：5分ごと）を設定して、認識されたオブジェクトを追跡します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **SD カードへのアクセス**

A1102 ユニットの隙間を見つけて、ドライバーを優しく挿入します。少し力を加えてこじ開けます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

4つのネジ穴を見つけて、ノブを回転させて開けます。回転する際は一定の圧力をかけて、確実に緩むようにしてください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

ネジが緩んだら、カバーを取り外して SD カードスロットにアクセスします。その後、SD カードを取り出して、内部に保存された情報を読み取ることができます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **自動画像保存**

8GB の内蔵メモリにより、A1102 は認識された画像をメモリカードに自動的に保存できます。後で分析やレポート作成のためにこれらの画像にアクセスして取得できます。

:::tip
8GB のメモリを搭載した A1102 は、ターゲットが認識されたときに画像をメモリカードに自動的に保存することができます。この画像情報にアクセスする必要がある場合、メモリカードから必要な画像データを直接抽出してアクセスできます。
:::

## **トラブルシューティング**

### よくある問題

1. **AI モデルを設定する2つの方法**
  - SenseCraft APP を使用して AI カメラの内蔵モデルを設定
    - 下部の ESP32 ポートに接続します。これはデバイスに電力を供給するために使用されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:400, height:'auto'}}/></div>
  - [SenseCraft AI ウェブサイト](https://sensecraft.seeed.cc/ai)を使用して、工場でプリロードされていない AI モデルを設定
    - 上部の Himax ポートに接続します。これは Himax チップにモデルをフラッシュするために使用されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:300, height:'auto'}}/></div>

2. **AI カメラは接続されているが、アプリでは接続されていないと表示される**
  - データロガーのステータスを確認し、Information に戻る前に Settings で最初に設定することを確認してください。
  - 説明：電力を節約するため、データロガーは Settings ページに入るときのみ AI カメラに電力を供給します。

3. **呼吸ライト vs. 点滅ライト**
  - 呼吸ライト効果は、デバイスが**ネットワークを検索中**であることを示します。
  - 点滅ライトは、デバイスが**Bluetooth 設定モード**に入ったことを示します。
  - デバイスが呼吸ライトモードの場合、ボタンを一度押して赤いライトに切り替え、その後ボタンを長押しして**Bluetooth 設定モード**（点滅ライト）に入ります。

4. **AI カメラの電源は正常に入るが、APP の Bluetooth 設定で見つからない**
  - AI カメラの電源が入っているが：
    - SenseCraft APP でデバイスを検索できない。
    - **Vision AI V2** を検索してもデバイスを検出できない。
  - これは **ESP32 ファームウェアが正常に機能していない可能性**があることを示します（ESP32 は Bluetooth ブロードキャストを担当）。
  - **解決策：**  
    - ケーブルを **ESP32 ポート**に接続し、シリアルモニターを開いて ESP32 が正常に動作しているかどうかを確認してください。  
    - 異常なログや起動エラーが表示される場合は、**ESP32 ファームウェアの再フラッシュ**の手順について技術サポートにお問い合わせください。

## **技術サポートと製品ディスカッション**

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
