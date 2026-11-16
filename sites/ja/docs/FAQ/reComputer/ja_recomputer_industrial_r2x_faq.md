---
title: reComputer Industrial R2x シリーズ FAQ
description: reComputer Industrial R20xx、R21xx、R22xx シリーズに関するよくある質問。eMMC と SSD のブート、産業用冷却、システム構成および拡張について説明します。
slug: /recomputer_industrial_r2x_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer Industrial R20xx FAQ
  - reComputer Industrial R21xx FAQ
  - reComputer Industrial R22xx FAQ
  - reComputer Industrial R2x トラブルシューティング
  - Raspberry Pi CM4
  - Raspberry Pi CM5
  - 産業用 AI NVR
---

<div class="recomputer-faq-page">

# reComputer Industrial R2x シリーズ FAQ

このページでは、reComputer Industrial R2x シリーズ向けに検証済みの回答をまとめています。各回答には、対象となる製品バリアントとファームウェアモード、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- 正確なモデルを確認してください：reComputer Industrial R20xx、R21xx または R22xx と、搭載されている Raspberry Pi コンピュートモジュール。
- バージョン依存の手順を適用する前に、現在使用している Raspberry Pi OS イメージのバージョンを確認してください。
- このページの回答は 2026-11-10 時点で検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を改めて確認してください。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## OS とファームウェア {#os-and-firmware}

### Raspberry Pi CM シリーズ製品に UPS モジュールを追加した後、停電直後にすぐに電源が復旧してもデバイスの電源が入らない。どのように対処すればよいですか？ {#industrial-r20xx-ups-power-cycle}

**対象:** Raspberry Pi CM シリーズコンピュートモジュールをベースにした reComputer Industrial R20xx に UPS モジュールを追加し、停電直後に電源が復旧してもデバイスの電源が入らないケース

**最終検証日:** 2026-11-01

これは、UPS モジュールを取り付けると UPS の機能が CM5 にプリセットされているシャットダウンロジックと重複するために発生します。この状態になった場合は、一度デバイスの電源を完全に切り、UPS が完全に放電するまで待ってから、再度デバイスを起動してください。

**前提条件:**

- この動作の起こり得る原因は次のとおりです。

1. CM4/5 が再起動する条件は、GLOBAL_EN ピンの電圧が 1 ミリ秒以上 Low の状態を維持することです。GLOBAL_EN ピンを Low に引き下げる条件は、5 V システム電源が 1.65 V を下回ることです。
2. 外部電源が遮断されると、UPS は CM4 にシャットダウン信号を送ります。UPS が完全に放電する前に電源が復旧した場合、VDD_5_SYS 電圧は 1.65 V を上回ったままであり、同時にデバイスはすでにシャットダウンコマンドを受け取ってシャットダウン状態に入っています。この場合、GLOBAL_EN ピンは Low になれないため、CM4 は再起動できません。

**注意:**

- これは UPS を取り付けた後にのみ発生し、通常の使用ではデバイスの再起動には影響しません。影響するのは電源が突然落ちた場合のみであり、その際はデバイスを再起動するタイミング（おおよそ 10〜20 秒、または 1〜2 分後に電源を復旧する）に注意する必要があります。
- ソフトウェア側でシャットダウンロジックを変更することで、この状況を回避することもできます。対応する解決策はコミュニティで公開されています：https://github.com/lucasnetau/ltc3350-ups

**参考情報:**

- [LTC3350 SuperCap UPS Monitor](https://github.com/lucasnetau/ltc3350-ups)

### reComputer Industrial R2245-12 は、Ubuntu Server 24.04 LTS と Hailo-8 ドライバを公式にサポートしていますか？ {#r2245-12-ubuntu-server-2404}

**対象:** reComputer Industrial R22xx（例として reComputer R2245-12）で、Ubuntu Server 24.04 LTS 上で Hailo-8 を動作させる必要があるケース

**最終検証日:** 2026-11-01

公式の Ubuntu Server 24.04 イメージのインストールはサポートされていますが、デバイスツリーファイルが欠落している場合があり、その場合はいくつかの機能が正しく動作しない可能性があります。Seeed が提供する公式イメージの使用を推奨します。このイメージには Hailo-8 を動作させるために必要なものがすべてプリインストールされており、そのまま使用できます。

**参考情報:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_flash_os/)

## 接続性とネットワーキング {#connectivity-and-networking}

### reComputer Industrial R21xx で CANopen 角度センサを接続するには、追加の CAN トランシーバは必要ですか？ {#industrial-r21xx-canopen-transceiver}

**対象:** reComputer Industrial R21xx で、オンボード CAN インターフェースを介して CANopen 角度センサなどのフィールドバス機器を接続するケース

**最終検証日:** 2026-11-01

reComputer Industrial R21xx にはアイソレートされた CAN FD トランシーバがオンボードで搭載されているため、追加の CAN トランシーバは不要です。センサの CAN-H、CAN-L、および信号 GND を、デバイス側の CANH/CANL/GND Phoenix 端子に直接接続できます。センサの電源は別途配線する必要があり、CAN 信号線と混在させてはいけません。CAN バスの両端には 120Ω の終端抵抗を取り付ける必要がありますが、R21xx には終端抵抗は内蔵されていません。このインターフェースは CAN 2.0 と互換性があり、CANopen をサポートします。Linux 上では `can0`/`can1` としてマッピングされ、ボーレートを設定すると通信を開始します。

