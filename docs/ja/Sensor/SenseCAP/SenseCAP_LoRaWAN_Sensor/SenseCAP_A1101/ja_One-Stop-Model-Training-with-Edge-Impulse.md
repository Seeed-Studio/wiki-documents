---
description: Edge Impulse を使用したワンストップモデルトレーニング
title: Edge Impulse を使用したワンストップモデルトレーニング
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

この Wiki では、**Edge Impulse** を使用して特定のアプリケーション向けに独自の AI モデルをトレーニングし、その後簡単に SenseCAP A1101 - LoRaWAN Vision AI Sensor にデプロイする方法を説明します。さっそく始めましょう！

:::tip
**Edge Impulse とは？**  
Edge Impulse は、エッジデバイス上で最適化されたモデルを構築する企業チーム向けのエッジ AI プラットフォームです。高度な AI センサー機能を活用して、価値を迅速に提供し、製品イノベーションを実現します。
:::

## ハードウェア準備

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **LoRaWAN Vision AI Sensor** は、開発者向けに設計された画像認識 AI センサーです。SenseCAP A1101 - LoRaWAN Vision AI Sensor は TinyML AI 技術と LoRaWAN 長距離伝送を組み合わせ、屋内外で使用可能な低消費電力・高性能の AI デバイスソリューションを提供します。<br />このセンサーは、Google TensorFlow Lite フレームワークおよび複数の TinyML AI プラットフォームをサポートする Himax の高性能・低消費電力 AI ビジョンソリューションを搭載しています。<br />

Edge Impulse に完全対応しており、カメラから生データをサンプリングし、モデルを構築し、トレーニング済みの機械学習モデルをスタジオから直接モジュールにデプロイすることができます。プログラミングは不要です。SenseCAP - Vision AI Module は [Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) から直接購入可能です。

- SenseCAP A1101 - LoRaWAN Vision AI Sensor
- USB Type-C ケーブル
- インターネット接続可能な Windows/ Linux/ Mac

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## ソフトウェア準備

A1101 を Edge Impulse に設定するには、以下のソフトウェアをインストールする必要があります：

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)
2. Linux の場合：
   - GNU Screen: 例えば `sudo apt install screen` を使用してインストールします。
3. 最新の [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download) をダウンロード

:::tip
**Edge Impulse CLI のインストールに問題がありますか？**  
[インストールとトラブルシューティングガイド](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation) を参照してください。
:::

## Edge Impulse への接続

すべてのソフトウェアが準備できたら、A1101 を Edge Impulse に接続します。

:::caution **注意：**  
**2023年3月30日以降**にデバイスを購入した場合、EI のファームウェアを更新する必要はありません。直接 [STEP3](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys) のキー設定に進んでください。EI のファームウェアを更新すると、デフォルトモデルが上書きされることに注意してください。
:::

### ステップ 1. BL702 チップのファームウェアを更新

BL702 は、PC と Himax チップ間の通信を可能にする USB-UART チップです。Edge Impulse ファームウェアが正しく動作するように、このファームウェアを更新する必要があります。

1. [こちら](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases) から最新のブートローダーファームウェアを取得します：**tinyuf2-sensecap_vision_ai_xxx.bin**。

2. A1101 を USB Type-C ケーブルで PC に接続し、A1101 の **Boot** ボタンを押しながら接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. 事前にインストールした Bouffalo Lab Dev Cube ソフトウェアを開き、**BL702/704/706** を選択し、**Finish** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. **MCU** タブに移動します。**Image file** の下で **Browse** をクリックし、ダウンロードしたファームウェアを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. **Refresh** をクリックし、接続された A1101 に関連する **Port** を選択します。**Chip Erase** を **True** に設定し、**Open UART** をクリックしてから **Create & Download** をクリックし、プロセスが完了するまで待ちます。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

プロセスが正常に完了すると、**All Success** と表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
フラッシング中にエラーが発生した場合、**Create & Download** を複数回クリックして **All Success** メッセージが表示されるまで試してください。
:::

### ステップ 2. Edge Impulse ファームウェアを更新

