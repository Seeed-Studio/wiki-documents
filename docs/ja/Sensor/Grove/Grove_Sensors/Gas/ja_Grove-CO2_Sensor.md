---
description: Grove - CO2 センサー
title: Grove - CO2 センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-CO2_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


Grove - CO2 センサーモジュールは、高感度・高解像度の赤外線CO2センサーです。赤外線CO2センサーMH-Z16は汎用の小型センサーで、非分散型赤外線（NDIR）技術を利用して空気中のCO2を検出します。選択性が良く、酸素依存性がなく、長寿命で、内蔵温度センサーによる温度補償機能を備えています。また、UART出力を持ち、使いやすい設計です。このセンサーは、HVACや室内空気質モニタリング、産業プロセスモニタリングと安全性、農業および畜産生産プロセスモニタリングなど、幅広い用途に使用できます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html)

<div class="admonition warning">
<p class="admonition-title">注意</p>
センサーの値は、許容誤差範囲内でガス濃度の概略的な傾向を反映するだけです。正確なガス濃度を示すものではありません。空気中の特定の成分を検出するには、通常、より精密で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトで非常に正確なレベルでガス濃度を取得することを目的としている場合、このガスセンサーは推奨されません。
</div>


:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しています。これにより、ニーズに最適なガスセンサーを選択するのに役立ちます。
:::
仕様
-------------

-   測定範囲：0～2000 ppm（PPM）
-   解像度：1 ppm（PPM）
-   精度：200 ppm
-   ウォームアップ時間：3分
-   応答時間：90秒未満
-   動作温度：0～50℃
-   動作湿度：0%～90% RH
-   保管温度：-20～60℃
-   動作電圧：4.5 V～6 V DC
-   最大電流：100 mA未満、平均電流：50 mA未満
-   出力モード：UART

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
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

デモンストレーション
-------------

以下の図のようにGrove Shieldとモジュールを接続し、以下のプログラムを使用して電圧を取得します。

センサーの最適な予熱時間は約180秒です。センサーの詳細情報については、データシートを参照してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/5.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/5.jpg" alt="pir" width={600} height="auto" /></p>


```
/*
  このテストコードはArduino AVRシリーズ（UNO、Leonardo、Mega）向けに書かれています。
  LinkIt ONEで使用する場合は、モジュールをD0/1に接続し、以下を変更してください：

  // #include <SoftwareSerial.h>
  // SoftwareSerial s_serial(2, 3);      // TX, RX

  #define sensor Serial1
*/


#include <SoftwareSerial.h>
SoftwareSerial s_serial(2, 3);      // TX, RX

#define sensor s_serial

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;
 
void setup()
{
    sensor.begin(9600);
    Serial.begin(115200);
    Serial.println("センサーから読み取りを開始するには、'g'を入力してください！");
    Serial.println("********************************************************");
    Serial.println();
}
 
void loop()
{
    if(dataRecieve())
    {
        Serial.print("温度: ");
        Serial.print(temperature);
        Serial.print("  CO2: ");
        Serial.print(CO2PPM);
        Serial.println("");
    }
    delay(1000);
}
 
bool dataRecieve(void)
{
    byte data[9];
    int i = 0;
 
    // コマンドデータを送信
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        sensor.write(cmd_get_sensor[i]);
    }
    delay(10);
    // データ受信開始
    if(sensor.available())
    {
        while(sensor.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = sensor.read();
            }
        }
    }
 
    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");
 
    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }
    
    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;
 
    return true;
}
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Uart_co2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Uart_co2.jpg" alt="pir" width={600} height="auto" /></p>


校正
------------
センサーを校正する必要がある場合は、以下のコードをArduinoにアップロードしてください。

```
// Grove - Co2 Sensor 校正

#include <SoftwareSerial.h>
SoftwareSerial sensor(A5, A4);      // TX, RX


const unsigned char cmd_calibrate[] = 
{
    0xff, 0x87, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf2
};

void setup()
{
    sensor.begin(9600);
    Serial.begin(115200);
    Serial.println("校正を開始します");
    
    for(int i=0; i<sizeof(cmd_calibrate); i++)
    {
        sensor.write(cmd_calibrate[i]);
    }
    
    Serial.println("校正完了");
}

void loop()
{
    // 何もする必要はありません
}
```

:::warning
    校正する前にセンサーを少なくとも5分間予熱し、新鮮な空気中にセンサーを置いてください。
:::
参考
---------

-   350~450ppm: 一般的な屋外環境
-   350~1000ppm：空気が新鮮で呼吸がスムーズ
-   1000~2000ppm：空気が停滞し、眠気を感じる
-   5000ppm：8時間の作業日の許容曝露限界

リソース
---------

-   [MH-Z16_CO2 datasheet_ZH_CN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2.pdf)
-   [MH-Z16_CO2 datasheet_EN.pdf](https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2_datasheet_EN.pdf)
-   [二酸化炭素の健康リスク評価](http://www.blm.gov/style/medialib/blm/wy/information/NEPA/cfodocs/howell.Par.2800.File.dat/25apxC.pdf)


## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、知的農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてAPPからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>