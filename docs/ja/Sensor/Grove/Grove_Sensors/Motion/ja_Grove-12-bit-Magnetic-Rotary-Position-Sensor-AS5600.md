---
description: Grove - 12ビット磁気回転位置センサー / エンコーダ (AS5600)
title: Grove - 12ビット磁気回転位置センサー / エンコーダ (AS5600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg)

Grove - AS5600は、プログラム可能な12ビット高解像度非接触型磁気回転位置センサーです。Grove - AS5600は、磁気ポテンショメータまたは磁気エンコーダとして動作し、優れた信頼性と耐久性を備えています。

従来のポテンショメータやエンコーダと比較して、Grove - AS5600は以下のような大きな利点があります：高精度、非接触、回転角度の制限なし。これらの利点により、ロボットアーム、三脚ヘッド、モーターの閉ループ制御、工作機械の軸位置決めなどの非接触角度測定アプリケーションに適しています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 非接触、回転角度の制限なし
- 12ビット高解像度、1回転あたり4096ポジション
- Grove I2C、PWM/アナログ出力
- 角度範囲の柔軟性：最大角度は18°から360°までプログラム可能

## 仕様

|パラメータ|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作環境温度| -40 – 125℃|
|入力電流|-100-100mA|
|柔軟性|最大角度は18°-360°までプログラム可能|
|インターフェース|I2C（デフォルトI2Cアドレス：0x36）& 変更不可|
|出力|アナログ/PWM出力|
|出力解像度|12ビットDAC|

## 動作原理

Grove - AS5600はホール効果に基づいており、内蔵のホールセンサーが磁場の方向の変化を検出することができます。そのため、回転角度の制限がありません。磁場方向の情報はアンプによって増幅され、内蔵の12ビットA/Dの助けを借りて、AS5600モジュールは1回転あたり4096ポジションを出力できます。出力は選択可能で、I2Cインターフェースを使用してRAWデータを出力するか、OUTピンを介してPWM波またはアナログ波を出力することができます。また、最大角度もプログラム可能で、18°から360°まで設定可能です。これにより、測定された角度の精度は最大で18/4096に達します。

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg)

:::note
AS5600は測定される磁場に対して一定の要件があります。チップと同じサイズの磁石を使用してください。モジュールは磁場にできるだけ近づけて測定する必要があり、AS5600センサーの中心を磁場の中心に合わせる必要があります。垂直距離は0.5mmから3mmが望ましいです。
:::

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg)

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" /></a></p>
</figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

#### ハードウェア接続

- **ステップ 1.** Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)をBase Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg)

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600)ライブラリをダウンロードします。

:::note
Arduino用ライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。
:::

- **ステップ 2.** Arduino IDEを再起動します。**File** → **Examples** → **Seeed_AS5600-master** → **readAngle**のパスを通じて**readAngle**の例を開きます。このデモを通じて、センサーの下にある磁石から角度を読み取ることができます。

readAngleの例コードは以下の通りです：

```cpp
#include <Wire.h>
#include <AS5600.h>
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

AMS_5600 ams5600;

int ang, lang = 0;

void setup()
{
  SERIAL.begin(115200);
  Wire.begin();
  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");
  if(ams5600.detectMagnet() == 0 ){
    while(1){
        if(ams5600.detectMagnet() == 1 ){
            SERIAL.print("現在の磁力: ");
            SERIAL.println(ams5600.getMagnitude());
            break;
        }
        else{
            SERIAL.println("磁石を検出できません");
        }
        delay(1000);
    }
  }
}
/*******************************************************
/* 関数: convertRawAngleToDegrees
/* 入力: AMS_5600::getRawAngleからの角度データ
/* 出力: 人間が読み取れる度数（float型）
/* 説明: 生の角度データを度数に変換します。
/*******************************************************/
float convertRawAngleToDegrees(word newAngle)
{
  /* 生データは0 - 4095セグメントを報告し、これは0.087度に相当します */
  float retVal = newAngle * 0.087;
  ang = retVal;
  return ang;
}
void loop()
{
    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** Arduino IDEの**シリアルモニター**を開くには、**Tool-> Serial Monitor**をクリックします。または、`ctrl`+`shift`+`m`キーを同時に押します。ボーレートを**115200**に設定します。

- **ステップ 5.** センサーの下に磁石が検出された場合、結果は以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"/></div>

:::note
ここではキャリブレーターが使用されています。キャリブレーターの2Dファイルはリソースに記載されているので、自由にダウンロードしてレーザーカットしてください！
:::

## FAQ

**Q1#** 最大精度を達成するにはどうすればよいですか？

**A1:** Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) センサーが磁石に対して固定された距離/位置にあることを確認してください。初回使用時には、磁石を回転させて角度 0 から 360 までを取得し、位置が正しいことを確認してください。

[AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) ライブラリには、センサーを操作するための完全なテスト機能も提供されています。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip)
- **[PDF]** [AS5600 データシート](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf)
- **[DWG]** [Grove - 12-bit Magnetic Rotary Position Sensor(AS5600) キャリブレーター](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>