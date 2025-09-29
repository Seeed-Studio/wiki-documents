---
description: Raspberry Pi モータードライバーボード v1.0
title: Raspberry Pi モータードライバーボード v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_Pi_Motor_Driver_Board_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0.jpg)

Raspberry Pi モータードライバーボード v1.0 は、Freescale MC33932 デュアル H-ブリッジパワー IC をベースにしており、単一ブリッジあたり最大 5.0A のピーク電流で誘導負荷を制御することができます。このボードを使用することで、Raspberry Pi B/B+/A+ および Pi 2 Model B を使用して 2 つの DC モーターを駆動し、それぞれの速度と方向を独立して制御することができます。

Raspberry Pi モータードライバーボード v1.0 は、6V～28V の非常に広い入力電圧範囲をサポートしています。また、オンボード DC/DC コンバーターは非常に広い入力電圧範囲をサポートしており、最大 1000mA の電流で Raspberry Pi に 5V の電源を供給することができます。そのため、モーターを駆動し、Raspberry Pi を電源供給するために 1 つの電源だけが必要です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

特徴
--------

- 出力短絡保護（VPWR または GND への短絡）
- 内部の一定オフ時間 PWM による過電流制限（調整）
- 温度依存の電流制限閾値の低減
- Raspberry Pi 3B/3B+/4 互換

仕様
--------------

<table border="1" cellspacing="0" width="600">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
6
</td>
<td>
/
</td>
<td>
28
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
DC/DC 出力:
</th>
<td>
/
</td>
<td>
5V/1000mA
</td>
<td>
/
</td>
<td>
</td>
</tr>
<tr align="center">
<th scope="row">
出力電流（各チャンネル）
</th>
<td>
/
</td>
<td>
2（連続動作）
</td>
<td>
5（ピーク）
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
PWM 周波数
</th>
<td>
/
</td>
<td>
/
</td>
<td>
11
</td>
<td>
kHz
</td>
</tr>
<tr align="center">
<th scope="row">
出力デューティ範囲
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %
</td>
</tr>
<tr align="center">
<th scope="row">
ロジック入力電圧
</th>
<td>
-0.3
</td>
<td>
/
</td>
<td>
7
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
動作温度
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
120
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p3.jpg)

- **J1**: DC 入力コネクタ。
- **J2**: モータードライバ出力コネクタ。
- **EN,FT**: EN 制御およびフォールトフラグ検出用ジャンパー。EN ジャンパーをショートすると、EN 信号が D4 ピンにマッピングされ、D4 ピンで H-ブリッジの出力を無効化したり、フォールトフラグをリセットしたりすることができます。FT ジャンパーをショートすると、フォールトフラグ信号が D3 ピンにマッピングされ、D3 ピンからフォールトフラグを読み取ることができます。
- **IO**: ロジック電圧レベル選択ジャンパー。このジャンパーから制御ロジック電圧レベルを選択できます。
- **電源供給**: J1（DC 入力コネクタ）からシールドに電源を供給する必要があります。入力電圧範囲は 6Vdc ～ 28Vdc に設定できます。オンボード DC/DC コンバーターは DC 入力電圧を 5Vdc 出力電圧に変換してロジック回路に供給します。DC/DC コンバーターは最大 100mA の電流でマイクロコントローラーボード（Arduino/Seeeduino）を「5V」ピンから電源供給することもできます。
- **モーターインターフェース**：Out 1 と Out 2（Out 3 と Out 4）は DC モーター用のモーター A(B) に接続します。

:::caution
動作中に H-ブリッジ IC や PCB ボードに触れないでください。フルロード動作の場合、温度が最大 100 度に達する可能性があります。
:::

使用方法
-----

このデモでは、Raspberry Pi B を使用して Raspberry Pi モータードライバーボード v1.0 を使用し、DC モーターを前進および後退させる方法を示します。

### ハードウェアインストール

- Raspberry Pi B & Raspberry Pi モータードライバーボード v1.0
- ハードウェア接続は以下の図の通り

