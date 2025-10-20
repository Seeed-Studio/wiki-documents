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

Nordic Semiconductor の nRF54L15 は、モノのインターネット向けに設計された次世代の超低消費電力ワイヤレス SoC です。Matter、Thread、Zigbee、Bluetooth LE、NFC を含む複数のプロトコルをサポートし、開発者が相互運用可能で将来性のあるスマートホームデバイスを構築できるようにします。

Connectivity Standards Alliance（CSA）によって推進される統一接続標準として Matter が台頭する中、nRF54L15 は Matter アプリケーションを探索し検証するための堅牢な開発プラットフォームを提供します。その高性能、低消費電力、統合マルチプロトコル無線により、コンシューマー向けスマートホーム製品と産業用 IoT デバイスの両方に適しています。

このドキュメントでは、nRF54L15 用の Nordic SDK で利用可能な Matter サンプルアプリケーションについて説明します。これらのサンプルは、デバイスのオンボーディング、セキュア通信、Apple HomeKit、Google Home、Amazon Alexa などの一般的なエコシステムとの相互作用などの主要機能を実演します。


## 前提条件

XIAO nRF54L15 で Matter アプリケーションの開発を始めるには、以下のハードウェアとソフトウェアコンポーネントが準備され、使用可能な状態であることを確認してください。

### ハードウェア

- Seeed Studio XIAO nRF54L15 ボード。
- サポートされている Matter ハブ（例：[Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)）で Matter ネットワークに接続。
- Matter コントローラー（例：Amazon Alexa App）で Matter 対応デバイスを管理し、相互作用する

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

:::tip
サンプルを実行する前に、XIAO nRF54L15 が nRF Connect SDK で設定されていることを確認してください。完了していない場合は、この [Wiki](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/) ガイドを参照してください。
:::

## Matter サンプルのクイックスタート

### Matter ルーチンの作成
VSCode の nRF Connect 拡張機能で、次を選択します：Create New Application → Copy Example → "matter" を入力 → Matter Thermostat を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


プログラムされると、サンプルは自動的に Bluetooth® LE アドバタイジングを開始し、Matter 対応 Thread ネットワークへのコミッショニングのために Matter デバイスを準備します。サンプルは LED を使用して接続状態を表示します。

サンプルは以下のモードのいずれかで動作できます：

- シミュレートされた温度センサーモード - このモードでは、サーモスタットサンプルはシミュレートされた温度測定値を生成し、ターミナルに出力します。これはデフォルトモードで、サンプルはシミュレートされた温度値を提供します。**（ここではデフォルトでこれを使用します）**

- 実際の温度センサーモード - このモードでは、サーモスタットサンプルはリモート Matter 温度センサーにバインドされ、実際の温度測定値を提供します。このモードには外部センサーの統合が必要です。



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- SDK バージョンは 3.0.2 である必要があることに注意してください。これより低いバージョンではエラーが発生する可能性があります。

- 現在、2つのルーチンのみがサポートされています（Matter Thermostat と Matter Light Bulb）。追加のルーチンは将来段階的に追加される予定です。
:::

### 開発ボードの設定

board ディレクトリの下に以下の2つのファイルを作成し、それぞれ次のように名前を付けます

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

`sysbuild/mcuboot/boards` ディレクトリに移動し、以下の2つのファイルを追加します：

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

### パーティションと DFU の有効化
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>


### Sysbuild 設定

- [sysbuild.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/sysbuild.conf)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/00000.png" style={{width:600, height:'auto'}}/></div>


