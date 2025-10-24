---
description: Grove - ガスセンサー(O₂)
title: Grove - ガスセンサー(O₂)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor-O2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 酸素センサー(ME2-O2-Ф20)は、空気中の酸素濃度を測定するセンサーであり、電気化学セルの原理に基づいて動作します。酸素濃度に比例した電圧値を出力し、酸素濃度の線形特性グラフを参照することで、現在の酸素濃度を明確に知ることができます。環境保護における酸素濃度の検出に非常に適しています。Grove - ガスセンサー(O₂)は有機反応モジュールであり、空気中に置くと少量の電流を生成します。外部電源を提供する必要はなく、時間経過に伴い電流が変化すると出力電圧も変化します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)

:::tip
[Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶ際に役立ちます。
:::
## 特徴

* 高精度
* 高感度
* 広い線形範囲
* 強力な耐干渉性
* 優れた信頼性

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::
## 仕様

|項目	| パラメータ |
|-------|---------------|
|測定範囲	| 0-25% |
|検出寿命	| 2年 |
|感度	| 0.05~0.15 mA(空気中) |
|温度範囲 |	-20 oC~50 oC |
|予熱時間	| 20分 |
|入力電圧|3.3V / 5V|


## ハードウェア

**電圧コンバータ**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

XC6206332MRは3.3V/5V入力を3.3Vに変換します。

**ME2-O2電流源**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png" alt="pir" width={600} height="auto" /></p>

ME2-O2は電流源です。ラベル#3ポイントの電圧はR7 * Current(ME2-O2)です。

**アンプ**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png" alt="pir" width={600} height="auto" /></p>

アンプのゲインは121であり、SIGA電圧はラベル#3ポイント電圧の121倍です。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png" alt="pir" width={600} height="auto" /></p>

これは、ME2-O2の出力電流と酸素濃度の相関関係を示しています。酸素濃度20%の場合の電流は約120uAです。したがって、Grove SIGA電圧 @ 酸素濃度20% = R7 * Current(ME2-O2) * 121 = 100 * 120uA * 121 = 1.452Vです。

:::warning
    ME2-O2の電流範囲は個体差により80uA~160uAです。そのため、センサーの出力電圧も異なります。センサーを新鮮な空気にさらし、最初に出力電圧の読み取りを基準として取得してください。[この例](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip)を参照して、最初にキャリブレーションを行い、その後センサー値を読み取ることができます。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    この章は、Windows 10とArduino IDE 1.6.9を基にしています。
:::

このモジュールは使いやすく、必要なのは信号ピン（Groveケーブルの黄色いピン）をコントローラーのADC入力に接続することだけです。コントローラーに内部ADCがない場合は、[Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html)をお勧めします。

ここでは、このGrove - ガスセンサー（O2）がどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備してください：

| Seeeduino V4 | Grove - 酸素センサー(ME2-O2-Ф20) | ベースシールド |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/gas_sensor_210.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### 接続

Groveシリーズモジュールの利点のおかげで、はんだ付けやブレッドボードを使用する必要はありません。必要なのは、モジュールをベースシールドの正しいポートに接続することだけです。このデモでは、Groveモジュールは1つだけ使用します。

* Grove - 酸素センサー(ME2-O2-Ф20)はアナログ入力モジュールで、このデモでは**A0**に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg" alt="pir" width={600} height="auto" /></p>

### Arduinoにコードをアップロード

以下のコードをArduino IDEにコピーしてください。

```cpp
// Grove - ガスセンサー(O2) テストコード
// 注意:
// 1. センサーを使用する前に約5〜10分間の予熱が必要です
// 2. 必要に応じてVReferを変更してください

const float VRefer = 3.3;       // ADCリファレンス電圧

const int pinAdc   = A0;

void setup() 
{
    // 初期設定コード（1回だけ実行）
    Serial.begin(9600);
    Serial.println("Grove - ガスセンサーテストコード...");
}

void loop() 
{
    // メインコード（繰り返し実行）
    float Vout = 0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, 酸素濃度は ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i = 0; i < 32; i++)
    {
        sum += analogRead(pinAdc);
    }
    
    sum >>= 5;
    
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Voutサンプルは3.3Vを基準としています
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    // 出力電圧が2.0Vの場合
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage = Concentration * 100;
    return Concentration_Percentage;
}
```

次に、正しいボードとCOMポートを選択し、アップロードボタンをクリックします。このプロセスには数秒かかります。

### データ取得

Arduino IDEのシリアルモニターを開くと、データが取得されます。

:::warning
    センサーを予熱するのに約20〜30分が必要です。予熱しない場合、大きな値が得られる可能性があります。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [ME2-O2 データシート](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf)
* [Eagleファイル形式の回路図](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip)
* [このドキュメントのGithubリポジトリ](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)

## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、スマート農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**照明と雨を備えた植物ボックス**: あなたの植物に水をやる新しい方法を体験してください。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

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

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>