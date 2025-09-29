---
description: Wio Terminal を RTL8720DN 開発ボードとして使用する方法
title: Wio Terminal を RTL8720DN 開発ボードとして使用する方法
keywords:
- Wio_terminal チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-8720-dev
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を RTL8720DN 開発ボードとして使用する方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal は、Atmel SAMD51 コアと Realtek RTL8720DN ワイヤレスコアを搭載しています。Wio Terminal をシンプルな RTL8720DN 開発ボードとしても使用できるとしたら、素晴らしいと思いませんか？この Wiki では、Wio Terminal を RTL8720DN 開発ボードとして使用し、Wi-Fi および Bluetooth 接続を開発する方法を学びます！

## はじめに

- 以下の手順を進める前に、まず [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/) をご確認ください。

### Realtek ボードライブラリを Arduino に追加する

1. Arduino IDE を開き、**ファイル** > **環境設定** をクリックし、以下の URL を **追加のボードマネージャの URL** にコピーします：

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2. **ツール** > **ボード** > **ボードマネージャ** をクリックし、ボードマネージャで **realtek** を検索します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## SAMD51 と RTL8720DN 間の通信プログラム

Wio Terminal の SAMD51 コアと RTL8720DN 間で通信するための Arduino サンプルコードを用意しました。完全なソースコードは [**こちら**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720) からダウンロードできます。

- ボードを **Wio Terminal** に設定してコードを Wio Terminal にアップロードします。

**注意:** このプログラムは Wio Terminal の SAMD51 コアにアップロードされます。

この Arduino プログラムには **2つのモード** があります。

### モード 1 - RTL8720DN ファームウェア書き込みモード

右ボタンを押してこのモードに入ります。このモードは **RTL8720DN に Arduino コードを書き込むためのモード** です。ここで、RTL8720DN のサンプルコードを選択して RTL8720DN コアにアップロードできます。このモードを選択して RTL8720DN コアにアップロードし、**ボードを RTL8720 に設定**してください。

### モード 2 - USB シリアルモード

中央ボタンを押してこのモードに入ります。このモードは **RTL8720DN コアからのシリアル出力を表示するためのモード** です。このモードでは、SAMD51 コアが USB シリアルモジュールとして機能します。

## Wi-Fi の例

手順を確認するために例を見てみましょう！

- **SAMD51 と RTL8720DN 間の通信プログラムを Wio Terminal にアップロード** します（ボードを **Wio Terminal** に設定）。

- プログラムをアップロードしたら、**ツール** -> **ボード** に移動し、ボードを **RTL8722DM** に設定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- **ファイル** -> **例** に移動し、**RTL8720DM 用の例** の下から RTL8720DN 用の例を選択できます。ここでは ScanNetworks を例として取り上げます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::note
Wi-Fi 関連の例を使用する場合は、まず [こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/) を確認して RTL8720DN コアのファームウェアを消去してください。
:::

- 以下のように Wio Terminal を **RTL8720DN ファームウェア書き込みモード** に設定します。ボードを **RTL8722DM** に設定し、アップロードをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- Wi-Fi の例を RTL8720DN コアにアップロードしたら、Wio Terminal をリセットし、中央ボタンを押して **USB シリアルモード** に切り替えます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- シリアルモニタを開くと、RTL8720DN コアからの結果が表示されるはずです！これで、Wio Terminal の RTL8720DN コアを開発ボードとして使用できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## Bluetooth の例

Bluetooth の例も見てみましょう。

- **SAMD51 と RTL8720DN 間の通信プログラムを Wio Terminal にアップロード** します（ボードを **Wio Terminal** に設定）。

- プログラムをアップロードしたら、**ツール** -> **ボード** に移動し、ボードを **RTL8722DM** に設定します。**ファイル** -> **例** に移動し、**RTL8720DM 用の例** の下から RTL8720DN 用の例を選択できます。ここでは ScanNetworks を例として取り上げます。

- Wio Terminal を **RTL8720DN ファームウェア書き込みモード** に設定します。ボードを **RTL8722DM** に設定し、アップロードをクリックします。

- Wi-Fi の例を RTL8720DN コアにアップロードしたら、Wio Terminal をリセットし、中央ボタンを押して **USB シリアルモード** に切り替えます。

- シリアルモニタを開くと、RTL8720DN コアからの結果が表示されるはずです！これで、Wio Terminal の RTL8720DN コアを開発ボードとして使用できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>