A1101 にはまだ適切な Edge Impulse ファームウェアが搭載されていません。ファームウェアを更新するには：

1. [最新の Edge Impulse ファームウェア](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip) をダウンロードし、解凍して **firmware.uf2** ファイルを取得します。

2. 再度 A1101 を USB Type-C ケーブルで PC に接続し、A1101 の **Boot** ボタンをダブルクリックして **mass storage mode** に入ります。

3. ファイルエクスプローラーに **SENSECAP** という新しいストレージドライブが表示されます。**firmware.uf2** ファイルを SENSECAP ドライブにドラッグ＆ドロップします。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

コピーが完了すると **SENSECAP** ドライブが消えます。これにより、コピーが成功したかどうかを確認できます。

### ステップ 3. キー設定

コマンドプロンプトまたはターミナルで以下を実行します：

```
edge-impulse-daemon
```

これによりウィザードが開始され、ログインと Edge Impulse プロジェクトの選択を求められます。プロジェクトを切り替えたい場合は、コマンドを `--clean` オプション付きで実行してください。

あるいは、Google Chrome および Microsoft Edge の最新バージョンでは、Edge Impulse CLI を使用せずに A1101 から直接データを収集することができます。詳細については、[こちらのブログ記事](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser)をご覧ください。

### ステップ 4. デバイスが接続されていることを確認する

これで完了です！デバイスは Edge Impulse に接続されました。これを確認するには、[Edge Impulse プロジェクト](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1)にアクセスし、**Devices** をクリックしてください。ここにデバイスが表示されます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## A1101 - Vision AI からデータを収集する

すべてのセットアップが完了したら、以下のチュートリアルを使用して最初の機械学習モデルを構築して実行できます：

- [物体検出](https://docs.edgeimpulse.com/docs/tutorials/object-detection)
- [FOMO を使用した物体のカウント](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo)

オンボードカメラからのフレームは、スタジオから直接キャプチャできます：

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

最後に、モデルがトレーニングされると、それを A1101 – Vision AI モジュールに簡単にデプロイして推論を開始できます！

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## A1101 - Vision AI にモデルをデプロイする

機械学習モデルを構築し、Edge Impulse Studio から Edge Impulse ファームウェアをダウンロードした後、[Edge Impulse ファームウェアの更新セクション](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware)の**ステップ 1 と 2**に従って、モデルの uf2 を SenseCAP - Vision AI にデプロイします。  
**firmware.uf2** ファイルを EDGE IMPULSE から **SENSECAP** ドライブにドラッグ＆ドロップしてください。

ローカルインターフェースで以下を実行すると：
```
edge-impulse-daemon --debug
```
URL をクリックするよう求められ、その後デバイスのカメラのライブプレビューが表示されます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## SenseCap Mate でモデルを設定する

- [SenseCAP Mate](https://wiki.seeedstudio.com/ja/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback) をダウンロード
   - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
   - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- SenseCAP Mate を開き、ログインします

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- **Config** 画面で **Vision AI Sensor** を選択します

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- SenseCap A1101 の設定ボタンを 3 秒間押し続けて Bluetooth ペアリングモードに入ります
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- **Setup** をクリックすると、近くの SenseCAP A1101 デバイスのスキャンが開始されます。**Settings** に移動し、**Object Detection** と **User Defined 1** が選択されていることを確認します。選択されていない場合は選択して **Send** をクリックします。
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- **General** に移動して **Detect** をクリックします。
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [こちらをクリック](https://files.seeedstudio.com/grove_ai_vision/index.html)してカメラストリームのプレビューウィンドウを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- **Connect** ボタンをクリックします。その後、ブラウザにポップアップが表示されます。**SenseCAP Vision AI - Paired** を選択して **Connect** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- プレビューウィンドウを使用してリアルタイムの推論結果を確認できます！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

例えば、上記の例では、猫が検出されており、それぞれの周りにバウンディングボックスが描かれています。ここで「0」は同じクラスの各検出を表します。複数のクラスがある場合、それらは 0, 1, 2, 3, 4 などと命名されます。また、各検出された物体（上記のデモでは 0.72）の信頼スコアも表示されています！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>