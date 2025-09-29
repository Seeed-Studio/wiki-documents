---
description: Grove - DS1307 RTC（リアルタイムクロック）Arduino用
title: Grove - DS1307 RTC（リアルタイムクロック）Arduino用
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-RTC
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d.jpg" /></div>

RTCモジュールは、I2CプロトコルをサポートするクロックチップDS1307をベースにしています。リチウム電池（CR1225）を使用します。時計/カレンダーは秒、分、時間、曜日、日付、月、年を提供します。月末の日付は、31日未満の月に自動的に調整され、うるう年の補正も含まれます。時計は24時間形式またはAM/PMインジケータ付きの12時間形式で動作します。また、2100年まで有効です。安定した性能を得るためには、バッテリーホルダーに3ボルトのCR1225リチウム電池を入れる必要があります。主電源のみを使用すると、モジュールが正常に動作しない可能性があります。これは、クリスタルが振動しない可能性があるためです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RTC-p-758.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

:::note
        バッテリーは含まれていません。
:::

## 事前読書

Arduino用RTCの紹介を事前に読むことを強くお勧めします。これにより、RTCについて詳しくない場合でも理解が深まります。

<p style={{textAlign: 'center'}}><a href="https://blog.seeedstudio.com/blog/2019/11/19/arduino-tutorial-using-ds1307-rtc-with-arduino/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2019/11/image-88.png" border="0" /></a></p>

## 仕様

- PCBサイズ: 2.0cm\*4.0cm
- インターフェース: 2.0mmピッチピンヘッダー
- IO構造: SCL, SDA, VCC, GND
- ROHS: YES
- VCC：3.3~5.5V
- 論理ハイレベル入力：2.2~VCC+0.3 V
- 論理ローレベル入力：-0.3~+0.8 V
- バッテリー電圧：2.0~3.5 V

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove-RTC |
|----------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-RTC-p-758.html)|

- **ステップ 2.** Grove-RTCをGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
安定した性能を得るためには、バッテリーホルダーに3ボルトのCR1225リチウム電池を入れる必要があります。主電源のみを使用する場合、モジュールが正常に動作しない可能性があります。これは、クリスタルが発振しない可能性があるためです。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino_connection.jpg" /></div>

:::note
Base Shieldがない場合でも、Grove-RTCをArduinoボードに直接接続することができます。以下の接続を参照してください。
:::

| Seeeduino_v4 | Grove-RTC  |
|--------------|------------|
| 5V           | VCC        |
| GND          | GND        |
| SDA          | SDA        |
| SCL          | SCL        |

#### ソフトウェア

**ステップ 1.** [RTCライブラリ](https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip)をダウンロードします。

**ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ 3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、直接コードを以下のパスから開きます：**File -> Example -> RTC -> SetTimeAndDisplay**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/library%20example.jpg" /></div>

```cpp
#include <Wire.h>
#include "DS1307.h"

DS1307 clock; // DS1307クラスのオブジェクトを定義
void setup()
{
    Serial.begin(9600);
    clock.begin();
    clock.fillByYMD(2013,1,19); // 2013年1月19日
    clock.fillByHMS(15,28,30); // 15:28:30
    clock.fillDayOfWeek(SAT); // 土曜日
    clock.setTime(); // RTCチップに時間を書き込む
}
void loop()
{
    printTime();
}
/*関数: シリアルモニターに時間を表示*/
void printTime()
{
    clock.getTime();
    Serial.print(clock.hour, DEC);
    Serial.print(":");
    Serial.print(clock.minute, DEC);
    Serial.print(":");
    Serial.print(clock.second, DEC);
    Serial.print("  ");
    Serial.print(clock.month, DEC);
    Serial.print("/");
    Serial.print(clock.dayOfMonth, DEC);
    Serial.print("/");
    Serial.print(clock.year+2000, DEC);
    Serial.print(" ");
    Serial.print(clock.dayOfMonth);
    Serial.print("*");
    switch (clock.dayOfWeek) // 曜日をフレンドリーに表示
    {
        case MON:
        Serial.print("MON");
        break;
        case TUE:
        Serial.print("TUE");
        break;
        case WED:
        Serial.print("WED");
        break;
        case THU:
        Serial.print("THU");
        break;
        case FRI:
        Serial.print("FRI");
        break;
        case SAT:
        Serial.print("SAT");
        break;
        case SUN:
        Serial.print("SUN");
        break;
    }
    Serial.println(" ");
}
```

