---
title: 概要
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /ja/Wio-Terminal-IO-Overview
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 概要

このリポジトリでは、Wio TerminalでGrove IOを使用する方法を紹介します。これにより、Groveエコシステムのプラグアンドプレイ機能を楽しむだけでなく、40ピンのRaspberry Pi互換GPIOも使用できます！

## ハードウェア回路図

### Wio Terminal RPI ピン配置

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

Wio Terminalは、SAMD51から40ピンGPIOをブレークアウトしており、Raspberry Piと同じブレークアウトを持っています！

これらを使用するには、上記のように定義されたピン名を使用するだけです。一部のピンは多機能であり、異なる方法で参照することができます。

#### *詳細については、`variant.h`をご確認ください*

### Wio Terminal Groveポートピン配置

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

ご覧のとおり、Wio Terminalには2つのGroveポートがあります。1つはデフォルトの**I2Cポート**で、もう1つは**設定可能なデジタル/アナログピン**です。このポートはPWM出力にも使用できます。両方のGroveポートはデジタルとして使用可能です。

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