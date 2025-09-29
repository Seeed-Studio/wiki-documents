---
description: Grove - 2-Channel Inductive Sensor(LDC1612)
title: Grove - 2-Channel Inductive Sensor(LDC1612)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-2_Channel_Inductive_Sensor-LDC1612
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/main.jpg)

Grove - 2-Channel Inductive Sensorは、Texas Instruments(TI)のLDC1612をベースにした28ビットのインダクタンスからデジタルへのコンバーター(LDC)で、誘導センサーソリューション向けに設計されています。複数のチャンネルとリモートセンシングのサポートにより、LDC1612は誘導センシングの性能と信頼性の利点を最小限のコストと電力で実現します。インダクタンスは、電流を流す導体の磁場が導体に作用することで生じる効果です。そのため、このセンサーはインダクタンスを検知することで、特に近くの金属などの導体の接近を検出することができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- マッチングされたセンサードライブを持つ2チャンネル
- 簡単操作：最小限の設定が必要
- 環境および経年変化補償をサポートする複数チャンネル
- >20cmのリモートセンサー位置で厳しい環境での動作をサポート
- コイルパラメータ：直径：16mm / 巻数：20

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|接合温度|-55～150℃|
|対応センサー周波数範囲|1kHz~10MHz|
|最適検出範囲|15mm|
|インターフェース|I2C|
|I2Cアドレス|0x2B(デフォルト)<br />0x2A(設定可能)|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|12g|

ADDRピンが低に設定されている場合、LDCのI2Cアドレスは0x2Aです。ADDRピンが高に設定されている場合、LDCのI2Cアドレスは0x2Bです。

## 主な用途

- 消費者向け、家電、自動車のノブ
- 線形および回転エンコーダ
- 家電、ウェアラブル、製造、自動車のボタン
- 製造および家電のキーパッド
- 消費者製品のスライダーボタン
- 産業および自動車の金属検出
- POSおよびEPOS
- 消費者および家電の流量計

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/pinout_back.jpg)

:::note
**1.** 提供されているコイルインダクタンスを使用しない場合は、APIを使用してRb(抵抗単位-kom)、L(インダクタンス単位-uH)、C(キャパシタンス単位-pf)を設定してください。センサーの対応する周波数レジスタを計算して設定するために使用されます。

**2.** センサーボードにはINTパッドがあります。変換が完了すると低レベルに切り替わり、それ以外の場合は高レベルのままですが、センサーの対応するレジスタを設定する必要があります。
:::

## 動作原理

LDC1612は、PCB銅トレースとコンデンサによって形成されるLCオシレーターのパラメータを測定することで動作します。

LDC1612は、磁気的にLCオシレーターと結合した導電性の物体が近づいたときに、LCオシレーションを維持するために必要なエネルギー量を測定することができます。オシレーター回路の電力損失は導電性物体のインピーダンスに比例し、インピーダンス値は物体の距離によって影響を受けるため、物体とLCオシレーター間の距離を測定するために使用できます。この場合、PCB銅トレースはインピーダンスセンサーとして機能します。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel Inductive Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-2-Channel-Inductive-Sensor-%28LDC1612%29-p-3223.html)|

:::note
 **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 2-Channel Inductive Sensor(LDC1612)をGrove-Base Shieldのポート **I^2^C** に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/With_ard.jpg)

次に、コインの距離検出コードを実行する方法を示します。他のプログラムを実行する場合も同様の手順です。

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

- **ステップ 1.** Githubから[Grove-2-Channel_Inductive_Sensor-LDC1612](https://github.com/Seeed-Studio/Seeed_LDC1612)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples -->Seeed Inductive Sensor LDC1612--> coin_test_demo**のパスを使用します。
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino1.png)

    2. コンピュータで開く：**XXXX\Arduino\libraries\examples\coin_test_demo\coin_test_demo.ino**フォルダ内の**basic_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/arduino2.png)

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

**コインデモ**
このプログラムは、コインと銅トレース間の距離を検出することができます。

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;
const u32 DISTANCE_00=44000000;  // 検出なし
const u32 DISTANCE_00_01=60000000;  // 距離:<1mm
const u32 DISTANCE_01_05=45000000;  // 距離:1mm~5mm
const u32 DISTANCE_05_10=44250000; // 距離:5mm~10mm
const u32 DISTANCE_10_15=44080000; // 距離:10mm~15mm
const u32 DISTANCE_15_20=44020000; // 距離:15mm~20mm

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("開始!");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("センサーを検出できません!");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /* センサーの状態を表示します。 */
    //sensor.get_sensor_status();

    /* チャンネル0の結果を取得して解析します。 */
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /* コインとセンサー間の距離をテストします。
    注意：精度は参考値です。
    テスト中はセンサーを吊り下げてください! */
    if(0!=result_channel1)
    {
        if(result_channel1<DISTANCE_00)
        {
            Serial.println("ここにはコインがありません!");
        }

        if(result_channel1>=DISTANCE_00_01)
        {
            Serial.println("コインとの距離は0~1mmです");
        }

        if(result_channel1<DISTANCE_00_01&&result_channel1>=DISTANCE_01_05)
        {
            Serial.println("コインとの距離は1~5mmです");
        }

        if(result_channel1<DISTANCE_01_05&&result_channel1>=DISTANCE_05_10)
        {
            Serial.println("コインとの距離は5~10mmです");
        }

        if(result_channel1<DISTANCE_05_10&&result_channel1>=DISTANCE_10_15)
        {
            Serial.println("コインとの距離は10~15mmです");
        }

        if(result_channel1<DISTANCE_10_15&&result_channel1>=DISTANCE_15_20)
        {
            Serial.println("コインとの距離は15~20mmです");
        }

        if(result_channel1<DISTANCE_15_20&&result_channel1>=DISTANCE_00)
        {
            Serial.println("コインとの距離は20mm以上です");
        }

    }
    
    delay(1000);
}


