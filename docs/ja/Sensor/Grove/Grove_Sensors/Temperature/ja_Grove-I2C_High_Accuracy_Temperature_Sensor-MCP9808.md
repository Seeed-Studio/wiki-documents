---
description: Grove - I2C 高精度温度センサー(MCP9808)
title: Grove - I2C 高精度温度センサー(MCP9808)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/main.JPG" /></div>

Grove - I2C 高精度温度センサー(MCP9808)は、MCP9808をベースにした高精度デジタルモジュールです。他のセンサーとは異なり、このセンサーでは測定解像度を選択することができます。高精度な温度測定に加え、プログラム可能な温度アラートも提供しています。アラーム信号を出力するための専用ピンを使用しており、この信号を割り込みとして使用して他のボードを制御するのに非常に便利です。

総じて、このセンサーは温度制御の新しいスターになると信じています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温度・湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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

## 特徴

- 高精度
  - ±0.25 (標準値) -40°C ～ +125°C
  - ±0.5°C (最大値) -20°C ～ +100°C
  - ±1°C (最大値) -40°C ～ +125°C

- ユーザー選択可能な測定解像度
  - +0.5°C, +0.25°C, +0.125°C, +0.0625°C
- ユーザー設定可能な温度アラート出力
- I2Cインターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V|
|動作範囲|-40°C ～ +125°C|
|デジタルインターフェース|I2C標準 400 kHz|
|I2Cアドレス|0x18(デフォルト)/ 0x18～0x1F(オプション)|

## 応用例

- 産業用途
- 産業用冷凍庫および冷蔵庫
- 食品加工
- パーソナルコンピュータおよびサーバー
- PC周辺機器
- 家電製品
- 携帯/ポータブルデバイス

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_front.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/pin_map_back.jpg" /></div>

**I2Cアドレス**

PCBの裏面には3セットのパッドが用意されています。デフォルトではAD0～AD2はすべてLowレベルのパッドに接続されていますが、これらのパッドを切断し、反対側（Highレベル）にハンダ付けすることができます。I2Cアドレスは7ビットのアドレス<mark>0011A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>です。<mark>0011</mark>はアドレスコードであり、これは工場設定で変更できません。
<mark>A<sub>0</sub>A<sub>1</sub>A<sub>2</sub></mark>はスレーブアドレスであり、変更可能です。デフォルト設定ではA<sub>0</sub>=0/A<sub>1</sub>=0/A<sub>2</sub>=0となっているため、デフォルトのI2Cアドレスは<mark>0011000</mark>です。通常、アドレスは8ビットである必要があるため、MSB（最上位ビット）に1ビットの0を追加します。これにより<mark>0001,1000</mark>となります。このアドレスはバイナリ形式ですが、コード内では通常16進数形式を使用するため、バイナリアドレスを16進数アドレスに変換します。ここでは<mark>0x18</mark>となります。同様に、すべてのパッドをHighレベルにハンダ付けすると<mark>0001,1111</mark>となり、これは<mark>0x1F</mark>です。このように、I2Cアドレスは0x18から0x1Fまでの範囲であり、その中から任意のアドレスを選択できます。ただし、**Grove_Temperature_sensor_MCP9808-master**ライブラリ内の**Seeed_MCP9808.h**ファイルでI2Cアドレスを変更する必要があります。

```cpp
#define DEFAULT_IIC_ADDR  0X18
```

アドレスマップ

A<sub>2</sub>=0|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-000,0x18|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-001,0x19
A<sub>1</sub>=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-010,0x1A|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-011,0x1B

A<sub>2</sub>=1|A<sub>0</sub>=0|A<sub>0</sub>=1
--|--|---
A<sub>1</sub>=0=0|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-100,0x1C|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-101,0x1D
A<sub>1</sub>=0=1|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-110,0x1E|A<sub>2</sub>A<sub>1</sub>A<sub>0</sub>-111,0x1F

**<span style={{textDecoration: 'overline'}}>ALE</span>パッド**

PCBの裏面には<span style={{textDecoration: 'overline'}}>ALE</span>パッドが見えます。このパッドから出力されるアラート信号は、他のコントローラーの外部割り込み信号として使用できます。デフォルトの出力はHighで、このボードでは3.3Vであるべきです。条件が満たされると、出力電圧はLow（0V）になります。この条件は、このWikiを完了した後に設定できます 😄

### 回路図

**I2Cアドレス**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_a.jpg" /></div>

