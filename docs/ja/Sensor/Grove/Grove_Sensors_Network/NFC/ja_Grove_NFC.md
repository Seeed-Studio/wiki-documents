---
title: Grove - NFC
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove_NFC/
slug: /ja/Grove_NFC
last_update:
  date: 05/15/2025
  author: gunengyu
---


<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_02.jpg" />
      </td>
    </tr>
  </tbody></table>

近距離無線通信（NFC）は、短距離の無線技術のセットです。アクセス制御システムやモバイル決済システムなどの日常的なアプリケーションの背後にある技術です。  
Grove NFCは、高度に統合されたトランシーバーモジュールPN532を搭載しており、13.56MHzでの非接触通信を処理します。このモジュールを使用して13.56MHzタグの読み取りや書き込みを行ったり、2つのNFC間でポイントツーポイントのデータ交換を実現することができます。Grove NFCはI2CまたはUART通信プロトコルを使用するよう設計されており、UARTがデフォルトモードです。さらに、独立したPCBアンテナを割り当てており、使用するエンクロージャから簡単に引き出すことができるため、プロジェクトの外観設計により多くの余地を残します。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

|バージョン|日付|変更点|
|--|--|--|
|Grove NFC V1.0|2015年12月11日|初版|
|Grove NFC V1.1|2016年8月31日|PCBの裏面にTP2/TP3パッドを追加し、I2CとUARTを切り替え可能に|

## 仕様

- 動作電圧: 3.3V
- 動作電流:
  - 静止モード: 73mA
  - 書き込み/読み取りモード: 83mA
- 対応ホストインターフェース: I2C、UART（デフォルト）。
- 13.56MHzでの非接触通信に対応。
- ISO14443 Type AおよびType Bプロトコルをサポート。
- NFCタグ検出の最大動作距離は、現在のアンテナサイズに応じて28mm。
- 寸法: 25.43mm x 20.35mm

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

### Grove NFC v1.0

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC_cutAndsolder.jpg)  

デフォルト設定はUARTです。I2Cに変更する必要がある場合は、まずいくつかのはんだ付けを行う必要があります。

以下の接続を切断してください：

- TP1からUART
- TP2からRX
- TP3からTX

以下の接続をはんだ付けしてください：

- TP1からI2C
- TP2からSCL
- TP3からSDA

### Grove NFC v1.1

デフォルト設定はUARTです。I2Cに変更する必要がある場合は、UART接続を切断し、以下のようにI2Cピンをはんだ付けしてください。

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/v1.1%20hardware%20connection.png)

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

Grove - NFCはI2CとUARTをサポートしており、[Seeed Arduino NFCライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)はArduino Uno/Seeeduino v4.2、Arduino Mega/Seeeduino Mega、Arduino Zero/Seeeduino Lorawan、Arduino Leonardo/Seeeduino Liteをサポートしています。

### Seeeduino Liteで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino Lite | Base Shield| Grove - NFC |  NFCタグ|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">今すぐ購入</a>|ご自身で準備してください|

- **ステップ1.** Grove - NFCをGrove-Base Shieldの**UART**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduino Liteに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduino LiteをPCに接続します。

#### ソフトウェア

- **ステップ1.** [Seeed Arduino NFCライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)をダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用の**Seeed Arduino NFC**ライブラリをインストールします。

- **ステップ3.** パス**File --> Examples --> WriteTag**から「WriteTag」コードを開きます。

- **ステップ4.** SPI通信を有効にするために以下のコードを修正します。

:::tip
xiaoはピン互換性の問題がある可能性があります。
:::

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **ステップ5.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ6.** Arduino IDEの**シリアルモニター**を開きます。**Tool-> Serial Monitor**をクリックするか、ctrl+shift+mキーを同時に押します。ボーレートを**9600**に設定します。

- **ステップ7.** Grove - NFCを使用してNFCタグに近づけます。すべてが正常に動作すれば、シリアルモニターにNFCタグ情報が表示されます。

:::warning
Arduino MegaのUARTポートに接続したい場合は、PN532_HSU pn532hsu(Serial1)をPN532_HSU pn532hsu(SerialX)に変更できます。Xは使用するArduino Megaのシリアルポートを表します。Grove-NFCセンサーをArduino Unoに接続したい場合は、ソフトウェアシリアルを使用できます。以下を参照して[ソフトウェアシリアル](https://www.arduino.cc/en/Reference/softwareSerial)を設定してください。
:::

```cpp
#if 0 // SPIを使用
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // ハードウェアシリアルを使用

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 1  // ソフトウェアシリアルを使用

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else // I2Cを使用

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
``` 
 
### Seeeduino V4.2で遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - NFC |  NFCタグ|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">今すぐ購入</a>|ご自身で準備してください|

:::note
**1.** 13.5MHZ、ISO14443 NFCタグを選択してください。そうしないと、Grove - NFCモジュールがタグを読み取れない可能性があります。

**2.** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーのケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**3.** Groveモジュールを購入するときに、各モジュールにはGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。

**4.** このデモでは、Base Shieldなしで動作できます。Seeeduino V4.2にはオンボードのGrove I2Cコネクタがあるためです。
:::

- **ステップ 1.** Grove - NFC を Grove-Base Shield の **I2C** ポートに接続します。デフォルトの UART 設定を I2C に変更するために、ハードウェア概要に従うことを確認してください。

- **ステップ 2.** Grove-Base Shield を Seeeduino V4.2 に差し込みます。

- **ステップ 3.** USB ケーブルを使用して Seeeduino V4.2 を PC に接続します。


#### ソフトウェア

- **ステップ 1.** [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) をダウンロードします。

- **ステップ 2.** [Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用の **Seeed Arduino NFC** ライブラリをインストールします。

- **ステップ 3.** **File --> Examples --> WriteTag** のパスを通じて「WriteTag」コードを開きます。

- **ステップ 4.** 以下のようにコードを変更して I2C 通信を有効にします。

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **ステップ 5.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 6.** Arduino IDE の **Serial Monitor** を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定します。

- **ステップ 7.** Grove - NFC を使用して NFC タグに近づけます。すべてが正常に動作すれば、Serial Monitor に NFC タグ情報が表示されます。

# Grove - NFC v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - NFC v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - NFC v1.0 EAGLE (回路図と基板) ファイル](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip)
- **[Zip]** [Grove - NFC v1.1 EAGLE (回路図と基板) ファイル](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip)
- **[PDF]** [PN532 データシート PDF](https://files.seeedstudio.com/wiki/Grove-NFC/res/PN532.pdf)
- **[Library]** [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)

## プロジェクト

**Particle Photon + Grove NFC + Grove LCD via I2C** Particle Photon を使用して NFC カードの UID を読み取り、LCD に表示します。すべて I2C を使用します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed' width='350'></iframe>

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_NFC から作成されました -->

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>