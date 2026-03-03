---
title: 水流センサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Water-Flow-Sensor/
slug: /ja/Water-Flow-Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

水流センサーは、銅製の本体、水ローター、ホール効果センサーで構成されています。水がローターを通過すると、ローターが回転し、その速度は流量に応じて変化します。そして、ホール効果センサーが対応するパルス信号を出力します。このセンサーは、ウォーターディスペンサーやコーヒーマシンでの流量検出に適しています。**さらに重要なのは、銅製のセンサーはプラスチック製のものよりも寿命が長いことです。**

## 特徴

- コンパクトで取り付けが簡単
- 高い密封性能
- 高品質のホール効果センサー
- RoHS準拠

## 仕様

| パラメータ | 値 |
|---|---|
| 寸法 | 0mm x 0mm x 0mm |
| 重量 | G.W 79g |
| バッテリー | 含まない |
| 最小動作電圧 | DC 4.5V |
| 最大動作電流 | 15mA (DC 5V) |
| 動作電圧 | DC 5V~15V |
| インターフェース寸法 | G1/2インチ |
| 流量範囲 | 1~25L/min |
| 周波数 | F=(11*Q)Q=L/MIN±3% |
| 誤差範囲 | (1~30L\MIN) ±3% |
| 負荷容量 | ≤10mA (DC 5V) |
| 動作温度 | 0 ~ 80℃ |
| 液体温度 | ≤120℃ |
| 動作湿度 | 35%～90%RH |
| 水圧 | ≤1.75MPa |
| 材料説明 | H57銅+POM |
| 保管温度 | -25～+ 80℃ |
| 保管湿度 | 25%～95%RH |
| 出力パルス高レベル | >DC 4.7V (入力電圧 DC5V) |
| 出力パルス低レベル | &lt;DC 0.5V (入力電圧 DC5V) |
| 出力パルスデューティサイクル | 50%±10% |

## 水流センサー（水流計）とは

水流センサーは、水の流量を測定するために使用されます。水流量とは、単位時間あたりに通過する液体の体積を指します。水流センサーは、よく自動給湯器の制御、DIYコーヒーマシン、水の自動販売機などに使用されます。さまざまな原理に基づく流量センサーがありますが、ArduinoやRaspberry Piを使用するメーカーにとって、最も一般的な流量センサーはホールデバイスに基づいています。たとえば、最もクラシックな水流センサーである[YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html)や[YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)は、ホールセンサーに依存しています。

## 水流センサーの仕組み

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図1</b>. <i>YF-402のすべてのコンポーネント</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図2</b>. <i>水流センサーの動作原理</i></figcaption>
</figure>
</div>

内部構造は非常にシンプルです。主なコンポーネントは、ホール効果センサー、タービンホイール、磁石です。水は入口から流入し、出口から流出します。水流がホイールを回転させ、ホイール上の磁石も一緒に回転します。磁場の回転がホールセンサーをトリガーし、高レベルと低レベルの矩形波（パルス）を出力します。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図3</b>. <i>水流センサーの動作原理</i></figcaption>
</figure>
</div>

ホイールが1回転するごとに、流れる水の体積は一定量であり、出力される矩形波の数も一定です。したがって、矩形波（パルス）の数を数えることで、水の流量を計算することができます。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

#### 必要な材料

