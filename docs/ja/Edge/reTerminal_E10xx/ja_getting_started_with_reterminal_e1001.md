---
description: この記事では、reTerminal E1001を素早く開始する方法をガイドします。
title: reTerminal E1001 入門ガイド
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/getting_started_with_reterminal_e1001
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1001 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

:::caution ファームウェア更新のヒント
最高の体験のために、製品を受け取ったらすぐに**[製品のファームウェア更新を完了](#preliminary)**することをお勧めします。
:::

## はじめに

reTerminal E1001は、優れた3ヶ月のバッテリー寿命を持つ7.5インチオープンソースモノクロームePaperディスプレイです。ESP32-S3を搭載し、簡単なダッシュボード作成のためのSenseCraft HMIノーコードUIプラットフォームをネイティブサポートし、さらなる開発のためにHome Assistant、TRMNL E-inkダッシュボード、Arduino、ESP-IDFをサポートしています。スマートホームダッシュボードの可視化、オフィスディスプレイ、教育プロジェクトなど、この即座に使用可能なHMIデバイスは、美しいビジュアルと柔軟なカスタマイゼーションを一つのエレガントなパッケージで提供します。

### 特徴

- **美しい、すぐに使えるePaperディスプレイ**
- **3ヶ月のバッテリー寿命を持つ超低消費電力**
- **SenseCraft HMIによるノーコードUI設計・デプロイメント**
- **人気のソフトウェアプラットフォームとの連携**
- **柔軟なハードウェア・ソフトウェアカスタマイゼーション**

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1001のハードウェアには以下が含まれます：

1. **7.5インチePaperディスプレイ**：800×480解像度のモノクロームディスプレイ
2. **ボタン**：手動画面操作用にデバイス上部に配置
3. **マイクロフォン**
4. **MicroSDカードスロット**：拡張可能なストレージ用
5. **電源スイッチ**：デバイスのオン/オフ用に背面に配置
6. **ステータスLED**：ユーザーインジケーター（緑）
7. **電源LED**：充電インジケーター（赤）
8. **USB-Cポート**：充電とファームウェア更新用
9. **拡張ポート**：VDD、GND、I2C、GPIO接続を提供する8ピン拡張ヘッダー


## 入門ガイド

### 準備

**ステップ1.** reTerminal E1001を開封し、すべてのコンポーネントが含まれていることを確認します：

- reTerminal E1001デバイス
- USB-Cケーブル
- クイックスタートガイド

**ステップ2.** （オプション）デバイスをデジタルフォトフレームとして使用する予定がある場合や、追加のストレージが必要な場合は、microSDカードを挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズ ePaperディスプレイは、Fat32形式の最大32GBまでのMicroSDカードのみをサポートします。
:::

**ステップ3.** （オプション）必要に応じてUSBドライバーをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1001との適切な通信を確保するためにUSBドライバーをインストールする必要がある場合があります：

- **Macコンピューター用**：[WCH公式ウェブサイト](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)からCH34Xドライバーをダウンロードしてインストールします

- **Windowsコンピューター用**：
  - Windows 11システムは通常、デフォルトでドライバーが含まれています
  - Windows 10以前のバージョンでは、[WCH公式ウェブサイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)からCH341ドライバーをダウンロードしてインストールする必要がある場合があります

- **Linuxシステム用**：最新のLinuxディストリビューションのほとんどは、デフォルトで必要なドライバーが含まれています

**ステップ4.** デバイスが最新バージョンを実行していることを確認するためにファームウェアを更新します：

1. USB-Cケーブルを使用してreTerminal E1001をコンピューターに接続します

2. 背面の電源スイッチを使用してデバイスの電源を入れます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)**にアクセスし、アカウントにサインインします

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. **Workspace**セクションに移動します

5. 右上角の**Device Flasher**をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. リストからreTerminal E1001デバイスを選択します。このチュートリアルに従って、**reTerminal E1001 7.5" Monochrome Display**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. ドロップダウンメニューから最新のファームウェアバージョンを選択します

