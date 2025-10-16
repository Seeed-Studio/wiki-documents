---
description: Seeed Studio IoTボタンの使い方
title: Seeed Studio IoTボタンの使い方
keywords:
  - IoTボタン
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /ja/getting_started_with_seeed_iot_button
last_update:
  date: 05/15/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

IoTボタンは、ESPHomeとZigbeeを通じてHome Assistantに統合可能な多機能スマートスイッチです。ESP32-C6を搭載し、カスタマイズ可能なRGB LEDインジケーター、プログラム可能なイベントトリガー、USB-C充電、柔軟な取り付けオプションを備えています。直感的なスマートホームコントロールに必要なすべてが揃っています。

### 特徴

- Home Assistant対応
- 1つのスイッチでカスタマイズ可能なアクション
- 信頼性の高い電源供給
- 簡単な取り付けソリューション
- カスタマイズに対応

## ハードウェア概要

使用を開始する前に、製品の基本的なパラメータを把握することが重要です。以下の表は、IoTボタンの特性に関する情報を提供します。

<div class="table-center">
	<table align="center">
		<tr>
			<th>パラメータ</th>
			<th>説明</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td>Espressif ESP32-C6</td>
		</tr>
		<tr>
			<td>フラッシュ</td>
			<td>4MB</td>
		</tr>
        <tr>
			<td>LED</td>
			<td>ユーザーRGB LED: WS2812B (GPIO19 使用時にはGPIO18も有効にする必要があります)<br />充電LED: 緑<br />ユーザーLED: 青 (GPIO2)</td>
		</tr>
        <tr>
			<td>無線</td>
			<td>2.4GHz Wi-Fi<br />Zigbee</td>
		</tr>
        <tr>
			<td>バッテリー</td>
			<td>3.6V リチウムイオン18650充電式バッテリー</td>
		</tr>
        <tr>
			<td>充電インターフェース</td>
			<td>USB Type-C</td>
		</tr>
        <tr>
			<td>バッテリー保護</td>
			<td>逆極性保護</td>
		</tr>
        <tr>
			<td>ファームウェア更新</td>
			<td>OTA対応</td>
		</tr>
        <tr>
			<td>寸法</td>
			<td>92x32x25 mm</td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png" style={{width:800, height:'auto'}}/></div>

## 使用開始

### ステップ1: 初期設定

IoTボタンを初めて受け取った際には、使用前に初期アクティベーションを行うことが重要です。以下の手順に従ってください：

1. 標準的な5V USB Type-Cデータケーブルを使用して、IoTボタンを電源に接続します。
2. **この初回の電源接続は、内蔵バッテリーをアクティブ化するために重要です。**
3. **このアクティベーションステップを行わないと、デバイスは正常に動作しません。**

:::note
IoTボタンには省電力スリープモードが搭載されています：
- 未設定状態：デバイスは2分間操作がないとスリープモードに入ります。スリープ解除にはボタンを1回押す必要があります。
- ESPHome設定後：バッテリーを節約するため、ボタンを離してから9秒後にスリープモードに入ります。操作を行う前にボタンを1回押してスリープを解除する必要があります。
:::

IoTボタンにはESPHome互換のファームウェアがプリロードされているため、アクティベーション後は以下の手順に従ってHome Assistantとの統合を進めることができます。

:::note
アクティベーションプロセスには、適合した5V USB Type-Cケーブルを使用してください。非標準ケーブルを使用すると、アクティベーションが正しく行われない場合があります。
:::

### ステップ2: Home Assistantの設定

1. **インストール**: 最適なパフォーマンスを得るために、Raspberry Piに[Home Assistant OS](https://www.home-assistant.io/installation/)をインストールすることをお勧めします。公式のインストールガイドに従ってください。

    :::tip Home Assistantのインストール
    Seeed Studio製品向けにHome Assistantのインストール方法を記載したガイドもありますので、参考にしてください。

    - [ODYSSEY-X86でのHome Assistantの使い方](/ja/ODYSSEY-X86-Home-Assistant)
    - [reTerminalでのHome Assistantの使い方](/ja/reTerminal_Home_Assistant)
    - [LinkStar H68K/reRouter CM4でのHome Assistantの使い方](/ja/h68k-ha-esphome)
    :::

    また、以下のボタンをクリックして、Home Assistant GreenまたはHome Assistant Yellowを購入し、直接使用することもできます。

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Green</font></span></strong>
        </a>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"3"}>Home Assistant Yellow</font></span></strong>
        </a>
    </div><br />

