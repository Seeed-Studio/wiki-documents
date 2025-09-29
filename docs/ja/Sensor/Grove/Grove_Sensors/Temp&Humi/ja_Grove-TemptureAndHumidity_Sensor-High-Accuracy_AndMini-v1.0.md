---
description: Grove - 温度＆湿度センサー（高精度＆ミニ）v1.0
title: Grove - 温度＆湿度センサー（高精度＆ミニ）v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/main.jpg" /></div>

これは多機能センサーで、温度と相対湿度の情報を同時に提供します。一般的な測定ニーズを満たすことができるTH02センサーを採用しています。環境湿度が0〜80% RH、温度が0〜70°Cの範囲内で信頼性の高い測定値を提供し、極端な条件を含まないほとんどの家庭や日常の用途に対応します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センサーとしてすぐに使用できる体験を提供します。空気品質モニタリングにおいて高性能で堅牢なS2101ワイヤレス温度および湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空気温度＆湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

仕様
--------------

- 広い動作電圧範囲
  - (3.3V ~ 5V)
- 低消費電力
  - RH変換時に350 µA
- 0〜100% RHの動作範囲
- 測定範囲:
  - 湿度: 0% - 80% RH
  - 温度: 0 ~ 70 °C
- 精度:
  - 湿度: ±4.5% RH
  - 温度: ±0.5°C
- I2Cホストインターフェース
- 優れた長期安定性

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## 応用例

- 産業用HVAC/R
- サーモスタット/湿度計
- マイクロ環境/データセンター

## 初めての使用

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield| 温度＆湿度センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/Thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|

- **ステップ2.** Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) v1.0をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/arduino_connect.jpg" /></div>

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - Temperature and Humidity Sensor ProをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | 温度＆湿度センサー |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL            | 黄色                  |

#### ソフトウェア

- **ステップ1.** [Grove Temperature&Humidity TH02ライブラリ](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。**File --> Examples --> Grove Temper Humidity_TH02 --> TH02_demo**のパスを通じて「TH02_demo」例を開きます。このデモを通じて、環境の温度と相対湿度情報を読み取ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/path.png" /></div>

このデモでは、Grove - Temperature&Humidity Sensor (High-Accuracy & Mini)センサーから温度と湿度情報を読み取る方法を示します。

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開くには、**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、温度が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/result_arduino.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) V1.0 sch pcb](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
- **[PDF]** [TH02_SENSOR.pdf](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf)
- **[Library]** [Grove_Temper_Humidity_TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)

## プロジェクト

**Smart Mali**: 室内ガーデニング用のスマートポット！ （Maliの意味が気になりますか？）

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/smartmali-1fbdda/embed' width='350'></iframe>

**コールドチェーン輸送の監視と追跡**: 温度に敏感な生鮮食品の配送をより効率的にし、廃棄を減らすためのIoTベースのソリューション。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/musketeers/cold-transport-chain-monitoring-and-tracking-48b2c5/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>