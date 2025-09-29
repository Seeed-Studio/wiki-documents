---
title: G1/2インチ水流センサー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/G1_and_2_inch_Water_Flow_Sensor/
slug: /ja/G1_and_2_inch_Water_Flow_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/flowsensor_LRG.jpg)

水流センサーは、プラスチック製のバルブボディ、水ローター、およびホール効果センサーで構成されています。水がローターを通過すると、ローターが回転します。その速度は流量の変化に応じて変わります。ホール効果センサーは対応するパルス信号を出力します。

**バージョントラッカー**

|リビジョン|説明|リリース|
|---|---|---|
|v1.0|初回公開リリース|2010年5月31日|
|v2.0|公開リリース2.0|2010年7月5日|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## 仕様
---
|項目|値|
|---|---|
|最小動作電圧|DC 4.5V|
|最大動作電流|15mA(DC 5V)|
|動作電圧|5V～24V|
|流量範囲|1～30L/min|
|負荷容量|≤10mA(DC 5V)|
|動作温度|≤80℃|
|液体温度|≤120℃|
|動作湿度|35%～90%RH|
|水圧|≤2.0MPa|
|保管温度|-25℃～+80℃|
|保管湿度|25%～95%RH|

## 機械的寸法
---
単位:mm

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem1.png)

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem2.png)

## センサー構成部品
---

|番号|名称|数量|素材|備考|
|---|---|---|---|---|
|1|バルブボディ|1|PA66+33%ガラス繊維| |
|2|ステンレス鋼ビード|1|ステンレス鋼 SUS304| |
|3|軸|1|ステンレス鋼 SUS304| |
|4|インペラー|1|POM| |
|5|リング磁石|1|フェライト| |
|6|中間リング|1|PA66+33%ガラス繊維| |
|7|Oシールリング|1|ゴム| |
|8|電子シールリング|1|ゴム| |
|9|カバー|1|PA66+33%ガラス繊維| |
|10|ネジ|4|ステンレス鋼 SUS304|3.0*11|
|11|ケーブル|1|1007 24AWG| |

## 使用例

:::note
    この例はフォーラムから抽出されたもので、Charles Ganttによって作成されました。彼の貢献に感謝します。それでは、動作を見てみましょう。
:::

**水流センサーを使用した水流率の読み取り**

これは私が取り組んでいるプロジェクトの一部であり、Seeed Studio Depoで見つけた水流センサーを使用してリットル毎時の水流率を読み取る方法についていくつかのスレッドがあったため、ここで共有したいと思います。ホール効果センサーをパルスするシンプルな回転ホイールを使用します。これらのパルスを読み取り、少し数学を実装することで、液体の流量を3%以内の精度で読み取ることができます。スレッドはシンプルなG3/4なので、バーブエンドを見つけるのはそれほど難しくありません。

**ハードウェアのインストール**

必要なもの：Seeeduino / Arduino、水流センサー、10K抵抗器、ブレッドボード、ジャンパーワイヤー。

水流センサーの配線は非常に簡単です。3本のワイヤーがあります：黒、赤、黄色。黒はSeeeduinoのグランドピンに接続し、赤はSeeeduinoの5Vピンに接続します。黄色のワイヤーは10kプルアップ抵抗器に接続し、その後Seeeduinoのピン2に接続する必要があります。

以下は、配線方法を示すために作成したFritzing図です。

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

配線が完了したら、以下のコードをSeeeduinoにアップロードする必要があります。コードをアップロードし、水流センサーを通じて液体が流れると、シリアルモニターを開いて流量を表示します。表示は毎秒更新されます。

**プログラミング**

```c
// SeeeduinoとSeeedstudio.comの水流センサーを使用して液体流量を読み取る
// Charles GanttによってPCファンRPMコードから適応されたコード
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
  attachInterrupt(0, rpm, RISING); //割り込みを接続
}
// loop()メソッドはArduinoに電源がある限り繰り返し実行されます
void loop ()
{
  NbTopsFan = 0;   //計算の準備のためにNbTopsを0に設定
  sei();      //割り込みを有効化
  delay (1000);   //1秒待機
  cli();      //割り込みを無効化
  Calc = (NbTopsFan * 60 / 7.5); //(パルス周波数 x 60) / 7.5Q = 流量（L/時間）
  Serial.print (Calc, DEC); //上記で計算された数値を出力
  Serial.print (" L/hour\r\n"); //"L/hour"を出力し、新しい行に移動
}
```

