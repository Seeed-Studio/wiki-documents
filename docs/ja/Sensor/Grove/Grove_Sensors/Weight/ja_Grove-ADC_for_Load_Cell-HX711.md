---
description: Grove - ADC for Load Cell (HX711) は、ロードセル専用に設計された24ビットA/Dコンバータです。
title: Grove - ADC for Load Cell (HX711) の使い方
keywords:
- Grove
- 重量センサー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_adc_for_load_cell_hx711
last_update:
  date: 05/15/2025
  author: Carla
---


# Grove - ADC ロードセル用 (HX711)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank">
	<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
	</a>
</div>


Grove - ADC for Load Cell (HX711) は、ロードセル専用に設計された24ビットA/Dコンバータです。オンチップ低ノイズプログラマブルアンプを搭載しており、32、64、128のゲインを選択できます。HX711チップは、調整された電源、オンチップクロックオシレータ、その他の周辺回路を統合しており、高い統合性、迅速な応答、強力な耐干渉性という利点があります。

:::note
Groveコネクタと4ピンスクリュー端子を使用することで、ロードセルとマイクロコントローラを簡単に接続でき、はんだ付けは不要です。数ステップで独自のArduino重量センサーシステムを構築できます。
:::

## 仕様

<div class="table-center">
 <table align="center">
	<tr>
		<th>項目</th>
		<th>値</th>
	</tr>
	<tr>
		<td>バッテリー</td>
		<td>含まれない</td>
	</tr>
	<tr>
		<td>動作電圧</td>
		<td>2.6V--5.5V</td>
	</tr>
	<tr>
		<td>動作電流</td>
		<td>1.5A未満</td>
	</tr>
	<tr>
		<td>検出精度</td>
		<td>24ビット</td>
	</tr>
	<tr>
		<td>出力データレート</td>
		<td>10SPSまたは80SPS</td>
	</tr>
	<tr>
		<td>選択可能なゲイン</td>
		<td>チャンネルBは32/ チャンネルAは64および128</td>
	</tr>
 </table>
</div>


## 応用例

- 電子スケール
- 価格計算スケール
- 電子プラットフォームスケール
- デジタルスケール
- 郵便物スケール

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-pin.jpg" style={{width:700, height:'auto'}}/></div>

## 対応プラットフォーム

<div class="table-center">
	<table align="center">
		<tr>
			<th>Arduino</th>
			<th>Raspberry Pi</th>
			<th> </th>
			<th> </th>
			<th> </th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>


:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに
このセクションでは、コントローラーとして **Arduino UNO R4 WiFi** を使用し、**Grove - ADC for Load Cell (HX711)** と **Weight Sensor (Load Cell) 0-500g** を組み合わせて、重量測定モジュールを作成する方法を説明します。

### ハードウェア準備

**ステップ 1.** 材料の準備

<div class="table-center">
 <table align="center">
	<tr>
		<th>Arduino UNO R4 WiFi</th>
		<th>Grove - ADC for Load Cell (HX711)</th>
		<th>Weight Sensor (Load Cell) 0-500g</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/1.png" style={{width:250, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:250, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/2.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
	<tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
			<a class="get_one_now_item" href="https://www.seeedstudio.com/Weight-Sensor-Load-Cell-0-500g-p-525.html" target="_blank">
			<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
			</a>
		</div></td>
	</tr>
 </table>
</div>

:::note
- 重量センサーは150g未満の負荷では0Vを出力します。直接負荷を測定することはできません。そのため、200gの重りを使用して測定の盲点を回避することを推奨します。200gの重りのアナログデータを無負荷（0g）として読み取り、700gの重りのアナログデータを最大負荷（500g）として読み取ります。
- ADC for Load Cell (HX711) はデフォルトでチャンネルAを使用します。他のチャンネルを使用する場合は、自分でハンダ付けが必要です。
:::

また、**Grove - ADC for Load Cell (HX711)** は XIAO 開発ボードにも適しています。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
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
	</tr>
</table>

**ステップ 2.** ハードウェア接続

Grove Gesture Sensor を Arduino UNO R4 WiFi の IIC ポートに接続し、USB ケーブルを介して Arduino を PC に接続します。Grove - ADC for Load Cell (HX711) と Weight Sensor (Load Cell) 0-500g の接続は以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/9.png" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
	<tr>
	    <th>Grove - ADC for Load Cell (HX711)</th>
		<th>Weight Sensor (Load Cell) 0-500</th>
	</tr>
    <tr>
	    <td>E+</td>
		<td>赤</td>
    </tr>
	<tr>
		<td>E-</td>
		<td>黒</td>
	</tr>
	<tr>
		<td>INA-</td>
		<td>白</td>
	</tr>
	<tr>
		<td>INA+</td>
		<td>緑/青</td>
	</tr>
 </table>
