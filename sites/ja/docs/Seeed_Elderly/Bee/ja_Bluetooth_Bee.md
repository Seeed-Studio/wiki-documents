---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Bluetooth_Bee
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](http://bz.seeedstudio.com/depot/images/product/bbee_LRG.jpg)

**Bluetooth Bee**は、既存の**Xbee**ソケットと互換性があり、透明なワイヤレスシリアル接続を簡単にセットアップできる<font size={4} face="黑体">Bluetooth Serial Port Profile(SPP)</font>モジュールです。  
シリアルポートBluetoothモジュールは、完全な2.4GHz無線トランシーバーとベースバンドを備えたBluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps変調に完全対応しています。**CSR Bluecore 04**-External単一チップBluetoothシステムをCMOS技術とAFH(Adaptive Frequency Hopping Feature)を使用して構築しています。最小フットプリントは**12.7mm x 27mm**です。

モデル：[WLS125E1P](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## 特徴 ##

### ハードウェアの特徴 ###

- 典型的な-80dBm感度。

- 最大+4dBm RF送信出力。

- 完全対応Bluetooth V2.0+EDR 3Mbps変調。

- 低消費電力1.8V動作、1.8〜3.6V I/O。

- PIO制御。

- プログラム可能なボーレートを備えたUARTインターフェース。

- 統合PCBアンテナ。

- xBee互換ヘッダー。

### ソフトウェアの特徴 ###

- デフォルトのボーレート: <font size={4} font face="黑体">38400</font>, データビット:8, ストップビット:1, パリティ:なし, データ制御:あり。

- 対応ボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800。

- CTSとRTSを使用してデータストリームを制御。

- PIO0で上昇パルスが検出されると、デバイスは切断されます。

- ステータス指示ポートPIO1: 低-切断、高-接続。

- PIO10は<font color="red" font>赤</font>LEDに接続され、PIO11は緑LEDに接続されています。マスターとスレーブがペアリングされると、赤と緑のLEDが2秒間隔で1回点滅し、切断されると緑のLEDのみが1秒間に2回点滅します。

- デフォルトで最後に接続したデバイスに自動接続。

- デフォルトで一致したデバイスの接続を許可。

- デフォルトPINコード: "0000"。

- 接続範囲外で切断された場合、30分以内に自動再接続。

## 応用例 ##

- Arduino / [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)およびその他のMCU用のワイヤレスシリアルポートとして。

- UartSBeeと接続した場合のPC用Bluetoothシリアルポートとして。

## 注意事項 ##

- Seeeduino / Arduinoと使用する場合、動作電圧を3.3Vに設定してください。それ以外の場合は適切なロジックレベルコンバーターを使用してください。

- UartSBeeと使用する場合、動作電圧を3.3Vに設定してください。

- ボーレートを変更するコマンドはリセット後も保持されます。そのため、次回使用時のボーレートを覚えておいてください。

- SoftwareSerialを使用する場合、ボーレートを38400以上に設定しないでください。

## 回路図 ##

[Bluetooth Beeの回路図とEagle形式のボードファイル](https://aps-solver.com/services/transportation/refrigerated-cargo/)  
[APS貨物会社による冷蔵輸送サービス](https://aps-solver.com/services/transportation/refrigerated-cargo/)

## ピン定義と定格 ##

ボトムビュー:
![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-pin.jpg)

| ピン   | #  | パッドタイプ   | 説明                    |
|-------|----|----------------------------------------------------|--------------------------------|
| PI09  | 29 | 双方向                                           | プログラム可能な入出力ライン |
| PI08  | 28 | 双方向                                           | プログラム可能な入出力ライン |
| PIO7  | 27 | 双方向                                           | プログラム可能な入出力ライン |
| PIO6  | 26 | 双方向                                           | プログラム可能な入出力ライン |
| RTS   | 25 | CMOS出力、弱い内部プルアップ付き三状態           | UART送信要求、アクティブ低 |
| PIO5  | 24 | 双方向                                           | プログラム可能な入出力ライン |
| PI04  | 23 | 双方向                                           | プログラム可能な入出力ライン |
| PCMSY | 22 | 双方向                                           | 同期PCMデータ |
| CTS   | 21 | CMOS出力、弱い内部プルアップ付き三状態           | UART送信クリア、アクティブ低 |
| PIO3  | 20 | 双方向                                           | プログラム可能な入出力ライン |
| PIO2  | 19 | 双方向                                           | プログラム可能な入出力ライン |
| USBDP | 18 | 双方向                                           |                                |
| USBDN | 17 | 双方向                                           |                                |
| CLK   | 16 | CMOS出力、弱い内部プルアップ付き三状態           | SPI（シリアルペリフェラルインターフェース）クロック |
| MI    | 15 | CMOS出力、弱い内部プルアップ付き三状態           | SPIデータ出力 |
| MO    | 14 | CMOS出力、弱い内部プルアップ付き三状態           | SPIデータ出力 |
| CS    | 13 | CMOS出力、弱い内部プルアップ付き三状態           | シリアルペリフェラルインターフェース用チップセレクト、アクティブ低 |
| AIO1  | 12 | 双方向                                           | プログラム可能な入出力ライン |
| AIO0  | 11 | 双方向                                           | プログラム可能な入出力ライン |
| GND   | 10 | VSS                                             | グランドポート |
| PCMIN | 9  | CMOS入力                                        | 同期PCMデータ入力 |
| PCMOT | 8  | CMOS出力                                        | 同期PCMデータ入力 |
| PCMCK | 7  | 双方向                                           | 同期PCMデータ入力 |
| PIO1  | 6  | 双方向                                           | プログラム可能な入出力ライン |
| IRST  | 5  | CMOS出力、弱い内部プルアップ付き三状態           | リセット（低の場合）、リセットを引き起こすには入力を5ms以上低にする必要があります |
| PIO0  | 4  | 双方向                                           | プログラム可能な入出力ライン |
| RX    | 3  | CMOS出力、弱い内部プルアップ付き三状態           | UARTデータ入力 |
| TX    | 2  | CMOS出力、弱い内部プルアップ付き三状態           | UARTデータ入力 |
| 3V3   | 1  | 3.3V                                            | 統合された3.3V（+）供給、オンチップ線形レギュレーター出力（3.15-3.3Vの範囲） |

## メカニック寸法 ##

Bluetooth Bee ボードのサイズは 12.7mm x 27mm です。

## 使用方法 ##

### ハードウェアのインストール ###

#### Arduino と XBee Shield の接続 ####

[XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) を使用して **Bluetooth Bee** を Seeeduino / Arduino に接続します。トグルスイッチを正しい位置に設定する方法については、[XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) のドキュメントを参照してください。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### UartSbee を使用して PC に接続 ####

UartSBee を使用して **Bluetooth Bee** を PC に接続します。Bluetooth Bee を接続する前に、電源選択トグルスイッチを 3.3V に設定してください。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BluetoothBee_with_UartSBee.JPG)

### ソフトウェアの説明 ###

#### 動作スケッチマップ ####

以下のスケッチは、マスターおよびスレーブモードでの **Bluetooth Bee** の動作概要を示しています。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-1.jpg)

#### フローチャート ####

以下のフローチャートは、**Bluetooth Bee** プログラミングのクイックスタートガイドを示しています。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-2.jpg)

#### デフォルト設定を変更するためのコマンド ####

1. 動作モードの設定

|  \r\n+STWMOD=0\r\n |   デバイスの動作モードをクライアント（スレーブ）として設定します。保存してリセットします。 |
|--|||
| **\r\n+STWMOD=1\r\n** | **デバイスの動作モードをサーバー（マスター）として設定します。保存してリセットします。**  |

**注意:** \r\n は操作に必要であり、値は Hex で **80x0D 0x0A** です。**\r** と **\n** はそれぞれ **キャリッジリターン** と **ラインフィード**（または次の行）を表します。

2. ボーレートの設定

|   \r\n+STBD=115200\r\n | ボーレートを 115200 に設定します。保存してリセットします。  |
|---|---|
|    **対応ボーレート: 9600, 19200, 38400, 57600, 115200, 230400, 460800.**|  ||

3. デバイス名の設定

|  \r\n+STNA=abcdefg\r\n  | デバイス名を「abcdefg」に設定します。保存してリセットします。   |
|---|---|
||||

 \r\n+STNA=abcdefg\r\n  
 デバイス名を「abcdefg」に設定します。保存してリセットします。

4. 電源投入時に最後にペアリングしたデバイスに自動接続

| \r\n+STAUTO=0\r\n  | 自動接続を禁止します。保存してリセットします。   |
|---|---|
|  **\r\n+STAUTO=1\r\n** |  **自動接続を許可します。保存してリセットします。** |

5. ペアリングされたデバイスが接続を許可する

| \r\n+STOAUT=0\r\n   |   禁止します。保存してリセットします。 |
|---|---|
| **\r\n+STOAUT=1\r\n**  | **許可します。保存してリセットします。** |

6. PINコードの設定

|  \r\n +STPIN=2222\r\n |  PINコード「2222」を設定します。保存してリセットします。  |
|---|
|||                     |

7. PINコードの削除（MCU による PINコード入力）

|   \r\n+DLPIN\r\n |  PINコードを削除します。保存してリセットします。 |
|---|---|
|   |   ||

8. ローカルアドレスコードの読み取り

  |\r\n+RTADDR\r\n |             デバイスのアドレスを返します。  |
|---|---|
|   |   ||

9. 有効範囲外にある場合のマスターデバイスへの自動再接続（スレーブデバイスは有効範囲外にある場合、30分以内に自動再接続します）

|  \r\n+LOSSRECONN=0\r\n  |  自動再接続を禁止します。  |
|---|---|
| **\r\n+LOSSRECONN=1\r\n** |  **自動再接続を許可します。** |

#### 通常操作のためのコマンド ####

#### 1. 問い合わせ ####

#### a) マスター

| \r\n+INQ=0\r\n  | 問い合わせを停止します。   |
|---|---|
|  **\r\n+INQ=1\r\n**  |  **問い合わせを開始/再開します。**  |

#### b) スレーブ

|   \r\n+INQ=0\r\n | 問い合わせを無効にします。  |
|---|---|
| **\r\n+INQ=1\r\n** |  **問い合わせを有効にします。** |

**+INQ=1** コマンドが成功すると、赤と緑の LED が交互に点滅します。

#### 2. Bluetooth モジュールが問い合わせ結果を返す ####

|  \r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n |アドレス「aa,bb,cc,dd,ee,ff」と名前「name」を持つシリアル Bluetooth デバイスが問い合わせられました。   |
|---|---|
|   |   ||

#### 3. デバイスの接続 ####

| \r\n+CONN=aa,bb,cc,dd,ee,ff\r\n  | アドレス「aa,bb,cc,dd,ee,ff」を持つデバイスに接続します。  |
|---|---|
|   |   ||

#### 4. Bluetooth モジュールが PINコードの入力を要求 ####

\r\n+INPIN\r\n

#### 5. PINコードの入力 ####

|  \r\n+RTPIN=code\r\n  |   |
|---|---|
|   **例: RTPIN=0000** | **PINコード「0000」を入力します。** |

#### 6. デバイスの切断 ####

PIO0 を高にすると、現在動作中の Bluetooth デバイスが切断されます。

#### 7. ステータスの返却 ####

\r\n+BTSTA:xx\r\n

xx ステータス:

- 0 - 初期化中

- 1 - 準備完了

- 2 - 問い合わせ中

- 3 - 接続中

- 4 - 接続済み

(**注意**: これはコマンドではなく、モジュールが各コマンド後に返す情報です)

### プログラミング ###

#### フロー制御ベースの実装 ####

以下のスケッチは、**Bluetooth Bee** をスレーブデバイスとして構成し、PC または他のマスターデバイスからの接続要求を待機する方法を示しています。Bluetooth Bee は、上記のように XBee Shield を介して Seeeduino に接続されています。Bluetooth Bee は Arduino / Seeeduino のデジタルピン 11 および 12 に接続されています。このピンでのシリアル通信をサポートするために NewSoftSerial ライブラリを使用します。Arduino のハードウェアシリアルポートは、スケッチのアップロードやデバッグに使用できます。このスケッチでは、CheckOK() を使用したフロー制御メカニズムを使用します。各コマンド間に任意の遅延を使用する代わりに、CheckOK() を使用します。CheckOK() が不要な場合は、コマンド間に少なくとも 3 秒の遅延を使用してください。

```cpp
/*
BluetoothBee デモコード - フロー制御ベースの実装
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

著者: Visweswara R

このデモコードはフリーソフトウェアです。GNU Lesser General Public
License のバージョン 2.1 またはそれ以降のバージョンに基づいて、
再配布および変更が可能です。

このライブラリは有用であることを期待して配布されていますが、
商品性や特定目的への適合性に関する保証はありません。
詳細については GNU Lesser General Public License を参照してください。

このライブラリとともに GNU Lesser General Public License のコピーを受け取るべきです。
受け取っていない場合は、以下の住所に連絡してください:
Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

製品の詳細については https://www.seeedstudio.com/depot/ を確認してください。

*/

/* このスケッチを Seeeduino にアップロードし、リセットボタンを押してください */

#include <SoftwareSerial.h>   //ソフトウェアシリアルポート
#define RxD 11
#define TxD 12

#define DEBUG_ENABLED  1

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{
  //典型的な Bluetooth コマンド - 応答シミュレーション:

  //PC Bluetooth シリアルターミナルから 'a' を入力
  //Bluetooth Bee - Wiki を参照してください

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("接続されました");
    //ここに Bluetooth 通信ロジックを記述できます
  }

}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //BluetoothBee のボーレートをデフォルトの 38400 に設定
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeeduinoBluetooth\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // この遅延は必要です。
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // この遅延は必要です。
}

//応答 "OK" が受信されたか確認
void CheckOK()
{
  char a,b;
  while(1)
  {
    if(blueToothSerial.available())
    {
    a = blueToothSerial.read();

    if('O' == a)
    {
      // 次の文字 K を待機します。場合によっては available() が必要です。K がすぐに利用可能でない場合があります。
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }
      if('K' == b)
      {
        break;
      }
    }
   }
  }

  while( (a = blueToothSerial.read()) != -1)
  {
    //他の応答文字がすべて受信されるまで待機
  }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();   
}
```

#### 遅延ベースの実装 ####

以下のスケッチは、CheckOK() の代わりに delay() を使用するように上記のプログラムを修正したものです。この場合、ハードウェアシリアルポートはデバッグ目的で使用されます。シリアルモニタを 9600 ボーで開いてください。MCU と Bluetooth Bee の間の完全な通信がシリアルモニタに表示されます。

```cpp
/*
BluetoothBee デモコード - 遅延ベースの実装
2011 Copyright (c) Seeed Technology Inc.  全著作権所有。

著者: Visweswara R

このデモコードはフリーソフトウェアです。GNU Lesser General Public License のバージョン 2.1 またはそれ以降のバージョンの条件に基づいて、再配布および/または変更することができます。

このライブラリは有用であることを期待して配布されていますが、商品性や特定の目的への適合性の保証を含む、いかなる保証もありません。詳細については GNU Lesser General Public License を参照してください。

このライブラリと共に GNU Lesser General Public License のコピーを受け取ったはずです。受け取っていない場合は、以下のアドレスに連絡してください:
Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

製品の詳細については、https://www.seeedstudio.com/depot/ をご覧ください。
*/

/* このスケッチを Seeeduino にアップロードし、リセットボタンを押してください */

#include <SoftwareSerial.h>   // ソフトウェアシリアルポート
#define RxD 11
#define TxD 12

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    Serial.begin(9600);          // デバッグ用シリアルポート。必要ない場合はこの行をコメントアウトしてください  
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("You are connected to Bluetooth Bee");
    // ここに Bluetooth 通信ロジックを記述できます
  }
}

void setupBlueToothConnection()
{
    Serial.print("Setting up Bluetooth link");       // デバッグ用。必要ない場合はこの行をコメントアウトしてください    
    blueToothSerial.begin(38400); // BluetoothBee のボーレートをデフォルトの 38400 に設定
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=modem\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n+STPIN=0000\r\n");
    delay(2000); // この遅延は必要です。
    blueToothSerial.print("\r\n+INQ=1\r\n");
    delay(2000); // この遅延は必要です。
    Serial.print("Setup complete");
}

void sendBlueToothCommand(char command[])
{
    char a;
    blueToothSerial.print(command);
    Serial.print(command);                          // デバッグ用。必要ない場合はこの行をコメントアウトしてください    
    delay(3000);

    while(blueToothSerial.available())              // デバッグ用。必要ない場合はこの行をコメントアウトしてください  
    {                                               // デバッグ用。必要ない場合はこの行をコメントアウトしてください   
       Serial.print(char(blueToothSerial.read()));  // デバッグ用。必要ない場合はこの行をコメントアウトしてください  
    }                                               // デバッグ用。必要ない場合はこの行をコメントアウトしてください   
}
```

#### GNU/Linux で Bluetooth Bee を PC に接続する (Bluetooth ドングル経由) ####

この手順では、**Bluetooth Bee** を GNU/Linux OS 上の PC に接続する方法を示します。PC 側では USB Bluetooth ドングルを使用して **Bluetooth Bee** と通信します。フロー制御実装スケッチが Seeeduino にアップロードされています。

- gnome-bluetooth をインストールします。

```
sudo apt-get install gnome-bluetooth
```

- シェルから bluetooth-properties アプリケーションを開きます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config0.png)