8. **Flash**をクリックし、更新プロセスが完了するまで待ちます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note

1. ファームウェアの更新により、最適なパフォーマンスと最新機能へのアクセスが確保されます。初回使用前にこの更新を実行することをお勧めします。

2. デバイスがシャットダウンまたはスリープ状態の場合、ファームウェアを適切にフラッシュすることはできません。デバイスの正しいポートを選択してもファームウェアフラッシュの進行状況が表示されない場合は、ユニット上部の緑色ボタンを押してデバイスを起動し、再試行する必要があります。

:::

### 電源オン

**ステップ1.** 電源スイッチを**ON**位置にスライドしてデバイスの電源を入れます。電源スイッチはユニットの背面にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**ステップ2.** 初回起動時、デバイスは製品情報とネットワーク設定手順を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**ステップ3.** 緑色のユーザーLEDが約30秒間点灯し、デバイスが電源オンで初期化中であることを示します。デバイスを30秒間操作しないと、電力を確保するため、デバイスは自動的にスリープモードに入り、LEDライトは自動的に消灯します。

:::tip
そのため、この時間内にネットワーク設定の次のステップを完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。この場合、デバイスの緑色のWakeボタンを一度クリックしてデバイスを起動できます。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup vis PC" label="PC経由でのネットワーク設定" default>

**ステップ1.** スマートフォンまたはコンピューターからデバイスのWi-Fiアクセスポイントに接続します。AP名は画面に表示されます（パスワード不要）。ネットワーク認証情報は`reTerminal E1001-{MACアドレス}`です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ2.** 接続すると、お使いの電話は自動的にWi-Fi設定ページにリダイレクトされるはずです。そうでない場合は、ブラウザを開いて`192.168.4.1`に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ3.** ローカルWi-Fiネットワークを選択してパスワードを入力し、"Connect"をクリックします。

:::note
reTerminal E シリーズ ePaperディスプレイは2.4GHz WiFiネットワークのみをサポートし、5GHzやその他の帯域はサポートしません。
:::

**ステップ4.** 接続が成功すると、デバイスは確認音を発し、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### SenseCraftプラットフォームへの接続

**ステップ1.** ウェブブラウザで[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)にアクセスし、アカウントを作成するかサインインします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ2.** **Workspace**セクションに移動し、**Add Device**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**ステップ3.** デバイスに名前を付け、デバイス画面に表示されているペアリングコードを入力して**Create**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**ステップ4.** ペアリングが完了すると、デバイスは最初のダッシュボードを作成するよう促すメッセージを表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="SenseCraft APP経由でのネットワーク設定">

この方法では、SenseCraftモバイルアプリを使用してデバイスのネットワークを設定し、Bluetooth経由でSenseCraftアカウントに追加します。

まず、SenseCraft Appをダウンロードします。Google Play StoreまたはApple App Storeで「SenseCraft」を検索して見つけることができます。または、このウェブサイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして、**User** タブに移動します。**Device Bluetooth Configuration** をタップしてプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 2.** 「Please select the device type」画面で、お使いの reTerminal モデル（例：**reTerminal E1001** または **reTerminal E1002**）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。これは通常、**Up** と **Down** ページボタンを同時に押すことで行います。スマートフォンの Bluetooth が有効になっていることを確認してください。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストからお使いのデバイスを選択して接続します。

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

**ステップ 7.** リスト内のデバイスをタップして **Device Detail** ページを表示できます。ここからデバイスを管理し、写真をアップロードできます。より複雑なダッシュボードとキャンバスデザインについては、SenseCraft のウェブブラウザ版の使用を促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>


## ダッシュボードの作成

