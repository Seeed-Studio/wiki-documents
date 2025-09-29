---
title: Grove- I2C ADC
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-I2C_ADC/
slug: /ja/Grove-I2C_ADC
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg)

Grove - I2C ADC は、ADC121C021 をベースにした 12 ビット精度の ADC モジュールです。このモジュールは、一定の基準電圧を提供することで、アナログセンサーから収集される値の精度を向上させます。また、アドレスが変更可能であるため、最大で 9 つの I2C ADC を同時に使用することができます。さらに、このモジュールは自動スリープ機能を備えており、電力消費を大幅に削減します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-ADC.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## バージョン

| バージョン | デフォルト I2C アドレス |
|---|---|
| Grove - I2C ADC v1.0/v1.1 | 0x55 |
| Grove - I2C ADC v1.2 | 0x50 |

## 特徴

- 低消費電力
- 高精度
- 自動パワーダウンモード
- アドレス変更可能

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

-------------

| 項目             | 典型値  | 単位  |
|------------------|---------|-------|
| 動作電圧         | 5.0     | VDC   |
| 解像度           | 12      | ビット |
| サンプルレート   | 188.9   | ksps  |
| 寸法             | 40X20   | mm    |

## 対応プラットフォーム

-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## ハードウェア概要

------------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Interface.png) -->
**J1:** Arduino IICインターフェースに接続するために使用され、Grove - I2C ADCの出力インターフェースとして機能します。

**J2:** アナログセンサーを接続するために使用され、Grove - I2C ADCの入力インターフェースとして機能します。

**U1:** ADC121C021 IC、12ビットアナログ-デジタルコンバーター

**黒い線で囲まれたエリアはIICアドレスを設定するために使用されます。ADDR0とADDR1は出荷時にLに接続されています。基板上で少し改造することで、これらを"H"または浮動状態（"H"にも"L"にも接続されていない状態）に変更することができます。詳細はリファレンスを参照してください。**

## はじめに

---------------

### Arduinoを使用する場合

Grove - I2C ADCには2つのインターフェースがあります：入力ソケット（J2）と出力ソケット（J1）。アナログセンサーを入力ソケットに接続し、Groveケーブルを介してI2C ADCをArduino/Seeeduinoに接続します。

Grove - ガスセンサーを例に取り、Grove - I2C ADCを使用してセンサーのデータを読み取る方法を学びます。
ハードウェアの接続は以下のようになります：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_gas_sensor_data_using_I2C_ADC.jpg)

以下のコードを使用してガスセンサーの値を読み取ることができます。

```
#include <Wire.h>
 
#define ADDR_ADC121             0x50 // v1.0 & v1.1の場合、I2Cアドレスは0x55
 
#define V_REF 3.00
 
#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07
 
unsigned int getData;
float analogVal=0;         // 変換
void init_adc()
{
  Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
  Wire.write(REG_ADDR_CONFIG);                // 設定レジスタ
  Wire.write(0x20);
  Wire.endTransmission();  
}
 
void read_adc()     //unsigned int *data
{
 
 
    Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
    Wire.write(REG_ADDR_RESULT);                // 結果を取得
    Wire.endTransmission();
 
    Wire.requestFrom(ADDR_ADC121, 2);           // デバイスから2バイトを要求
    delay(1);
    if(Wire.available()<=2)
    {
      getData = (Wire.read()&0x0f)<<8;
      getData |= Wire.read();
    }
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("The analog value is:");
    Serial.print(getData*V_REF*2/4096); 
    Serial.println("V");
}
void setup()
{
  Serial.begin(9600);
  Wire.begin();
  init_adc();
}
 
void loop()
{  read_adc();//adcRead);
   delay(50);
}
```

上記のコードでは、Vrefを3.0Vとして定義しています。この値はI2C ADCモジュールによって決定されます。この基準電圧はマイクロコントローラーによって生成されるものよりも正確です。また、VAとGND間の電圧を測定し、その値を上記コードの3.00に置き換えることでさらに正確にすることができます。

コードをアップロードしてください。

その後、シリアルモニターを開き、値を読み取ります：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

<div class="admonition note">
<p class="admonition-title">注意</p>
Grove - I2C ADCのアドレスは変更可能であり、再定義することができます。これには基板上でのハードウェア改造が必要です。同時に複数のI2C ADCを使用する場合は、以下のリファレンス部分の指示に従ってください。同時に使用可能なI2C ADCの最大数は9ですが、Grove - Base Shield V1.2にはI2Cソケットが4つしかありません。4つ以上のI2C ADCを使用する場合は、<a href="/ja/Grove-I2C_Hub">Grove - I2C Hub</a>を使用してI2Cソケットを増やしてください。
</div>

### Beaglebone Greenを使用する場合

BBG上でプログラムを編集するには、Cloud9 IDEを使用できます。
Cloud9 IDEに慣れるための簡単な演習として、BeagleBoneの4つのユーザープログラム可能なLEDの1つを点滅させる簡単なアプリケーションを作成するのが良いでしょう。

Cloud9 IDEを初めて使用する場合は、この[**リンク**](/ja/BeagleBone_Green)を参照してください。

**ステップ1:** Grove - UARTソケットをGrove - GPIOソケットとして設定します。この[**リンク**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)に従ってください。

