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

Nordic SemiconductorのnRF54L15は、モノのインターネット向けに設計された次世代の超低消費電力ワイヤレスSoCです。Matter、Thread、Zigbee、Bluetooth LE、NFCなど複数のプロトコルをサポートし、開発者が相互運用可能で将来性のあるスマートホームデバイスを構築できるようにします。

Connectivity Standards Alliance（CSA）が推進する統一接続標準としてMatterが台頭する中、nRF54L15はMatterアプリケーションを探索・検証するための堅牢な開発プラットフォームを提供します。高性能、低消費電力、統合マルチプロトコル無線により、コンシューマー向けスマートホーム製品と産業用IoTデバイスの両方に適しています。

このドキュメントでは、nRF54L15用Nordic SDKで利用可能なMatterサンプルアプリケーションについて説明します。これらのサンプルは、デバイスオンボーディング、セキュア通信、Apple HomeKit、Google Home、Amazon Alexaなどの一般的なエコシステムとの相互作用などの主要機能を実演します。


## 前提条件

XIAO nRF54L15でMatterアプリケーションの開発を始めるには、以下のハードウェアとソフトウェアコンポーネントが準備され、使用可能な状態であることを確認してください。

### ハードウェア

- Seeed Studio XIAO nRF54L15ボード。
- サポートされているMatter Hub（例：[Amazon - Echo Dot](https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?th=1)）でMatterネットワークに接続。
- Matter Controller（例：Amazon Alexa App）でMatter対応デバイスを管理・操作

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ソフトウェア

:::tip
サンプルを実行する前に、XIAO nRF54L15がnRF Connect SDKで設定されていることを確認してください。まだ完了していない場合は、この[Wiki](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。
:::

## Matterサンプルのクイックスタート

### Matterルーチンの作成
VSCodeのnRF Connect拡張機能で、Create New Application → Copy Example → "matter"を入力 → Matter Thermostatを選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter_54l15.png" style={{width:900, height:'auto'}}/></div>


プログラムされると、サンプルは自動的にBluetooth® LEアドバタイジングを開始し、Matter対応Threadネットワークへのコミッショニング用にMatterデバイスを準備します。サンプルはLEDを使用して接続状態を表示します。

サンプルは以下のモードのいずれかで動作できます：

- シミュレート温度センサーモード - このモードでは、サーモスタットサンプルがシミュレートされた温度測定値を生成し、ターミナルに出力します。これはデフォルトモードで、サンプルがシミュレートされた温度値を提供します。**（ここではデフォルトでこれを使用）**

- 実温度センサーモード - このモードでは、サーモスタットサンプルがリモートMatter温度センサーにバインドされ、実際の温度測定値を提供します。このモードには外部センサー統合が必要です。



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:1000, height:'auto'}}/></div>
<br></br>
:::tip
- SDKバージョンは3.0.2である必要があることにご注意ください。これより低いバージョンではエラーが発生する可能性があります。

- 現在、2つのルーチンのみがサポートされています（Matter ThermostatとMatter Light Bulb）。追加のルーチンは今後段階的に追加される予定です。
:::

### 開発ボードの設定

boardディレクトリの下に以下の2つのファイルを作成し、それぞれ次のように命名します

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/xiao_nrf54l15_nrf54l15_cpuapp.overlay)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/3.png" style={{width:600, height:'auto'}}/></div>

`sysbuild/mcuboot/boards`ディレクトリに移動し、以下の2つのファイルを追加します：

- [xiao_nrf54l15_nrf54l15_cpuapp.conf](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.conf)
- [xiao_nrf54l15_nrf54l15_cpuapp.overlay](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/mcuboot/xiao_nrf54l15_nrf54l15_cpuapp.overlay)



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/4.png" style={{width:600, height:'auto'}}/></div>

### パーティションとDFUの有効化
- [pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/pm_static_xiao_nrf54l15_nrf54l15_cpuapp.yml)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/5.png" style={{width:600, height:'auto'}}/></div>

### プロジェクトのビルド
- Add Build Configurationウィンドウを開きます。
- SDKフィールドで、必要なバージョン（例：nRF Connect SDK v3.0.2）を選択します。
- Toolchainフィールドで、対応するバージョンを選択します。
- Board target：`xiao_nrf54l15/nrf54l15/cpuapp`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/16.png" style={{width:600, height:'auto'}}/></div>


