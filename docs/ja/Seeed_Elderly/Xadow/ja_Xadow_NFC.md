---
description: Xadow - NFC
title: Xadow - NFC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_NFC
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
近距離無線通信（NFC）は、短距離無線技術のセットです。アクセス制御システムやモバイル決済システムなど、日常的なアプリケーションの背後にある技術です。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg)

Xadow NFCは、13.56MHzでの非接触通信を処理する高度に統合されたトランシーバーモジュールPN532を搭載しています。このモジュールを使用して13.56MHzタグを読み書きしたり、2つのXadow NFC間でポイントツーポイントのデータ交換を実装することができます。Xadow NFCは、I2C、SPI、UART通信プロトコルを使用するように設計されており、デフォルトモードはI2Cです。さらに、独立したPCBアンテナを割り当てており、使用するエンクロージャーの外に簡単に伸ばすことができ、プロジェクトの外観デザインにより多くの余地を残します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

## 仕様
---
- 動作電圧: 3.3V
- 動作電流:
  - 静止モード: 73mA
  - 書き込み/読み取りモード: 83mA
- サポートするホストインターフェース: I2C（デフォルト）、SPI、UART
- 13.56MHzでの非接触通信に対応
- ISO14443 Type AおよびType Bプロトコルをサポート
- NFCタグを検出する最大動作距離は、現在のアンテナサイズに応じて28mm
- P2P通信をサポート
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
Xadow NFCは、PN532 NFCコントローラーを統合しており、多くの機能を備えています。現在、Arduinoライブラリはタグの読み書き、電話とXadow NFC間の通信、タグエミュレーションをサポートしており、3-in-1のオールスターです。

:::note:
    Xadow NFCがSPI通信プロトコルを使用している場合、電話とXadow NFC間の通信をサポートする既存のライブラリがあります。この製品のデフォルト通信モードはI2Cであるため、ライブラリを直接使用することはできません。
:::
タグの読み書きを行う前に、必要な準備はハードウェアのインストールとライブラリの準備です。

- 以下の図のようにハードウェアをインストールします：

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg)

:::note:
    [Xadow - Main Board](https://wiki.seeedstudio.com/ja/Xadow_Main_Board)にXadow - NFCを接続する際は、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填コーナーを別のモジュールの直角に接続することです（各Xadowモジュールの4つのコーナーを参照）。
:::

- [PN532ライブラリ](https://github.com/Seeed-Studio/PN532)と[NDEFライブラリ](https://github.com/don/NDEF)をダウンロードします。これらのライブラリをArduinoライブラリにインストールすることを忘れないでください。操作が明確でない場合は、[こちら](https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library)を参照してください。

:::note:
    ArduinoライブラリフォルダにPN532、PN532_SPI、PN532_I2C、PN532_HSU、NDEF（NDEFライブラリから）のフォルダがあることを確認してください。
:::
**デモ1: タグにメッセージを書き込む**

- パス: File -> Example -> Ndef_dev -> WriteTag からコードを直接開きます。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg)

このコードでは、`message.addUriRecord("https://arduino.cc")`関数を使用してタグにメッセージを書き込みます。このメッセージ「https://arduino.cc」を新しいメッセージに置き換えることができます。例えば、この関数を使用して「do you happy?」や「hello, world」を入力します。

- コードをアップロードし、シリアルモニターを開きます。NFCアンテナにNFCタグを置くように促されます。操作が成功すると、タグを読み取るように促されます。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg)

**デモ2: タグを読み取る**

書き込み操作が成功したかどうかを確認したい場合は、`ReadTag`コードを使用して確認できます。

- パス: File -> Example -> Ndef_dev -> ReadTag から`ReadTag`コードを直接開き、Xadow Main Boardにアップロードします。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp)

- シリアルモニターを開いてタグ情報を確認します。以下の図は読み取り結果を示しています：

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg)

上記の画像を明確に認識するために、NDEFメッセージを説明することが重要です。NDEFメッセージには複数のレコードが含まれる場合があります。分析目的のために、1つのNDEFレコードのみを使用します。

**TNF(001)** - TNFフィールド値は、TYPEフィールドの値の構造を示します。値0x01（NFCフォーラムの既知のタイプ）は、TYPEフィールドがNFCフォーラムRTD仕様で定義されたRTDタイプ名形式に従う値を含むことを示します。

**Type Length** - TYPE_LENGTHフィールドは、TYPEフィールドの長さをオクテット単位で指定する符号なし8ビット整数です。TNFフィールドの特定の値に対して、TYPE_LENGTHフィールドは常にゼロです。

**Payload Length** - PAYLOAD_LENGTHフィールドは、PAYLOADフィールド（アプリケーションペイロード）の長さをオクテット単位で指定する符号なし整数です。PAYLOAD_LENGTHフィールドのサイズは、SRフラグの値によって決まります。

**Type(55)** - TYPEフィールドの値は、ペイロードのタイプを記述する識別子です。URIレコードタイプ（「U」）。

**Payload** - UTF-8形式の残りの文字列。

## Xadow NFC 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Xadow NFC アンテナ回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow NFC Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip)
- [Xadow NFC アンテナ Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip)
- [PN532 データシート](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>