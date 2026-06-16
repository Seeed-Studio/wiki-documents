---
description: この記事では、reTerminal E1002 をすぐに使い始めるための手順を案内します。
title: reTerminal E1002 入門ガイド
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-04-28'
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
1. reTerminal を長時間放置していた場合は、デバイスの緑色のボタンを 5 秒間長押しして（工場出荷時ファームウェアを使用して）画面の内容を消去できます。これにより残像を効果的に防ぎ、画面寿命を延ばすことができます。

2. 可能な限り、長時間（1 日以上）同じ画面を表示し続けないでください。残像が発生する可能性がありますので、少なくとも 1 日に 1 回は画面の画像を更新することをお勧めします。デバイスを長期間使用しない場合は、デバイスの表示内容を消去することを推奨します。

3. プログラムの使用やデバッグ時には、画面のリフレッシュ頻度をできるだけ少なくしてください。長時間にわたって高速で画面をリフレッシュすると、画面の寿命が短くなる可能性があります。
:::

## はじめに

reTerminal E1002 は、7.3 インチのオープンソースフルカラー電子ペーパーディスプレイで、最大 3 か月の優れたバッテリー寿命を備えています。ESP32-S3 を搭載し、ノーコード UI プラットフォームである SenseCraft HMI をネイティブサポートしており、ダッシュボードを簡単に作成できます。また、さらなる開発のために Home Assistant、TRMNL E-ink dashboard、Arduino、ESP-IDF をサポートします。E Ink® Spectra™ 6 フルカラー電子ペーパーディスプレイにより、デジタルフォトフレームやカラフルなダッシュボードの可視化に最適です。

### 特長

- **美しく、すぐに使える E Ink® Spectra™6 カラー電子ペーパーディスプレイ**
- **3 か月のバッテリー寿命を実現する超低消費電力**
- **SenseCraft HMI によるノーコード UI 設計とデプロイ**
- **一般的なソフトウェアプラットフォームに対応**
- **柔軟なハードウェアおよびソフトウェアのカスタマイズ**

## 仕様

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">項目</th>
			<th align="center">説明</th>
		</tr>
		<tr>
			<td align="center"><strong>製品名</strong></td>
			<td align="center">reTerminal E1002</td>
		</tr>
		<tr>
			<td align="center"><strong>プロセッサ</strong></td>
			<td align="center">ESP32-S3（8MB PSRAM 搭載）</td>
		</tr>
		<tr>
			<td align="center"><strong>ストレージ</strong></td>
			<td align="center">32MB フラッシュ、Micro SD カード対応</td>
		</tr>
		<tr>
			<td align="center"><strong>ディスプレイ</strong></td>
			<td align="center">7.3 インチ フルカラー（E Ink® Spectra™ 6）</td>
		</tr>
		<tr>
			<td align="center"><strong>解像度</strong></td>
			<td align="center">800 x 480 ピクセル</td>
		</tr>
		<tr>
			<td align="center"><strong>Micro SD カード</strong></td>
			<td align="center">最大 32GB SD カード対応、FAT32 フォーマット</td>
		</tr>
		<tr>
			<td align="center"><strong>無線接続</strong></td>
			<td align="center">2.4GHz 802.11 b/g/n Wi-Fi、Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>センサー</strong></td>
			<td align="center">温度・湿度センサー</td>
		</tr>
		<tr>
			<td align="center"><strong>マイク</strong></td>
			<td align="center">音声インタラクション用途向けに予約</td>
		</tr>
		<tr>
			<td align="center"><strong>ブザー</strong></td>
			<td align="center">サウンドアラート用ブザー</td>
		</tr>
		<tr>
			<td align="center"><strong>バッテリー</strong></td>
			<td align="center">2000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>電源入力</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>動作温度</strong></td>
			<td align="center">0〜40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>寸法</strong></td>
			<td align="center">176mm x 120mm x 53mm（スタンド付き）/ 17mm（スタンドなし）</td>
		</tr>
	</table>
</div>

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/207.png" style={{width:1000, height:'auto'}}/></div><br />

reTerminal E1002 のハードウェアには次のものが含まれます：

