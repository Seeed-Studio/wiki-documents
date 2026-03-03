---
description: Xadow - UV センサー
title: Xadow - UV センサー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_UV_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/xadow%20uv.jpg)

Xadow UV センサーは、日光中の紫外線放射を測定するのに適しています。このセンサーは 290 ~ 400 nm の紫外線波長を検出できます。UV センサーは、紫外線の強度に対応するデジタル電圧値を出力します。出力電圧と紫外線の関係図を使用することで、現在の UV 指数を簡単に知ることができます。Xadow UV センサーは 3.3V で動作し、Xadow システムと互換性があります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html)

##  仕様
---
*   UV-A および UV-B ブランドを検出可能
*   UV 波長検出範囲: 290 ~ 400nm
*   最大感度波長: 330nm
*   内蔵 ADC 回路、高精度変換
*   テスト精度: ±0.1 UV 指数
*   動作温度: -25 ~ 70 ℃
*   寸法: 25.43mm x 20.35mm

##  デモンストレーション
---
Xadow UV センサーは、UV 指数に対応する電圧値を出力します。出力電圧と UV 指数の間には線形関係があるため、数式を使用して直接 UV 指数を確認することもできます。次に、UV センサーを使用して UV 指数を取得し、それを OLED 画面に表示する方法を示します。

<!-- 必要な Xadow モジュール: [Xadow - Main Board](/ja/Xadow_Main_Board/), [Xadow - OLED 128*64](/ja/Xado_OLED_128multiply64/), **Xadow - UV Sensor** -->

**ハードウェアのインストール**


:::note
    Xadow UV センサーを Xadow メインボードに接続する際は、接続方向に注意してください。接続方法は、1 つの Xadow モジュールの未充填の角を、別のモジュールの直角に接続することです（各 Xadow モジュールの 4 つの角を参照してください）。
:::
**コードのダウンロード**

<!-- *   まず、Arduino ライブラリに [OLED_Display12864 ライブラリ](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/OLED_Display12864.zip) があることを確認してください。ない場合は、[こちら](https://github.com/Seeed-Studio/Grove_OLED_Display_128X64) をクリックしてダウンロードし、Arduino ライブラリに追加してください。操作に慣れるために、wiki ページの [Arduino ライブラリのインストール方法](/ja/How_to_install_Arduino_Library/) を参照してください。 -->

*   次に、以下のコードを Arduino IDE にコピーして貼り付け、Xadow メインボードにアップロードします。
```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Streaming.h>

#define ADDR_ADC121    0x5A

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
float analogVal=0;
float UVIndex = 0;
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
    Wire.write(REG_ADDR_CONFIG);                // 設定レジスタ
    Wire.write(0x20);
    Wire.endTransmission();
}
void setup()
{
    Wire.begin();
    Serial.begin(38400);
    SeeedOled.init();  // SEEED OLED ディスプレイを初期化
    SeeedOled.clearDisplay();  // 画面をクリアし、開始位置を左上隅に設定

    init_adc();
}

void loop()
{
    readVoltage();
    //SeeedOled.clearDisplay();
    SeeedOled.setTextXY(1,0);
    SeeedOled.putString("Voltage: ");
    SeeedOled.setTextXY(1,8);
    SeeedOled.putFloat(analogVal);
    SeeedOled.setTextXY(1,12);
    SeeedOled.putString("mV");
    SeeedOled.setTextXY(2,0);
    SeeedOled.putString("UVIndex: ");
    SeeedOled.setTextXY(2,8);
    SeeedOled.putFloat(UVIndex);
    delay(50);
}
void readVoltage()     //unsigned int *data
{
    Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
    Wire.write(REG_ADDR_RESULT);                // 結果を取得
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // デバイスから 2 バイトを要求
    delay(1);
    if(Wire.available()<=2)
    {
        getData = (Wire.read()&0x0f)<<8;
        getData |= Wire.read();
    }
    delay(50);
    analogVal = getData*V_REF/4096/2;
    Serial.print("analogVal:");
    Serial.print(analogVal);
    Serial.println("mV");
    UVIndex = analogVal/9.71;
    Serial.print("UVIndex:");
    Serial.println(UVIndex);

}
```

*   シリアルモニターを開くと、電圧値と UV 指数が表示されます。

*   OLED 画面にも表示されます。

*   以下の図を参照することで、UV 指数を簡単に計算できます。

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Voltage_and_UVI.jpg)

Xadow UV センサーについては、抵抗値が 3M の抵抗を使用しているため、RL=3M のラインを参照する必要があります。

電圧と UV の関係は線形で観察できます。コード内で使用されている計算式は次の通りです: UV 指数 = 電圧 / 9.71

##  参考
---
###  UVセンサー I2Cアドレス

Xadow UVセンサーには、スレーブアドレスと呼ばれる7ビットのハードウェアアドレスがあります。このスレーブアドレスは、ADR0およびADR1のアドレス選択入力によって設定されます。ADR0およびADR1は、低レベル、浮動状態、または高レベルに接続することができます。これらの入力の状態によって、I2Cバス上でモジュールが応答するハードウェアアドレスが設定されます（以下の表を参照してください）。

<table cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">スレーブアドレス[A6 - A0]</th>
<th colspan="2" scope="col">ADR0およびADR1入力の状態</th>
</tr>
<tr>
<td scope="col">ADR1</td>
<td scope="col">ADR0</td>
</tr>
<tr>
<td scope="row">1010000(0x50)</td>
<td>浮動</td>
<td>浮動</td>
</tr>
<tr>
<td scope="row">1010001(0x51)</td>
<td>浮動</td>
<td>L</td>
</tr>
<tr>
<td scope="row">1010010(0x52)</td>
<td>浮動</td>
<td>H</td>
</tr>
<tr>
<td scope="row">1010100(0x54)</td>
<td>L</td>
<td>浮動</td>
</tr>
<tr>
<td scope="row">1010101(0x55)</td>
<td>L</td>
<td>L</td>
</tr>
<tr>
<td scope="row">1010110(0x56)</td>
<td>L</td>
<td>H</td>
</tr>
<tr>
<td scope="row">1011000(0x58)</td>
<td>H</td>
<td>浮動</td>
</tr>
<tr>
<td scope="row">1011001(0x59)</td>
<td>H</td>
<td>L</td>
</tr>
<tr>
<td scope="row">1011010(デフォルト 0x5A)</td>
<td>H</td>
<td>H</td>
</tr>
</table>

デフォルトモードでは、ADR0およびADR1は"H"に接続されています（Xadow UVセンサーを参照）。

###  UVセンサーのスペクトル応答曲線

![](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Responsivity.jpg)


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  リソース
---
[Xadow UVセンサー Eagleファイル](https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>