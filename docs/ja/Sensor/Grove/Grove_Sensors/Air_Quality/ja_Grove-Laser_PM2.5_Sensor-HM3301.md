---
description: Grove - Laser PM2.5 センサー (HM3301)
title: Grove - Laser PM2.5 センサー (HM3301)
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Laser_PM2.5_Sensor-HM3301
last_update:
  date: 05/15/2025
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/main.jpg)

Grove - Laser PM2.5 センサー (HM3301) は、新世代のレーザー粉塵検出センサーであり、空気中の粉塵を連続的かつリアルタイムで検出するために使用されます。

従来のポンプ式粉塵検出センサーとは異なり、HM-3301 は革新的にファンブレードを使用して空気を駆動し、検出室を通過する空気をテストサンプルとして使用して、空気中の異なる粒子サイズの粉塵をリアルタイムかつ連続的にテストします。

このモジュールは、粉塵検出器、スマート空気清浄機、スマートエアコン、スマート換気ファン、空気品質テスト、霧計、環境モニタリングおよび関連製品やアプリケーションに適しています。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zQj8RRJcZsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 0.3 μm以上の粉塵粒子に対する高感度
- 空気中の粉塵濃度をリアルタイムかつ連続的に検出
- レーザー光散乱技術に基づき、測定値は正確で安定しており、一貫性があります
- 低ノイズ
- 超低消費電力

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-10～60℃|
|動作湿度|10%～90%RH (結露しないこと)|
|粒子サイズ|3チャンネル-- 1.0µm, 2.5µm, 10µm |
|範囲<br />(PM2.5 標準値)|1~500µg/ m<sup>3</sup> (有効範囲)<br />1000 µg/ m<sup>3</sup> (最大範囲)|
|分解能|濃度: 1µg/ m<sup>3</sup> <br />カウント濃度: 1s/0.1L|
|安定時間|電源オン後30秒|
|インターフェース|I2C|
|I2Cアドレス|0x40|

## 典型的な用途

- 空気清浄機 / エアコン
- 空気品質検査装置
- 工業用PM値分析
- 粉塵および煙の検出と分析
- リアルタイムPM2.5、PM10、TSP検出器
- マルチチャンネル粒子カウンター
- 環境試験装置

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/pin_out.jpg)

## 動作原理

HM-3301 粉塵センサーは、先進的なミー散乱理論に基づいています。光が光の波長と同じかそれ以上の粒子を通過すると、光散乱が発生します。散乱光は高感度のフォトダイオードに集中され、その後回路によって増幅および分析されます。特定の数学モデルとアルゴリズムを使用して、粉塵粒子のカウント濃度と質量濃度が得られます。

HM-3301 粉塵センサーは、ファン、赤外線レーザー光源、集光ミラー、感光チューブ、信号増幅回路、および信号選別回路などの主要なコンポーネントで構成されています。

![HM-3301 モジュール構造図](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/principle.jpg "HM-3301 モジュール構造図")

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Laser PM2.5 Sensor (HM3301) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Laser PM2.5 Sensor (HM3301) を Grove-Base Shield のポート **I^2^C** に接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/connect.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールを直接Seeeduinoに接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - Laser PM2.5 Sensor (HM3301) |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄色              | SCL |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ 1.** [Seeed_PM2_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> PM2.5 sensor --> basic_demo** のパスを使用します。
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path1.jpg)

    2. コンピュータで開く：**XXXX\Arduino\libraries\Seeed_PM2_5_sensor_HM3301-master\examples\basic_demo** フォルダ内の **basic_demo.ino** をクリックします。**XXXX** はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/img/path2.jpg)

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp

#include "Seeed_HM330X.h"

#ifdef  ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif


HM330X sensor;
u8 buf[30];


