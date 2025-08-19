---
description: Seeed Studio XIAO ESP32S3 シリーズの使い方を始めるためのガイド。
title: Seeed Studio XIAO ESP32S3 シリーズの使い方を始める
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_getting_started
sku: 113991114, 113991115, 102010671
type: gettingstarted
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO ESP32S3 シリーズの使い方を始める


<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32S3</th>
		<th>Seeed Studio XIAO ESP32S3 Sense</th>
		<th>Seeed Studio XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
	</tr>
</table>


## 概要

Seeed Studio XIAO シリーズは非常に小型の開発ボードで、ハードウェア構造が似ており、サイズは文字通り親指サイズです。コードネーム「XIAO」はその特徴の半分「小型」を表し、もう半分は「強力」を意味します。
Seeed Studio XIAO ESP32S3 Sense はカメラセンサー、デジタルマイク、SDカードサポートを統合しています。組み込みの機械学習計算能力と写真撮影機能を組み合わせたこの開発ボードは、インテリジェントな音声およびビジョンAIを始めるための優れたツールとなります。

### 仕様

<table align="center">
	<tr>
	    <th>項目</th>
	    <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3</th>
        <th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Sense</th>
		<th style={{width:300, height:'auto'}}>Seeed Studio XIAO ESP32S3 Plus</th>
	</tr>
	<tr>
	    <th>プロセッサ</th>
	    <td align="center" colspan="3">ESP32-S3R8 <br></br> Xtensa LX7 デュアルコア、32ビットプロセッサ、最大240 MHzで動作</td>
	</tr>
	<tr>
	    <th>ワイヤレス</th>
	    <td align="center" colspan="3">完全な2.4GHz Wi-Fiサブシステム <br></br> BLE: Bluetooth 5.0、Bluetoothメッシュ</td>
	</tr>
    <tr>
	    <th>内蔵センサー</th>
	    <td align="center"> - </td>
        <td align="center">1600*1200用OV2640カメラセンサー <br></br> デジタルマイク</td>
		<td align="center"> - </td>
	</tr>
    <tr>
	    <th>メモリ</th>
	    <td align="center">オンチップ8M PSRAM & 8MB フラッシュ</td>
        <td align="center">オンチップ8M PSRAM & 8MB フラッシュ <br></br> オンボードSDカードスロット、32GB FAT対応</td>
		<td align="center">オンチップ8M PSRAM & <strong>16MB</strong> フラッシュ</td>
	</tr>
    <tr>
	    <th>インターフェース</th>
	    <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x ユーザーLED, 1x 充電LED  <br></br> 1x リセットボタン, 1x ブートボタン</td>
        <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x ユーザーLED, 1x 充電LED, 1x B2Bコネクタ (追加のGPIO 2つ付き), 1x リセットボタン, 1x ブートボタン</td>
		<td><strong>2</strong>x UART, 1x IIC, 1x IIS, <strong>2</strong>x SPI, <strong>18</strong>x GPIOs (PWM), 9x ADC, 1x ユーザーLED, 1x 充電LED, 1x B2Bコネクタ, 1x リセットボタン, 1x ブートボタン</td>
	</tr>
    <tr>
	    <th>寸法</th>
	    <td align="center">21 x 17.8mm</td>
        <td align="center">21 x 17.8 x 15mm (拡張ボード付き)</td>
		<td align="center">21 x 17.8mm</td>
	</tr>
    <tr>
	    <th rowspan="5">電源</th>
	    <td colspan="3" align="center">入力電圧 (Type-C): 5V <br></br> 入力電圧 (BAT): 4.2V</td>
	</tr>
    <tr>
	    <td>回路動作電圧 (動作準備): <br></br> - Type-C: 5V@<strong>19mA</strong> <br></br> - BAT: 3.8V@<strong>22mA</strong></td>
        <td>回路動作電圧 (動作準備): <br></br> - Type-C: 5V@<strong>38.3mA</strong> <br></br> - BAT: 3.8V@<strong>43.2mA</strong> (拡張ボード付き)</td>
		<td>回路動作電圧 (動作準備): <br></br> - Type-C: 5V@<strong>28mA</strong> <br></br> - BAT: 3.8V@<strong>35mA</strong></td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">ウェブカメラウェブアプリケーション: <br></br> - Type-C: <br></br> - - 平均消費電力: 5V/<strong>138mA</strong> <br></br> - - 写真撮影時: 5V/<strong>341mA</strong> <br></br> - バッテリー: <br></br> - - 平均消費電力: 3.8V/<strong>154mA</strong> <br></br> - - 写真撮影時: 3.8V/<strong>304mA</strong></td>
		<td align="center"> - </td>
	</tr>
	<tr>
	    <td align="center"> - </td>
        <td align="center">マイク録音 & SDカード書き込み:  <br></br> - Type-C: <br></br> - - 平均消費電力: 5V/<strong>46.5mA</strong> <br></br> - - ピーク消費電力: 5V/<strong>89.6mA</strong> <br></br> - バッテリー: <br></br> - - 平均消費電力: 3.8V/<strong>54.4mA</strong> <br></br> - - ピーク消費電力: 3.8V/<strong>108mA</strong></td>
		<td align="center"> - </td>
	</tr>
    <tr>
		<td align="center" colspan="3">バッテリー充電電流: <strong>100mA</strong></td>
	</tr>
    <tr>
        <th>低消費電力モード</th>
        <td>モデムスリープモード: <strong>3.8V/25 mA</strong> <br></br> ライトスリープモード: <strong>3.8V/2 mA</strong> <br></br> ディープスリープモード: <strong>3.8V/14 μA</strong></td>
        <td>周辺機器なし: <br></br> - モデムスリープモード: <strong>3.8V/25.5 mA</strong> <br></br> - ライトスリープモード: <strong>3.8V/2.4 mA</strong> <br></br> - ディープスリープモード: <strong>3.8V/63.768 μA</strong> <br></br> カメラ接続時: <br></br> - モデムスリープモード: <strong>3.8V/44.57 mA</strong> <br></br> - ライトスリープモード: <strong>3.8V/5.47 mA</strong> <br></br> - ディープスリープモード: <strong>3.8V/3.00 mA</strong> <br></br> SDカード接続時: <br></br> - モデムスリープモード: <strong>3.8V/32.8 mA</strong> <br></br> - ライトスリープモード: <strong>3.8V/3.48 mA</strong> <br></br> - ディープスリープモード: <strong>3.8V/1.08 mA</strong><br></br> カメラとSDカードを同時接続時: <br></br> - モデムスリープモード: <strong>3.8V/55.72 mA</strong> <br></br> - ライトスリープモード: <strong>3.8V/6.56 mA</strong> <br></br> - ディープスリープモード: <strong>3.8V/3.98 mA</strong></td>
		<td>モデムスリープモード: <strong>3.8V/26.5 mA</strong> <br></br> ライトスリープモード: <strong>3.8V/2.2 mA</strong> <br></br> ディープスリープモード: <strong>3.8V/69 μA</strong></td>
    </tr>
    <tr>
        <th>Wi-Fi有効時の消費電力</th>
        <td align="center">アクティブモード: <strong>~ 100 mA</strong></td>
        <td align="center">アクティブモード: <strong>~ 110 mA</strong> (拡張ボード付き)</td>
		<td align="center">アクティブモード: <strong>~ 85 mA</strong></td>
    </tr>
    <tr>
        <th>BLE有効時の消費電力</th>
        <td align="center">アクティブモード: <strong>~ 85 mA</strong></td>
        <td align="center">アクティブモード: <strong>~ 102 mA</strong> (拡張ボード付き)</td>
		<td align="center">アクティブモード: <strong>~ 77 mA</strong></td>
    </tr> 
    <tr>
        <th>動作温度</th>
        <td colspan="3" align="center">-40°C ~ 65°C</td>
    </tr>
