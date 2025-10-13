---
description: Grove - Step Counter(BMA456)
title: Grove - Step Counter(BMA456)
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Step_Counter-BMA456
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg)

Grove - Step Counter(BMA456)は、非常に小型で、3軸の低重力高性能加速度モジュールであるBMA456をベースにしています。BOSCHの特別なアルゴリズムのおかげで、このモジュールを携帯型歩数計として開発しました。

信頼性が高く、コスト効率が良いだけでなく、非常に使いやすいです。このプラグアンドプレイモジュールを簡単にウェアラブルデバイスに追加することができます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html)

## バージョン

| 製品バージョン | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Step Counter(BMA456) | 初期リリース                                                                                               | 2018年10月      |

## 特徴

- オンチップFIFO
- 超低消費電力
- オンチップ割り込み
- プログラム可能な機能

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|加速度範囲|±2g, ±4g, ±8g, ±16g|
|感度|16384 @±2g / 8192 @±4g / 4096 @±8g / 2048 @±16g|
|インターフェース|I^2^C|
|I^2^Cアドレス|0x19(デフォルト) / 0x18(オプション)|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 10mm| 
|重量|3.2g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|9g|

## 主な用途

- 高さ制約のあるアプリケーション
- ウォーターマーク機能付きプラグアンドプレイ歩数計ソリューション
- フィットネスアプリケーション / アクティビティトラッキング
- ウェアラブルアプリケーションの電力管理
- ディスプレイのオン/オフとプロファイル切り替え
- ハードウェアボタンを使用しないユーザーインターフェース
- Eコンパスの傾き補正とデータ同期
- 高性能な角度測定

## ハードウェア概要

### ピンアウト

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg)

### 回路図

**電源**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg)

BMA456の典型的な電圧は1.8Vです。そのため、安定した1.8Vを供給するために[XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)チップを使用しています。XC6206P33の入力範囲は1.8Vから6.0Vまでなので、このモジュールをArduinoで3.3Vまたは5Vで使用することができます。

**双方向レベルシフター回路**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg)

これは、I^2^Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q6**と**Q5**はNチャンネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照することができます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Step Counter(BMA456) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
    
    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Step Counter(BMA456)をGrove-Base Shieldのポート **I^2^C** に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg)

:::note
        Grove Base Shieldがない場合、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - Step Counter(BMA456) |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄色              | SCL |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を確認することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_BMA456](https://github.com/Seeed-Studio/Seeed_BMA456)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下の3つの方法で例を開くことができます：
    1. Arduino IDEで直接開く：**File --> Examples --> Grove -Step Counter(BMA456) --> step_counter**のパスをたどります。
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg)
    
    2. コンピュータで開く：**XXXX\Arduino\libraries\Seeed_BMA456-master\examples\step_counter**フォルダ内の**step_counter.ino**をクリックします。**XXXX**はArduino IDEをインストールした場所です。
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg)
    
    3. または、以下のコードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックしてコードをコピーし、Arduino IDEの新しいスケッチに貼り付けます。

```cpp
#include "arduino_bma456.h"

uint32_t step = 0;

void setup(void)
{    
    Serial.begin(115200);
    Serial.println("BMA456 Step Counter");
    
    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);
    bma456.stepCounterEnable();
}

void loop(void)
{	
    step = bma456.getStepCounterOutput();

    Serial.print("Step: ");
    Serial.println(step);
    
    delay(1000);
}
```

:::note
        ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合があります。そのため、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニター** を開くには、**ツール -> シリアルモニター** をクリックします。または ++ctrl+shift+m++ キーを同時に押します。ボーレートを **115200** に設定してください。

:::success
     すべてが正常に動作している場合、シリアルモニターを開き、このセンサーを装着して歩いたり、歩行の姿勢を模倣して動かすと、以下のように表示される可能性があります:
:::

```cpp
BM
Step: 0
BMA456 Step Counter
Step: 0
Step: 0
...
...
Step: 18
Step: 20
Step: 22
Step: 24
Step: 26
Step: 28
Step: 30
Step: 32
Step: 34
Step: 36
Step: 38
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Step Counter(BMA456) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip)

- **[Zip]** [Seeed BMA456 ライブラリ](https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip)

- **[PDF]** [BMA456 データシート](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf)

- **[PDF]** [XC6206 データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## プロジェクト

この製品の紹介ビデオと簡単なデモです。ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>