---
description: XIAO ラウンドディスプレイ基本チュートリアル
title: Seeed Studio ラウンドディスプレイを使った XIAO の始め方
keywords:
- XIAO
- ラウンドディスプレイ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/get_start_round_display
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio ラウンドディスプレイを使った XIAO の始め方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## はじめに

Seeed Studio ラウンドディスプレイ for XIAO は、すべての XIAO 開発ボードと互換性のある拡張ボードです。一方の面に完全に覆われたタッチスクリーンを備え、39mmの円形ディスクとして設計されています。コンパクトなサイズにオンボードRTC、充電チップ、TFカードスロットを含み、スマートホームやウェアラブルなどのインタラクティブディスプレイに最適です。

<table align="center">
	<tr>
		<th>REV</th>
		<th>説明</th>
		<th>日付</th>
		<th>作成者</th>
	</tr>
	<tr>
		<td>v1.0</td>
		<td>初版</td>
		<td>2023/1/29</td>
		<td>Linus.Liao</td>
	</tr>
	<tr>
		<td>v1.1</td>
		<td>1. Liバッテリー充電ICの変更<br />2. A0とD6にスイッチを追加</td>
		<td>2023/4/7</td>
		<td>Linus.Liao</td>
	</tr>
</table>


### 仕様

<table align="center">
	<tr>
	    <th>項目</th>
	    <th>詳細</th>
	</tr>
	<tr>
	    <th>電源供給</th>
	    <td>USB Type-C: 5V @35 mA <br></br> バッテリー充電: 3.7V @37mA</td>
	</tr>
	<tr>
	    <th>充電電流</th>
	    <td>~ 485 mA</td>
	</tr>
  <tr>
	    <th>拡張メモリ</th>
	    <td>TFカードスロット 最大32GB FAT対応</td>
	</tr>
  <tr>
	    <th>スクリーン</th>
	    <td>1.28インチタッチスクリーン <br></br> 240×240 解像度 <br></br> 65K色</td>
	</tr>
  <tr>
	    <th>その他の外部機器</th>
	    <td>JST 1.25コネクタ</td>
	</tr>
  <tr>
	    <th>寸法</th>
	    <td>39mm x 39mm</td>
	</tr>
</table>


### 特徴

- **静電容量式タッチスクリーン拡張ボード**: 1.28インチの円形ディスプレイ、240×240解像度、65K色で、鮮明でカラフルな画像表示を提供
- **高い互換性**: すべての XIAO シリーズ製品と高い互換性を持ち、現在のプロジェクトに簡単に統合可能
- **豊富な周辺機器**: コンパクトなサイズにオンボードRTC、バッテリー充電チップ、TFカードスロット、JST 1.25コネクタを搭載
- **時計サイズのデザイン**: 39mmの円形デザインで、ウェアラブルやスペース制限のあるプロジェクトに適合
- **プラグアンドプレイ**: すべてのピンが引き出されており、はんだ付け不要


## ハードウェア概要

始める前に、以下の画像を参照してラウンドディスプレイのピン設計を理解し、ラウンドディスプレイの機能を把握することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png" style={{width:800, height:'auto'}}/></div>

2023年4月7日以降、改良されたラウンドディスプレイには、スクリーンのバックライトとバッテリー電圧の読み取りを制御するための2ビットスイッチが追加されました。これにより、ユーザーはピンを使用するか解放するかを自由に選択できます。[こちら](https://wiki.seeedstudio.com/ja/seeedstudio_round_display_usage/#ke-button--gpio)をクリックして詳細を読むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/round-display-v1.1-pinout.png" style={{width:800, height:'auto'}}/></div>

## はじめに

### ハードウェアの準備

ラウンドディスプレイの全機能を活用し、素晴らしい体験を得るために、ラウンドディスプレイのマザーボードとして当社の XIAO シリーズを購入することを強くお勧めします。

:::tip
XIAO SAMD21、RP2040、および RA4M1 は、メモリ不足のため円形スクリーンと互換性が**ない可能性**があります。
:::

<table align="center">
	<tr>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C6</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

ラウンドディスプレイの背面にあるピン列は XIAO シリーズ用に設計されています。すでに XIAO をお持ちの場合、追加のケーブルを準備する必要はなく、XIAO のピンをラウンドディスプレイに直接差し込むだけで使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

:::caution
XIAO を接続する際、**XIAO の Type-C コネクタがラウンドディスプレイの外側を向くようにしてください**。万が一極性を逆に接続してしまった場合でも、ラウンドディスプレイには電源保護回路が搭載されているため簡単には損傷しませんが、逆接続の状態を長時間維持することはお勧めしません。
:::

ラウンドディスプレイの推奨方向は次の通りです：ラウンドディスプレイを正面に向けたとき、XIAO の Type-C コネクタが右側を向き、ラウンドディスプレイのオン/オフボタンが左下に位置するようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg" style={{width:700, height:'auto'}}/></div>

### ソフトウェアの準備

ラウンドディスプレイを使用するには、XIAO シリーズをプログラムする必要があります。推奨されるプログラミングツールは Arduino IDE であり、XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

#### ステップ 1. お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

#### ステップ 2. Arduino アプリケーションを起動します。

#### ステップ 3. 使用する XIAO に応じて Arduino IDE を設定します。

- **Seeed Studio XIAO RP2350** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/getting-started-xiao-rp2350/)** を参照して設定を完了してください。

