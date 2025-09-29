---
description: Motor Bridge Cape v1.0
title: Motor Bridge Cape v1.0
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Motor_Bridge_Cape_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_bridge_driver.jpg)

Motor Bridge Capeは、2つのTB6612FNG統合デュアルHブリッジを使用して双方向モーター制御を特徴としており、2つのステッピングモーターまたは4つのブラシ付きDCモーターを6〜15V DC電源で制御し、モーターごとに約1Aの電流を消費します。このケープは、最大入力電圧15VでBBGまたはBBBに5Vの規制電力を提供します。また、6つのサーボ制御インターフェースと6つの拡張I/Oを備えています。これらすべての機能は、オンボードのSTM32F0コプロセッサによって提供されます。MCUは、BeagleBone®とI<sup>2</sup>CまたはUARTインターフェースを介して通信できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

特徴
--------

- 4つのDCモーターまたは2つのステッピングモーターを駆動可能
- 6つのサーボを駆動可能
- Mbedプラットフォーム
- STM32F0コプロセッサ
- 2つのTB6612FNG
- 6つの拡張I/O
- BBGとI<sup>2</sup>CまたはUARTインターフェースで通信可能

仕様
--------------

- バッテリー入力電圧: 6〜15V
- Hブリッジ動作電圧: 6〜15V
- DC/DC 5V出力電流: 最大2A
- 3V3出力電流: 最大350mA
- 4つのHブリッジドライバー、各定格電流: 1.2A、ピーク電流: 3.2A
- 6つのサーボドライバー、動作電圧: 5V、総電流は1.5A以下
- 入力逆接続保護
- 過電流保護: 3Aの使い捨て高速ヒューズ

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_Bridge_Hardware_overview.jpg)

- **3A使い捨てヒューズ**: 過電流保護
- **リセットボタン**: コプロセッサをリセット
- **SWDインターフェース**: デバッグインターフェース
- **プロトタイプボード**: 他の回路を拡張
- **GPIOs**: 他の回路を拡張
- **サーボ**: サーボモーターインターフェース
- **STM32F030R8**: コプロセッサ
- **DC/DC**: 電圧変換回路
- **TB6612FNG**: HブリッジIC
- **インジケーター**: モーター方向の表示ランプ
- **動作モードスイッチ**: スタンバイまたは動作
- **入力逆接続保護**: 回路保護
- **Motor4/Motor3**: 2つのDCモーターまたは1つのステッピングモーターを駆動
- **Motor2/Motor1**: 2つのDCモーターまたは1つのステッピングモーターを駆動
- **バッテリー**: モーターに電力を供給

使い始める
---------------

このセクションでは、BBGでMotor Bridge Capeを使用する方法を説明します。始める前に、[Github](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)からMotor Bridge Cape Driverライブラリコードをダウンロードしてください。

Motor Bridge Capeライブラリを使用するには、MotorBridge.pyファイルをプロジェクトに追加します。そして、Pythonファイルをプロジェクトにインポートし、Motor Bridge Capeのオブジェクトを作成します。

```
import MotorBridge
motor = MotorBridge.MotorBridgeCape()
```

### 依存関係のインストール

```
sudo apt-get update
sudo apt-get install build-essential python-pip python-dev python-smbus git
sudo pip install Adafruit-GPIO
```

### ステッピングモーター

Motor Bridge Capeのステッピングモーターインターフェースは以下の図のように示されています。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/StepperMotor.jpg)

#### ステッピングモーターの機能

以下はステッピングモーターの機能についての簡単な説明です。

**<u>StepperMotorAInit()</u>**

*説明*: ステッピングモーターAポートを初期化します。

**<u>StepperMotorAMove(MoveSteps,StepDelayTime)</u>**

*説明*: ステッピングモーターAを駆動します。

*MoveSteps*: ステッピングモーターが移動するステップ数。**正の値**は時計回り方向を示します。**負の値**は反時計回り方向を示します。

*StepDelayTime*: 各ステップの待機時間。単位: us。

**<u>StepperMotorBInit()</u>**

*説明*: ステッピングモーターBポートを初期化します。

**<u>StepperMotorBMove(MoveSteps,StepDelayTime)</u>**

*説明*: ステッピングモーターBを駆動します。

*MoveSteps*: ステッピングモーターが移動するステップ数。**正の値**は時計回り方向を示します。**負の値**は反時計回り方向を示します。

*StepDelayTime*: 各ステップの待機時間。単位: us。

#### ステッピングモーターの例

以下のコードをプロジェクトにコピーしてPythonファイルとして保存してください。

```
import MotorBridge
import time
 
def StepperMotorATest():
    print 'Hello From MotorBridge'
    motor.StepperMotorAInit()
    motor.StepperMotorAMove(1000,1000) # 1000ステップ、各ステップ1000us
    time.sleep(1)
    motor.StepperMotorAMove(-1000,1000) # 1000ステップ、各ステップ1000us
    time.sleep(1)
 
def StepperMotorBTest():
    print 'Hello From MotorBridge'
    motor.StepperMotorBInit()
    motor.StepperMotorBMove(1000,1000) # 1000ステップ、各ステップ1000us
    time.sleep(1)
    motor.StepperMotorBMove(-1000,1000) # 1000ステップ、各ステップ1000us
    time.sleep(1)
 
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    StepperMotorATest()
    StepperMotorBTest()
```

### DCモーター

Motor Bridge CapeのDCモーターインターフェースは以下の図のように示されています。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/DCMotorBBG.jpg)

#### DCモーターの機能

以下はDCモーターの機能についての簡単な説明です。

**<u>DCMotorInit(MotorName,Frequency)</u>**

*説明*: DCモーターを初期化し、周波数を設定します。

*MotorName*: 1〜4はMotor1〜Motor4を表します。

