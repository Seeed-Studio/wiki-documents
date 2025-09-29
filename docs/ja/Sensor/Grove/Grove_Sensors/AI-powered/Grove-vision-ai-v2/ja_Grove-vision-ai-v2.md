---
description: Grove Vision AI V2 の使い方を始めましょう。
title: Grove Vision AI Module V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove ビジョン AI モジュール V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

これは、Arm Cortex-M55 & Ethos-U55 によって駆動される MCU ベースのビジョン AI モジュールです。TensorFlow と PyTorch フレームワークをサポートし、Arduino IDE に対応しています。SenseCraft AI アルゴリズムプラットフォームを使用することで、コードを書くことなくトレーニング済みの ML モデルをセンサーにデプロイできます。標準 CSI インターフェース、オンボードデジタルマイク、SD カードスロットを備えており、さまざまな組み込み AI ビジョンプロジェクトに非常に適しています。

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Chrome または Chrome エンジンをベースにした Edge ブラウザをご使用ください。
:::

### 特徴

- **強力な AI 処理能力**: WiseEye2 HX6538 プロセッサを使用し、デュアルコア Arm Cortex-M55 と統合された Arm Ethos-U55 ニューラルネットワークユニットを搭載。
- **多様な AI モデルのサポート**: SenseCraft AI から既製のモデルやカスタム AI モデルを簡単にデプロイ可能。Mobilenet V1、V2、Efficientnet-lite、Yolo v5 & v8 を含む。TensorFlow と PyTorch フレームワークをサポート。
- **豊富な周辺機器**: PDM マイク、SD カードスロット、Type-C、Grove インターフェースなどの周辺機器を搭載。
- **高い互換性**: XIAO シリーズ、Arduino、Raspberry Pi、ESP 開発ボードに対応しており、さらなる開発が容易。
- **完全オープンソース**: すべてのコード、設計ファイル、回路図が改変および利用可能。

### 応用例

- 工業オートメーション: 品質検査、予知保全、音声制御など。
- スマートシティ: デバイス監視、エネルギー管理など。
- 交通: 状態監視、位置追跡など。
- スマート農業: 環境監視など。
- モバイル IoT デバイス: ウェアラブルデバイス、ハンドヘルドデバイスなど。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 の全機能を使用するには、CSI カメラを別途購入する必要がある場合があります。おすすめは [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html) です。

#### CSI インターフェースカメラへの接続

Grove Vision AI V2 とカメラの準備が整ったら、CSI 接続ケーブルを使用して接続できます。接続する際は、ピン列の方向に注意し、逆向きに差し込まないようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## ブート / リセット / ドライバのフラッシュ

### ブート

もし何らかの異常な方法を使用して Grove Vision AI が正常に動作しなくなった場合（ソフトウェアレベルで）、デバイスを復活させるために BootLoader モードにする必要があるかもしれません。以下は BootLoader モードに入る方法です。

**方法 1**

Grove Vision AI とコンピュータ間の接続ケーブルを取り外してください。その後、デバイスの Boot ボタンを押し続けたままにします。この状態で、Type-C タイプのデータケーブルを使用して Grove Vision AI をコンピュータに接続し、再度ボタンを離します。この時点でデバイスは BootLoader モードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法 2**

Grove Vision AI をコンピュータに接続した状態で、Boot ボタンを押し、その後すぐに Reset ボタンを押すことで BootLoader モードに入ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### リセット

デバイスのデータが突然アップロードされなくなったり、画像が固まったりする問題が発生した場合は、Reset ボタンを使用してデバイスを再起動することを試してみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### ドライバ

Grove Vision AI V2 をコンピュータに接続した後に認識されない場合、コンピュータに CH343 ドライバをインストールする必要があるかもしれません。以下は CH343 ドライバのダウンロードとインストールリンクです。

- Windows Vendor VCP Driver ワンクリックインストーラー: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows Vendor VCP Driver: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC ドライバ ワンクリックインストーラー: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC ドライバ: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- macOS Vendor VCP Driver: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

:::tip
Linux での使用には以下を追加する必要があります。以下は UBUNTU の例ですが、他のシステムも似たような手順になりますが、ここではリストしません。
```cpp
sudo echo 'USBSYTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE:="0666"' > /etc/udev/rules.d/99-grove-vision-ai.rules
sudo udevadm control --reload-rules
sudo udevadm trigger 
```
:::

### Bootloader Recovery Tool マニュアル

