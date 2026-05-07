---
description: reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備えた 10.3 インチのオープンソース白黒 ePaper ディスプレイで、HMI ファームウェア v1.1.2 からタッチ操作をサポートします。
sku: 100090602
title: reTerminal E1003 入門ガイド
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
last_update:
  date: 4/23/2026
  author: Citric
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003/
updatedAt: '2026-04-21'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1003 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備え、最大 6 か月のバッテリー駆動が可能な、10.3 インチのタッチ対応オープンソース白黒 ePaper ディスプレイです。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである SenseCraft HMI をネイティブにサポートします。スマートホームのダッシュボードの可視化と制御、オフィスの情報表示、教育プロジェクトなど、あらゆる用途において、このすぐに使えるタッチ対応デバイスは、美しい表示と柔軟なカスタマイズ性でニーズに応えます。

:::tip
reTerminal E1003 のタッチ操作は、SenseCraft HMI ファームウェア v1.1.2 以降でサポートされています。
タッチ関連ライブラリのサポートは、今後のオープンソース公開で提供予定であり、パネルをより柔軟にカスタマイズできるようになります。最新情報は追って共有されます。


reTerminal E1003 向けの ESPHome サポートは開発中で、今後のリリースで利用可能になる予定です。
:::

### 特長

- 3 秒フルリフレッシュによる高速応答 ePaper ダッシュボード
- SenseCraft HMI とタッチサポートでインタラクティブなインターフェースを簡単構築
- 16 階調グレースケールと高解像度 ePaper ディスプレイによる鮮明な表示
- 最大 6 か月のバッテリー駆動で、真のケーブルレス設置を実現
- 柔軟なハードウェア & ソフトウェアカスタマイズ


### 仕様

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">項目</th>
			<th align="center">説明</th>
		</tr>
		<tr>
			<td align="center"><strong>製品名</strong></td>
			<td align="center">reTerminal E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>プロセッサ</strong></td>
			<td align="center">ESP32-S3（8MB PSRAM 搭載）</td>
		</tr>
		<tr>
			<td align="center"><strong>ストレージ</strong></td>
			<td align="center">32MB Flash、Micro SD カード対応</td>
		</tr>
		<tr>
			<td align="center"><strong>ディスプレイ</strong></td>
			<td align="center">10.3 インチ 白黒 / 16 階調グレースケール</td>
		</tr>
		<tr>
			<td align="center"><strong>解像度</strong></td>
			<td align="center">1404 x 1872 ピクセル</td>
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
			<td align="center"><strong>センサ</strong></td>
			<td align="center">温度・湿度センサ</td>
		</tr>
		<tr>
			<td align="center"><strong>マイク</strong></td>
			<td align="center">音声インタラクション用途向けに予約</td>
		</tr>
		<tr>
			<td align="center"><strong>オーディオ</strong></td>
			<td align="center">ブザーによるサウンドアラート</td>
		</tr>
		<tr>
			<td align="center"><strong>バッテリー</strong></td>
			<td align="center">3000mAh</td>
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
			<td align="center">224mm x 187mm x 18.6mm</td>
		</tr>
	</table>
</div>

### ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **ePaper ディスプレイ：** 10.3 インチ、16 階調グレースケールの ePaper ディスプレイで、静電容量方式タッチをサポートします。
2. **ボタン**： デバイス上部に配置されており、手動で画面を操作するために使用します。
3. **マイク：** 音声インタラクション用途向けに予約されています。
4. **MicroSD カード / TF カードスロット：** 追加ストレージ用（FAT32、最大 32GB）。
5. **電源スイッチ：** デバイスの電源をオンまたはオフにします。
6. **赤色充電 LED：** バッテリーの充電状態を示します。
7. **緑色ステータス LED：** 現在の動作状態またはシステム状態を示します。
8. **USB-C データ & 充電ポート：** デバイスの充電およびデータ転送に使用します。
9. **拡張ポート：** VDD、GND、UART、I2C、および GPIO 接続を提供するピンヘッダで、外部センサ、モジュール、周辺機器を接続できます。
10. **ブザー：** サウンドアラート用の音声出力穴です。
11. **スタンド取り付けインサート：** デバイス背面に埋め込まれたナット（ネジ穴）で、3D プリント製サポートスタンドを取り付けるために使用します。

