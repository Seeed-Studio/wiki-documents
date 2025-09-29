---
description: Grove Lightning Sensor AS3935 の使い方
title: Grove Lightning Sensor AS3935
keywords:
- lightning
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove-lightning-sensor-as3935
last_update:
  date: 05/15/2025
  author: Citric
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Lightning-Sensor-AS3935-p-5603.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

## はじめに

Grove Lightning Sensor は非常に高感度なセンサーで、空気中の電場を検出し、内部の独自アルゴリズムを使用して、それが雷イベントを伴う嵐の前線によるものかどうかを判断します。Grove 標準ケーブルを使用することで、プラグアンドプレイデバイスとして非常に簡単に使用でき、屋内または屋外のアプリケーション環境に最適化するためのいくつかの調整を受け入れることができます。

このセンサーは、嵐の雷前線が近づいていることを予防的に警告するために使用され、電気機器や人間への損傷を防ぐことができます。また、気象研究にも役立ち、雷の強度やイベント数に関するデータを提供します。このセンサーは、予報気象ステーションに他のセンサーと完全に統合することができ、嵐が近づいている場合の作物保護において農業に非常に役立ちます。視界に入る前の嵐の雷前線を最大30～40kmの距離で検出することができます。

### 特徴

- 非常にコンパクトで使いやすいセンサー。

- 空気中の電場に非常に敏感で、雷前線特有の波形に一致するものだけを選択し、その他は除外。

- Arduino、Seeeduino、Raspberry Pi 開発ボードへの簡単なインターフェースを備えた I2C プロトコルによる通信。

- 非常に低消費電力で、スリープモードに移行して消費を削減し、バッテリー寿命を延ばすことが可能。

- 雷前線が検証されるたびに IRQ ピンに割り込み信号を送信。マイクロコントローラー接続やソフトウェア制御に便利。

- Grove システム完全互換インターフェース。

- 気象ステーションや警告デバイスへの簡単な統合により、電子機器や人間への損傷を防止。

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、Grove Lightning Sensor の特性に関する情報を提供します。

### 仕様

<table align="center">
	<tr>
	    <th align="center">パラメータ</th>
	    <th align="center">範囲/値</th>
	</tr>
	<tr>
	    <td align="center">入力電圧</td>
	    <td align="center">5ボルトまたは3.3ボルト（適切なはんだパッドを選択）</td>
	</tr>
	<tr>
	    <td align="center">通信</td>
	    <td align="center">I2C標準、提供された出力を使用したSPI</td>
	</tr>
	<tr>
	    <td align="center">最大検出範囲</td>
	    <td align="center">40 km</td>
	</tr>
	<tr>
	    <td align="center">プログラム可能</td>
	    <td align="left">はい、センサーが取り付けられているアプリケーションや環境に適合するように適切なレジスタをプログラム可能。</td>
	</tr>
</table>

## はじめに

### モジュールの電源供給選択

Grove Lightning Sensorは、5Vと3.3Vの2種類の供給電圧に対応しています。モジュールを使用する前に、供給電圧を決定し、簡単なはんだ付けを行う必要があります。

**5ボルト**の供給を選択する場合は、以下の画像のようにGrove Lightning Sensorの(5V)と(0)のパッドをはんだ付けしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/1.png" style={{width:500, height:'auto'}}/></div>

**3.3ボルト**の供給を選択する場合は、以下の画像のようにGrove Lightning Sensorのパッドをはんだ付けしてください。この場合、3.3ボルトで動作するLinkt Smart 7688 Duoボード用のSeeed Arduino Breakoutを使用していることになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/2.png" style={{width:500, height:'auto'}}/></div>

:::note
Grove Lightning Sensorは、ボードの電源が**オン**の状態でホットスワップ挿入に耐えることができますが、推奨されません。常に電源をオフにしてからGrove Lightning Sensorをボードコネクタに接続してください。
:::

## Arduinoの例

ここで提供されるArduinoコードは、センサーとの対話を可能にし、動作中の最適な挙動を決定する関連するすべてのレジスタを変更することを可能にします。センサーはコード内で説明されているようにレジスタに基本値が設定されており、これはアプリケーションの良い出発点です。アプリケーションに最適な設定を得るためには多少の作業が必要であり、センサーを使用する際には非常に挑戦的な作業となります。センサーは使用される環境に非常に適応性があります。

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- **Seeeduino**を後のルーチンで使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeed Studio XIAO SAMD21**を後のルーチンで使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040**を後のルーチンで使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840**を後のルーチンで使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3**を後のルーチンで使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

### デモ: SeeeduinoでGrove Lightning Sensorを使用する

#### 必要な材料

