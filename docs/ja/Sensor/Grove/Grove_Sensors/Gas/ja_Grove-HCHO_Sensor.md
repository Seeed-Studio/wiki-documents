---
description: Grove - HCHO センサー
title: Grove - HCHO センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-HCHO_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


Grove - HCHO センサーは半導体VOCガスセンサーです。その設計は、空気中のVOCガス濃度に応じて導電率が変化するWSP2110に基づいています。回路を通じて、導電率をガス濃度に対応する出力信号に変換することができます。このセンサーは最大1ppmの濃度のガスを検出することができます。ホルムアルデヒド、ベンゼン、トルエン、その他の揮発性成分を検出するのに適しています。この製品は家庭環境で有害ガスを検出するために使用できます。そのため、室内環境の生活の質を向上させるための良きアシスタントとなります。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

<div class="admonition warning">
<p class="admonition-title">警告</p>
センサーの値は、許容誤差範囲内でガス濃度の概略的な傾向を反映するだけであり、正確なガス濃度を示すものではありません。空気中の特定の成分を検出するには、通常、より精密で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトが非常に正確なレベルでガス濃度を取得することを目的としている場合、このガスセンサーはお勧めできません。
</div>

:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。これにより、ニーズに最適なガスセンサーを選択するのに役立ちます。
:::
仕様
-------------

-   動作電圧: 5.0V ± 0.3V
-   対象ガス: HCHO、ベンゼン、トルエン、アルコール
-   濃度範囲: 1~50 ppm
-   センサー抵抗値(Rs): 10KΩ-100KΩ(10ppm HCHOの場合)
-   感度: Rs(空気中)/Rs(10ppm HCHO)≥5

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::
対応プラットフォーム
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使い始める
---------------

Grove - HCHO センサーは、HCHO、トルエン、ベンゼン、アルコールなどのVOCを検出するために使用できます。ここでは、HCHOを例にとり、このセンサーの使用方法を説明します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


```
// Grove - HCHO センサーのデモ

#define Vc 4.95

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    float R0=(1023.0/sensorValue)-1;
    Serial.print("R0 = ");
    Serial.println(R0);
    delay(500);
}
```

コードをアップロードした後、シリアルモニターを開いて通常の条件下（屋外が最適）でR0を取得します。

小さなドライバーを使用してR1（青いポテンショメータ）の抵抗を調整し、R0の値を10〜100の範囲に収め、その値を記録します（ここでのR0の値は34.28です）。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png" alt="pir" width={600} height="auto" /></p>


記録したR0の値を`#define R0 ***`に入力し、コードをアップロードします。R0を再度検出することを決定しない限り、R1を調整しないようにしてください。

```
// Grove - HCHO センサーのデモ
#include <math.h>
#define Vc 4.95
// 先ほど検出したR0の値
#define R0 34.28

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue=analogRead(A0);
    double Rs=(1023.0/sensorValue)-1;
    Serial.print("Rs = ");
    Serial.println(Rs);
    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));
    Serial.print("HCHO ppm = ");
    Serial.println(ppm);
    delay(1000);
}
```

次にセンサーをオフィスに移動し、HCHO ppm 値を読み取ります：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png" alt="pir" width={600} height="auto" /></p>

典型的な感度曲線から、検出範囲が 1-50ppm であることがわかります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg" alt="pir" width={600} height="auto" /></p>

他の VOC ガスを検出するには、Rs/R0 を計算し、感度特性図を参照してガス濃度を見つけることができます。または、以下の Python スクリプトを使用して典型的な感度曲線をフィットさせ、a と b の値を計算することもできます：

`ppm = 10 ^ ((log10(Rs/R0) + a) / b)`

```
# coding=utf-8
# HCHO の a と b を計算
import numpy as np
import matplotlib.pyplot as plt

# 典型的な感度曲線から測定データを取得
x = np.array([1, 5, 10, 20, 40])
y = np.array([1.21, 0.56, 0.4, 0.3, 0.21])

plt.subplot(221)
plt.loglog(x,y,lw=2)
#plt.ylim(0,1.5)  
plt.xlabel('log(x)')  
plt.ylabel('log(y)')  
plt.show()  
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [Grove - HCHO センサー Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip)
-   [Grove - HCHO センサー回路図 (PDF)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf)
-   [WSP2110 データシート (中国語)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf)
-   [WSP2110 データシート (英語)](https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_HCHO_Sensor から作成されました -->

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード
SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>