ネットワークに接続し、電源を供給します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p6.jpg)

### ソフトウェア部分

1. [Motor_Driver.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Motor_Driver.py) と [PiSoftPwn.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/PiSoftPwm.py) を同じフォルダにダウンロードします。以下は Motor_Driver.py のコードです。

```
#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import signal   

from PiSoftPwm import *

#print 'Go_1...'
#frequency = 1.0 / self.sc_1.GetValue()
#speed = self.sc_2.GetValue()

class Motor():
    def __init__(self):
    # MC33932 pins
        self.PWMA = 25  
        self.PWMB = 22
        self._IN1 = 23  
        self._IN2 = 24 
        self._IN3 = 17
        self._IN4 = 27

    # Initialize PWMA PWMB 
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.PWMA, GPIO.OUT)
        GPIO.setup(self.PWMB, GPIO.OUT)
        GPIO.output(self.PWMA, True)
        GPIO.output(self.PWMB, True)

    # Initialize PWM outputs
        self.OUT_1  = PiSoftPwm(0.1, 100, self._IN1, GPIO.BCM)
        self.OUT_2  = PiSoftPwm(0.1, 100, self._IN2, GPIO.BCM)
        self.OUT_3  = PiSoftPwm(0.1, 100, self._IN3, GPIO.BCM)
        self.OUT_4  = PiSoftPwm(0.1, 100, self._IN4, GPIO.BCM)

        # Close pwm output
        self.OUT_1.start(0)
        self.OUT_2.start(0)
        self.OUT_3.start(0)
        self.OUT_4.start(0)

        self.frequency = 0.01
        self.duty = 60

    def Setting(self, frequency, duty):
        self.frequency = frequency
        self.duty = duty

    def Go_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(self.duty)
        self.OUT_2.changeNbSlicesOn(0)

    def Back_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(self.duty)

    def Go_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(self.duty)

    def Back_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(self.duty)
        self.OUT_4.changeNbSlicesOn(0)

    def Stop(self):
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(0)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(0)

if __name__=="__main__":
    motor=Motor()
    # Called on process interruption. Set all pins to "Input" default mode.
    def endProcess(signalnum = None, handler = None):
        motor.OUT_1.stop()
        motor.OUT_2.stop()
        motor.OUT_3.stop()
        motor.OUT_4.stop()
        motor.GPIO.cleanup()
        exit(0)

    # Prepare handlers for process exit
    signal.signal(signal.SIGTERM, endProcess)
    signal.signal(signal.SIGINT, endProcess)
    signal.signal(signal.SIGHUP, endProcess)
    signal.signal (signal.SIGQUIT, endProcess)

    motor.Setting(0.01, 60)
    print 'motor start...'
    while True:
        print 'motor A turning forward...'
        motor.Go_1()
        time.sleep(1)
        print 'motor A turning backward...'
        motor.Back_1()
        time.sleep(1)
        print 'motor A stop...'
     motor.Stop()
     time.sleep(1)
        print 'motor B turning forward...'
        motor.Go_2()
        time.sleep(1)
        print 'motor B turning backward...'
        motor.Back_2()
        time.sleep(1)
        print 'motor B stop...'
     motor.Stop()
     time.sleep(1)

```

2.このプログラムを実行します。Raspberry Pi Motor Driver Board v1.0 上の LED1 と LED2 が交互に点灯し、LED3 と LED4 も交互に点灯します。

これは、Out 1 と Out 2 (Out 3 と Out 4) がモーター A (B) を前進および後退に接続していることを意味します。

3.以下の現象を確認できます：

シリアルコンソール：

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p4.jpg)

Raspberry Pi Motor Driver Board v1.0:
緑色の LED と青色の LED が交互に点灯します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p5.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Eagle ファイル Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip)
- [PDF Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0.pdf)
- [MC33932VW データシート](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/MC33932VW.pdf)
- [TD1519A データシート](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/TD1519A.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
