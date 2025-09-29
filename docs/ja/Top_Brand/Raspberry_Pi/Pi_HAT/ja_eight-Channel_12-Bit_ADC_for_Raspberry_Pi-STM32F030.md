---
description: Raspberry Pi用8チャンネル12ビットADC（STM32F030）
title: Raspberry Pi用8チャンネル12ビットADC（STM32F030）
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/main.jpg)

ADCはRaspberry Piの一般的なアクセサリです。現在、多くの安価なMCUには内蔵ADCが搭載されているため、コストパフォーマンスが高く低消費電力のARM Cortex M0 MCUであるSTM32F030をベースにした8チャンネルADCを作成しました。このMCUから8チャンネルのADCをブレークアウトし、4つのアナログGroveコネクタを統合しているため、アナログGroveモジュールも使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- CRC計算ユニット
- 5チャンネルのダイレクトメモリアクセス（DMA）コントローラー
- アラームと定期的なウェイクアップを備えたカレンダーRTC
- タイマー
  - 高度制御タイマー
  - 汎用タイマー & 基本タイマー
  - 独立型およびシステムウォッチドッグタイマー
  - SysTickタイマー
- リアルタイムクロック（RTC）
- シリアルワイヤデバッグ（SWD）
- Raspberry Pi 3B/3B+/4をサポート

## 仕様

|項目|値|
|---|---|
|動作供給電圧|3.3V|
|ADC解像度|12ビット|
|最大クロック周波数|48 MHz|
|プログラムメモリサイズ|16kB|
|データRAMサイズ|4 kB|
|データバス幅|32ビット|
|動作温度|-40～85℃|
|通信インターフェース|I2C|
|I2Cアドレス|0x04（デフォルト）|
|サイズ|長さ: 65mm 幅: 55mm 高さ: 18mm|
|重量|25.9g|
|パッケージサイズ|長さ: 140mm 幅: 75mm 高さ: 25mm|
|総重量|45g|

## 主な用途

- 温度測定
- 消費財

## ハードウェア概要

### ピンアウト

**概要**

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin.jpg)

**GPIO**

Raspberry Piと同じピンアウトです。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-5.jpg)

**SWD**

このボードにファームウェアを書き込むためにSWDポートを使用します。また、このセクションではピン9/ピン10/ピン11を見ることができます。これらの3つのピンはGroveポートでは使用されていないため、ピンの競合を心配することなく自由に使用できます。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-1.jpg)

**Groveアナログポート**

Raspberry Piには内蔵ADCがないため、STM32ベースのADCボードを使用することで、アナログセンサーをRaspberry Piと連携させることができます。

このボードには4つのGroveアナログソケットがあり、[Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html)を使用してGroveモジュールと直接接続できます。

アナログセンサーはアナログ電圧を12ビットADCに入力します。ADCがアナログデータをデジタルデータに変換した後、I2Cインターフェースを介してデジタルデータをRaspberry Piに入力します。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-4.jpg)

**メスピンヘッダーポート**

Groveアナログポートと同様ですが、[Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html)の代わりに、[Breadboard Jumper Wire Pack](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)を使用する必要があります。

8つのアナログ接続ポート、A0 ～ A7。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-3.jpg)

**スクリュー端子**

上記と同様ですが、接続方法が異なります。このピンコネクタグループには、アナログピンA0 ～ A7、Vcc、およびGNDが含まれます。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-2.jpg)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### ハードウェア

**必要な材料**

|Raspberry Pi|Raspberry Pi用8チャンネル12ビットADC (STM32F030)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)|

- **ステップ 1**. Raspberry Pi用8チャンネル12ビットADC (STM32F030) をRaspberry Piに挿入します。
- **ステップ 2**. USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection1.jpg)

### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 2**. grove.pyライブラリをインストールします。

```
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 adc_8chan_12bit.py 

```

以下はadc_8chan_12bit.pyのコードです。