</table>

### 特徴

- **強力なMCUボード**: ESP32S3 32ビット、デュアルコア、Xtensaプロセッサチップを搭載し、最大240 MHzで動作。複数の開発ポートを備え、Arduino / MicroPythonに対応。
- **高度な機能**（Sense向け）: 1600*1200解像度の取り外し可能なOV2640カメラセンサーを搭載し、OV5640カメラセンサーに対応。さらにデジタルマイクを統合。
- **精巧な電力設計**: リチウム電池充電管理機能を提供し、消費電力モデルを4種類提供。ディープスリープモードでは消費電力が14μAまで低減。
- **多様な可能性を広げる大容量メモリ**: 8MB PSRAMと8MB FLASH（**Plus**バージョンでは16MB）を提供。外部32GB FATメモリ用のSDカードスロットをサポート（XIAO ESP32S3のみ）。
- **優れたRF性能**: 2.4GHz Wi-FiとBLEデュアルワイヤレス通信をサポート。U.FLアンテナ接続時には100m以上の遠隔通信をサポート。
- **親指サイズのコンパクト設計**: 21 x 17.8mm、XIAOのクラシックなフォームファクターを採用。ウェアラブルデバイスなどのスペース制限のあるプロジェクトに適合。

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Seeed Studio XIAO ESP32S3の特性に関する情報を提供します。

