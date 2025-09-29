---
description: Seeeduino ADK メインボード
title: Seeeduino ADK メインボード
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_ADK_Main_Board
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Main_Board.jpeg)

Android 3.1 プラットフォーム（Android 2.3.4 にもバックポートされています）は、Android Open Accessory サポートを導入しました。これにより、外部 USB ハードウェア（Android USB アクセサリ）が特別な「アクセサリ」モードで Android デバイスと連携できるようになります。Google の ADK リファレンスデザインを基に、Seeeduino の利点を統合して Seeeduino ADK メインボードを開発しました。

今すぐ Seeeduino ADK メインボードを Android モバイルデバイスに接続し、カスタムアクセサリの開発を始めましょう。

[SKU:ARD52028P](https://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8)

##  仕様 ##

- Android Open Accessories 開発キット (ADK) 対応 (Android v2.3.4 以上)  

- MicroBridge を使用して Android Debug Bridge (ADB) と連携 (Android v1.5 以上)

- USB シールドを統合した Arduino Mega として動作

- 動作電圧: 5V/3V3

- 入力電圧: 6V - 18V

- デジタル I/O: 50

- アナログ入力: 16

- PWM 出力: 14

- ハードウェアシリアルポート (UART): 4

- I2C: 1

- ハードウェア SPI (最大 8Mbps): 1

- オンボード USB ホスト (MAX3421)

- オンボード USB スレーブ (FT232RL)

- 内蔵 3.3V-500mA LDO 電源レギュレータ

##   インターフェース  ##

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Parts.jpg)
Seeeduino ADK の主な特徴

Seeeduino ADK のハードウェアブロックは以下の通りです：
A: Micro USB ソケット、メインボードを PC に接続。Arduino IDE を使用してスケッチをアップロードするために使用。
B: スライドスイッチ、動作または I/O 電圧を選択: 3.3V または 5V
C: USB A プラグ、Android モバイルデバイスに接続。
D: JST コネクタ / DC ジャック、外部 DC 電源供給用。外部 DC を使用する場合は PC を接続しないでください。
E: リセットボタン、シールド使用中でもリセットを簡単に行えるよう側面に配置。
F: I/O ピン
G: ICSP、AVR ICSP を使用して Arduino ブートローダーをプログラムするため。
H: Max3421E GPIO のブレークアウトピン
I: FT232RL のブレークアウトピン

##   デモンストレーション  ##

以下の画像は、Android モバイルを使用した **Seeeduino ADK メインボード** のアプリケーション例を示しています。このデモアプリケーションは、このページで説明されている MicroBridge に基づいています。すべての基本的な電子部品は [Arduino Sidekick Basic Kit](https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/) から取得されています。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/SeeeduinoADK_Setup.jpg)
Seeeduino ADK メインボードと Android モバイルの接続

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADK_Demo.jpg)

- ファームウェアのアップロード
- VCC スライドスイッチを 5V に設定します。

- Seeeduino ADK メインボードを Micro USB 経由で PC の USB ポートに接続します。

- Arduino IDE でボードタイプを **Arduino Mega 2560** に設定します。

- デモスケッチをコンパイルしてメインボードにアップロードします。

- Android アプリ
- Android プラットフォーム開発ソフトウェアをインストールします。

- デモ Android アプリを Eclipse ワークスペースにインポートします。

- モバイルデバイスを PC に接続し、アプリケーションをアップロードします。

- モバイルを ADK メインボードに接続します。

- まだ有効化されていない場合は、モバイルデバイスで ADB を有効化します（MicroBridge のみ）。

- リセットボタンを押します。

###   MicroBridge の使用   ###

サンプルアプリケーションとライブラリはリソースセクションで利用可能です。以下の Arduino スケッチと Android コードには、使用方法がコメントで詳しく説明されています。

- SeeeduinoADKDemo.pde