```python

import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0


class Pi_hat_adc():
    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        self.bus=Bus(bus_num)
        self.addr=addr

    
    # 全ての生ADCデータを取得します。最大値は4095です（12ビットADCのため）。
    def get_all_adc_raw_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_adc_raw_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+n,2)
        val =data[1]<<8|data[0]
        return val
    # 単位がミリボルトの全データを取得します。
    def get_all_vol_milli_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_vol_milli_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
        val =data[1]<<8|data[0]
        return val

    # 単位が0.1%の全データ比率を取得します。
    def get_all_ratio_0_1_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_ratio_0_1_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+n,2)
        val =data[1]<<8|data[0]
        return val



ADC = Pi_hat_adc()
def main():
    raw_data=ADC.get_all_adc_raw_data()
    vol_data=ADC.get_all_vol_milli_data()
    ratio_data=ADC.get_all_ratio_0_1_data()
    print("各チャンネルの生データ：(1-8チャンネル)(12ビット-最大値=4096):")
    print(raw_data)
    print("各チャンネルの電圧：(単位:mv, 最大値=3300mv):")
    print(vol_data)
    print ("各チャンネルの比率：(単位:0.1%, 最大値=100.0%):")
    print(ratio_data)

    print(" ")
    print("注意!!!:")
    print("ADC PINのデフォルト設定はfloating_inputです。")
    print(" ")

if __name__ == '__main__':
    main()


```

:::tip success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 adc_8chan_12bit.py 
各チャンネルの生データ：(1-8チャンネル)(12ビット-最大値=4096):
[2177, 2098, 2064, 2038, 2127, 2066, 2172, 2145]
各チャンネルの電圧：(単位:mv, 最大値=3300mv):
[1599, 1741, 1668, 1658, 1644, 1787, 1694, 1677]
各チャンネルの比率：(単位:0.1%, 最大値=100.0%):
[521, 544, 514, 504, 500, 559, 524, 505]
 
注意!!!:
ADC PINのデフォルト設定はfloating_inputです。
 


```

### 例

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

[Grove - Sound Sensor](https://wiki.seeedstudio.com/ja/Grove-Sound_Sensor/) を例に、このボードの使用方法を紹介します。

ハードウェア接続

- **ステップ 1**. 8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) を Raspberry Pi に接続します。
- **ステップ 2**. Grove - Sound Sensor を ADC モジュールの A0 ポートに接続します。
- **ステップ 3**. Raspberry Pi を USB ケーブルを使用して PC に接続します。

ハードウェア接続図

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection2.jpg)

以下のコマンドをコマンドラインインターフェースで入力します：  
++python grove_sound_sensor.py 0++

```cpp
pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0
Detecting sound...
Sound value: 433
Sound value: 342
Sound value: 443
Sound value: 300
Sound value: 632
Sound value: 258
Sound value: 591
Sound value: 267
Sound value: 871
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt
```

このプログラムを終了するには、`ctrl`+`c` を押すだけです。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br />

:::note製品変更のお知らせ:

ST32シリーズのチップが世界的に在庫切れとなり、価格が数倍に上昇し、明確な納期がないため、MM32チップに切り替えることを余儀なくされました。具体的な交換モデルは以下の通りです：STM32F030F4P6TR は MM32F031F6P6 に置き換えられます。チップが交換された後も、製品の機能、特徴、使用方法、コードは変更されません。ただし、ファームウェアのバージョンが変更され、異なるチップに応じて工場出荷時のファームウェアが調整されています。ファームウェアを再書き込みする必要がある場合は、チップに対応するファームウェアをダウンロードしてください。
:::

## リソース

- **[Zip]** [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) Eagle ファイル](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip)

- **[Zip]** [MM32F031F6P6 ファームウェア](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_firmware.zip)

- **[Zip]** [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) ソフトウェアライブラリ](https://github.com/Seeed-Studio/grove.py)

- **[PDF]** [STM32F030 データシート](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6 データシート](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>