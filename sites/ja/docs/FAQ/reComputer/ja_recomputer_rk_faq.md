---
title: reComputer RK FAQ
description: reComputer RK シリーズにおけるハードウェア互換性、OS セットアップ、接続性および AI 推論に関するよくある質問。
slug: /recomputer_rk_faq
last_update:
  date: 11/06/2026
  author: doublelf
keywords:
  - reComputer RK FAQ
  - reComputer RK troubleshooting
  - reComputer RK3588
  - reComputer RK3576
  - reComputer RK NPU
  - Rockchip RKNN
---

<div class="recomputer-faq-page">

# reComputer RK FAQ

このページでは、reComputer RK に関する検証済みの回答をまとめています。各回答には、対象となる製品バリアントとファームウェアモード、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- 正確な製品バリアントと、そのベースとなっている SoC（RK3588 または RK3576）を確認してください。
- バージョン依存の手順を適用する前に、現在のファームウェアバージョンを確認してください。
- このページの回答は 2026-11-01 時点で検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を改めて確認してください。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### reComputer RK のチュートリアルはどこで見つかりますか？ {#rk-tutorials-and-images}

**対象:** 公式チュートリアル、イメージおよびインストール手順が必要な、すべての reComputer RK3576 および RK3588 シリーズ

**最終検証日:** 2026-11-01

Wiki の場所: https://sensecraft.seeed.cc/ai-lab/en  
  イメージ検索: https://armbian.com/boards

1. reComputer RK シリーズの wiki は reComputer AI Lab プラットフォームに移行しており、Tutorials 内に製品チュートリアルがあります: https://sensecraft.seeed.cc/ai-lab/en; 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_tutorials.jpg' />  
    そのほかにも、Models や Projects などのページがあり、単一の Docker コマンドでモデルやケースを実行して、デバイス性能を素早く把握することができます。 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_model.jpg' />  <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_project.jpg' />  

2. 関連する RK 製品のイメージは Armbian 公式リポジトリにアップロードしており、こちらで検索できます: https://imager.armbian.com/; 

    また、イメージの書き込み方法に関する wiki も提供しています: https://sensecraft.seeed.cc/ai-lab/en/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os

### reComputer RK3576/RK3588 は M.2 NVMe SSD からシステムを起動できますか？ {#rk3576-nvme-boot}

**対象:** システムディスクとして M.2 NVMe SSD を使用する reComputer RK3576/RK3588 シリーズ

**最終検証日:** 2026-11-01

はい。システムを SSD に書き込んだあと、デバイスの電源を切り、SD カードを取り外してください。その後はシステムが自動的に SSD から起動します。ブートドライブの切り替え方法については、次のページのチュートリアルを参照してください: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd

**注意:**

- システムを書き込む際は、必ず当社が提供する公式イメージを使用してください。

**参考情報:**

- [Install Armbian on an NVMe SSD on reComputer RK3576 | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd)

## OS とファームウェア {#os-and-firmware}

### reComputer RK3588 デバイスの初期パスワードは何ですか？ {#rk3588-default-password}

**対象:** reComputer RK3588 ボード

**最終検証日:** 2026-11-01

標準の reComputer RK3588 をそのまま購入し、アカウントがカスタマイズされていない場合、デバイスの初期ユーザー名とパスワードは次のとおりです: root  - 1234

### reComputer RK3588 Dev Kit には公式の Android イメージが付属しますか？ {#rk3588-devkit-android-availability}

**対象:** reComputer RK3588 Dev Kit

**最終検証日:** 2026-11-01

現時点では、reComputer RK3588 Dev Kit が公式にサポートしているのは Armbian です。公式の Android イメージはリリース予定が確定しておらず、リリース日も未定です。プロジェクトで Android やその他の OS が必要な場合は、ODM カスタマイズパートナーシップを通じてカスタム対応を検討できますが、このルートは一般提供される公式イメージとは異なります。

## 接続性とネットワーク {#connectivity-and-networking}

### reComputer RK3576 で GMSL カメラを使う方法と、どのデシリアライザが動作しますか？ {#rk3576-gmsl-camera}

**対象:** 外付け GMSL から MIPI CSI-2 へのデシリアライザアダプタを使用する reComputer RK3576 ボード

**最終検証日:** 2026-11-01

はい。RK3576 は外付け GMSL デシリアライザアダプタボードを介して GMSL カメラを受け付けます。デシリアライザは GMSL シリアルデータを MIPI CSI-2 に変換し、RK3576 は MIPI CSI インターフェース経由でそれを受信します。MAX96712 はそのための適切なデシリアライザです。H.265 ハードウェアエンコードおよび録画にも対応しており、RK3576 には H.264 と H.265 のハードウェアエンコードを備えた VPU が内蔵されており、チップ仕様としては最大 4K 60 fps に対応します。

**参考情報:**

