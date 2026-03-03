---
description: Air602 ファームウェアプログラミングマニュアル
title: Air602 ファームウェアプログラミングマニュアル
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Air602_Firmware_Programming_Manual
last_update:
  date: 05/15/2025
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

Air602 モジュールは ARM-Cortex M3 を搭載した W600 をベースにしています。このチュートリアルでは、ファームウェアの書き込み方法を説明します。

## ファームウェアツールとイメージのダウンロード

以下のリンクからファームウェアプログラミングツールをダウンロードできます。

[ファームウェアツール](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

公式ファームウェアも提供しています。

[公式ファームウェア](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

この ZIP パッケージには 4 つのバージョンが含まれています。**AirM2M_Luat_V0011_W600T_USER** を使用することをお勧めします。

### 変更履歴

| バージョン | 説明 |
|--|--|
| AirM2M_Luat_V0008_W600T_USER | 初期リリース |
| AirM2M_Luat_V0009_W600T_USER | MQTT サポートを追加 |
| AirM2M_Luat_V0010_W600T_USER | モジュールが AP モードに設定され、DHCP 機能が無効になっている場合でも、デバイス（ステーション）が DHCP 機能を使用して IP アドレスを取得できる問題を修正。また、一部の携帯電話が接続に成功した後すぐに切断される問題も解決。 |
| AirM2M_Luat_V0011_W600T_USER | チップの消費電力を最適化し、動作中のチップの発熱を軽減。 |

SDK を使用しない場合は、[ファームウェアの書き込み](#Burn the firmware)に進むことができます。

## SDK のダウンロード

また、SDK をダウンロードして自分で再プログラムすることもできます。

[AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

**Keil MDK5** を使用してビルドすることをお勧めします。Keil を使用して **WM_W600.uvprojx** を開きます。このファイルは **XXXXX\WM_SDK\Tools\Keil\Project** にあります（XXXXX は SDK を解凍した場所です）。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path.jpg)

ビルドが完了すると、**XXXXX\WM_SDK\Bin** に **.img** ファイルが生成されます（XXXXX は SDK を解凍した場所です）。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path_1.jpg)

これで独自のファームウェアを Air602 に書き込む準備が整いました。それでは、どのように書き込むのでしょうか？

## ファームウェアの書き込み

残念ながら、ファームウェアツールは中国語のみ対応しています。この問題を解決するために、スクリーンショットを使って手順を説明します。

**ステップ 1.** ファームウェアツールを解凍し、**XXXX/LuaTools 1.5.7** 内の **LuaTool.exe** をダブルクリックします（XXXX はファームウェアツールを解凍したパスです）。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Luat_path_1.jpg)

**ステップ 2.** ツールを開くと、アップグレードを促すウィンドウが表示される場合があります。この場合は「取消升级」をクリックしてこのステップをスキップします。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_1.jpg)

**ステップ 3.** WiFi モードに切り替えます。デフォルトモードは 4G 用の Luat です。Air602 ファームウェアを書き込むには、**切换模式 -> 切换至WiFi** をクリックします。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_2.jpg)

その後、ソフトウェアが再起動し、以下のような新しいウィンドウが表示されます。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_3.jpg)

**ステップ 4.** ダウンロードまたは SDK でビルドしたファームウェアを選択します。**浏览文件** をクリックし、ファームウェア（*.img* または *.FLS* のいずれも可）を選択して **Open** をクリックします。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_4.jpg)

**ステップ 5.** 対応する COM ポートを選択し、ファームウェアの書き込みを開始します。ツールは Air602 の COM ポートを自動的に検出します。チェックボックスをオンにして、**开始** をクリックしてファームウェアのプログラミングを開始します。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_5.jpg)

その後、**开始握手，请重启WiFi模块** という通知が表示されます。このプロンプトが表示されたら、Air602 開発ボードのリセットボタンをタイミングよく押してください。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_6.jpg)

リセットボタンを押す際は、USB デバイスが誤って取り外されないよう注意してください。数秒後、同じエリアに **握手成功，开始下载** と表示されます。これはハンドシェイクが成功し、プログラミングが開始されたことを意味します。進行状況バーも確認できます。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_7.jpg)

:::note
失敗した場合、**握手超时**（ハンドシェイクタイムアウト）と表示されることがあります。この場合、ステップ 5 を数回繰り返してください。それで解決するはずです。
:::

:::tip
すべてが順調に進むと、以下の画像が表示されます。これは、Air602 開発ボードにファームウェアを書き込むことに成功したことを意味します。お楽しみください :D
:::

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_8.jpg)

## FAQ

### Q1: FW AirM2M_Luat_V0011_W600T_USER（tarp.andreasによる）を焼いた後の問題

**引用"**  
Wikiに記載されているようにAirM2M_Luat_V0011_W600T_USER.FLSファームウェアを焼くと、そのモジュールでLuaToolを再び使用することが不可能になるようです。  
**"**

A1: これは、バージョン11でSDKのブート構造が変更されたためです。バージョン08/09/10に戻す前にフラッシュを書き直す必要があります。詳細については、フォーラムをご確認ください。

[FW AirM2M_Luat_V0011_W600T_USERを焼いた後の問題](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8498&p=28790#p28790)

___

### Q2: Linuxでのプログラミング方法

**引用"**  
「ファームウェアツール」のzipファイルにはソースが含まれておらず、いくつかのWindowsバイナリだけが含まれています。このデバイスをLinuxワークステーションからプログラミングするにはどうすればよいですか？  
**"**

A2: 残念ながら、Linux用のファームウェアツールはありません。ただし、シリアルポートツールとxmodem送信機能を使用することができます。

> ステップ1. 1B（HEX）を周期的に送信します。  
> ステップ2. **tarp.andreas**による提供。「RESETボタンを押す（またはスタンドアロンモジュールのRes-PINをLOWに引き下げる）間に'\x1b'を送信すると、目的の応答が得られます。」  
> ステップ3. 「secboot running」と表示され、その後「CCCCCC....」と表示されたら、ファームウェアファイルを選択し、xmodemプロトコルで送信します。

詳細については、フォーラムをご確認ください。

[Linuxでのプログラミング](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8393&sid=acb3a9a37671cf031800ea6073adb854)

___

### Q3: Mac OSのドライバ問題

一部のMacシステムバージョンでは、このボードを認識できないことが判明しました。

A3: この場合、CH340ドライバを手動でインストールする必要があるかもしれません。このボードはCH330Nを使用しており、CH340と同じドライバを共有しています。

詳細については、フォーラムをご確認ください。

[Mac OSのドライバ問題](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=acb3a9a37671cf031800ea6073adb854)

___

## リソース

- **[Zip]** [ファームウェアツール](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

- **[Zip]** [公式ファームウェア](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

- **[Githubページ]** [AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>