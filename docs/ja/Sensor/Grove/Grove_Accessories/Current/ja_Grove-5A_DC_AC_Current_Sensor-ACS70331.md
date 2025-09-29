---
description: Grove - ±5A DC/AC電流センサー (ACS70331)
title: Grove - ±5A DC/AC電流センサー (ACS70331)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-5A_DC_AC_Current_Sensor-ACS70331
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-preview.png" /></div>

Grove - ±5A DC/AC電流センサー (ACS70331) は、ACS70331をベースにした高精度のDC/AC電流センサーです。ACS70331EESATR-005B3は、&lt;5Aの電流検知用途向けのAllegro社製高感度電流センサーICです。このセンサーは、従来のホール効果センサーよりも25倍感度が高い巨大磁気抵抗（GMR）技術を採用しており、低抵抗の統合型一次導体を流れる電流によって生成される磁場を検知します。

Grove - ±5A DC/AC電流センサー (ACS70331) は、DC電流とAC電流の両方を最大5Aまで測定でき、基本感度は200mV/Aです。

:::tip
以下の**[Resources](#jump)**セクションに、電流に関する測定データ表がありますので参考にしてください。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- DCおよびAC負荷に対応
- 1MHz帯域幅、応答時間&lt;550ns
- 低ノイズ：1MHzで8mA(rms)
- 1.1mΩの一次導体抵抗により低電力損失を実現
- 高DC PSRRにより、低精度の電源やバッテリー（3～4.5V動作）での使用が可能
- アナログ出力

## 仕様

| パラメータ | 値 |
|---|---|
| 電源電圧 | 3.3V / 5V |
| 動作環境温度 | -40 – 85℃ |
| 保管温度 | -65°C – 125°C |
| 動作電圧 | &lt;100V |
| 電流検知範囲 | 0 – 5A |
| 感度 | 200mV/A (Typ.) |
| 出力インターフェース | Groveアナログ |
| 入力インターフェース | スクリュー端子 |

## 動作原理

電流検知には直接検知と間接検知の2種類があります。分類は主に電流を測定するために使用される技術に基づいています。

**直接検知:**

- オームの法則

**間接検知:**

- ファラデーの誘導法則
- 磁場センサー
- ファラデー効果

Grove - ±5A DC/AC電流センサー (ACS70331) は磁場センサー技術を使用しています。そして、磁場センサー技術には以下の3種類があります：

- ホール効果
- フラックスゲートセンサー
- 磁気抵抗電流センサー

Grove - ±5A DC/AC電流センサー (ACS70331) は磁気抵抗電流センサー原理（GMRとも呼ばれる）に基づいています。磁気抵抗（MR）は、磁場が加えられると抵抗が放物線状に変化する2端子デバイスです。磁場によるMRの抵抗変化は磁気抵抗効果として知られています。

ACS70331 QFNパッケージの内部構造は図1に示されています。ダイは一次電流経路の上に配置されており、磁場がダイ上のGMR要素と平面内で生成されます。GMR要素1と2は、正のIP電流が流れる場合に+X方向の磁場を検知し、GMR要素3と4は、正のIP電流が流れる場合に-X方向の磁場を検知します。これにより、電流の差動測定と外部の迷走磁場の除去が可能になります。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>図1</b>. <i>ACS70331内部構造</i></figcaption>
</figure>
</div>

4つのGMR要素は、図2に示されるようにウィートストンブリッジ構成で配置されており、ブリッジの出力は4つの要素によって検知される差動磁場に比例し、共通磁場を除去します。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>図2</b>. <i>ウィートストンブリッジ構成</i></figcaption>
</figure>
</div>

## ハードウェア概要

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>図3</b>. <i>ピン配置</i></figcaption>
</figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

:::caution
テスト中にモジュールに人間の体が触れることは禁止されています。そうしないと感電の危険があります。
:::

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | ベースシールド | ±5A DC/AC電流センサー (ACS70331)|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とベースシールドの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルはデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### DCデモ

##### ハードウェア接続

- **ステップ1.** Grove - ±5A DC/AC電流センサー (ACS70331) をベースシールドの**A0**ポートに接続します。

- **ステップ2.** テストする回路の正極と負極を、ネジ端子の対応する正極と負極に接続します。

:::tip
正極と負極を逆に接続すると、読み取り値が逆になります。このセンサーは使用前にキャリブレーションが必要ですので、最初に回路の電源を入れないでください。
:::

- **ステップ3.** Grove - ベースシールドをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" /></a></p>
  <figcaption><b>図4</b>. <i>このデモではDC電源を使用しています。最初に電流を0Aに設定するか、電源を入れないでください。</i></figcaption>
</figure>
</div>

##### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ1.** Githubから[Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor)ライブラリをダウンロードします。

- **ステップ2.** `/example/`フォルダ内にデモコードがあります。ここでは[Grove - ±5A DC/AC Current Sensor (ACS70331)](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_5A_DC_Current_Sensor/Grove_5A_DC_Current_Sensor.ino)を例に取ります。**Grove_5A_DC_Current_Sensor.ino**をクリックしてデモを開くか、以下のコードをコピーしてください：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
// OLEDディスプレイが必要です
// ピンA0を使用
#define Pin A5

// 500回の平均を取る

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mAごとに200mV 


float Vref = 1508;

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // 500回値を読み取る：
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // 次のループまで2ミリ秒待つ
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // オンボードADCは10ビット
  // 異なる電源は異なる基準電圧をもたらす
  // 例：2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  // 無負荷時、Vref=初期値
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 対応する電流を計算
  float current = (voltage - Vref) * sensitivity;

  // 電圧（mV）を表示
  // この電圧は電流に対応するピン電圧
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // 電流（mA）を表示
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // 次の読み取りのためにsensorValueをリセット
  sensorValue = 0;
  // 1秒ごとに読み取る
  delay(1000);
}