**ステップ 4.** 時間を設定します。関数の引数を現在の日付/時間に変更してください。引数の形式に注意してください。

```c
clock.fillByYMD(2013,1,19); // 2013年1月19日
clock.fillByHMS(15,28,30); // 15:28:30
clock.fillDayOfWeek(SAT); // 土曜日
```

**ステップ 5.** コードをアップロードし、シリアルモニターを開いてセンサーのデータを受信します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino%20result.png" /></div>

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove-RTC |
|--------------|--------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-RTC-p-758.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove-RTCをGrovePi_Plusの**I2C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/rasp_connection.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)を参照して開発環境を構成します。
- **ステップ 2.** GitHubリポジトリをクローンします。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してセンサーを使用します。

```bash
cd ~/GrovePi/Software/Python
python grove_i2c_rtc.py
```

以下はコードです：

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove I2C RTC (https://www.seeedstudio.com/wiki/Grove_-_RTC)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## ライセンス
MITライセンス (MIT)
Raspberry Pi用GrovePi: GroveセンサーをRaspberry Piに接続するためのオープンプラットフォーム。
Copyright (C) 2017 Dexter Industries
本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得したすべての人に対し、以下の条件に従い、ソフトウェアを使用、コピー、変更、統合、公開、配布、サブライセンス、または販売する権利を無償で許可します。
上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含まれるものとします。
本ソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。これには、商品性、特定目的への適合性、および非侵害性の保証が含まれますが、これに限定されません。
著者または著作権者は、契約、不法行為、またはその他の理由に基づく請求、損害賠償、またはその他の責任について、一切責任を負いません。
'''

import time
import grovepi

# Groveリアルタイムクロックを任意のI2Cポートに接続（例: I2C-1）
# I2Cアドレス0x68で見つかります
# SCL, SDA, VCC, GND

while True:
    try:
        print(grovepi.rtc_getTime())
        time.sleep(.5)

    except IOError:
        print ("エラー")
```

- **ステップ 4.** こちらが結果です。

  ![](https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display.jpg)

**デモ 2: Grove_rtc**

このデモを使用して、一般的な時間表示を行うこともできます。`grove_rtc.py` を作成し、以下のコードをコピーしてください。

```python
    '''
     * Grove-RTC.py
     * Raspberry Pi 用デモ
     *
     * 著作権 (c) 2014 seeed technology inc.
     * ウェブサイト: community.seeedstudio.com/
     * 作成者      : Lambor
     * 作成日時    : 2014年11月
     * 変更履歴    :
     *
     * MIT ライセンス (MIT)
     *
     * このソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）のコピーを取得するすべての人に、
     * ソフトウェアを制限なく使用、コピー、変更、結合、公開、配布、サブライセンス、
     * または販売する権利を無償で許可します。
     * また、ソフトウェアが提供される人に以下の条件に従うことを許可します。
     *
     * 上記の著作権表示および本許可表示は、ソフトウェアのすべてのコピーまたは
     * 重要な部分に含まれるものとします。
     *
     * ソフトウェアは「現状のまま」提供され、明示的または暗示的を問わず、
     * 商品性、特定目的への適合性、および非侵害性を含むがこれに限定されない
     * いかなる保証もありません。
     * 著者または著作権者は、ソフトウェアまたはその使用またはその他の取引に関連して
     * 生じるいかなる請求、損害、またはその他の責任についても責任を負いません。
     '''
    
    #!/usr/bin/python
import time
import smbus


    bus = smbus.SMBus(1)    # 0 = /dev/i2c-0 (ポート I2C0), 1 = /dev/i2c-1 (ポート I2C1)   

class DS1307():     
        def __init__(self):
            self.MON = 1
            self.TUE = 2
            self.WED = 3
            self.THU = 4
            self.FRI = 5
            self.SAT = 6
            self.SUN = 7
            self.DS1307_I2C_ADDRESS = 0x68

            print '開始'

        def decToBcd(self, val):
            return ( (val/10*16) + (val%10) )

        def bcdToDec(self,  val):
            return ( (val/16*10) + (val%16) )

        def begin(self, news):
            print news

        def startClock(self):   
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) & 0x7f
            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)

            print '時計を開始します..'

        def stopClock(self):                        
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) | 0x80
            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)         

            print '時計を停止します..'

        def setTime(self):
            data = [self.decToBcd(self.second), self.decToBcd(self.minute), \
                    self.decToBcd(self.hour), self.decToBcd(self.dayOfWeek), \
                    self.decToBcd(self.dayOfMonth), self.decToBcd(self.month), \
                    self.decToBcd(self.year)]

            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            bus.write_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00,data)

            print '時間を設定します..'

        def getTime(self):
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            data = bus.read_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00)
            #いくつかの値は制御ビットのためマスクが必要です
            self.second = self.bcdToDec(data[0] & 0x7f)
            self.minute = self.bcdToDec(data[1])
            self.hour = self.bcdToDec(data[2] & 0x3f)  #12時間制 am/pm の場合は変更が必要
            self.dayOfWeek = self.bcdToDec(data[3])
            self.dayOfMonth = self.bcdToDec(data[4])
            self.month = self.bcdToDec(data[5])
            self.year = self.bcdToDec(data[6])

            print '時間を取得します..'

        def fillByHMS(self, _hour,  _minute,  _second):
            self.hour = _hour
            self.minute = _minute
            self.second = _second

            print '時分秒を設定します..'

        def fillByYMD(self, _year,  _month,  _day):     
            self.year = _year - 2000
            self.month = _month;
            self.dayOfMonth = _day

            print '年月日を設定します..'

        def fillDayOfWeek(self,  _dow):     
            self.dayOfWeek = _dow

            print '曜日を設定します..'

    if __name__ == "__main__":
        clock = DS1307()
        clock.fillByYMD(2015,3,5)
        clock.fillByHMS(12,42,30)
        clock.fillDayOfWeek(clock.THU)  
        clock.setTime()
        while True:     
            clock.getTime()
            print clock.hour, ":", clock.minute, ":", \
                    clock.second, " ", clock.dayOfMonth, "/", \
                    clock.month, "/", clock.year,"  ", "曜日", \
                    ":", clock.dayOfWeek            
            time.sleep(1)
```

以下のコマンドを実行して、このセンサーを使用してください。

```bash
    sudo python grove_rtc.py
```

こちらが結果です。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display2.jpg" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Eagle形式のGrove-RTC](https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip)
- **[PDF]** [PDF形式のGrove-RTC回路図](https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove%20-%20RTC%20v1.1%20Sch.pdf)
- **[PDF]** [PDF形式のGrove-RTC PCB](https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove%20-%20RTC%20v1.1%20PCB.pdf)
- **[Library]** [RTC用Githubリポジトリ](https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip)
- **[Datasheet]** [DS1307データシート](https://files.seeedstudio.com/wiki/Grove-RTC/res/DS1307.pdf)

## プロジェクト

**Arduinoでリアルタイムクロックを使用する**: スケジュールに基づいて動作するプロジェクトを作りたいと思ったことはありませんか？リアルタイムクロック（RTC）を使用するのはそのための素晴らしい方法です！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/robotgeek-projects-team/using-a-real-time-clock-with-arduino-6b3896/embed' width='350'></iframe>

**カラフルクロック**: エネルギーレベルを表示し、近づくと挨拶してくれる時計

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/zou-wei/colorful-clock-4cea6b/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>