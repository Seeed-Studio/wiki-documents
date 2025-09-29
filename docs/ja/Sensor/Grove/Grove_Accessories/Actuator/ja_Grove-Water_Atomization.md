---
title: Grove - 水霧化
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Water_Atomization/
slug: /ja/Grove-Water_Atomization
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg)

Grove - 水霧化は、アプリケーションで簡単に霧化器や霧化モジュールを開発するための優れたGroveモジュールです。いくつかの簡単なステップで霧化器をプロトタイプ化することができます。このモジュールはGroveインターフェースを備えており、多くのアプリケーションに簡単に適用できます。加湿器は基本的なアプリケーションとして構築可能であり、デジタル香り技術や霧化が必要なその他の状況で、より高度で興味深いオブジェクトを開発することができます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html)

特徴
--------

- 超音波で加熱。
- 新しいアプリケーションを簡単にプロトタイプ化。
- 幅広いアプリケーションに適用可能。
- 様々な興味深く、スマートでファッショナブルなアプリケーション向け。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

アプリケーションアイデア
-----------------

- 加湿器。
- 様々な状況での香り放出装置。
- スマートハウスアプリケーション向け。
- 消費者向け電子製品のスマートオブジェクト向け。

仕様
--------------

| パラメータ            | 値            |
|----------------------|----------------|
| 動作電圧            | 5.0V(DC)       |
| リップル(最大電力時) | ≤100 mV        |
| 最大電力            | 2W             |
| ピーク出力電圧      | 65±5V          |
| 動作周波数          | 105±5kHz       |
| チップ              | ETA1617, NE555 |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_overview_1200.jpg) -->

**Groveインターフェース**  
Seeeduinoボードなどのメイン制御ボードをドライバーボードに接続します。

**トランスデューサインターフェース**  
超音波トランスデューサをドライバーボードに接続します。

**Groveワイヤ**  
メイン制御ボードをドライバーボードに接続します。

### **部品リスト**

| 部品名                  | 数量       |
|-------------------------|------------|
| ドライバーボード        | 1個        |
| Groveワイヤ             | 1個        |
| 超音波トランスデューサプレート | 1個        |

始め方
-----------

### **必要な材料**

Seeeduino v4.2 x 1  
Grove - Base shield v2 x 1  
Grove - Wire x 1  

### **準備**

以下のガイドを参照して適切なIDEを構築してください：

:::note
今回はSeeeduinoを選択しました。
:::

- Windowsでの始め方  
- Mac OS Xでの始め方  

### **ハードウェア接続**

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

### **簡単なデモ**

:::note
  このデモではGrove - Touch Sensorも必要で、D5に接続します。
:::

1. 以下のコードをArduino IDEエディタにコピーします。

```
/*
  Grove霧化のデモコード。
  タッチして霧化を開始します。
  最終更新者: he
  作成者: xiaohe
*/

// setup関数はリセットまたはボードの電源を入れたときに一度だけ実行されます
void setup() {
    // デジタルピン13を出力として初期化
    pinMode(A5, OUTPUT); // A5を出力として設定
    pinMode(5, INPUT);   // デジタルピン5を入力ポートとして使用
}

// loop関数は永遠に繰り返し実行されます
void loop() {
    int D2Sig = digitalRead(5); // ピン5の信号を読み取る
    if (D2Sig == 1)
    {
        /* コード */
        digitalWrite(A5, HIGH);   // 霧化開始
        delay(10000);             // 10秒間待機
        digitalWrite(A5, LOW);    // 霧化停止
    }
}
```

2. トリミングした紙コップに水を入れ、ティッシュを置き、超音波トランスデューサをティッシュの上に置きます。

:::note
  底面は空洞のある側で、下向きにする必要があります。トランスデューサプレートの底面を水に沈め、上面を水の上に保ちます。ティッシュの役割は水をトランスデューサに導き、トランスデューサの上面を水の上に保つことです。
:::

3. コードをメイン制御ボードにアップロードします。

4. Groveタッチセンサーに触れると、蒸気が生成されるのが見えます。

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg)

:::caution
  トランスデューサのインターフェースピンには直接触れないでください。ドライヤーボードのピーク出力電圧は65Vになる可能性があります。
:::

![](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg)

:::caution
  インダクタ <span style={{fontWeight: 'bold'}}>L2</span>（上記の赤い矩形で示されています）は加熱されます。そのため、直接触れないでください。
:::

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Water AtomizationをポートD2に接続し、Grove - ButtonをBase ShieldのポートD5に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[CodecraftをArduinoで使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ 2.** 下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、ボタンを押すと水の霧化が開始されます。
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Eagle形式の回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip)
- [PDF形式の回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip)
- [Codecraft CDCファイル](https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip)

## プロジェクト

**スマート加湿器** 冬の部屋を快適にしましょう。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/taifur/smart-humidifier-dac66f/embed' width='350'></iframe>

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_Water_Atomizationから作成されました -->

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