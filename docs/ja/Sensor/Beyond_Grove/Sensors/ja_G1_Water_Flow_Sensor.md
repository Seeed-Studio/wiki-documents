---
title: G1 水流センサー
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/G1_Water_Flow_Sensor/
slug: /ja/G1_Water_Flow_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/G1inch_Water_Flow_sensor.jpeg)

水流センサーは、プラスチック製のバルブ本体、水ローター、およびホール効果センサーで構成されています。水がローターを通過すると、ローターが回転します。その速度は流量の変化に応じて変わります。ホール効果センサーは対応するパルス信号を出力します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## 仕様

---
| 項目 | 値 |
|------|-----|
| 最小動作電圧 | DC 4.5V |
| 最大動作電流 | 15mA(DC 5V) |
| 動作電圧 | 5V～24V |
| 流量範囲 | 1～60L/min |
| 負荷容量 | ≤10mA(DC 5V) |
| 動作温度 | ≤80℃ |
| 液体温度 | ≤120℃ |
| 動作湿度 | 35%～90%RH |
| 水圧 | ≤1.75MPa(最大2MPa) |
| 保管温度 | -25℃～+80℃ |
| 保管湿度 | 25%～95%RH |

## 機械的寸法

---

### センサー構成部品

| No. | 名称 | 数量 | 材質 | 備考 |
|-----|------|------|------|------|
| 1 | バルブ本体 | 1 | PA66+33%ガラス繊維 | |
| 2 | ステンレス鋼ビーズ | 1 | ステンレス鋼 SUS304 | |
| 3 | 軸 | 1 | ステンレス鋼 SUS304 | |
| 4 | インペラー | 1 | POM | |
| 5 | リングマグネット | 1 | フェライト | |
| 6 | 中間リング | 1 | PA66+33%ガラス繊維 | |
| 7 | Oシールリング | 1 | ゴム | |
| 8 | 電子シールリング | 1 | ゴム | |
| 9 | カバー | 1 | PA66+33%ガラス繊維 | |
| 10 | ネジ | 4 | ステンレス鋼 SUS304 | |
| 11 | ケーブル | 1 | 1007 24AWG | |

## 使用例

---
<font>注: この例はフォーラムから抽出されたもので、Charles Gantt によって作成されました。彼の貢献に感謝します。それでは、どのように動作するか見てみましょう。</font>

### 水流センサーを使用した水流量の読み取り

これは私が取り組んでいるプロジェクトの一部であり、Seeed Studio Depo で見つけた水流センサーを使用して、リットル毎時の水流量を読み取る方法についていくつかのスレッドがあったため、ここで共有しようと思いました。このセンサーは、ホール効果センサーをパルスさせる単純な回転ホイールを使用します。これらのパルスを読み取り、少しの数学を実装することで、液体の流量を3%以内の精度で読み取ることができます。スレッドはシンプルな G1 なので、バーブエンドを見つけるのはそれほど難しくありません。

**ハードウェアのインストール**

必要なもの:
- Seeeduino / Arduino
- 水流センサー
- 10K 抵抗
- ブレッドボード
- ジャンパーワイヤー

水流センサーの配線は非常に簡単です。3本のワイヤーがあります: 黒、赤、黄色。
- 黒を Seeeduino のグランドピンに接続
- 赤を Seeeduino の 5V ピンに接続
- 黄色のワイヤーは 10k プルアップ抵抗に接続し、その後 Seeeduino のピン 2 に接続します。

以下は、配線方法を示すために作成した Fritzing ダイアグラムです。

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

配線が完了したら、以下のコードを Seeeduino にアップロードする必要があります。コードをアップロードし、水流センサーを通して液体を流すと、シリアルモニターを開いて流量が表示されます。表示は毎秒更新されます。

**プログラミング**

```
// Seeeduino と Seeedstudio.com の水流センサーを使用して液体の流量を読み取る
// Charles Gantt によって PC ファン RPM コードから適応されたコード
// 元コードは Crenn @thebestcasescenario.com によるもの
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; // 信号の立ち上がりエッジを測定
int Calc;
int hallsensor = 2;    // センサーのピン位置

void rpm ()     // 割り込みが呼び出す関数
{
    NbTopsFan++;  // この関数はホール効果センサー信号の立ち上がりと立ち下がりエッジを測定
}
// setup() メソッドはスケッチが開始されると一度だけ実行される
void setup() //
{
    pinMode(hallsensor, INPUT); // デジタルピン 2 を入力として初期化
    Serial.begin(9600); // シリアルポートを初期化
    attachInterrupt(0, rpm, RISING); // 割り込みをアタッチ
}
// loop() メソッドは Arduino に電源が供給されている限り繰り返し実行される
void loop ()
{
    NbTopsFan = 0;   // 計算の準備のため NbTops を 0 に設定
    sei();      // 割り込みを有効化
    delay (1000);   // 1 秒待機
    cli();      // 割り込みを無効化
    Calc = (NbTopsFan * 60); // (パルス周波数 x 60) / Q = 流量 (L/時)
    Serial.print (Calc, DEC); // 上記で計算された数値を出力
    Serial.print (" L/hour\r\n"); // "L/hour" を出力し、新しい行に移動
}
```

水流センサーを使用した水流量の読み取りに関する詳細は、[フォーラム](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)をご参照ください。

## 配線図

---
接続に使用されるネジの外径は1.4mmです。

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## 出力表

---
水平テストにおけるパルス周波数 (Hz) = 1*Q、Qは流量 (L/min) です。（結果は±3%の範囲内）

| 項目 | 値 |
|------|-----|
| 出力パルスの高レベル | 信号電圧 &gt;4.5 V（入力 DC 5 V） |
| 出力パルスの低レベル | 信号電圧 &lt;0.5V（入力 DC 5V） |
| 精度 | 3%（流量が1L/minから10L/minの場合） |
| 出力信号のデューティサイクル | 40%～60% |

## FAQ

---
**水流センサーはどのような材料で作られていますか？**

ナイロンと繊維で作られており、強酸や強アルカリを避ける必要があります。

**水流センサーは飲料水に安全ですか？**

はい、人間が消費する用途に安全です。飲料機で頻繁に使用されています。

## リソース

* [水流センサーで水流量を測定する](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [LCDに水流量を表示する](http://www.practicalarduino.com/projects/water-flow-gauge)

* [材料のデータシート](https://wiki.seeedstudio.com/ja/images/4/4e/YEE70G30HSLNC..pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>