---
title: Seeed Studio XIAO nRF54L15 Matter
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /ja/xiao_nrf54l15_sense_matter
keywords:
  - XIAO
  - nRF54L15
  - Matter
last_update:
  date: 9/22/2025
  author: Jason
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';


## はじめに

Nordic Semiconductor の nRF54L15 は、IoT 向けに設計された次世代の超低消費電力ワイヤレス SoC です。Matter、Thread、Zigbee、Bluetooth LE、NFC など複数のプロトコルをサポートしており、相互運用性が高く将来性のあるスマートホームデバイスを開発できます。

Connectivity Standards Alliance（CSA）が推進する統一接続規格として Matter が普及する中、nRF54L15 は Matter アプリケーションの検証と開発を行うための堅牢な開発プラットフォームを提供します。高い性能と低消費電力、統合されたマルチプロトコル無線により、コンシューマ向けスマートホーム製品だけでなく、産業用 IoT デバイスにも適しています。

本ドキュメントでは、nRF54L15 向け Nordic SDK に含まれる Matter サンプルアプリケーションを順に解説します。これらのサンプルは、デバイスのオンボーディング、セキュアな通信、Apple HomeKit、Google Home、Amazon Alexa など一般的なエコシステムとの連携といった主要機能を実演します。


## 前提条件

XIAO nRF54L15 上で Matter アプリケーションの開発を始める前に、以下のハードウェアおよびソフトウェアコンポーネントが準備済みであることを確認してください。

### ハードウェア

- Seeed Studio XIAO nRF54L15 ボード
- Matter ネットワークに接続するための対応 Matter Hub（例：[Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)）
- Matter 対応デバイスを管理・操作するための Matter Controller（例：Amazon Alexa App）

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