- 「新しいデバイスをセットアップ」をクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config1.png)

そして「次へ」をクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.png)

- 「PIN オプションを開く」をクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.1.png)

- 固定 PIN を 0000 に設定します。0000 は上記のスケッチで使用されているデフォルトの PIN です。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config3.png)

- デバイスセットアップウィンドウが開きます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config4.png)

- セットアップ完了ダイアログが開きます。「閉じる」をクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config5.png)

- **Bluetooth Bee** のアドレス 00:13:EF:00:00:24 がシェルに表示されます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config6.png)

- **Bluetooth Bee** を rfcomm ポートにバインドします。ここでは **Bluetooth Bee** のアドレスをシリアルポートデバイス /dev/rfcomm0 にバインドします。

```
user@user-desktop:~$ sudo rfcomm bind 0 00:13:EF:00:00:24 1
user@user-desktop:~$ ls /dev/rfcomm*
/dev/rfcomm0
```

- この /dev/rfcomm0 シリアルポートは、cutecom のような任意のシリアルポートターミナルでアクセスできます。

- /dev/rfcomm0 をボーレート:38400、データビット:8、ストップビット:1、フロー制御なしで開きます。
- 文字 'a' を送信します。

- Seeeduino + Bluetooth Bee は **"You are connected to Bluetooth Bee"** と応答します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config8.png)

