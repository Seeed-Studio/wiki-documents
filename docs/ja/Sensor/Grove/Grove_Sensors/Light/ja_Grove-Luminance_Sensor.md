---
description: Grove - 照度センサー
title: Grove - 照度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Luminance_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Luminance.jpg" /></div>

Grove - 照度センサーは、特定の表面エリアにおける周囲光の強度を検出します。このセンサーは、**APDS-9002** アナログ出力の周囲光フォトセンサーを使用しており、人間の目に近い感度を持っています。

この照度センサーは、住宅や商業施設の照明における自動光調整が必要なアプリケーションで使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

仕様
-------------

| パラメータ                 | 値           |
|-----------------------------|--------------|
| Vcc                         | 2.4V ~ 5.5V  |
| 線形出力範囲               | 0.0 ~ 2.3V   |
| 照度測定範囲               | 0 ~ 1000 Lux |

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

デモンストレーション
-------------

**Seeduino Lotus に Grove 照度センサーを接続する**

1. Grove コネクタを使用して、Grove 照度センサーを Seeeduino Lotus の A0 ポートに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Interface_Grove-Luminance.jpg" /></div>

2. 以下のコードを Arduino スケッチにコピーします。

```
float VoutArray[] =  { 0.0011498,  0.0033908,   0.011498, 0.041803,0.15199,     0.53367, 1.3689,   1.9068,  2.3};
float  LuxArray[] =  { 1.0108,     3.1201,  9.8051,   27.43,   69.545,   232.67,  645.11,   730.52,  1000};

void setup() {
    // 初期設定コードをここに記述します（1回だけ実行されます）
    Serial.begin(9600);

}

void loop() {
    // メインコードをここに記述します（繰り返し実行されます）

    Serial.print("Vout =");
    Serial.print(readAPDS9002Vout(A0));
    Serial.print(" V,Luminance =");
    Serial.print(readLuminance(A0));
    Serial.println("Lux");
    delay(500);
}

float readAPDS9002Vout(uint8_t analogpin)
{
    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout サンプルは 3V Vcc を基準としています
    // 上記の式は Vcc をキャンセルすることで簡略化されています
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    // 2.3V を超えると、センサー値は飽和します

    return MeasuredVout;

}

float readLuminance(uint8_t analogpin)
{

    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)
    // Vout サンプルは 3V Vcc を基準としています
    // 上記の式は Vcc をキャンセルすることで簡略化されています
    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);
    float Luminance = FmultiMap(MeasuredVout, VoutArray, LuxArray, 9);

    /**************************************************************************

    Lux 単位の照度は APDS9002 データシートに基づいて計算されます -- > グラフ 1
    （異なる負荷抵抗での出力電圧と照度の関係）
    このボードの負荷抵抗は 1k です。Vout は 3V Vcc を基準としています。

    グラフからのデータは WebPlotDigitizer を使用して抽出されました。
    http://arohatgi.info/WebPlotDigitizer/app/

    VoutArray[] と LuxArray[] はこれらの抽出データです。MultiMap を使用して、
    データを補間し、Lux 単位での照度を取得します。

    この実装は浮動小数点演算を使用しているため、フラッシュ、RAM、および時間を
    多く消費します。

    Lux 単位での照度は近似値であり、使用したグラフ 1 の精度に依存します。

    ***************************************************************************/

    return Luminance;
}


// このコードは http://playground.arduino.cc/Main/MultiMap の MultiMap 実装を使用しています

float FmultiMap(float val, float * _in, float * _out, uint8_t size)
{
    // 値が範囲内であることを確認します
    // val = constrain(val, _in[0], _in[size-1]);
    if (val <= _in[0]) return _out[0];
    if (val >= _in[size-1]) return _out[size-1];

    // 正しい区間を検索します
    uint8_t pos = 1;  // _in[0] はすでにテスト済み
    while(val > _in[pos]) pos++;

    // _in 配列内のすべての正確な "ポイント" を処理します
    if (val == _in[pos]) return _out[pos];

    // 残りの部分については正しいセグメントで補間します
    return (val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1];
}
```

3. コードを Seeeduino Lotus にアップロードします。

4. Grove Luminance センサーを光源の下、または照度を検出する必要がある場所に置きます。

5. シリアルモニターを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/LuminanceOutput.png" /></div>

6. シリアルモニターに Vout と Lux が表示されます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove-Luminance Sensor デモコード](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance.zip)
- [Grove-Luminance Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip)
- [Grove-Luminance Sensor 回路図 (PDF)](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor_v1.0.pdf)
- [APDS-900 データシート](https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/APDS-9002-.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Luminance_Sensor から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>