水流センサーを使用した水流率の読み取りに関する詳細は、フォーラムを参照してください。

## 配線図
---

接続に使用されるネジの外径は1.4mmです。  
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## 出力テーブル
---

水平テストでのパルス周波数 (Hz) = 7.5Q、Qは流量 (L/min) を表します。（結果は±3%の範囲内）

|項目|値|
|---|---|
|出力パルスの高レベル|	信号電圧 &gt;4.5 V（入力 DC 5 V）|
|出力パルスの低レベル|	信号電圧 &lt;0.5 V（入力 DC 5 V）|
|精度|	3%（流量が1L/minから10L/minの場合）|
|出力信号のデューティサイクル|	40%～60%|

## 関連プロジェクト
---

残念ながら、[Recipe](https://community.seeedstudio.com/projects.html#recipe) にはG1/2水流センサーに関するデモはまだありません。

ここでは、[Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html) に関するいくつかのプロジェクトを紹介します。

**Grove - Water Sensorとは**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Twig_-_Water_Sensor.jpg)

この水センサーモジュールはTwigシステムの一部です。アナログピンを使用して、接地トレースとセンサートレース間の水接触量を検出することができます。

このセンサーは、接地されたトレースとセンサーのトレースが交互に配置された露出トレースを持っています。

センサートレースには1MΩの弱いプルアップ抵抗が接続されています。この抵抗は、センサートレースの値を高く保ちますが、水滴がセンサートレースを接地トレースに短絡させると値が変化します。

この回路はArduinoのデジタルI/Oピンで動作します。

**Arduino Plant Warden**

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/552c2c4f2e5a8.jpg)

このプロジェクトでは、Grove - Water Sensorを使用して、植物に水をやるためのシンプルで効果的なソリューションを作成します。  
動作の仕組み：
- 水センサーと温度センサーの読み取り値をOLED画面に表示
- 水が閾値を下回るとアラートを送信し、ポンプドライバーを作動
- 10個のRGB LEDで色の変化を提供

[作ってみたい！](https://community.seeedstudio.com/project_detail.html?id=103)

[水センサーを使った他の素晴らしいプロジェクト](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

**あなたの素晴らしいプロジェクトを共有してください**

作ることと共有することの精神、それが私たちが信じる「メイカー」の本質です。  
そして、この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。  
あなたが何者であろうと、何を作ったとしても、ハッカー、メイカー、アーティスト、エンジニアであろうと関係ありません。  
自分の作品を他の人と共有し始めた瞬間、あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://community.seeedstudio.com/)であなたの素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

- コアユーザーとは、Seeed製品に高い関心を持ち、Recipeで重要な貢献をした人々のことです。

- 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その代わりに製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。さらに、コアユーザーが良いアイデアを持っている場合、ハードウェア、PCBAサービス、技術サポートを提供することもあります。また、コアユーザーとのさらなる商業的な協力も十分に可能です。

コアユーザーに関する詳細情報は、recipe@seeed.ccまでメールでお問い合わせください。

## ライセンス
---

このドキュメントは、Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルをご確認ください。

## FAQ

こちらはセンサーに関するFAQです。この種の製品に関する質問と回答を見つけることができます。

1. **水流センサーはどのような材料で作られていますか？**

  - ナイロンと繊維で作られており、強酸や強アルカリを避ける設計になっています。

2. **水流センサーは飲料水に使用しても安全ですか？**

  - はい、飲料水用の機械で使用されています。

## リソース
---
- [Water flow sensor datasheet.pdf](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)
- [水流センサーを使用した水流量の読み取り](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)
- [LCDに水流量を表示する](https://github.com/practicalarduino/WaterFlowGauge)
- [材料のデータシート](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>