1. **7.3 インチ フルカラー電子ペーパーディスプレイ**：800×480 解像度のフルカラーディスプレイ
2. **ボタン**：手動で画面を操作するためにデバイス上部に配置
3. **マイク**
4. **MicroSD カードスロット**：ストレージ拡張用
5. **電源スイッチ**：デバイス背面にあり、電源のオン/オフに使用
6. **ステータス LED**：ユーザーインジケーター（緑）
7. **電源 LED**：充電インジケーター（赤）
8. **USB-C ポート**：充電およびファームウェア更新用
9. **拡張ポート**：VDD、GND、UART、I2C、および GPIO 接続を提供する 8 ピン拡張ヘッダー
10. **スタンド取り付けインサート**：3D プリント製サポートスタンドを取り付けるために、デバイス背面下部に埋め込まれたナット（ねじ穴）

## セットアップ

### 予備設定

**ステップ 1.** reTerminal E1002 を開封し、すべての同梱物が揃っていることを確認します：

- reTerminal E1002 本体
- USB-C ケーブル
- クイックスタートガイド
- ロングドライバー
- ねじ
- 3D プリント製サポートスタンド

**ステップ 2.**（任意）デバイスを立てて設置するために 3D プリント製サポートスタンドを取り付けます：

同梱されている 3D プリント製サポートスタンドを見つけます。埋め込みナットがある reTerminal E1002 背面下部の指定された取り付けエリアに、サポートスタンドを合わせて配置します。ロングドライバーを使用して、reTerminal E1002 背面の埋め込みナットにねじを締め込み、スタンドを本体に固定します。しっかり取り付けられたら、スタンドによって本体が直立するよう、平らな場所に reTerminal E1002 を設置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
スタンドは固定の視野角を提供し、角度調整はできません。この固定位置は、ほとんどの使用シーンで最適な視認性を得られるよう設計されています。
:::

**ステップ 3.**（任意）デジタルフォトフレームとして使用する場合や追加ストレージが必要な場合は、microSD カードを挿入します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E シリーズ電子ペーパーディスプレイは、32GB までの Fat32 形式の MicroSD カードのみをサポートします。  
32GB SD カードはデフォルトで exFAT 形式になっています。FAT32 に再フォーマットすると、正常にマウントされ、画像の保存に使用できます。
:::

**ステップ 4.**（任意）必要に応じて USB ドライバーをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1002 と正しく通信するために USB ドライバーをインストールする必要がある場合があります：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 システムには通常、ドライバーが標準で含まれています
- Windows 10 以前のバージョンでは、[WCH 公式サイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)から CH341 ドライバーをダウンロードしてインストールする必要がある場合があります

</TabItem>

<TabItem value="MacOS" label="MacOS">

[WCH 公式サイト](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)から CH34X ドライバーをダウンロードしてインストールします

</TabItem>

<TabItem value="Linux" label="Linux">

ほとんどの最新の Linux ディストリビューションには、必要なドライバーが標準で含まれています

</TabItem>
</Tabs>

### 電源を入れる

**ステップ 1.** 電源スイッチを **ON** 位置にスライドしてデバイスの電源を入れます。電源スイッチは本体背面にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**ステップ 2.** 初回起動時、デバイスには製品情報とネットワーク設定手順が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**ステップ 3.** 緑色のユーザー LED が約 30 秒間点灯し、デバイスの電源が入り初期化中であることを示します。デバイスを 30 秒間操作しない場合、電力を確保するために自動的にスリープモードに入り、LED ライトは自動的に消灯します。

:::tip
したがって、この時間内に次のネットワーク設定手順を完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。このような場合は、デバイスの緑色の Wake ボタンを 1 回クリックしてデバイスを復帰させてください。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup via PC" label="PC 経由でのネットワーク設定" default>

