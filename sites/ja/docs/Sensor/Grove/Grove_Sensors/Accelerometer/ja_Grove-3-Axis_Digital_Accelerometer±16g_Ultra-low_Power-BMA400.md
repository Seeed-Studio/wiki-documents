---
description: Grove - 3軸デジタル加速度計±16g 超低消費電力 (BMA400)
title: Grove - 3軸デジタル加速度計±16g 超低消費電力 (BMA400)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 3軸デジタル加速度計 ±16g 超低消費電力 (BMA400) センサーは、12ビットのデジタル3軸加速度センサーで、スマートなオンチップモーションおよび位置トリガー割り込み機能を備えています。歩行、走行、静止などの動作姿勢を検出することができます。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html)


## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 3軸デジタル加速度計 ±16g 超低消費電力 (BMA400)  | 初版                                                                                               | 2018年11月      |



## 特徴

- 超低消費電力
- プログラム可能な機能
- オンチップFIFO
- オンチップ割り込み機能
> 自動低消費電力/自動ウェイクアップ  
> 活動/非活動  
> 歩数計  
> 活動認識（歩行、走行、静止）  
> 方向検出  
> タップ/ダブルタップ



## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|消費電力|18uA @5V / 14uA @3.3V|
|動作温度|-40℃ ~ +85℃|
|加速度範囲|±2g, ±4g, ±8g, ±16g|
|感度|1024LSB/g / @±2g 512LSB/g /  @±4g256LSB/g / @±8g128LSB/g / @±16g|
|インターフェース|I^2^C|
|I^2^Cアドレス|0x15(デフォルト) / 0x14(オプション)|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 10mm| 
|重量|3.2g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|10g|




## 主な用途

- 超低消費電力での歩数計測による長時間バッテリー寿命
- フィットネスアプリケーション / 活動追跡
- タップ / ダブルタップ検知
- 保証記録用の落下検知
- 気候制御および警報システム用の窓/ドア測定



## ハードウェア概要

### ピン配置

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>




### 回路図

**電源**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg" alt="pir" width={600} height="auto" /></p>

BMA400の標準電圧は1.8Vです。そのため、[XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)チップを使用して安定した1.8Vを供給します。XC6206P33の入力範囲は1.8Vから6.0Vまでなので、3.3Vおよび5VのArduinoでこのモジュールを使用できます。

**双方向レベルシフター回路**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg" alt="pir" width={600} height="auto" /></p>

これは、I^2^Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは1.8Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vまたは3.3Vを使用する場合、この回路が必要です。上記の回路図では、**Q1**および**Q2**はNチャネルMOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/CJ2102.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。





## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove BMA400 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) を Grove-Base Shield の **I^2^C** ポートに接続します。

- **ステップ2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ3.** USBケーブルを使用して Seeeduino をPCに接続します。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shield がない場合は、以下のようにこのモジュールを直接 Seeeduino に接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove BMA400 |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5V または 3.3V | 赤                 | VCC |
| SDA            | 白                 | SDA |
| SCL            | 黄                 | SCL |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Seeed_BMA400](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400) ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove 3-Axis Digital Accelerometer ±16g Ultra-low Power(BMA400) --> BMA400_Example** のパスをたどります。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg" alt="pir" width={600} height="auto" /></p>

    2. コンピュータ上で直接開く：**XXXX\Arduino\libraries\Grove_3Axis_Digital_Accelerometer_BMA400-master\examples\BMA400_Example** フォルダ内の **BMA400_Example.ino** をクリックします（**XXXX** はArduino IDEをインストールした場所です）。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上にあるアイコン  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>  
をクリックして、以下のコードを Arduino IDE の新しいスケッチにコピーすることもできます。

```cpp
#include "BMA400.h"

float x = 0, y = 0, z = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    
    Serial.begin(115200);
    while(!Serial);
    Serial.println("BMA400 Raw Data");

    while(1)
    {
        if(bma400.isConnection())
        {
            bma400.initialize();
            Serial.println("BMA400 is connected");
            break;
        }
        else Serial.println("BMA400 is not connected");
        
        delay(2000);
    }
}

void loop(void)
{
    bma400.getAcceleration(&x, &y, &z);
    temp = bma400.getTemperature();
    
    Serial.print(x);
    Serial.print(",");
    Serial.print(y);
    Serial.print(",");
    Serial.print(z);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::warning
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定してください。

:::success
すべてが正常に動作すれば、以下のように表示されるはずです：
:::

```cpp
BMA400 Raw Data
BMA400 is connected
85.94,357.42,916.02,23
-148.44,222.66,464.84,23
-626.95,320.31,1109.38,23
-500.00,-111.33,144.53,23
-398.44,-232.42,433.59,23
-783.20,-255.86,638.67,23
-1453.13,-552.73,822.27,23
```

生データのフォーマット：

X軸/単位 mg; Y軸/単位 mg; Z軸/単位 mg; 温度/単位 ℃

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip)

- **[Zip]** [Seeed BMA400 ライブラリ](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400/archive/master.zip)

- **[PDF]** [BMA400 データシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/BMA400_datasheet.pdf)

- **[PDF]** [XC6206 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>