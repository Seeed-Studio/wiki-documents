---
description: Hercules Dual 15A 6-20V モーターコントローラー
title: Hercules Dual 15A 6-20V モーターコントローラー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Hercules_Dual_15A_6-20V_Motor_Controller
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Hercules_03.jpg)

Hercules Dual 15A 6-20V モーターコントローラーは、高電流モータードライブ制御ボードです。マイクロコントローラープロセッサ、モータードライブ回路、充電回路、保護回路を含んでおり、電源供給、制御、駆動の完全なソリューションを提供します。

L298と比較して、ハーフブリッジモーターコントローラーIR2104とN-MOSFETは、最大15Aの出力電流で重負荷デバイスを駆動する際に顕著な利点を持っています。Hercules Dualモーターコントローラーは広範な電源設計がされており、リモートカーやモデル飛行機に使用される汎用の7.4〜11.1Vリポバッテリーも適用可能です。過負荷時にはヒューズがボードを保護し、対応するLEDが保護状態を表示します。

このモーターコントローラーはArduino互換です。特に拡張性に重点を置いており、標準的なGroveポートが予約されているため、モーターカーのプラットフォーム上でサーボやエンコーダーなどの豊富なモジュールに簡単にアクセスできます。そのため、多機能を備えた多用途な作品を構築することが可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html)

特徴
--------

- MOSFETに基づくフルブリッジドライブ回路は、2つの独立したチャンネルをサポートし、各チャンネル最大15A
- ヒューズ保護状態を表示するLED
- 複数のGroveポートにより、サーボ、エンコーダー、センサーと簡単に接続可能
- ATMega328コントローラー、Arduino互換

仕様
--------------

| 項目                      | 最小 | 標準値 | 最大  | 単位 |
|---------------------------|-----|---------|------|------|
| 動作電圧                 | 6.0 | -       | 20.0 | VDC  |
| チャンネルごとのモーター電流 | -   | -       | 15   | A    |
| I/O電圧                  | -   | 5       | -    | VDC  |
| I/Oロジック(TTL)         | -   | 5       | -    | VDC  |
| 温度範囲                 | -40 |         | +125 | C    |

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Controller_Interface_Function.jpg)

**A:** エンコーダーコネクタ。

**B:** Groveコネクタ。

**C:** サーボコネクタ。

**D:** ATMega328P IC。

**E:** SPIコネクタ。

**F:** プログラミングコネクタ。

**G:** リセットボタン。

**H:** チャンネル1モーターブローヒューズ。

**J:** チャンネル2モーターブローヒューズ。

**K:** DCモーターチャンネル1スクリュー端子。

**L:** DCモーターチャンネル2スクリュー端子。

**M:** バッテリー入力スクリュー端子。

使用方法
-----

### コネクタ概要

**エンコーダーコネクタ**

