---
description: この記事では、reTerminal E1002 をすばやく使い始めるための手順を説明します。
title: reTerminal E1002 入門ガイド
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1002 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

:::caution ファームウェア更新のヒント
最高の体験のために、製品を受け取ったらできるだけ早く**[製品のファームウェア更新を完了](#予備設定)**することをお勧めします。
:::

:::danger 画面寿命に関する警告
1. reTerminal が長時間アイドル状態になっている場合は、デバイス上部の緑色ボタンを 5 秒間長押しして（工場出荷時ファームウェアを使用して）画面内容を消去できます。これにより残像を効果的に防ぎ、画面寿命を延ばすことができます。

2. 可能な限り、長時間（1 日以上）同じ画面を表示し続けないでください。残像が発生する可能性があります。少なくとも 1 日に 1 回は画面の画像を更新することをお勧めします。デバイスを長期間使用しない場合は、デバイスの表示内容を消去することを推奨します。

3. プログラムの使用やデバッグ時には、画面のリフレッシュ頻度をできるだけ少なくしてください。長時間にわたって高速で画面をリフレッシュし続けると、画面の寿命が短くなる可能性があります。
:::

## はじめに

reTerminal E1002 は、7.3 インチのオープンソース・フルカラー ePaper ディスプレイで、最大 3 か月の優れたバッテリー寿命を備えています。ESP32-S3 を搭載し、ノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートしているため、ダッシュボードを簡単に作成できます。また、さらなる開発のために Home Assistant、TRMNL E-ink dashboard、Arduino、ESP-IDF にも対応しています。E Ink® Spectra™ 6 フルカラー ePaper ディスプレイを採用しており、デジタルフォトフレームやカラフルなダッシュボードの可視化に最適です。

### 特長

- **美しく、すぐに使える E Ink® Spectra™6 カラー ePaper ディスプレイ**
- **3 か月のバッテリー寿命を実現する超低消費電力**
- **SenseCraft HMI によるノーコード UI 設計とデプロイ**
- **一般的なソフトウェアプラットフォームに対応**
- **柔軟なハードウェアおよびソフトウェアのカスタマイズ**

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1002 のハードウェアには次のものが含まれます：

1. **7.3 インチ フルカラー ePaper ディスプレイ**：800×480 解像度のフルカラー表示
2. **ボタン**：手動で画面を操作するためにデバイス上部に配置
3. **マイク**
4. **MicroSD カードスロット**：ストレージ拡張用
5. **電源スイッチ**：デバイス背面にあり、電源のオン／オフに使用
6. **ステータス LED**：ユーザーインジケータ（緑）
7. **電源 LED**：充電インジケータ（赤）
8. **USB-C ポート**：充電およびファームウェア更新用
9. **拡張ポート**：VDD、GND、I2C、および GPIO 接続を提供する 8 ピン拡張ヘッダ

## セットアップ

### 予備設定

**ステップ 1.** reTerminal E1002 を開封し、すべての同梱物が揃っていることを確認します：
- reTerminal E1002 本体
- USB-C ケーブル
- クイックスタートガイド

**ステップ 2.**（任意）デジタルフォトフレームとして使用する場合や、追加のストレージが必要な場合は microSD カードを挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズ ePaper ディスプレイは、FAT32 形式の最大 64GB までの MicroSD カードのみをサポートします。  
64GB の SD カードはデフォルトで exFAT 形式になっています。FAT32 にフォーマットし直すと、正常にマウントされ、画像の保存に使用できます。
:::

**ステップ 3.**（任意）必要に応じて USB ドライバをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1002 と正しく通信するために USB ドライバをインストールする必要がある場合があります：

- **Mac コンピュータの場合**：[WCH 公式サイト](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)から CH34X ドライバをダウンロードしてインストールします

- **Windows コンピュータの場合**: 
  - Windows 11 システムには通常、ドライバが標準で含まれています
  - Windows 10 以前のバージョンでは、[WCH 公式サイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)から CH341 ドライバをダウンロードしてインストールする必要がある場合があります

- **Linux システムの場合**：ほとんどの最新の Linux ディストリビューションには、必要なドライバが標準で含まれています

**ステップ 4.** デバイスが最新バージョンで動作するように、ファームウェアを更新します：

1. reTerminal E1002 を USB-C ケーブルでコンピュータに接続します

2. 背面の電源スイッチを使ってデバイスの電源を入れます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** にアクセスし、アカウントにサインインします

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. **Workspace** セクションに移動します

5. 右上の **Device Flasher** をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. 一覧から reTerminal E1002 デバイスを選択します。このチュートリアルでは、**reTerminal E1002 7.3" Full Color Display** を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. プルダウンメニューから最新のファームウェアバージョンを選択します

8. **Flash** をクリックし、更新プロセスが完了するまで待ちます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note
1. ファームウェアを更新することで、最適なパフォーマンスと最新機能へのアクセスが保証されます。デバイスを初めて使用する前に、この更新を行うことをお勧めします。

2. デバイスがシャットダウンまたはスリープ状態のときは、ファームウェアを正しく書き込むことはできません。デバイスに対して正しいポートを選択しているにもかかわらず、ファームウェア書き込みの進行状況がまったく表示されない場合は、ユニット上部の緑色ボタンを押してデバイスをウェイクアップし、再試行する必要があるかもしれません。
:::

### 電源オン

**ステップ 1.** 背面にある電源スイッチを **ON** 位置にスライドしてデバイスの電源を入れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**ステップ 2.** 初回起動時、デバイスには製品情報とネットワーク設定手順が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**ステップ 3.** 緑色のユーザー LED が約 30 秒間点灯し、デバイスの電源が入り初期化中であることを示します。デバイスを 30 秒間操作しない場合、電力を確保するために自動的にスリープモードに入り、LED ライトは自動的に消灯します。

:::tip
したがって、この時間内にネットワーク設定の次のステップを完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。このような場合は、デバイス上部の緑色の Wake ボタンを 1 回押してデバイスをウェイクアップしてください。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup vis PC" label="PC 経由でのネットワーク設定" default>

**ステップ 1.** スマートフォンまたはコンピュータからデバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワーク認証情報は `reTerminal E1002-{MAC Adress}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 2.** 接続されると、スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされるはずです。自動的に開かない場合は、ブラウザを開き `192.168.4.1` にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ 3.** ローカルの Wi-Fi ネットワークを選択し、パスワードを入力してから「Connect」をクリックします。

:::note
reTerminal E シリーズ ePaper ディスプレイは 2.4GHz の WiFi ネットワークのみをサポートし、5GHz など他の帯域はサポートしません。
:::

**ステップ 4.** 接続に成功すると、デバイスが確認音を鳴らし、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**ステップ 1.** ブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**ステップ 2.** **Workspace** セクションに移動し、**Add Device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** デバイスに名前を付け、デバイス画面に表示されているペアリングコードを入力して **Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4.** ペアリングが完了すると、デバイスに最初のダッシュボードを作成するよう促すメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="SenseCraft APP によるネットワーク設定">

この方法では、SenseCraft モバイルアプリを使用してデバイスのネットワークを設定し、Bluetooth 経由で SenseCraft アカウントにデバイスを追加します。

まず SenseCraft アプリをダウンロードします。Google Play ストアまたは Apple App Store で「SenseCraft」と検索すると見つかります。あるいは、この Web サイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして **User** タブに移動します。**Device Bluetooth Configuration** をタップしてプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 2.** 「Please select the device type」画面で、使用している reTerminal モデル（例：**reTerminal E1001** または **reTerminal E1002**）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。通常は **Up** と **Down** のページボタンを同時に押すことで行います。スマートフォンの Bluetooth が有効になっていることを確認してください。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストから自分のデバイスを選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 4.** Bluetooth で接続されると、アプリから Wi-Fi 接続の設定を求められます。プルダウンリストから自宅の 2.4GHz Wi-Fi ネットワークを選択し、パスワードを入力して **Next** をタップします。

:::note
デバイスは 2.4G Wi-Fi ネットワーク経由でのみ設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5.** アプリが Wi-Fi の認証情報をデバイスに送信し、SenseCraft アカウントにデバイスを追加します。完了すると「Device added successfully」というメッセージが表示されます。**Start exploring!** をタップして次に進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 6.** アプリのメインの **Device** タブにあるデバイス一覧に reTerminal が表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 7.** リスト内のデバイスをタップすると、その **Device Detail** ページを表示できます。ここからデバイスの管理や写真のアップロードが可能です。より高度なダッシュボードやキャンバスのデザインを行う場合は、SenseCraft の Web ブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

## ダッシュボードの作成

reTerminal E1002 は SenseCraft HMI プラットフォームとシームレスに統合されており、デバイス向けコンテンツの作成とカスタマイズに強力なツールを提供します。ここでは操作手順を一つひとつ説明する代わりに、何ができるのかを理解できるよう、プラットフォームの主な機能を紹介します。

### SenseCraft HMI の機能

**AI Generator**

ダッシュボードのデザインを人工知能に任せましょう。表示したい情報を説明するだけで、AI Generator が自動的に魅力的で機能的なレイアウトを作成します。天気表示、カレンダー、ToDo リスト、インフォメーションパネルなどを、手作業でデザインすることなく素早く生成するのに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Gallery**

Gallery 機能を使って、reTerminal E1002 をデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームが ePaper ディスプレイ向けに最適化します。カスタムの切り替え時間を設定したスライドショーも作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/13.png" style={{width:1000, height:'auto'}}/></div>

**Canvas**

Canvas を使えば、ドラッグ＆ドロップのインターフェースでダッシュボードを一からデザインできます。以下のようなさまざまな要素を利用できます：
- フォントやサイズをカスタマイズできるテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気用のウィジェット
- データ可視化ツール
- レイアウト整理用の図形や区切り線

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/14.png" style={{width:1000, height:'auto'}}/></div>

**RSS フィード連携**

RSS フィードをダッシュボードに追加することで、お気に入りのニュースサイト、ブログ、Web サイトの最新情報を常にチェックできます。RSS 機能を使うと、複数の情報源から見出し、要約、または記事全文を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/15.png" style={{width:1000, height:'auto'}}/></div>

**Web コンテンツ表示**

特定の Web コンテンツをキャプチャしてデバイスに表示できます。Web 機能は Web サイトの選択した部分をレンダリングできるため、交通時刻表、株価ティッカー、その他のオンラインデータソースなどの情報を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/22.png" style={{width:1000, height:'auto'}}/></div>

### SenseCraft HMI の使い始め方

前のセクションで説明したようにデバイスを SenseCraft プラットフォームとペアリングすると、最初のダッシュボードを作成する準備が整います。各機能の詳細な使い方については、対応する Wiki ページを参照してください。

- [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/)

SenseCraft プラットフォームでダッシュボードを作成して保存したら、"Deploy to Device" をクリックし、ペアリング済みの reTerminal E1002 を選択するだけで、カスタムコンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイが更新されてダッシュボードが表示され、複数ページを作成している場合はナビゲーションボタンでページを切り替えることができます。

## デバイスの操作

### リフレッシュボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

デバイス上部のリフレッシュボタンには、次のような機能があります。

- **短押し**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツがないか確認します。動作が行われるとブザーが 1 回鳴ります。このボタンはデバイスのスリープ解除にもよく使われます。デバイスがスリープ状態にあり、ダッシュボードのリフレッシュコマンドがすぐにはデバイスに届かない場合、このボタンでデバイスを起動できます。

- **長押し**（今後の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

ダッシュボードに複数のページがある場合、左右のボタンでページ間を移動できます。

- **左ボタン**：前のページへ移動

- **右ボタン**：次のページへ移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

別の Wi-Fi ネットワークに接続する必要がある場合：

**ステップ 1.** 左右のナビゲーションボタンを同時に 2 秒間押し続けます。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[Network Setup](#network-setup) の手順に従って新しいネットワークに接続できます。

### LED インジケータ

- **赤色 LED**：
  - 消灯：フル充電済み、または充電していない状態
  - 常時点灯：充電中

- **緑色 LED**：
  - 起動時に 30 秒間点灯：デバイスが起動中

### バッテリー動作

バッテリー駆動時：

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（通常、デフォルト設定でフル充電から約 3 か月）

- バッテリー残量が 20% 未満になると、画面右上にバッテリー残量低下アイコンが表示されます

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合、analogRead() 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

### 拡張ピン

reTerminal E1002 には 8 ピンの拡張ヘッダ（J2）が搭載されており、外部センサやモジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダは複数の ESP32-S3 GPIO ピンと通信インターフェースを引き出しており、DIY プロジェクトにとって汎用性の高い接続ポイントとなります。

#### 拡張ヘッダのピン配置

8 ピン拡張ヘッダ（J2）のピン配置は次のとおりです。

<div class="table-center">
	<table align="center">
		<tr>
			<th>ピン（上から下）</th>
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
			<td>外部デバイス用 3.3V 電源</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>グラウンド</td>
			<td>共通グラウンドリファレンス</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能を備えた汎用 I/O</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能付き汎用 GPIO（ADC1 チャンネル 4）</td>
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

reTerminal E1002 には、デバイスを立てて最適な視認性で使用できるようにする 3D プリント製のスタンドアクセサリが付属しています：

**ステップ 1.** 同梱されている 3D プリント製スタンドを見つけます。

**ステップ 2.** reTerminal E1002 背面下部の、埋め込みナットがある所定の取り付け位置にスタンドを合わせて配置します。

**ステップ 3.** 長いドライバーを使用して、reTerminal E1002 背面の埋め込みナットにネジを締め込み、スタンドをデバイスに固定します。

**ステップ 4.** しっかり固定できたら、reTerminal E1002 を平らな面に置き、スタンドで本体が直立するようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
スタンドは視野角が固定で、角度調整はできません。この固定位置は、ほとんどの使用シーンで最適な視認性が得られるよう設計されています。

スタンドを使用することで、デバイスを机、カウンター、棚などに設置でき、情報表示、コントロールパネル、デジタルフォトフレームなど、さまざまな環境での利用に最適です。
:::

## トラブルシューティング

### Q1: デバイスの電源が入らない

- 電源スイッチが ON の位置になっていることを確認します
- デバイスを充電するために USB-C ケーブルを接続します
- 赤色 LED が常時点灯しているか確認します（充電中を示します）
- バッテリー駆動の場合は、バッテリーが正しく接続され、充電されていることを確認します

### Q2: Wi-Fi に接続できない

- 正しい Wi-Fi パスワードを入力しているか確認します
- Wi-Fi ネットワークが正常に動作していることを確認します
- Wi-Fi ルーターが 2.4GHz ネットワークに対応しているか確認します（5GHz はサポートされていません）
- デバイスを Wi-Fi ルーターの近くに移動してみます

### Q3: 画面が更新されない

- 更新ボタンを押して手動で更新をトリガーします
- デバイスが Wi-Fi に接続されていることを確認します（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認します
- 問題が解決しない場合は、デバイスを再起動してみます
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常に更新できるか確認してください

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試行します
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

## リソース

- [reTerminal E1002 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1_2_SCH_251120.pdf)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI プラットフォーム ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview)
- [外装全体 3D モデル STP ファイル](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/ja/getting_started_with_reterminal_e1002) -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様ができるだけスムーズに製品をご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
