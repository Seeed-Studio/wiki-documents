---
description: この Wiki は、Jetson シリアルポートを使用して reComputer J4012（または類似デバイス）のブートログを取得する手順を説明します。
title: reComputer J30/J40 のシステムログを取得する方法
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この Wiki では、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) を例に、Jetson シリアルポートを介してデバイスのブートログを取得する方法を説明します。

## 前提条件

- reComputer J4012/ J4011/ J3010 または J3011
- [USB to Serial (TTL) モジュール](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- シリアルポートデバッグツールがインストールされたコンピュータ

:::info
シリアルポートデバッグツールは個人の好みに応じてダウンロードしてインストールできます。以下のツールを推奨します：[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[XShell](https://www.netsarang.com/en/xshell/)、または [MobaXterm](https://mobaxterm.mobatek.net/)。

このチュートリアルでは MobaXterm を使用します。
:::

## ハードウェア接続

1. J15 インターフェースの対応するピンを USB2TTL モジュールに接続します。
2. USB2TTL モジュールをシリアルポートデバッグツールがインストールされたコンピュータに接続します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## システムログの取得

**ステップ1.** コンピュータが認識した USB2TTL モジュールの識別番号を取得します。

:::note
コンピュータが Windows を使用している場合、デバイスマネージャで認識された識別番号を確認できます。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**ステップ2.** シリアルポートデバッグツールを開き、シリアルポート番号を設定し、ボーレートを `115200` に設定します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**ステップ3.** Jetson の電源を入れます。すべてが正常に動作している場合、シリアルポートデバッグツールのウィンドウにシステムのブートログが表示されます。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="reComputer J30/J40 のシステムログを取得する方法" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>