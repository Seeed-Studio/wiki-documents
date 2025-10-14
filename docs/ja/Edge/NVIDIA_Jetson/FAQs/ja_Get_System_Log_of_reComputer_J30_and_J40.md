---
description: このwikiでは、Jetsonシリアルポートを使用してreComputer J4012（または類似デバイス）のブートログを取得する方法について、ステップバイステップのガイドを提供します。
title: reComputer J30/J40のシステムログを取得する方法は？
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 1/22/2025
  author: Youjiang
---


このwikiでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)を例として、Jetsonシリアルポート経由でデバイスのブートログを取得する方法を説明します。

## 前提条件

- reComputer J4012/ J4011/ J3010 または J3011
- [USB to Serial (TTL) Module](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- シリアルポートデバッグツールがインストールされたコンピュータ

:::info
個人の好みに応じてシリアルポートデバッグツールをダウンロードしてインストールできます。[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[XShell](https://www.netsarang.com/en/xshell/)または[MobaXterm](https://mobaxterm.mobatek.net/)の使用をお勧めします。

このチュートリアルではMobaXtermを使用します。
:::

## ハードウェア接続

1. J15インターフェースの対応するピンをUSB2TTLモジュールに接続します。
2. USB2TTLモジュールをシリアルポートデバッグツールがインストールされたコンピュータに接続します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## システムログの取得

**ステップ1.** コンピュータに認識されたUSB2TTLモジュールの識別番号を取得します。

:::note
コンピュータがWindowsを実行している場合、デバイスマネージャーで認識された識別番号を確認できます。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**Setp2.** シリアルポートデバッグツールを開き、シリアルポート番号を設定し、ボーレートを`115200`に設定します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**Setp3.** Jetsonの電源を入れます。すべてが正常に動作している場合、シリアルポートデバッグツールウィンドウにシステムブートログが表示されます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="Get Sys Log of reComputer J30/J40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
