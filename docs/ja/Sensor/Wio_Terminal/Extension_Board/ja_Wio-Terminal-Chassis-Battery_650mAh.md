---
description: Wio Terminal シャーシバッテリー(650mAh)
title: Wio Terminal シャーシバッテリー(650mAh)
keywords:
- Wio_terminal 拡張ボード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Chassis-Battery_650mAh
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

Wio Terminal バッテリーシャーシは、[Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 開発ボードにとって必須の拡張ボードです。これは、Wio Terminal に外部電源を提供し、その携帯性とコンパクトさを向上させます。**650mAhの充電式リチウムポリマー電池、バッテリー充電/放電状態LED、4つのGroveアナログ/デジタルポート、1つのGrove I2Cポート、1つのGrove UARTポート、そして美観と保護のためのABSエンクロージャを備えています。** また、Wio Terminal バッテリーシャーシの背面には、追加の拡張が可能なRaspberry Pi互換の40ピンGPIOも搭載されています。

新しいバージョンのWio Terminal バッテリーシャーシには、**Texas Instrumentの[BQ27441-G1A](http://www.ti.com/product/BQ27441-G1)** が追加されました。この自己校正型、I2Cベースの燃料ゲージはリチウムポリマー（LiPo）バッテリー用で、バッテリーの電圧を測定して充電率と残容量を推定することができます！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
    
</div>

## **特徴**

- 内蔵650mAh充電式リチウムポリマー電池
- バッテリー充電/放電状態LED
- バッテリーオン/オフボタン
- LiPoバッテリー用内蔵BQ27441-G1A燃料ゲージ
- USB Type-C充電
- 過電流保護
- ヒカップモード/ヒカップ保護
- 4 x Groveアナログ/デジタルポート
- 1 x Grove I2Cポート
- 1 x Grove UARTポート
- エンクロージャ内に隠された磁石により、ホワイトボードに貼り付け可能！

## **仕様**

<table className="tg">
  <thead>
    <tr><th className="tg-pu0z">項目</th><th className="tg-pu0z">詳細</th></tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-fymr">電源供給</td>
      <td className="tg-0pky">4.75V - 5.25V</td>
    </tr>
    <tr>
      <td className="tg-1wig">内蔵バッテリー</td>
      <td className="tg-0lax">650mAh</td>
    </tr>
    <tr>
      <td className="tg-1wig">充電電流</td>
      <td className="tg-0lax">最大: 660mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">バッテリーボードモード</td>
      <td className="tg-0lax">緑色LED: 点灯はボードが充電中を意味します。<br /><br />赤色LED: 点灯はOTG（バッテリー放電）が有効であることを意味します。<br /><br />黄色LED: 点灯はオスインターフェースが5Vの出力/入力を行っていることを意味します。</td>
    </tr>
    <tr>
      <td className="tg-1wig">GPIO出力</td>
      <td className="tg-0lax">最大電圧: 5.15V <br /><br />最大電流: 380mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">トリクル充電電流</td>
      <td className="tg-0lax">30mA</td>
    </tr>
    <tr>
      <td className="tg-1wig">Groveインターフェース</td>
      <td className="tg-0lax">Groveアナログ/デジタル *4, Grove I2C* 1, Grove UART * 1</td>
    </tr>
  </tbody>
</table>

## **ハードウェア概要**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **注意事項**

- ボードが充電モードの間にバッテリーが取り外されると、ボードは故障モードに切り替わり、緑色のライトが1Hzの頻度で点滅します。

- バッテリーボードを使用していない場合は、ボタンを押してスリープモードに入り、すべてのLEDが消灯します。

## **LiPoバッテリーの状態を検出する**

1. [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library)のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、ライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加`をクリックし、先ほどダウンロードした`SparkFun_BQ27441_Arduino_Library`ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **サンプルコード**

以下のコードを使用して、バッテリーチャーシスの状態を読み取ることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Wio Terminal バッテリーの容量を設定

void setupBQ27441(void)
{
  // lipo.begin()を使用してBQ27441-G1Aを初期化し、接続と通信を確認します。
  if (!lipo.begin()) // begin()は通信が成功した場合にtrueを返します
  {
    // 通信が失敗した場合、エラーメッセージを表示して無限ループに入ります。
    Serial.println("エラー: BQ27441との通信ができません。");
    Serial.println("配線を確認して再試行してください。");
    Serial.println("(バッテリーはBattery Babysitterに接続されている必要があります！)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("バッテリーが初期化されていません！"))/2, 120);
    tft.print("バッテリーが初期化されていません！");
    while (1) ;
  }
  Serial.println("BQ27441に接続されました！");
  
  // lipo.setCapacity(BATTERY_CAPACITY)を使用してバッテリーの設計容量を設定します。
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // BQ27441-G1Aからバッテリーの状態を読み取ります
  unsigned int soc = lipo.soc();  // 残量（%）を読み取る
  unsigned int volts = lipo.voltage(); // バッテリー電圧（mV）を読み取る
  int current = lipo.current(AVG); // 平均電流（mA）を読み取る
  unsigned int fullCapacity = lipo.capacity(FULL); // 最大容量（mAh）を読み取る
  unsigned int capacity = lipo.capacity(REMAIN); // 残容量（mAh）を読み取る
  int power = lipo.power(); // 平均消費電力（mW）を読み取る
  int health = lipo.soh(); // 健康状態（%）を読み取る

  // これらの値を出力します：
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";
  
  Serial.println(toPrint);

  // LCDグラフィックス
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("残量:", 20, 30);
  tft.drawString("バッテリー電圧:", 20, 55);
  tft.drawString("平均電流:", 20, 80);
  tft.drawString("残容量:", 20, 105);
  tft.drawString("最大容量:", 20, 130);
  tft.drawString("平均消費電力:", 20, 155);
  tft.drawString("健康状態:", 20, 180);
  
  // データ
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc)+" % ", 0, 0);
  spr.drawString(String(volts)+" mV ", 0, 25);
  spr.drawString(String(current)+" mA ", 0, 50);
  spr.drawString(String(capacity)+" mAh ", 0, 75);
  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);
  spr.drawString(String(power)+" mW ", 0, 125);
  spr.drawString(String(health)+" % ", 0, 150);
  spr.pushSprite(170, 30);
  spr.deleteSprite();
}

void setup()
{
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  tft.setFreeFont(FF17); 
  setupBQ27441();
  tft.setTextColor(TFT_GREEN);
  tft.setCursor((320 - tft.textWidth("バッテリーが初期化されました！"))/2, 120);
  tft.print("バッテリーが初期化されました！");
  delay(1000);
  tft.fillScreen(TFT_BLACK);
}

void loop() 
{
  printBatteryStats();
  delay(1000);
}
```

## **回路図オンラインビューア**

<div className="altium-ecad-viewer" data-project-src="https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## **リソース**

- **[ZIP]** [Wio Terminal バッテリーチャシス回路設計ファイル](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/WioTerminal_battry_650mAh.rar)

## **技術サポート**

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>