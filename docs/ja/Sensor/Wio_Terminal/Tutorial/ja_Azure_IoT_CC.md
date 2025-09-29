---
title: CodecraftでAzure IoTとWio Terminalを接続する
nointro:
keywords:
  - Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/Azure_IoT_CC
last_update:
  date: 05/15/2025
  author: gunengyu
---


# CodecraftでAzure IoTとWio Terminalを接続する

## はじめに

ここでは、Codecraftを使用してAzure IoTとWio Terminalを接続し、センサーをIoTプロジェクトに適用する方法を紹介します。[Codecraft](https://ide.tinkergen.com/)は、Seeedが提供するオンラインおよびオフラインで使用可能なグラフィカルプログラミングアプリケーションです。[Azure IoT](https://apps.azureiotcentral.com/)は、Microsoftが提供するホスト型IoTアプリプラットフォームで、安全性が高く、ビジネスの成長に応じてスケールし、既存のビジネスアプリと統合できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## はじめに

### ハードウェア

**必要なハードウェア**

このデモでは、以下のデバイスが必要です：

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Type-Cケーブル x1
- コンピュータ x1

**ハードウェア接続**

Type-Cケーブルを使用してコンピュータに接続します。

### ソフトウェア

**必要なソフトウェア**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### チュートリアル

ここでは、CodecraftでWio Terminalを使用し、CodecraftをAzure IoTに接続して機械学習モデルをトレーニングし、それを使用する方法を紹介します。このプロジェクトはArduinoプラットフォームに基づいているため、Arduino IDEとさまざまなArduinoライブラリが必要です。Wio Terminalを初めて使用する場合は、[Wio Terminalのクイックスタートガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)を参照することをお勧めします。

- **ステップ1** Wio TerminalをPCに接続します。
- **ステップ2** [Codecraftウェブサイト](https://ide.tinkergen.com/)を開き、Wio Terminalに接続します。

Wio Terminalを選択します。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

「接続」を選択します。初めてCodecraftを使用する場合は、CodecraftAssistantをインストールする必要があるかもしれません。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **ステップ3** 左側のブロックをドラッグして、以下のようなプログラムを完成させます。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

ご覧のとおり、Wi-Fiと**Azure IoT CentralのスコープID**を設定する必要があります。Wi-Fiは自分の環境と同じである必要があり、次のステップでAzure IoTの情報を入力します。

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **ステップ4** [Azureウェブサイト](https://ide.tinkergen.com/)を開き、**新しいアプリを作成**します。

左側の**「ビルド」**をクリックします。ここでの情報はカスタマイズ可能で、重要ではありません。

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **ステップ5** **「管理」-->「デバイス接続」-->「SAS-IoT-Device」**をクリックしてWio Terminalを追加します。

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **ステップ6** Codecraftで必要な情報をコピーし、作成したプログラムに貼り付けます。

ここで必要な情報は、**「ID Scope」、「Primary key」、「Device ID」**です。

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **ステップ7** プログラムをアップロードして結果を確認します。

「アップロード」をクリックしてプログラムをアップロードします。

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

アップロードにはかなり時間がかかる場合がありますので、しばらくお待ちください。

Azure IoTページに移動し、「デバイス」-->「SAS-IoT-Device」をクリックします。

結果は以下のようになります：

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

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