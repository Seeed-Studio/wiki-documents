---
description: ArduinoボードをDAPLinkデバイスとして使用する
title: ArduinoボードをDAPLinkデバイスとして使用する
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino-DAPLink
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ArduinoボードをDAPLinkデバイスとして使用する方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

## DAPLinkとは

**[Arm Mbed DAPLink](https://armmbed.github.io/DAPLink/)** は、**Arm Cortex CPU** 上で動作するアプリケーションソフトウェアをプログラムおよびデバッグするためのオープンソースソフトウェアプロジェクトです。DAPLinkはインターフェースファームウェアと呼ばれることが多く、アプリケーションMCUのSWDまたはJTAGポートに接続された補助MCU上で動作します。この構成はほぼすべての開発ボードで利用可能です。DAPLinkは、開発用コンピュータとCPUデバッグアクセスポートの間の橋渡しを行います。

> 詳細については、[DAPLink](https://github.com/ARMmbed/DAPLink) をご覧ください。

### Arduinoボード向けDAPLink

現在、[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) や [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) などの**Arduinoボード（SAMDシリーズ）**上で動作するDAPLinkファームウェアを開発しました。これにより、DAPLinkをサポートする開発ボードを最もコスト効率の高い方法でアップロードおよびデバッグすることができます！

### 特徴

- Arm Cortex CPUのデバッグとフラッシュ
- 仮想シリアルポートを提供し、USBからシリアルポートへの変換が不要
- ドラッグ＆ドロップでファームウェアをアップロード（近日公開）

## 対応ボード

Seeed製のすべてのSAMDボードに対応しています：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zeroシリーズ：
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 ワイヤレス開発ボード](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 ブルーワイヤレス開発ボード](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

:::note
これを動作させるには、**最新のArduinoSAMDボードライブラリ（>=1.8.1）**をインストールしていることを確認してください！
:::

## 始め方

### 1. DAPLink Arduinoライブラリのインストール

1. [**Seeed_Arduino_DAPLink**](https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_DAPLinkライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_DAPLink` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Adafruit_TinyUSB_Arduinoライブラリのインストール

1. [**Adafruit_TinyUSB_Arduino**](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Adafruit_TinyUSB_ArduinoライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Adafruit_TinyUSB_Arduino` ファイルを選択します。

### ピン定義のカスタマイズ

**Wio Terminal** または **Seeeduino Xiao** を使用している場合、このセクションをスキップしてデフォルトの定義を使用できます。

- DAPLinkのピン定義は、`Seeed_Arduino_DAPLink/src` 内の **`DAP_config.h`** に定義されています。以下を参照してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"/></div>

### Arduinoボードへのアップロード

Arduino IDEを使用して、`Seeed_Arduino_DAPLink/example` 内の `simple_daplink.ino` を開きます。`ツール` -> `USBスタック` で **TinyUSB** を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"/></div>

コードをコンパイルしてアップロードします！

## ハードウェア接続例

このWikiでは、接続例として[STM32F410RB開発ボード](https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html)を使用しています。

>ピン配置の定義を変更した場合は、ご自身の定義に従って接続してください。

- Seeeduino Xiao接続例

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"/></div>

- Wio Terminal接続例

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## IDEでのデバッグとフラッシュの例

ArduinoボードがDAPLinkデバイスとしてMCUへのアップロードに使用できるようになりました！以下に、参考として異なるIDEでの例を示します。

### OpenOCDを使用したデバッグ

- 上記の接続に従ってArduino DAPLinkをターゲット開発ボードに接続し、PCに接続します。

- OpenOCDがインストールされていることを確認してください。

- ターミナルを開き、以下を実行します：

開発ボードに応じてデバイスターゲットを変更してください。詳細は[公式ドキュメント](http://openocd.org/doc/html/CPU-Configuration.html)を参照してください。

```sh
openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"/></div>

- 開発ボードプロジェクトのビルドパスでgccを実行します。以下のような形になります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"/></div>

- gdbでローカルホストに接続するには、以下を実行します：

```sh
target remote 127.0.0.1:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"/></div>

- 開発ボードが接続されました。これでデバッグやアップロードを開始できます！

`load`を実行して開発ボードにアップロードします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"/></div>

GDBで使用できる便利なコマンド：

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

### Eclipseを使用したデバッグ

Eclipseでは、OpenOCDをバックエンドとして使用できるため、OpenOCDと非常に似ています。

- **Help** -> **Eclipse Marketplace**に移動し、**Eclipse Embedded CDT**を検索してダウンロードします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"/></div>

- **Window** -> **Preference** -> **MCU** -> **Global OpenOCD Path**に移動し、以下のようにOpenOCDパスを入力します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"/></div>

- プロジェクトをビルドします。**Run Last Tool**の下で、**External Tools Configurations**をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"/></div>

- 以下の設定をコピーしてください。パス（およびターゲットボード）を変更してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"/></div>

うまくいけば、以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"/></div>

- **Debug**の下で、**Debug Configurations**をクリックし、**Debugger**セクションを選択してgccパスを入力します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"/></div>

これでデバッグの準備が整いました！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

詳細については[こちら](https://gnu-mcu-eclipse.github.io/debug/openocd/)を参照してください。

### Keilを使用したデバッグ

- 上記の接続に従ってArduino DAPLinkをターゲット開発ボードに接続し、PCに接続します。

KeilでArduino DAPLinkを使用するには、以下を確認してください：

- Keilでプロジェクトを開き、**Options for target**をクリックします。

以下のようなウィンドウが表示されます。デバイスが一致していることを確認してください。**Debug**セクションに移動し、**CMSIS-DAP Debugger**を選択します。

- **CMSIS-DAP Debugger**の横にある**settings**をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"/></div>

- **Seeed CMSIS-DAP**（Arduinoボード）を選択し、接続されていることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"/></div>

- **Flash Download**セクションに移動し、正しいデバイスであることを確認して**OK**をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"/></div>

- **Build**と**Flash**をクリックします！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"/></div>

### IAR Embedded Workbenchを使用したデバッグ

- 上記の接続に従ってArduino DAPLinkをターゲット開発ボードに接続し、PCに接続します。

- プロジェクトを開き、**Project** -> **Options**に移動します。オプションメニューで**Debugger**を選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"/></div>

- **Setup**タブで、ドライバのドロップダウンメニューから**CMSIS DAP**を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"/></div>

- **Download**タブで、Verify downloadと**flash loader(s)**を使用するオプションをチェックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"/></div>

- 左側のメニューから**CMSIS DAP**を選択し、**Interface**タブで**SWD**プロトコルを設定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"/></div>

- **OK**をクリックし、**Download and Debug**をクリックします！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"/></div>

## シリアル使用

作業を簡単にするために、追加のハードウェアを必要とせずに済むよう、ArduinoスケッチにUSBからシリアルへの機能を実装しました！

- デフォルトでは、`Serial1`として定義されており、これはハードウェアシリアルピンです。例えば、Seeeduino XIAOではピン6と7が該当します。

:::note
    Arduinoスケッチ内で独自のシリアルを定義することも可能です。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"/></div>

>使用例については、[こちら](https://wiki.seeedstudio.com/ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/)を参照してください。

## リソース

- [DAPLink公式Github](https://github.com/ARMmbed/DAPLink)
- [OpenOCDドキュメント](http://openocd.org/doc/html/index.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>