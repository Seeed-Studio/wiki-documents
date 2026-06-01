---
description: reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備えた 10.3 インチのオープンソース白黒 ePaper ディスプレイで、HMI ファームウェア v1.1.2 以降でタッチ操作をサポートします。
title: reTerminal E1003 入門ガイド
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
sku: 100090602
last_update:
  date: 05/09/2026
  author: dimo
createdAt: '2026-03-18'
updatedAt: '2026-05-09'
url: https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E1003 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備えた 10.3 インチのタッチ対応オープンソース白黒 ePaper ディスプレイで、1 日 1 回のリフレッシュを前提として最長 6 か月のバッテリー駆動が可能です。ESP32-S3 を搭載し、ダッシュボードを簡単に作成できるノーコード UI プラットフォームである [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) をネイティブにサポートします。スマートホームのダッシュボードの可視化と制御、オフィスの情報表示、教育プロジェクトなど、あらゆる用途に対応する、すぐに使えるタッチ対応デバイスとして、美しい表示と柔軟なカスタマイズ性を提供します。

:::tip
reTerminal E1003 のタッチ操作は、[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) ファームウェア v1.1.2 以降でサポートされています。現在の最新バージョンは v1.1.4.3 であり、最良の体験のため、このバージョンへのアップデートを推奨します。
タッチ関連ライブラリのサポートは、今後のオープンソース公開で提供予定であり、パネルのカスタマイズ性がさらに高まります。詳細なアップデートは追って共有されます。

reTerminal E1003 向けの ESPHome サポートは開発中で、今後のリリースで利用可能になる予定です。
:::

### 特長

- ePaper ダッシュボードの応答性を高める 3 秒フルリフレッシュ
- [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) とタッチサポートでインタラクティブなインターフェースを簡単構築
- 16 階調グレースケールと高解像度 ePaper ディスプレイによる鮮明な表示
- 1 日 1 回のリフレッシュで最長 6 か月のバッテリー寿命
- 柔軟なハードウェア & ソフトウェアカスタマイズ


## 仕様

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
			<td align="center">32 MB フラッシュ；microSD カード対応</td>
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
			<td align="center">最大 32 GB（FAT32）までの microSD カードに対応</td>
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


## アプリケーション

- **ホームオートメーションダッシュボード：** Home Assistant を介して、温度、湿度、空気質などのスマートホームデータをリアルタイムに表示します。
- **低消費電力白黒電子フォトフレーム：** [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) またはアプリを使用して、アルバム内の写真を遠隔から簡単に複数枚アップロードできます。大型・高解像度の白黒電子ペーパー画面と組み合わせることで、超低消費電力の画像表示を実現し、バッテリー寿命を心配する必要がなくなります。
- **スマートオフィスディスプレイ：** 会議室の空き状況、オフィスのスケジュール、案内表示などを、低消費電力で常時表示可能な ePaper ディスプレイに表示します。
- **小売・公共情報ディスプレイ：** メニュー、時刻表、占有状況インジケータなどに適した、長時間駆動の低消費電力 ePaper サインとして利用できます。


## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **画面リフレッシュボタン：** デバイス上部にあり、手動で画面をリフレッシュします。
2. **ページアップ・ダウンボタン：** デバイス上部にあり、ページ間の移動に使用します。
3. **Wi-Fi アンテナエリア：** デバイス下部にあり、Wi-Fi 接続に使用されます。
4. **MicroSD カード / TF カードスロット：** 追加ストレージ用（FAT32、最大 32GB）。
5. **電源スイッチ：** デバイスの電源をオン／オフします。
6. **赤色電源 LED：** バッテリーの充電状態を示します。
7. **緑色ステータス LED：** 現在の動作状態またはシステム状態を示します。
8. **USB-C データ・充電ポート：** デバイスの充電およびデータ転送に使用します。
9. **拡張ポート：** 外部センサ、モジュール、周辺機器用に、VDD、GND、I2C、および GPIO 接続を提供するピンヘッダです。
10. **スタンド取り付け用ネジ穴：** デバイス背面にあるねじ穴で、サポートスタンドを固定します。
11. **3D プリントサポートスタンド：** デバイスを平らな面で直立させるための付属スタンドアクセサリです。
12. **スタンド取り付け用ネジ：** サポートスタンドをデバイスに固定するためのネジです。