### プロジェクトのビルド
- Add Build Configuration ウィンドウを開きます。
- SDK フィールドで、必要なバージョン（例：nRF Connect SDK v3.0.2）を選択します。
- Toolchain フィールドで、対応するバージョンを選択します。
- Board target：`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flash プログラムの書き込み
- nRF ターミナルを開きます
- west flash コマンドを入力するだけです。デバイスにフラッシュするには、単に west flash コマンドを入力します。赤でハイライトされたパスは、コンパイルされた .elf ファイルの場所を示しています。この同じパスを使用して対応する .hex ファイルを見つけることができ、これは J-Link デバッガーでのプログラミングに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Matter デバイスの追加
ファームウェアをコンパイルして XIAO nRF54L15 にフラッシュした後、nRF Serial Terminal ツールを使用してデバッグログを表示し、デバイスコミッショニング QR コードを取得できます。

**ステップ 1.** Manager Toolchains を開き、Terminal Tools を起動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**ステップ 2.** サイドバーツールバーで、nRF Serial Terminal を選択してシリアルポートにアクセスします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**ステップ 3.** ポップアップメニューから、XIAO nRF54L15 に対応するシリアルポートを選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** ターミナルが開くと、ログにコミッショニング QR コードリンクが印刷されているのが見えます。このリンクをコピーしてブラウザで開き、Matter デバイス QR コードを生成します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** この QR コードを Matter 対応プラットフォームでスキャンして、デバイスを追加します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Matter ハブの設定

### Alexa App のダウンロード
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Alexa App での Matter デバイスの追加

- Home に移動：Alexa App を開き、右上角の "+" ボタンをタップします。
- Device を追加：メニューから "Device" を選択します。
- デバイスタイプを選択：デバイスリストで "Matter" を選択します。
- QR コードをスキャン：Matter セットアップ画面で "Scan QR Code" をタップし、デバイスの QR コードをスキャンします（または代わりに数字コードを入力することもできます）。
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- デバイス名の変更：セットアップ後、デバイスに「Thermostat」などの名前を付け、Update Name をタップします。
- デバイスがリストに表示：追加されると、デバイスリストに新しい Thermostat が表示されます。
- デバイスの制御：Thermostat 制御ページを開いて温度を調整し（例：Cool を 79°F、Heat を 68°F に設定）、モード（例：Auto）を設定します。

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
  - Matter サーモスタットアプリケーションのクラスターと属性設定を定義する ZAP 設定ファイル。
- zap-generated/
  - .zap 設定に基づいて ZAP ツールから自動生成されたソースファイル。


### temperature_measurement/

- `sensor.cpp` / `sensor.h`
  - 温度センサーの低レベルドライバー抽象化。
  - 生の温度値の読み取りを処理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code1.png" style={{width:900, height:'auto'}}/></div>


- `temp_sensor_manager.cpp` / `temp_sensor_manager.h`
  - センサーデータ収集を管理。
  - 上位レベルコンポーネント用に処理された温度値を提供。
  - temperature_manager.cpp / temperature_manager.h
  - 温度制御ロジックを監督。
  - Matter 属性（例：現在温度、設定点）とのインターフェース。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### アプリケーション層

- `app_task.cpp` / `app_task.h`
  - メインアプリケーションタスクループを定義。
  - 初期化、イベント処理、Matter スタックとの通信を調整。
- main.cpp
  - アプリケーションのエントリーポイント。
  - ハードウェア、Matter スタックを初期化し、アプリケーションタスクを開始。
  - chip_project_config.h
  - Matter スタック用のプロジェクト固有設定。
  - クラスター定義、属性ストレージサイズ、機能トグルを含む。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Matter 統合

- `thermostat.matter`
  - サーモスタット用のクラスター、属性、エンドポイントを記述する Matter デバイス定義ファイル。
- `zcl_callbacks.cpp`
  - Zigbee Cluster Library（ZCL）のコールバック関数を実装。
  - 属性変更、コマンド（例：設定点更新）、レポートを処理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## 参考資料とリソース

Matter が初めての方は、以下のリソースが Matter エコシステム内での作業に必要な基礎知識と開発サポートを提供します：

- **[クイックスタートガイド](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：Matter の基礎を学ぶのに理想的な出発点で、エコシステムの重要な概念とコンポーネントをカバーしています。
- **[Matter 開発者ジャーニー](https://www.silabs.com/wireless/matter/matter-developer-journey)**：効果的な実装に必要なツール、リソース、ベストプラクティスを含む、Matter 開発プロセスの包括的なガイド。
- **[Matter 仕様](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matter プロトコルとそのコンポーネントの技術仕様。プロトコルの機能と動作詳細を理解するための主要リソースです。
- **[デバイスデータモデル - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：Matter エコシステムでデバイスの機能と能力がどのように表現されるかを標準化するデバイスデータモデルの詳細な説明。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
