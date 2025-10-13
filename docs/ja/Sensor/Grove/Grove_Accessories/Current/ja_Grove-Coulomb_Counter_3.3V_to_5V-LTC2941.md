---
description: Grove - クーロンカウンター 3.3V to 5V (LTC2941)
title: Grove - クーロンカウンター 3.3V to 5V (LTC2941)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/main.jpg" /></div>

クーロン（記号: C）は、電荷の国際単位系（SI）における単位です。1クーロンは、1アンペアの一定電流が1秒間に運ぶ電荷（記号: Q または q）を表します：1C=1A•1s。クーロンカウンターは、デバイスやセンサーが使用している電流を測定するための装置です。

Grove - クーロンカウンター 3.3V to 5V (LTC2941) は、LTC2941 をベースにしており、単セルのリチウムイオンバッテリーに最適な動作範囲を持っています。高精度のクーロンカウンターは、バッテリーの正端子と負荷または充電器の間にあるセンス抵抗を通じて電流を積分します。このモジュールは使用されたアンペア時の量を測定します。完全に充電されたバッテリーを使用すれば、使用したバッテリー量や残りのパーセンテージをテストできます。これは、スマートフォンに表示されるバッテリー残量と同じようなものです。逆に、バッテリーを充電している場合、このモジュールを使用して充電プロセスを監視することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 蓄積されたバッテリーの充電および放電を表示
- 高精度のアナログ積分
- 1% の充電精度
- SMBus/I2C インターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|2.7V ～ 5.5V|
|動作温度|0℃ ～ +70℃|
|精度|0°C ～ +40°C で ±2ppm|
|インターフェース|I2C|
|I2C アドレス|0x64|

## 主な用途

- 低消費電力の携帯型製品
- 携帯電話
- MP3 プレーヤー
- カメラ
- GPS

## ハードウェア概要

### ピン配置

**概要**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out_0.jpg" /></div>

:::caution
3番と4番は電源入力インターフェースです。1つを電源入力として選択してください。同時に2つを使用しないでください。また、電圧が5Vを超えないようにしてください。そうしないと、モジュールが損傷する可能性があります。
:::
___
**Grove インターフェース**

このモジュールは I2C インターフェースを介して制御ボードと通信します：

>GND: 電源ピン、システムの GND に接続  
>VCC: 電源ピン、5V または 3.3V に接続し、このモジュールに電力を供給  
>SDA: 信号ピン、I2C シリアルデータ  
>SCL: 信号ピン、I2C シリアルクロック

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out1.jpg" /></div>

___
**OUT**

電力出力、負荷または充電器に接続します。

>+: 電力出力の正極  
>-: 電力出力の負極

:::caution
モーターやサーボなどの誘導負荷に直接接続しないでください。誘導負荷によるリップルが原因でチップが損傷する可能性があります。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out2.jpg" /></div>

___
**IN**

電力入力、**OUT** に電力を供給します。

>+: 電力入力の正極  
>-: 電力入力の負極

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out3.jpg" /></div>

:::caution
[I2C スキャナー](https://playground.arduino.cc/Main/I2cScanner/) を使用してデバイスの I2C ID をスキャンする場合、IN 端子に 3.3V/5V を供給する必要があります。
:::

___
**バッテリー入力**

バッテリー入力、3.7-4.2V のリチウムポリマーバッテリーをサポート、JST2.0（2ピン-2.0mm）、**OUT** に電力を供給します。

>+: バッテリー入力の正極  
>-: バッテリー入力の負極

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out4.jpg" /></div>

___
**アラームピン**

LTC2941 の AL/CC ピンに接続し、アラート出力または充電完了入力として使用します。LTC2941 はアラート機能をサポートしており、関連するハードウェアピンを用意しています。ただし、提供されるソフトウェアはこの機能をサポートしていません。この機能が必要な場合は、ソフトウェア部分を自分で作成する必要があります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out5.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを慎重に差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** 負荷または充電器をポート **OUT** に接続します。

- **ステップ 2.** バッテリーを **JST** ポートに接続するか、他の電源をポート **IN** に接続します。

- **ステップ 3.** Grove - Coulomb Counter 3.3V to 5V (LTC2941) を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 4.** Grove - Base Shield を Seeeduino に接続します。

- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールを直接Seeeduinoに接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5Vまたは3.3V   | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄色               | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove - Coulomb Counter for 3.3V to 5V(LTC2941) --> battery_power** のパスを使用します。  
    >**battery_power:** このデモでは、電荷データを単位 **C** および **mAh** で表示します。1mAh=3.6C。また、バッテリーの残量をパーセンテージで表示します。  
    >**current_expend:** このデモでは、消費している電力を表示します。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_1.jpg" /></div>

    2. コンピュータで直接開く：**battery_power.ino** をクリックします。このファイルは **XXXX\Arduino\libraries\Seeed_LTC2941-master\examples\battery_power** フォルダ内にあります。**XXXX** はArduino IDEをインストールした場所です。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_2.jpg" /></div>

3. または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーすることができます。

```cpp

#include "LTC2941.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

float coulomb = 0, mAh = 0, percent = 0;

void setup(void)
{
    Wire.begin();
    
    SERIAL.begin(115200);
    while(!SERIAL.available());
    
    SERIAL.println("LTC2941 Raw Data");
    
    ltc2941.initialize();
    ltc2941.setBatteryFullMAh(400);
}

void loop(void)
{
    coulomb = ltc2941.getCoulombs();
    mAh = ltc2941.getmAh();
    percent = ltc2941.getPercent();
    
    SERIAL.print(coulomb);
    SERIAL.print("C,");
    SERIAL.print(mAh);
    SERIAL.print("mAh,");
    SERIAL.print(percent);
    SERIAL.print("%");
    
    SERIAL.println();
    
    delay(1000);
}
```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニター** を開くには、**ツール -> シリアルモニター** をクリックします。または `ctrl`+`shift`+`m` キーを同時に押します。ボーレートを **115200** に設定してください。

:::tip
すべてが正常に動作している場合、シリアルモニターを開き、任意のキーを押して送信ボタンを押すと、以下のように表示される可能性があります：
:::

```cpp
LTC2941 Raw Data
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.92C,399.98mAh,99.99%
```

#### 関数の説明

このデモでは、400mAh のバッテリーを使用しています。そのため、結果として `1439.96mC,399.99mAh,100.00%` が表示されます。バッテリー残量のパーセンテージは、バッテリー容量を設定した後にのみ有効です。コードの21行目でバッテリー容量を変更することができます。

```cpp
ltc2941.setBatteryFullMAh(400); // ここでバッテリー容量を設定します
```

さらに、シリアルポートを再度開いたり、制御ボードの電源を再投入したりするたびに、データは `100.00%` にリセットされます。そのため、これを携帯電話で使用する場合は、まだ多くの作業が必要です :D

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Coulomb Counter 3.3V to 5V (LTC2941) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip)

- **[Zip]** [Seeed LTC2941 Library](https://github.com/Seeed-Studio/Seeed_LTC2941/archive/master.zip)

- **[PDF]** [Datasheet LTC2941](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/datasheet.pdf)

## プロジェクト

これはこの製品の紹介ビデオです。簡単なデモが含まれており、ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>