- [Object Detection with YOLOv11 on reComputer-RK](https://wiki.seeedstudio.com/ja/object_detection_with_yolov11_on_recomputer_rk/)
- [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)

### reComputer RK3576-20 には I2C ピンがありますか？ {#rk3576-20-i2c-pins}

**対象:** Raspberry Pi の代替として使用する reComputer RK3576-20

**最終検証日:** 2026-11-01

reComputer RK3576-20 には 2 つの I2C チャンネルを含む 40 ピン GPIO ヘッダがあり、その回路図はこちらで公開されています: https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf.

**参考情報:**

- [reComputer RK3576 V1.0 Schematic](https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf)

### reComputer RK3576 の 40 ピンヘッダにおける GPIO と多重化ピンを確認するにはどうすればよいですか？ {#rk3576-40pin-pinmux}

**対象:** UART、CAN、SPI、I2C の多重化を計画しているハードウェア設計向けの reComputer RK3576 シリーズ 40 ピン GPIO ヘッダ

**最終検証日:** 2026-11-01

40 ピンヘッダは最大 6 つの UART を多重化して出力できます。標準 UART（RS232、RS485 または KNX）は 4 つまで可能ですが、多重化が必要で合計 8 ピンを占有します。また、CTS と RTS（MG24）付きの UART を 1 つ使用することもできます。CAN は 1 系統使用可能で、40 ピンヘッダ上の CAN はチップのネイティブ信号であるため、動作させるには外付け CAN トランシーバが必要です。多重化が広範囲に及ぶため、SPI や I2C などの機能が利用できない場合があります。

1. デバイスのピンテストおよび多重化状況は、次の wiki で確認できます: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/interface-usage-guidelines/use-recomputer-rk3576-hardware-interfaces-and-fan-control#gpio 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_rk3576_gpio.jpg' /> 

**参考情報:**

- [reComputer RK3576 Hardware Interfaces and Fan Control | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/tutorials)

### reComputer RK3588-30 は IP カメラを接続して物体検出を実行できますか？ {#rk3588-ip-camera-rtsp}

**対象:** ビデオ解析のために Ethernet 経由で RTSP IP カメラを接続する reComputer RK3588-30

**最終検証日:** 2026-11-01

はい。機能面から判断して、このデバイスは RTSP カメラ入力を十分にサポートします。2 つの 2.5 ギガビット Ethernet ポート（うち 1 つは PoE 対応）、ビデオデコード用の VPU、および計算用の NPU を備えています。

**参考情報:**

- [Interruptible Conversational Voice AI on the Edge: Build, Deploy, and Measured Results](https://wiki.seeedstudio.com/ja/solutions/conversational-voice-ai/)
- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/ja/solutions/edge-security/)

## ハードウェアとインターフェース {#hardware-and-interfaces}

### RK182x アクセラレータカードが reComputer RK3576 への取り付けを妨げて装着できません {#rk1828-npu-interference}

**対象:** RK1828 または RM182X PCIe NPU カードを追加した reComputer RK3576 ボード

**最終検証日:** 2026-11-01

reComputer RK3576 は、この取り付けについてすでに検証済みです。RK182x アクセラレータカードを取り付ける際は、アクセラレータの元のボトムシェルを取り外す必要がある点に注意してください。基板と冷却ファンのみの状態にすれば、カードは通常どおり取り付け可能です。

### reComputer RK3588 はどの MIPI-CSI カメラをサポートしていますか？ {#rk3588-csi-camera-support}

**対象:** MIPI-CSI インターフェース経由でカメラを接続する reComputer RK3588 シリーズ

**最終検証日:** 2026-11-01

現在、動作確認が取れているカメラは Raspberry Pi Camera Module 3 (IMX708) です。

**注意:**

- reComputer RK3588 の CSI インターフェースは Raspberry Pi の設計とは異なるため、Raspberry Pi カメラのエコシステムをそのまま流用することはできません。

**参考情報:**

- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/ja/solutions/edge-security/)
- [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)

## 製品とサービス {#product-and-service}

### reComputer RK3588-40 は DeepSeek や Ollama などのローカル AI を実行できますか？また、Windows や Linux をサポートしていますか？ {#rk3588-local-ai-os}

**対象:** ローカルの LLM または VLM モデルを実行する reComputer RK3588-40

**最終検証日:** 2026-11-01

はい、ローカル AI のデプロイに使用できます。reComputer RK3588-40 は幅広い LLM および VLM モデルをサポートしており、reComputer AI Lab プラットフォームの Models ページで適合済みモデルを確認できます。OS については、公式にサポートされているのはベースシステムとして Linux を用いた Debian であり、Windows や Debian 以外の Linux ディストリビューションは、現時点では明示的にはサポートされていません。

**注意:**

- 特定のツールやモデル（DeepSeek や Ollama など）が動作するかどうかは、モデルバージョン、量子化レベル、利用可能なメモリおよび計算リソースに照らして個別に確認する必要があります。

**参考情報:**

- [reComputer AI Lab - Models](https://sensecraft.seeed.cc/ai-lab/models)
- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

### reComputer RK3576/RK3588 はどの PoE-PD および Hailo-8 M.2 アクセサリをサポートしており、互換性、SKU、および購入方法をどのように確認できますか？ {#rk3588-40-accessories}

**対象:** PoE-PD および Hailo-8 M.2 アクセサリの選定を行う reComputer RK3588-40（SKU 100086238）

**最終確認日：** 2026-11-01

reComputer RK3588 用の PoE-PD モジュールはまだリリースされておらず、確定した SKU も、単体販売されるかどうかについてのアナウンスもありません。次に、Hailo-8 M.2 アクセラレータについてですが、Seeed は reComputer RK3588-40 と互換性のある Hailo-8 M.2 モジュールが存在すると述べていますが、現在は RK3588-40 ホストとのカスタムバンドルとしてのみ提供されており、モジュール単体で購入することはできません。

**注意:**

- カスタム量産ソリューションについて見積もりを依頼してください。別のチャネルから Hailo-8 モジュールを購入する場合は、購入を決定する前に、販売者に関連仕様と RK3588-40 と同じ Hailo-8 互換性があるかどうかを確認してください

**参考情報:**

- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