#### Windows で Bluetooth Bee を PC に接続する (Bluetooth ドングル経由) ####

- Microsoft Bluetooth デフォルトドライバをインストールします。「コントロールパネル -> Bluetooth デバイス」を開きます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows0.jpg)

- 「追加」ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows1.jpg)

- 「デバイスがセットアップされ、検出可能になっていることを確認する」にチェックを入れ、「次へ」ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows2.jpg)

- 「SeeedBlueToothBee」デバイスを選択し、「次へ」をクリックします。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows3.jpg)

- 「ドキュメントに記載されているパスキーを使用する」を選択し、0000 を入力します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows4.jpg)

- パスキーが交換され、通信用のアウトゴーイングシリアルポート COM5 が割り当てられます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows5.jpg)

- タスクバーのバルーンが、新しい Bluetooth シリアルポートリンクが追加されたことを示します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows6.jpg)

- COM5 が通信用に割り当てられます。このポートを使用して、PC と Bluetooth Bee を通信させます。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows7.jpg)

- この COM5 シリアルポートは、任意のシリアルポートターミナルからアクセス可能です。

- COM5 を以下の設定で開きます：ボーレート：38400、データビット：8、ストップビット：1、フロー制御なし
- 文字 'a' を送信します。

- Seeeduino + Bluetooth Bee は "You are connected to Bluetooth Bee" と返信します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows8.jpg)

