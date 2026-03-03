---
description: Seeed Studio XIAO SAMD21を使用してDAPLinkデバイスを構築する
title: Seeed Studio XIAO SAMD21を使用してDAPLinkデバイスを構築する
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-DAPLink
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO SAMD 21 DAPLink

現在、私たちは[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)や[Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)などの**Arduinoボード**（*SAMDシリーズ*）で動作する**DAPLinkファームウェアを開発**しました。これにより、最もコスト効率的な方法でDAPLinkをサポートする開発ボードをアップロードおよびデバッグできます！

## 特徴

- Arm Cortex CPUのデバッグとフラッシュ
- 仮想シリアルポートを提供し、USBからシリアルポートへの変換が不要
- ドラッグアンドドロップでファームウェアをアップロード（近日公開予定）

## はじめに

Arduino DAPLinkの入門ガイドWikiをこちらでご覧ください。

### `uf2`方式

便宜上、Wio Terminalのファームウェアをアップロードする`uf2`方式も提供しています。以下から`uf2`ファイルをダウンロードするだけです。

- [**simple_daplink_xiao**](http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2) `uf2`ファイルをダウンロードしてください。

電源スイッチを素早く2回スライドしてブートローダーモードに入ります。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq)もご参照ください。

PCに`Arduino`という名前の外部ドライブが表示されるはずです。ダウンロードしたuf2ファイルを`Arduino`ドライブにドラッグしてください。

### 接続ピン配置

参考として以下をご利用ください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg" /></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>