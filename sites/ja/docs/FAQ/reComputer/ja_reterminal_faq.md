---
title: reTerminal と reTerminal DM FAQ
description: reTerminal と reTerminal DM ディスプレイに関するよくある質問です。eMMC への OS の書き込み、画面とタッチの動作、SSH およびシリアルコンソールへのアクセス、周辺機器の識別などを含みます。
slug: /reterminal_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reTerminal FAQ
  - reTerminal DM FAQ
  - reTerminal トラブルシューティング
  - reTerminal DM トラブルシューティング
  - reTerminal ブラックスクリーン
  - reTerminal タッチスクリーン
  - Raspberry Pi CM4
  - reTerminal OS フラッシュ
---

<div class="recomputer-faq-page">

# reTerminal と reTerminal DM FAQ

このページには、reTerminal および reTerminal DM に関する検証済みの回答が掲載されています。各回答には、対象となる製品バリアントとファームウェアモード、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- 正確なモデル（reTerminal か reTerminal DM か）と、搭載されている Raspberry Pi CM4 バリアントを確認します。
- バージョン固有の手順を適用する前に、現在の Raspberry Pi OS イメージのバージョンを確認します。
- このページの回答は 2026-11-10 時点で最後に検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を再確認してください。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### reTerminal DM (114070201) の 3D モデルファイルはどのように入手できますか？ {#reterminal-dm-3d-model}

**対象:** 構造設計や筐体検証のために 3D モデルが必要な開発者向けの reTerminal DM (114070201)

**最終検証日:** 2026-11-01

reTerminal DM (114070201) の 3D モデルは、次の STEP 構造設計ファイルのリンクから入手できます: https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp 。その他の設計ファイルや技術情報については、Seeed の技術サポートチームにお問い合わせください。

**参考情報:**

- [reTerminal DM 構造設計ファイル (STEP)](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)
- [reTerminal DM ハードウェアガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/)

## OS とファームウェア {#os-and-firmware}

### reTerminal に元々出荷時に搭載されていた Raspberry Pi OS をどのようにフラッシュできますか {#reterminal-flash-original-shipped-image}

**対象:** デバイスに元々出荷時に搭載されていたファクトリーイメージを復元したい reTerminal および reTerminal DM

**最終検証日:** 2023-11-15

詳細については[こちら](https://wiki.seeedstudio.com/ja/reterminal_black_screen/#reterminal-に元々出荷時に搭載されていた-raspberry-pi-os-をどのようにフラッシュできますか)をクリックしてください。

### Raspberry Pi OS / 64-bit Ubuntu OS またはその他の OS を eMMC にフラッシュする方法 {#reterminal-flash-os-to-emmc}

**対象:** eMMC ストレージを備えたコンピュートモジュールを搭載し、システムイメージを書き込みたい reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/flash_different_os_to_emmc/)をクリックしてください。

### 新しい Raspberry Pi OS / Ubuntu OS またはその他の OS をフラッシュした後に reTerminal ドライバをインストールする方法 {#reterminal-install-drivers-after-flashing}

**対象:** 新しいオペレーティングシステムをフラッシュした後に reTerminal ドライバをインストールする必要がある reTerminal および reTerminal DM

**最終検証日:** 2023-11-15

詳細については[こちら](https://wiki.seeedstudio.com/ja/reterminal_black_screen/#新しい-raspberry-pi-os-ubuntu-os-またはその他の-os-をフラッシュした後に-reterminal-ドライバをインストールする方法)をクリックしてください。

### Raspberry Pi OS とインストール済みパッケージをアップグレードする方法 {#reterminal-upgrade-rpios-packages}

**対象:** Raspberry Pi OS を実行しており、その場での通常のシステム更新を行いたい reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/upgrade-rpiOS_installed-packages/)をクリックしてください。

### eMMC 非搭載バージョンの CM4 に交換した場合、どのように OS をフラッシュできますか {#reterminal-flash-os-without-emmc-cm4}

**対象:** eMMC ストレージを持たない Raspberry Pi CM4 を搭載した reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/flashing_os_on_non-eMMC_CM4_replacement/)をクリックしてください。

### スリープ後に reTerminal の LCD を復帰できません {#reterminal-lcd-wakeup-after-sleep}

**対象:** reTerminal デバイスツリーオーバーレイドライバがインストールされた Raspberry Pi OS を実行している reTerminal および reTerminal DM

**最終検証日:** 2024-12-16

詳細については[こちら](https://wiki.seeedstudio.com/ja/Wakeup_reTerminal_LCD_after_sleep/)をクリックしてください。

### USB フラッシュドライブから OS を起動するにはどうすればよいですか {#reterminal-boot-from-usb-flash-drive}

**対象:** コンピュートモジュールのブートローダーを備え、外部 USB ドライブからシステムを起動したい reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/Boot_OS_from_USB_flash_drive/)をクリックしてください。

