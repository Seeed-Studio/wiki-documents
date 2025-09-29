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
- Seeed Studio XIAO nRF54L15ボード
- Matterハブのサポート（例：Echo Dot）

### ソフトウェア

:::tip
サンプルを実行する前に、XIAO nRF54L15がnRF Connect SDKで設定されていることを確認してください。完了していない場合は、この[Wiki](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。
:::

## Matterサンプルのクイックスタート

### Matterルーチンの作成
VSCode用nRF Connect拡張機能で、次を選択します：Create New Application → Copy Example → 「matter」を入力 → Matter Thermostatを選択
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/1.png" style={{width:900, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/2.png" style={{width:900, height:'auto'}}/></div>
:::tip
- SDKバージョンは3.0.2である必要があります。これより低いバージョンではエラーが発生する可能性があります。

- 現在、2つのルーチンのみがサポートされています。追加のルーチンは今後段階的に追加される予定です。
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

**ステップ5.** Matter対応プラットフォームでこのQRコードをスキャンして、デバイスを追加します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Matter/14.png" style={{width:900, height:'auto'}}/></div>

## 参考資料とリソース

Matterが初めての場合、以下のリソースはMatterエコシステム内での作業に必要な基礎知識と開発サポートを提供します：

- **[クイックスタートガイド](https://docs.silabs.com/matter/2.2.0/matter-fundamentals/)**：Matterの基礎を学ぶのに理想的な出発点で、エコシステムの重要な概念とコンポーネントをカバーしています。
- **[Matter開発者ジャーニー](https://www.silabs.com/wireless/matter/matter-developer-journey)**：Matter開発プロセスの包括的なガイドで、効果的な実装に必要なツール、リソース、ベストプラクティスを含んでいます。
- **[Matter仕様](https://csa-iot.org/developer-resource/specifications-download-request/)**：Matterプロトコルとそのコンポーネントの技術仕様。これはプロトコルの機能と動作の詳細を理解するための主要なリソースです。
- **[デバイスデータモデル - Google Home Developers](https://developers.home.google.com/matter/primer/device-data-model)**：デバイスデータモデルの詳細な説明で、Matterエコシステムでデバイスの機能と能力がどのように表現されるかを標準化しています。
- **[Matter開発フレームワーク概要](/ja/matter_development_framework)**：XIAO ESP32C6用Matter開発フレームワークに特化したガイドで、Matterデバイス開発の代替アプローチを提供します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
