---
description: 超音波センサーを使用した人数カウント
title: 超音波センサーを使用した人数カウント
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-EI-4
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal Edge Impulse 超音波センサーを使用した人数カウント

このプロジェクトでは、Wio Terminal、一般的な超音波レンジャー、および特別なディープラーニング技術を使用して、実際に機能する人数カウントシステムを作成します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

また、Microsoft Azure IoT Centralサービスを利用して、部屋の占有データをクラウドに保存し、PC上で可視化します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

詳細やビデオチュートリアルについては、対応するビデオをご覧ください！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/pt1maDNXznI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## データの理解

まず、超音波センサーから取得できるデータを理解し、それをどのように利用して物体の方向を判断するかを見ていきます。

Grove - 超音波レンジャーは、40kHzで動作する非接触距離測定モジュールです。信号ピンを介して10uS以上のパルストリガー信号を提供すると、Grove_Ultrasonic_Rangerは40kHzのサイクルレベルを8サイクル発信し、エコーを検出します。エコー信号のパルス幅は測定距離に比例します。以下がその公式です：  
距離 = エコー信号のハイタイム * 音速 (340M/S) / 2

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

:::caution
Grove-Ultrasonic-Rangerをホットプラグしないでください。センサーが損傷する可能性があります。測定エリアは0.5平方メートル以上で滑らかである必要があります。
:::

Arduino IDE用のGrove - 超音波レンジャーライブラリをインストールし、超音波レンジャーをWio TerminalのD1/D2ポートに接続した後、以下の簡単なスクリプトをWio Terminalにアップロードします。そして部屋に入ったり出たりしてみましょう。

```cpp
#include "Ultrasonic.h"
#define INTERVAL_MS 50
Ultrasonic ultrasonic(0);
void setup() {
    Serial.begin(115200);
    }
void loop() {
    static unsigned long last_interval_ms = 0;
    float distance;
    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();
        distance = ultrasonic.MeasureInCentimeters();
        if (distance < 200.0) {
        Serial.println(distance);
        }
        else
        Serial.println(-1);
        //Serial.print('\t');
    }
}
```

部屋に入るときには、比較的高い値（物体からの距離に対応）が最初に得られ、その後減少します。そして部屋を出るときには、完全に逆の信号が得られます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/full (Time 0_02_01;29).png"/></div>

理論的には、方向を判断するアルゴリズムを手動で書くことも可能です。しかし、現実の状況は複雑です。速く歩く人（短い曲線長）や遅く歩く人（長い曲線長）、細い人やそうでない人など、さまざまな状況があります。これらすべてを考慮する必要があるため、手書きのアルゴリズムは必然的に複雑で入り組んだものになります。信号処理の推論や、著しい変動を伴うノイズの多いデータを扱うタスクがある場合、解決策はディープラーニングです。

## トレーニングデータの取得

Wio Terminalと超音波センサーを木製または3Dプリントされたフレームにネジで取り付けます。以下は例です：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

フレームを壁に取り付けるには、3Mのベルクロストリップを使用しました。

<img width={200} align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/3m.png" />

その他の選択肢として、フォームテープ、ネジ、または釘を使用することもできます。

Edge ImpulseのDashboardで新しいプロジェクトを作成し、データ収集の準備をしましょう。データ収集において非常に高いサンプリング周波数は必要ないため、edge-impulse-cliのデータフォワーダーツールを使用できます。Wio Terminalにei_people_counter_data_collection.inoスクリプト（上記で貼り付けたものと全く同じスクリプト）をアップロードします。この手順では、Edge Impulse CLIをインストール済みであることを前提としています（Edge Impulseの開始ガイドに記載されています）。

この特定のスクリプトでは、200 cmを超えるすべての値をフィルタリングし、-1に設定します。

```cpp
if (distance < 200.0) {
 Serial.println(distance);
}
else {
    Serial.println(-1);
}
```

アプリケーションによっては、この値を低くしたり高くしたりする必要があるかもしれません。設定が完了したら歩き始めましょう。
<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif"/></div>

このプロジェクトでは、各クラスごとに1分30秒のデータを記録し、各サンプルを5000 msで記録した後、1500 msに切り取ります。データセットの多様性が非常に重要であるため、速く歩く、遅く歩く、走るなど、さまざまな動作を含むサンプルを確保してください。