### 応用例

- 3 秒フルリフレッシュによる高速応答 ePaper ダッシュボード
- SenseCraft HMI とタッチサポートでインタラクティブなインターフェースを簡単構築
- 16 階調グレースケールと高解像度 ePaper ディスプレイによる鮮明な表示
- 最大 6 か月のバッテリー駆動で、真のケーブルレス設置を実現
- 柔軟なハードウェア & ソフトウェアカスタマイズ

## セットアップ

reTerminal E1003 には、**SenseCraft HMI** をサポートするファームウェアがプリインストールされています。SenseCraft HMI は、パーソナライズされたダッシュボードを簡単に設計・デプロイできるノーコードプラットフォームです。

### 事前準備

**ステップ 1.** reTerminal E1003 を開封し、同梱物がすべて揃っていることを確認します：

- reTerminal E1003 本体
- USB-C ケーブル
- クイックスタートガイド
- ロングドライバー
- ネジ
- 3D プリント製サポートスタンド

**ステップ 2.**（任意）3D プリント製サポートスタンドを取り付けて、デバイスを立てて設置します：

同梱されている 3D プリント製サポートスタンドを見つけます。reTerminal E1003 背面の、埋め込みナットがある所定の取り付け位置にスタンドを合わせます。ロングドライバーを使用して、背面の埋め込みナットにネジを締め込み、スタンドを本体に固定します。しっかり固定できたら、スタンドで本体を支えられるよう、平らな場所に reTerminal E1003 を立てて設置します。

:::note
スタンドは固定の視野角を提供し、角度調整はできません。この固定位置は、ほとんどの使用シーンで最適な視認性を得られるよう設計されています。
:::

**ステップ 3.**（任意）デジタルフォトフレームとして使用する場合や、追加ストレージが必要な場合は microSD カードを挿入します。

:::note
reTerminal E シリーズ ePaper ディスプレイは、32GB までの MicroSD カードのみをサポートし、フォーマットは Fat32 のみ対応です。  
32GB SD カードは既定では exFAT でフォーマットされています。FAT32 に再フォーマットすると、正常にマウントされ、画像の保存に使用できます。
:::

**ステップ 4.**（任意）必要に応じて USB ドライバをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1003 と正しく通信するために USB ドライバをインストールする必要がある場合があります：

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** 初回起動時、デバイスには製品情報とネットワーク設定手順が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/210.png" style={{width:600, height:'auto'}}/></div><br />

**ステップ 3.** 緑色のユーザー LED が約 30 秒間点灯し、デバイスの電源が入り初期化中であることを示します。電源を確保するため、デバイスを 30 秒間操作しないと、自動的にスリープモードに入り、LED は自動的に消灯します。

:::tip
そのため、この時間内にネットワーク設定の次の手順を完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。この場合は、本体上部の **Refresh** ボタンを押してデバイスを復帰させてください。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup vis PC" label="PC からのネットワーク設定" default>

