---
description: EdgeBox RPi 200 balena OS セットアップ
title: EdgeBox RPi 200 balena OS セットアップ
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 05/15/2025
  author: Marc Pous & Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## balenaとは？

balenaは、IoT（Internet of Things）プラットフォームであり、開発者がIoTアプリケーションをデバイス群にわたって構築、展開、管理するのを支援するために設計されています。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションの展開機能を備えているため、IoTソフトウェアやHostOSを簡単に更新し、バグを修正し、新しい機能をIoTアプリケーションに導入することが可能です。balenaはコード更新をプッシュし、デバイス構成を管理し、デバイスがその場所やネットワーク条件に関係なく、フィールドで信頼性と安全性を保ちながら動作することを保証する統一された方法を提供します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOSはbalenaエコシステムの主要なコンポーネントです。balenaOSは、balenaによって作られたオープンソースのLinuxベースのオペレーティングシステムであり、balenaEngineを通じて組み込みデバイス上でコンテナ化されたアプリケーションを実行するために特化されています。balenaEngineはIoTデバイス向けに最適化された軽量コンテナエンジンです。balenaOSは信頼性、堅牢性、セキュリティに最適化されており、IoTおよびエッジコンピューティング環境において重要な要素です。Yoctoプロジェクトを基盤として構築されており、100以上の異なるハードウェアプラットフォームをサポートし、HostOSの更新やアプリケーションを制御するためのスーパーバイザーAPIなどの組み込み機能を備えています。Dockerコンテナを活用することで、balenaOSはアプリケーションの移植性を確保し、開発プロセスを簡素化します。

balenaCloudは、IoTデバイス群を管理するための中央ダッシュボードを提供します。リモート更新、デバイスおよびアプリケーションの監視、トラブルシューティング、セキュアなデバイスアクセスなどの機能により、デバイス管理を簡素化します。balenaCloudを使用すると、1台のデバイスから数千台のデバイスに至るまで、単一のgit push、balena CLI push、または選択した組み込みの継続的インテグレーションおよび継続的デプロイメントを通じてアプリケーションを簡単に展開できます。balenaは、IoTデバイス群、ソフトウェア、およびそれらで動作するHostOSを効率的に管理したいと考える人々にとって、スケーラブルで堅牢なIoTソリューションです。

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200シリーズは、複数の産業用途を組み合わせた、Raspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高い拡張性と堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムによってサポートされています。スマートオートメーションや産業用IoT（IIoT）ソリューションに最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

このドキュメントでは、Seeed Studio EdgeBox-RPI-200 に balenaOS をフラッシュする方法を学びます。これにより、EdgeBox-RPI-200 のフリートで実行されているソフトウェアやホスト OS の更新を簡単に行えるようになります。

### ハードウェア

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
* [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) - EdgeBox-RPI-200 内の CM4 に OS をフラッシュするために使用します。
* DINレール電源 24V (DC) - この例では `Mean Well HDR-100-24 AC-DC` を使用します。
* EdgeBox-RPI-200 を電源に接続するためのケーブル。

### ソフトウェア

* [balenaCloud](https://balena.io) アカウント（こちらで登録可能）。最初の10台のデバイスは無料です。
* [balenaEtcher](https://etcher.balena.io/) - CM4 メモリをフラッシュするために使用します。

## EdgeBox RPI200 に balenaOS をフラッシュする

EdgeBox-RPI-200 に balenaOS をフラッシュするには、デバイスを分解して Raspberry Pi Compute Module 4 を取り出す必要があります。

**STEP 1:** EdgeBox-RPI-200 から取り出した CM4 を [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) に設置します。[wikiページ](/ja/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode) を参照して、[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) を使用して CM4 eMMC ストレージを USB マスストレージモードに設定する方法を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**STEP 2:** balenaCloud にアクセスし、無料アカウントを作成して `Raspberry Pi 4` または `CM4` デバイスタイプ用のフリートを作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>

**STEP 3:** `Add Device` をクリックして、ネットワーク認証情報付きの balenaOS イメージをダウンロードします。

:::note
WiFiアンテナがない EdgeBox RPI200 は WiFi ネットワークに接続できないことを忘れないでください。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**STEP 4:** [balenaEtcher](https://etcher.balena.io/) を使用して、balenaCloud からダウンロードした balenaOS イメージを CM4 にフラッシュします。

**STEP 5:** フラッシュが成功したら、CM4 を EdgeBox-RPI-200 に戻し、DINレール電源アダプターで電源を入れます。デバイスが balenaCloud ダッシュボードに表示される可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Phoenix Connector GPIO の設定

EdgeBox-RPI-200 の Phoenix Connector GPIO にアクセスするには、デフォルトの balenaOS イメージのデバイスツリー（Device Tree）パラメータを更新する必要があります。

Phoenix Connector GPIO に `/dev/ttyACM0` または `/dev/ttyACM1` を介してアクセスするには、`Device Configuration` に移動して DToverlays を変更します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

デバイスツリーは、Define DT overlays に `"dwc2","dr_mode=host","w1-gpio"` として定義されています。デフォルトのオーバーレイ用の DT パラメータを定義する際に、"enable_serial=1" パラメータを追加しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>