```
//Seeeduino ADK デモ - Niels Brouwers の MicroBridge ライブラリを使用
//LED を D12 に接続し、可変抵抗器 (POT) を A0 に接続

#include <SPI.h>
#include <Adb.h>

// Adb 接続
Connection * connection;

// ADC サンプリングの経過時間。ADC 値が Android デバイスに送信されるレート。
long lastTime;

// LED の状態。初期状態は OFF。
uint8_t LEDState=0;

// シェル接続のイベントハンドラ。
// このイベントハンドラは、Android デバイスから Seeeduino ADK にデータが送信されるたびに呼び出されます。
// ADK の I/O に送信されるデータ/コマンドはここで処理されます。
//
// 例: 1. 出力ポートの制御 2. IIC またはシリアルポートを介して ADK に接続されたデバイスとのやり取り。

void adbEventHandler(Connection * connection, adb_eventType event, uint16_t length, uint8_t * data)
{

  // この例では、データパケットは 1 バイトで構成され、D12 に接続された LED の状態を決定します。
  // このアプリケーションではデータのサイズが事前に決定されています。Android デバイスも同じサイズを使用します。

  if (event == ADB_CONNECTION_RECEIVE)
  {
     if(LEDState != data[0])
     {
         digitalWrite(12, data[0]);   // LED の状態を変更
         Serial.println(data[0],DEC);
       	 LEDState = data[0];          // LED の状態を保存
     }
  }

}

void setup()
{
  // デバッグ用シリアルポート
  Serial.begin(57600);

  // 開始時刻を記録
  lastTime = millis();

  // デジタルピン 12 (LED が接続されている) を出力として設定
  pinMode(12,OUTPUT);

  // ADB サブシステムを初期化  
  ADB::init();

  // ADK メインボードのシェルに ADB ストリームを開く。自動再接続。未使用のポート番号を使用 (例: 4568)
  connection = ADB::addConnection("tcp:4568", true, adbEventHandler);  

}

void loop()
{
  // ADC をサンプリングする必要があるか確認
  if ((millis() - lastTime) > 20)
  {
    // ADC 値を読み取る
    uint16_t data = analogRead(A0);

    // ADC 値を 2 バイトのデータとして Android デバイスに送信
    connection->write(2,(uint8_t*)&data);
    lastTime = millis();
  }

  // ADB サブシステムをポーリング
  ADB::poll();
}
```

- Android アプリケーション
- 完全な Android アプリケーションを [Seeeduino ADK デモアプリケーションパッケージ](http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip) からダウンロードしてください。主要な Java ファイルは以下にコメント付きで記載されています：

```
/* このアプリケーションは、Niels Brouwers の MicroBridge ライブラリを使用して
 * Seeeduino ADK と Android デバイス間の相互作用を示します。
 *
 * Android デバイス: ADB (Android Debug Bridge) をサポートする Android v1.5 以上のデバイス。
 *  
 * このアプリケーションは非常にシンプルな設計を採用しており、理解しやすくなっています。
 *
 * 概要:
 * 1. Seeeduino ADK メインボードは定期的にアナログチャネル 0 をサンプリングし、その値を
 *    Android デバイスに送信して表示します。この値は TextView と SeekBar ウィジェットを使用して表示されます。
 *
 * 2. Android デバイスは ADK メインボードのデジタルピン 12 に接続された LED の状態を制御します。
 *    ボタンウィジェットがこれに使用されます。
 *
 * MicroBridge は ADB ベースのクライアント-サーバー実装を使用します。Android デバイス上で実行されるサーバーコードは
 * 別スレッドで実行されます。そのため、UI ウィジェットの値の更新は UI スレッドで行う必要があります。
 * このアプリケーションは、追加の UI ウィジェットを簡単に追加できる XML ベースの UI 作成を使用しています。
 *
 */
package com.seeedstudio.SeeeduinoADKDemo;

import java.io.IOException;

import org.microbridge.server.AbstractServerListener;
import org.microbridge.server.Server;

import android.view.View;
import android.view.Window;
import android.view.View.OnClickListener;
import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Button;


public class SeeeduinoADKDemo extends Activity implements OnClickListener {
	private int adcSensorValue=10;

	//UI Widgets
	TextView tvAdcvalue;
	SeekBar sbAdcValue;
	Button bOutPutLED;

	boolean LEDState = false ; //initially OFF

	// Create TCP server (based on  MicroBridge LightWeight Server).
	// Note: This Server runs in a separate thread.
	Server server = null;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.main);

		bOutPutLED = (Button) findViewById(R.id.buttonOuputLED);
		bOutPutLED.setOnClickListener(this);


		// Create TCP server (based on  MicroBridge LightWeight Server)
		try
		{
			server = new Server(4568); //Use the same port number used in ADK Main Board firmware
			server.start();			
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "Unable to start TCP server", e);
			System.exit(-1);
		}

		server.addListener(new AbstractServerListener() {

			@Override
			public void onReceive(org.microbridge.server.Client client, byte[] data)
			{

				if (data.length<2) return;
				adcSensorValue = (data[0] & 0xff) | ((data[1] & 0xff) << 8);

				//Any update to UI can not be carried out in a non UI thread like the one used
				//for Server. Hence runOnUIThread is used.
				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						new UpdateData().execute(adcSensorValue);

					}
				});

			}

		});	 

	}	//End of TCP Server code

	// UpdateData Asynchronously sends the value received from ADK Main Board.
	// This is triggered by onReceive()
	class UpdateData extends AsyncTask<Integer, Integer, String> {
		// Called to initiate the background activity
		@Override
		protected String doInBackground(Integer... sensorValue) {

			//Init SeeekBar Widget to display ADC sensor value in SeekBar
			//Max value of SeekBar is set to 1024
			SeekBar sbAdcValue = (SeekBar) findViewById(R.id.sbADCValue);	    	
			sbAdcValue.setProgress(sensorValue[0]);    
			return (String.valueOf(sensorValue[0]));  //This goes to result

		}

		// Called when there's a status to be updated
		@Override
		protected void onProgressUpdate(Integer... values) {
			super.onProgressUpdate(values);
			// Not used in this case
		}

		// Called once the background activity has completed
		@Override
		protected void onPostExecute(String result) {
			//Init TextView Widget to display ADC sensor value in numeric.
			TextView tvAdcvalue = (TextView) findViewById(R.id.tvADCValue);
			tvAdcvalue.setText(String.valueOf(result));

		}
	}

	//Called when the LED button is clicked
	@Override
	public void onClick(View v) {
		byte data;


		// Toggle the state of LED
		if(LEDState == true)
		{
			LEDState = false;
			data = 0;
			bOutPutLED.setText("LED Off");
		}
		else
		{
			LEDState = true;
			data = 1;
			bOutPutLED.setText("LED On");
		}

		try
		{
			//Send the state of LED to ADK Main Board as a byte
			server.send(new byte[] {(byte) data});
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "problem sending TCP message", e);
		}

	}

}
```