## セットアップ

reTerminal E1003 には、ノーコードプラットフォームである **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** をサポートするファームウェアがプリインストールされており、パーソナライズされたダッシュボードを簡単に設計・デプロイできます。

### 事前準備

**ステップ 1.** reTerminal E1003 を開封し、すべての同梱物が揃っていることを確認します：

- reTerminal E1003 ePaper ディスプレイ
- USB Type-C ケーブル
- クイックスタートガイド
- ドライバー
- ネジ
- 3D プリントサポートスタンド

**ステップ 2.**（任意）デバイスを直立させるために 3D プリントサポートスタンドを取り付けます：

同梱されている 3D プリントサポートスタンドを見つけます。reTerminal E1003 背面の、埋め込みナットが配置されている指定の取り付けエリアにスタンドを合わせます。ドライバーを使用して、背面の埋め込みナットにネジを締め込み、スタンドをデバイスに固定します。しっかり固定できたら、スタンドがデバイスを直立させられるよう、平らな面に reTerminal E1003 を設置します。

:::note
スタンドは固定の視野角を提供し、角度調整はできません。この固定位置は、ほとんどの使用シーンで最適な視認性を得られるよう設計されています。
:::

**ステップ 3.**（任意）デジタルフォトフレームとして使用する場合や追加ストレージが必要な場合は、microSD カードを挿入します。

:::note
reTerminal E シリーズ ePaper ディスプレイは、FAT32 形式の最大 32GB までの MicroSD カードのみをサポートします。  
32GB の SD カードはデフォルトで exFAT 形式になっています。FAT32 に再フォーマットすると、正常にマウントされ、画像の保存に使用できるようになります。
:::

**ステップ 4.**（任意）必要に応じて USB ドライバーをインストールします：

お使いのオペレーティングシステムによっては、reTerminal E1003 と正しく通信するために USB ドライバーをインストールする必要がある場合があります：

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Windows 11 システムには通常、ドライバーが標準で含まれています
- Windows 10 以前のバージョンでは、[WCH 公式サイト](https://www.wch-ic.com/downloads/CH341SER_ZIP.html) から CH341 ドライバーをダウンロードしてインストールする必要がある場合があります

</TabItem>

<TabItem value="MacOS" label="MacOS">

Mac を使用していて、これまでに CH34X ドライバーを手動インストールしていない場合は、以下の手順に従ってインストールを完了してください：

**ステップ 1. ドライバーのダウンロードとインストール**

**Step 1. Download and Install the Driver**
Download the driver from the [official WCH page](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) and run `CH34xVCPDriver.pkg`. 
:::tip
If macOS blocks the installation, go to **System Settings → Privacy & Security**, scroll to find the blocked WCH software, and click **Allow**.
  :::
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**ステップ 2. ドライバー拡張機能を有効化（重要）**
  Launchpad から **CH34xVCPDriver** アプリを開き、**Install** をクリックします。その後、**System Settings → General → Login Items & Extensions → Driver Extensions** に移動し、**CH34xVCPDriver Extensions** を **ON**（青）に切り替えます。
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

出力にデバイスパスが表示されていれば、ドライバは正しくインストールされており、reTerminal を使用する準備ができています。

</TabItem>

<TabItem value="Linux" label="Linux">

Ubuntu 22.04 以降のバージョンには、必要なドライバがデフォルトで含まれています。
古いディストリビューションでは、デバイスが認識されない場合、ドライバを手動でロードする必要があるかもしれません。


</TabItem>
</Tabs>

### 電源を入れる

**Step 1.** 電源スイッチを **ON** の位置にスライドしてデバイスの電源を入れます。電源スイッチは本体背面にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/235.gif" style={{width:700, height:'auto'}}/></div>

**Step 2.** 初回起動時には、製品情報とネットワーク設定手順が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/229.png" style={{width:600, height:'auto'}}/></div><br />

**Step 3.** 緑色のステータス LED が約 3 秒間点灯した後に消灯し、デバイスの電源が入り初期化中であることを示します。30 秒以内に操作が行われない場合、デバイスは自動的にスリープモードに入り、電力を節約します。

:::tip
したがって、この間にネットワーク設定の次のステップを完了する必要があります。デバイスがスリープ状態になると、デバイスのホットスポットを見つけることができなくなります。この場合は、本体上部の **Refresh** ボタンを押してデバイスをウェイクアップできます。
:::

### ネットワーク設定

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**Step 1.** スマートフォンまたはコンピュータから、デバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワーク認証情報は `reTerminal E1003-{MAC Address}` です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/228.png" style={{width:400, height:'auto'}}/></div><br />

**Step 2.** 接続されると、スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされます。自動的に開かない場合は、reTerminal E1003 の画面に表示されている QR コードをスマートフォンでスキャンするか、ブラウザを開いて `192.168.4.1` にアクセスしてください。

誤ったパスワードを入力した場合は、正しいパスワードを再入力して再度送信してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/222.png" style={{width:700, height:'auto'}}/></div><br />

**Step 3.** ローカルの Wi-Fi ネットワークを選択してパスワードを入力し、"Connect" をクリックします。

:::note
reTerminal E Series ePaper Display は 2.4 GHz の Wi-Fi ネットワークのみをサポートし、5 GHz など他の帯域はサポートしません。
:::

**Step 4.** 接続に成功すると、デバイスが確認音を鳴らし、ペアリングコードの画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/230.png" style={{width:600, height:'auto'}}/></div>

### SenseCraft プラットフォームへの接続

**Step 1.** Web ブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するかサインインします。



**Step 2.** 左側のサイドバーで **Device** をクリックして Device ページに入り、左上の **+ New Device** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** デバイスに名前を付け、デバイスの画面に表示されているペアリングコードを入力して **Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** ペアリングが完了すると、最初のダッシュボードを作成するよう促すメッセージがデバイスに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/231.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

この方法では、SenseCraft モバイルアプリを使用して、Bluetooth 経由でデバイスのネットワークを設定し、SenseCraft アカウントに追加します。

まず、SenseCraft App をダウンロードします。Google Play ストアまたは Apple App Store で "SenseCraft" と検索して見つけることができます。あるいは、このウェブサイトからダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Step 1.** SenseCraft App を開き、アカウントにサインインして **User** タブに移動します。**Device Bluetooth Configuration** をタップしてプロセスを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Step 2.** "Please select the device type" 画面で、**reTerminal E1003** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:250, height:'auto'}}/></div><br />