**ステップ2:** 右上の"+"をクリックして新しいファイルを作成します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9_newfile.jpg)

**ステップ3:** 以下のコードを新しいタブにコピー＆ペーストします。

```
from Adafruit_I2C import Adafruit_I2C
import time
 
ADDR_ADC121 = 0x50
 
REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07
 
i2c = Adafruit_I2C(ADDR_ADC121)           
 
class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)
 
    def read_adc(self):
        "ADCデータを読み取ります（0-4095）。"
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
 
if __name__ == '__main__':
    # Grove - I2C ADCをBeaglebone GreenのI2C Groveポートに接続します。
    adc = I2cAdc()
    while True:
        print 'sensor value ', adc.read_adc()
        time.sleep(.2)
```

**ステップ4:** ディスクアイコンをクリックしてファイルを保存し、.py拡張子で名前を付けます。

**ステップ5:** Grove I2C ADCをBBGのGrove I2Cソケットに接続します。

**ステップ6:** コードを実行します。ターミナルが2秒ごとにAD値を出力することが確認できます。

リファレンス
---------

### I2Cアドレス設定

ADC I2Cには、ADR0とADR1によって決定される7ビットのハードウェアアドレスがあります。ADR0とADR1はデフォルトで基板内でLに接続されていますが、変更することができます。例えば、ナイフを使用してLとADR0の接続を切断する（以下の画像参照）ことで、ADR0の状態を浮動状態（何にも接続されていない状態）にすることができます。そして、この時点でADR0とHをはんだ付けすると、ADR0の値をHに設定することができます。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Change_I2C_Address.jpg)

ハードウェア I2C アドレスと ADR0 および ADR1 の値の関係は、以下の表に示されています。

<table border="1" cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">
スレーブアドレス[A6 - A0]
</th>
<th colspan="2" scope="col">
ADR0 および ADR1 の入力状態
</th>
</tr>
<tr>
<td scope="col">
ADR1
</td>
<td scope="col">
ADR0
</td>
</tr>
<tr>
<td scope="row">
1010000(0x50)
</td>
<td>
浮動
</td>
<td>
浮動
</td>
</tr>
<tr>
<td scope="row">
1010001(0x51)
</td>
<td>
浮動
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010010(0x52)
</td>
<td>
浮動
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1010100(0x54)
</td>
<td>
L
</td>
<td>
浮動
</td>
</tr>
<tr>
<td scope="row">
1010101(デフォルト 0x55)
</td>
<td>
L
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010110(0x56)
</td>
<td>
L
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1011000(0x58)
</td>
<td>
H
</td>
<td>
浮動
</td>
</tr>
<tr>
<td scope="row">
1011001(0x59)
</td>
<td>
H
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1011010(0x5A)
</td>
<td>
H
</td>
<td>
H
</td>
</tr>
</table>

### I2C ADC は精度をどの程度向上させるのか？

以下は、I2C ADC がアナログセンサーの精度をどの程度向上させるかを示すための実験です。まず、Grove - Gas Sensor(MQ5) を Arduino/Seeeduino のアナログポートを通じて直接収集した値を確認します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_Gas_Sensor_data.jpg)

以下のコードをアップロードしてデータを取得します。

```
    /*
     * Grove - Gas Sensor(MQ5)  
     *
     * ガスセンサーは関連するガス濃度を検出します。
     * Arduino は analogRead を通じて結果を取得します。ガス濃度は
     * 0~1 の範囲で、出力が大きいほどガスが濃いことを示します。
     * このデモではセンサーを A0 に接続します。
     * 
     *  By: https://www.seeedstudio.com
    */
    #define Vref 4.95
    void setup() {
      Serial.begin(9600);
    }
     
    void loop() {
      float vol;
      int sensorValue = analogRead(A0);
      vol=(float)sensorValue/1023*Vref;
      Serial.print("センサー値は ");
      Serial.println(sensorValue);
      Serial.print("アナログ値は ");
      Serial.print(vol);
      Serial.println("V");
      delay(100);
    }
```

結果は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_ADC_2.jpg)

デフォルトでは、Vref は Arduino によって生成され、理論的には 5V ですが、実際には変動する値であり、最終データに偏差をもたらします。この種の不正確さは、Grove - I2C ADC を使用することで回避されます。なぜなら、Grove - I2C ADC は厳密な 3.0V を Vref として提供するからです。

比較のために、同じ条件下で Grove - I2C ADC を使用した回路で収集されたセンサー値は以下の通りです：

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

実際の条件にどちらの結果がより近いかを確認するために、センサーの SIG ピンと GND ピン間の電圧をマルチメーターで測定します。

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Measure_the_real_sensor_value_using_DMM.JPG)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

--------

- [I2C ADC Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip)
- [ADC121C021 データシート](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/ADC121C021_Datasheet.pdf)

## プロジェクト

**BeagleBone Green 温度モニターを Artik Cloud に接続**  
BeagleBone Green で収集した Grove 温度センサーの値を Artik Cloud に公開します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/LaurenceHR/beaglebone-green-temperature-monitor-on-artik-cloud-08ca3b/embed' width='350'></iframe>

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_I2C_ADC から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>