:::tip
サンプルを実行する前に、XIAO nRF54L15 が nRF Connect SDK で設定済みであることを確認してください。まだの場合は、この[Wiki](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。
:::

## Matter サンプルのクイックスタート

### Matter ルーチンを作成する
VSCode 用 nRF Connect 拡張機能で、Create New Application → Copy Example → 「matter」と入力 → Matter Thermostat を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


書き込みが完了すると、サンプルは自動的に Bluetooth® LE アドバタイジングを開始し、Matter 対応 Thread ネットワークへのコミッショニングの準備を行います。サンプルは LED を使用して接続状態を表示します。

このサンプルは次のいずれかのモードで動作します。

- 温度センサーシミュレーションモード - このモードでは、サーモスタットサンプルがシミュレートされた温度測定値を生成し、ターミナルに出力します。これはデフォルトモードであり、サンプルはシミュレートされた温度値を提供します。**（ここではデフォルトでこのモードを使用します）**

- 実温度センサーモード - このモードでは、サーモスタットサンプルがリモートの Matter 温度センサーにバインドされ、実際の温度測定値を取得します。このモードでは外部センサーとの統合が必要です。



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- SDK バージョンは必ず 3.0.2 を使用してください。これより古いバージョンではエラーが発生する可能性があります。

- 現在サポートされているルーチンは 2 種類のみです（Matter Thermostat と Matter Light Bulb）。今後、順次ルーチンが追加される予定です。
:::

### 開発ボードの設定

ボードディレクトリ内に次の 2 つのファイルを作成し、それぞれ以下の名前を付けます。

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

`sysbuild/mcuboot/boards` ディレクトリに移動し、次の 2 つのファイルを追加します。

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

### パーティションと DFU を有効化
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>


### Sysbuild 設定

- [sysbuild.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/sysbuild.conf)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/00000.png" style={{width:600, height:'auto'}}/></div>


### プロジェクトのビルド
- Add Build Configuration ウィンドウを開きます。
- SDK フィールドで、必要なバージョンを選択します（例：nRF Connect SDK v3.0.2）。
- Toolchain フィールドで、対応するバージョンを選択します。
- Board target：`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West でのフラッシュ書き込み
- nRF terminal を開きます。
- `west flash` コマンドを入力するだけでデバイスに書き込めます。赤枠で示されているパスは、コンパイルされた .elf ファイルの場所を表しています。同じパスを使用して、J-Link デバッガでの書き込みに適した対応する .hex ファイルを見つけることもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Matter デバイスを追加する
ファームウェアを XIAO nRF54L15 にビルドして書き込んだら、nRF Serial Terminal ツールを使用してデバッグログを確認し、デバイスコミッショニング用の QR コードを取得できます。

**ステップ 1.** Manager Toolchains を開き、Terminal Tools を起動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**ステップ 2.** サイドバーのツールバーから nRF Serial Terminal を選択し、シリアルポートにアクセスします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**ステップ 3.** ポップアップメニューから、XIAO nRF54L15 に対応するシリアルポートを選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** ターミナルが開くと、ログにコミッショニング用 QR コードリンクが出力されます。このリンクをコピーしてブラウザで開き、Matter デバイスの QR コードを生成します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** Matter 対応プラットフォームでこの QR コードをスキャンし、デバイスを追加します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Matter Hub の設定

### Alexa App をダウンロード
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Alexa App で Matter デバイスを追加する

- Home へ移動：Alexa App を開き、右上の “+” ボタンをタップします。
- Add Device：メニューから “Device” を選択します。
- デバイスタイプを選択：デバイス一覧から “Matter” を選択します。
- QR コードをスキャン：Matter セットアップ画面で “Scan QR Code” をタップし、デバイス上の QR コードをスキャンします（または数値コードを入力することもできます）。
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- デバイス名の変更：セットアップ後にデバイスに「Thermostat」などの名前を付け、Update Name をタップします。
- デバイスがリストに表示される：追加が完了すると、Devices リストに新しい Thermostat が表示されます。
- デバイスの操作：Thermostat のコントロールページを開き、温度（例：Cool to 79°F、Heat to 68°F）やモード（例：Auto）を調整します。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/15.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>


## プロジェクトディレクトリ概要

### default_zap/
- thermostat.zap
  - Matter サーモスタットアプリケーションのクラスタおよび属性設定を定義する ZAP 設定ファイル。
- zap-generated/
  - .zap 設定に基づき ZAP ツールから自動生成されたソースファイル。


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - 温度センサー向けの低レベルドライバ抽象化。
  - 生の温度値の読み取りを処理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - センサーデータ収集を管理します。
  - 上位コンポーネント向けに処理済みの温度値を提供します。
  - temperature_manager.cpp / temperature_manager.h
  - 温度制御ロジックを統括します。
  - Matter 属性（例：現在温度、設定温度）とのインターフェースを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### アプリケーションレイヤ

- `app_task.cpp` / `app_task.h`
  - メインアプリケーションタスクループを定義します。
  - 初期化、イベント処理、および Matter スタックとの通信を調整します。
- main.cpp
  - アプリケーションのエントリポイント。
  - ハードウェア、Matter スタックを初期化し、アプリケーションタスクを開始します。
  - chip_project_config.h
  - Matter スタック向けのプロジェクト固有設定。
  - クラスタ定義、属性ストレージサイズ、機能トグルを含みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Matter 統合

- `thermostat.matter`
  - サーモスタット向けにクラスタ、属性、エンドポイントを記述する Matter デバイス定義ファイル。
- `zcl_callbacks.cpp`
  - Zigbee Cluster Library（ZCL）のコールバック関数を実装します。
  - 属性変更、コマンド（例：設定温度の更新）、レポーティングを処理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## 参考資料 & リソース

Matter が初めての場合は、以下のリソースが Matter エコシステム内で作業するための基礎知識と開発サポートを提供します。

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：Matter の基本概念とエコシステムの主要コンポーネントをカバーする、Matter の基礎を学ぶための理想的な出発点です。
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**：必要なツール、リソース、ベストプラクティスを含む、Matter 開発プロセス全体を通した包括的なガイドです。
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter プロトコルおよびそのコンポーネントに関する技術仕様です。プロトコルの機能と動作の詳細を理解するための主要なリソースです。
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：Matter エコシステム内でデバイスの機能と能力の表現を標準化するデバイスデータモデルについての詳細な解説です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
