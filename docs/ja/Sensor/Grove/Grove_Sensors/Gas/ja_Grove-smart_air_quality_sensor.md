---
description: この記事は Grove SGP41 センサーの使用に焦点を当てています。
title: Grove - スマート空気質センサー (SGP41)
keywords:
- SGP41
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove-smart-air-quality-sensor-sgp41
last_update:
  date: 05/15/2025
  author: Stephen Lo
---


# Grove - スマート空気質センサー (SGP41)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - スマート空気質センサー (SGP41) は Grove シリーズのデジタルガスセンサーモジュールです。このモジュールは 4 ピンの Grove インターフェースを備えており、ユーザーがセンサーをマイクロコントローラーに簡単に接続できるようになっています。モジュールは 3.3V と 5V の両方の電源供給をサポートしており、柔軟性があります。

SGP41 デジタルガスセンサーは Sensirion の CMOSens® テクノロジーを使用しており、単一チップ上で完全で使いやすいセンサーシステムを提供します。このセンサーは室内空気中の揮発性有機化合物 (VOC) と窒素酸化物 (NOx) の濃度を測定し、デジタル出力信号を提供します。さらに、このセンサーは優れた長期安定性と寿命を持っています。

Grove - スマート空気質センサー (SGP41) モジュールはコンパクトで、スペースが限られたアプリケーションに適しています。また、高い信頼性と再現性を備えています。室内空気質を測定する必要がある場合は、Grove - 空気質センサー (SGP41) モジュールの使用を検討してください！



:::tip

[Seeed ガスセンサー選択ガイド](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/) を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。

:::



## 特徴

- デジタルガスセンサー: SGP41 はデジタルガスセンサーで、室内空気中の揮発性有機化合物 (VOC) と窒素酸化物 (NOx) の濃度を測定できます。
- CMOSens® テクノロジー: SGP41 は Sensirion の CMOSens® テクノロジーを使用しており、単一チップ上で完全で使いやすいセンサーシステムを提供します。
- 長期安定性: SGP41 は優れた長期安定性と寿命を持ち、室内空気質の継続的な監視を必要とするアプリケーションに最適です。
- デジタル出力信号: SGP41 はデジタル出力信号を提供し、マイクロコントローラーやその他のデジタルシステムとの統合が容易です。
- 小型フォームファクター: SGP41 は非常にコンパクトで、スペースが限られたアプリケーションに適しています。4 ピンの Grove インターフェースを備えており、ユーザーがセンサーをマイクロコントローラーに簡単に接続できます。
- 柔軟な電源供給: モジュールは 3.3V と 5V の両方の電源供給をサポートしており、さまざまなアプリケーションで非常に柔軟で使いやすいです。
- 高い信頼性と再現性: Sensirion の最先端の生産プロセスにより、SGP41 モジュールの高い再現性と信頼性が保証されています。

## 仕様

- センシング技術: 空気質アプリケーション向けのMOxベースのガスセンサー
- ガス検出: VOCおよびNOxの測定
- インターフェース: デジタル出力信号を備えたI2Cインターフェース
- 消費電力: 3.3 Vで3.0 mAの低消費電力
- 動作温度範囲: -40°Cから+85°C
- 湿度範囲: 0%から100% RH（結露しないこと）
- 応答時間: VOCの場合&lt;10秒、NOxの場合&lt;60秒
- 精度: VOCの場合±15%、NOxの場合±50 ppb（標準条件下）

## アプリケーション

- 室内空気質モニタリング: SGP41は、家庭、オフィス、学校、その他の室内環境での空気質モニタリングに最適です。
- 空気清浄機: SGP41は空気清浄機に統合され、有害なガスを検出して除去することができます。
- 需要制御型換気システム: SGP41は、空気中の汚染物質のレベルに基づいて換気率を調整する需要制御型換気システムに使用できます。
- スマートホーム: SGP41はスマートホームシステムに統合され、室内空気質に関するリアルタイム情報を提供し、この情報に基づいてアクションをトリガーします。
- 産業用途: SGP41は、化学工場、製油所、製造施設などの産業用途で室内空気質をモニタリングし、作業者の安全を確保するために使用できます。
- 環境モニタリング: SGP41は、工場、車両、その他の発生源からのVOCおよびNOx排出量の環境モニタリングに使用できます。

## ハードウェア概要

### ピンマップ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png" alt="pir" width={600} height="auto" /></p>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>Grove Base Shield V2.0</th>
            <th>Grove - スマート空気質センサー (SGP41)</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::note
**1**. USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2**. Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - スマート空気質センサー (SGP41) をGrove Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Grove Base Shieldがない場合は、以下のようにGrove - スマート空気質センサー (SGP41) をSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-VOCおよびeCO2ガスセンサー(SGP30) |
|---------------|-------------------------|
| 5V            | 赤                      |
| GND           | 黒                      |
| SDA           | 白                      |
| SCL           | 黄                      |

#### ソフトウェア

- **ステップ1.** 依存ライブラリをGithubからダウンロードします。

    - **arduino-coreライブラリ**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **arduino-i2c-sgp41 ライブラリ**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **ステップ 2.** Arduino 用ライブラリをインストールする方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してください。

- **ステップ 3.** ライブラリを正しくダウンロードしてインストールした後、`exampleUsage.ino` という名前のサンプルプログラムを examples フォルダ内で見つけることができます。このプログラムは SGP41 センサー用に設計されています。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp41.h>
#include <Wire.h>

SensirionI2CSgp41 sgp41;

// NOx コンディショニングに必要な時間（秒単位）
uint16_t conditioning_s = 10;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("getSerialNumber() の実行中にエラーが発生しました: ");
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
    error = sgp41.executeSelfTest(testResult);
    if (error) {
        Serial.print("executeSelfTest() の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest がエラーで失敗しました: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // NOx コンディショニング中（10秒間）、SRAW NOx は 0 のままです
        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);
        conditioning_s--;
    } else {
        // 測定値を読み取る
        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("measureRawSignals() の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx:");
        Serial.println(srawNox);
    }
}
```

- **ステップ 4.** デモコードをアップロードします。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開くには、**ツール -> シリアルモニタ** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/2.png" style={{width:700, height:'auto'}}/></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - スマート空気質センサー (SGP41) SCH&PCB](https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip)
- **[PDF]** [SGP41 データシート](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)

## 技術サポートと製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>