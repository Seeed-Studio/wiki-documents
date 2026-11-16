---
title: reComputer R1000 と R1100 FAQ
description: reComputer R1000 および R1100 エッジコントローラに関するよくある質問です。デフォルトの認証情報、RS485 と BACnet 通信、OS の書き込みおよびシステム構成について説明します。
slug: /recomputer_r1000_r1100_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer R1000 FAQ
  - reComputer R1100 FAQ
  - reComputer R1000 troubleshooting
  - reComputer R1100 edge gateway
  - Raspberry Pi CM4
  - RS485 Modbus RTU
  - BACnet MS/TP
---

<div class="recomputer-faq-page">

# reComputer R1000 と R1100 FAQ

このページには、reComputer R1000 および R1100 に関する検証済みの回答が掲載されています。各回答には、対象となる製品バリアントとファームウェアモード、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- 正確なモデルを確認します：reComputer R1000 か reComputer R1100 か、そして搭載されている Raspberry Pi CM4 バリアント。
- バージョン固有の手順を適用する前に、現在の Raspberry Pi OS イメージのバージョンを確認します。
- このページの回答は 2026-11-10 時点で最後に検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を再確認してください。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## OS とファームウェア {#os-and-firmware}

### reComputer R1024-10 の USB Mass Storage / Bootloader 機能を root 権限なしで無効化するにはどうすればよいですか？ {#r1024-10-disable-usb-mass-storage}

**対象:** reComputer R10xx シリーズ（例：reComputer R1024-10）。USB Mass Storage / Bootloader 機能を root 権限なしでオフにする必要があるケース

**最終検証日:** 2026-11-01

標準の reComputer R10xx 製品（R1024-10 を含む）には、USB Mass Storage / Bootloader 機能を root 権限なしで無効化する方法は用意されていません。この機能は標準ファームウェア構成ではサポートされていません。技術的には Linux の USB ドライバを変更することで実現可能ですが、その場合は ODM システムカスタマイズサービスの申請が必要です。カスタマイズオプションについては Seeed の営業チームにお問い合わせください。

**参考情報:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/)

### reComputer R1124-10 に Raspberry Pi OS Lite 64-bit Bookworm をインストールするにはどうすればよいですか？ {#r1124-10-raspberry-pi-os-lite}

**対象:** reComputer R11xx シリーズ（例：reComputer R1124-10）。Raspberry Pi OS Lite 64-bit Bookworm が必要なケース

**最終検証日:** 2026-11-01

現在、Raspberry Pi OS Lite バージョンに適合した公式イメージはありません。公式提供のイメージを使用したい場合は、Seeed Studio Wiki 上の「reComputer R1100 Flash OS」インストールフロー（https://wiki.seeedstudio.com/ja/recomputer_r1100_flash_os/）に従ってください。それでも Raspberry Pi OS Lite が必要な場合は、Raspberry Pi Imager を使って直接書き込むことはできますが、デバイスツリーファイルがないため、一部の機能が正しく動作しない可能性があります。

**参考情報:**

- [reComputer R1100 Flash OS](https://wiki.seeedstudio.com/ja/recomputer_r1100_flash_os/)

## 接続性とネットワーキング {#connectivity-and-networking}

### reComputer R1125-10 は現在 mini-PCIe Zigbee モジュールをサポートしていますか？引き続き購入して展開できますか？ {#r1125-10-mini-pcie-zigbee}

**対象:** reComputer R11xx シリーズ（例：reComputer R1125-10）。mini-PCIe インターフェース上で Zigbee モジュールが必要な展開

**最終検証日:** 2026-11-01

reComputer R1125-10 は現在、mini-PCIe Zigbee モジュールをサポートしていません。そのモジュールは依然として生産中止であり、再入荷の予定もないため、このデバイスのサポート構成として直接購入・展開することはできません。プロジェクトで mini-PCIe インターフェースを使用する必要がない場合は、現在購入可能な Zigbee 3.0 USB Dongle Plus (ZBDongle-E) の利用を検討し、まず Zigbee デバイス接続に必要な要件を満たしているかを確認してください。

**前提条件:**

- プロジェクトで mini-PCIe インターフェースを占有する必要があるかどうかを確認する

**参考情報:**

- [Sonoff Zigbee 3.0 USB Dongle Plus（ZBDongle-E）](https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/)

### reComputer ER1124-10 のオンボード Bluetooth を Laird/Ezurio BL654（Nordic nRF52840）モジュールに直接置き換え、外部アンテナに接続できますか？ {#er1124-10-laird-bl654-replacement}

**対象:** reComputer R11xx シリーズ（例：reComputer ER1124-10）。オンボード Bluetooth を Laird/Ezurio BL654 に置き換える、または外部アンテナを使用する必要があるケース

**最終検証日:** 2026-11-01

Laird/Ezurio BL654 は、reComputer ER1124-10 のオンボード Bluetooth を直接置き換えることはできません。そのボードで使用されている Raspberry Pi CM4 には、すでにネイティブに Bluetooth が統合されており、BL654 が CM4 のオンボード Bluetooth を引き継ぐことはできません。BL654 と外部アンテナが必須である場合、BL654 は別体の外付けモジュールとして設計するしかありません。現時点で、Seeed が ER1124-10 向けに検証済みの BL654 外付けモジュールや外部アンテナの互換性ソリューションは存在しないため、Seeed が提供するアップグレードオプションや互換性を保証するものとして扱うことはできません。実装前に、利用可能なボードインターフェース、モジュールの接続方法、ドライバサポート、電源供給およびアンテナレイアウトを確認し、通信および RF の完全な検証を完了する必要があります。

**参考情報:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/)

