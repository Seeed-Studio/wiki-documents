---
description: Grove - 10A DC電流センサー (ACS725)
title: Grove - 10A DC電流センサー (ACS725)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-10A_DC_Current_Sensor-ACS725
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/preview.png" /></div>

Grove - 10A DC電流センサー (ACS725) は、ACS725をベースにした高精度なDC電流センサーです。Allegro™ ACS725電流センサーICは、産業、車載、商業、通信システムにおけるDC電流検出のための経済的かつ正確なソリューションです。

Grove - 10A DC電流センサー (ACS725) は最大10AまでのDC電流を測定でき、基本感度は264mV/Aです。このセンサーはAC電流には対応していません。AC負荷を測定したい場合は、以下をご確認ください：

[Grove - ±5A DC/AC電流センサー (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 制御アプリケーションにおける高速応答時間のための120 kHzの高帯域幅アナログ出力
- 独自のアンプおよびフィルタ設計技術により、業界トップクラスのノイズ性能と大幅に改善された帯域幅
- 1.2 mΩの一次導体抵抗により、低電力損失と高突入電流耐性を実現
- 差動ホール検出により共通モード磁場を排除
- アナログ出力

## 仕様

| パラメータ | 値 |
|---|---|
| 電源電圧 | 3.3V / 5V |
| 動作環境温度 | -40 – 150℃ |
| 保管温度 | -65°C – 165°C |
| 動作電圧 | &lt;400V |
| 電流検出範囲 | 0 – 10A |
| 感度 | 264mV/A (Typ.) |
| 出力インターフェース | アナログ |
| 入力インターフェース | スクリュー端子 |

## 動作原理

電流検出には直接検出と間接検出の2種類があります。分類は主に電流を測定するために使用される技術に基づいています。

**直接検出:**

- オームの法則

**間接検出:**

- ファラデーの電磁誘導の法則
- 磁場センサー
- ファラデー効果

Grove - 10A DC電流センサー (ACS725) は磁場センサー技術を使用しています。そして、磁場センサー技術には以下の3種類があります：

- ホール効果
- フラックスゲートセンサー
- 磁気抵抗電流センサー

Grove - 10A DC電流センサー (ACS725) はホール効果原理に基づいており、差動ホール検出により共通モードを排除します。

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" /></a></p>
  <figcaption><b>図3</b>. <i>ピン配置</i></figcaption>
</figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

:::caution
テスト中に人体がモジュールに触れることは禁止されています。そうしないと感電の危険があります。
:::

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | 10A DC Current Sensor (ACS725)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/thumbnail.jpg" /></div>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove - 10A DC Current Sensor(ACS725)をBase Shieldの**A0**ポートに接続します。

- **ステップ2.** テストする回路の正極と負極を、ネジ端子の対応する正極と負極に接続します。

:::tip
正極と負極を逆に接続すると、読み取り値が逆になります。このセンサーは使用前にキャリブレーションが必要ですので、最初に回路に電源を入れないでください。
:::

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" /></a></p>
  <figcaption><b>図4</b>. <i>このデモではDC電源を使用しています。最初は電流を0Aに設定するか、電源を入れないでください。</i></figcaption>
</figure>
</div>

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ1.** Githubから[Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor)ライブラリをダウンロードします。

- **ステップ2.** `/example/`フォルダ内にデモコードがあります。ここでは**Grove_10A_Current_Sensor**を例に取ります。[Grove_10A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_10A_Current_Sensor/Grove_10A_Current_Sensor.ino)をクリックしてデモを開くか、以下のコードをコピーしてください：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
// OLEDディスプレイが必要です
// ピンA0を使用
#define Pin A0

// 500回の平均を取る
const int averageValue = 500;

long int sensorValue = 0;
float sensitivity = 1000.0 / 264.0; //1000mAあたり264mV 

float Vref = 322;   //Vrefはゼロドリフト値です。使用前に実際に測定した値に変更してください。
void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // 10回値を読み取る
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // 次のループまで2ミリ秒待つ
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // オンボードADCは10ビット
  // 異なる電源は異なる基準電圧をもたらす
  // 例: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //      unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  // 無負荷時、Vref=初期値
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 対応する電流を計算
  float current = (voltage - Vref) * sensitivity;

  // 電圧(mV)を表示
  // この電圧は電流に対応するピン電圧です
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // 電流(mA)を表示
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // 次の読み取りのためにsensorValueをリセット
  sensorValue = 0;
  // 1秒ごとに読み取る
  delay(1000);
}
```

- **ステップ3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ4.** Arduino IDEの**シリアルモニタ**を開きます。**ツール->シリアルモニタ**をクリックするか、`ctrl`+`shift`+`m`キーを同時に押します。ボーレートを**9600**に設定します。

- **ステップ5. キャリブレーション**  
        電流が流れていない場合でも、センサーは小さな出力値を持ちます。この値を**ゼロオフセット**と呼びます。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" /></a></p>
  <figcaption><b>図5</b>. <i>このボードのゼロオフセットは346.68mVで、電流に換算すると93.48mAです。</i></figcaption>
</figure>
</div>

ゼロオフセットが存在するため、センサーは電流がない場合でも値を読み取ります。そのため、これを補正するためにパラメータ **Vref** を設定します。このパラメータは上記のコードブロックに記載されています。

19行目：

```cpp
float Vref = 322;  
// Vrefはゼロドリフト値です。使用する前に実際に測定した値にこの値を変更する必要があります。
```

デモコードでは、Vrefを322に設定していますが、ゼロオフセット値はボードごとに異なります。このデモで使用しているボードの値は346.68です。したがって、21行目を次のように修正します：

```cpp
float Vref = 346.68;
```

その後、コードを保存して再度アップロードし、ステップ2とステップ3に従います。では、確認してみましょう：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" /></a></p>
  <figcaption><b>図6</b>. <i>現在のゼロオフセットが0mAに調整されました</i></figcaption>
</figure>
</div>

電流出力が0mAまたは小さい値になった場合、キャリブレーションが完了したことを意味します。

- **ステップ6.** これで準備完了です。電流を供給してください。自由に使用できますが、これは10A DC電流センサーであることを忘れないでください。電流が10Aを超えないようにしてください！

結果の計算式を知りたい場合は、[FAQ Q1](#faq)を参照してください。

### Raspberry Piで遊ぶ

**必要な材料**

| Raspberry Pi | Grove Base Hat for RasPi | 10A DC Current Sensor |
|--------------|---------------------------|-----------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

#### ハードウェア接続

- **ステップ1**. Grove Base HatをRaspberry Piに接続します。

- **ステップ2**. Grove - 10A DC Current Sensor(ACS70331)をBase Hatのポート**A0**に接続します。

- **ステップ3**. テストする回路の正極と負極を、ネジ端子の対応する正極と負極に接続します。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" /></a></p>
  <figcaption><b>図7</b>. <i>このデモではDC電源を使用しています。最初は電流を0Aに設定するか、電源を入れないでください</i></figcaption>
</figure>
</div>

:::tip
正極と負極を逆に接続すると、読み取り値が逆になります。このセンサーは使用前にキャリブレーションが必要ですので、最初に回路に電源を入れないでください。
:::

- **ステップ4**. Micro-USBケーブルを使用してRaspberry Piに電源を供給します。

:::caution
Raspberry Piに電源を供給するには、コンピュータのUSBポートまたはDCアダプタを使用できます。ただし、Raspberry Pi 3B+を使用している場合は、DCアダプタで電源を供給することを強くお勧めします。PCのUSBポートを使用すると、Raspberry Pi 3B+が損傷する可能性があります。
:::

#### ソフトウェア

- **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。

- **ステップ2**. [grove.py](https://github.com/Seeed-Studio/grove.py)ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 次のコマンドを実行してコードを実行します。

```python
cd grove.py/grove   # デモファイルフォルダに移動
python grove_current_sensor.py 0 10A   # デモプログラムを実行
```

その後、ターミナルに以下のように出力されます：

```python
pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
323
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

`ctrl`+`c`を押して終了します。

:::note
2番目のコマンドに注意してください。ファイル名の後に2つのパラメータがあります：

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font> はセンサーがポートA0に接続されていることを意味します。センサーをポートA2に接続した場合、このパラメータを2に変更する必要があります。このパラメータの範囲は0-7ですが、Grove Base Hatを使用する場合、インターフェースの物理的制約により0/2/4/6のみ使用できます。

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>10A</font> は電流センサーのタイプが10A DCであることを意味します。
:::

センサー                                     |電流タイプ|パラメータ値
-------------------------------------------|----------|------------
Grove - 2.5A DC Current Sensor(ACS70331)   |DC        |2.5A
Grove - ±5A DC/AC Current Sensor (ACS70331)|DC        |5A_DC
                                           |AC        |5A_AC
Grove - 10A DC Current Sensor (ACS725)     |DC        |10A

<div align="center"><i>このシリーズには3つの電流センサーがあり、パラメータリストは上記の通りです</i></div>

:::note
10AのDC電流センサーは小さな範囲を測定する際に大きな誤差が生じる可能性があるため、200mA以上の電流を供給してテストすることをお勧めします。また、測定環境も精度に影響を与えるため、供給電圧のリップルを可能な限り小さくしてください。
:::

- **ステップ4 キャリブレーション**.  

電流が流れていない場合でも、センサーは小さな出力値を持ちます。この値をゼロオフセットと呼びます。ステップ3で示されているように、このボードのゼロオフセットは324mVであり、電流に換算すると8mAです。

ゼロオフセットが存在するため、電流が流れていない場合でもセンサーは値を読み取ります。そのため、これを補正するために**Vref**というパラメータを設定します。このパラメータは**python grove_current_sensor.py**内で確認できます。Grove - 10A DC Current Sensor (ACS725)の場合、デフォルトで**Vref**を322に設定しています。ただし、ゼロオフセットはボードごとに異なるため、最初にキャリブレーションを行う必要があります。

以下にPythonコードを示します。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# これはGrove Base Hat用のライブラリです。
# Raspberry Piに接続するためのGroveセンサー用です。
'''
このコードは以下のセンサー用です：
    - `Grove - 2.5A DC current sensor  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A AC/DC current sensor <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A current sensor      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
例:
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        # 10A電流センサーを使用する場合: pin = 0 , sensor_type = "10A"
        if (sensor_type == "2.5A"):
            sensitivity = 1000.0 / 800.0
            Vref = 260
        if (sensor_type == "5A_DC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "5A_AC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "10A"):
            sensitivity = 1000.0 / 264.0
            Vref = 322
        averageValue = 500
        ADC = Current()
        while True:
            if(sensor_type == "5A_AC"):
                pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
            else:
                temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                current = temp[0]
                pin_voltage = temp[1]
        
            current = round(current)
            print("pin_voltage(mV):")
            print(pin_voltage)
            print("current(mA):")
            print(current)
            print()
            time.sleep(1)
    
'''

import sys
import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0

__all__ = ['Current','Bus']

class Current():
    '''
    Grove Current Sensorクラス
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        I2Cの初期化。
        引数: 
            bus_num(int): バス番号;
            addr(int): I2Cアドレス;
        '''
        self.bus = Bus(bus_num)
        self.addr = addr
  
    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        nチャンネルのデータをmV単位で取得。
        :param int n: ADCピン。
        :param int averageValue: 平均取得頻度。
        戻り値: 
            int: 電圧値
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A DC/10A電流センサーでnチャンネルのデータをmA単位で取得。
        :param int n: ADCピン。
        :param float sensitivity: 電圧を電流に変換する係数。
        :param int Vref: 無負荷時の初期電圧。
        :param int averageValue: 平均取得頻度。
        戻り値: 
            int: 電流値
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        currentVal = (val - Vref) * sensitivity
        return currentVal,val

    def get_nchan_AC_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        5A電流センサーAC出力でnチャンネルのデータをmA単位で取得。
        :param int n: ADCピン。
        :param float sensitivity: 電圧を電流に変換する係数。
        :param int Vref: 無負荷時の初期電圧。
        :param int averageValue: 平均取得頻度。
        戻り値: 
            int: 電流値
        '''
        sensorValue = 0
        for i in range(averageValue):
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val=data[1]<<8|data[0]
            if(val > sensorValue):
                sensorValue=val
            time.sleep(0.00004)
        currentVal = ((sensorValue - Vref) * sensitivity)*0.707
        return currentVal   

ADC = Current()
def main():
    if(len(sys.argv) == 3):

        pin = int(sys.argv[1])
        sensor_type = sys.argv[2]
        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

            while True:

                if(sensor_type == "5A_AC"):
                    pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                    current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
                else:
                    temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                    current = temp[0]
                    pin_voltage = temp[1]

                current = round(current)
                print("pin_voltage(mV):")
                print(pin_voltage)
                print("current(mA):")
                print(current)
                print()
                time.sleep(1)
            
        else:
            print("パラメータ入力エラー！")
            print("以下のようにパラメータを入力してください: python grove_current_sensor 0 2.5A")
            print("パラメータ1: 0-7")
            print("パラメータ2: 2.5A/5A_DC/5A_AC/10A")
    
    else:
        print("以下のようにパラメータを入力してください: python grove_current_sensor 0 2.5A")
        print("パラメータ1: 0-7")
        print("パラメータ2: 2.5A/5A_DC/5A_AC/10A")
    
    
if __name__ == '__main__':
    main()

```

コードブロックの156行目で **Vref** を変更できます：

```python

        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

```

ご覧の通り、10A電流センサーの場合、デフォルトの **Vref** は322です。そして、**ステップ3**では、電流がない場合のゼロオフセット値が324mVであることがわかります。では、これを324に変更しましょう。

```python
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 324
```

では、このデモを再度実行してみましょう。

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
325
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
323
current(mA):
-4.0
()
pin_voltage(mV):
324
current(mA):
0.0

```

さて、以前よりも良くなりましたね。これで電流をより正確に測定できるようになりました 😄

## FAQ

**Q1#** 電流計算の公式は何ですか？

**A1:** [動作原理](#working-principle)の部分が非常に複雑だと感じる場合は、簡単に説明しましょう。テスト対象の回路内の電流が磁場を励起し、それがGMR素子の抵抗値を変化させます。そして、ブリッジ内の抵抗変化がチップの出力電圧の変化を引き起こします。この出力電圧を **V<sub>IOUT</sub>** と呼びます。

<div><p style={{textAlign: 'center'}}>
   V<sub>IOUT</sub> = Sens × I<sub>p</sub> +  V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sensは電流を出力電圧に変換する係数です。このモジュールでは264mA/Vです。  
> **I<sub>p</sub>**: I<sub>p</sub>はテスト対象の回路内の電流値です（単位：mA）。  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub>は、I<sub>p</sub>が0mA（つまり、テスト対象の回路に電流がない場合）の出力電圧です（単位：mV）。

ここで電流値を求める公式が登場します：  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

では、図5を見てみましょう。ここで、テスト対象の回路内の実際の電流値が0である場合でも、出力の電流値が0でない理由を説明します。図5では、**initialValue**が346.68mVで、これは **V<sub>IOUT</sub>** に相当します。電流は93.48mAで、これは **I<sub>p</sub>** に相当します。**V<sub>IOUT(Q)</sub>** はコード内で設定した **Vref** です。図5では265です。そして、**Sens** は264mA/V、つまり264mA/1000mVです。では、計算してみましょう：

<div><p style={{textAlign: 'center'}}>
  {'{'}(346.68mV-322mV) / (264mA/1000mV){'}'} = 93.48mA
</p></div>

したがって、図6では、**Vref** を346.68に設定すると、**Ip** は0mAになります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - 10A DC 電流センサー (ACS725) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [ACS725 データシート](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/ACS725.pdf)

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