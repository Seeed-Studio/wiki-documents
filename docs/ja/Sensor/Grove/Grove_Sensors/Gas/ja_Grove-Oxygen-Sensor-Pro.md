---
description: Grove - Oxygen Sensor Pro(GGC2330-O2)
title: Grove - Oxygen Sensor Pro(GGC2330-O2)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Oxygen-Sensor-Pro
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png" alt="pir" width={600} height="auto" /></p>


Grove - Oxygen Sensor Pro(GGC2330-O2)は、空気中の酸素濃度を測定するためのセンサーであり、電気化学セルの原理に基づいて動作します。動作を開始すると、酸素濃度に比例した電流を生成し、その電流の大きさを測定することで酸素濃度を判定することができます。

Grove - Oxygen Sensor Pro(GGC2330-O2)は、Grove - Oxygen Sensor(GG2020-O2)の強化版です。Grove - Oxygen Sensor(GG2020-O2)と比較して、内蔵の温度センサーにより温度補償を行い、温度差による測定誤差を補正して測定をより正確にします。それに加えて、高性能マイクロプロセッサを搭載しており、デジタル出力とアナログ電圧出力の両方の機能を備えています。このため、センサーの使用とキャリブレーションが容易になり、開発期間を短縮することができます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)

:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しています。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::
## 特徴

* 事前キャリブレーション（内蔵MCUおよび温度センサー付き）
* 高精度および高解像度
* 長寿命、低消費電力
* 強力な耐干渉性
* 優れた安定性
* UART信号出力

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::


## 仕様

|項目  | パラメータ |
|-------|---------------|
|対象ガス | O2 |
|解像度| 0.1%VOL |
|測定範囲  | 0-25%VOL |
|動作電圧  | DC 5±0.1V DC |
|動作電流 | ＜ 10 mA |
|出力| UART出力(TTL電気レベル、3V)、アナログ電圧（センサーの元の増幅信号については表2を参照） |
|動作条件| -20～25℃/15～90%RH（結露しないこと） |
|保管条件|  -20～50℃/15～90%RH（結露しないこと） |
|サイズ | ø23.5mm*24.5mm |
|寿命    | 2年（空気中）|

:::note
    電源投入後のエージング時間は5分以上必要です。  
    有機揮発性溶剤との長時間の接触を避けてください。  
    使用または保管環境は酸性・アルカリ性環境であってはなりません。
:::



## アプリケーション
* 携帯型ガス検知器
* 固定型ガス警報および検知器

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で言及されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    この章はWin10とArduino IDE 1.7.9を基にしています。
:::
この新しいGrove - Oxygen Sensor Pro(GGC2330-O2)の使用方法は、Grove - Oxygen Sensor(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-O2-MIX8410/)とは異なります。

ここでは、このGrove - Oxygen Sensor Pro(GGC2330-O2)がどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備する必要があります：

| Seeeduino Cortex-M0+ | Grove - Oxygen Sensor Pro(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### 接続

Groveシリーズモジュールの利点のおかげで、はんだ付けやブレッドボードを使用する必要はありません。必要なのは、モジュールをBase Shieldの正しいポートに接続することだけです。このデモでは、Groveモジュールは1つだけ使用します。

* Grove - Oxygen Sensor Pro(GGC2330-O2)はアナログ入力モジュールであり、このデモでは**UART**に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg" alt="pir" width={600} height="auto" /></p>

### Arduinoへのコードのアップロード

以下のコードをArduino IDEにコピーしてください。

```
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600);
}
void loop() {
  if (Serial2.available()){
    uint8_t begin_code = Serial2.read();
    delay(10);
    uint8_t state_code = Serial2.read();
    delay(10);
    uint8_t high_code = Serial2.read();
    delay(10);
    uint8_t low_code = Serial2.read();
    delay(10);
    uint8_t check_code = Serial2.read();
    delay(10);
    uint8_t checkk_code = Serial2.read();
    delay(10);
    uint8_t checkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkkk_code = Serial2.read();
    delay(10);

    if(begin_code == 255 && state_code == 134){
 
      float O2_val = ((high_code * 256) + low_code) * 0.1 ;
      Serial.print("O2: ");
      Serial.print(O2_val);
      Serial.println(" %");
      }
    }
    while(Serial2.read()>=0);    //バッファをクリア
}
```

次に、正しいボードとCOMポートを選択し、アップロードボタンをクリックします。このプロセスには数秒かかります。

### データの取得

Arduino IDEのシリアルモニターを開くと、データが取得できます。

:::warning
    センサーを予熱するのに約20〜30分必要です。そうしないと、値が大きくなります。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Grove - 酸素センサープロ データシート](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf)
* [Eagleファイル形式の回路図](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip)
* [このドキュメントのGithubリポジトリ](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF形式の回路図](#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf)

## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、スマート農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**照明と雨を備えた植物ボックス**: あなたの植物に水をやる新しい方法をご覧ください。

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