### reTerminal に Ubuntu をインストールするにはどうすればよいですか？ {#reterminal-install-ubuntu}

**対象:** arm64 Ubuntu Server イメージが eMMC に書き込まれている reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/install-ubuntu-on-reterminal/)をクリックしてください。

### Raspberry Pi OS Bullseye をインストールした後、画面の向きが正しくありません {#reterminal-screen-orientation}

**対象:** Raspberry Pi OS Bullseye または Bookworm イメージと reTerminal ドライバをインストールした reTerminal および reTerminal DM

**最終検証日:** 2023-11-24

詳細については[こちら](https://wiki.seeedstudio.com/ja/Incorrect_screen_orientation_on_RPiOS_Bullseye/)をクリックしてください。

### reTerminal で画面の回転を無効にする方法 {#reterminal-disable-screen-rotation}

**対象:** 画面を回転させてはいけない固定設置用途で、Raspberry Pi OS を実行している reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/disable_screen_rotation_on_reTerminal/)をクリックしてください。

### 画面のリフレッシュレートが低すぎる問題を解決する方法 {#reterminal-screen-refresh-rate}

**対象:** リフレッシュのカクつきが目に見えて発生しているディスプレイを持つ、Raspberry Pi OS を実行している reTerminal および reTerminal DM

**最終検証日:** 2024-07-02

詳細については[こちら](https://wiki.seeedstudio.com/ja/screen_refresh_rate_low/)をクリックしてください。

## 接続性とネットワーキング {#connectivity-and-networking}

### Seeed は、出荷された reTerminal または reTerminal DM デバイスの IMEI と LTE Cat 4 EC25 4G モジュールのシリアル番号を保持していますか。また、デバイスがすでに設置済みで現場で読み取れない場合、それらをどのように取得できますか？ {#reterminal-imei-lte-serial}

**対象:** すでに出荷され現場に設置されており、資産登録のために IMEI と LTE Cat 4 EC25 4G モジュールのシリアル番号を記入する必要がある reTerminal および reTerminal DM デバイス

**最終検証日:** 2026-11-01

Seeed は出荷済みデバイスの IMEI および 4G モジュールのシリアル番号を保持していないため、これらの番号を注文情報、製品モデル、ホストのシリアル番号だけから記入することはできません。IMEI と 4G モジュールのシリアル番号は個々のデバイスまたはモジュールに属するものであり、設置済みデバイスから読み取る必要があります。エンドユーザーまたは現場の技術者がデバイスのシリアルコンソールまたはモジュールの AT コマンドインターフェースを開き、`AT+GSN` を実行してその 4G モジュールの IMEI を取得します。モジュールのシリアル番号 / モジュール ID は、モジュールのラベル、または EC25 モジュールのクエリコマンドを通じて取得する必要があります。登録を完了する前に、取得した結果をデバイスの資産番号と一対一で照合してください。現在、デバイス設置場所の担当者と連絡が取れない場合は、現地のエンドユーザーまたは現場技術者がクエリを実行し、その結果を送付する必要があります。Seeed は元の出荷記録からこれらを復元することはできません。

1. 設置済みの各デバイスの設置場所、資産番号、および連絡担当者を確認します。
2. エンドユーザーまたは現場技術者が、デバイスのシリアルコンソールまたは 4G モジュールの AT コマンドインターフェースに接続します。
3. `AT+GSN` を実行して返された IMEI を記録します。このコマンドは IMEI を問い合わせるものであり、モジュールのシリアル番号を問い合わせるコマンドとは異なることに注意してください。
4. モジュールのラベル、または LTE Cat 4 EC25 のコマンドリファレンスに従って、4G モジュールのシリアル番号 / モジュール ID を問い合わせて記録します。
5. 各デバイスについて、IMEI、モジュール ID、およびホストの資産番号を一対一で照合し、デバイス管理者に提出して登録を完了します。
6. 現地またはリモートでの接続を手配できない場合は、デバイス設置場所のエンドユーザーまたは現場技術者が上記のクエリを実行する必要があります。

**成功条件:**

- すべてのデバイスについて、IMEI と 4G モジュール ID がデバイス側から読み取られ、資産番号に紐付けて登録されている
- 登録記録には、注文情報やホストのシリアル番号から推測した番号が一切含まれていない

**参考情報:**

- [reTerminal DM クイックスタート](https://wiki.seeedstudio.com/ja/reterminal-dm/)

### USB シリアルコンバータを使用して Raspberry Pi OS / Ubuntu OS またはその他の OS にログインする方法 {#reterminal-usb-serial-console-login}

**対象:** ディスプレイなしでコンソールログインを行うため、40 ピン GPIO ヘッダを備えた reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/Logging_in_OS_using_USB_to_serial_converter/)をクリックしてください。

## ハードウェアとインターフェース {#hardware-and-interfaces}

### reTerminal のブラックスクリーン問題をトラブルシュートする方法 {#reterminal-black-screen}

**対象:** 起動後も LCD が黒いままで、診断に PWR および SYS ステータス LED が利用できる reTerminal および reTerminal DM

**最終検証日:** 2023-11-15

詳細については[こちら](https://wiki.seeedstudio.com/ja/reterminal_black_screen/)をクリックしてください。

### CM4 上のチップの周りに黒い接着剤があるのはなぜですか？ {#reterminal-cm4-epoxy-underfill}

**対象:** 基板上の黒い材料に気付いた、Raspberry Pi CM4 コンピュートモジュールを搭載した reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/black_glue_around_CM4/)をクリックしてください。

### reTerminal ドライバをインストールした後にブザーや LED が動作しない問題を解決する方法 {#reterminal-buzzer-leds-after-driver-install}

**対象:** reTerminal ドライバのインストールを実行した後の reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/buzzer-leds-not-work_by_drivers/)をクリックしてください。

