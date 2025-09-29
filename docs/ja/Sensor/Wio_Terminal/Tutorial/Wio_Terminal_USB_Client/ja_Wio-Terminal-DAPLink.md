---
description: Wio Terminal を使用して DAPLink デバイスを構築する
title: Wio Terminal を使用して DAPLink デバイスを構築する
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-DAPLink
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal DAPLink

現在、[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) や [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) などの **Arduino ボード** (*SAMD シリーズ*) 上で動作する DAPLink ファームウェアを開発しました。これにより、DAPLink をサポートする開発ボードを最もコスト効率の高い方法でアップロードおよびデバッグすることができます！

## 特徴

- Arm Cortex CPU のデバッグとフラッシュ
- 仮想シリアルポートを提供し、USB からシリアルポートへの変換が不要
- ドラッグ＆ドロップでファームウェアをアップロード（近日公開）

## 始めましょう

Arduino DAPLink のスタートガイド Wiki は [こちら](https://wiki.seeedstudio.com/ja/Arduino-DAPLink/) をご覧ください。

### `uf2` メソッド

利便性のために、Wio Terminal のファームウェアをアップロードするための `uf2` メソッドも提供しています。以下から `uf2` ファイルをダウンロードしてください。

- [**simple_daplink_wt**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2) `uf2` ファイルをダウンロードします。

電源スイッチを素早く 2 回スライドさせてブートローダーモードに入ります。詳細については [こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq) も参照してください。

PC に `Arduino` という名前の外部ドライブが表示されるはずです。ダウンロードした `uf2` ファイルを `Arduino` ドライブにドラッグしてください。

### 接続ピン配置

以下を参考にしてください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>