- **Seeed Studio XIAO nRF52840** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して設定を完了してください。

- **Seeed Studio XIAO ESP32C3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して設定を完了してください。

- **Seeed Studio XIAO ESP32C6** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#software-preparation)** を参照して設定を完了してください。

- **Seeed Studio XIAO ESP32S3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して設定を完了してください。

#### ステップ 4. ラウンドディスプレイのライブラリを Arduino に追加します。

まず、以下のリンクから **TFT_eSPI**、**LVGL**、および **Round Screen** ライブラリをダウンロードする必要があります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_lvgl" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>LVGL ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/SeeedStudio_TFT_eSPI" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> TFTライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> スクリーンライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリを含む > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

ラウンドディスプレイでRTC機能を使用する必要があるため、**I2C BM8563 RTC**ライブラリを検索してインストールする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>

次に、`lv_conf.h`ファイルをArduinoライブラリのルートディレクトリに移動する必要があります。

:::caution
ここでの`lv_conf.h`ファイルは**Seeed_Arduino_RoundDisplay**から取得したものであり、**LVGL**ライブラリから取得したものではありません。
:::

Windowsの場合、Arduinoライブラリのルートディレクトリは以下の通りです：

`C:\Users\${UserName}\Documents\Arduino\libraries`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png" style={{width:800, height:'auto'}}/></div>

#### ステップ5. (オプション) 使用環境の設定

ラウンドディスプレイは現在、2つの異なるライブラリベースのディスプレイに対応しています。一つは**TFT_eSPI**、もう一つは**Arduino GFX**です。XIAO SAMD21およびXIAO nRF52840では、TFTライブラリを実行するのに十分なメモリがなく、Arduino GFXの方が大幅に優れたパフォーマンスを発揮します。Arduino IDEで検索してダウンロードできます。

:::tip
**TFT_eSPI**ライブラリを使用する必要がある場合は、**ステップ5**に進んでください。Arduino GFXを使用する場合は、このステップをスキップできます。

ラウンドディスプレイの内容については、チュートリアルでは**TFT_eSPI**の使用に焦点を当てます。
:::



### Arduinoライブラリ概要

上記のチュートリアルからわかるように、ラウンドディスプレイは主に**LVGL**、**TFT_eSPI**、および**Arduino GFX**ライブラリを使用します。スペースの都合上、**LVGL**と**TFT_eSPI**ライブラリの使用方法を、ダイヤルを描画する例を用いて個別に紹介します。

- **TFT_eSPI**ライブラリのインターフェースと使用方法については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library)**をクリックして学ぶことができます。

