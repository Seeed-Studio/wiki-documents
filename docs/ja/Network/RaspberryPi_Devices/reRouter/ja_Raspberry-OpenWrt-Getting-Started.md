---
description: reRouterの紹介
title: reRouterの紹介
keywords:
- デバイス
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry-OpenWrt-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# OpenWrtを使用したルーターのセットアップガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" alt="pir" width="650" height="auto"/></p>

このミニルーターは、デュアルギガビットイーサネットポートとデュアルUSB 3.0ポートを備えており、ソフトルーターアプリケーションに適していますが、ハードウェアは最小限に抑えられています。4GB RAMと32GB eMMCを搭載したRaspberry Pi Compute Module 4を事前にインストールしており、高速な起動時間とスムーズな全体的な体験を実現します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview1.png" alt="pir" width="650" height="auto"/></p>

## ミニルーターのクイックスタート

### OpenWrtが事前インストール済み

Compute Module 4には、<a href="https://wiki.seeedstudio.com/ja/OpenWrt-Getting-Started/" target="_blank"><span>OpenWrtファームウェア</span></a>が最初からインストールされています。つまり、パッケージを開封し、ボードを取り出して既存の家庭用ネットワークに接続するだけで、自分専用のミニルーターを手に入れることができます！

OpenWrtは、組み込みデバイスやルーターで動作するオープンソースのLinuxオペレーティングシステムです。従来のルーターよりも多くの機能、パフォーマンス、セキュリティを提供します。完全に書き込み可能なファイルシステムを持ち、パッケージ管理システムを含んでいます。これらのパッケージを利用して、さまざまな方法でアプリケーションに適応させることができます。このボードを家庭用ネットワークに接続し、ウェブブラウザからルーターにアクセスすると、以下のような美しくインタラクティブなダッシュボードが表示されます。

## OpenWrtを使用したミニルーターのセットアップ手順（2ステップ）

**必要なハードウェア**

OpenWrtをミニルーターで使用する前に、以下のハードウェアを準備してください：
- 1 x ミニルーター
- 1 x 電源アダプター（5V/3A）とUSB Type-Cケーブル
- 2 x イーサネットケーブル

**手順**

イーサネットケーブルを接続したら、
- **ステップ1.** ボードの電源を入れる
- **ステップ2.** ウェブブラウザを開き、192.168.2.1と入力する  
ここでOpenWrt Luciウェブインターフェースが表示されます。SeeedがコンパイルしたOpenWrtイメージには、多くのパッケージが最初から含まれています。これらのパッケージを使用して、多くのアプリケーションを実現することができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview2.png" alt="pir" width="650" height="auto"/></p>

## FAQ
詳細については、[**こちら**](/ja/FAQs_For_openWrt)をクリックしてください。

## リソース

- **[ウェブページ]** [OpenWrt公式ドキュメント](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Seeed OpenWrtイメージ](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>