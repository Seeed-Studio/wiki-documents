---
description: reTerminal E1004 は、ESP32-S3 を搭載し、E Ink® Spectra™ 6 テクノロジーと SenseCraft HMI サポートを備えた、13.3 インチのオープンソースフルカラー電子ペーパーディスプレイです。
title: reTerminal E1004 入門ガイド
sidebar_position: 5
keywords:
  - reTerminal E1004
  - 電子ペーパーディスプレイ
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - スマートホームダッシュボード
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 4/24/2026
  author: Citric
createdAt: '2026-01-29'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1004 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1004 は、最大 6 か月のバッテリー寿命を備えた 13.3 インチのオープンソースフルカラー電子ペーパーディスプレイです。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートするとともに、さらなる開発のために Home Assistant、Arduino、ESP-IDF をサポートします。E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイにより、デジタルフォトフレームやカラフルなダッシュボードの可視化に最適です。

### 特長

- 高解像度で美しく、すぐに使える E Ink® Spectra™6 カラー電子ペーパーディスプレイ
- SenseCraft HMI によるノーコード UI デザイン & デプロイ
- ライブデータ同期付きの画像スライドショー & 数か月持続するバッテリー
- さまざまなシーンの装飾および表示ニーズに適応

## 仕様

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">項目</th>
			<th align="center">説明</th>
		</tr>
		<tr>
			<td align="center"><strong>製品名</strong></td>
			<td align="center">reTerminal E1004</td>
		</tr>
		<tr>
			<td align="center"><strong>プロセッサ</strong></td>
			<td align="center">ESP32-S3（8MB PSRAM 搭載）</td>
		</tr>
		<tr>
			<td align="center"><strong>ストレージ</strong></td>
			<td align="center">32MB フラッシュ、Micro SD カード対応（最大 32GB、16GB 付属）</td>
		</tr>
		<tr>
			<td align="center"><strong>ディスプレイ</strong></td>
			<td align="center">13.3" Spectra™ 6 フルカラー電子ペーパー</td>
		</tr>
		<tr>
			<td align="center"><strong>解像度</strong></td>
			<td align="center">1200 x 1600 ピクセル</td>
		</tr>
		<tr>
			<td align="center"><strong>無線接続</strong></td>
			<td align="center">2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>センサ</strong></td>
			<td align="center">温度・湿度センサ</td>
		</tr>
		<tr>
			<td align="center"><strong>オーディオ</strong></td>
			<td align="center">ブザー（サウンドアラート）</td>
		</tr>
		<tr>
			<td align="center"><strong>バッテリー</strong></td>
			<td align="center">5000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>電源入力</strong></td>
			<td align="center">USB-C 5V / 1A</td>
		</tr>
		<tr>
			<td align="center"><strong>動作温度</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>寸法</strong></td>
			<td align="center">376mm x 311mm x 40mm</td>
		</tr>
	</table>
</div>

## アプリケーション

- **低消費電力電子フォトフレーム：** 高解像度の家族写真やアートを、紙のような品質で、毎日の充電を気にせず表示できます。
- **ファミリーインフォメーションボード：** カレンダー、通知、天気、ニュースを、スタイリッシュで常時表示の形式で確認できます。
- **ホームオートメーションダッシュボード：** Home Assistant を介して、スマートホームのリアルタイムデータ（温度、湿度、空気質）を可視化します。
- **スマートオフィスディスプレイ：** 会議室のスケジュール、空き状況、案内表示などを表示します。
- **小売・公共サイネージ：** 省エネルギーなメニュー、時刻表、占有状況インジケータなどに利用できます。
- **教育・プロトタイピング：** IoT、組み込みシステム、UI デザインの学習に最適なプラットフォームです。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/209.png" style={{width:1000, height:'auto'}}/></div>

