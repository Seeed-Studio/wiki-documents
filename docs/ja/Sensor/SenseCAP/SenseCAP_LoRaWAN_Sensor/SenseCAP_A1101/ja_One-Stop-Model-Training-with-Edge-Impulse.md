---
description: Edge Impulseを使用したワンストップモデルトレーニング
title: Edge Impulseを使用したワンストップモデルトレーニング
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 3/31/2023
  author: Yvonne
---

## 概要

このwikiでは、**Edge Impulse**を使用して特定のアプリケーション向けの独自のAIモデルをトレーニングし、SenseCAP A1101 - LoRaWAN Vision AI Sensorに簡単にデプロイする方法を説明します。始めましょう！

:::tip
**Edge Impulseとは？**Edge Impulseは、あらゆるエッジデバイスで最適化されたモデルを構築するエンタープライズチーム向けのエッジAIプラットフォームです。高度なAIセンサー機能により、より迅速な価値提供と製品イノベーションの実現を可能にします。
:::

## ハードウェアの準備

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **LoRaWAN Vision AI Sensor**は、開発者向けに設計された画像認識AIセンサーです。SenseCAP A1101 - LoRaWAN Vision AI Sensorは、TinyML AI技術とLoRaWAN長距離伝送を組み合わせ、屋内外での使用に対応した低消費電力・高性能AIデバイスソリューションを実現します。<br />このセンサーは、Google TensorFlow Liteフレームワークと複数のTinyML AIプラットフォームをサポートするHimaxの高性能・低消費電力AIビジョンソリューションを特徴としています。<br />

Edge Impulseによって完全にサポートされており、カメラから生データをサンプリングし、モデルを構築し、トレーニング済み機械学習モデルをプログラミング不要でスタジオから直接モジュールにデプロイできます。SenseCAP - Vision AI Moduleは[Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)から直接購入できます。

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-Cケーブル
- インターネットアクセス可能なWindows/ Linux/ Mac

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## ソフトウェアの準備

Edge ImpulseでこのA1101をセットアップするには、以下のソフトウェアをインストールする必要があります：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)
2. Linuxの場合：
   - GNU Screen：例えば`sudo apt install screen`でインストール
3. 最新の[Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)をダウンロード

:::tip
**Edge Impulse CLIのインストールに問題がありますか？**
[インストールとトラブルシューティングガイド](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)を参照してください。
:::

## Edge Impulseへの接続

すべてのソフトウェアが準備できたら、A1101をEdge Impulseに接続します。

:::caution **注意：**
**2023年3月30日**以降にデバイスを購入した場合、EIのファームウェアを更新する必要はありません。直接[STEP3](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys)キーの設定にジャンプしてください。EIのファームウェアを更新すると、デフォルトモデルが上書きされることにご注意ください。
:::

### ステップ1. BL702チップファームウェアの更新

BL702は、PCとHimaxチップ間の通信を可能にするUSB-UARTチップです。Edge Impulseファームウェアが正常に動作するために、このファームウェアを更新する必要があります。

1. [こちら](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases)から最新のブートローダーファームウェアを取得：**tinyuf2-sensecap_vision_ai_xxx.bin**

2. A1101の**Boot**ボタンを押しながら、USB Type-CケーブルでA1101をPCに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. 事前にインストールしたBouffalo Lab Dev Cubeソフトウェアを開き、**BL702/704/706**を選択し、**Finish**をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. **MCU**タブに移動します。**Image file**の下で**Browse**をクリックし、ダウンロードしたファームウェアを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. **Refresh**をクリックし、接続されたA1101に関連する**Port**を選択し、**Chip Erase**を**True**に設定し、**Open UART**をクリックし、**Create & Download**をクリックしてプロセスが完了するまで待ちます。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

正常に完了すると、**All Success**として出力が表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
フラッシュでエラーが発生した場合は、**All Success**メッセージが表示されるまで**Create & Download**を複数回クリックしてみてください。
:::