このセクションでは、Grove Vision AI (WE2) モジュールのブートローダーを復旧する方法について説明します。復旧ツールは、ブートローダーが破損した場合や新しいファームウェアを Grove Vision AI (WE2) モジュールにフラッシュする場合に使用できるソフトウェアツールです。

#### 必要条件

- Arduino IDE に対応した I2C インターフェースを持つ任意のボード
- Grove Vision AI V2
- 4ピンケーブル

#### ソフトウェアインストール

1. [公式ウェブサイト](https://www.arduino.cc/en/software)から Arduino IDE をインストールします。
2. [GitHub リポジトリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)から最新バージョンの Seeed_Arduino_SSCMA ライブラリをダウンロードします。
3. Arduino IDE にライブラリを追加します。**スケッチ > ライブラリを含める > .ZIP ライブラリを追加**を選択し、ダウンロードしたファイルを選択します。
4. Arduino IDE で `we2_iic_bootloader_recover` の例を開きます: **ファイル > 例 > Seeed_Arduino_SSCMA > we2_iic_bootloader_recover**。
5. 例を Arduino ボードにアップロードします。

#### ハードウェア接続

Grove Vision AI (WE2) モジュールを 4ピンケーブルを使用して Arduino ボードのデフォルトの I2C インターフェースに接続します。各ワイヤが正しいピンに接続されていることを確認してください。

- SCL -> SCL (Grove Vision AI WE2)
- SDA -> SDA (Grove Vision AI WE2)
- VCC -> VCC (Grove Vision AI WE2, 3.3V)
- GND -> GND (Grove Vision AI WE2)

#### 使用方法

1. Arduino ボードがコンピュータに接続されていること、そして Grove Vision AI (WE2) モジュールが Arduino ボードに接続されていることを確認してください。
2. Arduino IDE のシリアルモニタを開きます。（または minicom、PuTTY などの他のシリアルモニタソフトウェアを使用）
3. Grove Vision AI (WE2) デバイスが検出されるのを待ちます。
4. 'enter' を押してブートローダー復旧プロセスを開始し、プロセスが完了するのを待ちます。

:::note
Grove Vision AI V2 をコンピュータに接続する前に、BOOT ボタンを押し続けながらデータケーブルを使用してコンピュータに接続し、その後 BOOT ボタンを離してください。一部のケースでは、ブートローダーを正常に復旧するために 3～10 回試す必要がある場合があります。
:::

## はじめに

### Arduino を使った始め方

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/grove_vision_ai_v2_software_support/#-arduino-library-introduction-" class="getting_started_label2"> Arduino（Seeed Studio XIAO）</a>
          <br/>物体認識またはシリアル通信
      </div>
  </div>
</div>

### SenseCraft AI を使った始め方

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI モデルアシスタント</a>
          <br/>コード不要で AI モデルをデプロイし観察
      </div>
  </div>
</div>

### Grove Vision AI V2 を Home Assistant に接続する

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/ja/connect_vision_ai_v2_to_ha" class="getting_started_label2"> Home Assistant への接続</a>
          <br/>Grove Vision AI V2 を Home Assistant に統合
      </div>
  </div>
</div>

## トラブルシューティング

### Q1: Grove Vision AI はライブ画面を出力しながら XIAO の結果情報を見ることができますか？

できません。フレームレートや画像推論の速度を考慮すると、現段階では両方の作業を同時に実行することはサポートしていません。XIAO が接続されている場合、認識された情報のみを受け取ることができ、リアルタイムのフレームは表示されません。

### Q2: Grove Vision AI V2 はどのカメラをサポートしていますか？OV5647-62 のみですか？

[こちら](/ja/Grove-vision-ai-v2-camera-supported)をご確認ください。現在、OV5642 シリーズのカメラ用ドライバが記述されているため、Grove Vision AI V2 は Raspberry Pi OV5647 カメラ全シリーズ（例: OV5647-62、OV5647-67、OV5647-160）をサポートしています。他の CSI カメラも理論上サポートされていますが、一部のカメラにはドライバが記述されていない、またはカラー処理ユニットが内蔵されていないため、色が緑のみになる問題が発生する可能性があります。このため、フルカラーが失われることで認識精度に影響を及ぼす可能性があります。

## リソース

- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[PDF]** [回路図](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [レイアウト図](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip)
- **[Zip]** [部品表](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[STP]** [Grove Vision AI V2 キットケース 3D モデル](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/grove_vision_ai_v2_kit_case.stp)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>