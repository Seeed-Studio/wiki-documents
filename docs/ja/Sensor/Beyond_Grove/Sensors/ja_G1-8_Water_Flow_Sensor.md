---
title: G1/8インチ水流センサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/G1-8_Water_Flow_Sensor/
slug: /ja/G1-8_Water_Flow_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


[![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/G18_Water_Flow_Sensor.jpg)](https://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

水流センサーは、プラスチック製のバルブボディ、水ローター、およびホール効果センサーで構成されています。水がローターを通過すると、ローターが回転します。その速度は流量の変化に応じて変わります。ホール効果センサーは対応するパルス信号を出力します。このセンサーは、ウォーターディスペンサーやコーヒーマシンでの流量検出に適しています。

私たちは、さまざまな直径の水流センサーを幅広く取り揃えています。ぜひご覧いただき、最適なものをお選びください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

## 特徴

*   コンパクトで取り付けが簡単
*   高い密閉性能
*   高品質のホール効果センサー
*   RoHS準拠

## 仕様

| 項目 | 値 |
|------|-----|
| 最小動作電圧 | DC 4.5V |
| 最大動作電流 | 15mA(DC 5V) |
| 動作電圧 | 5V～24V |
| 流量範囲 | 0.3~6L/min |
| 負荷容量 | ≤10mA(DC 5V) |
| 動作温度 | ≤80℃ |
| 液体温度 | ≤120℃ |
| 動作湿度 | 35%～90%RH |
| 水圧 | ≤0.8MPa |
| 保管温度 | -25℃～+80℃ |
| 保管湿度 | 25%～95%RH |

## はじめに

<font>注意: この例はフォーラムから抽出されたもので、Charles Ganttによって作成されました。彼の貢献に感謝します。それでは、どのように動作するか見てみましょう。</font>

### 水流センサーを使用した水流量の読み取り

これは私が取り組んでいるプロジェクトの一部であり、Seeed Studio Depoで見つかる水流センサーを使用してリットル毎時の水流量を読み取る方法についていくつかのスレッドがあったため、ここで共有したいと思いました。このセンサーは、ホール効果センサーをパルスさせる単純な回転ホイールを使用します。これらのパルスを読み取り、少しの数学を実装することで、液体の流量を3％以内の精度で読み取ることができます。スレッドは単純なG3/4なので、バーブエンドを見つけるのはそれほど難しくありません。

**ハードウェアのインストール**

必要なもの: Seeeduino / Arduino、水流センサー、10K抵抗、ブレッドボード、ジャンパーワイヤー。

水流センサーの配線は非常に簡単です。3本のワイヤーがあります: 黒、赤、黄色。
- 黒をSeeeduinoのグランドピンに接続
- 赤をSeeeduinoの5Vピンに接続
- 黄色のワイヤーは10kプルアップ抵抗に接続し、その後Seeeduinoのピン2に接続します。

以下は、配線方法を示すために作成したFritzing図です。

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

配線が完了したら、以下のコードをSeeeduinoにアップロードする必要があります。アップロードが完了し、水流センサーを通して液体が流れると、シリアルモニターを開いて流量が表示され、毎秒更新されます。

**プログラミング**
```
// SeeeduinoとSeeedstudio.comの水流センサーを使用して液体の流量を読み取る
// Charles GanttがPCファンRPMコードを基に改変
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; //信号の立ち上がりエッジを測定
int Calc;
int hallsensor = 2;    //センサーのピン位置

void rpm ()     //割り込みが呼び出す関数
{
    NbTopsFan++;  //この関数はホール効果センサー信号の立ち上がりと立ち下がりエッジを測定します
}
// setup()メソッドはスケッチが開始されると1回実行されます
void setup() //
{
    pinMode(hallsensor, INPUT); //デジタルピン2を入力として初期化
    Serial.begin(9600); //シリアルポートを初期化
    attachInterrupt(0, rpm, RISING); //割り込みを設定
}
// loop()メソッドはArduinoに電源が供給されている限り繰り返し実行されます
void loop ()
{
    NbTopsFan = 0;   //計算の準備のためにNbTopsを0に設定
    sei();      //割り込みを有効化
    delay (1000);   //1秒待機
    cli();      //割り込みを無効化
    Calc = (NbTopsFan * 60 / 7.5); //(パルス周波数 x 60) / 7.5Q = 流量 (L/時)
    Serial.print (Calc, DEC); //上記で計算された数値を出力
    Serial.print (" L/hour\r\n"); //"L/hour"を出力し改行
}
```

詳細については、[水流センサーを使用した水流量の読み取り](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)に関するフォーラムをご参照ください。

## 配線図

接続に使用されるネジの外径は1.4mmです。

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## 出力テーブル

水平テストにおけるパルス周波数（Hz）= 7.5Q、Qは流量（L/min）を表します。（結果は±3%の範囲内）

| 項目 | 値 |
|------|-----|
| 出力パルスの高レベル | 信号電圧 &gt;4.5 V（入力 DC 5 V） |
| 出力パルスの低レベル | 信号電圧 &lt;0.5V（入力 DC 5V） |
| 精度 | 3%（流量が1L/minから10L/minの場合） |
| 出力信号のデューティサイクル | 40%～60% |

## リソース

*   [Water flow sensor datasheet.pdf](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)

*   [水流センサーを使用した流量の読み取り](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [LCDに水流量を表示](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [材料のデータシート](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>