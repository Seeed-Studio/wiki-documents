---
description: このwikiでは、RTL8822CEワイヤレスモジュールの機能と仕様を紹介します。これは、様々な組み込みデバイス（例：reComputer J4012）と互換性のあるデュアルバンドWi-FiおよびBluetooth v5.0 M.2ワイヤレスモジュールです。この記事では、技術仕様、対応デバイス、ハードウェアインストール手順、デスクトップインターフェースまたはコマンドラインを介してワイヤレスネットワークとBluetoothを設定する方法について詳細な情報を提供します。
title: Jetson用RTL8822CEワイヤレスモジュール
keywords:
  - Edge
  - reComputer
  - Wifi
  - Bluetooth
  - Wireless 
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.webp
slug: /ja/rtl8822ce_wireless_module_for_jetson
last_update:
  date: 12/3/2024
  author: Youjiang
---

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/RTL8822CE_Wireless_NIC_for_Jetson.png"/>
</div>

<!-- Need to jump button  -->

RTL8822CEは、PCI Expressコントローラーを搭載した2T2Rデュアルバンド WLANサブシステムと、USBサポートを備えたBluetooth v5.0サブシステムを統合したコンパクトなデュアルバンドWLAN+Bluetoothコンボ M.2カードです。IEEE 802.11 a/b/g/n/ac標準に対応し、最大867MbpsのPHYレートを実現し、Bluetoothデュアルモード（v5.0/v4.2/v2.1）をサポートします。[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)などの組み込みデバイスでの高性能ワイヤレスおよびBluetooth接続に最適です。

## 特徴

- 2.4G/5GHzデュアルバンドをサポート
- ワイヤレスPHYレートは最大867Mbpsに到達可能
- IEEE標準：IEEE 802.11a/b/g/n/ac
- フォームファクター：M.2 2230汎用AキーまたはEキー
- MHF4コネクターを通じて外部アンテナに接続
- 電源供給：DC3.3V±0.2V電源供給
- Linux、Windows 10/11などをサポート

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>チップセット</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>WLAN標準</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>BT仕様</td>
      <td>Bluetooth Core Specification v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>ホストインターフェース</td>
      <td>WLAN用PCI Express 2.1およびBluetooth用USB2.0 FS</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td>MHF4コネクターを通じて外部アンテナに接続</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td>M.2 30*22*2.15mm (L*W*H)</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td>DC 3.3V±0.2V@ 1000mA(最大)</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>-20℃から+70℃</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td>10%から95% RH（結露なし）</td>
    </tr>
    </table>
</div>

## 対応デバイス

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html)
- [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-w-o-power-adapter-p-5630.html)
- [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html)

## ハードウェア接続

:::danger
このwikiでは、reComputer J4012を例として使用し、JetsonデバイスにRTL8822CEワイヤレスモジュールをインストールおよび設定する方法を説明します。
:::

ステップ1. 使用するすべての材料を準備します。

- Jetpack 5.1.2を搭載したreComputer J4012
- Infineon Wi-Fiモジュール

ステップ2. ワイヤレスモジュールをM.2 Key Eポートに挿入します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## ワイヤレスモジュールの設定

Jetsonデスクトップに直接アクセスし、`設定` --> `WiFi`を通じてwifiネットワークに接続できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

`設定` --> `Bluetooth`を通じてBluetoothも設定できます。

:::info
さらに、`bluetoothctl`コマンドを使用してBluetoothデバイスを設定するなど、コマンドラインを介してワイヤレスモジュールを設定することもできます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>