### ステップ2. Edge Impulseファームウェアの更新

A1101には適切なEdge Impulseファームウェアがまだ搭載されていません。ファームウェアを更新するには：

1. [最新のEdge Impulseファームウェアをダウンロード](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip)し、解凍して**firmware.uf2**ファイルを取得します。

2. USB Type-CケーブルでA1101を再度PCに接続し、A1101の**Boot**ボタンをダブルクリックして**マスストレージモード**に入ります。

3. その後、ファイルエクスプローラーに**SENSECAP**として新しいストレージドライブが表示されます。**firmware.uf2**ファイルをSENSECAPドライブにドラッグアンドドロップします。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

コピーが完了すると**SENSECAP**ドライブが消えます。これがコピーが成功したかどうかを確認する方法です。

### ステップ3. キーの設定

コマンドプロンプトまたはターミナルから、以下を実行します：

```
edge-impulse-daemon
```

これにより、ログインしてEdge Impulseプロジェクトを選択するよう求めるウィザードが開始されます。プロジェクトを切り替えたい場合は、`--clean`オプションを付けてコマンドを実行してください。

また、Google ChromeやMicrosoft Edgeの最新バージョンでは、Edge Impulse CLIを使用せずに、A1101から直接データを収集することができます。詳細については[このブログ記事](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)をご覧ください。

### ステップ4. デバイスが接続されていることを確認する

以上です！デバイスがEdge Impulseに接続されました。これを確認するには、[Edge Impulseプロジェクト](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)にアクセスし、**Devices**をクリックしてください。デバイスがここに表示されます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## A1101 - Vision AIからのデータ収集

すべての設定が完了したら、以下のチュートリアルで初めての機械学習モデルを構築して実行できます：

- [物体検出](https://docs.edgeimpulse.com/docs/tutorials/object-detection)
- [FOMOを使用した物体カウント](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)

オンボードカメラからのフレームは、スタジオから直接キャプチャできます：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

最後に、モデルがトレーニングされると、A1101 – Vision AIモジュールに簡単にデプロイして推論を開始できます！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## A1101 - Vision AIへのモデルデプロイ

機械学習モデルを構築し、Edge Impulse StudioからEdge Impulseファームウェアをダウンロードした後、[Edge Impulseファームウェア更新セクション](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware)の**ステップ1と2**に従って、モデルuf2をSenseCAP - Vision AIにデプロイします。
EDGE IMPULSEから**firmware.uf2**ファイルを**SENSECAP**ドライブにドラッグアンドドロップしてください。

ローカルインターフェースでこれを実行すると：

```
edge-impulse-daemon --debug
```

URLをクリックするよう求められ、デバイス上でカメラのライブプレビューが表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## SenseCap Mateでモデルを設定する

- [SenseCAP Mate](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback)をダウンロード
  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- SenseCAP Mateを開いてログイン

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- **Config**画面で、**Vision AI Sensor**を選択

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- SenseCap A1101の設定ボタンを3秒間長押しして、Bluetoothペアリングモードに入る

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- **Setup**をクリックすると、近くのSenseCAP A1101デバイスのスキャンが開始されます- **Settings**に移動し、**Object Detection**と**User Defined 1**が選択されていることを確認してください。選択されていない場合は、選択して**Send**をクリック

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- **General**に移動し、**Detect**をクリック

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [こちらをクリック](https://files.seeedstudio.com/grove_ai_vision/index.html)してカメラストリームのプレビューウィンドウを開く

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- **Connect**ボタンをクリック。ブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired**を選択し、**Connect**をクリック

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- プレビューウィンドウを使用してリアルタイム推論結果を表示！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

例えば、上記のように、猫がバウンディングボックスで囲まれて検出されています。ここで「0」は同じクラスの各検出に対応しています。複数のクラスがある場合、0、1、2、3、4などと名前が付けられます。また、検出された各りんごの信頼度スコア（上記のデモでは0.72）も表示されています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