1. **電子ペーパーディスプレイ：** 13.3" E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイエリア。
2. **タッチボタン：** 前面ベゼルの静電容量式タッチボタンで、画面のリフレッシュやページナビゲーション（前 / 次）を行います。
3. **ページアップ / ダウン / リフレッシュボタン：** 背面の物理ボタンで、ページ送りや電子ペーパーディスプレイの手動リフレッシュを行います。
4. **赤色充電 LED：** バッテリーの充電状態を示します。
5. **USB-C データ & 充電ポート：** デバイスの充電およびデータ転送に使用します。
6. **電源スイッチ：** デバイスの電源をオン / オフします。
7. **緑色ステータス LED：** 現在の動作状態またはシステム状態を示します。
8. **リセットボタン：** デバイスをリセットするためのボタンです。
9. **ブートボタン：** ブート / ファームウェアダウンロードモードに入るために使用します。
10. **拡張ポート：** VDD、GND、UART、I2C、GPIO、ADC 接続を提供する 2 × 4 ピンヘッダで、外部センサ、モジュール、周辺機器を接続できます。
11. **スタンド取り付け用インサート：** スタンドにデバイスを固定するための背面のねじ込みインサート。

## セットアップ

reTerminal E1004 には、ノーコードプラットフォーム **SenseCraft HMI** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。

### 事前準備

**ステップ 1.** reTerminal E1004 を開封し、すべての同梱物が揃っていることを確認します：

- reTerminal E1004 本体
- USB-C ケーブル
- クイックスタートガイド
- ドライバー
- ねじ
- 金属製スタンド（縦向き・横向きの両方に対応）

**ステップ 2.** （任意）金属製スタンドを取り付けて、デバイスを縦向きまたは横向きに設置します：

同梱されている金属スタンドを用意します。スタンドは reTerminal E1004 背面のねじ込みインサートを使用します。縦向きに設置する場合は縦置き用のインサートに、横向きにする場合は 90° 回転させて別のインサートに取り付けます。付属のドライバーとねじを使用してスタンドを固定してください。取り付け後、reTerminal E1004 を平らな場所に置くと、スタンドが選択した向きで本体を支えます。

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**ステップ 3.** （任意）microSD カードを交換または取り外します。

reTerminal E1004 には 16GB の microSD カードがあらかじめ装着されているため、通常は自分でカードを挿入する必要はありません。別のカードに交換したい場合やカードを取り出したい場合は、以下の動画を参考にしてください。

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/214.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
reTerminal E シリーズ電子ペーパーディスプレイは、FAT32 形式の最大 32GB までの MicroSD カードのみをサポートします。  
32GB の SD カードはデフォルトで exFAT 形式にフォーマットされています。FAT32 に再フォーマットすると、正常にマウントされ、画像の保存に使用できます。
:::

**ステップ 4.** （任意）必要に応じて USB ドライバをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1004 と正しく通信するために USB ドライバをインストールする必要がある場合があります：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 システムには通常、ドライバが標準で含まれています
- Windows 10 以前のバージョンでは、[WCH 公式サイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) から CH341 ドライバをダウンロードしてインストールする必要がある場合があります

</TabItem>

<TabItem value="MacOS" label="MacOS">

[WCH 公式サイト](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) から CH34X ドライバをダウンロードしてインストールします

</TabItem>

<TabItem value="Linux" label="Linux">

ほとんどの最新の Linux ディストリビューションには、必要なドライバが標準で含まれています

</TabItem>
</Tabs>

### 電源を入れる

**ステップ 1.** 背面にある電源スイッチを **ON** 位置にスライドして、デバイスの電源を入れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/215.gif" style={{width:600, height:'auto'}}/></div>

**ステップ 2.** 初回起動時、デバイスには製品情報とネットワーク設定手順が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/212.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 3.** 緑色のユーザー LED が約 3 秒間点灯し、デバイスの電源が入り初期化中であることを示します。デバイスを 30 秒間操作しないと、電力を確保するために自動的にスリープモードに入り、LED ライトは自動的に消灯します。

:::tip
そのため、この時間内にネットワーク設定の次のステップを完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。この場合は、前面ベゼルの **Refresh** タッチボタン、または背面の **Refresh** 物理ボタンを押してデバイスを復帰させてください。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup via PC" label="PC 経由でのネットワーク設定" default>

