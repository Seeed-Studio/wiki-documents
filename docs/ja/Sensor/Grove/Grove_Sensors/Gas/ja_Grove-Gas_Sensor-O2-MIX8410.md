---
description: Grove - Gas O₂ Sensor(MIX8410)
title: Grove - Gas O₂ Sensor(MIX8410)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor-O2-MIX8410
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/101990680_preview-34.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/101990680_preview-34.png" alt="pir" width={600} height="auto" /></p>

Grove - 酸素センサー(MIX8410)は、空気中の酸素濃度を測定するためのセンサーであり、電気化学セルの原理に基づいて動作します。酸素濃度に比例した電圧値を出力し、酸素濃度の線形特性グラフを参照することで、現在の酸素濃度を明確に知ることができます。環境保護における酸素濃度の検出に非常に適しています。Grove - 酸素センサー(MIX8410)は有機反応モジュールであり、空気中に置くと少量の電流を生成します。そのため、外部電源を提供する必要はなく、電流の変化に応じて出力電圧が変化します。

Grove - 酸素センサー(MIX8410)は、以前のバージョンであるGrove - 酸素センサー(ME2-O2-Ф20)と比較して新しいリリースバージョンです。では、どのような点が更新されたのでしょうか？新しいバージョンでは、先進的な漏れ防止処理が施されており、漏れの可能性が大幅に減少し、旧バージョンの漏れ問題が解決されています。新しいバージョンの出力電流は低くなり、その結果、電解液の消費が遅くなり、センサーの寿命が長くなります。さらに、新旧バージョンの底部ピン、物理的寸法、上部ドライバーボード、使用方法は同じです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html) 


:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)をリリースしました。これにより、ニーズに最適なガスセンサーを選択するのに役立ちます。
:::

## 特徴

* 高感度 (0.1±0.03 mA) と線形出力
* 高い安定性 (&lt;10秒の応答時間)
* 環境保護設計
* 漏れ防止技術の進化により漏れの可能性を大幅に削減
* 低出力電流でセンサー寿命が長い

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::


## 仕様

|項目	| パラメータ |
|-------|---------------|
|測定範囲	| 0-25% |
|過負荷濃度| 30%|
|感度	| 0.05~0.15 mA(空気中) |
|再現性  | ±2% |
|応答時間(t90) | ＜ 10秒 |
|安定性| ＜ 2% / 月 |
|推奨負荷| 100Ω |
|長期ドリフト|  ＜ 5% / 年|
|温度範囲 |	-20 °C~50 °C |
|予熱時間	| 20分|
|保管温度| 0-25 °C|
|入力電圧|3.3V / 5V|
|検出寿命	| 2年(空気中) |

:::note
    設置時にリード線を溶接することができますが、センサーに触れる溶接は禁止されています。 
    電源投入後のエージング時間は30分以上必要です。 
    有機揮発性溶剤との長期接触を避けてください。 
    使用または保管環境は酸性・アルカリ性環境であってはなりません。
:::



## ハードウェア

**電圧コンバータ**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

XC6206332MRは3.3V/5V入力を3.3Vに変換します。

**電流源**