<div>
<img width={180} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/in.png" />

<img width={570} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/out.png"/>

<img width={175} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/none.png" />
</div>

「none」カテゴリでは、デバイスの前に誰もいないサンプルに加えて、デバイスの近くに立っている人や横を歩いている人を含むサンプルを追加することをお勧めします。これにより、動きが誤って「in」または「out」と分類されるのを防ぐことができます。

<br />

## 機械学習モデルの構築

データ収集が完了したら、インパルスを作成します。ウィンドウの長さを1500 ms、ウィンドウサイズの増加を500 msに設定します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture.PNG"/></div>

1500 msは、ドアを通って入る、または出る際の人の動作時間を十分にカバーします。ただし、非常にゆっくり動く場合を除きます。処理ブロックについては、今回は実験用に2つのブロックのみを使用します – Raw dataまたはSpectral analysis。Flattenブロックはデータからすべての時間領域情報を消去し、方向を判断するのに完全に役に立たなくなるため使用しません。

Spectral analysisブロックは、データサンプルに高速フーリエ変換（FFT）を適用し、信号を時間領域から周波数領域に変換します。FFTは音声や加速度センサーのデータなど他の種類の信号に対しては機能しますが、私たちの場合、信号の周波数はそれほど重要ではありません。周波数に基づいて人が部屋に入るか出るかを判断することはできません。Spectral analysisブロック後のデータ可視化を見ると、「in」と「out」のデータサンプルを分離するのが難しいことが明らかです。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture1.PNG"/></div>

処理ブロックをSpectrogramに変更しても問題は解決せず、結果の精度は依然として低いままです – 最高で79.6%で、「in」と「out」クラス間の混乱が多く見られます。そして、再び勝者はRaw data（スケーリング付き）+ 1D畳み込みネットワークです。ネットワークアーキテクチャを少し調整して92%の精度を達成しました。そのためには、「エキスパート」モードに切り替え、MaxPool1Dのストライドを1、プールサイズを4に変更する必要があります。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

92%の精度はどれほど良いのでしょうか？また、改善するためには何ができるでしょうか？
92%は概念実証やプロトタイプとしてはかなり良いですが、製品モデルとしてはひどいものです。製品化の場合、状況によって異なります – アプリケーションが重要で、自動制御や意思決定に使用される場合、98～99%未満の精度は望ましくありません。それでも低い場合があります。例えば、支払いまたは認証のための顔認識システムのようなものを考えてみてください。このシステムの精度を向上させる方法はあるのでしょうか？
• 超音波センサーは安価で普及しているセンサーですが、比較的遅く、精度が高くありません。

<img width={200} align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Grove-TF-Mini-LiDAR.JPG" />

 より良いデータを得るために、Grove TF Mini LiDARモジュールを使用することができます。

• より多くのデータを収集し、センサーを通常の人間の腰の高さに配置することで、通常の身長より低い人や子供を検出できるようにします。
• 2つのセンサーを使用する – 異なる場所で測定を行う2つのセンサーを使用することで、データ量がそれほど増加することなく（各サンプルには31のデータポイントしかありません）、精度を向上させる可能性があります。さらに興味深いアイデアを探るために、Wio Terminalが適切に配置されている場合、内蔵の光センサーを使用することができます。

## Wio Terminalへのデプロイ

モデルがトレーニングされた後、デバイスからのデータを使用してライブ分類を実行できます。この際、ウィンドウサイズを500msに増加させると、実際にはあまりうまく機能せず、誤検出が増えることが判明しました。そのため、次のステップでデバイスにデプロイする際には、値を750msに増加させる方が良いです。Wio Terminalにモデルをデプロイするには、デプロイメントタブに移動し、Arduinoライブラリを選択してダウンロードします。アーカイブを解凍し、Arduinoのライブラリフォルダに配置してください。

今回は、重要なデータを見逃さないようにするために、連続推論の例を使用します。最初のプロジェクトを思い出してください。推論の際には、サンプル内のすべてのデータポイントを収集し、推論を実行してから再びサンプリングに戻るという手順を取っていました。つまり、ニューラルネットワークにデータを供給する際にデータ収集を一時停止し、一部のデータを失うことになります。

<img width={200} align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/10df57c-RunImpulse.png" />