| Seeeduino V4.3 |  Grove - Lightning Sensor AS3935 |
|:--------------:|:--------------:|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG" style={{width:250, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/6.jpg" style={{width:250, height:'auto'}}/></div> |
|[**今すぐ購入**](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[**今すぐ購入**](https://www.seeedstudio.com/Grove-Lightning-Sensor-AS3935-p-5603.html)|

:::caution
使用前にセンサーの前面パッドがはんだ付けされていることを確認してください。画像で示されている位置がはんだ付けされていない場合、後でプログラムを実行する際にIICデバイスが検出されない問題が発生する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/7.jpg" style={{width:400, height:'auto'}}/></div>
:::

**ステップ3.** Grove Lightning SensorをSeeeduino V4のI2Cポートに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/3.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ4.** SeeeduinoをMicro-USBケーブルでPCに接続します。

**ステップ5.** 以下のプログラムをSeeeduinoにアップロードします。

<details>

<summary>完全なコードをプレビューするにはクリックしてください</summary>

```cpp
//*********************************************************************************
//***************  Seeed Groveセンサー開発用に設計されたコード *******************
//***************  GROVE   FRANKLYN LIGHTNING SENSOR AS3935     *******************
//***************  雷検出センサーの前面部分                     ******************* 
//***************                                               *******************
//*************** 初版: 1.0 - 2022年10月15日                    ******************* 
//*************** 著者: Davide Cogliati                         *******************
//*********************************************************************************
//
//作業概要:
//------------------------------------------------------------------------------------------------------
//このGROVEセンサーボードは、AS3935を統合したプログラム可能な完全統合型雷センサーICを搭載しており、近隣の雷活動の接近を検出し、嵐の中心までの距離を推定します。AS3935には、時間内の信号形状をチェックし、人工的な妨害を誤警報として排除する埋め込み雷アルゴリズムが含まれています。
//AS3935は、ノイズレベルに関する情報を提供し、ノイズフロアジェネレーターおよびノイズフロア評価ブロックを使用して高ノイズ条件の場合に外部マイクロコントローラーに通知することができます。これらの機能は、センサー自体のフィールドでの動作を最適化するために内部レジスタを介してプログラム可能です（屋内、屋外）。
//AS3935は、I²Cまたは4線式標準SPIを介してプログラム可能です。また、I²Cを使用する場合、3つの異なるアドレス（0X01、0X02、0X03）から選択することができます。2つのRCオシレーターによって内部的に生成される2つのクロック（TRCOおよびSRCO）があり、センサーがオンになるたびにこれらのオシレーターの精度を向上させるためにコマンドで自動キャリブレーション手続きを実行することができます。
//ボードは5ボルトまたは内部3.3ボルト電圧レギュレーターによって供給され、ボード上のジャンパー設定を選択することで適切な設定を選択できます。
//ボードは電磁場に非常に敏感であるため、偶発的なピークや誤った雷が検出される可能性があります。もちろん、内部レジスタの設定により誤トリガーイベントを最適化することができます。
//マイクロプロセッサがI²Cバスおよびボード上のIRQピンを介してボードに接続されている場合、雷警報を最適に管理し、適切なアルゴリズムを作成することでイベントのフィルタリングを達成することができます。
//このボードは、IRQピン出力にオシロスコープを接続し、Arduino GUIのシリアルプロッターおよびシリアルモニターを実行し、妨害行為をシミュレーションしたり雷をシミュレーションしたりしてデバイスが適切にトリガーするかどうかを確認することでテストされました。
//実験結果の分析により、イベントに対する極端な感度とAS3935の内部ファームウェアが妨害やシミュレーションされた雷をキャプチャする能力が示されました。もちろん、テスト中に内部レジスタの変更が行われ、応答がどのように変化するかを観察しました。
//-----------------------------------------------------------------------------------------------------
//スケッチの哲学:                     ---------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//このスケッチは、AS3935 Groveセンサーを簡単に操作する方法を提供するように設計されています。このスケッチは、センサーの機能を直接的に操作し、レジスタの内容を最適化してセンサーの最終的な挙動に影響を与える例を示しています。このスケッチを使用することで、SERIAL MONITORを使用したプレーンテキスト形式のデータ出力や、Arduino GUIのSERIAL PLOTTERを使用したグラフィカルなデータ出力を管理することができます。
//必要なライブラリは1つだけで、"#include <Wire.h>  //FOR I2C MODE COMUNICATION BUS"を使用してすべてを非常に簡単にすることができます。他のソフトウェア機能はすべて手動で記述されています。
//このスケッチは、センサー内部レジスタのテストとI2Cデバイスアドレス識別ルーチンを提供し、ボードのA0、A1タップのはんだ付けをテストしてデバイスアドレスを変更します。
//このスケッチはSPI機能通信ポートを管理しませんが、GROVE標準であるI2Cポートを管理します。SPIポートを使用するには、ボード上のジャンパーとはんだ付けタップを使用して設定を変更する必要があります（SIタップ）。SPI接続用の4ウェイコネクタパッドがボードの片側に配置されています。
//このボードは5.0ボルトまたは3.3ボルトの供給で動作し、マイクロコントローラーの供給電圧に最適化することができます。供給を選択するには、ボード上の簡単なジャンパー選択システムが提供されています。標準供給は5.0ボルトです。
//SPI通信ポートを使用する場合、このスケッチの通信指示を変更してSPIを使用するようにし、Arduinoの"#include <SPI.h>  //FOR SPI MODE COMUNICATION BUS"を"#include <Wire.h>"の代わりに使用する必要があります。
//このスケッチは、AS3935センサーを迅速に使用するために設計されており、多くの機能を理解する必要がないようにしていますが、もちろん必要な変更を加えて最終的なアプリケーションに適応させることができます。
//----------------------------------------------------------------------------------------------------
//
//********************************************************************************
//********************************************************************************
//********************************************************************************

#include <Wire.h>  //FOR I2C MODE COMUNICATION BUS

//------------------------------------------------------------------------------------------------
//bit0= 0  0= power ON ------> SET THIS MANUALLY to  POWER OFF STATE the SENSOR !!!
//         1= power OFF
//bit 1..5= AFE (gain) = 10010 (default value)
//Indoor  10010 suggested
//Outdoor 01110 suggested
//-----------------------------------------------------------------------------------------------
#define INDOOR            0b00100100 //power ON bit0= 0
#define OUTDOOR           0b00011100 //power ON bit0= 0
//-----------------------------------------------------------------------------------------------
#define DIRECT_COMMAND    0x96 //write this value in the following registers to operate a command
//---------------------------------
//  Action                 REGISTER
//---------------------------------
//  PRESET_DEFAULT          0x3C
//  CALIB_RCO               0x3D
//---------------------------------
//--------------------------------------------------
//global variables
//--------------------------------------------------
 char REG0X02reset_startup ;         //this is used during resetting STATISTICAL in working operation
 char REG0X02reset_startup_up ;      //this is used to start up the sensor
 char REG0X02reset_startup_down ;    //this is used to start down the sensor

//-----------------------------------------------------------------------------
//VERY IMPORTANT TO SEE RESULTS OUTPUT WITH ARDUINO SERIAL          -----------
//-----------------------------------------------------------------------------
//SET THE DISPLAY MODE WITH ARDUINO:
//select directly in ARDUINO GUI for "SERIAL MONITOR" or "SERIAL PLOTTING"
//----------------------------------------------------------------------------
//+) serial monitor   = data flow in legible format and variables readout
//+) serial plotting  = show  plotting of lightning events and other variables
//--------------------------------------------------------------------------------------------------------
char LITERAL_mode =1;  //0= no print data in SERIAL MONITOR,    1= yes print data on SERIAL MONITOR
char GRAPH_mode =0;    //0= no graphical data in SERIAL PLOTTER,  1= yes graphical data   SERIAL PLOTTER
//--------------------------------------------------------------------------------------------------------
  


//--------------------------------------------------------------------------------
//I2C ADDRESS SCANNER - FINDER          |
//---------------------------------------
//checks the presence of a valid AS3935 sensor online (this part can be omitted 
//in final application but use it during setting up for first time the I2C address
//----------------------------------------------------------------------------------
void setup()
{
  Serial.begin(9600); 
  
  if (LITERAL_mode ==1)
      {
      Serial.println("AS3935 LIGHTNING SENSOR| i2C SCANNER");
      Serial.println("Starting....");
      Serial.println("------------------------------------");
      delay(1000);
      }
  Wire.begin();
  Wire.setClock(100000); // set I2C  speed 

}

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
void loop()
{
  int c;
  int indevice;   //device number I2C address, in final application you can assign 
                  //directly the address (for example: indevice = 3;)
 
  //---------------------------------------------------
  // read/write functions for I2C mode:
  //---------------------------------------------------
  //**************************************************************************
  //**************************************************************************
  int done =1;       //flag to start self test on I2C sensor address
    indevice = 0;    //reset address value
    while (done)
    {

     
    indevice = indevice +1 ; 
    if (indevice > 7)
        indevice=0;
       
    Wire.requestFrom(indevice, 1);    // Request 1 bytes from slave device 
    
    if (LITERAL_mode ==1)
      {
       Serial.print("scanning device = 0x0");         // Print the character
       Serial.print(indevice);       
       Serial.println(" ");
      }
    delay(250);
  
    //-----------------------------------------------------------
    // SCANNED & FOUNF VALID  ADDRESS SHOWING REGISTER CONTENT
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    while(Wire.available()) 
    {
        c = Wire.read();    // Receive a byte as character
        if (LITERAL_mode ==1)
         {
           Serial.println();               
           Serial.print("data=.......... valid address .................. ");  // Print the character RECEIVED
           Serial.println();             
           Serial.print("found ADDR: 0X0");
           Serial.print(indevice);
           Serial.print(" -->  answer: ");
           Serial.print("[ ");
           Serial.print((int)c);         // Print the character
           Serial.print(" ]");           
         }  
        //-------------------------------------------------------------------------------------------------
        //registers FOR SETTING I2C ADDRESS: A0 & A1 using the soldering TAPS on the GROVE SENSOR A0, A1
        //-------------------------------------------------------------------------------------------------
        //A0        A1         ADR  0X0 
        //****************************************************
        //SOLDER   SOLDER    < NOT ALLOWED !!!!>         *****
        //SOLDER   NO        0X01    ;SOLDER TAP A0      *****
        //NO       SOLDER    0X02    ;SOLDER TAP A1      *****
        //NO       NO        0X03    ;NO SOLDERED TAPS   *****
        //----------------------------------------------------
        //--------------------------------------------------------------------------------------------
        //LIST OF THE  SETUP AND RESULT REGISTERS OF THE AS3935       --------------------------------
        //--------------------------------------------------------------------------------------------
        //AS3935_REGISTER_NAMES     |  write=W / read=R  |   reserved bits = x, modifiable bits= a
        //--------------------------------------------------------------------------------------------
        // AFE_GAIN          = 0x00     W/R                 > XXaa aaaa                            
        // THRESHOLD,        = 0X01     W/R                 > aaaa aaaa
        // LIGHTNING_REG     = 0X02     W/R                 > Xaaa aaaa
        // INT_MASK_ANT      = 0X03     W/R                 > aaaa Xaaa
        // ENERGY_LIGHT_LSB  = 0X04     R                   > -
        // ENERGY_LIGHT_MSB  = 0X05     R                   > -
        // ENERGY_LIGHT_MMSB = 0X06     R                   > -
        // DISTANCE          = 0X07     R                   > -
        // DISP /TUNING CAP  = 0X08     W/R                 > aaaa aaaa
        // CALIB_TRCO        = 0x3A     R                   > -
        // CALIB_SRCO        = 0x3B     R                   > -
        // PRESET            = 0x3C     W/R                 > aaaa aaaa  <--YOU CAN SEND DIRECT COMMAND IN THIS REGISTER (set all to default)!!!
        // CALIB_RCO         = 0x3D     W/R                 > aaaa aaaa  <--YOU CAN SEND DIRECT COMMAND IN THIS REGISTER (self calibration) !!!
        //--------------------------------------------------------------------------------------------
        //
        //--------------------------------------------------------------------------------------------
        //TUNE UP THE SENSOR &  write  data to  selected register  !                 ----------------
        //--------------------------------------------------------------------------------------------
        //for more .... PLEASE REFERE TO DATASHEET AS3935 !!!                        -----------------
        //--------------------------------------------------------------------------------------------
        //REGISTER 0X00: bits [0] and bits [1..5]
        //----------------------------------------
          if (LITERAL_mode ==1)
          {  
            Serial.println();
            Serial.print("writing to REGISTER 0x00 ");
          }  
        Wire.beginTransmission(indevice);
        Wire.write(0x00);
        //------------------------------
        //bit0= 0  power ON ------> SET THIS MANUALLY IF WANT TO PUT IN POWER OFF STATE THE SENSOR !!!
        //bit 1..5= AFE (gain) = 10010 (default value)
        //Indoor  10010 suggested
        //Outdoor 01110 suggested
        //------------------------------
        //BYTE = 00 10010 0 (0x24 hex)
        //------------------------------
        //INDOOR  = if indoor ...
        //OUTDOOR = if outdoor...
        Wire.write(INDOOR);
        Wire.endTransmission(true);
        if (LITERAL_mode ==1)
           {   
             Serial.println();
             Serial.print("Done ! ");
             Serial.println();
           }  
        delay(200);
        //------------------------------------------
        //REGISTER 0X01: bits [0..3] and bits[4..6]
        //------------------------------------------
        if (LITERAL_mode ==1)
         { 
          Serial.println();
          Serial.print("writing to REGISTER 0x01 ");
         }  
        Wire.beginTransmission(indevice);
        Wire.write(0x01);
        //-------------------------------------------------
        //bit0..3 watchdog threshold = 0010 (default value)
        //bit4..6 noise floor level  = 010  (default value)
        //---------------------------------------------------------------------------------------------------------------------------------------------
        // Continuous Input Noise Level |[μVrms]              Continuous Input Noise Level                     REG0x01[6]  REG0x01[5]    REG0x01[4]
        //    [μVrms] (oudoor)                                        [μVrms] (Indoor)  
        //---------------------------------------------------------------------------------------------------------------------------------------------
        //      390                                                          28                                   0         0           0
        //      630                                                          45                                   0         0           1
        //      860                                                          62                                   0         1           0
        //      1100                                                         78                                   0         1           1
        //      1140                                                         95                                   1         0           0
        //      1570                                                         112                                  1         0           1
        //      1800                                                         130                                  1         1           0
        //      2000                                                         146                                  1         1           1
        //---------------------------------------------------------------------------------------------------------------------------------------------  
        //BYTE = 0 010 0010 (0x22 hex)
        //-------------------------------------------------
        
        Wire.write(0b00100010);
        Wire.endTransmission(true);
        if (LITERAL_mode ==1)
        {  
          Serial.println();
          Serial.print("Done ! ");
          Serial.println();
        } 
        delay(200);
        //-------------------------------------
        //REGISTER 0X02:
        //-------------------------------------
        if (LITERAL_mode ==1)
        {  
         Serial.println();
         Serial.print("writing to REGISTER 0x02 ");
        }  
        Wire.beginTransmission(indevice);
        Wire.write(0x02);
        //-------------------------------------------------
        //bit0..3 spike rejection = 0010 (default value)    ------> greater values gives more rejection
        //                                                  ------> against disturbance but decreases sensitivity
        //bit4..5 number of lightnings = 00 (default value) ------> you can modify these 2 bits as required
        //bit6   clear statistics = 1 (default value)       ------> clear internal collected data
        //BYTE = 0 100 0010 (0x42 hex)
        //-------------------------------------------------
        REG0X02reset_startup_up =   0b01000010;   //this is used during resetting STATISTICAL in working operation
        REG0X02reset_startup_down = 0b00000010;   //this is used during resetting STATISTICAL in working operation
        REG0X02reset_startup   = 0b01000010;      //this is used at start  the sensor
        Wire.write( REG0X02reset_startup);
        Wire.endTransmission(true);
        if (LITERAL_mode ==1)
        {   
          Serial.println();
          Serial.print("Done ! ");
          Serial.println();
        }  
        delay(200);
        //-------------------------------------
        //REGISTER 0X03:
        //-------------------------------------
          if (LITERAL_mode ==1)
      {     
        Serial.println();
        Serial.print("writing to REGISTER 0x03");
       }  
        Wire.beginTransmission(indevice);
        Wire.write(0x03);
        //-------------------------------------------------
        //bit5    mask disturber  = 0 (default value -> NO MASKING)
        //bit6..7 frequency division ratio for  tuning  = 00 (default value)
        //all other bits  are reserved or read only !!!
        //BYTE = 0 000 0000 (0x00 hex)
        //-------------------------------------------------
        Wire.write(0b00000000);
        Wire.endTransmission(true);
        if (LITERAL_mode ==1)
         {    
          Serial.println();
          Serial.print("Done ! ");
          Serial.println();
         }  
        delay(200);
        //-----------------------------------------------------
        //REGISTER 0X08:
        //-----------------------------------------------------
        if (LITERAL_mode ==1)
        {   
          Serial.println();
          Serial.print("writing to REGISTER 0x08 ");
        }  
        Wire.beginTransmission(indevice);
        Wire.write(0x08);
        //-------------------------------------------------
        //bit0..3 Internal Tuning Capacitors (from 0 to 120pF in steps of 8pF) = 000 (default value) ---> to get best match to 500 kHz resonance frequency
        //------------------------------------
        // Here you give the value of the capacitor you want turned on. It accepts up to 120pF in steps of 8pF: 8, 16, 24, 32 etc.The change in frequency is
        // somewhat modest. At the maximum value you can lower the frequency up to 22kHz. As a starting point, the products designed in house ship around 496kHz
        //(though of course every board is different) putting you within one percenT of a perfect resonance; the datasheet specifies being within 3.5 percent as
        // optimal. 
        //
        //
        //bit5    Display TRCO on IRQ pin  = 0 (default value) ---------> put it to "1" to enable frequency square wave OUT on INT pin of the board !
        //bit6    Display SRCO on IRQ pin  = 0 (default value) ---------> put it to "1" to enable frequency square wave OUT on INT pin of the board !
        //bit7    Display LCO on IRQ pin   = 0 (default value) ---------> put it to "1" to enable antenna resonance frequency square wave OUT on INT pin of the board !
        //-------------------------------------
        //TRCO - Timer RCO Oscillators 1.1MHz
        //SRCO - System RCO at 32.768kHz
        //LCO - Frequency of the Antenna
        //-------------------------------------
        //BYTE = 0 000 0000 (0x00 hex)
        //-----------------------------------------------------------------------------------------------------------------------------------
        //STEPS TO DEBUG HARDWARE THE RESONANCE FREQUENCY OF THE BOARD:
        //--------------------------------------------------------------
        //1) Observing LCO 500 Khz center resonance frequency requires to connect an oscilloscope probe to the IRQ pin of the Seed Grove AS3935
        //2) Then place bit 7= 1 and bit 5=0, bit 6=0;
        //3) Then start application after programming with this Sketch.
        //4) Finally the frequency measured must be multiplied by the internal DIVISION FACTOR as shown below:
        //-----------------------------------------------------------------------------------------------------------------------------------
        // Division Ratio REG0x03[7] REG0x03[6]
        //  16          0               0
        //  32          0               1
        //  64          1               0
        //  128         1               1
        //-------------------------------------------------------------------------------------------------------------------------------
        //In this case DIV RATIO= 16, so if the measure is 31.9 kHz this is finally 510.4 kHz 31.9 x 16), and is a 2.0 % variation 
        //and is OK because  the data sheet suggests to stay < 3.5 % to achieve best results with the board.
        //--------------------------------------------------------------------------------------------------------------------------------
        Wire.write(0b00000000);  //to achieve LCO on IRQ pin program (0b10000000)
        Wire.endTransmission(true);
        if (LITERAL_mode ==1)
         { 
           Serial.println();
           Serial.print("Done ! ");
           Serial.println();
         } 
        delay(200);
        //***************************************************************************
        //------------------------------------------------
        //OPTIONAL direct command issue to the AS3935
        //------------------------------------------------
        //-----------------------------------------------------------------------------------------------
        //  DIRECT_COMMAND    0x96 //write this value in the following registers to operate a command
        //---------------------------------
        //  Action                 REGISTER
        //---------------------------------
        //  PRESET_DEFAULT          0x3C
        //  CALIB_RCO               0x3D
        //---------------------------------
             if (false)     //------> write "true" to activate direct command
            { 
             Wire.beginTransmission(indevice);
             Wire.write(0x3C);
             Wire.write(0x96);
             Wire.endTransmission(true);
             if (LITERAL_mode ==1)
              {    
                Serial.println();
                Serial.print("Done PRESET DEFAULT ! ");
                Serial.println();
               }  
             delay(1500);
            }
            //---------------------------------
            if (false)     //------> write "true" to activate direct command
            { 
             Wire.beginTransmission(indevice);
             Wire.write(0x3D);
             Wire.write(0x96);
             Wire.endTransmission(true);
             if (LITERAL_mode ==1)
              {    
                Serial.println();
                Serial.print("Done CALIBRATION RCO ! ");
                Serial.println();
               }  
             delay(1500);
             }
        //***************************************************************************
        //-------------------------------------------------------------------------
        //SCAN INTERNAL SETTING REGISTERS AND SHOW SETUP SAVED IN I2C   !!!
        //-------------------------------------------------------------------------
        int NOISEFLOOR;
        int SPIKEREJECTION; 
        int WATCHDOGTHRESHOLD; 
        
        if (LITERAL_mode ==1)
         {   
           Serial.print("DEVICE REGISTERS [0X00] to [0x08]  and [0x3A, 0X3B] ");
         }     
        //indevice = 3;
        for (int i=0; i<9; i++)
          { 
            Wire.beginTransmission(indevice);
            Wire.write(i); //address to be read  
            Wire.endTransmission(false);   //do not release the line!
            if (LITERAL_mode ==1)
              {   
               //Serial.print("DEVICE REGISTERS [0X00] to [0x08]  and [0x3A, 0X3B] "); 
               Serial.println();             
               Serial.print("REGISTER address = 0x0");   
               Serial.print(i);               // Print the character
            } 
            delay(200);
            Wire.requestFrom(indevice,1); // request bytes from register XY
             //-----------------------------------------------------------------------

            c=0;
            while(Wire.available())
              {
                 c = Wire.read();    // Receive a byte as character
               if (i== 1)
                {
                 NOISEFLOOR= c;
                 NOISEFLOOR = NOISEFLOOR & (0b01110000);
                 NOISEFLOOR = NOISEFLOOR / 16; ; //shift  to right 4 bits.
                }
               if (i== 1)         
                {
                 SPIKEREJECTION= c;
                 SPIKEREJECTION = SPIKEREJECTION & (0b00001111);
                }
                if (i== 2)
                {
                  WATCHDOGTHRESHOLD= c;
                  WATCHDOGTHRESHOLD =  WATCHDOGTHRESHOLD & (0b00001111);
                }

               if (LITERAL_mode ==1)
               {        
                Serial.print(" *** REGISTER data= [ ");         // Print the character
                Serial.print((unsigned int)c);
                Serial.print(" ]");
               }   
             }
             delay(200);
          }
            //------------------------------------------------
            //OUTPUT OF MAIN SETUP
            //------------------------------------------------
            if (LITERAL_mode ==1)
              {  
               Serial.println();
               Serial.println("*************************************************************************");
               Serial.println("* THESE REGISTER INFLUENCE SYSTEM DETECTION FIGURE, MODIFY AS NECESSARY *");
               Serial.println("*************************************************************************");
               Serial.println();
               Serial.print("Noise floor set: ");
               Serial.println(NOISEFLOOR,DEC);
               Serial.print("Spike rejection is: ");
               Serial.println(SPIKEREJECTION,DEC);
               Serial.print("WATCHDOG setpoint is: ");
               Serial.println(WATCHDOGTHRESHOLD,DEC);
               }

         
            //----------------------------------
            //----------------------------------
            //---------------------------------------------------------------------------------
            //special registers SETUP   -------------------------------------------------------
            //---------------------------------------------------------------------------------
            // TRCO              = 0x3A  calibration state of TRCO
            // bit7 =  TRCO_CALIB_DONE  Calibration of TRCO done (1=successful)
            // bit6 =  TRCO_CALIB_NOK   Calibration of TRCO unsuccessful (1=not successful)
            //---------------------------------------------------------------------------------  
            // SRCO              = 0X3B calibration state of SRCO
            // bit7 =  SRCO_CALIB_DONE  Calibration of TRCO done (1=successful)
            // bit6 =  SRCO_CALIB_NOK   Calibration of TRCO unsuccessful (1=not successful)
            //---------------------------------------------------------------------------------
            if (LITERAL_mode ==1)
             { 
              Serial.println("*****************************************************");
              Serial.println("State of calibration of the sensor:");
              Serial.println("*****************************************************");
              }
            Wire.beginTransmission(indevice);
            Wire.write(0x3A); //address to be read 
            Wire.endTransmission(false);   //do not release the line!
             if (LITERAL_mode ==1)
              { 
                Serial.println();        // carriage return after the last label
                Serial.print("REGISTER address = 0x3A");         // Print the character
              }
            Wire.requestFrom(indevice,1); // request bytes from register XY
            //-------------------------------------------------------------------------
            c=0;
            while(Wire.available())
            {
               c = Wire.read();    // Receive a byte as character
                if (LITERAL_mode ==1)
               {
                 Serial.print(" *** REGISTER data= [ ");         // Print the character
                 Serial.print(c, BIN);         // Print the character 
                 Serial.print(" ]");
                 Serial.println();
                 c= c & 0b10000000;
                   if(c > 0)
                   Serial.print("< TRCO calibration DONE >");         // Print the character
                   if(c == 0)
                   Serial.print("< TRCO calibration NOT DONE >");         // Print the character
              }
             }
            delay(200);
            //-----------------------------------------------------------
            Wire.beginTransmission(indevice);
            Wire.write(0x3B); //address to be read 
            Wire.endTransmission(false);   //do not release the line!

            if (LITERAL_mode ==1)
             { 
               Serial.println();        // carriage return after the last label
               Serial.print("REGISTER address = 0x3B");         // Print the character
              }
            Wire.requestFrom(indevice,1); // request bytes from register XY
            c=0;
            while(Wire.available())
             {
               c = Wire.read();    // Receive a byte as character
                 if (LITERAL_mode ==1)
                  { 
                    Serial.print(" *** REGISTER data= [ ");         // Print the character
                    Serial.print(c,BIN);         // Print the character 
                    Serial.print(" ]");
                    Serial.println();
                     c= c & 0b10000000;
                       if(c > 0)
                       Serial.print("< SRCO calibration DONE >");             // Print the character
                       if(c == 0)
                       Serial.print("< SRCO calibration NOT DONE >");         // Print the character
                    Serial.println();
                    Serial.println("*****************************************************");
                   }
            done =0;     //---------> DONE THE CALIBRATION AND INTERNAL REGISTERS SETUP EXIT "while loop"
            }
            delay(200);
        }
        delay(1000); 
     }
             //--------------------------------------------------------------------------
             //WAITING CYCLE - ENDLESS - LOOKING FOR LIGHTNINGS
             //variables from AS3935 during operative cycle
             //--------------------------------------------------------------------------
             int INT_struck ; //event interrupt register
             int N_lightning; //number of lightnings detected
             int Av_distance; //average distance extimation
             int NOISE; //interrupt for high noise level
             int Disturber; //interrupt for disturber detected
             int L_struck; //interrupt for lightning detected
             int Distance; //estimated hit distance
             int Energy_LSB; //energy single event LOW BYTE
             int Energy_MSB; //energy single event HIGH BYTE
             int Energy_MMSB; //energy single event AV.Energy content
             //-------------------------------------------------
             //-------------------------------------------------
             //GRAPH SCALING MIN-MAX: MODIFY AS YOU LIKE!!!
             //-------------------------------------------------
             int  MAX_scale =30;        //setting max Y of plotting
             int  min_scale =0;         //setting min Y of plotting
             //-------------------------------------------------
             //PRINT OUT METHOD:
             //---------------------------------------------------------------------------
             //  LITERAL_mode =0;    //0= no printing data on SERIAL MONITOR
             //  GRAPH_mode   =1;    //1= yes print graphical data in SERIAL PLOTTER
             //---------------------------------------------------------------------------
             //*****************************************
             //SET UP THE PLOTTER X-Y READINGS (X= time)
             //*****************************************
            Serial.print("MAX"); //max line marker
            Serial.print(" ");
            Serial.print("min");//min line marker 
            Serial.print(" ");
            //*****************************************
            //SETUP LABELS NAME
            //*****************************************
            Serial.print("NOISE");
            Serial.print(" ");
            Serial.print("Disturber");
            Serial.print(" ");
            Serial.print("Distance");
            Serial.print(" ");
            Serial.print("Energy_MSB/20");  //SCALED FACTOR /20
            Serial.print(" ");
            Serial.print("Energy_MMSB");
            //Serial.print(" ");
            Serial.println();
            //**************************************************
            //**************************************************
            // STARTING ENDLESS OBSERVATION CYCLE FOR EVENTS
            //**************************************************
            //**************************************************
             while (1)
             {
               if (LITERAL_mode ==1)
              { 
               Serial.println();
               Serial.print(" *** WAITING FOR LIGHTNING - WATCHING ");         // Print the character
               Serial.println();
              } 
               //------------------------------------------------------------------------
               //register OF INTEREST reading !
               //------------------------------------------------------------------------               
           // indevice = 3;

               //------------------------------------------------------------------
               //CHECK FOR INCOMING INT MESSAGE ON REG 0X03 bit= INT_L ---> "1000"
               //------------------------------------------------------------------
            Wire.beginTransmission(indevice);
            Wire.write(0x03); //address to be read
            Wire.endTransmission(false);   //do not release the line!
            Wire.requestFrom(indevice,1); // request bytes from register XY
            c=0;
            while(Wire.available())
            {
              //------------------------
              //CLEAN the variables
              //------------------------
              NOISE =0 ;
              Disturber =0;
              L_struck =0 ;
              Distance =0 ;
              Energy_LSB =0 ;
              Energy_MSB =0 ;
              Energy_MMSB =0 ;
              //------------------------
              c = Wire.read();    // Receive a byte as character
              INT_struck = c;
              NOISE  =INT_struck & (0b00000001);
              Disturber  =INT_struck & (0b00000100);
              L_struck  =(INT_struck & (0b00001000))/8;  //this is a flag bit so can be 0 or 1.
             }
           //------------------------------------------------------------------------------------------------
           //DEBUG ALL !!!
           //------------------------------------------------------------------------------------------------
           // L_struck =1; --->   this show all messages, testing purpose-DEBUG of AS3935 system remove "//"
           //
           //-------------------------------------------------------------------------------------------------
          if ((GRAPH_mode == 1) & (L_struck ==0))
            {
            //------------------------------------------------
            //GRAPH- PLOTTER  FORM OF EVENT READINGS
            //------------------------------------------------
          
            Serial.print(MAX_scale);
            Serial.print(" ");
            
            Serial.print(min_scale);
            Serial.print(" ");
            //Disturber=20;
            //Distance=30;
            //Energy_MMSB=40;
            //------------------------------------------------
            Serial.print(NOISE,DEC);
            Serial.print(" ");
            Serial.print(Disturber,DEC);
            Serial.print(" ");
            Serial.print(Distance,DEC);
            Serial.print(" ");
            //Serial.println(Energy_LSB,DEC);
            //Serial.print(" ");
            Energy_MSB = Energy_MSB/20;   //JUST A SCALING FACTOR TO PLOT !
            Serial.print(Energy_MSB,DEC);
            Serial.print(" ");
            Serial.print(Energy_MMSB,DEC);
            Serial.print(" ");
            Serial.println();
            } 
           //------------------------------------------------------------------------------
           if (L_struck > 0)
            {
          
           //----------------------------------------------------------------
           //distance estimation - other lightning data - energy calculation
           //----------------------------------------------------------------
           //DISTANCE:
           //---------------
            Wire.beginTransmission(indevice);
            Wire.write(0x07); //address to be read
            Wire.endTransmission(false);   //do not release the line!
            Wire.requestFrom(indevice,1); // request bytes from register XY
            c=0;
            while(Wire.available())
            {
            c = Wire.read();    // Receive a byte as character
            Distance = c;
            Distance  = Distance & (0b00111111);
            }
            //-------------------------
            //ENERGY LSB - MSB - MAIN
            //-------------------------
            Wire.beginTransmission(indevice);
            Wire.write(0x04);              //address to be read
            Wire.endTransmission(false);   //do not release the line!
            Wire.requestFrom(indevice,1);  // request bytes from register XY
            c=0;
            while(Wire.available())
            {
            c = Wire.read();    // Receive a byte as character
            Energy_LSB = c;
             }
            //-------------------------
            //ENERGY MSB 
            //-------------------------
            Wire.beginTransmission(indevice);
           // Wire.requestFrom(indevice, 1);    // Request 1 bytes from slave device 
            Wire.write(0x05); //address to be read
            Wire.endTransmission(false);   //do not release the line!
            Wire.requestFrom(indevice,1); // request bytes from register XY
            c=0;
            while(Wire.available())
            {
            c = Wire.read();    // Receive a byte as character
            Energy_MSB = c;
             }
            //-------------------------
            //ENERGY MMSB 
            //-------------------------
            Wire.beginTransmission(indevice);
            Wire.write(0x06); //address to be read
            Wire.endTransmission(false);   //do not release the line!
            Wire.requestFrom(indevice,1); // request bytes from register XY
            c=0;
            while(Wire.available())
            {
            c = Wire.read();    // Receive a byte as character
            Energy_MMSB = c;
            Energy_MMSB  = Energy_MMSB & (0b00011111);
            }
            //-------------------------------------------------------------------------
            //select type of readout FULL NUMERICAL DATA or GRAPH DATA
            //-------------------------------------------------------------------------
            if (GRAPH_mode == 1)
            {
            //------------------------------------------------
            //LEGIBILE FORM OF EVENT READINGS
            //------------------------------------------------
            Serial.print(MAX_scale);
            Serial.print(" ");
            
            Serial.print(min_scale);
            Serial.print(" ");
            //------------------------------------------------
            Serial.print(NOISE,DEC);
            Serial.print(" ");
            Serial.print(Disturber,DEC);
            Serial.print(" ");
            Serial.print(Distance,DEC);
            Serial.print(" ");
            //Serial.println(Energy_LSB,DEC);
            //Serial.print(" ");
            Energy_MSB = Energy_MSB/20;   //JUST A SCALING FACTOR TO PLOT !
            Serial.print(Energy_MSB,DEC);
            Serial.print(" ");
            Serial.print(Energy_MMSB,DEC);
            Serial.print(" ");
            Serial.println();
            } 
            if (LITERAL_mode == 1)
            {
            //------------------------------------------------
            //LEGIBILE FORM OF EVENT READINGS
            //------------------------------------------------
            Serial.println();
            Serial.println("*****************************************************");
            Serial.println();
            Serial.print("Noise LEVEL detected: ");
            Serial.println(NOISE,DEC);
            Serial.print("Disturber detected: ");
            Serial.println(Disturber,DEC);
            Serial.print("Lightining detected: ");
            Serial.println( L_struck,DEC);
            Serial.println();
            Serial.print("Estimated hit distance: ");
            Serial.println(Distance,DEC);
            Serial.print("LSB single event energy: ");
            Serial.println(Energy_LSB,DEC);
            Serial.print("MSB single event energy: ");
            Serial.println(Energy_MSB,DEC);
            Serial.print("MMSB single event energy: ");
            Serial.println(Energy_MMSB,DEC);
            } 
        //---------------------------------------------------------------------------------
        //-----------------------------------------------------------
        //CLEAN UP REGISTERS for  OLD DATA activate if required
        //for final application
        //-----------------------------------------------------------
       if (false)  //replace with "true" to activate !
        {
        //-------------------------------------
        //REGISTER 0X02:
        //-------------------------------------
         if (LITERAL_mode == 1)
           {
            Serial.println();
            Serial.print("writing to REGISTER 0x02 ");
          }
         Wire.beginTransmission(indevice);
         Wire.write(0x02);
        //-------------------------------------------------
        //bit0..3 spike rejection = 0010 (default value)  --------> greater values gives more rejection
        //                                                --------> against disturbance but decreases sensitivity
        //bit4..5 number of lightnings = 00 (default value)
        //bit6   clear statistics = 1 (default value)
        //BYTE = 0 100 0010 (0x42 hex)
        //-------------------------------------------------
        //toggle 1-0-1 to reset statistics
        //-------------------------------------------------
        Wire.write(REG0X02reset_startup_up);
        Wire.endTransmission(true);
        delay(200);
        //--------------------------
        Wire.write(REG0X02reset_startup_down);
        Wire.endTransmission(true);
        delay(200);
        //-------------------------
        Wire.write(REG0X02reset_startup_up);
        Wire.endTransmission(true);
        if (LITERAL_mode == 1)
          {
            Serial.println();
            Serial.print("Done ! ");
            Serial.println();
          } 
        }
        delay(200);
        //------------------------------
        //------------------------------
        //------------------------------
      }         
     delay(1000);  // <------------- SCANNING INTERVAL .... MODIFY AS NEEDED !!!
             
    }

  }   
//-----------------------------------------------------------------------------
//------------------ END OF SKETCH  -------------------------------------------
//-----------------------------------------------------------------------------

```

</details>

センサーが雷を検知すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/4.png" style={{width:500, height:'auto'}}/></div>

テスト目的で、ライターの点火装置を使用して雷をシミュレートし、センサーが正常に動作しているか確認することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-lightning-sensor/5.jpg" style={{width:600, height:'auto'}}/></div>

## リソース

- **[PDF]**[AS3935 データシート](https://files.seeedstudio.com/wiki/Grove-lightning-sensor/AS3935_Datasheet_EN_v2.pdf)
- **[PDF]**[デモ調整例](https://files.seeedstudio.com/wiki/Grove-lightning-sensor/Demo-Tuning_example.pdf)
- **[PDF]**[SCHEMATIC GROVE AS3935 rev1](https://files.seeedstudio.com/wiki/Grove-lightning-sensor/SCHEMATIC-GROVE-AS3935-rev1.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>