**ステップ 1.** スマートフォンまたはコンピュータからデバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワーク認証情報は `reTerminal E1002-{MAC Adress}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 2.** 接続されると、スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされるはずです。自動的に開かない場合は、ブラウザを開き `192.168.4.1` にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ 3.** 使用するローカル Wi-Fi ネットワークを選択し、パスワードを入力してから "Connect" をクリックします。

:::note
reTerminal E シリーズ電子ペーパーディスプレイは 2.4GHz WiFi ネットワークのみをサポートし、5GHz など他の帯域には対応していません。
:::

**ステップ 4.** 接続に成功すると、デバイスが確認音を鳴らし、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**ステップ 1.** Web ブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**ステップ 2.** 左側のサイドバーで **Device** をクリックして Device ページに入り、左上の **+ New Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**ステップ 3.** デバイスに名前を付け、デバイスの画面に表示されているペアリングコードを入力して **Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4.** ペアリングが完了すると、デバイスに最初のダッシュボードを作成するよう促すメッセージが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

この方法では、SenseCraft モバイルアプリを使用してデバイスのネットワークを設定し、Bluetooth 経由で SenseCraft アカウントに追加します。

まず、SenseCraft アプリをダウンロードします。Google Play ストアまたは Apple App Store で「SenseCraft」と検索して見つけることができます。あるいは、この Web サイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして **User** タブに移動します。**Device Bluetooth Configuration** をタップして設定を開始します。

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

**ステップ 5.** アプリは Wi-Fi の認証情報をデバイスに送信し、SenseCraft アカウントにデバイスを追加します。完了すると「Device added successfully」というメッセージが表示されます。**Start exploring!** をタップして次に進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 6.** reTerminal はアプリのメイン **Device** タブにあるデバイス一覧に表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 7.** 一覧のデバイスをタップすると、その **Device Detail** ページを表示できます。ここからデバイスの管理や写真のアップロードが可能です。より高度なダッシュボードやキャンバスデザインを行う場合は、SenseCraft の Web ブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### ファームウェアの更新

デバイスが SenseCraft アカウントに正常に追加されると、プラットフォームは自動的にファームウェアバージョンを確認します。新しいファームウェアが利用可能な場合は、更新するように促されます。

また、いつでも手動でファームウェアバージョンを確認することもできます：

**ステップ 1.** **Device** ページで reTerminal E1002 を見つけて詳細を表示し、**現在のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**ステップ 2.** 左側のサイドバーで **Tools** をクリックし、**Firmware Flasher** タブを開いて、このデバイス向けに利用可能な **最新のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** 現在のバージョンが最新バージョンより古い場合は、Firmware Flasher ページの 3 ステップフローに従って更新します：

1. **Select your device** — reTerminal E1002 を USB-C ケーブルでコンピュータに接続し、電源スイッチが **ON** になっていることを確認してから **Select** をクリックし、リストからデバイスを選択します。

2. **Select firmware** — リリースオプションのプルダウンから最新のファームウェアを選択します。

3. **Flash** — **Flash** をクリックして更新が完了するまで待ちます。デバイスを工場出荷状態にリセットしたい場合にのみ **Full Flash** を有効にしてください（すべてのデータ、設定、デザインが消去されます）。

:::note

1. ファームウェアを更新することで、最適なパフォーマンスと最新機能へのアクセスが保証されます。

2. デバイスがシャットダウンまたはスリープ状態のときは、ファームウェアを正しくフラッシュすることはできません。デバイスに対して正しいポートを選択してもファームウェアのフラッシュ進行がまったく表示されない場合は、ユニット上部の緑色のボタンを押してデバイスを起動し、再試行する必要があるかもしれません。

3. **標準の Flash を実行** すると設定を保持できます：Wi-Fi、デプロイ済みデザイン、画像は保持されます。**Full Flash を実行して一からやり直す** 場合：すべてのデータ、設定、デザインが消去されます（工場出荷状態）。

:::

## reTerminal E1002 にコンテンツを表示する

デバイスのペアリングが完了したら、好きなコンテンツの表示を開始できます。ここでは **SenseCraft HMI** を推奨します。これはノーコードのクラウドプラットフォームで、数クリックで reTerminal E1002 向けのコンテンツをデザインしてデプロイできます。

SenseCraft HMI には、チュートリアルや機能ドキュメントが揃った専用 Wiki があります。詳細なガイド（アカウント設定、ファームウェアフラッシュ、高度なエディタの使い方、デプロイなど）については、以下を参照してください：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

本記事は製品の **Getting Started** であるため、同じ内容はここでは繰り返しません。以下では、reTerminal E1002 に素早く何かを表示する方法のみを紹介します。

### Home — コミュニティテンプレートから始める

画面に何かを表示する最も手早い方法は、既製のテンプレートから始めることです。SenseCraft HMI の **Home** ページには、コミュニティによって提供され、継続的に増え続けている多数のテンプレートがあります。ダッシュボード、時計、天気パネル、名言ウォール、カレンダー、フォトフレームなどです。ギャラリーを閲覧して好みのデザインを選び、ワンクリックで reTerminal E1002 にデプロイできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 自分のコンテンツを管理・デザインする

**Workspace** ページでは、現在バインドされているデバイスに表示されるすべてのページとコンテンツを管理します。ここから次のことができます：

- ゼロから独自のデザインページを作成し、配置する
- 画像をアップロードし、スライドショーとして整理する
- テキスト、ウィジェット、図形、データ、RSS フィード、Web コンテンツなどを 1 つのドラッグ＆ドロップエディタで組み合わせる
- 最終的なデザインをワイヤレスで reTerminal E1002 にデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

デザインを保存したら、**Deploy to Device** をクリックし、ペアリング済みの reTerminal E1002 を選択すると、コンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイが更新されてデザインが表示され、複数ページを作成している場合は、デバイスの左右のナビゲーションボタンを使ってページを切り替えることができます。

その他すべての内容—エディタの詳細な操作方法、ヒント、リリースノートなど—については、[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/) を参照してください。

## デバイスの操作

### リフレッシュボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

デバイス上部のリフレッシュボタンには、次のような機能があります：

- **短押し**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツがないか確認します。操作が行われたことを確認するためにブザーが 1 回鳴ります。このボタンはデバイスを起動するためにもよく使用されます。デバイスがスリープ状態になっていて、ダッシュボードのリフレッシュコマンドがすぐにはデバイスに届かない場合、このボタンを使ってデバイスを起こすことができます。

- **長押し**（今後の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

左ボタンと右ボタンを使用して、ダッシュボードに複数のページがある場合にページ間を移動できます。

- **左ボタン**: 前のページへ移動

- **右ボタン**: 次のページへ移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

別の Wi-Fi ネットワークに接続する必要がある場合:

**ステップ 1.** 左右両方のナビゲーションボタンを同時に 2 秒間長押しします。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[Network Setup](#ネットワークセットアップ) の手順に従って新しいネットワークに再接続できます。

### LED インジケータ

- **赤色 LED**:
  - 消灯: フル充電済み、または充電していない状態
  - 常時点灯: 充電中

- **緑色 LED**:
  - 起動時に 30 秒間点灯: デバイスが起動中

### バッテリー動作

バッテリー駆動時:

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電時は通常 3 か月）

- バッテリー残量が 20% 未満になると、デバイスは右上隅にバッテリー残量低下アイコンを表示します

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合は、`analogRead()` 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

### 拡張ピン

reTerminal E1002 には 8 ピンの拡張ヘッダ (J2) が搭載されており、外部センサ、モジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダは複数の ESP32-S3 GPIO ピンおよび通信インターフェースを外部に引き出しており、DIY プロジェクトのための多用途な接続ポイントとなります。

#### 拡張ヘッダのピン配置

8 ピン拡張ヘッダ (J2) のピン配置は次のとおりです:

<div class="table-center">
	<table align="center">
		<tr>
			<th>ピン (上から下)</th>
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
			<td>共通グラウンド基準</td>
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
			<td>アナログ入力機能を備えた汎用 I/O（ADC1 チャネル 4）</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIO または UART 送信 (TX) 信号</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIO または UART 受信 (RX) 信号</td>
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
- 問題が解決しない場合は、デバイスを再起動してみてください
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常にリフレッシュできるか確認してください

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試みます
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

### Q5: macOS でシリアルポート (COM) が見つからない

Mac が USB 経由で reTerminal を認識しない場合は、次の簡易ガイドに従って CH340/CH340K ドライバをインストールしてください:

**ステップ 1. ドライバのダウンロードとインストール**

:::tip
macOS によってインストールがブロックされた場合は、**System Settings → Privacy & Security** に移動し、ブロックされた WCH ソフトウェアを探して **Allow** をクリックします。
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 2. ドライバ拡張機能を有効化（重要）**
Launchpad から **CH34xVCPDriver** アプリを開き、**Install** をクリックし、その後 **System Settings → General → Login Items & Extensions → Driver Extensions** に移動します。**CH34xVCPDriver Extensions** を **ON**（青）に切り替えます。
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 3. 接続と確認**
デバイスの **電源スイッチが ON** であることを確認し、**データ通信対応の USB-C ケーブル**（充電専用ではないもの）を使用します。Terminal を開き、次を実行します:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

出力にデバイスパスが表示されれば、ドライバは正しくインストールされており、reTerminal を使用する準備が整っています。

### Q6: デバイスが充電されない

デバイスが充電されない場合は、Apple 以外のブランドの電源アダプタに充電器を交換してみてください。

## リソース

- [reTerminal E1002 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1_2_SCH_251120.pdf)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [SenseCraft HMI プラットフォーム ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview)
- [外装全体 3D モデル STP ファイル](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reterminal_esp-250904.stp)
<!-- - [GitHub Repository](/ja/getting_started_with_reterminal_e1002) -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
