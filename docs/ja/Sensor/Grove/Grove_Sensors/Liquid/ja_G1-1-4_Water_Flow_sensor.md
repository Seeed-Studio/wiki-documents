---
description: G5/4インチ水流センサー
title: G5/4インチ水流センサー
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/G1-1-4_Water_Flow_sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](http://bz.seeedstudio.com/depot/images/P2231345_01.JPG)

水流センサーは、プラスチック製のバルブ本体、水ローター、およびホール効果センサーで構成されています。水がローターを通過すると、ローターが回転します。その速度は流量の変化に応じて変わります。ホール効果センサーは対応するパルス信号を出力します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g114-water-flow-sensor-p-1082.html?cPath=144_151)

## 仕様
---
<table>
  <tbody>
    <tr>
      <td>最小動作電圧</td>
      <td>DC 4.5V</td>
    </tr>
    <tr>
      <td>最大動作電流</td>
      <td>15mA(DC 5V)</td>
    </tr>
    <tr>
      <td width="400px">動作電圧</td>
      <td width="400px">5V～24V</td>
    </tr>
    <tr>
      <td>流量範囲</td>
      <td>1～120L/min</td>
    </tr>
    <tr>
      <td>負荷容量</td>
      <td>≤10mA(DC 5V)</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>≤80℃</td>
    </tr>
    <tr>
      <td>液体温度</td>
      <td>≤120℃</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td>35%～90%RH</td>
    </tr>
    <tr>
      <td>水圧</td>
      <td>≤2.0MPa</td>
    </tr>
    <tr>
      <td>保管温度</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>保管湿度</td>
      <td>25%～95%RH</td>
    </tr>
  </tbody>
</table>

## 機械的寸法
---
### センサー構成部品

<table>
  <tbody>
    <tr>
      <th>No.</th>
      <th>名称</th>
      <th>数量</th>
      <th>素材</th>
      <th>備考</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>1</td>
      <td width={150}>バルブ本体</td>
      <td width={150}>1</td>
      <td width={150}>PA66+33%ガラス繊維</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={200}>2</td>
      <td width={150}>ステンレス鋼ビーズ</td>
      <td width={150}>1</td>
      <td width={150}>ステンレス鋼 SUS304</td>
      <td width={150}></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>3</td>
      <td>軸</td>
      <td>1</td>
      <td>ステンレス鋼 SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>4</td>
      <td>インペラー</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>5</td>
      <td>リングマグネット</td>
      <td>1</td>
      <td>フェライト</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>6</td>
      <td>中間リング</td>
      <td>1</td>
      <td>PA66+33%ガラス繊維</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>7</td>
      <td>Oシールリング</td>
      <td>1</td>
      <td>ゴム</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>8</td>
      <td>電子シールリング</td>
      <td>1</td>
      <td>ゴム</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>9</td>
      <td>カバー</td>
      <td>1</td>
      <td>PA66+33%ガラス繊維</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>10</td>
      <td>ネジ</td>
      <td>8</td>
      <td>ステンレス鋼 SUS304</td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>11</td>
      <td>ケーブル</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 使用例
---
<font>注: この例はフォーラムから抽出されたもので、Charles Gantt によって作成されました。彼の貢献に感謝します。それでは、動作を見てみましょう。</font>

### 水流センサーを使用した水流量の読み取り

これは私が取り組んでいるプロジェクトの一部であり、Seeed Studio Depo にある水流センサーを使用して、リットル/時単位で水流量を読み取る方法についていくつかのスレッドがあったため、ここで共有したいと思います。このセンサーは、ホール効果センサーをパルスする単純な回転ホイールを使用しています。これらのパルスを読み取り、少し数学を実装することで、液体の流量を3%以内の精度で読み取ることができます。スレッドは単純な G3/4 なので、バーブエンドを見つけるのはそれほど難しくありません。

#### ハードウェアのインストール

必要なもの:
- Seeeduino / Arduino
- 水流センサー
- 10K 抵抗
- ブレッドボード
- ジャンパーワイヤー

水流センサーの配線は非常に簡単です。3本のワイヤーがあります: 黒、赤、黄色。
- 黒を Seeeduino のグランドピンに接続
- 赤を Seeeduino の 5V ピンに接続
- 黄色のワイヤーは 10k プルアップ抵抗に接続し、その後 Seeeduino のピン2に接続します。

以下は、配線方法を示すために作成した Fritzing ダイアグラムです。

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

配線が完了したら、以下のコードを Seeeduino にアップロードする必要があります。コードをアップロードし、水流センサーを通して液体が流れると、シリアルモニターを開いて流量が表示されます。表示は毎秒更新されます。

#### プログラミング
```
// Seeeduino と Seeedstudio.com の水流センサーを使用して液体の流量を読み取る
// Charles Gantt によって PC ファン RPM コードから適応されたコード
// 作成者: Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan;                       // 信号の立ち上がりエッジを測定
int Calc;
int hallsensor = 2;                           // センサーのピン位置


void rpm ()                                   // 割り込みが呼び出す関数
{
    NbTopsFan++;                              // この関数はホール効果センサーの信号の立ち上がりと立ち下がりエッジを測定します
}


void setup()
{
    pinMode(hallsensor, INPUT);               // デジタルピン2を入力として初期化
    Serial.begin(9600);                       // シリアルポートを初期化するセットアップ関数
    attachInterrupt(0, rpm, RISING);          // 割り込みをアタッチ
}


void loop ()
{
    NbTopsFan = 0;                            // 計算の準備のため NbTops を 0 に設定

    sei();                                    // 割り込みを有効化
    delay (1000);                             // 1秒待機
    cli();                                    // 割り込みを無効化

    Calc = (NbTopsFan * 60 / 4.5);            // (パルス周波数 x 60) / 4.5Q = 流量 (L/時)

    Serial.print (Calc, DEC);                 // 上記で計算された数値を出力

    Serial.print (" L/hour\r\n");             // "L/hour" を出力し、新しい行に移動
}
```

詳細については、フォーラムの [水流センサーを使用した水流量の読み取り](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632) を参照してください。

## 配線図
---
接続に使用されるネジの外径は1.4mmです。

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

## 出力表
---
水平テストにおけるパルス周波数 (Hz) = 4.5Q、Qは流量 (L/min) を表します。（結果は±3%の範囲内）

<table>
<tr>
<td width="400px">出力パルスの高レベル</td>
<td width="400px">信号電圧 &gt;4.5 V（入力 DC 5 V）</td>
</tr>
<tr>
<td>出力パルスの低レベル</td>
<td>信号電圧 &lt;0.5V（入力 DC 5V）</td>
</tr>
<tr>
<td>精度</td>
<td>3%（流量が1L/minから10L/minの場合）</td>
</tr>
<tr>
<td>出力信号のデューティサイクル</td>
<td>40%～60%</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/G1-1-4_Water_Flow_sensor/img/G54_Flow_rate_to_frequency.png.png)

## FAQ
---

**水流センサーはどのような材料で作られていますか？**

ナイロンと繊維で作られており、強酸や強アルカリを避ける必要があります。

**水流センサーは飲料水に安全ですか？**

はい、飲料機で使用されています。

## リソース
---
*   [水流センサーを使用した水流量の読み取り](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [LCDに水流量を表示](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [材料のデータシート](https://wiki.seeedstudio.com/ja/images/4/4e/YEE70G30HSLNC..pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>