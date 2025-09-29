---
title: ギアステッピングモータードライバーパック
nointro:
keywords:
  - ドキュメント
  - ドキュサウラス
image: https://wiki.seeedstudio.com/ja/Gear_Stepper_Motor_Driver_Pack/
slug: /ja/Gear_Stepper_Motor_Driver_Pack
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

ギアステッピングモータードライバーパックには、ステッピングモーターとモータードライブボードが含まれています。このモーターは4相8ステップのステッピングモーターであり、ドライブボードを介して簡単に制御することができます。

このパックは位置制御に使用することができます。

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 低ノイズ
- 大トルク
- 内蔵ギアボックス

## 仕様

|項目|値|
|---|---|
|動作電圧|5V|
|相数|4|
|減速比|1/64|
|ステップ角度|5.625°/64|
|直径|28mm / Nema 11|
|アイドル引張周波数|>500HZ|
|アイドル離脱周波数|>1000HZ|
|抵抗|21±7%|
|ノイズ|≤40dB|
|駆動モード|4相8ステップ|

## 主な用途

- デスクトッププリンター
- プロッター
- 3Dプリンター
- CNCフライス盤

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### 機械図面

クリックすると元の画像を見ることができます。

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::tip
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ギアステッパーモータードライバーパック | メス-オスジャンパー |
|--------------|-------------|-----------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** ギアステッパーモータードライバーパックをArduinoで動作させるには、いくつかのメス-オスジャンパーも必要です。ジャンパーをお持ちでない場合は、[こちら](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html)をクリックして購入できます。
:::

- **ステップ 1.** ギアステッパーモータードライバーボードをジャンパーを使ってSeeeduinoに接続します。

|Seeeduino|ギアステッパーモータードライバーボード|
|---|---|
|デジタルピン 8|IN1|
|デジタルピン 9|IN2|
|デジタルピン 10|IN3|
|デジタルピン 11|IN4|
|GND|GND|
|VCC_5V|VCC|
|VCC_5V|VM|

:::tip
VMピンをVCC_5Vに接続するか、スイッチでVCCを選択している限り使用しなくても構いません。
:::

- **ステップ 2.** ステッパーモーターをギアステッパーモータードライバーボードに接続します。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーします。

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       
   }
}
```

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
すべてが正常に動作すれば、モーターが動作するのが確認できます。
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### 必要な材料

| Pi Pico | ギアステッパーモータードライバーパック | メス-メスジャンパー |
|--------------|-------------|-----------------|
|![Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![ギアステッパーモータードライバーパック](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![メス-メスジャンパー](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html" target="_blank">今すぐ購入</a>|

#### 背景

ステッパーモーターには内部に4つの独立した電磁石があり、これを順番に1つずつ通電することでギアの1つのノッチを回転させます。ギアには64個のノッチがあるため、軸を1回転させるにはこれを64回繰り返す必要があります。

ピンを1つずつ手動で通電することもできますが、[RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib)のようなライブラリを使用することもできます。

#### 方法

1. まだ行っていない場合は、[このガイド](https://projects.raspberrypi.org/en/pathways/pico-intro)に従って、Thonny + picozeroを使用してPythonを実行するRaspberry Pi Picoをコンピュータでセットアップしてください。

1. ジャンパーを使用してギアステッパーモータードライバーボードをPi Picoに接続します。

    |Pi Pico|ギアステッパーモータードライバーボード|
    |---|---|
    |VBUS|VCC|
    |GND|GND|
    |GP2|IN1|
    |GP3|IN2|
    |GP4|IN3|
    |GP5|IN4|

1. ギアステッピングモータードライバーボードをよく見てみると、「VCC」と「VM」と書かれた小さなスイッチがあることに気づくでしょう。このスイッチは、モーターをドライバーと同じピン（VCC）から電源供給するか、別の電圧源（VM）から供給するかを選択するためのものです。今回はVCCを使用します。スイッチがVCC側にあることを確認してください。

1. Pi PicoをUSB経由でコンピュータに接続する（またはワイヤレスで接続する）し、Thonnyを起動します。

1. 以下のコードをThonnyにアップロードして実行します。

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # 秒

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_これが何をしているのか？_
ステッピングモーターには内部に4つの個別の電磁石があります。このコードでは、それらを1つずつ順番に電力供給してループさせることで、ギアを1ノッチ回転させています。これを64回非常に速く繰り返すと、軸が1回転します！
:::

#### ライブラリを使用する

[RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib)のようなライブラリを使用すると、複雑な部分を省略できます：

1. Thonny -> Tools -> Manage packages -> `RpiMotorLib`を検索 -> インストール

1. 前のセクションの配線手順を同じように実行します

1. 以下のコードに置き換えます：

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
上記の「28BYJ」は使用しているステッピングモーターのモデルを指します。他の引数の説明は[RpiMotorLibのドキュメント](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md)で確認できます。（異なるドライバーボードを使用していますが、ほとんどの内容は同じです）。
:::

## リソース

- **[Zip]** [ギアステッピングモータードライバーボード Eagle ファイル](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [CX28BYJ48 モーターのデータシート](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>