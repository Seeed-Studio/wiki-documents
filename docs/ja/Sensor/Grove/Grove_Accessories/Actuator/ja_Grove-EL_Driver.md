---
title: Grove - EL Driver
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-EL_Driver/
slug: /ja/Grove-EL_Driver
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL Driverは、ELワイヤーを駆動するために設計されています。非常に小型のインバーターを統合しており、1本のGroveケーブルだけで簡単にELワイヤーを点灯させることができます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

バージョントラッカー
----------------------

| リビジョン | 説明                   | リリース日      |
|------------|------------------------|-----------------|
| v1.0       | 初回公開リリース       | 2014年12月11日 |

#### **対応するELワイヤー:**

- [EL Wire-Green 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [EL Wire-Red 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [EL Wire-Blue 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [EL Wire-Yellow 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [EL Wire-White 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

特徴
--------

- Grove互換インターフェース
- 3.3V/5V対応
- 統合インバータートランス
- 入力電流: 最大300mA (負荷による)
- 最大対応EL容量: 15nF

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

使用方法
---------

### Arduinoで遊ぶ

ここでは、Arduinoを使用してLEDの状態を制御する方法を示します。

1. Grove - EL DriverをBase Shieldの**デジタルポート2**に4ピンGroveケーブルで接続します。必要に応じて他の有効なデジタルポートに変更することも可能で、その場合はポートの定義も変更する必要があります。製品パッケージに付属しているケーブルを使用して、ELワイヤーをEL Driverの**J1**ポートに接続します。

2. Arduino/Seeeduinoに接続します。USBケーブルを使用してボードをPCに接続します。

3. デモコードをスケッチにコピーし、ArduinoまたはSeeeduinoボードにアップロードします。ELワイヤーが1秒ごとに点滅するのが確認できます。

```
/*************************   2014 Seeedstudio   **************************
* File Name          : GroveELDriverDemoCode.ino
* Author             : Seeedteam
* Version            : V1.0
* Date               : 11/12/2014
* Description        : Demo code for Grove - EL Driver
*************************************************************************/
 
#define ELPin 2 //connect EL Driver to digital pin2
void setup() {                
  // initialize the digital pin2 as an output.
  pinMode(ELPin, OUTPUT);     
}
 
void loop() {
  digitalWrite(ELPin, HIGH);   // set the EL Wire on
  delay(500);               // for 500ms
  digitalWrite(ELPin, LOW);   // set the EL Wire off
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - EL DriverをBase ShieldのポートD2に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 下の画像のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開きます。

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、ELワイヤーが点滅するのが確認できます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [sch_pcb_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [sch_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [CodeCraft Library](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_EL_Driverから作成されました -->

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