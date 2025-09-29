---
title: Grove - I2C モータードライバ V1.2
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-I2C_Motor_Driver_V1.2/
slug: /ja/Grove-I2C_Motor_Driver_V1.2
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg)

Grove I2C モータードライバは、使いやすいインターフェースを備えた Grove シリーズの新しい追加製品です。その中心には、デュアルチャネル H ブリッジドライバチップ（L298N）があり、各チャネルで最大 2A の電流を処理できます。これは Atmel ATmega8L によって制御され、例えば Arduino との I2C 通信を処理します。両方のモーターを同時に異なる速度と方向で駆動することができます。2つのブラシ付き DC モーターまたは1つの4線式2相ステッピングモーターを駆動できます。モーターを駆動するには 6V から 15V の電源が必要で、オンボードの 5V 電圧レギュレータが I2C バスと Arduino に電力を供給できます（ジャンパーで選択可能）。すべてのドライバラインは逆起電力からダイオードで保護されています。

簡単なソフトウェアインターフェースだけでなく、Grove I2C モータードライバはすぐに使用を開始できるように設計されています。電源用の LED と、各モーターが動作しているか、どの方向に動作しているかを示す4つの LED を備えています。スクリュー端子はモーターと電源の接続を容易にし、Grove システムプラグと I2C インターフェースにより、他の多くのデバイスとデイジーチェーン接続が可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html)

## バージョントラッカー

---
| リビジョン | 説明 | リリース日 |
|-----------|------|-----------|
| v1.0 | 初回公開リリース | 2012年5月17日 |
| v1.2 | ハードウェアで I2C アドレスを設定 | 2012年7月2日 |

## 特徴

---

* Grove 互換

* I2C インターフェース

* モーターの速度と方向を制御可能

* チャネル数: 2

* ハードウェアで変更可能なスレーブアドレス

## 仕様

---
| 項目 | 最小 | 標準 | 最大 | 単位 |
|------|------|------|------|------|
| 動作電圧 | 6 | - | 15 | VDC |
| チャネルごとの最大出力電流 | 0.5 | 0.5 | 0.5 | A |
| 最大合計電流 | 1.0 | 1.0 | 1.0 | A |
| I2C バスの入出力電圧 | 5 | 5 | 5 | V |
| 通信プロトコル | I2C | I2C | I2C | / |

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg)

**78M05 IC:** 5V 電圧レギュレータ

**L298 IC:** デュアルフルブリッジドライバ

**Atmega8 IC:** モーター回転を制御

**注意:** スクリュー端子の入力電圧は 5V に調整され、ジャンパー（J4）を介して I2C +5V に接続されます。スクリュー端子を介した外部電源と I2C ヘッダーを介した電源の両方を使用する場合はジャンパーを取り外してください。I2C バスに 5V を供給する場合はジャンパーを使用してください。

## アプリケーションアイデア

---
このモータードライバは、5Vで2Aを超えない消費電力のブラシ付き電子モーターを駆動するために使用できます。2つのモーターを同時に駆動でき、それぞれ異なる速度と方向に設定できます。速度は完全に比例制御可能で、ボード上のATmega8によってPWMを使用して制御されます。速度はArduinoまたはSeeeduinoから送信されるI2Cコマンドで設定されます。

このモータードライバは、ロボット、自作のRCカー、ケースファン、高出力LED照明、または比例負荷制御を含むその他のプロジェクトに最適です。

## 注意事項

---

* 1Aを超える電流で動作中は、ボードが非常に熱くなります。手で触れないようにしてください！

* Arduino IDE（バージョン1.0以上）がサポートされています。

## 使用方法

---
I2Cモータードライバは、L298チップをベースにしたモーターを制御できます。L298は単なるデュアルモータードライバではなく、デュアルHブリッジです。Hブリッジは、電流の方向を切り替えるための特定のトランジスタ構成です。モーターに接続すると、両方向に回転させることができ、PWM入力を使用してArduinoで任意の速度で回転させることができます。L298には2つのHブリッジがあるため、ロボットを前後に移動させるだけでなく、各車輪を異なる方向に回転させて回転させることもできます。

次に、I2Cモータードライバを使用して、2つのDCモーターまたはステッパーモーターを正方向または逆方向に回転させる方法を説明します。

### I2Cモータードライバのアドレスを設定する

* 新しいI2Cモータードライバに追加された新機能として、ダイヤルスイッチでアドレスを設定します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg)

* 次に、プログラム内のアドレス設定をI2Cモータードライバ上のアドレス設定と同じに保ちます。プログラム内のデフォルトのアドレス設定は0x0fです。

