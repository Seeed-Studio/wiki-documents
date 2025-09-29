---
description: この記事では、reTerminal E1002を素早く始めるためのガイドを提供します。
title: reTerminal E1002の使用開始
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1002の使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

:::caution ファームウェア更新のヒント
最高の体験のために、製品を受け取ったらすぐに**[製品のファームウェア更新を完了する](#preliminary)**ことをお勧めします。
:::

:::danger 画面寿命の警告
1. reTerminalが長時間アイドル状態の場合、デバイスの緑色ボタンを5秒間長押しして画面内容をクリアできます（工場出荷時ファームウェアを使用）。これにより残像を効果的に防ぎ、画面寿命を延ばすことができます。

2. 可能な限り、長時間（1日以上）同じ画面を表示し続けないでください。残像が発生する可能性があるため、少なくとも1日に1回は画面の画像を更新することをお勧めします。デバイスを長時間使用しない場合は、デバイスの表示内容をクリアすることをお勧めします。

3. プログラムの使用とデバッグ時は、可能な限り画面の更新頻度を抑えてください。長時間高速で画面を更新し続けると、画面の寿命が短くなる可能性があります。
:::

## 概要

reTerminal E1002は、7.3インチのオープンソースフルカラーePaperディスプレイで、優れた3ヶ月のバッテリー寿命を実現しています。ESP32-S3を搭載し、簡単なダッシュボード作成のためのSenseCraft HMIノーコードUIプラットフォームをネイティブサポートし、さらなる開発のためにHome Assistant、TRMNL E-inkダッシュボード、Arduino、ESP-IDFをサポートしています。E Ink® Spectra™ 6フルカラーePaperディスプレイにより、デジタルフレームやカラフルなダッシュボード可視化に最適です。

### 特徴

- **美しい、すぐに使えるE Ink® Spectra™6カラーePaperディスプレイ**
- **3ヶ月のバッテリー寿命を実現する超低消費電力**
- **SenseCraft HMIによるノーコードUI設計・デプロイメント**
- **人気のソフトウェアプラットフォームとの連携**
- **柔軟なハードウェア・ソフトウェアカスタマイゼーション**

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1002のハードウェアには以下が含まれます：

1. **7.3インチフルカラーePaperディスプレイ**: 800×480解像度のフルカラーディスプレイ
2. **ボタン**: 手動画面操作用にデバイス上部に配置
3. **マイクロフォン**
4. **MicroSDカードスロット**: 拡張可能なストレージ用
5. **電源スイッチ**: デバイスのオン/オフ用に背面に配置
6. **ステータスLED**: ユーザーインジケーター（緑色）
7. **電源LED**: 充電インジケーター（赤色）
8. **USB-Cポート**: 充電とファームウェア更新用
9. **拡張ポート**: VDD、GND、I2C、GPIO接続を提供する8ピン拡張ヘッダー

## はじめに

### 準備

**ステップ 1.** reTerminal E1002 を開梱し、すべてのコンポーネントが含まれていることを確認してください：
- reTerminal E1002 デバイス
- USB-C ケーブル
- クイックスタートガイド

**ステップ 2.** （オプション）デバイスをデジタルフォトフレームとして使用する予定がある場合や、追加のストレージが必要な場合は、microSD カードを挿入してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズ ePaper ディスプレイは、Fat32 フォーマットの最大 64GB までの MicroSD カードのみをサポートしています。
:::

**ステップ 3.** （オプション）必要に応じて USB ドライバをインストールしてください：

お使いのオペレーティングシステムによっては、reTerminal E1002 との適切な通信を確保するために USB ドライバをインストールする必要がある場合があります：

- **Mac コンピュータの場合**：[WCH 公式ウェブサイト](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)から CH34X ドライバをダウンロードしてインストールしてください

- **Windows コンピュータの場合**：
  - Windows 11 システムは通常、デフォルトでドライバが含まれています
  - Windows 10 以前のバージョンでは、[WCH 公式ウェブサイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)から CH341 ドライバをダウンロードしてインストールする必要がある場合があります

- **Linux システムの場合**：最新の Linux ディストリビューションのほとんどは、デフォルトで必要なドライバが含まれています

**ステップ 4.** デバイスが最新バージョンを実行していることを確認するために、ファームウェアを更新してください：

1. USB-C ケーブルを使用して reTerminal E1002 をコンピュータに接続します

2. 背面の電源スイッチを使用してデバイスの電源を入れます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** にアクセスし、アカウントにサインインします

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. **Workspace** セクションに移動します

5. 右上角の **Device Flasher** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. リストから reTerminal E1002 デバイスを選択します。このチュートリアルに従って、**reTerminal E1002 7.3" Full Color Display** を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. ドロップダウンメニューから最新のファームウェアバージョンを選択します

8. **Flash** をクリックし、更新プロセスが完了するまで待ちます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
1. ファームウェアの更新により、最適なパフォーマンスと最新機能へのアクセスが確保されます。デバイスを初めて使用する前にこの更新を実行することをお勧めします。

2. デバイスがシャットダウンまたはスリープ状態の場合、ファームウェアを適切にフラッシュすることはできません。デバイスの正しいポートを選択してもファームウェアフラッシュの進行状況が表示されない場合は、ユニット上部の緑色のボタンを押してデバイスを起動し、再試行する必要があります。
:::

### 電源オン

**ステップ 1.** 電源スイッチを **ON** の位置にスライドしてデバイスの電源を入れます。電源スイッチはユニットの背面にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**ステップ 2.** 初回起動時、デバイスは製品情報とネットワーク設定の手順を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**ステップ 3.** 緑色のユーザー LED が約 30 秒間点灯し、デバイスが電源オンで初期化中であることを示します。デバイスを 30 秒間操作しないと、電力を確保するため、デバイスは自動的にスリープモードに入り、LED ライトは自動的に消灯します。

:::tip
そのため、この時間内にネットワーク設定の次のステップを完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。この場合、デバイスの緑色の Wake ボタンを一度クリックしてデバイスを起動できます。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup vis PC" label="Network Setup vis PC" default>

**ステップ 1.** スマートフォンまたはコンピュータからデバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワードは不要）。ネットワーク認証情報は `reTerminal E1002-{MAC Adress}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 2.** 接続すると、お使いの電話は自動的に Wi-Fi 設定ページにリダイレクトされるはずです。そうでない場合は、ブラウザを開いて `192.168.4.1` に移動してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ 3.** ローカル Wi-Fi ネットワークを選択してパスワードを入力し、「Connect」をクリックします。

:::note
reTerminal E シリーズ ePaper ディスプレイは 2.4GHz WiFi ネットワークのみをサポートし、5GHz やその他の帯域はサポートしていません。
:::

**ステップ 4.** 接続が成功すると、デバイスは確認音を発し、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**ステップ 1.** ウェブブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 2.** **Workspace** セクションに移動し、**Add Device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** デバイスに名前を付け、デバイスの画面に表示されているペアリングコードを入力し、**Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4.** ペアリングが完了すると、デバイスに最初のダッシュボードを作成するよう促すメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Network Setup vis SenseCraft APP">

この方法では、SenseCraft モバイルアプリを使用してデバイスのネットワークを設定し、Bluetooth 経由で SenseCraft アカウントに追加します。

まず、SenseCraft アプリをダウンロードします。Google Play ストアまたは Apple App Store で「SenseCraft」を検索して見つけることができます。または、このウェブサイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして、**User** タブに移動します。**Device Bluetooth Configuration** をタップしてプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 2.** 「Please select the device type」画面で、お使いの reTerminal モデル（例：**reTerminal E1001** または **reTerminal E1002**）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。これは通常、**Up** と **Down** ページボタンを同時に押すことで行われます。スマートフォンの Bluetooth が有効になっていることを確認してください。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストからお使いのデバイスを選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 4.** Bluetooth 経由で接続されると、アプリが Wi-Fi 接続の設定を促します。ドロップダウンリストからローカルの 2.4GHz Wi-Fi ネットワークを選択し、パスワードを入力して **Next** をタップします。

:::note
デバイスは 2.4G Wi-Fi ネットワーク経由でのみ設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5.** アプリが Wi-Fi 認証情報をデバイスに送信し、SenseCraft アカウントに追加します。完了すると「Device added successfully」メッセージが表示されます。**Start exploring!** をタップして続行できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 6.** reTerminal がアプリのメイン **Device** タブのデバイスリストに表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 7.** リスト内のデバイスをタップして **Device Detail** ページを表示できます。ここからデバイスを管理し、写真をアップロードできます。より複雑なダッシュボードとキャンバスの設計については、SenseCraft のウェブブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

## ダッシュボードの作成

reTerminal E1002は、デバイス用のコンテンツを作成およびカスタマイズするための強力なツールを提供するSenseCraft HMIプラットフォームとシームレスに統合されます。ここでステップバイステップの操作を詳しく説明する代わりに、プラットフォームの主要機能を探索して、何が可能かを理解していただきましょう。

### SenseCraft HMI機能

**AI Generator**

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を簡単に説明するだけで、AI Generatorが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でデザイン作業を行うことなく、天気表示、カレンダー、ToDoリスト、または情報パネルを素早く生成するのに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Gallery**

Gallery機能を使用して、reTerminal E1002をデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームがePaperディスプレイ用に最適化します。カスタム遷移時間でスライドショーを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

Canvasを使用してダッシュボードをゼロからデザインしましょう。これは様々な要素を提供するドラッグアンドドロップインターフェースです：
- カスタマイズ可能なフォントとサイズのテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気用のウィジェット
- データ可視化ツール
- レイアウト整理用の図形と区切り線

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**RSS Feed統合**

お気に入りのニュースソース、ブログ、またはウェブサイトのRSSフィードをダッシュボードに追加して、最新情報を入手しましょう。RSS機能により、複数のソースからヘッドライン、要約、または完全な記事を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**Webコンテンツ表示**

デバイス上で特定のWebコンテンツをキャプチャして表示します。Web機能は、ウェブサイトの選択された部分をレンダリングでき、交通スケジュール、株価ティッカー、またはその他のオンラインデータソースなどの情報を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### SenseCraft HMIの開始

前のセクションで説明したように、デバイスをSenseCraftプラットフォームとペアリングした後、最初のダッシュボードを作成する準備が整います。各機能の使用に関する詳細な手順については、対応するWikiページを参照してください：

- [SenseCraft HMI概要](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview)
- [AI Generatorガイド](https://wiki.seeedstudio.com/ja/sensecraft_hmi_ai_generation)
- [Gallery使用ガイド](https://wiki.seeedstudio.com/ja/sensecraft_hmi_gallery)
- [Canvasデザインツール](https://wiki.seeedstudio.com/ja/sensecraft_hmi_canvas)
- [RSS Feed設定](https://wiki.seeedstudio.com/ja/sensecraft_hmi_rss)
- [Webコンテンツ表示](https://wiki.seeedstudio.com/ja/sensecraft_hmi_web)

SenseCraftプラットフォームでダッシュボードを作成して保存したら、「Deploy to Device」をクリックし、ペアリングしたreTerminal E1002を選択するだけで、カスタムコンテンツがデバイスにワイヤレスで送信されます。ePaperディスプレイがダッシュボードを表示するように更新され、複数のページを作成した場合は、ナビゲーションボタンを使用してページを切り替えることができます。

## デバイスの操作

### リフレッシュボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

デバイス上部のリフレッシュボタンには複数の機能があります：

- **シングルプレス**：ディスプレイを手動でリフレッシュし、SenseCraftプラットフォームから新しいコンテンツをチェックします。ブザーが一度鳴ってアクションを確認します。このボタンはデバイスのウェイクアップにも一般的に使用されます。デバイスがスリープ状態になり、ダッシュボードのリフレッシュコマンドがすぐに利用できない場合に、このボタンを使用してデバイスをウェイクアップできます。

- **長押し**（将来の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

左右のボタンを使用して、ダッシュボードに複数のページが含まれている場合にページ間を移動できます：

- **左ボタン**：前のページに移動

- **右ボタン**：次のページに移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

異なるWi-Fiネットワークに接続する必要がある場合：

**ステップ1.** 両方のナビゲーションボタン（左と右）を同時に2秒間長押しします。

**ステップ2.** デバイスがWi-Fi設定モードに入り、[ネットワークセットアップ](#network-setup)の手順に従って新しいネットワークに接続できます。

### LEDインジケーター

- **赤色LED**：
  - オフ：完全に充電されているか、充電していない
  - 常時点灯：充電中

- **緑色LED**：
  - 起動時に30秒間点灯：デバイスが電源投入中

### バッテリー動作

バッテリー電源で動作する場合：

- デバイスはリフレッシュ間隔の間に自動的に低電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電から通常3ヶ月）

- バッテリーレベルが20%を下回ると、デバイスは右上角に低バッテリーアイコンを表示します

:::tip
バッテリー電圧を読み取るコードを自分で書く場合、analogRead()関数の前に10msの遅延を追加するとより正確になります。
:::

### 拡張ピン

reTerminal E1002は8ピン拡張ヘッダー（J2）を備えており、外部センサー、モジュール、またはその他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダーは複数のESP32-S3 GPIOピンと通信インターフェースを公開し、DIYプロジェクトの多用途な接続ポイントとなります。

#### 拡張ヘッダーピン配置

8ピン拡張ヘッダー（J2）のピン配置は以下の通りです：

<div class="table-center">
	<table align="center">
		<tr>
			<th>ピン（上から下へ）</th>
			<th>ラベル</th>
			<th>ESP32-S3ピン</th>
			<th>機能</th>
			<th>説明</th>
		</tr>
		<tr>
			<td>1</td>
			<td>HEADER_3V3</td>
			<td>-</td>
			<td>電源</td>
			<td>外部デバイス用3.3V電源供給</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>グランド</td>
			<td>共通グランド基準</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能付き汎用I/O</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能付き汎用I/O（ADC1チャンネル4）</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIOまたはUART送信（TX）信号</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIOまたはUART受信（RX）信号</td>
		</tr>
		<tr>
			<td>7</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIOまたはI2Cクロック信号</td>
		</tr>
		<tr>
			<td>8</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIOまたはI2Cデータ信号</td>
		</tr>
	</table>

</div>

## デバイス設置

reTerminal E1002には、デバイスを最適な視野角で直立させることができる3Dプリント製サポートスタンドアクセサリが付属しています：

**ステップ1.** パッケージに含まれている3Dプリント製サポートスタンドを見つけます。

**ステップ2.** reTerminal E1002の底面背面にある埋め込みナットが配置されている指定の取り付けエリアにサポートスタンドを位置合わせします。

**ステップ3.** 長いドライバーを使用して、reTerminal E1002の背面にある埋め込みナットにネジを締めることで、スタンドをデバイスに固定します。

**ステップ4.** しっかりと取り付けられたら、スタンドが直立位置でサポートできる平らな面にreTerminal E1002を設置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
スタンドは固定された視野角を提供し、調整することはできません。この固定位置は、ほとんどの使用シナリオで最適な視認性を提供するように設計されています。

スタンドにより、デバイスをデスク、カウンタートップ、または棚に設置することができ、様々な環境で情報ディスプレイ、コントロールパネル、またはデジタルフォトフレームとしての使用に最適です。
:::

## トラブルシューティング

### Q1: デバイスが電源オンしない

- 電源スイッチがON位置にあることを確認してください
- USB-Cケーブルを接続してデバイスを充電してください
- 赤色LEDが常時点灯しているか確認してください（充電中を示す）
- バッテリー電源を使用している場合は、バッテリーが適切に接続され充電されていることを確認してください

### Q2: Wi-Fiに接続できない

- 正しいWi-Fiパスワードを入力していることを確認してください
- Wi-Fiネットワークが動作していることを確認してください
- Wi-Fiルーターが2.4GHzネットワークをサポートしているか確認してください（5GHzはサポートされていません）
- デバイスをWi-Fiルーターの近くに移動してみてください

### Q3: ディスプレイが更新されない

- 更新ボタンを押して手動で更新をトリガーしてください
- デバイスがWi-Fiに接続されていることを確認してください（角に切断アイコンがない）
- SenseCraftアカウントを確認して、ダッシュボードが適切にデプロイされていることを確認してください
- 問題が続く場合は、デバイスを再起動してみてください

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークに自動的に再接続を試みます
- 再接続されると、Wi-Fi切断アイコンが消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

## リソース

- [reTerminal E1002 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1.0_SCH_250805.pdf)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI プラットフォーム ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview)
- [外観全体 3D モデル STP ファイル](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/ja/getting_started_with_reterminal_e1002) -->

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
