---
title: Wio Extension RTC (リアルタイムクロック)
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Extension-RTC/
slug: /ja/Wio-Extension-RTC
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)

Wio Extension - RTC は Wio LTE 用の拡張ボードであり、I2C ポートを介してリアルタイムクロック機能を提供します。このボードは NXP PCF8523 チップをベースにしており、年、月、日、曜日、時、分、秒の情報を提供できます。

このボードは Micro-USB ポートで電力供給され、I2C ポートを介して Wio LTE と通信します。また、オンボードスイッチでオン/オフ可能な USB 電源出力も提供しているため、Wio Extension - RTC ボードを使用して Wio LTE に電力を供給することができます。以下の画像のように Wio ボードに電力を供給する場合、システム全体の待機電流は 1 µA 未満です。

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 拡張性
- Wio ボードに 3.3V の電圧を供給可能

## ハードウェア概要

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p> 
  </figure>
</div>

![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Wio LTE ボード | Wio-Extension-RTC | Grove - ブザー | Grove - 赤色LED |
|----------------|-------------------|----------------|-----------------|
|![画像説明を入力してください](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![画像説明を入力してください](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![画像説明を入力してください](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

> Wio Extension - RTCはUSB電源供給をI2Cで制御するだけなので、USBから電源供給されるほぼすべてのMCUボードの電源管理にこのボードを使用できます。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア

- **ステップ1.** Wio LTE ボードの **I2C** ポートに Wio-Extension-RTC を接続します。

- **ステップ2.** Wio LTE ボードをUSBケーブルでPCに接続します。

- **ステップ3.** [Grove - ブザー](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) または [Grove - 赤色LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) を Wio LTE の D38 に接続します。

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p></figure></div>

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。このボードのドライバーは `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` のヘッダーファイルに依存しているため、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)のチュートリアルに従ってWioボードをインストールしているかどうかに関係なく、以下の手順を実行する必要があります。
:::

**ステップ1** ライブラリをインストールする  
Arduino IDEを開き、File > Preferences をクリックし、以下のURLを追加のボードマネージャーURLにコピーします。  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

Tools > Board > Board Manager をクリックし、テキストボックスに `Wio` を入力します。

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

`Seeed STM32F4 Board(JP mirror) by Seeed K.K.` をクリックするとインストールボタンが表示されます。それをクリックして手順を完了します。このプロセスはネットワーク速度によって約5分から30分かかります。  
Tools > Manage Libraries をクリックし、テキストボックスに `Wio` を入力します。

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)  
`Wio LTE for Arduino by Seeed K.K.` をクリックするとインストールボタンが表示されます。それをクリックして手順を完了します。

[サンプルスケッチ](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip) を解凍し、Arduino IDEで `wiortc-sample.ino` を開きます。

**ステップ2** コードをダウンロードする

1. Wio LTEの裏側にあるBOOTボタンを押しながらUSBをPCに接続します。
2. デバイスマネージャーでSTM BOOTLARDERが表示されます。
3. Tools→Boards→Wio_Tracker_LTE を選択します。
![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)

4. Sketch→Upload を選択してコードをWio_LTEにアップロードします。
5. RSTボタンを押してCOMポートを有効にします。

**ヒント**  
> ほとんどのArduinoボードをダウンロードする際には正しいCOMポートを選択する必要がありますが、このボードの場合はCOM設定を空白のままにしておく必要があります。

> ![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. シリアルモニターを使用してシリアルメッセージを表示します。

```cpp
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// 定義

#define BOOT_INTERVAL   (30)  // [秒]

////////////////////////////////////////////////////////////////////////////////
// グローバル変数

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setupとloop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // 低レベル初期化

  SerialUSB.println("### I/O 初期化.");
  Wio.Init();

  SerialUSB.println("### 電源供給 ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // デバイス初期化
  
  SerialUSB.println("### デバイス初期化.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // 完了

  SerialUSB.println("### 完了.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROMの値は ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("ビープ音.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("シャットダウン.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[サンプル]** [Wio-Extension-RTC サンプルコード](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>