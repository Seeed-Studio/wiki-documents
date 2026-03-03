---
description: Linkit Connect 7681
title: Linkit Connect 7681
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Linkit_Connect_7681
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Linkit_Connect_7681/img/Linkit_Connect_7681.jpg)

:::danger note
MediaTek Labsの閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkIt Connect 7681開発ボードは、MT7681の5つのGPIOピンと1つのUARTポート（それぞれLED付き）への簡単なアクセスを提供し、周辺コントローラーや電子回路に迅速に接続できます。MT7681はLinkIt Connect 7681モジュール上に搭載されており、AcSiPと共同設計されています。このモジュールはわずか15 x 18mmで、製品のPCBに直接統合するために個別に入手可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LinkIt-Connect-7681-Wi-Fi-HDK-for-IoT-p-2262.html)

主な特徴
------------

- MT7681が提供する5つのGPIOピンと1つのUARTポートへのアクセス、LED付き
- LinkIt 7681モジュールに統合されたWiFiアンテナ
- USB（Micro USBポート）による電源供給
- オープンソースハードウェアボードのリファレンスデザイン（回路図、レイアウト、ピン詳細を含む）

仕様
--------------

- チップセットコア: MT7681 ANDES N9
- クロックスピード: 80MHz
- フラッシュ: 1MB
- RAM: 64KB
- 電源: オンボード1A 3.3V電圧レギュレーター（USBコネクタから給電可能）
- コネクタ: UART/GPIO/SPIピンがコネクタ上で利用可能（100mil/2.54mmピッチ）、Micro USBコネクタ
- GPIO電圧: 3.3V
- PWM出力ピン数: 5
- PWMレベル: 0~20
- UART電圧: 3.3V
- Wi-Fi仕様: ステーションモードで802.11 b/g/n、APモードで802.11 b/g
- 寸法: 50 x 31 mm
- その他: オンボードリセットプッシュボタン

ハードウェア概要
-------------

![](https://files.seeedstudio.com/wiki/Linkit_Connect_7681/img/Linkit_Connect_7681_Block_Diagram.jpg)

はじめに
---------------

### USBドライバーのインストール

LinkIt Connect 7681開発ボードをUSBケーブルを使用してPCのUSBポートに接続します。ドライバーは自動的にインストールされます。（以下はWindows7 OSでの例です）

![](https://files.seeedstudio.com/wiki/Linkit_Connect_7681/img/Install_FT230X_driver.jpg)

![](https://files.seeedstudio.com/wiki/Linkit_Connect_7681/img/Install_FT230X_driver_ok.jpg)

<div className="admonition note">
  <p className="admonition-title">注意</p>
  ドライバーが正常にインストールされない場合は、<a className="external text" href="https://www.ftdichip.com/Drivers/VCP.htm" rel="nofollow" target="_blank">FTDIドライバー</a>を手動でダウンロードしてインストールしてください。
</div>

[MediaTek LinkIt Connect 7681 Developer’s Guide](https://labs.mediatek.com/fileMedia/download/60b77480-f08e-46de-b4ab-513916dcff75)を使用して始めましょう。

このドキュメントでは、MediaTek LinkIt Connect 7681 SDKの詳細な紹介、インストール手順、Wi-Fiアプリケーションを作成して実行する方法について説明しています。また、SDKに含まれるボードアップグレードツールの使用方法、APIの概要、コード例を含む一般的なWi-Fi操作を行うためのいくつかのガイドも含まれています。さらに、AndroidおよびiOS向けのMediaTek Smart Connectionアプリを作成する方法についても説明されています。

リソース
---------

- [MediaTek LinkIt Connect 7681 Developer’s Guide](https://labs.mediatek.com/fileMedia/download/60b77480-f08e-46de-b4ab-513916dcff75)
- [MediaTek LinkIt Connect 7681 API Reference](https://labs.mediatek.com/fileMedia/download/5a44333c-f56a-47e6-ad03-9acfa33c9561)
- [LinkIt Connect 7681 Hardware Reference Design](https://labs.mediatek.com/fileMedia/download/ff4f5863-55b0-4664-b189-b705153cf061)
- [MediaTek LinkIt™ Connect 7681 SDK](https://labs.mediatek.com/site/global/developer_tools/mediatek_7681/sdk_intro/index.gsp)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Linkit_Connect_7681から作成されました -->

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>