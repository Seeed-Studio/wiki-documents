---
description: EdgeBox RPi 200 balena OS セットアップ
title: EdgeBox RPi 200 balena OS セットアップ
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 07/20/2023
  author: Marc Pous & Peter Pan
---

## balenaとは？

balenaは、開発者がIoTアプリケーションを構築、デプロイ、管理するためのデバイスフリート全体にわたって設計されたInternet of Things（IoT）プラットフォームです。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションデプロイメント機能を含んでおり、IoTソフトウェアとHostOSの簡単な更新、バグ修正、IoTアプリケーションへの新機能導入を可能にします。balenaは、コード更新のプッシュ、デバイス設定の管理、デバイスの場所やネットワーク条件に関係なく、フィールドでデバイスが確実かつ安全に動作することを保証する統一された方法を提供します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOSは、balenaエコシステムの主要コンポーネントです。balenaOSは、balenaによって作られたオープンソースのLinuxベースのオペレーティングシステムで、IoTデバイス向けに最適化された軽量なコンテナエンジンであるbalenaEngineを通じて、組み込みデバイス上でコンテナ化されたアプリケーションを実行するために特別に構築されています。信頼性、堅牢性、セキュリティに最適化されており、これらはIoTおよびエッジコンピューティング環境にとって重要な要素です。Yoctoプロジェクトをベースに構築されたbalenaOSは、100以上の異なるハードウェアプラットフォームをサポートし、ホストOS更新やアプリケーション制御用のスーパーバイザーAPIなどの組み込み機能を含んでいます。Dockerコンテナを活用することで、balenaOSはアプリケーションの移植性を確保し、開発プロセスを簡素化します。

balenaCloudは、IoTデバイスのフリートを管理するための中央ダッシュボードを提供します。リモート更新、デバイスとアプリケーションの監視、トラブルシューティング、安全なデバイスアクセスの機能により、デバイス管理を簡素化します。balenaCloudを使用すると、単一のgit push、balena CLI push、または選択した組み込み継続的インテグレーションおよび継続的デプロイメントを通じて、1台のデバイスまたは数千台のデバイスにアプリケーションをデプロイする方法を簡単に監視できます。balenaは、IoTデバイスのフリート、およびそれらで実行されるソフトウェアとホストOSを効率的に管理したい人にとって、スケーラブルで堅牢なIoTソリューションです。

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200シリーズは、複数の産業用途を組み合わせた、Raspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高いスケーラビリティと堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムによってサポートされており、スマート自動化および産業用Internet of Things（IIoT）ソリューションにとって理想的な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

このドキュメントでは、Seeed Studio EdgeBox-RPI-200にbalenaOSをフラッシュして、EdgeBox-RPI-200のフリート上で動作するソフトウェアとホストOSの更新の摩擦を減らす方法を学習します。

### ハードウェア

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 
* [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) EdgeBox-RPI-200内のCM4にOSをフラッシュするために使用。
* DINレール電源24V（DC）、この場合は`Mean Well HDR-100-24 AC-DC`を使用。
* EdgeBox-RPI-200と電源を接続するケーブル。

### ソフトウェア

* [balenaCloud](https://balena.io)アカウント（こちらでサインアップ）、最初の10台のデバイスは無料。
* [balenaEtcher](https://etcher.balena.io/) CM4メモリをフラッシュするため。


## EdgeBox RPI200にbalenaOSをフラッシュする

EdgeBox-RPI-200にbalenaOSをフラッシュするには、デバイスを分解してRaspberry Pi Compute Module 4を取り出す必要があります。

**ステップ1:** EdgeBox-RPI-200からCM4を取り出し、[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)に配置します。[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)を使用してCM4 eMMCストレージをUSBマスストレージモードに設定する方法については、[wikiページ](/ja/Raspberry_pi_CM4_update_eeprom/#put-cm4-emmc-storage-into-usb-mass-storage-mode)に従ってください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**ステップ2:** balenaCloudにアクセスし、無料アカウントを作成して`Raspberry Pi 4`または`CM4`デバイスタイプのフリートを作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>


**ステップ3:** `Add Device`をクリックし、ネットワーク認証情報を含むbalenaOSイメージをダウンロードします。

:::note
WiFiアンテナのないEdgeBox RPI200は、WiFiネットワークに接続できないことを覚えておいてください。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**ステップ4**: [balenaEtcher](https://etcher.balena.io/)を使用して、balenaCloudからダウンロードしたbalenaOSイメージでCM4をフラッシュします。

**ステップ5**: 正常に完了したら、CM4をEdgeBox-RPI-200に戻し、DINレール電源アダプターで電源を入れます。デバイスがbalenaCloudダッシュボードに表示される場合があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Phoenix Connector GPIOを設定する

EdgeBox-RPI-200 Phoenix Connector GPIOにアクセスするには、デフォルトのbalenaOSイメージのDevice Treeパラメータを更新する必要があります。

`/dev/ttyACM0`または`/dev/ttyACM1`を通じてPhoenix Connector GPIOにアクセスするには、`Device Configuration`に移動してDToverlaysを変更します

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

デバイスツリーはDefine DT overlaysで`"dwc2","dr_mode=host","w1-gpio"`として定義されています。Define DT parameters for the default overlayで、パラメータ"enable_serial=1"を追加しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