#### UartsBee を使用して Bluetooth Bee を PC に接続する（マスターモード） ####

このデモでは、[ハードウェアインストール - UartSBee](https://seeeddoc.github.io/) に記載されたハードウェア構成を使用します。UartSBee をミニ USB ケーブルで PC に接続します。

- シリアルターミナルを開き、UartSBee シリアルポートデバイス（Windows では COM1、GNU/Linux では /dev/ttyUSB0 など）に接続します。設定は以下の通りです：ボーレート：38400、データビット：8、ストップビット：1、フロー制御なし

- コマンド \r\n+STWMOD=1\r\n を送信します。このコマンドは **Bluetooth Bee** をマスターモードに設定します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master1.png)

- コマンド \r\n+INQ=1\r\n を送信します。**Bluetooth Bee** は近隣の利用可能な Bluetooth デバイスを検索し、そのアドレスをリストします。この場合、+RTINQ=0,19,86,0,19,1E;desktop のように表示されます。ここで desktop は Bluetooth インターフェースを持つ PC です。検索中は赤と緑の LED が交互に点滅します。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master2.png)

- コマンド \r\n+CONN=0,19,86,0,19,1E\r\n を送信します。ここで 0,19,86,0,19,1E は desktop のアドレスです。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master3.png)

- PC 側で PIN コード 0000 を入力し、接続を完了します。

