---
title: Grove - ソリッドステートリレー V2
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Solid_State_Relay_V2/
slug: /ja/Grove-Solid_State_Relay_V2
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/main.jpg)

コイルを使用する代わりに、パッケージ化されたソリッドステートリレー（SSR）は、サイリスタやトランジスタなどのパワー半導体デバイスを使用しており、機械式リレーよりもはるかに高速なスイッチング速度を提供します。**Grove - ソリッドステートリレー V2**は、高品質な**G3MC202P**モジュールをベースにしており、5VDCで最大240VACを制御することができます。Groveインターフェースを利用することで、ArduinoとSSRを非常に簡単に使用することができます。

異なる用途に応じて、一連のソリッドステートリレーをご用意しています。

Grove - ソリッドステートリレー V2

[Grove - 2チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay)

[Grove - 4チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-4-Channel_Solid_State_Relay)

[Grove - 8チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - ソリッドステートリレー V2 | 初版                                                                                               | 2018年8月      |

## 特徴

- 機械式リレーに対する利点:

  - ソリッドステートリレーは、電気機械式リレーと比較してはるかに高速なスイッチング速度を持ち、摩耗する物理的な接点がありません
  - 完全に静音の動作
  - 物理的な接点がないため、スパークが発生せず、爆発性環境での使用が可能で、スイッチング中にスパークが発生しないことが重要です
  - 可動部品がなく、接点が摩耗したり炭素が蓄積したりしないため、何度も作動しても寿命が延びます
  - PCB、端子、ヒートシンクを一体化したモノブロック構造のコンパクトで薄型のSSRは、機械式リレーよりもはるかに小型で、より多くのチャンネルを統合可能

- 欠点:

  - クローズ時に高い抵抗（熱を発生）と電気ノイズの増加
  - オープン時に低い抵抗と逆漏れ電流
  - AC負荷でのみ動作

## 仕様

|項目|値|
|---|---|
|動作入力電圧|4~6V|
|定格入力電圧|5V|
|定格負荷電圧|100～240 VAC 50/60 Hz|
|負荷電圧範囲|75～264 VAC 50/60 Hz|
|負荷電流|0.1～2 A|
|漏れ電流|最大1.5 mA（200 VAC時）|
|絶縁抵抗|最小1,000 MΩ（500 VDC時）|
|動作時間|負荷電源サイクルの1/2 + 最大1 ms|
|リリース時間|負荷電源サイクルの1/2 + 最大1 ms|
|保存温度|-30°C～100°C（結露や氷結なし）|
|動作温度|-30°C～80°C（結露や氷結なし）|
|動作湿度|45%～85%RH|
|入力インターフェース|デジタル|
|出力ポート|DIPメスブルー2ピン|
|ゼロクロス|対応|
|認証|UL / CSA|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 23mm|
|重量|8.2g|
|パッケージサイズ|長さ: 120mm 幅: 65mm 高さ: 52mm|
|総重量|132g|

:::note
        **漏れ電流**に注意してください。1.5mAは低電力LEDを駆動するのに十分な強さがあるため、リレーがオフのときでもLEDが微かに光る場合があります。
:::

## 応用例

- 低遅延のスイッチングが必要な操作、例：ステージライトの制御
- 高い安定性が必要なデバイス、例：医療機器、交通信号
- 防爆、防腐、耐湿が必要な状況、例：石炭産業、化学産業

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/PIN_map_.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** はリレーモジュールです。**INT+** と **INT-** の間に 5V の電圧が加えられると、リレーがオンになります。その結果、**LOAD1** が **LOAD2** に接続されます。NPN トランジスタ **Q1**（BC817-40）を使用して、**INT+** と **INT-** の間の電圧を制御します。

**CTR** は Arduino や他のボードからの制御信号です。10k の抵抗 **R2** によってプルダウンされています。信号がない場合、**Q1** の「ゲート」（ポート 1）は 0V となり、Q1 はオフになります。そのため、K1 もオフになります。**CTR** が 5V になると、Q1 がオンになります。K1 の **INT-** はシステムの GND に接続され、**INT+** と **INT-** の間に 5V が加わるため、K1 がオンになり、**LOAD1** が **LOAD2** に接続されます。

:::note
このセクションでは回路図の一部のみを示しています。完全なドキュメントについては [Resources](#リソース) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::note
上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Solid State Relay V2 |
|----------------|-------------|------------------------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - Solid State RelayをGrove-Base Shieldのポート**D7**に接続します。

- **ステップ 2.** ワイヤーを1本切断し、一端を**LOAD1**に、もう一端を**LOAD2**に接続します。

- **ステップ 3.** **LOAD1**を電源に接続し、**LOAD2**をファンに接続します。

- **ステップ 4.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 5.** Micro-USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/connect.jpg)

#### ソフトウェア

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** Arduino IDEを開き、新しいファイルを作成します。以下のコードをArduino IDEの新しいスケッチにコピーするには、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックするだけです。

```cpp
#include <Arduino.h>
uint8_t pin = 7;
void setup() {
  pinMode(pin, OUTPUT);}
void loop() {
  digitalWrite(pin, HIGH);
  delay(5000);
  digitalWrite(pin, LOW);
  delay(5000);
}
```

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::tip
    オンボードLEDが交互に点灯および消灯し、ファンが交互にオンおよびオフになるのが確認できます。
:::

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/Grove-Solid_State_Relay_V2_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Solid State Relay V2 eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/Grove-Solid_State_Relay_V2_Eagle.zip)
- **[PDF]** [G3MC202P のデータシート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## プロジェクト

こちらはこの製品の紹介ビデオです。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>