前述のように、これらの3セットのパッドを使用してI2Cアドレスを選択します。デフォルトのアドレスを変更したい場合は、配線を切断して再ハンダ付けしてください。

**MCP9808**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc_c.jpg" /></div>

ご覧の通り、<span style={{textDecoration: 'overline'}}>ALE</span>パッドはプルアップ抵抗を介して3.3Vに接続されています。

**双方向レベルシフター回路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/schamitc.jpg" /></div>

これは、I2Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q6**および**Q5**はNチャネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)であり、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

:::tip
このセクションでは回路図の一部のみを表示しています。完全なドキュメントについては、[Resources](https://wiki.seeedstudio.com/ja/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - I2C 高精度温度センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html" target="_blank">今すぐ購入</a>|

:::note

**1** USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - I2C 高精度温度センサーをGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/connect.jpg" /></div>

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     |  Grove-MCP9808          |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄色                   |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Grove MCP9808](https://github.com/Seeed-Studio/Grove_Temperature_sensor_MCP9808)ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。以下のパスで例を開きます: **File --> Examples --> Grove Temperature Sensor MCP9808 --> MCP9808_demo_with_limit**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/demo_path.jpg" /></div>

:::tip
        上記の画像に示されているように、2つのデモを提供しています。**MCP9808_basic_demo**と**MCP9808_demo_with_limit**です。**MCP9808_basic_demo**は温度のみを提供し、アラート機能は無効です。
        **MCP9808_demo_with_limit**デモでは、アラート機能が有効です。温度のみが必要な場合は、basic_demoで十分です。アラート機能を使用したい場合は、limit_demoを選択してください。
:::

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開きます。**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります。

```cpp
sensor init!!
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.31
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.25
temperature value is: 29.19
temperature value is: 29.25
```

**では、<span style={{textDecoration: 'overline'}}>ALE</span> Pad の使用方法を見てみましょう。**

デモコード **MCP9808_demo_with_limit**:

```cpp
#include "Seeed_MCP9808.h"


MCP9808  sensor;

void setup()
{
    Serial.begin(115200);
    if(sensor.init())
    {
        Serial.println("センサーの初期化に失敗しました!!");
    }
    // 上限温度を30°Cに設定
    sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
    delay(10);
    // 臨界温度を32°Cに設定
    sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,0x0200);
    delay(10);
    // アラートビットを有効化。温度が設定値を超えるとアラートビットは低出力（Low）になり、それ以外では高出力（High）を維持します。
    sensor.set_config(SET_CONFIG_ADDR,0x0008);

    Serial.println("センサーが初期化されました!!");
}


void loop()
{
    float temp=0;
    // 温度を取得し、浮動小数点形式で値を取得
    sensor.get_temp(&temp);
    Serial.print("温度値は: ");
    Serial.println(temp);
    delay(1000);
}

```

このコードは温度測定に加えて、以下の機能も実装しています。温度が30℃未満の場合、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** はデフォルトで高出力（3.3V）を維持します。
温度が30℃を超える場合、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** は低出力（0V）になります。

では、しきい値の温度を変更したい場合はどうすればよいでしょうか？OK、14行目に注目してください:

```cpp
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
```

この関数を使用して温度を制御します。最初のパラメータはUPPER_LIMITレジスタのアドレスで、2番目のパラメータ<mark>0x01e0</mark>は設定する16進数の温度値です。上記の例では30℃に設定されています。<mark>0x01e0</mark>は4ビットの16進数で、右端のビットは小数部分を表します。これを0に設定すると、有効な数値は<mark>0x1e</mark>になります。**e**は10進数で14を意味し、上位ビットの**1**は10進数で16を意味します。したがって、<mark>0x1e</mark>は16+14=30に相当します。

ファイル **Seeed_MCP9808.cpp** には以下の3つの関数が用意されています。  
```sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16);```
```sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16);```
```sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16);```

前述の通り、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** のデフォルト出力は高出力であり、温度が特定の条件を満たすと出力レベルが低くなります。これらの3つの関数を使用して独自の条件を設定できます。

**sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,u16)** は下限温度を設定するために使用されます。**u16** は設定する4ビットの16進数の温度値です。温度が設定値より低い場合、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** の出力が低くなります。

**sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,u16)** は上限温度を設定するために使用されます。同様に、**u16** は設定する4ビットの16進数の温度値です。温度が設定値より高い場合、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** の出力が低くなります。