### West Flashプログラムの書き込み
- nRFターミナルを開きます
- west flashコマンドを入力するだけです。デバイスにフラッシュするには、west flashコマンドを入力するだけです。赤でハイライトされたパスは、コンパイルされた.elfファイルの場所を示しています。この同じパスを使用して対応する.hexファイルを見つけることができ、これはJ-Linkデバッガーでのプログラミングに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/30.png" style={{width:900, height:'auto'}}/></div>


### Matterデバイスの追加
ファームウェアをコンパイルしてXIAO nRF54L15にフラッシュした後、nRF Serial Terminalツールを使用してデバッグログを表示し、デバイスコミッショニングQRコードを取得できます。

**ステップ1.** Manager Toolchainsを開き、Terminal Toolsを起動します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/10.png" style={{width:900, height:'auto'}}/></div>

**ステップ2.** サイドバーツールバーで、nRF Serial Terminalを選択してシリアルポートにアクセスします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/11.png" style={{width:900, height:'auto'}}/></div>

**ステップ3.** ポップアップメニューから、XIAO nRF54L15に対応するシリアルポートを選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/12.png" style={{width:900, height:'auto'}}/></div>

**ステップ4.** ターミナルが開くと、ログにコミッショニングQRコードリンクが印刷されているのが見えます。このリンクをコピーしてブラウザで開き、MatterデバイスQRコードを生成します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/13.png" style={{width:900, height:'auto'}}/></div>

**ステップ5.** このQRコードをMatter対応プラットフォームでスキャンして、デバイスを追加します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>


## Matter Hubの設定

### Alexa Appのダウンロード
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/app.png" style={{width:900, height:'auto'}}/></div>

### Alexa AppでMatterデバイスを追加

- Homeに移動：Alexa Appを開き、右上角の「+」ボタンをタップします。
- Add Device：メニューから「Device」を選択します。
- Choose Device Type：デバイスリストで「Matter」を選択します。
- Scan QR Code：Matter設定画面で「Scan QR Code」をタップし、デバイスのQRコードをスキャンします（または代わりに数字コードを入力することもできます）。
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter7.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter9.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/matter8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

- Rename Device：設定後、デバイスに「Thermostat」などの名前を付け、Update Nameをタップします。
- Device Appears in List：追加されると、Devicesリストに新しいThermostatが表示されます。
- Control Device：Thermostatコントロールページを開いて温度を調整し（例：Cool to 79°F、Heat to 68°F）、モードを設定します（例：Auto）。

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
  - Matterサーモスタットアプリケーションのクラスターと属性設定を定義するZAP設定ファイル。
- zap-generated/
  - .zap設定に基づいてZAPツールから自動生成されたソースファイル。


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
  - Matter属性（例：現在温度、設定点）とのインターフェース。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code3.png" style={{width:900, height:'auto'}}/></div>


### アプリケーション層

- `app_task.cpp` / `app_task.h`
  - メインアプリケーションタスクループを定義。
  - 初期化、イベント処理、Matterスタックとの通信を調整。
- main.cpp
  - アプリケーションのエントリーポイント。
  - ハードウェア、Matterスタックを初期化し、アプリケーションタスクを開始。
  - chip_project_config.h
  - Matterスタック用のプロジェクト固有設定。
  - クラスター定義、属性ストレージサイズ、機能トグルを含む。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code2.png" style={{width:900, height:'auto'}}/></div>

### Matter統合

- `thermostat.matter`
  - サーモスタット用のクラスター、属性、エンドポイントを記述するMatterデバイス定義ファイル。
- `zcl_callbacks.cpp`
  - Zigbee Cluster Library（ZCL）のコールバック関数を実装。
  - 属性変更、コマンド（例：設定点更新）、レポートを処理。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/code5.png" style={{width:900, height:'auto'}}/></div>

## 参考資料とリソース

Matterが初めての方は、以下のリソースがMatterエコシステム内での作業に必要な基礎知識と開発サポートを提供します：

- **[Quick-Start Guides](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：Matterの基礎を学ぶのに理想的な出発点で、エコシステムの重要な概念とコンポーネントをカバーしています。
- **[Matter Developer Journey](https://www.silabs.com/wireless/matter/matter-developer-journey)**：効果的な実装に必要なツール、リソース、ベストプラクティスを含む、Matter開発プロセスの包括的なガイド。
- **[Matter Specifications](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matterプロトコルとそのコンポーネントの技術仕様。プロトコルの機能と動作詳細を理解するための主要リソースです。
- **[The Device Data Model - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：Matterエコシステムでデバイスの機能と能力がどのように表現されるかを標準化するデバイスデータモデルの詳細な説明。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