2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを揃え、ESPHomeアドオンを使用してHome Assistantを設定することで、IoTボタンの統合を進める準備が整います。

### ステップ3: キットの準備

デフォルトでは、デバイスにはIoTボタン用のファームウェアがプリフラッシュされています。ただし、以下の2つのシナリオではファームウェアを更新する必要があります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新たに開始する必要がある場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュするには、以下の2つの簡単な方法があります：

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://seeed-projects.github.io/Seeed_IoT_Button/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従うだけです。

- 接続を開始するには、`CONNECT`ボタンをクリックしてください。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`の方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍してください）。

1. IoTボタンをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`というサフィックスが付いたファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアフラッシュの詳細な手順をご覧ください：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webを使用したファームウェアのインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistantとの統合の準備が整います。

#### キットのホットスポットに接続する

ファームウェアを使用してIoTボタンの電源を入れると、`seeedstudio-iot-button`というWi-Fiアクセスポイントが表示されます。

`192.168.4.1`にアクセスして、Home Assistantサーバーのローカルネットワーク設定を構成してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### ステップ4: Home Assistantでデバイスを検出して追加する {#discovering-and-adding-the-device-in-home-assistant}

このセクションでは、Home Assistantアプリを使用したプロセスを説明します。このロジックはWeb版と同じです。

1. **アプリを開く**: アプリを起動したら、Home Assistantサーバーを選択します。アプリは自動的にサーバーを検出します。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

2. **アカウントを作成する**: アカウントをまだ作成していない場合は、作成する必要があります。その後、資格情報を使用してログインしてください。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

3. **統合ページに移動する**: ログイン後、Home Assistantの「統合」ページに移動します。ESPHomeアドオンをインストールしており、IoTボタンとHome Assistantサーバーが同じネットワーク上にある場合、`Seeed Studio IoT Button`というデバイスが検出されたデバイスとして表示されます。

4. **デバイスを追加する**: デバイスをHome Assistantのセットアップに追加するにはクリックします。

  `CONFIGURE`ボタンをクリックし、`SUBMIT`ボタンを押して確認し、デバイスを希望のエリア（例：リビングルーム）に割り当てます。その後、このデバイスはESPHome統合を通じて管理され、Home Assistantで完全な制御と監視が可能になります。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

  :::note
  セットアッププロセス中にエリアを割り当てる必要がない場合は、後でHome Assistantの「統合」セクションに移動し、デバイスを選択してエリアを手動で設定できます。
  :::

## IoTボタンを使用したオートメーションの作成

IoTボタンのセットアップが完了したら、スマートホーム内のデバイスを制御するためのオートメーションを作成できます。ここでは、ボタンを押すとライトが点灯するシンプルなオートメーションを作成してみましょう。

1. Home Assistantで、**設定** > **オートメーションとシーン** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

2. **オートメーションを作成** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

3. オートメーションを設定します：

- **名前**: 「IoTボタン シングルプレス - ライトを点灯」など、わかりやすい名前を付けます。
- **トリガー**: トリガータイプとして「状態」を選択
   - エンティティ: 「Switch 1」（シングルプレス用）を選択
   - From: 「off」
   - To: 「on」
- **アクション**: 制御したいデバイスを選択
   - 例: ライトを選択し、点灯するように設定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

4. **保存** をクリックしてオートメーションを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## 高度な使用法: 異なる押下パターンで異なるデバイスを制御

IoTボタンの設定の強力な機能の1つは、異なる押下パターンを検出できることです。以下は各パターンを活用するアイデアです：

1. **シングルプレス（Switch 1）**:
   - 現在の部屋のライトをオン/オフ
   - よく使うデバイスをトグル

2. **ダブルプレス（Switch 2）**:
   - シーンをアクティブ化（例: 「ムービーナイト」でライトを暗くし、テレビをオン）
   - 複数のデバイスを同時に制御

3. **長押し（Switch 3）**:
   - セキュリティ機能をアクティブ化（アラームのオン/オフ）
   - 緊急ルーチンをトリガー
   - 複数のデバイスを一括でオフ

これらの高度なオートメーションを設定するには、上記の手順に従って追加のオートメーションを作成し、適切なスイッチ（Switch 1、2、または3）をトリガーとして選択し、希望するアクションを設定してください。

## 技術サポートと製品に関するディスカッション

弊社の製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>