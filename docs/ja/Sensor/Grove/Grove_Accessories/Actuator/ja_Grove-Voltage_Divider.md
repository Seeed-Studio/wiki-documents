---
title: Grove - 電圧分圧器
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Voltage_Divider//
slug: /ja/Grove-Voltage_Divider
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_01.jpg)

Grove – 電圧分圧器は、外部電圧を測定するためのインターフェースを提供し、入力インターフェースに抵抗を接続する必要がありません。また、電圧ゲインはダイヤルスイッチで選択可能です。使いやすい設計となっています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Voltage-Divider-p-1472.html)


## 特徴
---
- 外部電圧インターフェースとGroveインターフェース
- 簡単に使用可能
- ゲインの調整が可能

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様
---

|項目|	最小値	|標準値	|最大値	|単位|
|---|---|---|---|---|
|動作電圧|	4.7	|5.0|	5.3	|VDC|
|測定精度	|/|≤1|/|	 %|
|外部電圧範囲	(ゲイン3選択時)|	0.3	|/|	12.9|	V|
|外部電圧範囲 (ゲイン10選択時)|1.0	|/	|43|V|
|寸法	|/|24X20|/|	mm|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべてのMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに
---
外部電圧を測定する際は、外部電圧をJ1に接続し、オンボードのGroveコネクタをArduino/Seeeduinoのアナログポートに接続します：
- モジュールを[Base Shield](https://wiki.seeedstudio.com/ja/Base_Shield_V2)のA0ポートにユニバーサルGroveケーブルで接続します。
- [Base Shield](https://wiki.seeedstudio.com/ja/Base_Shield_V2)をArduino/Seeeduinoに接続します。

このモジュールの精度をテストするために、いくつかの電圧入力をテストし、以下のデータを取得しました：

![](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/Voltage_Divider_Test_Score.jpg)

- ご覧の通り、入力が測定範囲内の場合、電圧分圧器は高い精度（&lt;1%、"OK"とマーク）を持っています。しかし、入力が範囲外の場合、精度が低下します（"NO"とマーク）。具体的な測定範囲については[仕様](https://wiki.seeedstudio.com/ja/Grove-Voltage_Divider/#specification)をご参照ください。

また、電圧分圧器の出力電圧がVCC（Grove動作電圧およびアナログ読み取りの基準）を超える場合、エラーを示すインジケータが点灯します。

- Arduinoのシリアルモニタを使用して、入力電圧値を測定できます。以下のデモコードをご覧ください：

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    long  sensorValue=analogRead(A0);
    long  sum=0;
    for(int i=0;i<1000;i++)
    {
        sum=sensorValue+sum;
        sensorValue=analogRead(A0);
        delay(2);
    }
    sum=sum/1000;

    Serial.print("ゲインを10に設定した場合、入力電圧：");
    Serial.println(10*sum*4980/1023.00);

    Serial.print("ゲインを3に設定した場合、入力電圧：");
    Serial.println(3*sum*4980/1023.00);

    delay(1000);
}
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - 電圧分圧器をBase ShieldのA0ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ3.** Seeeduino/ArduinoをUSBケーブルでPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[CodecraftをArduinoで使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/img/cc_Voltage_Divider.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
コードのアップロードが完了すると、シリアルモニタに電圧が表示されます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}></div>



## リソース
---
- [Grove - Voltage Divider Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove-Voltage_Divider_Eagle_File.zip)
- [LMV358ID データシート](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/LMV358ID_Datasheet.pdf)
- [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Voltage_Divider/res/Grove_Voltage_Divider_CDC_File.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>