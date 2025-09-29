---
description: Grove - 高精度気圧センサー DPS310
title: Grove - 高精度気圧センサー DPS310
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310
last_update:
  date: 05/15/2025
  author: shuxu hu
---


Grove - 高精度気圧センサー (DPS310)


<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg" alt="pir" width={600} height="auto" /></p>



気圧検知は環境センサーや高度測定に非常に役立ちます。Grove 気圧センサーは Infineon DPS310 を基にした高精度の小型デジタル気圧センサーです。このセンサーは 300 から 1200 hPa の範囲で測定可能で、精度は ±0.002hPa です。これにより、最大 ±2cm の高度変化を検知することができます。




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Y1.png"  height="48" width="300" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

## BMP280 vs. BME280 vs. DPS310

すでに [Grove - 気圧センサー (BMP280)](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP280/) と [Grove - 気圧センサー (BME280)](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BME280/) をリリースしていますが、以下の表を通じて Grove-DPS310 の強力さを比較してみましょう。


| 項目 | Grove-BMP280 | Grove-BME280 | Grove-DPS310 |
|------|--------------|--------------|--------------|
| 気圧範囲    | 300 ~ 1100 hPa |	300 ~ 1100 hPa | 300 ~ 1200 hPa	|	
| 温度範囲 |	-40 ~ 85 ℃  |	-40 ~ 85 ℃   |	-40 ~ 85 °C   |
| 気圧精度 |	 -	 |  -  | ± 0.002 hPa (または ±0.02 m) |
| 気圧精度 (絶対値) |	± 1 hPa (または ±8 m)	|± 1 hPa (または ±8 m)	|± 1 hPa (または ±8 m)|
| 気圧精度 (相対値)|	± 0.12 hPa|	± 0.12 hPa|	± 0.06 hPa (または ±0.5 m)|
| 気圧分解能|	0.18 Pa	| 0.18 Pa |	0.06 Pa |
| 湿度|	 -  |	0 ~ 100%	|  -  |
| 通信方式	| I<sup>2</sup>C/SPI |	I<sup>2</sup>C/SPI	| I<sup>2</sup>C/SPI |

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作気圧|300 から 1200hPa|
|精度|±0.002hPa|
|インターフェース|I<sup>2</sup>C,SPI|
|I<sup>2</sup>C アドレス|デフォルトアドレスは 0x77、ショート回路の場合はアドレスが 0x76|

:::note

    SPI モードで通信する場合、I<sup>2</sup>C アドレスを 0x76 に選択しないでください。そうしないと SPI が正常にデータを読み取ることができません (I<sup>2</sup>C と SPI はピンを共有しているため、I<sup>2</sup>C アドレスが 0x76 の場合、MOSI ピンが接地されるのと同じ意味になります)。
:::

## 特徴

- 高圧力精度: ± 0.002 hPa (または ±0.02 m)
- 高圧力精度: ± 0.06 hPa (または ±0.5 m)-相対値; ± 1 hPa (または ±8 m)-絶対値
- 広い測定範囲: 圧力: 300 –1200 hPa; 温度: -40 – 85 °C
- 簡単な使用: Grove IIC (割り込み付き) / SPI
- 低消費電力

## 主な用途

- 室内ナビゲーション（ショッピングモールや駐車場での階層検出など）
- 健康とスポーツ（正確な高度上昇と垂直速度）
- 屋外ナビゲーション（GPSの起動時間と精度の向上、トンネル内でのデッドレコニングなど）
- 気象ステーション（「マイクロ気象」およびローカル予報）
- ドローン（飛行の安定性と高度制御）

:::tip

Groveモジュールに関する詳細は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。

:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" alt="pir" width={600} height="auto" /></p>

## 対応プラットフォーム

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|

:::caution

上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。

:::

## はじめに

:::note

Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。

:::

### Arduinoでの使用方法

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | 高精度気圧センサー |
|----------------|-------------|---------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)|

:::note

**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。

:::

- **ステップ1.** Grove - 高精度気圧センサー (DPS310) をGrove-Base Shieldのポート **I<sup>2</sup>C** に接続します。
- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

#### ソフトウェア

:::note

Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。

:::

- **ステップ1.** [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) ライブラリをGithubからダウンロードします。
- **ステップ2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** 以下のコードをArduino IDEにコピーしてアップロードします。

```cpp
#include <Dps310.h>

Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  Serial.begin(9600);
  while (!Serial);
  Dps310PressureSensor.begin(Wire);
  Serial.println("初期化完了！");
}

void loop()
{
  float Detection_array[10];
  uint8_t oversampling = 7;
  int16_t ret;
  int i;
  int size = 10;
  int state1;
  int state2;
/* 以下の2つのループでは、それぞれ前後の時間での圧力状態を検出します。
   サンプリング数は10です。大きな偏差のある値を除外し、平均値を計算します。*/
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state1 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
     ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
       if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state1 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  } 
 state1 = state1 / size;
 delay(100);

      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state2 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
      if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state2 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  }
  state2 = state2 / size;
  
 if (ret != 0)
   {
    Serial.print("失敗！ ret = ");
    Serial.println(ret);
   }
/* 気圧の差を計算して、転倒したかどうかを判断します */
    else if (state2 - state1 > 4)
     {
      Serial.println("転倒しました。助けが必要ですか？");
      delay(5000);
     }
    else
      Serial.println("大丈夫です！");
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** シリアルモニターを開きます。すべてが正常に動作し、落下をシミュレーションするか地面に落とした場合、助けが必要かどうかを知らせてくれます。

## リソース

- **[ライブラリ]** [DPS310-Pressure-Sensor](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310.git)
- **[データシート]** [DPS310-Datasheet](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/DPS310-datasheet.pdf)
- **[Zipファイル]** [Grove-High-Precision-Barometer-Sensor-(DPS310)](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

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