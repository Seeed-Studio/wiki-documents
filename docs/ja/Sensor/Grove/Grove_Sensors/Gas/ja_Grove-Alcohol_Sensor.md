---
description: Grove - アルコールセンサー
title: Grove - アルコールセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Alcohol_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg" alt="pir" width={600} height="auto" /></p>

Grove - アルコールセンサーは、ArduinoまたはSeeeduino用の完全なアルコールセンサーモジュールです。[MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf)半導体アルコールセンサーを搭載しています。このセンサーはアルコールに対して高い感度と迅速な応答性を持ち、アルコール検知器（Breathalyzer）の製作に適しています。このGroveモジュールは、MQ303Aに必要な回路（電源調整やヒーター電源供給など）をすべて実装しています。このセンサーは、空気中のアルコール濃度に反比例する電圧を出力します。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)

<div class="admonition danger">
<p class="admonition-title">注意</p>
センサー値は、許容誤差範囲内でガス濃度の概略的な傾向を反映するだけであり、正確なガス濃度を示すものではありません。空気中の特定の成分を検出するには、通常、より精密で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトで非常に正確なレベルでガス濃度を取得することを目的としている場合、このガスセンサーは推奨されません。
</div>

:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

特徴
--------

- 入力電圧: 5V
- 動作電流: 120mA
- 検出可能濃度: 20-1000ppm
- Grove互換コネクタ
- アルコールに対して高感度
- アルコール曝露後の迅速な応答と回復
- 長寿命
- コンパクトな形状

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

対応プラットフォーム
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

### ハードウェアのインストール

Grove製品はエコシステムを持ち、すべて同じコネクタを備えており、Grove Base Shieldに接続できます。このモジュールをBase ShieldのA0ポートに接続してください。ただし、ジャンパーワイヤーを使用してBase ShieldなしでArduinoにガスセンサーを接続することも可能です。

| Arduino UNO | アルコールセンサー |
|-------------|--------------------|
| 5V          | VCC               |
| GND         | GND               |
| アナログ A1 | SCL               |
| アナログ A0 | DAT               |

センサーのDATピンを通じて現在の電圧を取得できます。<font color="Red">センサーの最適な予熱時間は48時間以上です</font>。アルコールセンサーの詳細情報については、データシートを参照してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg" alt="pir" width={600} height="auto" /></p>

### コードのダウンロードとアップロード

ガス濃度を取得する前に、以下の2つのステップを実行する必要があります。

まず、上記の写真のようにA0を使用してモジュールをGrove Shieldに接続します。そして、センサーを清浄な空気中に置き、以下のプログラムを使用します。

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // heaterSelPinをデジタル出力として設定
    digitalWrite(heaterSelPin,LOW); // センサーの加熱を開始
}

void loop() {
    float sensor_volt;
    float RS_air; // 清浄な空気中でRSの値を取得
    float sensorValue = 0;

/*--- 100回のテストで平均データを取得 ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
/*---------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = sensor_volt/(5.0-sensor_volt); // *R16を省略
    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    Serial.print("RS_air = ");
    Serial.println(RS_air);
    delay(1000);
}
```

次に、Arduino IDEのモニターを開き、いくつかのデータが表示されるのを確認します。RS_airの値を書き留めてください。この値は後続のプログラムで使用する必要があります。このステップでは、RS_airの値をテストするために少し時間をかけるかもしれません。

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // heaterSelPinをデジタル出力として設定します。
    digitalWrite(heaterSelPin,LOW); // センサーの加熱を開始します。
}

void loop() {

    float sensor_volt;
    float RS_gas; // GAS中のRSの値を取得
    float ratio; // RS_GAS/RS_airの比率を取得
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = sensor_volt/(5.0-sensor_volt); // *R16を省略

  /*-最初のテストのデモでのR0の値を"R0"の名前に置き換えます-*/
    ratio = RS_gas/RS_air;  // ratio = RS/R0
  /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");
    delay(1000);
}
```

次に、以下の図からガスの濃度を取得できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png" alt="pir" width={600} height="auto" /></p>

図によると、テスト可能な最小濃度は20ppm、最大濃度は10000ppmであることがわかります。言い換えれば、0.002%から1%の範囲でガス濃度を取得できます。ただし、比率と濃度の関係は非線形であるため、公式を提供することはできません。

<div class="admonition note">
<p class="admonition-title">注意事項</p>
<p> a. 値は500〜905の範囲で変動します。そのため、650以上の値は周囲にアルコール蒸気が存在することを示します。</p>
<p> b. アルコール蒸気にさらされると、センサー値が完全に減少するまでに時間がかかります。</p>
<p> c. ただし、新たな曝露があるとセンサー値は即座に増加します。</p>
</div>

<div class="admonition danger">
<p class="admonition-title">注意</p>
<p> a. アルコールセンサーは非常に敏感な半導体デバイスです。慎重に取り扱ってください。</p>
<p> b. 有機シリコン蒸気、アルカリ、腐食性ガスにさらさないでください。</p>
<p> c. 凍結や水のこぼれを避けてください。</p>
<p> d. 適切な動作電圧を維持してください。</p>
</div>

# Grove-Alcohol Sensor

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-アルコールセンサー v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース

---------

- [Grove-Alcohol Sensor Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip)
- [Grove-Alcohol Sensor v1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip)
- [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf)
- [ガスセンサーの選び方](#/How_to_Chose_A_Gas_Sensor)
- [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Alcohol_Sensor から作成されました -->

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

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1の気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