**Step 3.** 画面の指示に従って、デバイスを Bluetooth ブロードキャストモードにします。スマートフォンの Bluetooth が有効になっていることを確認してください。**Scan** をタップすると、アプリが近くのデバイスを検出します。リストから自分のデバイスを選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Step 4.** Bluetooth で接続されると、アプリは Wi-Fi 接続の設定を促します。プルダウンリストからローカルの 2.4GHz Wi-Fi ネットワークを選択し、パスワードを入力して **Next** をタップします。

:::note
デバイスは 2.4 GHz の Wi-Fi ネットワーク経由でのみ設定できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Step 5.** アプリは Wi-Fi の認証情報をデバイスに送信し、SenseCraft アカウントにデバイスを追加します。完了すると "Device added successfully" というメッセージが表示されます。**Start exploring!** をタップして次に進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Step 6.** reTerminal はアプリのメインの **Device** タブにあるデバイス一覧に表示され、SenseCraft アカウントに正常に接続されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Step 7.** 一覧のデバイスをタップすると、その **Device Detail** ページを表示できます。ここからデバイスを管理したり、写真をアップロードしたりできます。より高度なダッシュボードやキャンバスデザインを行う場合は、SenseCraft の Web ブラウザ版を使用するよう促されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### ファームウェアの更新

デバイスが SenseCraft アカウントに正常に追加されると、プラットフォームは自動的にファームウェアバージョンを確認します。新しいファームウェアが利用可能な場合は、更新を促すメッセージが表示されます。

また、いつでも手動でファームウェアバージョンを確認することもできます。

**Step 1.** **Device** ページで reTerminal E1003 を探して詳細を表示し、**current firmware version** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/227.png" style={{width:350, height:'auto'}}/></div>

**Step 2.** 左側のサイドバーで **Tools** をクリックし、**Firmware Flasher** タブを開いて、このデバイスに利用可能な **latest firmware version** を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** 現在のバージョンが最新バージョンより古い場合は、Firmware Flasher ページの 3 ステップフローに従って更新します。