const char *str[]={"センサー番号: ","PM1.0濃度(CF=1,標準粒子状物質,単位:ug/m3): ",
                    "PM2.5濃度(CF=1,標準粒子状物質,単位:ug/m3): ",
                    "PM10濃度(CF=1,標準粒子状物質,単位:ug/m3): ",
                    "PM1.0濃度(大気環境,単位:ug/m3): ",
                    "PM2.5濃度(大気環境,単位:ug/m3): ",
                    "PM10濃度(大気環境,単位:ug/m3): ",
                    };

err_t print_result(const char* str,u16 value)
{
    if(NULL==str)
        return ERROR_PARAM;
    SERIAL.print(str);
    SERIAL.println(value);
    return NO_ERROR;
}

/*29バイトのデータを解析*/
err_t parse_result(u8 *data)
{
    u16 value=0;
    err_t NO_ERROR;
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=1;i<8;i++)
    {
         value = (u16)data[i*2]<<8|data[i*2+1];
         print_result(str[i-1],value);

    }
}

err_t parse_result_value(u8 *data)
{
    if(NULL==data)
        return ERROR_PARAM;
    for(int i=0;i<28;i++)
    {
        SERIAL.print(data[i],HEX);
        SERIAL.print("  ");
        if((0==(i)%5)||(0==i))
        {
            SERIAL.println(" ");
        }
    }
    u8 sum=0;
    for(int i=0;i<28;i++)
    {
        sum+=data[i];
    }
    if(sum!=data[28])
    {
        SERIAL.println("チェックサムが間違っています!!!!");
    }
    SERIAL.println(" ");
    SERIAL.println(" ");
    return NO_ERROR;
}


/*30秒*/
void setup()
{
    SERIAL.begin(115200);
    delay(100);
    SERIAL.println("シリアル開始");
    if(sensor.init())
    {
        SERIAL.println("HM330Xの初期化に失敗しました!!!");
        while(1);
    }
    
}



void loop()
{
    if(sensor.read_sensor_value(buf,29))
    {
        SERIAL.println("HM330Xの結果読み取りに失敗しました!!!");
    }
    parse_result_value(buf);
    parse_result(buf);
    SERIAL.println(" ");
    SERIAL.println(" ");
    SERIAL.println(" ");
    delay(5000);
}

```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、`ctrl`+`shift`+`m` キーを同時に押します。ボーレートを **115200** に設定してください。

:::tip
        すべてが正常に動作している場合、シリアルモニタを開くと以下のように表示されるかもしれません：
:::

```c
Serial start
0   
FF  0  0  0  2D   
0  3F  0  45  0   
22  0  32  0  3B   
0  0  0  0  0   
0  0  0  0  0   
0  0   
 
sensor num: 0
PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): 45
PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): 63
PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): 69
PM1.0 concentration(Atmospheric environment,unit:ug/m3): 34
PM2.5 concentration(Atmospheric environment,unit:ug/m3): 50
PM10 concentration(Atmospheric environment,unit:ug/m3): 59
```

:::note
**標準粒子状物質質量濃度値** は、工業用金属粒子を等価粒子として密度変換によって得られる質量濃度値を指し、工業生産作業場などでの使用に適しています。一方、**大気環境中の粒子状物質濃度** は、空気中の主要な汚染物質の密度を等価粒子として変換したもので、通常の屋内および屋外の大気環境に適しています。そのため、上記には2つのデータセットが表示されています。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Laser PM2.5 Sensor (HM3301) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/Grove%20-%20Laser%20PM2.5%20Sensor%20(HM3301).zip)

- **[Zip]** [Seeed_PM2_5_sensor_HM3301 ソフトウェアライブラリ](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301/archive/master.zip)

- **[PDF]** [HM3301 データシート](https://files.seeedstudio.com/wiki/Grove-Laser_PM2.5_Sensor-HM3301/res/HM-3300%263600_V2.1.pdf)

## プロジェクト

**大気汚染の可視化**：大気汚染問題はますます注目を集めています。今回は Wio LTE と新しいレーザー PM2.5 センサーを使用して PM2.5 を監視してみました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の産業プロジェクトで最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>