</div>

:::tip
Grove Base Shield を使用すると、以下のように HX711 モジュールを Arduino UNO R4 WiFi に直接接続できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/3.jpg" style={{width:700, height:'auto'}}/></div>
:::

### ソフトウェア準備

推奨されるプログラミングツールは Arduino IDE であり、XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。
:::tip
Arduino を初めて使用する場合は、[Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::
**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- **Seeed Studio XIAO SAMD21** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32S3** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

- **Seeeduino V4.3** を後のルーチンで使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)** を参照して追加を完了してください。

- **Arduino UNO R4 WiFi** を後のルーチンで使用する場合は、**Tools-> Board-> Boards Manager...** をクリックし、検索欄に「UNO R4 WiFi」と入力して最新バージョン（または使用したいバージョン）をインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>


### HX711 Arduino ライブラリ概要

#### 機能

スケッチを開発する前に、利用可能な関数を確認しましょう。

- `void begin(byte dout, byte pd_sck, byte gain )` —— データ出力ピン、クロック入力ピン、ゲイン係数でライブラリを初期化します。チャンネル選択は適切なゲインを渡すことで行われます。ライブラリのデフォルトは「128」（チャンネル A）です。
	- **入力パラメータ:**
		- **byte dout：** dout として渡される（byte に変換）HX711 回路配線。
		- **byte pd_sck：** pd_sck として渡される（byte に変換）HX711 回路配線。
		- **byte gain = 128：**
			- ゲイン係数が 64 または 128 の場合、チャンネル A が選択されます。
			- ゲイン係数が 32 の場合、チャンネル B が選択されます。

- `bool is_ready()` —— HX711 が準備完了かどうかを確認します。データシートによると、出力データが取得可能でない場合、デジタル出力ピン DOUT は高電位になります。シリアルクロック入力 PD_SCK は低電位である必要があります。DOUT が低電位になると、データが取得可能であることを示します。

- `void wait_ready(unsigned long delay_ms = 0);` —— チップが準備完了になるまで待機します。

- `bool wait_ready_retry(int retries = 3, unsigned long delay_ms = 0)` —— 指定された回数試行してチップが準備完了になるまで待機します。

- `bool wait_ready_timeout(unsigned long timeout = 1000, unsigned long delay_ms = 0)` —— タイムアウトまでチップが準備完了になるのを待機します。

- `void set_gain(byte gain = 128)` —— ゲイン係数を設定します。この設定は read() 呼び出し後にのみ有効になります。
	- **入力パラメータ:**
		- **byte gain = 128：** チャンネル A は 128 または 64 のゲインに設定可能です。チャンネル B は固定の 32 ゲインです。

- `long read()` —— チップが準備完了になるのを待機し、読み取り値を返します。

- `long read_average(byte times = 10)` —— 平均読み取り値を返します。
	- **入力パラメータ:**
		- **byte times = 10:** 読み取り回数。

- `double get_value(byte times = 1)` —— (read_average() - OFFSET) を返します。これは、風袋重量を除いた現在の値です。
	- **入力パラメータ:**
		- **byte times = 1:** 読み取り回数。

- `float get_units(byte times = 1)` —— get_value() を SCALE で割った値を返します。これは、キャリブレーションで得られた値で割った生データです。
	- **入力パラメータ:**
		- **byte times = 1:** 読み取り回数。

- `void tare(byte times = 10)` —— OFFSET 値を風袋重量として設定します。
	- **入力パラメータ:**
		- **byte times = 10:** 風袋値を読み取る回数。

- `void set_scale(float scale = 1.f)` —— SCALE 値を設定します。この値は生データを「人間が読みやすい」データ（測定単位）に変換するために使用されます。

- `float get_scale()` —— 現在の SCALE を取得します。

- `void set_offset(long offset = 0)` —— OFFSET を設定します。この値は実際の読み取り値から引かれる値（風袋重量）です。

- `long get_offset()` —— 現在の OFFSET を取得します。

- `void power_down()` —— チップを省電力モードにします。

- `void power_up()` —— 省電力モードからチップを復帰させます。