1. **Select your device** — reTerminal E1003 を USB-C ケーブルでコンピュータに接続し、電源スイッチが **ON** になっていることを確認してから **Select** をクリックし、リストからデバイスを選択します。

2. **Select firmware** — リリースオプションのドロップダウンから最新のファームウェアを選択します。

3. **Flash** — **Flash** をクリックして更新が完了するまで待ちます。デバイスを工場出荷状態にリセットしたい場合にのみ **Full Flash** を有効にしてください（すべてのデータ、設定、デザインが消去されます）。

:::note

1. ファームウェアを更新することで、最適なパフォーマンスと最新機能へのアクセスが保証されます。reTerminal E1003 のタッチ操作には、ファームウェア **v1.1.2 以降** が必要です。現在の最新バージョンは v1.1.4.3 であり、最高の体験のためにこのバージョンへの更新を推奨します。

2. デバイスがシャットダウンまたはスリープ状態のときは、ファームウェアを正しく書き込むことはできません。デバイスに対して正しいポートを選択しているにもかかわらず、ファームウェア書き込みの進行状況がまったく表示されない場合は、本体上部の **Refresh** ボタンを押してデバイスをウェイクアップし、再試行する必要があるかもしれません。

3. **標準の Flash を実行** すると、Wi-Fi、デプロイ済みデザイン、画像などの設定は保持されます。**Full Flash を実行して初期化** すると、すべてのデータ、設定、デザインが消去され（工場出荷状態）、一からやり直すことができます。

:::

## reTerminal E1003 にコンテンツを表示する

デバイスのペアリングが完了したら、好きなコンテンツを表示するために使用できます。おすすめは **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** です。これは、数回クリックするだけで reTerminal E1003 にコンテンツをデザインしてデプロイできる、ノーコードのクラウドプラットフォームです。

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) には、チュートリアルと機能ドキュメントが揃った専用の Wiki があります。詳細なガイド（アカウント設定、ファームウェア書き込み、高度なエディタの使い方、デプロイなど）については、次を参照してください。

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

この記事は製品の**入門ガイド**であるため、ここでは同じ内容を繰り返しません。以下では、reTerminal E1003 に素早く何かを表示する方法のみを紹介します。

### Home — コミュニティテンプレートから始める

画面に何かを表示する最も速い方法は、既製のテンプレートから始めることです。[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) の **Home** ページには、コミュニティによって提供され、継続的に増え続けている多数のテンプレートが用意されています。ダッシュボード、時計、天気パネル、名言ウォール、カレンダー、フォトフレームなどがあります。ギャラリーを閲覧して好みのデザインを選び、ワンクリックで reTerminal E1003 にデプロイできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — 自分のコンテンツを管理・デザインする

**Workspace** ページでは、現在バインドされているデバイスに表示されるすべてのページとコンテンツを管理します。ここから次のことができます：

- ゼロから独自のデザインページを作成し、配置する
- 画像をアップロードしてスライドショーとして整理する
- テキスト、ウィジェット、図形、データ、RSS フィード、Web コンテンツなどを 1 つのドラッグ＆ドロップエディタで組み合わせる
- 完成したデザインをワイヤレスで reTerminal E1003 にデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/226.png" style={{width:1000, height:'auto'}}/></div>

デザインを保存したら、**Deploy to Device** をクリックし、ペアリング済みの reTerminal E1003 を選択すると、コンテンツがワイヤレスでデバイスに送信されます。ePaper ディスプレイが更新され、あなたのデザインが表示されます。タッチ操作には **v1.1.2 以降** のファームウェアが必要です。現在の最新バージョンは **v1.1.4.3** であり、最良の体験のためにこのバージョンへの更新を推奨します。

その他すべての情報—エディタの詳細な操作方法、ヒント、リリースノートなど—については、[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/) を参照してください。

## 手動デバイス操作

### リフレッシュボタン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/233.png" style={{width:700, height:'auto'}}/></div>

デバイス上部のリフレッシュボタンには、次のような機能があります：

- **短押し**：ディスプレイを手動でリフレッシュし、SenseCraft プラットフォームから新しいコンテンツがないか確認します。操作が行われたことを確認するためにブザーが 1 回鳴ります。このボタンは、デバイスがスリープ状態になっていてダッシュボードのリフレッシュがすぐに行えない場合に、デバイスを起こす用途でもよく使用されます。

