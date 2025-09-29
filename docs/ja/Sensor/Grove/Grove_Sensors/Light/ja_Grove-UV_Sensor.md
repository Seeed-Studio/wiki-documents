---
description: Grove - UV センサー
title: Grove - UV センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-UV_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/UV_Sensor_01.jpg" /></div>

Grove – UV センサーは、入射する紫外線（UV）放射の強度を検出するために使用されます。この形式の電磁放射は、可視放射よりも波長が短いです。Grove - UV センサーは、200nm～400nmの広いスペクトル範囲を持つセンサー GUVA-S12D をベースにしています。このモジュールは、UV 強度に応じて変化する電気信号を出力し、今日ビーチに行くのが良いかどうかを判断する手助けをします。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特徴
--------

- 高い安定性
- 優れた感度
- 低消費電力
- ショットキー型フォトダイオードセンサー
- 広い応答範囲
- Grove インターフェース

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

仕様
--------------

| 項目                | 最小 | 典型値  | 最大 | 単位 |
|---------------------|-----|---------|-----|------|
| 動作電圧           | 3.0 | 5.0     | 5.1 | VDC  |
| 電流               |     | 0.31    |     | mA   |
| 出力電圧           |     |         |     | mV   |
| 応答波長           | 240 | ~       | 370 | nm   |
| 動作温度           | -30 | ~       | 85  | ℃    |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

応用例
-----

- UV センサーは、製薬、自動車、ロボット工学など、さまざまな用途で使用されています。
- UV センサーは、印刷業界での溶剤処理や染色プロセスにも使用されています。
- また、化学産業では、化学物質の製造、保管、輸送に UV センサーが使用されています。

UV センサーの理論は次の通りです：日光の下では、UV 指数と光電流は線形の関係にあります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/The%20theory%20of%20UV%20sensor.png" /></div>

Grove - UV センサーでは、光電流を Arduino/Seeeduino で収集される対応する電圧値に変換しています。出力電圧と UV 指数は線形です：

**照度強度 = 307 * Vsig**

Vsig は Grove インターフェースの SIG ピンから測定された電圧値（単位：V）です。  
照度強度の単位：mW/m<sup>2</sup>（波長範囲 240nm～370nm の UV 光の強度の合計）

:::note
UV 指数値を計算するには、<a href="http://www2.epa.gov/sunwise/uv-index">US EPA</a> を参照してください。このセンサーの測定値を EPA 標準の UV 指数に変換することは難しいですが、おおよその推定は可能です。
:::

UV 指数 = 照度強度 / 200

はじめに
--------------

:::note
    この章は、Win10 と Arduino IDE 1.6.9 を基にしています。
:::

この Grove - UV センサーがどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備する必要があります：

| Seeeduino V4 | Grove - UV センサー | ベースシールド |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

  **接続**

Groveシリーズモジュールの利点により、はんだ付けやブレッドボードを作成する必要はありません。必要なのは、モジュールをBase Shieldの正しいポートに接続することだけです。このデモでは、1つのGroveモジュールのみを使用します。

- Grove UVセンサーをGrove - Base ShieldのA0ポートに接続します。
- Grove - Base ShieldをArduino/Seeeduinoに差し込み、USBケーブルを使用してPCに接続します。
- デモコードは以下の通りです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/connection.jpg" /></div>

**スケッチをArduinoにアップロードし、シリアルポートを開いてデータを監視します**

```
// Victorによる修正
// UVインデックスを直接計算する
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// 1024回の読み取りを累積
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // 平均値を取得
    Serial.print("現在のUVインデックスは:");
    Serial.print((meanVal*1000/4.3-83)/21);// 回路図ファイルに記載されたUVインデックスの詳細な計算式を使用
    Serial.print("\n");
    delay(20);

}
```

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove - UVセンサー v1.1 PCBおよび回路図（現在のバージョン）Eagle形式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UVセンサー v1.1 PCB（現在のバージョン）PDF形式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UVセンサー v1.1 回路図（現在のバージョン）PDF形式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1sch.pdf)
- [Grove - UVセンサー v1.1 センサーデータシート（現在のバージョン）](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [米国EPAによるUV放射に関する提案](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UVセンサー v1.0 回路図およびデータシート（旧バージョン）](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.0_Datasheets.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_UV_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢です。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>