---
title: Grove - 差動アンプ v1.2
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Differential_Amplifier_v1.2/
slug: /ja/Grove-Differential_Amplifier_v1.2
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Grove-Differential_Amplifier_v1.2.jpg)

このGroveモジュールは、精密な差動入力増幅用に設計されています。センサーの差動信号をこのモジュールのオスピンを通じて入力すると、ArduinoはGroveインターフェースから正確に増幅された出力を受け取ることができます。ゲインスケールファクターは選択可能で、基板上のスイッチを使用して35倍または1085倍の増幅を得ることができます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

特徴
-------

- 高精度な増幅
- 選択可能なスケールファクター
- Arduinoで簡単に読み取れる

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

用途
-----------

- データ収集
- バッテリー駆動システム
- 圧力および温度ブリッジアンプ
- 汎用計測

仕様
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
典型
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th colspan="2" scope="row">
動作電圧
</th>
<td>
2.7
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
入力電圧
</th>
<td>
0.1
</td>
<td>
\\
</td>
<td>
(Vcc-0.8)/ゲイン
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th colspan="2" scope="row">
出力電圧
</th>
<td>
0
</td>
<td>
\\
</td>
<td>
Vcc-0.80
</td>
<td>
mV
</td>
</tr>
<tr align="center">
<th rowspan="2">
ゲイン
</th>
<td>
35を選択
</td>
<td>
/
</td>
<td>
35
</td>
<td>
/
</td>
<td colspan="2" rowspan="2">
/
</td>
</tr>
<tr align="center">
<td>
1085を選択
</td>
<td>
/
</td>
<td>
1085
</td>
<td>
/
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記でサポートされているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

**1. センサーの選択**

アンプはmAスケールの信号をAスケールに変換できます。使用する前に、センサーの出力範囲がmAスケールであることを確認してください。例えば、[重量センサー](/ja/Weight_Sensor_Load_Cell_0-500g)がその一例です。

**2. コネクタの改造**

重量センサーをアンプのオスピンに接続するには、センサーのワイヤーにメスコネクタをはんだ付けする必要があります。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Solder.jpg)

**3. ハードウェアの接続**

以下の図のように、重量センサーをアンプに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Connect5.jpg)

**4. 測定**

以下のデモコードをArduino IDEにコピーしてアップロードします。

```
    void setup()
    {
      Serial.begin(9600);
      Serial.println("start");
    }

    void loop()
    {
      int i;
      int value;
      float V,Vo;
      float Sum=0;
      for(i=0;i<10;i++)
      {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
      }
      Vo=Sum/10;
      Serial.print("出力スコア:");
      Serial.println(Vo);
      delay(1000);
    } 
```

シリアルモニターを通じて増幅された信号を確認できます。入力信号の値については、VIN+とVIN-間の電圧差をマルチメーターで測定する必要があります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [v1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip)
- [v1.2 回路図](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2.pdf)
- [INA132 データシート](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Ina132.pdf)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Differential_Amplifier_v1.2 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>