- **長押し**（今後の機能）：音声入力モードを有効にします。

### ナビゲーションボタン

ダッシュボードに複数のページがある場合、左右のボタンでページ間を移動できます：

- **左ボタン**：前のページへ移動

- **右ボタン**：次のページへ移動

### ネットワークリセット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/234.png" style={{width:700, height:'auto'}}/></div>

別の Wi-Fi ネットワークに接続する必要がある場合：

**ステップ 1.** 左右両方のナビゲーションボタンを同時に 2 秒間押し続けます。

**ステップ 2.** デバイスが Wi-Fi 設定モードに入り、[Network Setup](#Network-Setup) の手順に従って新しいネットワークに再接続できます。

### LED インジケータ

- **すべての LED が消灯：**
  - USB ケーブルが接続されていない

- **赤色 LED：**
  - USB ケーブルが接続され、充電中は点灯

- **緑色 LED：**
  - 電源投入時に約 3 秒間点灯し、その後消灯
  - USB ケーブルが接続され、バッテリーが満充電のときに点灯


### バッテリー動作

バッテリー駆動時：

- デバイスはリフレッシュの合間に自動的に低消費電力モードに入ります

- バッテリー寿命はリフレッシュ頻度に依存します（通常、1 日 1 回のリフレッシュでフル充電から約 6 か月）

- バッテリー残量が 20% 未満になると、画面右上にバッテリー残量低下アイコンが表示されます

:::tip
自分でコードを書いてバッテリー電圧を読み取りたい場合は、`analogRead()` 関数の前に 10ms のディレイを追加すると、より正確になります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/232.png" style={{width:300, height:'auto'}}/></div>


### 拡張ピン

reTerminal E1003 には 6 ピンの拡張ヘッダ（J2）が搭載されており、外部センサ、モジュール、その他のハードウェアを追加してデバイスの機能を拡張するための接続オプションを提供します。この拡張ヘッダは複数の ESP32-S3 GPIO ピンおよび通信インターフェースを外部に引き出しており、DIY プロジェクトにとって汎用性の高い接続ポイントとなります。

#### 拡張ヘッダのピン配置

6 ピン拡張ヘッダ（J2）のピン配置は次のとおりです：

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
			<td>ESP_IO47</td>
			<td>GPIO47</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能を備えた汎用 I/O</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO6/ADC1_CH</td>
			<td>GPIO6</td>
			<td>GPIO/ADC</td>
			<td>アナログ入力機能を備えた汎用 I/O</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO または I2C クロック信号</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO または I2C データ信号</td>
		</tr>
	</table>
</div>

## トラブルシューティング

### Q1: デバイスの電源が入らない

- 電源スイッチが ON の位置になっていることを確認する
- デバイスを充電するために USB-C ケーブルを接続する
- 赤色 LED が常時点灯しているか確認する（充電中を示します）
- バッテリー駆動の場合は、バッテリーが正しく接続され、充電されていることを確認する

### Q2: Wi-Fi に接続できない

- 正しい Wi-Fi パスワードを入力しているか確認する
- Wi-Fi ネットワークが正常に動作していることを確認する
- Wi-Fi ルーターが 2.4GHz ネットワークをサポートしているか確認する（5GHz はサポートされていません）
- デバイスを Wi-Fi ルーターの近くに移動してみる

### Q3: ディスプレイが更新されない

- リフレッシュボタンを押して手動で更新をトリガーする
- デバイスが Wi-Fi に接続されているか確認する（隅に切断アイコンが表示されていないこと）
- SenseCraft アカウントで、ダッシュボードが正しくデプロイされているか確認する
- 問題が解決しない場合は、デバイスを再起動してみる
- 再起動後もデバイスが反応しない場合は、[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) プラットフォームで対応するファームウェアを書き込み直し、正常にリフレッシュが復旧するか確認してください

### Q4: ネットワーク接続が失われた

- デバイスは既知のネットワークへの再接続を自動的に試みます
- 再接続されると、Wi-Fi 切断アイコンは消えます
- 再接続できない場合は、上記のネットワークリセット手順に従ってください

## リソース

- [reTerminal E1003 回路図 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
