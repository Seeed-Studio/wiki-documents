---
title: Grove - 16チャンネルPWMドライバ (PCA9685)
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-16-Channel_PWM_Driver-PCA9685/
slug: /ja/Grove-16-Channel_PWM_Driver-PCA9685
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg)

Grove - 16チャンネルPWMドライバは、NXP PCA9685をベースにした16チャンネル、12ビットI2C PWMドライバです。このボードは外部電源を使用して最大16個のサーボを駆動することができます。I2C Groveインターフェースを介してArduinoで簡単に制御できます。さらに、このボードをLEDコントローラとして使用することも可能です。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-(PCA9685)-p-3221.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 16チャンネルPWMドライバ (PCA9685) | 初版                                                                                               | 2018年9月      |

## 特徴

- 1 MHz Fast-mode Plus対応I2Cバス
- 6つのハードウェアアドレスピンにより、62個のPCA9685デバイスを同じI2Cバスに接続可能
- 低スタンバイ電流
- SDA/SCL入力にノイズフィルタを搭載

## 仕様

|項目|値|
|---|---|
|MCU動作電圧|3.3V / 5V|
|PWM供給電圧|2.3V ~ 5.5V|
|耐圧入力|5.5V|
|LEDnピンの出力電流|25mA|
|グランド供給電流|400mA|
|動作温度|-40～85℃|
|インターフェース|I2C|
|I2Cアドレス範囲|0x40 ~ 0x7f (デフォルト)|
|サイズ|長さ: 60mm 幅: 40mm 高さ: 18mm|
|重量|14.3g|
|パッケージサイズ|長さ: 135mm 幅: 85mm 高さ: 19mm|
|総重量|21g|

## 主な用途

- サーボドライバ
- RGBまたはRGBA LEDドライバ

## ハードウェア概要

### ピン配置

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin_out.jpg)

:::caution
    ホットスワップはサポートされていません。交換や変更を行う前に、Arduinoを電源から切断することをお勧めします。
:::

### ハードウェア詳細

___
**I2Cインターフェース**

このボードはI2Cインターフェースを使用して、オンボードMCUとホストコンピュータ間の通信を可能にします。
>GND: このモジュールをシステムのGNDに接続  
>VCC: このモジュールには5Vまたは3.3Vを使用可能  
>SDA: I2Cシリアルデータ  
>SCL: I2Cシリアルクロック

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-1.jpg)

___
**電源入力**

サーボ用に5V DC電源を供給します。

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-2.jpg)

___
**PWM出力**

このボードには16グループのピン(1 - 16)があり、各グループには1つのPWM信号ピン、1つの5V電源供給ピン、および1つのグランドピンが含まれています。
![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-0.jpg)

---
**I2Cアドレス**

*以下の図をクリックすると元のファイルを表示できます*

このボードの背面には6つの選択可能なパッドがあり、64通りのI2Cアドレスが選択可能です。

<!-- [![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg)](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg" alt="pir" width={600} height="auto" /></p>

上図のように、すべてのアドレスパッドはデフォルトで高レベルに接続されています。アドレスのルールは以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad_1.jpg)

アドレスは7ビットで構成され、最上位ビットは固定で1です。アドレスを16進数に変換する際には、最上位ビットの左に0を追加する必要があります。

したがって、デフォルトのアドレスは**111 1111**であり、0を追加すると**0111 1111**となり、これは0x7fです。  
また、すべてのアドレスパッドをグランドに接続すると、**100 0000**となり、0を追加すると**0100 0000**となります。これは0x40です。

## 動作原理

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - 16-Channel PWM Driver| LED|
|--------------|-------------|-----------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/red_led.jpg)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA968-p-3221.html)|[今すぐ購入](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。

    **3** 少なくとも2本のジャンパーワイヤーを準備する必要があります。持っていない場合は、[こちら](https://www.seeedstudio.com/20-pin-dual-female-splittable-jumper-wire-300mm-p-629.html)をクリックして購入できます。
:::

- **ステップ 1.** デュアルメスジャンパーワイヤーを使用して、赤色LEDをGNDとP1に接続します。

- **ステップ 2.** Grove - 16-Channel PWM DriverをGrove-Base Shieldのポート **I^2^C** に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect1.jpg)

:::note
        LEDの例では、出力グループの「5V」ピンを使用していないため、電源入力ポートに電力を供給する必要はありません。サーボを使用する場合は、5Vピンをサーボの電源ピンに接続し、**Power In**ポートに外部電源を供給する必要があります。
:::
サーボを使用する場合は、以下のように接続できます：

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect2.jpg)

#### ソフトウェア

:::caution
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Grove-16-Channel_PWM_Driver-PCA9685](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples -->Seeed_PCA9685 --> led** のパスを使用します。
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard1.jpg)

    2. コンピュータで開く：**XXXX\Arduino\libraries\Seeed_PCA9685\examples\led\led.ino** フォルダ内の**basic_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard2.jpg)

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp

#include "PCA9685.h"
#include <Wire.h>

PCA9685 led;


void setup()
{
    // I2Cバスに参加 (I2Cdevライブラリはこれを自動的に行いません)
    Wire.begin();
    Serial.begin(9600);
    led.init(0x7f);
    // 周波数を100Hzに設定、範囲は24Hz～1526Hz
    led.setFrequency(100);

    for (int i=1;i<17;i++){
        led.setPwm(i, 0, 1024);
    }
}

void loop()
{
}

```

:::caution
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合があります。そのため、最初の2つの方法を使用することをお勧めします。
:::

:::tip
        すべてが正常に動作すれば、LEDが点灯するのが確認できます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 16 Channel PWM Driver (PCA9685) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip)

- **[Zip]** [Seeed_PCA9685 ソフトウェアライブラリ](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)

- **[PDF]** [データシート PCA9685](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/PCA9685.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>