**sensor.set_critical_limit(SET_CRITICAL_LIMIT_ADDR,u16)** は割り込みモード用に使用されます。このWikiではコンパレータとしての動作方法のみを示しています。詳細については、[データシート](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf) を確認してください。

下限温度と上限温度を設定することで条件ゾーンを作成できます。温度が条件ゾーンに達すると出力が低くなります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/Zone.jpg" /></div>

例えば、**<span style={{textDecoration: 'overline'}}>ALE</span> Pad** の出力を28℃から30℃の間で高出力にし、温度が30℃を超えるか28℃未満の場合に低出力にしたい場合、コードは以下のようになります:

```cpp

sensor.set_lower_limit(SET_LOWER_LIMIT_ADDR,0x01c0);
delay(10);
sensor.set_upper_limit(SET_UPPER_LIMIT_ADDR,0x01e0);
delay(10);

```

:::caution
        **upper_limit** が **lower_limit** より高いことを確認してください。そうでない場合、正しく出力されません。また、**critical_limit** が **upper_limit** より高いことを確認してください。レジスタが正しく書き込まれるようにするために、一定の delay() が必要です。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの:

| Raspberry Pi | Grove Base Hat for RasPi| Grove - I2C 高精度温度センサー|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor%28MCP9808%29-p-3108.html)|

- **ステップ2**. Grove Base Hat を Raspberry Pi に接続します。
- **ステップ3**. Grove - I2C 高精度温度センサーを Base Hat の I2C ポートに接続します。
- **ステップ4**. Raspberry Pi を USBケーブルを介してPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/img/MCP9808_Hat.jpg" /></div>

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成し、grove.py を Raspberry Pi にインストールします。

- **ステップ2**. 以下のコマンドを実行してコードを動かします。

```

# Python3 用 virtualenv
virtualenv -p python3 env  
source env/bin/activate  
# コマンドを入力  
grove_high_accuracy_temperature  
```

以下は mcp9808.py のコードです。

```python

import math
import threading
from grove.i2c import Bus 
from grove.temperature import Temper

RES_LOW = 0x00
RES_MEDIUM = 0x01
RES_HIGH = 0x02
RES_PRECISION = 0x03

MCP9808_REG_AMBIENT_TEMP = 0x05

class TemperMCP9808(Temper):
    def __init__(self, address=0x18):
        self._addr = address
        self._bus = Bus()
        self._resolution = Temper.RES_1_2_CELSIUS

    def _derive_res(self, res):
        ares = -1
        if res >= Temper.RES_1_2_CELSIUS:
            ares = RES_LOW
        elif res >= Temper.RES_1_4_CELSIUS:
            ares = RES_MEDIUM
        elif res >= Temper.RES_1_8_CELSIUS:
            ares = RES_HIGH
        elif res >= Temper.RES_1_16_CELSIUS:
            ares = RES_PRECISION

        if ares < 0:
            return False
        self._bus.write_byte(self._addr, ares)
        # print("ares = {}".format(ares))
        return True

    @property
    def temperature(self):
        result = self._bus.read_word_data(self._addr, MCP9808_REG_AMBIENT_TEMP)
        # バイトを入れ替える
        data = (result & 0xff)  8 | (result & 0xff00)  8
        # print("data = {}".format(data))
        # print("data = {}".format(hex(data)))
        # 温度が負の場合をチェック
        if data & 0x1000:
            data = -((data ^ 0x0FFF) + 1)
        else:
            data = data & 0x0fff
        return data / 16.0
```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python

(env)pi@raspberrypi:~ grove_high_accuracy_temperature 
Grove - I2C-High-Accuracy-Temperature を挿入してください
  Grove-Base-Hat の任意の I2C スロットに接続してください
温度を検出中...
24.5 Celsius
24.5 Celsius
24.375 Celsius
^CTraceback (most recent call last):
  File "grove_high_accuracy_temperature.py", line 54, in <module>
    main()
  File "grove_high_accuracy_temperature.py", line 50, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムは **ctrl+c** を押すことで終了できます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - I2C 高精度温度センサー(MCP9808) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808.zip)
- **[Zip]** [Seeed MCP9808 ライブラリ](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/Grove_Temperature_sensor_MCP9808-master.zip)
- **[PDF]** [MCP9808 のデータシート](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/MCP9808_datasheet.pdf)
- **[PDF]** [2N7002A のデータシート](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)
- **[PDF]** [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## プロジェクト

この製品の紹介ビデオです。簡単なデモを含んでおり、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HQr6jSmfJs0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>