```
#define I2CMotorDriverAdd         0x0f   // I2CMotorDriverのアドレスを設定
```

###

2つのDCモーターを駆動する方法

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg)

<div>
  <span style={{color: 'red'}}>**注意:**</span>
  <dl><dd>最初に注意すべき点は、DCモーター用に外部電源が必要であることです。Arduinoの5Vピンでは2つのモーターを駆動するのに十分な電力を供給できず、Arduinoが損傷する可能性があります。</dd></dl>
</div>

次に、以下のようにArduinoをプログラムします：

```
#include <Wire.h>
.......
.......
< ドライバ関数 >
.......
.......
void setup()  {
    Wire.begin(); // I2Cバスに参加（マスターの場合はアドレスはオプション）
    delayMicroseconds(10000); // モータードライバの初期化を待つ
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,20);
        delay(10); // この遅延が必要
        MotorDirectionSet(0b1010);  //0b1010 正方向に回転
        delay(1000);
        MotorDirectionSet(0b0101);  //0b0101 逆方向に回転
        delay(500);
    }
}
```

このプログラムでは、Arduinoが最初に_MotorSpeedSetAB()_コマンドを使用して2つのDCモーターの速度を設定し、その後_MotorDirectionSet()_コマンドを使用してDCモーターの動作方向を設定します。詳細については、Grove-I2C_Motor_Driver_V1.2#Function_Referenceを参照してください。すべてのデモコードはGrove-I2C_Motor_Driver_V1.2#Resourcesからダウンロードできます。

### 4線式ステッパーを駆動する方法

I2Cモータードライバは、4線式ステッパーを駆動するためにも使用できます。ステッパーをI2Cモータードライバの出力ピンに接続し、I2Cバスを使用してモータードライバをArduino/Seeeduinoに接続します。以下のようにArduinoをプログラムします：

```
#include <Wire.h>
.......
.......
< ドライバ関数 >
.......
.......
void setup()  {
    Wire.begin(); // I2Cバスに参加（マスターの場合はアドレスはオプション）
    delayMicroseconds(10000); // モータードライバの初期化を待つ
}

void loop()  {
    while(1)  {
        MotorSpeedSetAB(100,100);// ステッパーを駆動する場合、速度は100に設定する必要があります
        delay(10);
        MotorDirectionSet(0b0001);
        delay(4);
        MotorDirectionSet(0b0011);
        delay(4);
        MotorDirectionSet(0b0010);
        delay(4);
        MotorDirectionSet(0b0110);
        delay(4);
        MotorDirectionSet(0b0100);
        delay(4);
        MotorDirectionSet(0b1100);
        delay(4);
        MotorDirectionSet(0b1000);
        delay(4);
        MotorDirectionSet(0b1001);
        delay(4);
    }
}
```

この接続された4線式ステッパーは回転します。Arduinoプログラム内で回転速度やステップ数を調整できます。また、他のステッパーライブラリを使用して制御することもできます。すべてのデモコードはResourceからダウンロードできます。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif)

## 関数リファレンス

---
**1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)**

_説明: モーター1とモーター2の速度を設定します_

_MotorSpeedA: DCモーターAの速度、0～100の範囲で指定する必要があります。_

_MotorSpeedB: DCモーターBの速度、0～100の範囲で指定する必要があります。_

使用例:

```
Serial.println("DC速度100を送信しました");
MotorSpeedSetAB(100,100);//モーター1とモーター2の速度を設定します。
delay(10); //この遅延が必要です
```

**2. void MotorPWMFrequenceSet(unsigned char Frequence)**

_説明: PWMのプリスケール周波数を設定します。デフォルトは0x03です。_

_Frequence: PWMのプリスケール周波数。_

**3. void MotorDirectionSet(unsigned char Direction)**

_説明: モーターの回転方向を調整します。_

_Direction: 前進/逆回転を指定できます。_

使用例:

```
MotorDirectionSet(0b1010);  //"0b1010"は出力の極性を定義します。"10"はM+が"正"で、M-が"負"であることを意味します。
                            // DCモーターを駆動する際は、M+とM-が異なる極性であることを確認してください。
delay(1000);
MotorDirectionSet(0b0101);  //0b0101  逆方向に回転します
delay(500);
```

**4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)**

_説明: モーターの方向と速度を同時に調整します。_

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - I2C Motor Driver Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip)

* [I2C Motor DriverV1.2 デモコード](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip)

* [L298 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf)

* [78M05 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf)

* [ファイル: Atmega8にISPを使用してファームウェアを書き込む](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>