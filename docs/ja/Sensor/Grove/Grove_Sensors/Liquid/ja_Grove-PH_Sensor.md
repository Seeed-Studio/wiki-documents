---
description: Grove - PHセンサー
title: Grove - PHセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-PH_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - PHセンサー
category: センサー
bzurl: https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html
oldwikiname:  Grove - PHセンサー
prodimagename: Phsensor.jpg
surveyurl: https://www.research.net/r/Grove_PH_Sensor
sku:  101020065
--- -->
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/Phsensor.jpg)

水溶液のpHを測定する必要がありますか？ここでは、Grove - PHセンサーが役立ちます。このセンサーは、pH電極によって測定された水素イオン濃度に対応する信号を出力できます。コントローラーに直接接続できるため、いつでもpH値を観察することができます。このデバイスは、廃水、汚水などの場面でのpH測定に使用できます。

:::note
国内注文のみ有効です。住所が中国国内でない場合は注文しないでください。
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PH-Sensor-p-1564.html)

## 特徴

---

* Groveインターフェース
* 広い測定範囲
* 使用寿命は2年
* 等電点: pH 7.00 (0 mV)

## 仕様

---
<center>
<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">項目</th>
      <th scope="col">典型値</th>
      <th scope="col">単位</th>
    </tr>
    <tr>
      <th scope="row">動作電圧</th>
      <td>5</td>
      <td>V</td>
    </tr>
    <tr>
      <th scope="row">等電点</th>
      <td>7±0.5</td>
      <td>pH</td>
    </tr>
    <tr>
      <th scope="row">測定範囲</th>
      <td>0~14</td>
      <td>pH</td>
    </tr>
    <tr>
      <th scope="row">pHセンサー出力範囲</th>
      <td>-414.12 ~ 414.12</td>
      <td>mV</td>
    </tr>
    <tr>
      <th scope="row">測定精度</th>
      <td>&lt;15</td>
      <td>mV</td>
    </tr>
    <tr>
      <th scope="row">応答時間</th>
      <td>&lt;2</td>
      <td>分</td>
    </tr>
    <tr>
      <th scope="row">温度範囲</th>
      <td>0~60</td>
      <td>℃</td>
    </tr>
  </tbody>
</table></center>

## 回路図

---
![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Schematic.jpg)

## 使用方法

---
pHセンサーはpH値を検出するのに役立ちます。pH測定の成功は、pHセンサーの校正とメンテナンスに依存します。では、校正方法から始めましょう。

### 校正

* 使用前に、純水または脱イオン水で洗浄し、紙（麻のない紙）で水を吸い取ります。拭くことは避けてください。pH電極を拭くと誤差が生じる可能性があります。以下の画像を参考にしてください：

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_Usage.jpg)

この画像では、pH 9.18の[緩衝液](http://www.chemguide.co.uk/physical/acidbaseeqia/buffers.html)が参照液として使用されており、測定値が正確かどうかを確認するのに役立ちます。
次に、測定値を確認しましょう。

* デモコードをアップロードします。アップロード方法がわからない場合は[こちら](/ja/Upload_Code)をクリックしてください。

```
//機能: PHセンサーの出力電圧値を取得し、
//      PH値に変換してシリアルモニターに表示します。
#define Vref 4.95
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    int sensorValue;
    int m;
    long sensorSum;
    for(m=0;m<50;m++)
    {
        sensorValue=analogRead(A0);//PHセンサーをA0ポートに接続
        sensorSum += sensorValue;
    }
    sensorValue =   sensorSum/50;
    Serial.print(" PH値は");
    Serial.println(7-1000*(sensorValue-372)*Vref/59.16/1023);

}
```

* シリアルモニターを開いて結果を確認します：

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/img/PH_Sensor_result.jpg)

* 結果を確認すると、テスト結果が実際の値と一致していることがわかります。これで水溶液のpH測定を開始できます。参照液のpH値と測定されたpH値の間に誤差がある場合は、pH電極を数時間浸してから再校正することをお勧めします。[こちら](http://www.ehow.com/how_4796148_calibrate-ph-meter.html)は校正方法の参考ガイドです。

**注意:** 測定値が期待値よりも高いまたは低い場合、その原因は不適切なVref値である可能性があります。VrefはArduinoの動作電圧です。

pH値と出力電圧の関係：
<font color="blue">E=59.16(mV/PH)</font>

### 洗浄と保管

pH電極はpH機器の中で最も敏感な部品です。pH電極が乾燥したり凍結したりすることは許されません。適切なメンテナンスを行うことで、信頼性の高い測定を長年提供できます。[pH電極のケアとメンテナンス](http://www.eutechinst.com/techtips/tech-tips26.htm)は校正と同様に重要です。使用していないときは、洗浄して3mol KCl容器に保管してください。3mol KClは自分で準備する必要があります。以下の情報を参考にしてください：

<font color="red">3 mol * ( 74.55 g / 1 mol KCl) = 223.65 g KCl)</font>に基づき、
3 mol / LのKCl溶液を準備するには、223.65 gのKClを水に溶かし、混合してから1 Lの目盛りまで水を加えます。

これが役立つことを願っています！

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - PHセンサー Eagleファイル](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_Eagle_File.zip)

* [Grove - PHセンサー回路図（PDF）](https://files.seeedstudio.com/wiki/Grove-PH_Sensor/res/Grove-PH_Sensor_v1.0.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験をスムーズにするために、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>