|Seeeduino ボード |Grove ベースシールド|水流センサー|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2.html)|[今すぐ購入](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### ハードウェア接続

YF シリーズの場合、3本のワイヤがあります：

- 赤は Vcc 用
- 黒は GND 用
- 黄色はパルス出力用

Atmega 328 ベースのボード（例：[Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)）では、割り込みとして使用できるデジタルピンが2つあります。デジタルピン 2 は **割り込み 0**、デジタルピン 3 は ***割り込み 1** に対応します。このブログでは、水流センサーのパルス出力を検出するために **D2** ピンを使用します。Seeeduino + [Grove ベースシールド](https://www.seeedstudio.com/Base-Shield-V2.html) を使用している場合は、水流センサーを D2 コネクタに差し込むだけです。他の Arduino ボードを使用している場合は、ジャンパーケーブルを使用して正しいピンに接続してください。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>図 4</b>. <i>Arduino に接続された水流センサー</i></figcaption>
</figure>
</div>

:::tip
    USB ケーブルや水流センサーインターフェースを Seeeduino ボードのインターフェースに慎重に差し込んでください。そうしないと、ポートが損傷する可能性があります。
:::

#### ソフトウェア

もちろん、**LOOP** 関数内で `digitalRead()` を使用して水流センサーの出力を読み取ることができます。高レベルが読み取られるたびにカウントを1つ増やします。しかし、この方法はリアルタイムではなく、プログラムの実行には一定の待機時間が必要で、その間に新しいパルスが検出されません。このようなリアルタイム性が求められるアプリケーションでは、通常、割り込みを使用します。パルスの立ち上がりエッジが検出されるたびに割り込みがトリガーされ、カウントが1つ増えます。

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

**割り込み**の詳細については、[attachInterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/) を参照してください。

:::caution
Arduino を初めて使用する場合は、開始前に [Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) をご覧になることを強くお勧めします。
:::

- **ステップ 1.** Grove ベースボードと水流センサーを Seeeduino ボードに接続し、USB ケーブルを介して Seeeduino ボードを PC に接続します。

- **ステップ 2.** 次に Arduino IDE を開き、以下のコードをコピーします。最後に、コードを Arduino にダウンロードします。

:::note
ここにあるコードは、Seeed の最もクラシックな YF – S201、YF - S402 およびその他の水流センサーに **対応** しており、水流センサーの動作原理も同様です。
:::

#### ソフトウェアコード

```cpp
/*
YF‐ S201 水流センサー
水流センサーの出力を処理してリットル/時を読み取る
適応提供元: www.hobbytronics.co.uk
*/

volatile int flow_frequency; // フローセンサーのパルスを測定する

int l_hour; // 計算されたリットル/時
unsigned char flowsensor = 2; // センサー入力
unsigned long currentTime;
unsigned long cloopTime;

void flow () // 割り込み関数

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // オプションの内部プルアップ
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // 割り込みを設定
   sei(); // 割り込みを有効化
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis(); // 毎秒、リットル/時を計算して出力
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // cloopTime を更新
      // パルス周波数 (Hz) = 7.5Q, Q は流量 (L/min)
      l_hour = (flow_frequency * 60 / 7.5); // (パルス周波数 x 60 分) / 7.5Q = 流量 (L/hour)
      flow_frequency = 0; // カウンタをリセット
      Serial.print(l_hour, DEC); // リットル/時を出力
      Serial.println(" L/hour");
   }
}
```

:::tip
すべてが正常に動作すれば、シリアルモニタツールを開き、ボーレートを 9600 に設定してください。水が流れると、流量の値が適切なウィンドウに表示されます。
:::

## 水流センサーの計算式

コードセクションでは以下の式を使用しましたが、この式はどのように導き出されたのでしょうか？

```cpp
l_hour = (flow_frequency * 60 / 7.5)
```

以前述べたように、ホイールが1回転するごとに流れる液体の量は一定です。同時に、ホイールが1回転するごとに生成されるパルスの数も一定です。したがって、パルス数と水流量の間に方程式を確立することができます。

YF-S201の場合、1リットルの水が流れるごとにホールセンサーは450パルスを出力します。ここで少し計算してみましょう。1リットルあたり450パルスなので、1パルスは1/450リットルの水が流れることを意味します。一定時間 **t**（単位：秒）における水流センサーを通過する液体の総量を **V_total**（単位：リットル）、検出されたパルスの総数を **N** とすると、以下の式が得られます：

```cpp
V_total(L) = N * 1/450(L)
```

また、水流センサーを通過する液体の総量は、**水流量(Q - 単位：L/s)** に時間 **t**（単位：秒）を掛けたものに等しいです。

```cpp
V_total(L) = Q(L/s) * t(s)
```

これにより以下の式が得られます：

```cpp
N * 1/450 = Q(L/s) * t(s)
N/t = 450 * Q(L/s)
```

**N/t** は周波数 **f** に相当するため：

```cpp
f = 450 * Q(L/s)
Q(L/s) = f / 450
Q(L/min) = f * 60 / 450 = f / 7.5
Q(L/hour) = f * 60 * 60 / 450 = f * 60 / 7.5
```

YF-S402の場合、1リットルの水が流れるごとにホールセンサーは4380パルスを出力します。そのため、式は以下のようになります：

```cpp
f = 4380 * Q(L/s)
Q(L/s) = f / 4380
Q(L/min) = f * 60 / 4380 = f / 73
Q(L/hour) = f * 60 * 60 / 4380 = f * 60 / 73
```

## Seeedの水流センサー

:::tip
Seeedでは、[YF-402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) や [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) を含む多数の水流センサーを販売しています。また、以下のように異なる寸法、検出範囲、素材などを持つさまざまな水流センサーを提供しています：
:::

|   タイプ   | 寸法(DN) | 動作電圧 | 流量範囲 | 長さ |    オス・メス   | ネジの長さ | 素材 |
|:--------:|:--------------:|:---------------:|:---------------:|:------:|:------------------:|:----------------:|:--------:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  44mm  |     両端オス    |       10mm       |  銅  |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  50mm  | オス入力メス出力 |       10mm       |  銅  |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     両端オス    |       18mm       |  銅  |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  | オス入力メス出力 |       10mm       |  銅  |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  50mm  |     両端オス    |       10mm       |  銅  |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  60mm  |     両端オス    |       11mm       |  銅  |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     両端オス    |       10mm       |  銅  |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |    -   |     両端オス    |         -        |  プラスチック |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |      DN20      |    5V~24V(DC)   |    1~60L/min    |    -   |     両端オス    |         -        |  プラスチック |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |  60mm  |     両端オス    |       13mm       |  プラスチック |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  プラスチック |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  プラスチック |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>