#### インストール

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/bogde/HX711" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ダウンロードしたZIPライブラリを使用するには、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックしてください。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### デモ例

**ステップ 1.** Grove - ADC for Load Cell (HX711)で測定を行う前に、**PD_SCK**をプルダウンして準備を整え、ロードセルをキャリブレーションする必要があります。`Grove_ADC_for_Load_Cell_(HX711)`のサンプルコードは以下の通りです：

```cpp
#include "HX711.h"

// HX711回路配線
const int LOADCELL_DOUT_PIN = 3;  // I2Cピンを設定
const int LOADCELL_SCK_PIN = 2;

HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("HX711 デモ");

  Serial.println("スケールを初期化しています");

  // データ出力ピン、クロック入力ピン、ゲインファクターでライブラリを初期化
  // 適切なゲインを渡すことでチャンネルを選択：
  // - ゲインファクターが64または128の場合、チャンネルAが選択されます
  // - ゲインファクターが32の場合、チャンネルBが選択されます
  // ゲインファクターのパラメータを省略すると、ライブラリのデフォルト値"128"（チャンネルA）が使用されます
  
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("スケール設定前:");
    if (scale.wait_ready_timeout(1000)) {
    long reading = scale.read();
    Serial.print("HX711 読み取り値: ");
    Serial.println(reading);
  } else {
    Serial.println("HX711が見つかりませんでした。");
  }	  // ADCからの生の読み取り値を出力

  Serial.print("平均読み取り値: \t\t");
  Serial.println(scale.read_average(20));  	// ADCからの20回の読み取り値の平均を出力

  Serial.print("値取得: \t\t");
  Serial.println(scale.get_value(5));		// ADCからの5回の読み取り値の平均からタレ重量（まだ設定されていない）を引いた値を出力

  Serial.print("単位取得: \t\t");
  Serial.println(scale.get_units(5), 1);	// ADCからの5回の読み取り値の平均からタレ重量（設定されていない）を引いた値を出力し、
						// SCALEパラメータ（まだ設定されていない）で割った値を出力

  scale.set_scale(2280.f);                      // 既知の重量でスケールをキャリブレーションして得られた値を設定; 詳細はREADMEを参照
  scale.tare();				        // スケールを0にリセット

  Serial.println("スケール設定後:");

  Serial.print("読み取り値: \t\t");
  Serial.println(scale.read());                 // ADCからの生の読み取り値を出力

  Serial.print("平均読み取り値: \t\t");
  Serial.println(scale.read_average(20));       // ADCからの20回の読み取り値の平均を出力

  Serial.print("値取得: \t\t");
  Serial.println(scale.get_value(5));		// タレ重量で設定されたADCからの5回の読み取り値の平均を出力

  Serial.print("単位取得: \t\t");
  Serial.println(scale.get_units(5), 1);        // SCALEパラメータで設定されたタレ重量を引いたADCからの5回の読み取り値の平均を出力

  Serial.println("読み取り値:");
}

void loop() {
  Serial.print("1回の読み取り値:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| 平均:\t");
  Serial.println(scale.get_units(10), 1);

  scale.power_down();			        // ADCをスリープモードにする
  delay(5000);
  scale.power_up();
}

```

**ステップ 2.** ボード選択ドロップダウンメニューをクリックし、「他のボードとポートを選択...」をクリックしてください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/4.png" style={{width:400, height:'auto'}}/></div>

**ステップ 3.** 「Arduino UNO R4 WiFi」を検索して選択してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/5.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4.** 「アップロード」をクリックしてArduinoにファームウェアをフラッシュしてください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/6.png" style={{width:400, height:'auto'}}/></div>

**ステップ 5.** Arduino IDEの**シリアルモニタ**を開くには、**ツール->シリアルモニタ**をクリックしてください。「スケール設定後:」というシリアル出力が表示されたら、数秒待ってから**重量センサー（ロードセル）0-500g**に力を加えてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/10.gif" style={{width:400, height:'auto'}}/></div>

**ステップ 6.** 結果は以下のように表示されるはずです。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/7.png" style={{width:800, height:'auto'}}/></div>

## リソース

**[PDF]**[INA125 データシート](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/res/INA125.pdf)

**[PDF]**[HX711 データシート](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/HX711.pdf)

**[ZIP]**[Grove - ADC for load cell (HX711) - 回路図ファイル](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/Grove%20-%20ADC%20for%20load%20cell%20(HX711)_SCH%26PCB.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>