**ステップ 1.** スマートフォンまたはコンピュータから、デバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワークの認証情報は `reTerminal E1004-{MAC Address}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 2.** 接続されると、スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされます。自動的に開かない場合は、ブラウザを開き `192.168.4.1` にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ 3.** ローカルの Wi-Fi ネットワークを選択し、パスワードを入力してから "Connect" をクリックします。

:::note
reTerminal E シリーズ電子ペーパーディスプレイは、2.4GHz の WiFi ネットワークのみをサポートし、5GHz など他の帯域はサポートしません。
:::

**ステップ 4.** 接続に成功すると、デバイスが確認音を鳴らし、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.png" style={{width:400, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**ステップ 1.** Web ブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**ステップ 2.** 左側のサイドバーで **Device** をクリックしてデバイスページに入り、左上の **+ New Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**ステップ 3.** デバイスに名前を付け、デバイスの画面に表示されているペアリングコードを入力して **Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 4.** ペアリングが完了すると、最初のダッシュボードを作成するよう促すメッセージがデバイスに表示されます。

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

この方法では、SenseCraft モバイルアプリを使用してデバイスのネットワークを設定し、Bluetooth 経由で SenseCraft アカウントに追加します。

まず、SenseCraft アプリをダウンロードします。Google Play ストアまたは Apple App Store で「SenseCraft」と検索して見つけることができます。あるいは、次の Web サイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして **User** タブに移動します。**Device Bluetooth Configuration** をタップしてプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 2.** 「Please select the device type」画面で **reTerminal E1004** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。スマートフォンの Bluetooth が有効になっていることを確認します。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストから自分のデバイスを選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 4.** Bluetooth で接続されると、アプリから Wi-Fi 接続の設定を求められます。プルダウンリストからローカルの 2.4GHz Wi-Fi ネットワークを選択し、パスワードを入力して **Next** をタップします。

:::note
デバイスは 2.4G Wi-Fi ネットワーク経由でのみ設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5.** アプリは Wi-Fi 認証情報をデバイスに送信し、SenseCraft アカウントにデバイスを追加します。完了すると「Device added successfully」というメッセージが表示されます。**Start exploring!** をタップして次に進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 6.** アプリのメイン **Device** タブにあるデバイス一覧に reTerminal が表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 7.** リスト内のデバイスをタップすると、その **Device Detail** ページを表示できます。ここからデバイスを管理したり、写真をアップロードしたりできます。より複雑なダッシュボードやキャンバスデザインについては、SenseCraft の Web ブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### ファームウェアの更新

デバイスが SenseCraft アカウントに正常に追加されると、プラットフォームは自動的にファームウェアバージョンを確認します。新しいファームウェアが利用可能な場合は、更新するように促されます。

また、いつでも手動でファームウェアバージョンを確認することもできます：

**ステップ 1.** **Device** ページで reTerminal E1004 を見つけて詳細を表示し、**現在のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**ステップ 2.** 左側のサイドバーで **Tools** をクリックし、**Firmware Flasher** タブを開いて、このデバイスで利用可能な **最新のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** 現在のバージョンが最新バージョンより古い場合は、Firmware Flasher ページの 3 ステップフローに従って更新します：

1. **デバイスを選択** — reTerminal E1004 を USB-C ケーブルでコンピュータに接続し、電源スイッチが **ON** になっていることを確認してから、**Select** をクリックし、リストからデバイスを選択します。

2. **ファームウェアを選択** — リリースオプションのドロップダウンから最新のファームウェアを選択します。

3. **フラッシュ** — **Flash** をクリックし、更新が完了するまで待ちます。デバイスを工場出荷状態にリセットしたい場合にのみ **Full Flash** を有効にします（すべてのデータ、設定、デザインが消去されます）。

:::note

1. ファームウェアを更新することで、最適なパフォーマンスと最新機能へのアクセスが保証されます。

2. デバイスがシャットダウンまたはスリープ状態のときは、ファームウェアを正しくフラッシュすることはできません。デバイスに対して正しいポートを選択してもファームウェアのフラッシュ進行がまったく表示されない場合は、ユニット上の **Refresh** ボタンを押してデバイスを起動し、再試行する必要があるかもしれません。

3. **標準の Flash を実行** すると設定を保持できます：Wi-Fi、デプロイ済みデザイン、画像は保持されます。**Full Flash を実行して一からやり直す** 場合：すべてのデータ、設定、デザインが消去されます（工場出荷状態）。

:::

## reTerminal E1004 にコンテンツを表示する

デバイスがペアリングされると、好きなコンテンツの表示を開始できます。おすすめは **SenseCraft HMI** です。これはノーコードのクラウドプラットフォームで、数回クリックするだけで reTerminal E1004 向けのコンテンツをデザインしてデプロイできます。

SenseCraft HMI には、チュートリアルや機能ドキュメントが完全に揃った専用 Wiki があります。詳細なガイド（アカウント設定、ファームウェアのフラッシュ、高度なエディタの使い方、デプロイなど）については、次を参照してください：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

本記事は製品の **Getting Started** であるため、同じ内容はここでは繰り返しません。以下では、reTerminal E1004 に何かを素早く表示する方法のみを示します。

### Home — コミュニティテンプレートから始める

画面に何かを表示する最も速い方法は、既製のテンプレートから始めることです。SenseCraft HMI の **Home** ページには、コミュニティによって提供されたテンプレートが多数あり、今も増え続けています。ダッシュボード、時計、天気パネル、名言ウォール、カレンダー、フォトフレームなどがあります。ギャラリーを閲覧して好みのデザインを選び、ワンクリックで reTerminal E1004 にデプロイできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 自分のコンテンツを管理・デザインする

**Workspace** ページでは、現在バインドされているデバイスに表示されるすべてのページとコンテンツを管理します。ここから次のことができます：

- ゼロから独自のデザインページを作成して配置する
- 画像をアップロードし、スライドショーとして整理する
- テキスト、ウィジェット、図形、データ、RSS フィード、Web コンテンツなどを 1 つのドラッグ＆ドロップエディタで組み合わせる
- 最終的なデザインをワイヤレスで reTerminal E1004 にデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

デザインを保存したら、**Deploy to Device** をクリックし、ペアリング済みの reTerminal E1004 を選択すると、コンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイが更新され、デザインが表示されます。

:::note
E Ink 技術の特性上、画像が完全に更新されて残像が消えるまで、画面のリフレッシュに数秒かかる場合があります。
:::

その他すべての内容 — 詳細なエディタ操作、ヒント、リリースノートなど — については、[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/) を参照してください。

## デバイスの操作

### Refresh ボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/216.jpg" style={{width:700, height:'auto'}}/></div>

Refresh ボタンは、デバイス前面下部の一番左のボタン、または上の画像に示されている位置の背面にあります。このボタンには複数の機能があります：

- **短押し**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツがないか確認します。操作が行われたことを確認するためにブザーが 1 回鳴ります。このボタンはデバイスを起動するためにもよく使用されます。デバイスがスリープ状態になっていて、ダッシュボードのリフレッシュコマンドがすぐにはデバイスに届かない場合、このボタンを使ってデバイスを起こすことができます。

- **長押し**（今後の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

左ボタンと右ボタンを使用して、ダッシュボードに複数のページが含まれている場合にページ間を移動できます。

- **左ボタン**: 前のページへ移動

- **右ボタン**: 次のページへ移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.jpg" style={{width:700, height:'auto'}}/></div>

別の Wi-Fi ネットワークに接続する必要がある場合は、次の手順に従います：

**ステップ 1.** 左右両方のナビゲーションボタンを同時に 2 秒間長押しします。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[Network Setup](#ネットワーク設定) の手順に再度従って新しいネットワークに接続できます。

### LED インジケータ

- **赤色 LED**:
  - 消灯: フル充電済み、または充電していない状態
  - 常時点灯: 充電中

- **緑色 LED**:
  - 起動時に 3 秒間点灯: デバイスが起動中

### バッテリー動作

バッテリー駆動時：

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電時は通常 3 か月）

- バッテリー残量が 20% 未満になると、デバイスは右上隅にバッテリー残量低下アイコンを表示します

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合は、`analogRead()` 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

### 拡張ピン

reTerminal E1004 には 8 ピンの拡張ヘッダ（J2）が搭載されており、外部センサ、モジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダは、複数の ESP32-S3 GPIO ピンおよび通信インターフェースを外部に引き出しており、DIY プロジェクトの多用途な接続ポイントとなります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.png" style={{width:700, height:'auto'}}/></div>

#### 拡張ヘッダのピン配置

拡張コネクタ（J2）は 2×4 ヘッダ（部品番号 **ST-FH-254-0148-2×4P**）で、2 列に配置された 8 本のピンを提供します。以下のピン位置表記では、左列を `Lx`、右列を `Rx` とし（上から下に番号付け、上図参照）、それぞれの位置を示します：

<div class="table-center">
	<table align="center">
		<tr>
			<th>ピン</th>
			<th>ラベル</th>
			<th>ESP32-S3 ピン</th>
			<th>タイプ</th>
			<th>説明</th>
		</tr>
		<tr>
			<td>L1</td>
			<td>I2C2_SCL</td>
			<td>GPIO40</td>
			<td>GPIO / I2C SCL</td>
			<td>GPIO または I2C クロック信号</td>
		</tr>
		<tr>
			<td>L2</td>
			<td>I2C1_SDA</td>
			<td>GPIO39</td>
			<td>GPIO / I2C SDA</td>
			<td>GPIO または I2C データ信号</td>
		</tr>
		<tr>
			<td>L3</td>
			<td>GND</td>
			<td>-</td>
			<td>グラウンド</td>
			<td>共通グラウンド基準</td>
		</tr>
		<tr>
			<td>L4</td>
			<td>3V3</td>
			<td>-</td>
			<td>電源</td>
			<td>外部デバイス用 3.3V 電源</td>
		</tr>
		<tr>
			<td>R1</td>
			<td>RX1</td>
			<td>GPIO42</td>
			<td>GPIO / UART RX</td>
			<td>GPIO または UART 受信（RX）信号</td>
		</tr>
		<tr>
			<td>R2</td>
			<td>TX1</td>
			<td>GPIO41</td>
			<td>GPIO / UART TX</td>
			<td>GPIO または UART 送信（TX）信号</td>
		</tr>
		<tr>
			<td>R3</td>
			<td>ADC</td>
			<td>GPIO6</td>
			<td>GPIO / ADC</td>
			<td>アナログ入力機能を備えた汎用 I/O</td>
		</tr>
		<tr>
			<td>R4</td>
			<td>GND</td>
			<td>-</td>
			<td>グラウンド</td>
			<td>共通グラウンド基準</td>
		</tr>
	</table>
</div>

## トラブルシューティング

### Q1: デバイスの電源が入らない

- 電源スイッチが ON の位置にあることを確認します
- USB-C ケーブルを接続してデバイスを充電します
- 赤色 LED が常時点灯しているか確認します（充電中を示します）
- バッテリー駆動の場合は、バッテリーが正しく接続され、充電されていることを確認します

### Q2: Wi-Fi に接続できない

- 正しい Wi-Fi パスワードを入力しているか確認します
- Wi-Fi ネットワークが正常に動作していることを確認します
- Wi-Fi ルーターが 2.4GHz ネットワークをサポートしているか確認します（5GHz はサポートされていません）
- デバイスを Wi-Fi ルーターの近くに移動してみます

### Q3: ディスプレイが更新されない

- 更新ボタンを押して手動で更新をトリガーします
- デバイスが Wi-Fi に接続されていることを確認します（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認します
- 問題が解決しない場合は、デバイスを再起動してみます
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常にリフレッシュできるか確認します

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試みます
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

### Q5: macOS でシリアルポート（COM）が見つからない

Mac が USB 経由で reTerminal を認識しない場合は、次の簡易ガイドに従って CH340/CH340K ドライバをインストールしてください：

**ステップ 1. ドライバのダウンロードとインストール**
[official WCH page](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) からドライバをダウンロードし、`CH34xVCPDriver.pkg` を実行します。 
:::tip
macOS によってインストールがブロックされた場合は、**System Settings → Privacy & Security** に移動し、ブロックされた WCH ソフトウェアを探して **Allow** をクリックします。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 2. ドライバ拡張機能を有効化（重要）**
Launchpad から **CH34xVCPDriver** アプリを開き、**Install** をクリックしてから、**System Settings → General → Login Items & Extensions → Driver Extensions** に移動します。**CH34xVCPDriver Extensions** を **ON**（青）に切り替えます。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 3. 接続と確認**
デバイスの **電源スイッチが ON** であることを確認し、**データ通信対応の USB-C ケーブル**（充電専用ではないもの）を使用します。Terminal を開き、次を実行します：
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

出力にデバイスパスが表示されれば、ドライバは正しくインストールされており、reTerminal を使用する準備が整っています。

## リソース

- [reTerminal E1004 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