**参考情報:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_getting_start/)

### reComputer Industrial R2245-12 で HDMI 出力がなく、USB 経由でフラッシュする際に eMMC が検出されません。どのように対処すればよいですか？ {#r2245-12-usb-emmc-not-detected}

**対象:** reComputer Industrial R22xx（例として reComputer R2245-12）で、HDMI 出力がなく、USB 経由でフラッシュする際に eMMC が検出されないケース

**最終検証日:** 2026-11-01

BOOT モードに入ってからボードを USB で PC に接続すると、システムは R2245 の eMMC を自動的に検出します。まず Windows のデバイスマネージャで、新しいストレージデバイスが追加されているかを確認し、その後 Raspberry Pi Imager を使用してイメージと対象ストレージデバイスを選択して書き込みます。選択肢として利用可能であれば、新しいイメージを書き込むことで通常は復旧します。それでも eMMC が検出されない場合は、eMMC または CM5 が破損している可能性があります。この場合は筐体を開けて CM5 を交換し、再度イメージを書き込んでテストしてください。交換後に正常に書き込める場合は、元の CM5 が破損していたことになります。テスト中の手順とログは記録しておいてください。

**参考情報:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_flash_os/)

## ハードウェアとインターフェース {#hardware-and-interfaces}

### reComputer Industrial R2x シリーズ製品で GPS 機能を使用するにはどうすればよいですか？4G 機能にはダイバーシティアンテナを取り付けられますか？ {#industrial-r2x-gps-4g-antenna}

**対象:** reComputer Industrial R2x シリーズ（reComputer Industrial R20xx / R21xx / R22xx）で、GPS 位置情報や 4G ダイバーシティアンテナが必要なケース

**最終検証日:** 2026-11-01

本製品の GPS 機能は、4G モジュールと GPS アンテナを組み合わせて使用する場合にのみ動作します。標準製品にはこれらは同梱されていません。この機能が必要な場合は、発注時にカスタマイズとして依頼することで、Seeed が出荷前に事前取り付けを行います。4G 機能用のダイバーシティアンテナについては、本製品には最大 3 本まで同時にアンテナを取り付けることができます。

**参考情報:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R20xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_r20xx_getting_start/)

### 内部の部品が外れている、ぐらついている、または振るとカラカラ音がする場合でも、デバイスを使用し続けてもよいですか？返品を依頼した後、検査と返金はどのように行われますか？ {#industrial-r21xx-return-inspection-refund}

**対象:** reComputer Industrial R21xx で、内部部品が外れている、ぐらついている、または振るとカラカラ音がするなどのアフターサービス案件で、返品が依頼されたケース

**最終検証日:** 2026-11-01

デバイス内部の部品が外れている、ぐらついている、またはデバイスを動かすとカラカラ音がすることに気付いた場合は、ショートやメインボードのさらなる損傷を防ぐため、直ちに電源投入と使用を中止してください。自分で部品を元に戻したり、デバイスの分解を続けたりせず、技術サポートまたは倉庫に引き渡して検査を受けてください。対応時には、外箱ラベル（バーコード付き）、デバイスのシリアル番号（SN）、メインボード全体、および部品が外れた箇所の、鮮明なクローズアップ写真を撮影してください。

**参考情報:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_getting_start/)

### reComputer Industrial R21 の 2 つの USB-A 3.2 ポートのどちらもデバイスを認識せず、ブートログに error -71 が出続けます。どのように切り分けと対処を行うべきですか？ {#industrial-r21xx-usb-a-error-71}

**対象:** reComputer Industrial R21xx で、2 つの USB-A 3.2 ポートのどちらもデバイスを認識せず、ブートログに error -71 が出続けるケース

**最終検証日:** 2026-11-01

ブートから約 0.8 秒の時点で USB デバイスディスクリプタの読み取り失敗が表示され、その後も error -71（EPROTO）が報告され続け、最終的に "unable to enumerate USB device" と表示され、さらに USB 3.0 バス上で USB5744 Hub も検出されない場合は、まずハードウェアを確認する必要があります。同一ロットの他の個体は正常に動作している一方で、この個体だけがユーザ空間プログラムが起動する前からエラーを出し続ける場合、原因は一般的なソフトウェア設定の問題ではなく、RP1 と USB5744 間の USB 2.0 D+/D- 信号経路またはハブ回路上のハードウェア故障と判断できます。

**参考情報:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_getting_start/)

## 熱設計と電源 {#thermal-and-power}

### PoE モジュールやサーマルモジュールなどのモジュール製品で、取り付け時にチップが冷却デバイスに密着しないのはなぜですか？ {#industrial-r2xx-module-thermal-contact}

**対象:** Raspberry Pi CM シリーズコンピュートモジュールをベースにした reComputer Industrial R20xx で、PoE モジュールやサーマルモジュールなどのオプションアクセサリを取り付けるケース

**最終検証日:** 2026-11-01

このよくある質問については、次の点を確認してください。1. アクセサリが対応する製品に適合するアクセサリであるかどうか。2. 正しいインターフェースに取り付けているかどうか。3. アクセサリ（サーマルパッド、筐体など）が完全に取り付けられているかどうか。

**参考情報:**

- [reComputer Industrial R20xx 入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_industrial_r20xx_getting_start/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
