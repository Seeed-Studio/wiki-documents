---
description: Grove - 光・ジェスチャー・カラー・近接センサー (TMG39931)
title: Grove - 光・ジェスチャー・カラー・近接センサー (TMG39931)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/main.jpg" /></div>

Grove - 光・ジェスチャー・カラー・近接センサーは、TMG39931をベースとした製品で、ジェスチャー検出、近接検出、デジタル環境光センサー（ALS）、カラーセンサー（RGBC）、および放送用の光パターン生成/送信を特徴としています。この4-in-1センサーは、周囲環境からデータを収集し、I2Cバスを介して転送します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。光強度検出のための高性能で堅牢なS2102ワイヤレス光強度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a></td>
    </tr>
  </tbody></table>

## 特徴

- 単一デバイスに統合された光学ソリューション
- 周囲光の検知
- UVおよびIRブロッキングフィルター
- 複雑なジェスチャー検知
- 暗いガラスの背後での動作に理想的 - 高感度
- 近接検知
- バーコードパターンの生成と送信
- 単一の内部LEDの二重使用
- 一貫した読み取りを提供するように調整済み

## 仕様

|項目|値|
|---|---|
|供給電圧|3.3V / 5V|
|動作温度| -30～85℃|
|保存温度| -40～85℃|
|最大ルクス [klx]|60|
|インターフェース|I2C|
|I2Cアドレス|0x39|

## 主な用途

- ジェスチャー検知
- 色検知
- 周囲光検知
- 携帯電話のタッチスクリーン無効化
- 機械式スイッチの置き換え
- 印刷バーコードのエミュレーション

## 動作原理

**ジェスチャー検知**

ジェスチャー検知は、4方向のフォトダイオードを使用して統合LEDから発せられる反射IRエネルギーを検知し、物理的な動きの情報をデジタル情報に変換します。

**近接検知**

近接検知機能は、統合LEDから発せられる反射IRエネルギーをフォトダイオードで検知することで物体を検知します。

**デジタル周囲光検知および色検知**

色およびALS検知機能は、赤、緑、青、およびクリア光の強度データを提供します。R、G、B、C各チャンネルにはUVおよびIRブロッキングフィルターがあり、専用のデータコンバーターが16ビットデータを同時に生成します。このアーキテクチャにより、デバイスは周囲光を正確に測定し、色を検知することが可能となり、照度や色温度の計算、ディスプレイバックライトの制御、色度の調整を実現します。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) |
|----------------|-------------|-------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com)|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、Groveケーブルが付属しています。万が一Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Light&Gesture&Color&Proximity Sensor(TMG39931)をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/withard.jpg" /></div>

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

:::tip
ジェスチャー機能はまだサポートされていません。この機能にはAMSが提供するアルゴリズムが必要です。AMSからのサポートを受け次第、このライブラリを更新します。
:::

**例 1**

- **ステップ 1.** [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開くには、以下の3つの方法があります：
    1. Arduino IDEで直接開く：**File --> Examples --> Seeed TMG3993(Grove - Light&Gesture&Color&Proximity Sensor) --> Example1-ProximityPullRaw**のパスを使用します。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard1.png" /></div>

    2. コンピュータで開く：**XXXX\Arduino\libraries\Seeed_TMG3993-master⁩\⁨examples⁩\Example1-ProximityPullRaw⁩⁩\Example1-ProximityPullRaw.ino**フォルダ内の**basic_demo.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。

    ![](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard2.png)

    3. または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーします。

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PVALID)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //近接データを読み取るとステータスビットがクリアされます
    Serial.print("Proximity Raw: ");
    Serial.println(proximity_raw);
  }
  delay(1);
}
```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

:::tip
すべてが正常に動作すれば、近接センサーの生データ（uint16_t）がシリアルモニターから読み取れるはずです。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg1.png" /></div>

他の例を実行したい場合は、同様の手順を行うことができます。

**例 2**

この例では、近接を検出するために割り込み方式を使用します。

2つの閾値（低い値と高い値）を設定する必要があります。この範囲内の近接値は何もトリガーしませんが、この範囲外の値はイベントをトリガーします。具体的には、近接センサー値が低い閾値を10回以上下回ると、近接が取り除かれたイベントが発生し、近接センサー値が高い閾値を10回以上上回ると、近接が検出されたイベントが発生します。ここでの10回は、setInterruptPersistenceRegを使用して設定できます（setupRecommendedConfigForProximityの例を参照）。

- **ステップ 1.** [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開く方法は例1と同じですが、今回は"Example2-ProximityInterrupt"を選択してください。または以下のコードをArduino IDEにコピーしてください：

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;
int last_interrupt_state = -1;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.setProximityInterruptThreshold(25, 150);  //5cm未満で近接イベントがトリガーされます
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PINT)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //近接データを読み取るとステータスビットがクリアされます

    if (proximity_raw >= 150 && last_interrupt_state != 1) {
      Serial.println("Proximity detected!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 1;
    } else if (proximity_raw <= 25 && last_interrupt_state != 0) {
      Serial.println("Proximity removed!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 0;
    }

    // 割り込みビットをクリアすることを忘れないでください
    tmg3993.clearProximityInterrupts();
  }
  delay(10);
}

```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

コードをSeeeduinoにアップロードした後、シリアルモニタで以下のような出力が表示されるはずです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg2.png" /></div>

**例3**

この例では、R、G、B、Cセンサーの値を読み取ります。Cは、チップのデータシートで非色フィルタクリアチャネルとして定義されています。この例では、センサーのアプリケーションノートに記載されている式に基づいて、周囲光のLux値も計算します。

- **ステップ1.** [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) ライブラリをGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。例1と同じ方法で例を開きますが、今回は「Example1」ではなく「Example3-Color-Light」を選択します。または、以下のコードをArduino IDEにコピーしてください：

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Color Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setADCIntegrationTime(0xdb); // 統合時間: 103ms
  tmg3993.enableEngines(ENABLE_PON | ENABLE_AEN | ENABLE_AIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_AVALID)
  {
    uint16_t r,g,b,c;
    int32_t lux, cct;
    tmg3993.getRGBCRaw(&r, &g, &b, &c);
    lux = tmg3993.getLux(r, g, b, c);
    // CCTの計算は`アプリケーションノート`に基づいています。
    // テスト結果から、誤差がある可能性があります。
    cct = tmg3993.getCCT(r, g, b, c);

    Serial.print("RGBC データ: ");
    Serial.print(r);
    Serial.print("\t");
    Serial.print(g);
    Serial.print("\t");
    Serial.print(b);
    Serial.println("\t");
    Serial.println(c);

    Serial.print("Lux: ");
    Serial.print(lux);
    Serial.print("\tCCT: ");
    Serial.println(cct);
    Serial.println("----");

    // 割り込みビットをクリアするのを忘れないでください
    tmg3993.clearALSInterrupts();
  }
  delay(100);
}

```

:::caution
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

コードをSeeeduinoにアップロードした後、シリアルモニタで以下のような出力が表示されるはずです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg3.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip)

- **[Zip]** [Grove - Light&Gesture&Color&Proximity Sensor(TMG39931) ライブラリ](https://github.com/Seeed-Studio/Seeed_TMG3993/archive/master.zip)

- **[PDF]** [TMG39931 データシート](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/TMG3993.pdf)

- **[PDF]** [PDF版 WIKI](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>