### reComputer R1124-10（SKU 113991374）は Zigbee ネットワークゲートウェイとして直接使用できますか？別途 Zigbee モジュールは必須ですか？オンボード BLE で代用できますか？ {#r1124-10-zigbee-gateway}

**対象:** reComputer R11xx シリーズ（例：reComputer R1124-10、SKU 113991374）。デバイスを Zigbee ネットワークゲートウェイとして使用する必要があるケース

**最終検証日:** 2026-11-01

いいえ、直接使用することはできません。現在の reComputer R1124-10 の Mini PCIe インターフェースは Zigbee をサポートしておらず、オンボード BLE も Zigbee 無線として動作させることはできません。BLE と Zigbee はどちらも 2.4 GHz 帯で動作しますが、異なる無線プロトコルを使用しており、互換性のないハードウェアおよびソフトウェアサポートを必要とするため、オンチップ BLE で専用 Zigbee モジュールを代用することはできません。デバイスを Zigbee ゲートウェイとして使用するには、互換性のある専用 Zigbee コーディネータまたはモジュールを装着し、デバイスがサポートするホストインターフェースのいずれかを介して接続する必要があります。

**参考情報:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/)

### reComputer R1124-10 は Quectel EC25-EUX 4G LTE Cat 4 モジュールと WM1302 SPI EU868 LoRaWAN モジュールを同時に使用できますか？ {#r1124-10-ec25-wm1302-concurrent}

**対象:** reComputer R11xx シリーズ（例：reComputer R1124-10）。4G LTE Cat 4 モジュールと SPI LoRaWAN モジュールを同時に接続する必要があるケース

**最終検証日:** 2026-11-01

はい、reComputer R1124-10 は EC25-EUX と WM1302 SPI を同時動作させることができます。EC25-EUX を Mini-PCIe スロット 1 に装着し、USB HUB2 ポート 4 を介して接続します。WM1302 SPI を Mini-PCIe スロット 2 に装着し、SPI0 / CE1 を介して接続します。

**参考情報:**

- [reComputer R1100 Configure System](https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/)

### reComputer R1024 / R1025 の 3 ピンコネクタの部品番号と購入方法を教えてください。 {#r1024-r1025-3pin-connector}

**対象:** reComputer R10xx シリーズ（例：reComputer R1024 / R1025）。3 ピンケーブル用のプラグインコネクタを選定する必要があるプロジェクト

**最終検証日:** 2026-11-01

reComputer-R1024 / R1025 には、ユーザーが自分の設計で使用できる 3 ピンコネクタが 3 個同梱されています。このコネクタは Bazaar には掲載されていないため、単体で購入することはできません。

**参考情報:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/)

## ハードウェアとインターフェース {#hardware-and-interfaces}

### reComputer R1035 モジュール向けに公式サポートされている TPM モジュールはありますか？また、その取り付け方法を教えてください。 {#r1035-tpm-module}

**対象:** reComputer R10xx シリーズ（例：reComputer R1035）。デバイスに TPM 2.0 セキュリティチップを追加する必要があるケース

**最終検証日:** 2026-11-01

はい、ありますが、そのモジュールは単体販売されていません。この要件を満たすにはカスタマイズ対応が必要です。

**参考情報:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/ja/recomputer_r/)

### R1025-10 に Seeed PoE アドオンと Seeed SuperCAP UPS Module (LTC3350) を同時に取り付けるスペースはありますか？ {#r1025-10-poe-ups-fit}

**対象:** reComputer R10xx シリーズ（例：reComputer R1025-10）。Seeed PoE アドオンと Seeed SuperCAP UPS Module (LTC3350) を同時に取り付ける必要があるケース

**最終検証日:** 2026-11-01

はい、R1025-10 には Seeed PoE アドオンと Seeed SuperCAP UPS Module (LTC3350) を同時に搭載できます。具体的な取り付け方法については、reComputer R1000 組み立てガイドの「assemble-ups-and-poe-module」セクション（https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/）を参照してください。

**参考情報:**

- [reComputer R1000 Assembly Guide — Assemble UPS and PoE module](https://wiki.seeedstudio.com/ja/recomputer_r1000_assembly_guide/)

### reComputer R1100 は外部 24 V および 12 V センサに直接電源を供給できますか？また 220 V、24 V、12 V を同時に使用する必要がある場合、電源はどのように選定すべきですか？ {#r1100-external-sensor-power}

**対象:** reComputer R11xx シリーズ（例：reComputer R1100）。外部 24 V / 12 V センサに給電する、または 220 V、24 V、12 V を同時に使用するアプリケーション

**最終検証日:** 2026-11-01

reComputer R1100 シリーズには、外部 12 V または 24 V センサ向けの専用電源出力は統合されていないため、これらのセンサには独立した電源が必要です。アプリケーションで 220 V、24 V、12 V を同時に必要とする場合は、実際の負荷に応じて、独立電源の組み合わせまたは適切なマルチ出力電源を選択できますが、選定前にセンサの定格電圧・電流または電力、極性、配線要件、突入負荷、220 V の具体的な用途、および現場の電気安全要件を確認する必要があります。12 V および 24 V センサは通常 DC 電源を使用するため、それらの出力仕様に合致する産業用電源を選定し、必要に応じて DC/DC コンバータを追加してください。トランスを電圧値だけでセンサに直接対応させるべきではありません。

**参考情報:**

- [reComputer R1100 入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1100_intro/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
