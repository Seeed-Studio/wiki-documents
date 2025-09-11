---
description: このWikiでは、RTL8822CEワイヤレスモジュールの特徴と仕様について紹介します。このデュアルバンドWi-FiおよびBluetooth v5.0 M.2ワイヤレスモジュールは、さまざまな組み込みデバイス（例：reComputer J4012）と互換性があります。この記事では、技術仕様、対応デバイス、ハードウェアのインストール手順、デスクトップインターフェースまたはコマンドラインを使用したワイヤレスネットワークおよびBluetoothの設定方法について詳しく説明します。
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
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/RTL8822CE_Wireless_NIC_for_Jetson.png"/>
</div>

<!-- ジャンプボタンが必要 -->

RTL8822CEは、2T2RデュアルバンドWLANサブシステム（PCI Expressコントローラー付き）とUSB対応のBluetooth v5.0サブシステムを統合したコンパクトなデュアルバンドWLAN+BluetoothコンボM.2カードです。IEEE 802.11 a/b/g/n/ac規格に準拠し、最大PHYレート867 Mbpsを提供し、Bluetoothデュアルモード（v5.0/v4.2/v2.1）をサポートします。[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)などの組み込みデバイスでの高性能なワイヤレスおよびBluetooth接続に最適です。

## 特徴
- 2.4G/5GHzデュアルバンド対応
- ワイヤレスPHYレートは最大867Mbpsに達する
- IEEE規格：IEEE 802.11a/b/g/n/ac
- フォームファクター：M.2 2230汎用AキーまたはEキー
- MHF4コネクタを介して外部アンテナに接続
- 電源供給：DC3.3V±0.2V
- Linux、Windows 10/11などをサポート

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
      <td>チップセット</td>
      <td>**TRL8822CE-CG**</td>
    </tr>
    <tr>
      <td>WLAN規格</td>
      <td>IEEE802.11a/b/g/n/ac</td>
    </tr>
    <tr>
      <td>BT仕様</td>
      <td>Bluetoothコア仕様 v5.0/4.2/2.1</td>
    </tr>
    <tr>
      <td>ホストインターフェース</td>
      <td>WLAN用PCI Express 2.1 & Bluetooth用USB2.0 FS</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td>MHF4コネクタを介して外部アンテナに接続</td>
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
      <td>-20℃ ～ +70℃</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td>10% ～ 95% RH（結露しないこと）</td>
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
このWikiでは、reComputer J4012を例に、JetsonデバイスにRTL8822CEワイヤレスモジュールをインストールして設定する方法を説明します。
:::

Step1. 使用するすべての材料を準備します。

- Jetpack 5.1.2を搭載したreComputer J4012
- Infineon Wi-Fiモジュール

Step 2. ワイヤレスモジュールをM.2 Key Eポートに挿入します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/wifi/rtl8822ce.jpg"/>
</div>

## ワイヤレスモジュールの設定

Jetsonデスクトップに直接アクセスし、`設定` --> `WiFi`を通じてWi-Fiネットワークに接続できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/Hard_ware/Infineon_wifi_module/connect_to_wifi.png"/>
</div>

また、`設定` --> `Bluetooth`を通じてBluetoothを設定することもできます。

:::info
さらに、コマンドラインを使用してワイヤレスモジュールを設定することも可能です。例えば、`bluetoothctl`コマンドを使用してBluetoothデバイスを設定できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/>
</div>

:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>