```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定してください。

- **ステップ 5. キャリブレーション**  
        電流が流れていない場合でも、センサーは出力値を持ちます。この値を **ゼロオフセット** と呼びます。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" /></a></p>
  <figcaption><b>図 5</b>. <i>このボードのゼロオフセットは 595.70mV で、電流に換算すると -4561.48mA です</i></figcaption>
</figure>
</div>

ゼロオフセットが存在するため、電流が流れていない場合でもセンサーは値を読み取ります。そのため、これを補正するために **Vref** というパラメータを設定します。このパラメータは上記のコードブロックで確認できます。

32行目:

```cpp
float Vref = 1508; 
// Vref はゼロドリフト値です。使用する前に実際に測定した値にこの値を変更する必要があります。
```

デモコードでは Vref を 1508 に設定していますが、ゼロオフセット値はボードごとに異なります。このデモで使用しているボードの値は 595.70 です。したがって、21行目を次のように変更します：

```cpp
float Vref = 595.70;
```

その後、コードを保存して再度アップロードします。ステップ 2 とステップ 3 に従ってください。次に確認してみましょう：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" /></a></p>
  <figcaption><b>図 6</b>. <i>現在のゼロオフセットが 0.02mA に変わりました</i></figcaption>
</figure>
</div>

電流出力が 0mA または小さな値になった場合、キャリブレーションが完了したことを意味します。

- **ステップ 6.** これで準備完了です。電流を供給してください。自由に使用できますが、これは 5A 電流センサーであることを忘れないでください。電流は 5A を超えてはいけません！  

結果の計算式を知りたい場合は、[FAQ Q1](#faq) を参照してください。

#### AC デモ

:::caution
AC 電源を使用する場合は、安全に注意し、感電を避けてください。
:::

ハードウェア接続とキャリブレーション部分については、[DC デモ](#dc-demo) を参照してください。唯一の違いはコードです。AC 負荷には以下のコードを使用してください。

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
// OLED ディスプレイが必要です
// ピン A0 を使用
#define Pin A5

// 500 回の平均を取る

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; // 1000mA あたり 200mV 


// float Vref = 244;
float Vref = 1494;

void setup() 
{
  SERIAL.begin(9600);
}
static float tempval;
void loop() 
{

  // 500 回値を読み取る:
  for(int i=0;i<20;i++)
  {

  for (int i = 0; i < averageValue; i++)
  {
    int temp;
    temp= analogRead(Pin);
    if(temp>sensorValue)
    {
        sensorValue=temp;
    }
    delayMicroseconds(40);
  }
  tempval+=sensorValue;
  }

  sensorValue=tempval/20.0;
  tempval=0;
  // オンボード ADC は 10 ビットです 
  // 異なる電源供給により異なる基準値が生じます
  // 例: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  // 負荷がない場合、Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 対応する電流を計算
  float current = ((voltage - Vref) * sensitivity)*0.707;

  // 電圧 (mV) を表示
  // この電圧は電流に対応するピン電圧です
  
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  

  // 電流 (mA) を表示
  SERIAL.print("current: ")
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");


  // 次の読み取りのために sensorValue をリセット
  sensorValue = 0;

  // 1 秒ごとに読み取る
  delay(1000);
}

```

## FAQ

**Q1#** 現在の計算式は何ですか？

**A1:** [動作原理](#working-principle)が非常に複雑だと感じる場合は、簡単に説明します。テスト対象の回路内の電流が磁場を励起し、それによりGMR素子の抵抗値が変化します。そして、ブリッジ内の抵抗変化がチップの出力電圧の変化を引き起こします。この出力電圧を**V<sub>IOUT</sub>**と呼びます。

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sensは電流を出力電圧に変換する係数です。このモジュールでは200mA/Vです。  
> **I<sub>p</sub>**: I<sub>p</sub>はテスト対象の回路内の電流値で、単位はmAです。  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub>はI<sub>p</sub>が0mA（つまり、テスト対象の回路に電流が流れていない状態）のときの出力電圧で、単位はmVです。

以下が電流値の計算式です：

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

次に、図5を確認してみましょう。テスト対象の回路内の実際の電流値が0である場合でも、出力の電流値が0にならない理由を説明します。図5では、**initialValue**が595.70mVで、これは**V<sub>IOUT</sub>**です。また、電流は-4561.48mAで、これは**I<sub>p</sub>**です。**V<sub>IOUT(Q)</sub>**はコード内で設定した**Vref**です。図5では1508です。そして**Sens**は200mA/V、つまり200mA/1000mVです。では、計算してみましょう：

<div><p style={{textAlign: 'center'}}>
  {'{'}(595.70mV-1508mV ) / (200mA/1000mV){'}'} = -4561.50mA
</p></div>

したがって、図6では**Vref**を595.70に設定すると、**Ip**は0mAになります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## <span id="jump">リソース</span>

- **[ZIP]** [Grove - ±5A DC/AC Current Sensor (ACS70331) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip)
- **[PDF]** [ACS70331 データシート](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)
- **[PDF]** [測定データ](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove_±5A_DCAC_Current_Sensor_v1.1_measurement_data_20231214.xls)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>