<!-- ![](https://files.seeedstudio.com/products/101990680/currentsource.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/currentsource.png" alt="pir" width={600} height="auto" /></p>

MIX8410-O2は電流源です。ラベル#3ポイントの電圧はR7 * 電流(MIX8410-O2)です。

**アンプ**

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png" alt="pir" width={600} height="auto" /></p>

アンプのゲインは241であり、SIGA電圧はラベル#3ポイントの電圧の241倍です。

<!-- ![](https://files.seeedstudio.com/products/101990680/outputcurrent.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/outputcurrent.png" alt="pir" width={600} height="auto" /></p>

以下はMIX8410の出力電流と酸素濃度の相関関係です。酸素濃度20%の電流は約96uAです。したがって、Grove SIGA電圧 @ 20%濃度 = R7 * 電流(MIX8410) * 241 = 100 * 96uA * 241 = 2.314Vです。

:::warning
    MIX8410の電流範囲は個体差により8uA～100uAです。そのため、センサーの出力電圧も異なる場合があります。センサーを新鮮な空気にさらし、初期段階で出力電圧を基準として取得してください。初期段階でのキャリブレーションを取得し、その後センサー値を読み取る方法については[この例](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip)を参照してください。
:::

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    この章は、Win10 と Arduino IDE 1.7.9 を基にしています。
:::

この新しい Grove Gas Sensor O2(MIX8410) の使用方法は、以前の [ME2-O2-Ф20](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-O2/) と全く同じです。

このモジュールは使いやすく、必要なことは信号ピン（Grove ケーブルの黄色のピン）をコントローラーの ADC 入力に接続するだけです。コントローラーに内部 ADC がない場合は、[Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) を推奨します。

ここでは、この Grove - Oxygen Sensor(MIX8410) がどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備してください：

| Seeeduino V4 | Grove - Oxygen Sensor(MIX8410) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/101990680overview.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### 接続

Grove シリーズモジュールの利点のおかげで、はんだ付けやブレッドボードを使用する必要はありません。必要なことは、モジュールを Base Shield の適切なポートに接続するだけです。このデモでは、Grove モジュールは 1 つだけ使用します。

* Grove - Oxygen Sensor(MIX8410) はアナログ入力モジュールであり、このデモでは **A0** に接続します。

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>

### Arduino にコードをアップロード

以下のコードを Arduino IDE にコピーしてください。

```
// Grove - Gas Sensor(O2) テストコード
// 注意:
// 1. センサーを予熱するのに約5〜10分必要です
// 2. 必要に応じて VRefer を変更してください

const float VRefer = 3.3;       // ADC リファレンス電圧

const int pinAdc   = A0;

void setup() 
{
    // 初回実行時にセットアップコードを記述
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) テストコード...");
}

void loop() 
{
    // 繰り返し実行されるメインコード
    float Vout =0;
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
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
    
    sum >>= 5;
    
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout サンプルは 3.3V を基準としています
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    // 出力電圧が 2.0V の場合
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

次に、適切なボードと COM ポートを選択し、アップロードボタンをクリックします。このプロセスは数秒かかります。

### データ取得

Arduino IDE のシリアルモニターを開くと、データを取得できます。

:::warning
    センサーを予熱するのに約20〜30分必要です。予熱しない場合、大きな値が表示される可能性があります。
:::

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## Raspberry Piでの開始方法（Grove Base Hat for Raspberry Piを使用）

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - ガスセンサー O₂(MIX8410) |
|--------------|---------------------------|----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/MIX8410py.png" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)|

- **ステップ 2**. Grove Base HatをRaspberry Piに接続します。
- **ステップ 3**. Grove - ガスセンサー O₂(MIX8410)をBase HatのアナログポートA0に接続します。
- **ステップ 4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してPythonコードを作成します。

```
cd grove.py/grove/
nano MIX8410.py
```

- **ステップ 4**. 以下のコードをファイルにコピーします：

```python
import time , sys, math
from adc import ADC

__all__ = ["GroveMix8410Sensor"]

VRefer = 3.3
total = 0
Measuredvout = 0

class GroveMix8410:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def Mix8410(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*3.3/1024.0
            Mix8410Value = voltage* 0.21 *100/ 2.0
            return Mix8410Value
        else:
            return 0

Grove = GroveMix8410

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)
 
    sensor = GroveMix8410(int(sys.argv[1]))
    print('Detecting 02 value...')
 
    while True:
        print('Mix8410 Value: {0}'.format(sensor.Mix8410))
        time.sleep(1)
 
if __name__ == '__main__':
    main()  
```

- **ステップ 5**. Ctrl+Oを使用して保存し、Ctrl+Xを使用して終了します。
- **ステップ 6**. 以下を実行してコードを実行します：
```
python MIX8410.py 0
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python
pi@raspberrypi:~/grove.py/grove$ python MIX8410.py 0

Detecting 02 value...
Mix8410 Value: 23.6419354839
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.8451612903
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [MIX8410 データシート](https://files.seeedstudio.com/products/101990680/MIX841datasheetV1.6.pdf)
* [Eagle ファイル形式の回路図](http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip)
* [このドキュメントの Github リポジトリ](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF 回路図](https://files.seeedstudio.com/products/101990680/MIX841v1.0_SCH_200811.pdf)

## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、インテリジェント農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**照明と雨を備えた植物ボックス**: こんな方法で植物に水をやるのは初めてです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能
SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>