```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

:::tip
  すべてが正常に動作すれば、以下の結果が表示されます。
:::

```cpp

コイン間の距離は5〜10mmです
コイン間の距離は5〜10mmです
ここにコインはありません！
コイン間の距離は10〜15mmです
コイン間の距離は5〜10mmです
コイン間の距離は1〜5mmです
コイン間の距離は5〜10mmです
コイン間の距離は5〜10mmです

```

**基本デモ**

`basic_demo.ino` のコード

```cpp


#include "Seeed_LDC1612.h"

LDC1612 sensor;


void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("開始！");

    sensor.init();

    if(sensor.single_channel_config(CHANNEL_0))
    {
        Serial.println("センサーを検出できません！");
        while(1);
    }


}


void loop()
{
    u32 result_channel1=0;
    u32 result_channel2=0;

    /*センサーの状態を表示します。*/
    //sensor.get_sensor_status();

    /*チャンネル0の結果を取得して解析します。*/
    sensor.get_channel_result(CHANNEL_0,&result_channel1);

    /*センサーの結果値。変化に応じて多くのアプリケーションを作成できます。*/
    if(0!=result_channel1)
    {
        Serial.print("result_channel0 は ");
        Serial.println(result_channel1);
    }
    
    delay(1000);
}



```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```cpp

開始！
17:06:16.418 -> fsensor =3.74
17:06:16.418 -> result_channel0 は 44387993
result_channel0 は 44387847
result_channel0 は 43476136
result_channel0 は 43799295
result_channel0 は 48988429
result_channel0 は 48828492
result_channel0 は 48682647
result_channel0 は 48845443

```

**マルチチャンネルデモ**

この例では、複数のチャンネル測定を示します。LDC1612は2つのチャンネルをサポートしています。

以下のようにコイル1を接続することができます：

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/img/link.png)

`muti_channel_demo.ino` のコード

```cpp

#include "Seeed_LDC1612.h"
#include "math.h"

LDC1612 sensor;

void setup()
{
    Serial.begin(115200);
    delay(100);
    Serial.println("開始！");

    sensor.init();

    /*INT-PINを有効化し、測定完了後に割り込みを発生させます。*/
    //sensor.set_ERROR_CONFIG(0x01);

    /*複数チャンネルの使用例設定。*/
    if(sensor.LDC1612_mutiple_channel_config())
    {
        Serial.println("センサーを検出できません！");
        while(1);
    }
}


void loop()
{
    u32 result_channel0=0;
    u32 result_channel1=0;

    /*センサーの状態を表示します。*/
    //sensor.get_sensor_status();

    /*センサーの結果値。変化に応じて多くのアプリケーションを作成できます。*/
    sensor.get_channel_result(0,&result_channel0);
    sensor.get_channel_result(1,&result_channel1);

    if(0!=result_channel0)
    {
        Serial.print("result_channel0 は ");
        Serial.println(result_channel0);
    }
    if(0!=result_channel1)
    {
        Serial.print("result_channel1 は ");
        Serial.println(result_channel1);
    }
    delay(1000);
}



```

:::tip
        すべてが正常に動作すれば、以下の結果が表示されます。
:::

```cpp

開始！
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> fsensor =3.74
17:04:34.063 -> result_channel0 は 44399351
17:04:34.063 -> result_channel1 は 43599310
result_channel0 は 44648052
17:04:35.078 -> result_channel1 は 43803483
result_channel0 は 44786926
17:04:36.056 -> result_channel1 は 43990824
result_channel0 は 44266733
17:04:37.069 -> result_channel1 は 43305067
result_channel0 は 44767222
17:04:38.092 -> result_channel1 は 43553768
result_channel0 は 46081099
17:04:39.068 -> result_channel1 は 45089497
result_channel0 は 44681202
17:04:40.083 -> result_channel1 は 43207588
can't detect coil Coil Inductance!!!
17:04:41.098 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!
17:04:42.106 -> result_channel0 は 89478485
can't detect coil Coil Inductance!!!
17:04:43.081 -> result_channel0 は 49469095
result_channel0 は 51374493
17:04:44.113 -> result_channel1 は 49895644
can't detect coil Coil Inductance!!!
17:04:45.090 -> can't detect coil Coil Inductance!!!
can't detect coil Coil Inductance!!!

```

:::note
`basic_demo` と `muti_channel_demo` の例では、各出力がインダクタンスの強度に対応していることを覚えておいてください。出力とインダクタンスの強度の間には機能的な関係があります。さらに詳しい情報に興味がある場合は、Texas Instrument(TI)が提供する [LDC1612 データシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf) を参照してください。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/Grove%20-%202-Channel%20Inductive%20Sensor%20(LDC1612).zip)

- **[Zip]** [Grove - 2-Channel Inductive Sensor(LDC1612) ソフトウェアライブラリ](https://github.com/Seeed-Studio/Seeed_LDC1612/archive/master.zip)

- **[PDF]** [LDC1612 データシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_Inductive_Sensor-LDC1612/res/LDC1612.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>