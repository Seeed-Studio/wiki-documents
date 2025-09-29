---
description: Grove - 水位センサー
title: Grove - 水位センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Water-Level-Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove 水位センサーは非常に高精度なセンサーで、水位検知アプリケーションに役立ちます。このセンサーは完全に防水で、容量性パッドを使用して最大10cmまでの水位を検知します。

モジュールのPCB上に容量性パッドを使用し、PCBにコンフォーマルコーティングを施すことで、湿気、ほこり、化学物質、高温からセンサーを保護しています。この技術により、簡単に高精度（±5mmの精度）の水位測定が可能になると考えています。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html)

## 特徴

- 簡単に使用可能（Groveコネクタを使用し、はんだ付け不要）
- 容量性検知に基づく
- 防水
- コンフォーマルコーティング
- 耐腐食性
- 最大10cmの水位を検知
- I2Cインターフェース

## 仕様

|パラメータ|値|
|---|---|
|入力電圧|3.3V / 5V|
|測定精度|±5mm|
|動作温度範囲|-40°C ～ 105°C|
|I2Cアドレス|0x78 および 0x77|
|インターフェース|I2C|
|寸法|20mm x 133mm|

## ハードウェア概要

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" /></a></p>
  </figure>
</div>

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" /></a></p>
  </figure>
</div>

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 水位センサー |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

#### ハードウェア接続

- **ステップ 1.** Grove - 水位センサーをGrove - Base Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
#include <Wire.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

unsigned char low_data[8] = {0};
unsigned char high_data[12] = {0};


#define NO_TOUCH       0xFE
#define THRESHOLD      100
#define ATTINY1_HIGH_ADDR   0x78
#define ATTINY2_LOW_ADDR   0x77

void getHigh12SectionValue(void)
{
  memset(high_data, 0, sizeof(high_data));
  Wire.requestFrom(ATTINY1_HIGH_ADDR, 12);
  while (12 != Wire.available());

  for (int i = 0; i < 12; i++) {
    high_data[i] = Wire.read();
  }
  delay(10);
}

void getLow8SectionValue(void)
{
  memset(low_data, 0, sizeof(low_data));
  Wire.requestFrom(ATTINY2_LOW_ADDR, 8);
  while (8 != Wire.available());

  for (int i = 0; i < 8 ; i++) {
    low_data[i] = Wire.read(); // 1バイトを文字として受信
  }
  delay(10);
}

void check()
{
  int sensorvalue_min = 250;
  int sensorvalue_max = 255;
  int low_count = 0;
  int high_count = 0;
  while (1)
  {
    uint32_t touch_val = 0;
    uint8_t trig_section = 0;
    low_count = 0;
    high_count = 0;
    getLow8SectionValue();
    getHigh12SectionValue();

    Serial.println("低い8セクションの値 = ");
    for (int i = 0; i < 8; i++)
    {
      Serial.print(low_data[i]);
      Serial.print(".");
      if (low_data[i] >= sensorvalue_min && low_data[i] <= sensorvalue_max)
      {
        low_count++;
      }
      if (low_count == 8)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }
    Serial.println("  ");
    Serial.println("  ");
    Serial.println("高い12セクションの値 = ");
    for (int i = 0; i < 12; i++)
    {
      Serial.print(high_data[i]);
      Serial.print(".");

      if (high_data[i] >= sensorvalue_min && high_data[i] <= sensorvalue_max)
      {
        high_count++;
      }
      if (high_count == 12)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }

    Serial.println("  ");
    Serial.println("  ");

    for (int i = 0 ; i < 8; i++) {
      if (low_data[i] > THRESHOLD) {
        touch_val |= 1 << i;

      }
    }
    for (int i = 0 ; i < 12; i++) {
      if (high_data[i] > THRESHOLD) {
        touch_val |= (uint32_t)1 << (8 + i);
      }
    }

    while (touch_val & 0x01)
    {
      trig_section++;
      touch_val >>= 1;
    }
    SERIAL.print("水位 = ");
    SERIAL.print(trig_section * 5);
    SERIAL.println("% ");
    SERIAL.println(" ");
    SERIAL.println("*********************************************************");
    delay(1000);
  }
}

void setup() {
  SERIAL.begin(115200);
  Wire.begin();
}

void loop()
{
  check();
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** Arduino IDEの**シリアルモニター**を開くには、**ツール->シリアルモニター**をクリックします。または、`ctrl`+`shift`+`m`キーを同時に押します。ボーレートを**115200**に設定します。

- **ステップ 5.** センサーが水中にある場合、結果は以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Result.gif" /></div>

### FAQ

**Q1#** 有用なアプリケーションは？

**A1:** **Grove - 水位センサー**を使用して**ブザー**と**LEDモジュール**を組み合わせた簡単な水位検出アプリケーションを提供します。[完全なコード](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/water-level-sensor-demo.ino)はこちらをご覧ください。

<!-- ![](https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - Water Level Sensor (10CM) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip)
- **[PDF]** [ATtiny1616-1617-Automotive-データシート](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/ATtiny1616-1617-Automotive-Data-Sheet.pdf)

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

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>