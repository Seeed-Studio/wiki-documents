---
description: Grove - Differential Amplifier v1.0
title: Grove - Differential Amplifier v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Differential_Amplifier_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - Differential Amplifier v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - Differential Amplifier v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
--- -->
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg)

ブレッドボード上で増幅器ICをセットアップするのが面倒で、繰り返す必要のない作業だと感じたことはありませんか？このGroveモジュールは、全体の動作回路を統合することで、ICをセットアップする際の煩雑さを解消します。このモジュールは、精密な差動入力増幅用に設計されています。センサーの差動信号をこのモジュールにオスピンを通じて入力すると、ArduinoはGroveインターフェースから正確に増幅された出力を受け取ることができます。ゲインスケールファクターは選択可能で、ボード上のスイッチを使用して304倍または971倍の増幅を得ることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

## 特徴

---

* 高精度の増幅

* 選択可能なスケールファクター

* Arduinoで簡単に読み取れる

* 強力な入力保護：±40V

## 応用例

---

* データ収集

* バッテリー駆動システム

* 圧力および温度ブリッジ増幅器

* 汎用計測機器

## 仕様

---
| 項目 | | 最小値 | 典型値 | 最大値 | 単位 |
|------|---|--------|--------|--------|------|
| 動作電圧 | | 2.7 | 5.0 | 36 | VDC |
| 入力電圧 | | 0.1 | \ | (Vcc-0.8)/ゲイン | mV |
| 出力電圧 | | 0 | \ | Vcc-0.80 | mV |
| ゲイン | 304選択時 | 297.92 | 304 | 310.08 | / |
| | 971選択時 | 951.58 | 971 | 990.42 | / |

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg)

**J2：**信号源インターフェース

**J1：**出力インターフェース、標準Groveインターフェース

**R1：**62Ωゲイン抵抗

**R3:** 200Ωゲイン抵抗

**U1:** INA125 IC、計測増幅器

## 使用方法

---
**1. センサーの選択**

増幅器はmAスケールの信号をAスケールに変換することができます。使用する前に、センサーの出力範囲がmAスケールであることを確認してください。例えば、[重量センサー](/ja/Weight_Sensor_Load_Cell_0-500g)がその一例です。

**2. コネクタの改造**

重量センサーを増幅器のオスピンと接続するためには、センサーのワイヤにメスコネクタをはんだ付けする必要があります。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg)

**3. ハードウェアの接続**

以下の図のように重量センサーを増幅器に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg)

**4. 測定**

以下のデモコードをArduino IDEにコピーしてアップロードしてください。

```cpp
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

シリアルモニターを通じて増幅された信号を確認できます。入力信号の値については、VIN+とVIN-間の電圧差を測定するためにマルチメーターを使用する必要があります。

## アンプ精度テスト

---
次に、アンプの精度を確認するテストを行います。304 または 971 のスケールファクター条件下で、アンプの入力信号と出力信号の 100 グループを収集し、以下の 2 つのグラフをプロットしました。

水滴をボトルに一滴ずつ追加して重量センサーの負荷を徐々に増加させました。

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg)

横軸は入力電圧、縦軸は出力電圧を表しています。ボトルの重量が増加するにつれて、入力信号は線形に増加します。最初のグラフの実際のゲインは 300.1 で、理論的なゲイン 304 から 1.3% の偏差があります。そして、2 番目のグラフの実際のゲインは 971 で、理論値 964.2 と比較して 0.8% の偏差があります。

測定範囲は電源電圧 VCC によって決まり、最大出力電圧は (VCC-1.2) と (VCC-0.8) の間にあります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Amplifier 1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip)

* [Amplifier 1.0 回路図](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf)

* [INA125 データシート](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>