### タッチスクリーンの精度不良のトラブルシューティング {#reterminal-touchscreen-inaccuracy}

**対象:** reTerminal タッチドライバをインストールした、X11 ベースの Raspberry Pi OS イメージを実行している reTerminal および reTerminal DM

**最終検証日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/troubleshooting-touch-screen-inaccuracy/)をクリックしてください。

### 暗号チップが ATECC608A-SSHDA-B か ATECC608A-TNGTLSS-G かを確認する方法 {#reterminal-encryption-chip-check}

**対象:** reTerminal および reTerminal DM で、オンボード暗号コプロセッサのバリアントを判別する場合

**最終確認日:** 2023-06-21

詳細については[こちら](https://wiki.seeedstudio.com/ja/check_Encryption_Chip/)をクリックしてください

## 製品とサービス {#product-and-service}

### 単体注文の reTerminal DM で、出荷前に Dual LAN/SSD 拡張モジュール、NVMe M.2 2280 SSD、および Bluetooth/Wi-Fi アンテナを無料で取り付け・テストしてもらうことはできますか？ {#reterminal-dm-preinstall-expansion}

**対象:** 出荷前に Dual LAN/SSD 拡張モジュール、NVMe M.2 2280 SSD、および Bluetooth/Wi-Fi アンテナの取り付けを希望するお客様向けの、reTerminal DM 単体注文

**最終確認日:** 2026-11-01

単体注文では、工場での無料の事前組み立て（内部アクセサリの取り付けおよびテストを含む）を受けることはできません。このサービスは軽微なカスタマイズサービスに該当し、所定の購入数量に達し、かつ対応するカスタマイズ料金をお支払いいただく注文にのみ適用されます。現在の単体注文の場合、製品は工場出荷時のパッケージのままお受け取りいただく形となり、到着後、公式のハードウェア組み立てガイド（https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/）に従って関連アクセサリを取り付けてください。

**注意:**

- 工場での事前組み立ては、一定の購入数量が必要でカスタマイズ料金が発生する軽微なカスタマイズサービスであるため、単体注文は出荷前の無料取り付けおよびテストの対象外となります。
- 後に注文数量がカスタマイズの閾値に達した場合は、工場での事前組み立てサービスに適用される条件について、改めて Seeed にお問い合わせいただけます。

**参考資料:**

- [reTerminal DM ハードウェアガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-hardware-guide/)

### reTerminal DM は周囲温度 -20°C で動作できますか？また、ODM 版を 10 台の数量で注文できますか？ {#reterminal-dm-minus20-operating-temp}

**対象:** 周囲温度 -20°C で本製品を使用するプロジェクトおよび 10 台の ODM カスタマイズ問い合わせに関する、標準 reTerminal DM

**最終確認日:** 2026-11-01

標準の reTerminal DM の動作温度範囲は -10°C ～ 50°C であるため、標準モデル単体では周囲温度 -20°C の条件を満たすことはできません。-20°C で動作させるには、広温度範囲対応ディスプレイまたは内部加熱ソリューションを用いた ODM カスタマイズが必要です。ODM カスタマイズの最小注文数量は 50 台です。

**参考資料:**

- [reTerminal DM クイックスタート](https://wiki.seeedstudio.com/ja/reterminal-dm/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