reTerminal E1001 は SenseCraft HMI プラットフォームとシームレスに統合され、デバイス用のコンテンツを作成・カスタマイズするための強力なツールを提供します。ここでステップバイステップの操作を詳しく説明する代わりに、プラットフォームの主要機能を探索して、何が可能かを理解していただきましょう。

### SenseCraft HMI の機能

**AI ジェネレーター**

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を説明するだけで、AI ジェネレーターが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でのデザイン作業なしに、天気表示、カレンダー、To-Do リスト、情報パネルを素早く生成するのに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**ギャラリー**

ギャラリー機能で reTerminal E1001 をデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームが ePaper ディスプレイ用に最適化します。カスタム遷移時間でスライドショーを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/19.png" style={{width:1000, height:'auto'}}/></div>

**キャンバス**

キャンバスでダッシュボードを一から設計しましょう。ドラッグアンドドロップインターフェースで様々な要素を提供します：

- カスタマイズ可能なフォントとサイズのテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気のウィジェット
- データ可視化ツール
- レイアウト整理用の図形と区切り線

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/20.png" style={{width:1000, height:'auto'}}/></div>

**RSS フィード統合**

お気に入りのニュースソース、ブログ、ウェブサイトの RSS フィードをダッシュボードに追加して最新情報を入手しましょう。RSS 機能により、複数のソースからヘッドライン、要約、または完全な記事を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/21.png" style={{width:1000, height:'auto'}}/></div>

**ウェブコンテンツ表示**

特定のウェブコンテンツをキャプチャしてデバイスに表示します。ウェブ機能はウェブサイトの選択された部分をレンダリングでき、交通スケジュール、株価ティッカー、その他のオンラインデータソースなどの情報を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/16.png" style={{width:1000, height:'auto'}}/></div>

### SenseCraft HMI の開始

前のセクションで説明したように、デバイスを SenseCraft プラットフォームとペアリングした後、最初のダッシュボードを作成する準備が整います。各機能の使用に関する詳細な手順については、対応する Wiki ページを参照してください：