これは最適ではありません。この問題を解決するために、DMA（Direct Memory Access）、スレッド、またはマルチプロセッシングを使用することができます。
<div align="center">
<img width ={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/DMA.gif"/></div>

Wio TerminalのMCU（Cortex M4Fコア）は1つのコアしか持たないため、マルチプロセッシングは選択肢に入りません。この場合、FreeRTOSとスレッドを使用します。推論プロセス中に、FreeRTOSが推論を一時停止し、データサンプルを収集してから推論に戻るという動作を行います。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/TaskExecution.png"/></div>

この方法では、実際の推論に少し時間がかかりますが、この特定のユースケースではその差は無視できます。推論は500msごとに実行されるため、500msの時間ウィンドウのスライスごとに推論が3回実行されます。そして、3回の推論の中で最も高い信頼度を持つ結果を採用します。例えば、「out」ラベルが2回、「none」ラベルが1回最も高い信頼度を持つ場合、結果は「out」として分類されます。テストを簡略化するために、Wio Terminalの画面が人が部屋に入るとオンになり、退出するとオフになるようにするコードを追加します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test1.gif"/></div>

Examples -> プロジェクト名 -> nano_ble33_sense_accelerometer_continuousスケッチを開き、setup関数の上にあるすべてのコード（run_inference_background関数宣言を含む）を以下のコードブロックに置き換えてください：

```cpp
/* Includes ---------------------------------------------------------------- */
#include <people_counter_raw_inference.h>
#include <Seeed_Arduino_FreeRTOS.h>
#include "Ultrasonic.h"
#include "TFT_eSPI.h"

#define ERROR_LED_LIGHTUP_STATE HIGH

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // 生の信号から生成された特徴などを確認する場合はtrueに設定
static uint32_t run_inference_every_ms = 500;

static float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};
static float inference_buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];
float distance;
uint8_t axis_num = 1;

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
Ultrasonic ultrasonic(0);
TFT_eSPI tft;
```

setup関数内でLCD画面を初期化します：

```cpp
    tft.begin();
    tft.setRotation(3);
```

そして、加速度計に関連するすべての行を削除します。その後、```inference_thread.start(mbed::callback(&run_inference_background));```の代わりに以下のコードブロックを貼り付けます。この行を置き換える理由は、Arduino BLE33 SenseとWio Terminalではスレッドの初期化方法が異なるためです。

```cpp
    vSetErrorLed(LED_BUILTIN, ERROR_LED_LIGHTUP_STATE);
    
    // RTOSによって管理されるスレッドを作成
    // 各タスクのスタックサイズと優先度を設定
    // また、タスク間で通信や情報取得に重要なハンドラポインタを初期化

    xTaskCreate(run_inference_background,"Inference", 512, NULL, tskIDLE_PRIORITY + 1, &Handle_aTask);
    xTaskCreate(read_data, "Data collection", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);

    // RTOSを開始。この関数は戻らず、タスクをスケジュールします。

    vTaskStartScheduler();
```

run_inference_continuous関数はほとんど変更されませんが、以下の2点を変更する必要があります：
• ```void run_inference_background()``` を ```static void run_inference_background(void*pvParameters)``` に変更
• ```ei_classifier_smooth_init(&smooth, 10 /* no. of readings */, 7 /* min. readings the same */, 0.8 /* min. confidence */, 0.3 /* max anomaly */);``` を
    ```ei_classifier_smooth_init(&smooth, 3 /* no. of readings */, 2 /* min. readings the same */, 0.6 /* min. confidence */, 0.3 /* max anomaly */);``` に変更

上記の行は、モデルの出力に適用する平均化（またはスムージング）パラメータを制御します。真陽性率/偽陽性率の観点で最良のパフォーマンスを得られる値を確認するために、値を試してみることができます。
元のコードでは、データ収集はloop関数内で行われますが、Wio TerminalのFreeRTOSポートでは、データ収集をスレッドで実装し、loop関数を空にする方が良いです。元のコードのloop関数を削除し、以下のコードブロックに置き換えてください：

```cpp
/**
* @brief      データを取得し推論を実行
*
* @param[in]  debug  trueの場合、デバッグ情報を取得
*/
static void read_data(void* pvParameters)
{
    while (1) {
        // 次のtickを決定（後でスリープ）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        // bufferをロール - axis_numポイント分、最後のポイントを上書き
        numpy::roll(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, -axis_num);
        
        distance = ultrasonic.MeasureInCentimeters();
        if (distance > 200.0) { distance = -1;}

        buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE - 1] = distance;

        // 次のタイミングまで待機
        uint64_t time_to_wait = next_tick - micros();
        delay((int)floor((float)time_to_wait / 1000.0f));
        delayMicroseconds(time_to_wait % 1000);
    }
}

void loop()
{
  // 何もしません。すべての作業は2つのスレッドで行われます。
}
```

ここでは、データを取得するタイミングまで待機し、その後超音波センサーで距離を測定し、推論バッファにコピーします。スレッドであるため、ここでの遅延はシステム全体には影響せず、次の読み取りタイミングまでスレッドを一時的に「停止」するだけです。FreeRTOSは、データ収集スレッドが非アクティブな間に他のスレッドでタスクを実行できます。

## Azure IoT Central 統合

さて、モデルは動作しますが、単独では実際の現実世界での適用には適していません。これを完全なアプリケーションにするために、2つの要素を追加しましょう。簡単なGUIとクラウドへのデータアップロード、そして美しいグラフです。グラフィカルユーザーインターフェースを作成するために [LVGLライブラリ](https://wiki.seeedstudio.com/ja/Wio-Terminal-LVGL/) を使用し、データ送信と可視化のためにMicrosoft Azure IoT Centralサービスを使用します。結果として得られるスケッチは693行の長さで、RTOSで3つの並行スレッドが実行されます。以下は、IoT Centralで動作させるための手順の簡単な概要です。

Githubリポジトリでこのプロジェクトを見つけ、名前が「WioTerminal_Azure_Central.ino」のスケッチをArduino IDEで開きます。スケッチをアップロードした後、Wio Terminalの上部にある3つのボタンを押してデバイスをリセットし、設定モードに入ります。

デバイス画面に「設定モード」が表示されます。シリアルモニター（ボーレート115200、キャリッジリターン）でデバイスに接続し、WiFi SSID、パスワード、およびAzure IoT Centralの資格情報を以下の形式で設定します：
```set_az_iotc your_ID_scope your_primary_key your_device_ID```
これらの資格情報は以下の手順で取得できます：
- [https://apps.azureiotcentral.com/](https://apps.azureiotcentral.com/) にアクセスします。
- Microsoftアカウントをまだ持っていない場合は登録します。
- 「Build -> Custom app」に進みます。アプリ名とユニークなURL（アプリ名に類似していても構いません）を入力します。無料プランを選択します。
- アプリが作成された後、「Device Templates」に進みます。IoTデバイスタイプの新しいテンプレートを作成します。カスタムモデルを選択し、以下のスクリーンショットのように3つの機能と2つのインターフェースを追加します（「Views -> Visualizing the device」を押します）。すべてが正しいことを確認した後、テンプレートを公開します。
- 「Devices」に進み、「New」を押してテンプレートから新しいデバイスを作成します。作成したテンプレートを選択することを忘れないでください。
- 「Administration -> Device connection」からIDスコープを取得し、「Administration -> Device connection -> SAS-IoT-Devices」からプライマリキーを取得し、「Devices」タブからデバイスIDを取得します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

設定が成功した後、Wio Terminalを再起動すると、Azure IoT Centralへの接続を開始します。シリアルターミナルで詳細な進行状況フィードバックを確認できます。その後、以下を確認できます：
a) ダッシュボードのデバイスステータスが「Provisioned」に変更される。
b) 「Device -> Raw data」で加速度センサーからのテレメトリデータが表示される。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure2.jpeg"/></div>

次に、Edge Impulseモデル推論、スレッド処理に関する部分を追加し、テレメトリ送信関数を修正して、入室人数、退室人数、部屋内の総人数の値を送信します。また、3つのボタンとテキストフィールドからなる簡単なGUIを追加し、情報更新を表示します。結果として得られるスケッチは、プロジェクトGithubリポジトリの「WioTerminal_EI_People_Counting_Azure_Central_LVGL.ino」を開くことで確認できます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

最も難しい部分は、各スレッドが正常に動作し、他のスレッドに影響を与えないことを確認することでした。コードを過度に複雑化させないようにするために、犠牲を払いました。例えば、LVGLタスク更新関数をインターフェース更新後に配置し、定期的に実行させないようにしました。

## 参考文献

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/18808/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)
