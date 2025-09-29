---
description: Grove - デジタル赤外線温度センサー
title: Grove - デジタル赤外線温度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Digital_Infrared_Temperature_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<table>
  <tbody><tr>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg" /></td>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg" /></td>
    </tr>
  </tbody></table>

デジタル赤外線温度センサーは、MLX90615をベースにした非接触型温度測定モジュールです。IR感度の高いサーモパイル検出チップと信号調整チップが同じパッケージに統合されています。このモジュールはSMBusを使用してArduinoと通信し、最大127個のセンサーを共通の2本のワイヤで読み取ることができます。モジュールの低ノイズアンプ、16ビットADC、および強力なDSPユニットのおかげで、広い温度範囲で1℃の高精度と0.02℃の高い測定分解能を実現しています。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

仕様
-------------

<table border="1" cellspacing="0" width="70%">
<tr>
<th>
項目
</th>
<th>
最小
</th>
<th>
標準
</th>
<th>
最大
</th>
<th>
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
2.6
</td>
<td>
3
</td>
<td>
5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
</td>
<td>
1.4
</td>
<td>
1.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
周囲温度範囲
</th>
<td colspan="3">
-40 - 85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
対象物温度範囲
</th>
<td colspan="3">
-40 - 115
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
 20x40x9.6
</td>
<td>
mm
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg" /></div>

| ピン番号 | 名前 | タイプ   | 機能説明                                         |
|----------|------|----------|------------------------------------------------|
| 1        | GND  | -        | 信号グラウンド                                 |
| 2        | VCC  | 入力     | 正電源入力端子 (3.3V または 5V)                |
| 3        | SDA  | 入出力   | I2Cデータ入力/出力                             |
| 4        | SCL  | 入力     | I2Cクロック                                    |

## はじめに

### Arduinoで遊ぶ

ここでは、このセンサーを使用してセンサーの前にある対象物の温度を測定し、その結果をシリアルモニターに表示する方法を示す例を提供します。

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

#### ハードウェア

**必要なハードウェアコンポーネント:**

| Seeeduino V4.2 | Base Shield|  Grove - デジタル赤外線温度センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **ステップ 1.** Grove - デジタル赤外線温度センサーをGrove-Base ShieldのD2ポートに接続します。
- **ステップ 2.** Grove - Base ShieldをSeeeduinoに接続します。
- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG" /></div>

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - デジタル赤外線温度センサーをArduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - デジタル赤外線温度センサー |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| D3           | NA                   |
| D2            | 黄色                  |

#### ソフトウェア

- **ステップ 1.** ライブラリとデモコードをダウンロードします：[Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)。
- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ 3.** 次のパスからデモコードを直接開きます：

  **File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**。以下の画像のように表示されます：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png" /></div>

センサーは工場出荷時にデジタルSMBus互換インターフェースが有効化された状態でキャリブレーションされていますが、ライブラリはソフトi2cライブラリに基づいているため、任意のAVRチップのデジタルピンを使用して**SDA**および**SCL**ラインを駆動できます。このデモコードでは**D2**を**SCL**ピンとして、**D3**を**SDA**ピンとして使用しています。他のポートを使用する場合は、コードを対応するピンに合わせて修正してください。

- **ステップ 4.** コードをArduinoにアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。
- **ステップ 5.** **Tool -> Serial Monitor**をクリックしてシリアルモニターを起動します。結果が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg" /></div>

これで、このセンサーを使用して温度を測定できます。周囲温度はMLX90615パッケージの温度であり、対象物温度は対象物の温度です。実験によると、センサーを通常の室内温度に置き、センサーの1M範囲内に熱源がないことを確認すると、対象物温度は周囲温度とほぼ等しくなります。対象物温度を測定する際は、対象物をセンサーにできるだけ近づける必要がありますが、センサーの表面には触れないようにしてください。推奨距離は3cm未満です。楽しい試みをお楽しみください。

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- **[Zip]** [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip)
- **[PDF]** [MLX90615.pdf](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf "File:MLX90615.pdf")
- **[コード]** [デモコード](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor から作成されました -->

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

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>