- [SenseCraft HMI 概要](https://sensecraft-hmi-docs.seeed.cc/en/)

SenseCraft プラットフォームでダッシュボードを作成・保存したら、「Deploy to Device」をクリックし、ペアリングした reTerminal E1001 を選択するだけで、カスタムコンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイがダッシュボードを表示するように更新され、複数のページを作成した場合はナビゲーションボタンを使用してページを切り替えることができます。

## デバイスの操作

### リフレッシュボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

デバイス上部のリフレッシュボタンには複数の機能があります：

- **シングルプレス**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツをチェックします。ブザーが一度鳴ってアクションを確認します。このボタンはデバイスのウェイクアップにも一般的に使用されます。デバイスがスリープ状態になり、ダッシュボードリフレッシュコマンドがすぐに利用できない場合に、このボタンを使用してデバイスをウェイクアップできます。

- **長押し**（将来の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

左右のボタンで、ダッシュボードに複数のページが含まれている場合にページ間を移動できます：

- **左ボタン**：前のページに移動

- **右ボタン**：次のページに移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

異なる Wi-Fi ネットワークに接続する必要がある場合：

**ステップ 1.** 両方のナビゲーションボタン（左と右）を同時に 2 秒間長押しします。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[ネットワークセットアップ](#network-setup)の手順を再度実行して新しいネットワークに接続できます。

### LED インジケーター

- **赤色 LED**：
  - オフ：フル充電または充電していない
  - 常時点灯：充電中

- **緑色 LED**：
  - 起動時に 30 秒間点灯：デバイスが電源投入中

### バッテリー動作

バッテリー電源で動作する場合：

- デバイスはリフレッシュ間に自動的に低電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電から通常 3 ヶ月）

- バッテリーレベルが 20% を下回ると、デバイスは右上角に低バッテリーアイコンを表示します

:::tip
バッテリー電圧を読み取るコードを自分で書く場合、analogRead() 関数の前に 10ms の遅延を追加するとより正確になります。
:::

### 拡張ピン

reTerminal E1001 には 8 ピン拡張ヘッダー（J2）があり、外部センサー、モジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダーは複数の ESP32-S3 GPIO ピンと通信インターフェースを公開し、DIY プロジェクトの多用途な接続ポイントとなります。

#### 拡張ヘッダーピン配置

8 ピン拡張ヘッダー（J2）のピン配置は以下の通りです：

<div class="table-center">
 <table align="center">
  <tr>
   <th>ピン（上から下へ）</th>
   <th>ラベル</th>
   <th>ESP32-S3 ピン</th>
   <th>機能</th>
   <th>説明</th>
  </tr>
  <tr>
   <td>1</td>
   <td>HEADER_3V3</td>
   <td>-</td>
   <td>電源</td>
   <td>外部デバイス用 3.3V 電源供給</td>
  </tr>
  <tr>
   <td>2</td>
   <td>GND</td>
   <td>-</td>
   <td>グラウンド</td>
   <td>共通グラウンド基準</td>
  </tr>
  <tr>
   <td>3</td>
   <td>ESP_IO46</td>
   <td>GPIO46</td>
   <td>GPIO/ADC</td>
   <td>アナログ入力機能付き汎用 I/O</td>
  </tr>
  <tr>
   <td>4</td>
   <td>ESP_IO2/ADC1_CH4</td>
   <td>GPIO2</td>
   <td>GPIO/ADC</td>
   <td>アナログ入力機能付き汎用 I/O（ADC1 チャンネル 4）</td>
  </tr>
  <tr>
   <td>5</td>
   <td>ESP_IO17/TX1</td>
   <td>GPIO17</td>
   <td>GPIO/UART TX</td>
   <td>GPIO または UART 送信（TX）信号</td>
  </tr>
  <tr>
   <td>6</td>
   <td>ESP_IO18/RX1</td>
   <td>GPIO18</td>
   <td>GPIO/UART RX</td>
   <td>GPIO または UART 受信（RX）信号</td>
  </tr>
  <tr>
   <td>7</td>
   <td>ESP_IO20/I2C0_SCL</td>
   <td>GPIO20</td>
   <td>GPIO/I2C SCL</td>
   <td>GPIO または I2C クロック信号</td>
  </tr>
  <tr>
   <td>8</td>
   <td>ESP_IO19/I2C0_SDA</td>
   <td>GPIO19</td>
   <td>GPIO/I2C SDA</td>
   <td>GPIO または I2C データ信号</td>
  </tr>
 </table>
</div>

## デバイスの設置

reTerminal E1001 には、最適な視認性のためにデバイスを直立させて配置できる 3D プリント製サポートスタンドアクセサリが付属しています：

**ステップ 1.** パッケージに含まれている 3D プリント製サポートスタンドを見つけます。

**ステップ 2.** 埋め込みナットが配置されている reTerminal E1001 の底面背部の指定された取り付けエリアにサポートスタンドを配置します。

**ステップ 3.** 長いドライバーを使用して、reTerminal E1001の背面にある埋め込みナットにネジを締めることで、スタンドをデバイスに固定します。

**ステップ 4.** しっかりと取り付けたら、スタンドが直立位置でサポートできる平らな面にreTerminal E1001を置きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
スタンドは固定された視野角を提供し、調整することはできません。この固定位置は、ほとんどの使用シナリオで最適な視認性を提供するように設計されています。

スタンドにより、デバイスを机、カウンタートップ、または棚に置くことができ、さまざまな環境で情報ディスプレイ、コントロールパネル、またはデジタルフォトフレームとして使用するのに理想的です。
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
- デバイスをWi-Fiルーターの近くに配置してみてください

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

- [reTerminal E1001 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1.0_SCH_250805.pdf)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI プラットフォーム ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview)
- [外観全体 3D モデル STP ファイル](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/ja/getting_started_with_reterminal_e1001) -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