**ステップ 1.** スマートフォンまたはコンピュータから、デバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワーク識別情報は `reTerminal E1003-{MAC Address}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**ステップ 2.** 接続が完了すると、スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされるはずです。自動で開かない場合は、ブラウザを開き `192.168.4.1` にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**ステップ 3.** 自宅やオフィスの Wi-Fi ネットワークを選択し、パスワードを入力してから "Connect" をクリックします。

:::note
reTerminal E シリーズ ePaper ディスプレイは、2.4GHz WiFi ネットワークのみをサポートし、5GHz など他の帯域には対応していません。
:::

**ステップ 4.** 接続に成功すると、デバイスが確認音を鳴らし、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**ステップ 1.** ブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/211.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Network Setup vis SenseCraft APP">

この方法では、SenseCraft モバイルアプリを使用してデバイスのネットワークを構成し、Bluetooth 経由で SenseCraft アカウントに追加します。

まず、SenseCraft アプリをダウンロードします。Google Play ストアまたは Apple App Store で「SenseCraft」と検索して見つけることができます。あるいは、この Web サイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

**ステップ 1.** SenseCraft アプリを開き、アカウントにサインインして **User** タブに移動します。**Device Bluetooth Configuration** をタップして設定を開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 2.** 「Please select the device type」画面で **reTerminal E1003** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。スマートフォンの Bluetooth が有効になっていることを確認します。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストから自分のデバイスを選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 4.** Bluetooth で接続されると、アプリから Wi-Fi 接続の設定を求められます。プルダウンリストからローカルの 2.4GHz Wi-Fi ネットワークを選択し、パスワードを入力して **Next** をタップします。

:::note
デバイスは 2.4G Wi-Fi ネットワーク経由でのみ構成できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5.** アプリは Wi-Fi の認証情報をデバイスに送信し、SenseCraft アカウントに追加します。完了すると「Device added successfully」というメッセージが表示されます。**Start exploring!** をタップして次に進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 6.** reTerminal はアプリのメイン **Device** タブにあるデバイス一覧に表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 7.** 一覧のデバイスをタップすると、その **Device Detail** ページを表示できます。ここからデバイスを管理したり、写真をアップロードしたりできます。より複雑なダッシュボードやキャンバスデザインについては、SenseCraft の Web ブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### ファームウェアの更新

デバイスが SenseCraft アカウントに正常に追加されると、プラットフォームは自動的にファームウェアバージョンを確認します。新しいファームウェアが利用可能な場合は、更新するように促されます。

また、いつでも手動でファームウェアバージョンを確認することもできます：

**ステップ 1.** **Device** ページで reTerminal E1003 を見つけて詳細を表示し、**現在のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**ステップ 2.** 左側のサイドバーで **Tools** をクリックし、**Firmware Flasher** タブを開いて、このデバイスで利用可能な **最新のファームウェアバージョン** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** 現在のバージョンが最新バージョンより古い場合は、Firmware Flasher ページの 3 ステップフローに従って更新します：

1. **デバイスを選択** — reTerminal E1003 を USB-C ケーブルでコンピュータに接続し、電源スイッチが **ON** になっていることを確認してから **Select** をクリックし、リストからデバイスを選択します。

2. **ファームウェアを選択** — リリースオプションのプルダウンから最新のファームウェアを選択します。

3. **Flash** — **Flash** をクリックして更新が完了するまで待ちます。デバイスを工場出荷状態にリセットしたい場合にのみ **Full Flash** を有効にしてください（すべてのデータ、設定、デザインが消去されます）。

:::note

1. ファームウェアを更新することで、最適なパフォーマンスと最新機能へのアクセスが保証されます。reTerminal E1003 のタッチ操作には、ファームウェア **v1.1.2 以降** が必要です。

2. デバイスがシャットダウンまたはスリープ状態のときは、ファームウェアを正しく書き込むことはできません。デバイスに対して正しいポートを選択してもファームウェア書き込みの進行がまったく表示されない場合は、ユニット上部の **Refresh** ボタンを押してデバイスを起動し、再試行する必要があるかもしれません。

3. **標準の Flash を実行** すると設定を保持できます：Wi-Fi、デプロイ済みデザイン、画像は保持されます。**Full Flash を実行して一からやり直す** 場合：すべてのデータ、設定、デザインが消去されます（工場出荷状態）。

:::

## reTerminal E1003 にコンテンツを表示する

デバイスのペアリングが完了したら、好きなコンテンツを表示するために使用できます。おすすめは **SenseCraft HMI** です。これはノーコードのクラウドプラットフォームで、数回のクリックだけで reTerminal E1003 にコンテンツをデザインしてデプロイできます。

SenseCraft HMI には、チュートリアルや機能ドキュメントが揃った専用 Wiki があります。詳細なガイド（アカウント設定、ファームウェアの書き込み、高度なエディタの使い方、デプロイなど）については、以下を参照してください：

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

本記事は製品の **Getting Started** であるため、同じ内容はここでは繰り返しません。以下では、reTerminal E1003 に素早く何かを表示する方法のみを紹介します。

### Home — コミュニティテンプレートから始める

画面に何かを表示する最も速い方法は、既製のテンプレートから始めることです。SenseCraft HMI の **Home** ページには、コミュニティによって提供されたテンプレートが多数あり、今も増え続けています。ダッシュボード、時計、天気パネル、名言ウォール、カレンダー、フォトフレームなどがあります。ギャラリーを閲覧して気に入ったデザインを選び、ワンクリックで reTerminal E1003 にデプロイできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 自分のコンテンツを管理・デザインする

**Workspace** ページでは、現在バインドされているデバイスに表示されるすべてのページとコンテンツを管理します。ここから次のことができます：

- ゼロから独自のデザインページを作成して配置する
- 画像をアップロードし、スライドショーとして整理する
- テキスト、ウィジェット、図形、データ、RSS フィード、Web コンテンツなどを 1 つのドラッグ＆ドロップエディタで組み合わせる
- 最終的なデザインをワイヤレスで reTerminal E1003 にデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

デザインを保存したら、**Deploy to Device** をクリックし、ペアリング済みの reTerminal E1003 を選択すると、コンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイが更新され、デザインが表示されます。ファームウェア **v1.1.2 以降** では、ePaper 画面を直接タップして、タッチ対応ページと対話することもできます。

その他すべての内容 — 詳細なエディタ操作、ヒント、リリースノートなどについては、[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/) を参照してください。

## デバイスの操作

### Refresh ボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

デバイス上部の Refresh ボタンには、次のような機能があります：

- **短押し**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツがないか確認します。ブザーが 1 回鳴って操作が確認されます。このボタンはデバイスを起動するためにもよく使用されます。デバイスがスリープ状態になっていて、ダッシュボードのリフレッシュコマンドがすぐにはデバイスに届かない場合、このボタンを使ってデバイスを起こすことができます。

- **長押し**（今後の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

ダッシュボードに複数のページがある場合、左右のボタンでページ間を移動できます：

- **左ボタン**：前のページに移動

- **右ボタン**：次のページに移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

別の Wi-Fi ネットワークに接続する必要がある場合：

**ステップ 1.** 左右両方のナビゲーションボタンを同時に 2 秒間長押しします。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[Network Setup](#network-setup) の手順に再度従って新しいネットワークに接続できます。

### LED インジケータ

- **赤色 LED**：
  - 消灯：フル充電済み、または充電していない状態
  - 常時点灯：充電中

- **緑色 LED**：
  - 起動時に 30 秒間点灯：デバイスが起動中

### バッテリー動作

バッテリー電源で動作している場合：

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（デフォルト設定でフル充電時は通常 3 か月）

- バッテリー残量が 20% 未満になると、デバイスは右上隅にバッテリー残量低下アイコンを表示します

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合、`analogRead()` 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

### 拡張ピン

reTerminal E1003 には 8 ピンの拡張ヘッダ (J2) が搭載されており、外部センサ、モジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダは複数の ESP32-S3 GPIO ピンと通信インターフェースを外部に引き出しており、DIY プロジェクトのための多用途な接続ポイントとなります。

#### 拡張ヘッダのピン配置

8 ピン拡張ヘッダ (J2) のピン配置は次のとおりです：

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
- デバイスが Wi-Fi に接続されているか確認します（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認します
- 問題が解決しない場合は、デバイスを再起動してみます
- 再起動後もデバイスが反応しない場合は、SenseCraft HMI プラットフォームで対応するファームウェアを書き込み直し、デバイスが正常にリフレッシュできるか確認します

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試みます
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

### Q5: macOS でシリアルポート (COM) が見つからない

Mac が USB 経由で reTerminal を認識しない場合は、CH340/CH340K ドライバをインストールするために次の簡易ガイドに従ってください：

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

出力にデバイスパスが表示されれば、ドライバは正しくインストールされており、reTerminal を使用する準備が整っています！

## リソース

- [reTerminal E1003 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