## 部品表 (BOM) / パーツリスト ##

- [Bluetooth Bee bare PCB](https://seeeddoc.github.io/w/index.php?title=Bluetooth_Bee_bare_PCB&action=edit&redlink=1)
- [Serial_port_bluetooth_module_(Master/Slave)](https://seeeddoc.github.io/Serial_port_bluetooth_module-Master-Slave/)

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum) または [Wish](http://wish.seeedstudio.com) にて議論することができます。

## バージョントラッカー ##

| リビジョン  |  説明  |  リリース日 |
|---|---|---|
| v1.0   | 初回公開リリース  |  2009年12月14日  |
| v1.1   | 問い合わせコマンドを修正し、いくつかの注記を追加 | 2010年3月15日  |
| v1.2   | ハードウェアおよびソフトウェアの機能を修正 | 2010年4月4日  |
| v1.3   | プロファイルを更新し、返却ステータスを追加、ECHO コマンドを削除 | 2010年4月21日 |
| v2.0   | モジュールを HM－01（最新の Bluetooth シールドと同じ）に更新。AT コマンドは以前と互換性がありません。 | 2014年12月4日 |

## バグトラッカー ##

バグトラッカーは、使用中に見つけた可能性のあるバグを公開する場所です。意見を書き込んでください。あなたの回答は、私たちの製品改善に役立ちます。

## 追加のアイデア ##

- ワイヤレス PS/2 キーボード / マウスを実装する。

- PCからおもちゃのロボットをワイヤレスで制御する。

## 購入方法 ##

こちらをクリックして購入してください：[https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)。

## ライセンス ##

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードとライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルをご覧ください。

## 関連プロジェクト ##

Bluetooth Bee を使って素晴らしいプロジェクトを作りたい場合、以下のプロジェクトを参考にしてください。

### Seeed Pet ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeed_pet.jpg)

これは seeduino と [Grove](https://seeeddoc.github.io/Grove_System/) (title=undefined) を使用して作られた興味深いデモです。SEEED PET は、私たちのスタジオにある電子ペットのようなものです。これは、新人エンジニアが当社の製品に慣れ、練習するためのプラットフォームです。すべての新人エンジニアは、SEEED PET に新しいアイデアや要素を追加します。

[作りたい！](https://community.seeedstudio.com/project_detail.html?id=16)

### 素晴らしいプロジェクトを私たちと共有してください ###

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

そして、この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であろうと、何を作ったとしても、ハッカー、メイカー、アーティスト、エンジニアであろうと、

自分の作品を他の人と共有し始めることで、

あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ [Recipe](https://community.seeedstudio.com/projects.html#recipe) で素晴らしいプロジェクトを共有し、Seeed のコアユーザーになるチャンスをつかみましょう。

- コアユーザーとは、Seeed 製品に高い関心を持ち、重要な貢献をしている人々です。

- 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーは Seeed の新製品を公式発売前に体験する機会を得ることができ、製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。ほとんどの場合、コアユーザーが何か良いアイデアを持っている場合、ハードウェア部品、PCBA サービス、技術サポートを提供します。さらに、コアユーザーとの商業的な協力が進む可能性もあります。

## オンライン回路図ビューア ##

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/f/f6/Bluetooth_Bee_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]** [Bluetooth Bee 回路図および基板ファイル](https://wiki.seeedstudio.com/ja/images/f/f6/Bluetooth_Bee_Schematic_Board.zip)

- **[PDF]** [Bluetooth_Bee_v2.0_SCH_PCB.zip](http://images/0/06/Bluetooth_Bee_v2.0_SCH_PCB.zip)

- **[ライブラリ]** [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

- **[情報]** [Bluetooth Bee 間の接続を設定する方法に関する情報は Seeedstudio フォーラムで利用可能](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

- **[情報]** [PC で Bluetooth Bee を接続する方法に関する情報は Seeedstudio フォーラムで利用可能](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- **[データシート]** [Bluetooth Bee データシート](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/Bluetooth_Bee_datasheet.pdf)

- **[データシート]** [HM－01 データシート](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/HM%EF%BC%8D01_Datasheet.pdf)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>