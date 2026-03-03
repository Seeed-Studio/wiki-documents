---
description: Grove - 静電容量式土壌湿度センサー（耐腐食性）
title: Grove - 静電容量式土壌湿度センサー（耐腐食性）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/main.jpg" /></div>

Grove - 静電容量式土壌湿度センサー（耐腐食性）は、静電容量の変化に基づいた土壌湿度センサーです。抵抗式センサーと比較して、静電容量式センサーは金属電極を直接露出させる必要がないため、電極の腐食を大幅に軽減できます。そのため、これを**耐腐食性**と呼びます。

このセンサーは土壌の湿度を定性的にテストすることしかできず、定量的に測定することはできない点に注意が必要です。つまり、土壌の湿度が上昇すると出力値が減少し、逆に湿度が低下すると出力値が高くなります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。土壌状態のモニタリングには、より高性能で堅牢なS2105ワイヤレス土壌湿度、温度、ECセンサーをご参照ください。このシリーズには、土壌湿度、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 土壌湿度 &amp; 温度 &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## バージョン

| 製品バージョン  | 変更内容                                                                                               | リリース日       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Capacitive Moisture Sensor (Corrosion Resistant)  | 初版                                                                                               | 2018年9月      |

## 特徴

- 静電容量式デザイン
- 耐腐食性
- 内蔵アンプ

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|出力インターフェース|アナログ|
|長さ|92.1mm|
|幅|23.5mm|
|高さ|6.5mm|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 13mm|
|重量|10.6g|
|パッケージサイズ|長さ: 150mm 幅: 100mm 高さ: 15mm|
|総重量|19g|

## 主な用途

- 土壌水分検出
- 植物の自動給水

## ハードウェア概要

### ピン配置

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/pin_out.jpg" /></div>

:::caution
センサーを土壌に挿入する部分は、最高位置ラインを超えてはいけません。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのハードウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。現在対応していないものは、将来的に対応する可能性があるかもしれませんが、保証はありません。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 静電容量式土壌湿度センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

:::note
**1** Arduino UNOをマザーボードとして使用する場合は、DC電源の使用を推奨します。そうしないと、VCCの最大リップルが100mVを超える可能性があります。Seeeduino V4.2をマザーボードとして使用する場合は、DC電源を接続する必要はありません。

**2** ホットスワップはサポートされていません。
:::

- **ステップ1.** Grove - 静電容量式土壌湿度センサーをGrove-Base Shieldのポート**A0**に接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** Grove - 静電容量式土壌湿度センサーをテストする土壌に挿入します。

:::caution
センサーを土壌に挿入する部分は、この白い線を超えてはいけません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/line.jpg" /></div>

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/connect.jpg" /></div>

:::note
    Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino      |  Groveケーブル       | Grove - 静電容量式土壌湿度センサー |
|--------------- |--------------------|-----|
| GND            | 黒                 | GND |
| 5Vまたは3.3V   | 赤                 | VCC |
|接続なし        | 白                 | NC  |
|A0              | 黄                 | SIG |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**ステップ1.** 以下のコードをコピーして、Arduinoにダウンロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
/*
  AnalogReadSerial

  アナログ入力をピン0で読み取り、その結果をシリアルモニタに表示します。
  シリアルプロッタ（ツール > シリアルプロッタメニュー）を使用してグラフ表示も可能です。
  ポテンショメータの中央ピンをピンA0に接続し、外側のピンを+5VとGNDに接続します。

  このサンプルコードはパブリックドメインです。

  https://arduino.cc/en/Tutorial/AnalogReadSerial
*/

// setupルーチンはリセットボタンを押したときに1回だけ実行されます:
void setup() {
  // シリアル通信を9600ビット/秒で初期化します:
  Serial.begin(9600);
}

// loopルーチンは永遠に繰り返し実行されます:
void loop() {
  // アナログピン0の入力を読み取ります:
  int sensorValue = analogRead(A0);
  // 読み取った値を出力します:
  Serial.println(sensorValue);
  delay(100);        // 安定性のために読み取り間隔を遅延
}
```

- **ステップ2.** Arduino IDEの**シリアルモニタ**を開きます。**ツール->シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**9600**に設定します。

:::tip
すべてが正常に動作している場合、シリアルモニタを開くと以下のように表示されるかもしれません:
:::

```cpp
678
663
631
615
615
624
616
618
620
616
614
614
610
614
614
616
615
612
605
```

:::caution
部品の個体差により、同じ環境で異なるモジュールの測定値が異なる場合があります。
:::

## Raspberry Piでの使用

このモジュールをRaspberry Piで使用したい場合、以下のいずれかのハットを使用する必要があります：

- [Raspberry Pi用4チャンネル16ビットADC（ADS1115）](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)
- [Raspberry Pi用8チャンネル12ビットADC（STM32F030）](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)
- [Raspberry Pi用Grove Base Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)
- [Raspberry Pi Zero用Grove Base Hat](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)

これらのハットのWikiでデモを見つけることができます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Capacitive Moisture Sensor (Corrosion Resistant) Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip)

- **[PDF]** [NE555DRデータシート](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/NE555DR.pdf)

- **[PDF]** [PDF形式Wiki](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/soil_sensor.pdf)

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