<Tabs>
<TabItem value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 前面表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面表示図</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense ピンリスト</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
	<tr>
		<th>XIAO ESP32S3 Plus 前面表示図</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<th>XIAO ESP32S3 Plus 背面表示図</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
		" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	<th>XIAO ESP32S3 Plus ピンリスト</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
		" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>

:::tip
XIAO ESP32S3 PlusのB2Bコネクタは[Wio-SX1262拡張ボード](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)と互換性がありますが、プラグインカメラセンサーボードとは互換性がありません。
:::

</TabItem>

</Tabs>

### 電源ピン
- 5V - USBポートからの5V出力です。このピンを電圧入力として使用することもできますが、外部電源とこのピンの間にアノードをバッテリー、カソードを5Vピンに接続したダイオード（ショットキー、信号、電力）が必要です。
- 3V3 - オンボードレギュレーターからの規制出力です。700mAを引き出すことができます。
- GND - 電力/データ/信号のグランド

### ストラッピングピン

各起動またはリセット時に、チップは初期設定パラメータを必要とします。例えば、どのブートモードでチップをロードするか、フラッシュメモリの電圧などです。これらのパラメータはストラッピングピンを介して渡されます。リセット後、ストラッピングピンは通常のIOピンとして動作します。

チップリセット時にストラッピングピンで制御されるパラメータは以下の通りです：

- **チップブートモード** – GPIO0とGPIO46
- **VDD_SPI電圧** – GPIO45
- **ROMメッセージの印刷** – GPIO46
- **JTAG信号源** – GPIO3

GPIO0、GPIO45、GPIO46は、チップリセット時にチップ内部の弱いプルアップ/プルダウン抵抗に接続されています。
これらの抵抗はストラッピングピンのデフォルトのビット値を決定します。また、ストラッピングピンが外部の高インピーダンス回路に接続されている場合もビット値を決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

ビット値を変更するには、ストラッピングピンを外部のプルダウン/プルアップ抵抗に接続する必要があります。ESP32-S3がホストMCUによってデバイスとして使用される場合、ストラッピングピンの電圧レベルはホストMCUによっても制御できます。

すべてのストラッピングピンにはラッチがあります。システムリセット時に、ラッチはそれぞれのストラッピングピンのビット値をサンプリングし、チップが電源オフまたはシャットダウンされるまで保存します。ラッチの状態は他の方法では変更できません。この仕組みにより、ストラッピングピンの値はチップの動作中に利用可能であり、リセット後は通常のIOピンとして使用できます。

ストラッピングピンのタイミング要件に関しては、セットアップ時間とホールド時間などのパラメータがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## はじめに

XIAO ESP32S3 を迅速に使用開始できるように、以下のハードウェアおよびソフトウェアの準備についてお読みください。

1. **XIAO ESP32S3**

通常版にプリセットされている工場出荷時プログラムは、タッチピン点灯プログラムです。XIAO に電源を入れると、いくつかのピンに触れることでオレンジ色のユーザーインジケーターが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

XIAO ESP32S3 Sense には、WebCam サンプルプログラムがプリインストールされています。このプログラムを使用するには、適切なアンテナを取り付けて電源を入れるだけです。詳細については、このプログラムに関する Wiki をご覧ください。