[Herculesプラットフォーム](https://wiki.seeedstudio.com/ja/Skeleton_Bot-4WD_hercules_mobile_robotic_platform)のモーターにはモーター速度を測定するエンコーダーが搭載されています。この2つのコネクタはこれらのエンコーダーを接続するために使用されます。ヘッダーはエンコーダーに電力を供給するために5VDCも供給します。

**Groveコネクタ**

これらのサーボコネクタは標準的なサーボスタイルのヘッダーGND、+5V、および信号を設定しており、サーボの角度を制御します。

**バッテリー入力スクリュー端子**

バッテリーコネクタは入力スクリュー端子にGNDとVMでマークされています。VMはバッテリーの正極側です。GNDはバッテリーの負極側です。入力電圧範囲が6〜20Vであることを確認し、損傷を避けてください。

**モータースクリュー端子**

モータースクリュー端子はチャンネル1用にM1A / M1B、チャンネル2用にM2A / M2Bでマークされています。モーターには特定の極性はありません。モーターが希望する方向とは逆に動作する場合は、モーターの配線を逆にして回転を反転させることができます。J21&J20、J22&J23は並列接続されているため、[Hercules](https://wiki.seeedstudio.com/ja/Skeleton_Bot-4WD_hercules_mobile_robotic_platform)の左側の2つのモーターを1つのチャンネルに接続し、右側の2つのモーターをもう1つのチャンネルに接続する必要があります。

### 使用方法

<div class="admonition note">
<p class="admonition-title">注意</p>
コントローラーは、コードをダウンロードするためにPCに接続するプログラミングコネクタから直接電源を供給することはできません。
</div>

コントローラーは、バッテリーまたはDC電源（6-20V）によってPowerスクリューJ1から電源を供給する必要があります。コントローラーは2つの15Aスローブローヒューズを使用して「H」ブリッジを保護します。電源を接続した後：

- DCモーターをチャンネル1スクリュー端子に接続します。
- UartSBee V4とUSBケーブルを使用してコントローラーをコンピューターに接続します。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/IMG_0204-1-.JPG)

- [モーターコントローラーライブラリ](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip)をロードし、「motorDriverDemo」プログラムを実行します。

```
    #include "motordriver_4wd.h"
    #include <seeed_pwm.h>

    void setup()
    {
        MOTOR.init(); //すべてのピンを初期化
    }

    void loop()
    {
        MOTOR.setSpeedDir(DIRF, 80); //モーター1とモーター2の方向: DIRF、速度: 80 (範囲: 0-100)を設定
        delay(3000);
        MOTOR.setSpeedDir(DIRR, 80); //モーター1とモーター2の方向: DIRR、速度: 80 (範囲: 0-100)を設定
        delay(3000);
    }
```

<div className="admonition note">
  <p className="admonition-title">注意</p>
  モーターには2つの動作方向があります: DIRF（前進）とDIRR（後退）。モーターが逆方向に動作する場合は、モーターの配線を逆にして回転を反転させることができます。
</div>

- コントローラーをコンピューターから切断します。
- バッテリー入力スクリュー端子を使用してコントローラーをバッテリーまたはDC電源に接続します。
- これでモーターが一定の速度で回転するのが確認できます。

### 参考

「motorDriverDemo」にはいくつかの関数が含まれています。各行がどのように結果に影響を与えるかを理解するには、コメントを注意深く調べる必要があります。以下のmotodriver_4wdライブラリで定義されている関数を参照してください。

**1. setStop1()**

説明: モーター1を停止

**2. setStop2()**

説明: モーター2を停止

**3. void setSpeedDir(int ispeed, unsigned char dir)**

説明: motor1とmotor2の速度と方向を設定します。

**4. void setSpeedDir1(int ispeed, unsigned char dir)**

説明: motor1の速度と方向を設定します。

**5. void setSpeedDir2(int ispeed, unsigned char dir)**

説明: motor2の速度と方向を設定します。

使用方法の拡張
------------

Hercules Dual 15A 6-20V Motor Controllerを基に、強力なパワーと優れた衝撃吸収効果を持つリモートコントロールカーを設計しました。

### リモートコントロール

**必要なアイテム:**

- RFBeeモジュール  
- Grove - Thumb Joystick  
- Grove - XBee Carrier  
- バッテリー  

RFBeeモジュール: リモートでデータを送信するために使用します。

Grove - Thumb Joystick: リモートコントロールカーを操作するために使用します。

Grove - XBee Carrier: RFBeeを便利に使用するためのキャリアです。MiniUSBソケットを使用してRFBeeにコードをアップロードできます。

<div class="admonition note">
<p class="admonition-title">注意</p>
USBケーブルを使用してPCに接続することで、バッテリーの代わりに使用できます。
</div>

- RFBeeをGrove - XBee CarrierのBeeソケットに差し込みます。
- [RFBeeライブラリ](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/RFBee_Library.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パス: ..\arduino-1.0.1\libraries。
- デモコード[Remote lvc](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Remote_lvc.zip)を1つのRFBeeにダウンロードしてアップロードします。アップロード前に、Tools->Board->Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega168を選択し、Toolsメニューから正しいシリアルポートを選択してください。
- Grove - Thumb JoystickをGrove - XBee CarrierのIIC Groveコネクタに接続します。
- Grove - XBee Carrierのバッテリーコネクタにバッテリーを接続します。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Remote_Control.jpg)

<div className="admonition note">
  <p className="admonition-title">注意</p>
  Grove - XBee Carrierのコネクタについては、対応するWikiのインターフェース機能を参照してください。
</div>

### 受信機
**必要なアイテム:**

- RFBeeモジュール  
- Grove - XBee Carrier  
- Hercules Dual 15A 6-20V Motor Controller  

RFBeeモジュール: リモートでデータを送信するために使用します。

Grove - XBee Carrier: RFBeeを便利に使用するためのキャリアです。MiniUSBソケットを使用してRFBeeにコードをアップロードできます。

15A 6-20V Motor Controller: モーターを駆動して回転させます。

- RFBeeをGrove - XBee CarrierのBeeソケットに差し込みます。
- Grove - XBee CarrierのIICをモーターコントローラーのIICコネクタに接続します。
- 4つのモーターをMotor1A/Motor1B(Motor2A/Motor2B)に接続します。

モーターコントローラーには、以下のように**4WD Herculesモバイルロボットプラットフォーム**を使用します:
![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Car_Body.jpg)

- 別のRFBeeモジュールにコードをアップロードします。
```
    // RFBee送信と受信のデモ
    #include <Arduino.h>
    #include <EEPROM.h>
    #include <RFBeeSendRev.h>
    #include <RFBeeCore.h>
    #include <Wire.h>

    #define FRAMESTART1                 0x53                // データフレーム開始1
    #define FRAMESTART2                 0x01                // データフレーム開始2
    #define FRAMEEND1                   0x2f                // データフレーム終了1
    #define FRAMEEND2                   0x45                // データフレーム終了2

    void sendToI2C(unsigned char ilen, unsigned char *idata)
    {
        Wire.beginTransmission(4);                           // デバイス#4に送信
        for(int i = 0; i<ilen; i++) {Wire.write(idata[i]);}  // 1バイト送信
        Wire.endTransmission();                              // 送信終了
    }

    void setup(){

        pinMode(10, OUTPUT);
        RFBEE.init();
        Wire.begin();
        Serial.begin(38400);
        Serial.println("ok");
    }

    unsigned char rxData1[200];               // データ長
    unsigned char len1;                       // 長さ
    unsigned char srcAddress1;
    unsigned char destAddress1;
    char rssi1;
    unsigned char lqi1;
    int result1;

    unsigned char cntGetDta = 5;

    void loop()
    {
        if(RFBEE.isDta())
        {
            result1 = receiveData(rxData1, &len1, &srcAddress1, &destAddress1, (unsigned char *)&rssi1 , &lqi1);
            Serial.println(len1);
            for(int i = 0; i< len1; i++)
            {
                Serial.print(rxData1[i]);Serial.print("\t");
            }
            
            Serial.println();
            
            sendToI2C(6, rxData1);
        }
    }
```

- モーターコントローラー用のライブラリ[Motodriver 4wd.zip](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motodriver_4wd.zip)。アップロード前に、Tools->Board->Arduino Duemilanove w/ ATmega328を選択してください。

### 結果

Hercules Dual 15A 6-20V Motor Controllerと4WD Herculesモバイルロボットプラットフォームを基にしたリモートコントロールカーは、19Lの容量の水容器を運ぶことができます。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [4WDロボットコントローラー Eagle ファイル](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip)
- [4WDロボットコントローラー回路図.pdf](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/4WD_Robot_Controller_Schematic.pdf)
- [モーターコントローラーライブラリ](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>