- **LVGL**ライブラリのインターフェースと使用方法については、**[こちら](https://wiki.seeedstudio.com/ja/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library)**をクリックして学ぶことができます。

- **Arduino GFX**ライブラリのインターフェースと使用方法については、**[こちら](https://github.com/moononournation/Arduino_GFX)**をクリックして学ぶことができます。

## ラウンドディスプレイを点灯させる

### デモ 1: TFT 時計

:::tip
ラウンドディスプレイのRTC機能を使用する必要があるため、**I2C BM8563 RTC**ライブラリを検索してインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

ハードウェアとソフトウェアの準備が整ったら、最初のサンプルプログラムをアップロードします。このサンプルプログラムは、ラウンドディスプレイのRTC時計が正常に動作しているかを確認するために使用できます。このデモは少量のメモリしか必要としないため、すべてのXIAOモデルに適しています。

:::tip
このデモを修正してより複雑な表示を実現したい場合は、使用しているXIAOのメモリサイズに注意してください。具体的なサイズは、そのXIAOの紹介ページで確認できます。
:::

このサンプルプログラムは、Arduino IDEの**File -> Examples -> Seeed Arduino Round display -> TFT_Clock**から見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r1.png" style={{width:600, height:'auto'}}/></div>

使用しているXIAOと、XIAOが接続されているポート番号を選択し、コンパイルしてアップロードしてください。

ラウンドディスプレイのスイッチがONの位置に切り替えられていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に動作すれば、以下のような効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/r3.png" style={{width:600, height:'auto'}}/></div>

### デモ 2: ハードウェアテスト

HardwareTestデモは少し複雑で、より多くのメモリを占有するため、一部のXIAOモデルではメモリ不足により正常に動作しない場合があります。TFTライブラリとArduino GFXライブラリを使用したテスト表を以下に示します。

|         | TFTライブラリ | Arduino GFX |
|---------|-----|-----|
| XIAO SAMD21 | ❌  | ❌  |
| XIAO RP2040 | ❌  | ❌  |
| XIAO RA4M1  | ❌  | ❌  |
| XIAO nRF52840 非mbed版| ✅  | ❌  |
| XIAO nRF52840 mbed版| ❌  | ✅  |
| XIAO ESP32C3 | ✅  | ✅  |
| XIAO ESP32C6 | ✅  | ❌  |
| XIAO ESP32S3 | ✅  | ✅  |

このサンプルプログラムは、ラウンドディスプレイのRTC時計、SDカード、およびタッチ機能が正常に動作しているかを確認するために使用できます。

:::tip
ラウンドディスプレイのRTC機能を使用する必要があるため、**I2C BM8563 RTC**ライブラリを検索してインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png" style={{width:800, height:'auto'}}/></div>
:::

このサンプルプログラムは、Arduino IDEの**File -> Examples -> Seeed Arduino Round display -> HardwareTest**から見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png" style={{width:600, height:'auto'}}/></div>

使用しているXIAOと、XIAOが接続されているポート番号を選択し、コンパイルしてアップロードしてください。

ラウンドディスプレイのスイッチがONの位置に切り替えられていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg" style={{width:400, height:'auto'}}/></div>

プログラムが正常に動作すれば、以下のような効果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif" style={{width:600, height:'auto'}}/></div>

:::note
このサンプルプログラムは、拡張ボードのすべての機能項目（RTC機能を含む）をテストします。もしI2C BM8563 RTCライブラリをインストールしていない場合、エラーが報告される可能性があります。その場合は、`lv_hardware_test()`関数をコメントアウトしてください。これにより、SDカードの機能検出も無効になります。
:::

## キャリブレーションファームウェアの更新
:::tip
タッチが時々反応しない場合は、以下の手順に従って画面のキャリブレーションファームウェアを更新してください。
:::

1. この[リンク](https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update)からコードをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png" style={{width:1000, height:'auto'}}/></div>

2. 同じディレクトリに配置し、このファームウェアを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png" style={{width:600, height:'auto'}}/></div>

3. シリアルモニターを開くと、以下の画像のような成功メッセージが表示されます。これで更新が成功したことを意味し、プログラムをアップロードして試すことができます！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png" style={{width:600, height:'auto'}}/></div>

## トラブルシューティング

### Q1: プログラムをアップロードした後、ディスプレイに何も表示されないのはなぜですか？

A: Round Displayのスイッチがオンになっていることを確認してください。XIAO ESP32C3を使用している場合、プログラムをアップロードした後にリセットボタンを押す必要がある場合があります。

### Q2: Seeed Studio XIAO ESP32S3 Senseをこの拡張スクリーンに接続したい場合、2つのTFカードスロットが競合することはありますか？

A: これは競合を引き起こしません。異なるSDカードスロットはチップセレクトによって制御されます。SenseのmicroSDカードスロットを使用したい場合、チップセレクトピンは**21**である必要があります。Round DisplayのmicroSDカードスロットを使用したい場合、チップセレクトピンは**D2**である必要があります。

S3 Senseカメラチュートリアルでは、両方のハードウェアとmicroSDカードを使用する[例](https://wiki.seeedstudio.com/ja/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera)があります。

### Q3: Round Display用のHardwareTestコードを使用すると、XIAO RP2040で非常に奇妙なC++エラーが発生するのはなぜですか？

A: これは、XIAO RP2040に適切なコンパイルオプションを選択していないことが原因である可能性があります。以下の図を参照して設定し、プログラムを再アップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [充電ICデータシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf)
- **[PDF]** [ETA3410データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf)
- **[PDF]** [RTC PCF8563データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf)
- **[PDF]** [1.28インチ a-Si TFT液晶ディスプレイデータシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf)
- **[PDF]** [Seeed Studio Round Display for XIAO 回路図 v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf)
- **[PDF]** [GJX0128A4-15HY データシート](https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図&PCB](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip)
- **[ZIP]** [Seeed Studio Round Display for XIAO 回路図&PCB v1.1](https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip)
- **[3DM]** [Round Display for XIAO の3Dモデル](https://grabcad.com/library/seeed-studio-round-display-for-xiao-1)
- **[STL]** [Round Display用シェルの3Dモデル図](https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl)
- **[STL]** [Seeed Studio XIAO ESP32 S3 Sense ケース（Round Screen付き）](https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>