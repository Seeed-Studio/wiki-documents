---
title: 超音波距離測定モジュール
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Ultra_Sonic_range_measurement_module/
slug: /ja/Ultra_Sonic_range_measurement_module
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/front.jpg)

Seeedの超音波センサーは非接触型の距離測定モジュールで、電子ブリックにも対応しています。  
これは、産業性能を備えた簡単なモジュールプロジェクトの使用を目的として設計されています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

## 特徴

*   検出範囲: 3cm-4m
*   最適な検出角度: 30度
*   電子ブリック互換インターフェース
*   5VDC電源供給
*   ブレッドボード対応
*   デュアルトランスデューサ
*   Arduinoライブラリ対応

## 仕様

| 項目 | 値 |
|------|-----|
| 電源電圧 | 5V |
| 消費電流 | 15 mA |
| 超音波周波数 | 40k Hz |
| 最大測定範囲 | 400 cm |
| 最小測定範囲 | 3 cm |
| 分解能 | 1 cm |
| トリガーパルス幅 | 10 μs |
| 外形寸法 | 43x20x15 mm |

## はじめに

短い超音波パルスが時間0で送信され、物体に反射されます。センサーはこの信号を受信し、電気信号に変換します。次のパルスはエコーが消えるまで送信できません。この時間間隔をサイクル期間と呼びます。推奨されるサイクル期間は50ms以上であるべきです。信号ピンに10μs幅のトリガーパルスを送信すると、超音波モジュールは40kHzの超音波信号を8回出力し、戻ってきたエコーを検出します。測定された距離はエコーパルス幅に比例し、上記の式で計算できます。障害物が検出されない場合、出力ピンは38msの高レベル信号を出力します。

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のアイテムを準備します:

| Seeeduino V4.2 | ベースシールド | 超音波距離測定モジュール |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)|

- **ステップ2.** 超音波距離測定モジュールをGrove-Base Shieldのポート**D2**に接続します。
- **ステップ3.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
	Grove Base Shieldがない場合でも、以下のように直接このモジュールをSeeeduinoに接続することができます。
:::
| Seeeduino       |  ??? |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 未接続 | 白                   |
| D2            | 黄                  |

#### ソフトウェア

**ステップ1.** 以下のコードをコピーしてコントローラーボードに書き込みます。  
**ステップ2.** コードをアップロードし、モニタウィンドウを開きます。

```cpp
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;// Arduinoのピン番号（超音波レンジャーのSIGピンに接続）。
    long duration;// 受信したパルス時間。
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*検出を開始し、パルスバック信号を取得*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*測定距離（範囲0〜400センチメートル）*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*測定距離（範囲0〜157インチ）*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();// 現在の信号時間を取得
    RangeInInches = ultrasonic.microsecondsToInches();// 時間をインチに変換
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();// 時間をセンチメートルに変換
    Serial.println("前方の障害物までの距離は: ");
    Serial.print(RangeInInches);//0〜157インチ
    Serial.println(" インチ");
    Serial.print(RangeInCentimeters);//0〜400cm
    Serial.println(" cm");
    delay(1000);
}
```

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>