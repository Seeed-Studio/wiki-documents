---
description: Grove - マグネットスイッチ
title: Grove - マグネットスイッチ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Magnetic_Switch
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - Magnetic Switch
category: Sensor
bzurl: https://seeedstudio.com/Grove-Magnetic-Switch-p-744.html
oldwikiname: Grove_-_Magnetic_Switch
prodimagename: Magnetic_Switch.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020038 1.jpg
surveyurl: https://www.research.net/r/Grove-Magnetic_Switch
sku: 101020038
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg)

これは Grove インターフェース互換のマグネットスイッチモジュールです。CT10 密閉型リードスイッチをベースにしています。CT10 は単極単投（SPST）タイプで、通常開のルテニウム接点を持っています。このセンサーは両端型であり、電磁石、永久磁石、またはその両方の組み合わせで作動させることができます。マグネットスイッチは、近接に基づいて回路をオン・オフするデザインを求める設計者にとって素晴らしいツールです。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

## 特徴

- Grove 互換インターフェース
- 2.0cm x 2.0cm の Grove モジュール
- 最小限の外部部品
- 10W 定格
- 頑丈な密閉構造

:::tip
Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 応用例

- 近接センサー
- セキュリティアラームセンサー
- レベルセンサー
- 流量センサー
- パルスカウンター

## 仕様

<table border="1">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<td>
動作電圧
</td>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
スイッチング電力
</td>
<td colspan="3">
10
</td>
<td>
W
</td>
</tr>
<tr align="center">
<td>
スイッチング電圧 AC、RMS値（最大）
</td>
<td colspan="3">
&lt; 140
</td>
<td>
V
</td>
</tr>
<tr align="center">
<td>
スイッチング電流 DC
</td>
<td colspan="3">
&lt; 500
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
キャリー電流 DC
</td>
<td colspan="3">
&lt; 0.5
</td>
<td>
A
</td>
</tr>
<tr align="center">
<td>
接触抵抗
</td>
<td colspan="3">
&lt;200
</td>
<td>
mΩ
</td>
</tr>
<tr align="center">
<td>
絶縁抵抗
</td>
<td colspan="3">
&gt;10<sup>6</sup>
</td>
<td>
MΩ
</td>
</tr>
<tr align="center">
<td>
動作温度
</td>
<td>
-40
</td>
<td>
-
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<td>
動作範囲
</td>
<td>
10
</td>
<td>
-
</td>
<td>
40
</td>
<td>
AT
</td>
</tr>
</table>

:::tip
Grove モジュールの詳細については [Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### デモンストレーション

モジュールのSIGピンは通常LOWを出力します。磁石がスイッチに近づくと、磁気スイッチが閉じてSIGピンがHIGHを出力します。

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Magnetic Switch |
|----------------|-------------|-------------------------|
|![画像](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **ステップ 2.** Grove - Magnetic SwitchをGrove-Base Shieldのポート**D2**に接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg)

:::note
Grove Base Shieldがない場合でも、以下のようにGrove-Magnetic-SwitchをSeeeduinoに直接接続することができます。
:::

| Seeeduino | Grove-Magnetic_Switch |
|-----------|------------------------|
| 5V/3.3V   | 赤                     |
| GND       | 黒                     |
| NC        | 白                     |
| D2        | 黄                     |

#### ソフトウェア

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/*******************************************************************************/

/* 磁気ピンとLEDピンのマクロ定義 */
#define MAGNECTIC_SWITCH 2
#define LED 13 // ArduinoまたはSeeeduinoのオンボードLED

void setup()
{
    pinsInit();
}

void loop() 
{
    if(isNearMagnet()) // 磁気スイッチが磁石に近い場合
    {
        turnOnLED();
    }
    else
    {
        turnOffLED();
    }
}

void pinsInit()
{
    pinMode(MAGNECTIC_SWITCH, INPUT);
    pinMode(LED, OUTPUT);
}

/* 磁気スイッチが磁石に近い場合はtrueを返し、 */
/* それ以外の場合はfalseを返します */
boolean isNearMagnet()
{
    int sensorValue = digitalRead(MAGNECTIC_SWITCH);
    if(sensorValue == HIGH) // センサー値がHIGHの場合
    {
        return true; // はい、trueを返します
    }
    else
    {
        return false; // いいえ、falseを返します
    }
}

void turnOnLED()
{
    digitalWrite(LED, HIGH);
}

void turnOffLED()
{
    digitalWrite(LED, LOW);
}
```

- **ステップ 2.** 磁石がスイッチに近づくとLEDが点灯します。試してみてください！

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Magnetic SwitchをBase ShieldのポートD2に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduino用Codecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了したら、磁石を磁気スイッチに近づけると、Arduinoの13ピンのLEDが点灯します。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - Magnetic Switch |
|--------------|--------------|-------------------------|
|![画像](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove-Magnetic-SwitchをGrovePi_Plusの**D2**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg)

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。

- **ステップ 2.** デモディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

- **ステップ 3.** コードを確認します（このデモはチルトスイッチと同じ使い方です）：

```
nano grovepi_tilt_switch.py   # "Ctrl+x"で終了 #
```

```py
import time
import grovepi

# Grove Tilt SwitchをデジタルポートD2に接続
# SIG,NC,VCC,GND
tilt_switch = 2

grovepi.pinMode(tilt_switch, "INPUT")

while True:
    try:
        print(grovepi.digitalRead(tilt_switch))
        time.sleep(0.5)

    except IOError:
        print("Error")
```

- **ステップ 4.** デモを実行します。

```
sudo python grovepi_tilt_switch.py
```

- **ステップ 5.** 結果

センサーの上に磁石を置くと、SIGピンがHIGHを出力します。

![](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png)

# Grove-磁気スイッチ v0.9

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-磁気スイッチ v1.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]**  [Grove-Magnetic Switch v0.9 回路図](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip)

- **[Eagle]**  [Grove-Magnetic Switch v1.3 回路図](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip)

- **[PDF]**  [Grove-Magnetic Switch v1.3 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf)

- **[データシート]**  [CT10 データシート](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Magnetic_Switch から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>