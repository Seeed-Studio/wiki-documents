---
description: TBD
title: Grove - VOC ガスセンサー (SGP40)
keywords:
- Grove
- SGP40
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_voc_gas_sensor_sgp40
last_update:
  date: 05/15/2025
  author: Stephen Lo
---


# Grove - VOC ガスセンサー (SGP40)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - VOC ガスセンサー (SGP40) は、揮発性有機化合物 (VOC) 検出アプリケーションの幅広い用途向けに開発された革新的な環境センサーモジュールです。先進的な Sensirion SGP40 センサーをベースにしており、生のセンサー信号を標準化されたデジタル信号に変換し、既存のシステムにシームレスに統合することができます。

このセンサーモジュールは、リアルタイムで高品質な VOC 測定を行う能力を備えており、室内空気質の追跡と監視において多用途なソリューションを提供します。空気質が健康に直接関係することへの認識が高まる中、Grove - VOC ガスセンサー (SGP40) は、室内空気質の改善、個人環境の監視、HVAC システム、産業安全、そして空気質評価が重要なアプリケーションに向けたシステムの重要なコンポーネントとなる可能性があります。

Grove エコシステムとの互換性により、簡単で直感的なセットアッププロセスが可能です。Grove システムのプラグアンドプレイの特性により、複雑な配線や高度なコーディングを扱う必要がなく、このモジュールを簡単に組み込むことができます。この機能により、開発時間を大幅に短縮し、VOC 測定に基づくデータ解釈やアクションステップに集中することができます。

Grove - VOC ガスセンサー (SGP40) の主な利点の一つは、その通信プロトコルです。このセンサーモジュールは、シンプルで効率的なことで知られる広く採用されている I2C インターフェースを使用しています。これにより、センサーとメインコントローラー間のデータ転送プロセスが非常にスムーズになり、VOC レベルに基づいて即時のアクションが必要なアプリケーションで迅速な反応時間を可能にします。

要するに、Grove - VOC ガスセンサー (SGP40) は、コンパクトで強力、かつ統合が容易なモジュールであり、VOC 検出という困難なタスクをより簡単でアクセスしやすいものにします。これにより、環境アプリケーションにおける革新と開発の扉が開かれます。


## 特徴

- 信頼性の高い VOC 検出のための Sensirion SGP40 センサーを採用。
- Grove エコシステムへの簡単な統合により、配線とコーディングプロセスを簡素化。
- 正確な空気質評価のためのリアルタイム VOC 測定を提供。
- 効率的なデータ転送を可能にする I2C インターフェースを介して通信。
- コンパクトでモジュール式のデザインにより、さまざまなアプリケーションへの組み込みに最適。

## 仕様

- 動作電圧: 3.3/5V
- インターフェース: I2C
- 寸法: 20x40mm

## 応用例

- 室内空気質モニタリングシステム: Grove - VOC ガスセンサーは、建物内の空気質を監視し、健康的な生活環境や作業環境を確保するために使用できます。
- 個人用環境モニタリングデバイス: このセンサーを使用して、個人が自分の周囲の空気質を監視できるポータブルデバイスを作成できます。
- HVACシステム: 暖房、換気、空調システム内の空気質を調整するのに役立ちます。
- 産業安全: 工場や産業現場で有害なVOCレベルを検出し、労働者の安全を確保するために使用できます。

## ハードウェア概要

### ピンマップ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png" alt="pir" width={500} height="auto" /></p>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove - VOC ガスセンサー (SGP40) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">今すぐ購入</a>|

:::note
**1.** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2.** Groveモジュールを購入すると、Groveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - VOC ガスセンサー (SGP40) をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Grove Base Shieldがない場合は、以下のようにGrove - スマート空気質センサー (SGP41) をSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove - VOC ガスセンサー (SGP40) |
|---------------|-------------------------|
| 5V            | 赤                      |
| GND           | 黒                      |
| SDA           | 白                      |
| SCL           | 黄                      |

#### ソフトウェア

- **ステップ1.** [SGP40 Arduinoライブラリ](https://github.com/Sensirion/arduino-i2c-sgp40)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** ライブラリを正しくダウンロードしてインストールした後、`exampleUsage.ino`という名前のサンプルプログラムがexamplesフォルダに見つかります。このプログラムはSGP40センサー用に設計されています。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp40.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("getSerialNumber()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("シリアル番号:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp40.executeSelfTest(testResult);
    if (error) {
        Serial.print("executeSelfTest()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTestがエラーで失敗しました: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;

    delay(1000);

    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
    if (error) {
        Serial.print("measureRawSignal()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.println(srawVoc);
    }
}
```

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/result.png" alt="pir" width={800} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - VOC ガスセンサー (SGP40) SCH&PCB](https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip)
- **[PDF]** [SGP40 データシート](https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>