### Google ADKの使用 ###

アクセサリAPIの使用方法に関する完全なドキュメントについては、**Android ADK Developerページ**をご覧ください。

### Mega 2560として ###

Seeeduino ADKメインボードは、Seeeduino Mega 2560として使用できます。また、GROVEシステムとも互換性があります。Grove - Base Shieldを使用して、利用可能な多数のGroveモジュールを接続することができます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg)

以下は、2.8インチTFTタッチシールドがSeeeduino ADKメインボードと連携して動作するデモです。
![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg)

- Seeeduino ADKメインボードを2.8インチTFTタッチシールドに接続します。

- SDカードをFATモードでフォーマットします。

- 動作電圧スライドスイッチを3.3Vに設定します。

- 240 x 320サイズの24ビットビットマップ画像（.bmp）ファイルをいくつかSDカードにコピーします。[bmpデモアプリケーションアーカイブ](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)にいくつかのサンプルがあります。

- SDカード/マイクロSDカードアダプタ（マイクロSDカード付き）を、以下の図のように**Seeeduino ADKメインボード**に接続します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_photoframe.png)

- [TFT Touch Library](https://www.seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip)をダウンロードしてインストールします。

- [SD Card](https://github.com/adafruit/SD)ライブラリをダウンロードし、Arduinoフォルダにインストールします。

- [このスケッチ](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)をコンパイルしてアップロードします。

出力結果：
![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_PhotoframeDemo.jpg)

- 詳細については、**2.8インチTFTタッチシールド**を参照してください。

- **Circuits@Home**のOleg Mazurovは、MAX3421Eに基づくUSBホストシールドを最初に設計しました。これはGoogleのADKリファレンスボードに採用されました。彼のサイトには、MAX3421EベースのUSBホストシールドを使用してUSBキーボード、マウス、Bluetoothドングル、Wiiリモコンなどを操作するための情報やコード例が豊富に掲載されています。

## オンライン回路図ビューアー

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[ライブラリ]** [修正版MicroBridge Arduinoライブラリ](https://wiki.seeedstudio.com/ja/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip)
- **[ライブラリ]** [Arduino 1.0用修正版MicroBridge Arduinoライブラリ](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/res/Adb_for_Arduino1.0.zip)
- **[デモ]** [Seeeduinoデモ - Androidアプリ](https://wiki.seeedstudio.com/ja/images/1/1b/SeeeduinoADKDemo-App.zip)
- **[PDF]** [Seeeduino ADK Eagle回路図PDF](https://wiki.seeedstudio.com/ja/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf)
- **[Eagle]** [Seeeduino ADK Eagle回路図およびボードファイル](https://wiki.seeedstudio.com/ja/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip)
- **[アクセサリ]** [Android Open Accessory Development Kitページ](http://developer.android.com/guide/topics/usb/adk.html)
- **[MicroBridge]** [MicroBridgeページ](http://blogs.unpad.ac.id/dominodiaz/)
- **[USB]** [USBホストシールドを使用したゲームコントローラー](http://adrian-fh98.web.unair.ac.id/)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>