- [ビデオストリーミング](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage#project-ii-video-streaming)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### ハードウェアの準備

#### ヘッダーのはんだ付け

XIAO ESP32S3 はデフォルトでピンヘッダーが付属していません。ピンヘッダーを用意し、XIAO の対応するピンにはんだ付けする必要があります。これにより、拡張ボードやセンサーに接続できるようになります。

XIAO ESP32S3 の小型サイズのため、ヘッダーをはんだ付けする際は注意が必要です。異なるピンを一緒にはんだ付けしないようにし、シールドや他の部品にはんだが付かないようにしてください。これを怠ると、XIAO がショートしたり正常に動作しなくなったりする可能性があり、その結果についてはユーザーが責任を負うことになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### アンテナの取り付け

XIAO ESP32S3 の前面左下には、独立した「WiFi/BT アンテナコネクタ」があります。WiFi/Bluetooth 信号をより良くするために、パッケージ内のアンテナを取り出し、コネクタに取り付ける必要があります。

アンテナの取り付けには少しコツが必要です。直接強く押し込むと非常に難しく、指が痛くなることがあります。正しい取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに差し込み、次にもう一方を少し押し込むことで、アンテナが取り付けられます。

アンテナを取り外す場合も同様で、力任せに引っ張らず、片側を持ち上げるようにすると簡単に外れます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### 拡張ボードの取り付け（Sense 用）

XIAO ESP32S3 Sense を購入した場合、拡張ボードも含まれているはずです。この拡張ボードには、1600×1200 OV2640 カメラセンサー、オンボード SD カードスロット、デジタルマイクが搭載されています。

拡張ボードを XIAO ESP32S3 Sense に取り付けることで、拡張ボードの機能を使用できます。

拡張ボードの取り付けは非常に簡単です。拡張ボードのコネクタを XIAO ESP32S3 の B2B コネクタに合わせ、強く押し込んで「カチッ」という音が聞こえれば取り付け完了です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

現在、XIAO ESP32S3 Sense に完全対応した新しい高性能カメラ OV5640 が販売されています。購入すれば、カメラを交換して使用することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
</div>

OV5640 の詳細なパラメータ情報が必要な場合は、以下の表を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Wiki に掲載されているカメラ関連のすべてのプログラムは、OV5640 および OV2640 カメラの両方に対応しています。
:::

#### アップグレードされたヒートシンクの取り付け

XIAO ESP32S3 Sense の冷却性能を最適化するために、アップグレードされたヒートシンクを取り付けてください。この新しい設計は、特にカメラ使用時の集中的な操作中に観察された冷却不足を解消するために開発されました。以前のモデルではヒートシンクが十分に熱を放散できないというフィードバックを受け、より効果的なソリューションが開発されました。

<details>
<summary>性能比較を見るにはクリック</summary>

アップグレードされたヒートシンクの利点は、以下のテスト結果で確認されています：

| テストサンプル           | 背面の最高温度 |
| --------------------- | ---------------------------- |
| **ヒートシンクなし** | 63.6°C                       |
| **デュアルヒートシンクあり** | 53.5°C (🔻10°C)           |

***テスト詳細:***
- **環境**: エアコン付きの部屋（約27°C）
- **温度測定ツール**: OMEGA CL3515R 熱電対
- **測定場所**: XIAO ESP32S3 の背面サーマルパッド
- **テストファームウェア**: WebCamera
- **電源供給**: Type-C 5V
- **動作時間**: 1時間

***主な結果:***
- ヒートシンクを装備したデバイスは、1時間以上安定して動作し、最高温度に達しても性能低下は見られませんでした。
- SVGA（800x600）モードで WebCamera を使用したテスト中：
  - XIAO ESP32S3 はスムーズに動作しました。
  - ビデオ出力は滑らかでした。
  - 温度が大幅に低下し、フレーム落ちや接続切れが発生しない信頼性の高い性能が確保されました。

</details>

***取り付けを始める前に以下のアイテムを準備してください:***

- 選択したヒートシンク（シングルまたはデュアル）
- クリーンなESP32S3

作業を開始する前に、デバイスの電源を切り、すべての電源からプラグを抜いてください。

:::tip 注意

***購入時の注意:*** XIAO ESP32S3 Senseを購入する際、**カメラ付きモデル**のみがヒートシンクを含んでいることに注意してください。カメラが付属していないESP32S3バージョンをお持ちの場合は、ヒートシンクを別途購入する必要があります。

***取り付けのヒント:*** ヒートシンクを取り付ける際は、ESP32S3チップの真上にあるサーマルパッドを優先的に覆うようにしてください。これにより最適な放熱が確保されます。また、BATピンができるだけ妨げられないように注意してください。
:::

では、取り付け手順を始めましょう：

***ステップ1. ヒートシンクの準備:***
まず、ヒートシンクの保護カバーを取り外し、熱接着剤を露出させます。これにより、ヒートシンクをESP32S3チップにしっかりと取り付ける準備が整います。

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***ステップ2. ヒートシンクの組み立て:***

<Tabs>
  <TabItem value="single" label="シングルヒートシンク" default>

この小型でコンパクトなオプションは、通常の使用に十分であり、すべてのGPIOピンへの完全なアクセスを可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="デュアルヒートシンク">

この大型オプションは、優れた冷却性能を提供し、高性能タスクに最適ですが、一部のGPIOピンへのアクセスが制限される可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3 PlusのBATピンを使用したい場合、このデュアルヒートシンクは適していません。
:::

  </TabItem>
</Tabs>

***ステップ3: 最終検査とテスト***

取り付け後、すべてが適切に固定され、ショートのリスクがないことを確認してください。ヒートシンクが正しく配置され、しっかりと取り付けられていることを確認してください。

### ソフトウェアの準備

XIAO ESP32S3の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** お使いのオペレーティングシステムに応じて、安定版のArduino IDEをダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

- **ステップ2.** Arduinoアプリケーションを起動します。

- **ステップ3.** Arduino IDEにESP32ボードパッケージを追加します。

<Tabs>
<TabItem value='For Windows'>

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスに**esp32**というキーワードを入力して、最新バージョンの**esp32**を選択し、インストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3用のオンボードパッケージは、バージョン**2.0.8**以上が必要です。
:::

- **ステップ4.** ボードとポートを選択します。

Arduino IDEの上部でポートを直接選択できます。通常、**COM3**以上が該当します（**COM1**および**COM2**は通常ハードウェアシリアルポートに予約されています）。

</TabItem>
<TabItem value='For Mac OS'>

**Arduino IDE > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

**Tools > Board > Boards Manager...**に移動し、検索ボックスに**esp32**というキーワードを入力して、最新バージョンの**esp32**を選択し、インストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
XIAO ESP32S3用のオンボードパッケージは、バージョン**2.0.8**以上が必要です。
:::

- **ステップ4.** ボードとポートを選択します。

Arduino IDEの上部でポートを直接選択できます。名前に"usbmodem"または"usbserial"が含まれているポートが該当する可能性が高いです。不明な場合は、デバイスを一度抜き差しして、どのポートが消えるかを確認してください。

</TabItem>
</Tabs>

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> パッケージをダウンロード</font></span></strong></a></div>

上記のZIPファイルをダウンロードした後、解凍すると2つのファイルが表示されます。一つは **XIAO_ESP32S3 フォルダ**で、もう一つは **boards.txt** です。

- **Windows PCの場合**

    WindowsでのESP32のデフォルトのオンボードパッケージ保存パスは以下の通りです：

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    ダウンロードした **boards.txt** ファイルを上記のパスにコピーし、このパスにある元の **boards.txt** ファイルを上書きします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    次に、**variants フォルダ**に移動し、**XIAO_ESP32S3 フォルダ**をコピーします。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **MacOS PCの場合**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    ダウンロードした **boards.txt** ファイルを上記のパスにコピーし、このパスにある元の **boards.txt** ファイルを上書きします。

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    次に、**variants フォルダ**に移動し、**XIAO_ESP32S3 フォルダ**をコピーします。

- **ステップ4.** Arduino IDEを閉じて再度開きます。

<Tabs>
<TabItem value="(Sense)" label="XIAO ESP32S2 (Sense) 用" default>

また、開発ボードの左側で **xiao** を検索し、**XIAO_ESP32S3** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus 用" default>

近日公開予定です。今後のアップデートをお待ちください。

</TabItem>
</Tabs>

これで準備が整い、XIAO ESP32S3用のプログラムを書いてコンパイルおよびアップロードを開始できます。

### BootLoaderモード

誤ったプログラムを使用すると、XIAO がポートを失ったり、正常に動作しなくなることがあります。一般的な問題には以下が含まれます：

- XIAO がコンピュータに接続されているが、*ポート番号が見つからない*。
- XIAO が接続されてポート番号が表示されるが、*プログラムのアップロードに失敗する*。

上記の2つの状況に遭遇した場合、XIAO をBootLoaderモードにすることで、認識されないデバイスやアップロード失敗の問題のほとんどを解決できます。具体的な方法は以下の通りです：

- **ステップ1**. XIAO ESP32S3の `BOOT` ボタンを押し続けます。
- **ステップ2**. `BOOT` ボタンを押したまま、データケーブルを使用してコンピュータに接続します。コンピュータに接続した後、`BOOT` ボタンを離します。
- **ステップ3**. **ファイル > サンプル > 01.Basics > Blink** プログラムをアップロードして、XIAO ESP32S3の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### リセット

プログラムが異常に動作する場合、電源投入時に `Reset` を一度押すことで、XIAO がアップロードされたプログラムを再実行します。

電源投入時に `BOOT` キーを押し続け、その後 `Reset` キーを一度押すことで、BootLoaderモードに入ることもできます。

### 初めてのBlinkプログラムを実行する

ここまでで、XIAO ESP32S3の機能とハードウェアについて十分理解できたと思います。次に、最も簡単なBlinkプログラムを例に挙げて、XIAO ESP32S3で初めての点滅を実行してみましょう！

- **ステップ1.** Arduinoアプリケーションを起動します。
- **ステップ2.** **ファイル > サンプル > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ3.** ボードモデルを **XIAO ESP32S3** に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32S3の右側にあるオレンジ色のLEDが点滅しているのを確認できます。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
	</tr>
</table>

おめでとうございます！これでXIAO ESP32S3用のプログラムの書き方とアップロード方法を学びました。

:::note
LEDは、XIAO ESP32S3のユーザーLEDピンが高レベルに設定された場合のみ消灯し、ピンが低レベルに設定された場合のみ点灯します。
:::

## バッテリー使用

XIAO ESP32S3シリーズには内蔵の電源管理チップが搭載されており、バッテリーを使用してXIAO ESP32S3を独立して電源供給したり、XIAO ESP32S3のUSBポートを介してバッテリーを充電することができます。

XIAOにバッテリーを接続したい場合は、認定された充電可能な3.7Vリチウムバッテリーを購入することをお勧めします。バッテリーをはんだ付けする際には、正極と負極を区別することに注意してください。電源の負極はUSBポートに最も近い側であり、電源の正極はUSBポートから離れた側です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
XIAO ESP32S3のすべてのGPIOピンにはそれぞれの機能が割り当てられているため、バッテリーピン用にGPIOが設定されていません。つまり、GPIOのアナログ値を読み取ることでソフトウェアレベルでバッテリー電圧を取得することはできません。必要に応じて、バッテリーの正極と負極を2つのピンに接続してバッテリー電圧を測定することを検討してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
バッテリー電源を使用する場合、5Vピンには電圧が供給されません。
:::

また、バッテリー充電用の赤色インジケーターライトを設計しており、インジケーターライトの表示を通じてバッテリーの現在の充電状態をユーザーに通知します。

1. XIAO ESP32S3がバッテリーに接続されていない場合、Type-Cケーブルを接続すると赤色ライトが点灯し、30秒後に消灯します。
2. バッテリーが接続され、Type-Cケーブルが充電のために接続されると赤色ライトが点滅します。
3. Type-Cを接続してバッテリーが完全に充電されると赤色ライトが消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2ブートローダー

一部のユーザーがXIAOにUF2ファイルを直接フラッシュする方法を探していることを理解しています。この方法により、プログラムのバッチフラッシュプロセスが可能になります。ここでは、この方法について説明します。

<Tabs>
<TabItem value="method1" label="方法 I" default>

:::note
この方法は現在、Windowsシステムでのみ利用可能です。
:::

**ステップ 1**: スクリプトのダウンロードと解凍

必要なスクリプトのZIPファイルをダウンロードし、ローカルマシンに解凍します：

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**ステップ 2**: BINファイルをUF2ファイルに変換

Arduinoプログラムをコンパイルして保存した後、バイナリ`BIN`ファイルをエクスポートできます。このファイルはArduinoプロジェクトフォルダ内に生成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

`BIN`ファイルを先ほど解凍した**xiaos3-bin2uf2**ディレクトリにコピーします。その後、**convert_uf2.bat**スクリプトを実行してUF2ファイルを生成します。この際、`bin`ファイルの名前が必要です。

**ステップ 3**: UF2ブートローダーモードに入る

XIAOをコンピュータに接続し、**boot_uf2.bat**スクリプトを実行します。XIAOはコンピュータ上でUSBドライブとして表示され、UF2ブートローダーモードに正常に入ったことを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4**: UF2ファイルをXIAO ESP32S3にコピー

XIAO ESP32S3のUSBドライブにアクセスし、変換されたUF2ファイルをコピーします。コピーが完了すると、XIAO USBドライブは自動的に消え、プログラムが実行を開始します。

:::tip
1. プログラムが正しくコンパイルされ、実行されていることを確認してください。そうでない場合、UF2ファイルが期待通りに実行されない可能性があります。
2. Blink用のサンプルUF2ファイルが**xiaos3-bin2uf2**フォルダ内に提供されています。アップロードすると、XIAO ESP32S3のオレンジ色のLEDが点滅します。このUF2ファイルをテストとして使用できます。
:::

**ステップ 5**: UF2ブートローダーモードに再度入る

別のUF2ファイルをアップロードするためにUF2ブートローダーモードに再度入る必要がある場合は、**Reset**ボタンを押した後に**Boot**ボタンを素早く押してください。再度boot_uf2.batスクリプトを実行する必要はありません。

:::note
Resetを押してからBootを素早く押してください！
:::

</TabItem>

<TabItem value="method2" label="方法 II" >

このプロジェクトは、IDFからカスタマイズされた2段階ブートローダーと、3段階ブートローダーとしてのUF2ファクトリーアプリケーションで構成されています。

**注意:** IDFは積極的に開発されており頻繁に変更されるため、lib/esp-idfにサブモジュールとして含まれています。環境を正しく設定するために、そこでエクスポートスクリプトを実行してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div>

</TabItem>
</Tabs>

## トラブルシューティング

### Q1: アップロードプログラムが失敗する/プログラムが異常に動作する/デバイスポートが見つからない場合はどうすればよいですか？

上記の問題が発生した場合、まずはXIAO ESP32S3のリセットボタンを押してプログラムを再実行してみることをお勧めします。それでも問題が解決しない場合は、プログラムを再確認し、デバイスを復元するための**[BootLoader Mode](#bootloader-mode)**で提供されている方法をお読みください。

### Q2: 私のXIAOの丸い角が平らでない問題はなぜ発生するのですか？これは品質問題ですか？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

まず、この問題は品質問題ではなく、XIAOの正常な機能には影響しないことをお知らせします。

XIAO ESP32S3は、すべてのXIAOシリーズの中で最も複雑なものであり、高い統合度を持っています。そのため、工場生産ではPCBを組み合わせる必要があります。この高い統合度のため、接続部分は4つの丸い角に配置するしかなく、写真のように角が平らでない問題が発生します。今後の生産では、この問題を解決するためにプロセスの改善に努めます。

### Q3: リソースセクションで提供されているXIAO ESP32S3の工場ファームウェアをどのようにフラッシュしますか？

リソースセクションで提供されているスクリプトはWindowsをサポートしています。ZIPファイルをダウンロードすると、以下のファイルが見つかります：

<Tabs>
<TabItem value="normal" label="XIAO ESP32S3 工場ファームウェア" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```
</TabItem>
<TabItem value="sense" label="XIAO ESP32S3 Sense 工場ファームウェア" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

ファームウェアをフラッシュするには、適切な`.bat`ファイルを実行するだけです。フラッシュプロセスが失敗した場合は、プロンプトからコマンドラインをコピーし、ファイルがあるターミナルで手動で実行してください。

## リソース

[PDF] **[ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)**

### Seeed Studio XIAO ESP32S3 用

- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF形式寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピンアウトシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3Dモデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO ESP32S3 Sense 用

<!-- - **[PDF]** [Seeed Studio XIAO ステップバイステップコース](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF形式寸法図 (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF形式寸法図 (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 工場ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense ピンアウトシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3Dモデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


### Seeed Studio XIAO ESP32S3 Plus 用


- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library2.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF形式寸法図 (上面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)
- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF形式寸法図 (底面)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus ピンアウトシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD ファイル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)
- **[ZIP]** [Seeed Studio XIAO Plus Base ボトムパッドリードアウト付き](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)
- **[ZIP]** [Seeed Studio XIAO Plus Base ボトムパッドリードアウトなし](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### その他

- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン（上部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense ハウジングデザイン（下部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*残りのオープンソース資料は現在編集中ですので、続報をお待ちください！*

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>