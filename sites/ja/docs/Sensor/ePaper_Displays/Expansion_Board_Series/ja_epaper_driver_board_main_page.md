---
description: この記事は、ePaper ドライバーボードのまとめページです。
title: ePaper ドライバーボード概要
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /xiao_epaper_display_board_overview
sidebar_position: 1
last_update:
  date: 12/21/2025
  author: Allen
createdAt: '2025-12-19'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/ja/xiao_epaper_display_board_overview/
---

# ePaper ドライバーボード概要

## はじめに

ePaper ドライバーボードシリーズは、多用途かつ低消費電力の ePaper アプリケーション向けに設計されています。これらのボードは、汎用の 24 ピンおよび 50 ピンディスプレイから、10.3 インチ（高速リフレッシュ）や 13.3 インチ（Spectra™ 6）といった大型の特殊ディスプレイまで、幅広い ePaper ディスプレイをサポートします。各ボードは、電源スイッチ付き JST 2.0mm バッテリーコネクタ、内蔵充電 IC、リセットボタン、3 つのユーザー設定可能ボタンなどの基本機能を共通して備えています。多様なマイコン（例：XIAO ESP32-S3 Plus、XIAO nRF52840 Plus）を搭載し、一部のモデルは NFC 機能も備えているため、デジタルサイネージ、電子棚札、ポータブルダッシュボードなど、省電力ディスプレイプロジェクトに最適です。

## XIAO ePaper Display Board EE02

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_ee02/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>EE02 Driver Board Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

**EE02** は、**13.3 インチ**電子ペーパーディスプレイ専用に設計された高性能 E-ink スクリーンドライバーボードです。ESP32-S3 チップを搭載し、Wi-Fi と Bluetooth 接続をサポートすることで、ワイヤレスディスプレイアプリケーションに最適なソリューションとなります。

### 特長

- **高性能コントローラ**：ESP32-S3 を中心に構成されており、強力な処理能力とワイヤレス機能を提供します。
- **大型スクリーン専用**：13.3 インチ E-ink ディスプレイの駆動に特化して最適化されており、高い安定性と視認性を実現します。
- **ワイヤレス接続**：Wi-Fi および Bluetooth 5.0（LE）をサポートし、リモートでのデータ更新やクラウド連携を可能にします。
- **低消費電力**：省エネルギー設計により、バッテリー駆動のアプリケーションに適しています。
- **容易な統合**：SenseCraft HMI と互換性があり、ドラッグ＆ドロップによるインターフェース設計やリモート管理が可能です。
- **多彩なインターフェース**：電源供給およびプログラミング用の Type-C と、E-ink スクリーン用の標準コネクタを備えています。

## XIAO ePaper Display Board EE03

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_ee03/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>EE03 Driver Board Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EE03" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

**XIAO ESP32-S3 Plus** を搭載した ePaper ドライバーボード EE03 は、**10.3 モノクロ ePaper ディスプレイ**をサポートします。電源スイッチ付き JST 2.0 mm バッテリーコネクタ、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンを搭載しています。デジタルフォトフレームやインフォメーションボードなど、低消費電力の ePaper プロジェクトに適しています。

### 特長

- **XIAO ESP32-S3 Plus 内蔵：** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **10.3 インチモノクロ ePaper ディスプレイ専用サポート：** 10.3 インチ高速リフレッシュ ePaper ディスプレイ向けに特別設計されており、迅速なセットアップと安定した動作を実現します。
- **高速リフレッシュ対応：** 統合された T-CON タイミング制御により、高速駆動を正確に行い、オンボードの SHT40 が波形補償のためのリアルタイム温度センシングを提供します。
- **スイッチ付き BAT コネクタ：** シンプルなバッテリー接続を提供し、スイッチを統合することで、効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン：** 1 つのリセットボタンと 3 つのユーザープログラマブルボタンを備え、プロジェクトの迅速な展開や機能のカスタマイズに柔軟性を提供します。

## XIAO ePaper Display Board EE04

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/epaper_ee04/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>EE04 Driver Board Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

**XIAO ESP32-S3** Plus を搭載したディスプレイボード EE04 は、**24 ピン**および **50 ピン**の両方の ePaper ディスプレイをサポートします。電源スイッチ付き JST 2.0 mm バッテリーコネクタ、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンを搭載しています。デジタルサイネージ、電子ラベル、ポータブルインフォメーションボードなど、低消費電力の ePaper プロジェクトに適しています。

### 特長

- **XIAO ESP32-S3 Plus 搭載：** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **多用途なディスプレイサポート：** 幅広い ePaper スクリーンと互換性があり、24 ピンおよび 50 ピンインターフェースの両方をサポートし、ジャンパキャップによる簡単な切り替えが可能です。
- **スイッチ付き BAT コネクタ：** シンプルなバッテリー接続を提供し、スイッチを統合することで、効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン：** 1 つのリセットボタンと 3 つのユーザープログラマブルボタンを備え、プロジェクトの迅速な展開や機能のカスタマイズに柔軟性を提供します。

## XIAO ePaper Display Board EN04

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/epaper_EN04/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>EN04 Driver Board Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

**XIAO nRF52840** Plus を搭載したディスプレイボード EN04 は、**24 ピン**および **50 ピン**の両方の ePaper ディスプレイをサポートします。電源スイッチ付き JST 2.0 mm バッテリーコネクタ、内蔵充電 IC、NFC 機能を備え、1 つのリセットボタンと 3 つのユーザーボタンを搭載しています。デジタルサイネージ、電子ラベル、ポータブルインフォメーションボードなど、低消費電力の ePaper プロジェクトに適しています。

### 特長

- **XIAO nRF52840 Plus 搭載：** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **多用途なディスプレイサポート：** 幅広い ePaper スクリーンと互換性があり、24 ピンおよび 50 ピンインターフェースの両方をサポートし、ジャンパキャップによる簡単な切り替えが可能です。
- **スイッチ付き BAT コネクタ：** シンプルなバッテリー接続を提供し、スイッチを統合することで、効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン：** 1 つのリセットボタンと 3 つのユーザープログラマブルボタンを備え、プロジェクトの迅速な展開や機能のカスタマイズに柔軟性を提供します。

## アプリケーション

reTerminal E シリーズ ePaper ディスプレイは、複数の開発プラットフォームおよびフレームワークをサポートしています：

- [EE04 Driver Board works with platformio](https://wiki.seeedstudio.com/ja/ee04_with_platformio/)

  PlatformIO を使って EN04 を接続し、使い始める方法を説明します。

- [EE04 Driver Board works with ESPHome in Home Assistant](https://wiki.seeedstudio.com/ja/EE04_with_esphome_advanced/)

  EN04 を Home Assistant に接続し、YAML を介して ESPHome で簡単なグラフを描画するシンプルなプログラムを書く方法を説明します。

- [EE04 Driver Board works with TRMNL](https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl/)

  専用の TRMNL フレームワークを活用して、開発の簡素化と迅速なデプロイを実現します。（TRMNL は主に reTerminal E シリーズと XIAO 7.5 インチパネルを対象としており、EE04 を直接対象としているわけではありません — 対応ハードウェアについては統合ガイドを参照してください。）