*Frequency*: DCモーターの周波数を設定します。

:::note
DCモーターの周波数を変更すると、他のDCモーターの周波数も変更されます。
:::

**<u>DCMotorMove(MotorName,Direction,PWMDuty)</u>**

*説明*: DCモーターを駆動します。方向とPWMデューティを設定します。

*MotorName*: 1〜4はMotor1〜Motor4を表します。

*Direction*: 1は時計回りを表します。2は反時計回りを表します。3はモーターを停止します。

*PWMDuty*: 0〜100はPWMデューティの0%〜100%を表します。

**<u>motor.DCMotorStop(MotorName)</u>**

*説明*: DCモーターを停止します。

*MotorName*: 1〜4はMotor1〜Motor4を表します。

#### DCモーターの例

以下のコードをプロジェクトにコピーしてPythonファイルとして保存してください。

```
import MotorBridge
import time
 
MotorName        = 1
ClockWise        = 1
CounterClockWise = 2
PwmDuty          = 90
Frequency        = 1000
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.DCMotorInit(MotorName,Frequency)
    while True:
        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)
        time.sleep(2)
        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)
        time.sleep(2)
        print "hello"
        motor.DCMotorStop(MotorName)
        time.sleep(2)
```

### サーボ

Motor Bridge Cape のサーボインターフェースは以下の画像のように示されています。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/ServoBBG.jpg)

#### サーボの機能

以下はサーボの機能についての簡単な説明です。

**<u>ServoInit(ServoName,Frequency)</u>**

*説明*: サーボを初期化し、周波数を設定します。

*ServoName*: 1 ~ 6 は Servo1 ~ Servo6 を表します。

*Frequency*: サーボの周波数を設定します。デフォルト値は 50 Hz です。

**<u>ServoMoveAngle(ServoName,Angle)</u>**

*説明*: サーボを駆動し、角度を設定します。

*ServoName*: 1 ~ 6 は Servo1 ~ Servo6 を表します。

*Angle*: 0 ~ 180 は 0 度から 180 度を表します。

#### サーボの例

以下のコードをプロジェクトにコピーし、Python ファイルとして保存してください。

```
import MotorBridge
import time
ServoName   =  2
Frequency   =  50
Angle1      =  20
Angle2      =  160
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.ServoInit(ServoName,Frequency)
 
    while True:
        print 'Servo Test'
        motor.ServoMoveAngle(ServoName,Angle1)
        time.sleep(2)
        motor.ServoMoveAngle(ServoName,Angle2)
        time.sleep(2)
```

ファームウェアのアップグレード
--------------------

もし Cape に問題がある場合は、アップグレードを試してください。このセクションでは、BeagleBone® Green を使用して Motor Bridge Cape のファームウェアをアップグレードする方法を説明します。この方法は BBGW や BBB にも適用可能です。

1. Motor Bridge Cape を BBG/BBGW/BBB に挿入し、USB ケーブルを使用して BBG をコンピュータに接続します。

2. BBG をインターネットに接続し、以下の画像のように SSH を介してアクセスします。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG1.PNG)

3. 以下のコマンドを実行して Github からコードをダウンロードします。

```
git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG2.PNG)

4. "MotorBridgeCapeFirmware" ディレクトリに移動し、"make flash" コマンドを実行してファームウェアをフラッシュします。

```
cd MotorBridgeCapeFirmware/ && make flash
```

数秒後、ターミナルに "Verification OK" という情報が表示されます。

5. 以下のコマンドを実行してファームウェアが正しくフラッシュされたか確認します。

```
i2cdetect -y -r 1
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG3.PNG)

I2C アドレス 0x4b が表示された場合、ファームウェアが正常に更新されたことを意味します。

### 既知の問題

#### I2C アドレスが見つからない

Q: ファームウェアを更新しましたが、I2C アドレスが検出されません。

A：P9_23 ピンが High であることを確認してください。P9_23 ピンは STM32 のリセットピンに接続されています。MotorBridgeCape クラスの初期化関数で P9_23 ピンを High レベルに設定しています。

#### ファームウェアを更新できない

Q: ファームウェアを更新しようとすると、エラー情報に UART2 が見つからないと表示されます。

A: BB-UART2 を有効にする必要があります。BBG は UART2 を使用して Motor Bridge Cape にファームウェアをフラッシュします。

    vi /boot/uEnv.txt

次に "cape_enable=capemgr.enable_partno=BB-UART2" をコメントアウト解除します。エディタを保存して終了し、最後にボードを再起動してください。

#### Cape が動作しない

Q: ファームウェアを正常に更新し、I2C アドレスを検出できましたが、Cape が動作しません。

A: ボード上に動作モードスイッチがあることに注意してください。スイッチが動作モードに設定されていることを確認してください。それでも問題が解決しない場合は、フォーラムにお問い合わせください。

#### make flash が失敗する

Q: "Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device" というエラーコードで make flash を実行できません。

A: 以下の手順に従って問題を解決してください。

- ステップ 1: `sudo nano /boot/uEnv.txt` を実行し、uEnv.txt の末尾に以下の 2 行を追加します。

```
uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo
enable_uboot_cape_universal=1  
```

- ステップ 2: BBGW を再起動します。
- ステップ 3: 再度 `sudo make flash` を実行します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor%20Bridge%20Cape%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。Seeed と Geppetto を使った簡単なモジュラー電子設計をお試しください。今すぐ作成しましょう。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

リソース
---------

- [PDF形式の回路図](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0_sch.pdf)
- [Eagle形式のPCBファイル](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0brd.rar)
- [Eagle形式の回路図ファイル](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0sch.rar)
- [Motor Bridge Cape ライブラリ](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)
- [Motor Bridge Cape ファームウェアソースコード](https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>