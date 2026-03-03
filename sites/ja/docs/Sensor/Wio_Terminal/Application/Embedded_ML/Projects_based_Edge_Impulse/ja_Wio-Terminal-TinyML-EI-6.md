---
description:  予知保全のための異常検知
title:  予知保全のための異常検知
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-EI-6
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal Edge Impulseによる予知保全のための異常検知

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

このプロジェクトでは、Wio Terminal内蔵の加速度センサーからデータを使用し、デバイス上で異常検知を行い、その後データをBlynk Edgent Cloudに送信します。

異常、具体的には予知保全のための異常検知についてです。Wio Terminal内蔵の加速度センサーからデータを使用し、ニューラルネットワークモデルの推論とデバイス上での異常検知を行い、その後新しい機能が豊富なBlynk IoTプラットフォームにデータを送信します。このプラットフォームはWio Terminalを完全にサポートしています。

完全なチュートリアルとビデオデモについては、以下の動画をご覧ください：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

これが「何をするか」ですが、次は「どうやるか」について説明します。まずは、より馴染みのある例から始めましょう。

## 異常検知と予知保全の概要

例えば、簡単な画像認識モデルをトレーニングして、5つの異なる動物のクラス（トラ、ゾウ、クマ、ヘビ、キリン）を認識できるようにしたとします。そして、そのモデルに人間の画像を与えると、モデルは可能な限りの能力で予測を行い、もしかするとそれを「ゾウ」と言うかもしれません。これに対して、モデルの内部動作やコンピュータビジョンの仕組みをあまり理解していない一般の人々は笑うかもしれません。

もちろん、モデルは何も間違ったことをしていません。画像を処理し、特徴を計算し、それに基づいて分類結果を出力しただけです。ただし、もしクラスの特徴をプロットしてクラスタリングした場合、人間の画像の特徴がどのクラスのクラスタからも遠く離れていることがわかり、それが「外れ値」を表していることになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

もちろん、それが非常に奇妙な動物の画像である可能性もありますが、ほとんどの場合、それはモデルが認識するようにトレーニングされていないオブジェクトである可能性が高いです。

コンピュータビジョンや音声認識のタスクでは、この問題に対処するために「背景」クラスを持つことがよくあります。このクラスは、関心のあるクラス以外のものを基本的に表します。しかし、ある状況では、モデルがすべてのデータを「正常」と「異常」として解釈できるようにしたい場合があります。「異常」の正確な特徴が何であるかは重要ではありません。それらは非常に異なる可能性がありますが、重要なのは「異常」クラスが検出された場合に何らかの対策を実施する必要があるということです。これが、予知保全のために機械学習を使用する背後にある考え方です。エアコン、水ポンプ、その他の機械などのデバイスの状態をセンサーで監視し、既知の「正常」な動作のプロファイルに基づいて、重大な問題が発生する前にわずかな異常を検出しようとします。

## データ収集とモデルのトレーニング

このプロジェクトでは、Wio Terminal をオフィスの外のパティオにある水ポンプに設置しました。このパティオには植物と魚がいます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

次に、2つのカテゴリのサンプル（アイドル状態と通常運転）を収集し、Spectral Features 処理ブロックの出力に基づいてこれらを認識するシンプルなモデルをトレーニングしました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

処理および学習ブロックの正確なパラメータについては、共有したプロジェクトの公開バージョンをご覧ください。唯一の重要な変更点は、フィルターを低から高に変更したことです。これにより、異なるクラスの特徴がより際立つようになりました。アイドル状態と通常のポンプ運転を区別することは非常に簡単でしたが、より挑戦的だったのは故障検出でした。故障をシミュレートするために、水ポンプをタンクから取り出しました。これにより、音と振動のレベルが低下しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

故障サンプルを見てみると、accX RMS、accY RMS、accZ RMS 軸の特徴エクスプローラーで、アイドル状態と通常運転サンプルの中間に位置していることがわかります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

これを利用して、新しい（2つ目の）ネットワークをトレーニングし、以前に見たデータの周りにクラスターを作成し、これらのクラスターと受信データを比較します。クラスターからの距離が大きすぎる場合、そのサンプルは異常としてフラグ付けされます。

試行錯誤の結果、非常に低いクラスター数と距離閾値0.5が異常検出に最適であることがわかりましたが、これは非常にケース依存であり、データによります。精度を向上させるのに役立ったことの1つは、Wio Terminal を水ポンプにしっかりと接着剤で固定することでした。実際のデバイスではネジを使用できます。しっかり固定する前は、Wio Terminal がランダムに揺れており、通常運転サンプルに過剰なノイズを導入していました。

## デプロイとテスト

モデルをトレーニングし、Live classification モードでテストした後、デバイスに戻してデプロイします。Arduino ライブラリをコンパイルしてダウンロードし、それを Arduino ライブラリフォルダに抽出します。そして、nano33_ble_sense_accelerometer スケッチを Wio Terminal にある加速度計に合わせて修正します。簡単なテストでは、異常が検出された場合に赤く光る LCD 画面を使用します。

```cpp
#define ANOMALY_THRESHOLD 0.5

/* Includes ---------------------------------------------------------------- */
#include <wio_anomaly_detection_inference.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;
LIS3DHTR<TwoWire> lis;

/* Constant defines -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // 生の信号から生成された特徴などを表示するには true に設定

/**
* @brief      Arduino setup 関数
*/
void setup()
{
    // 初回実行時にセットアップコードを記述
    Serial.begin(115200);
    //while (!Serial) {delay(10);}
    
    Serial.println("Edge Impulse Inferencing Demo");
    
    tft.begin();
    tft.setRotation(3);
    
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // 出力データレートを25Hzに設定、最大5kHzまで設定可能
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // スケール範囲を2gに設定、2,4,8,16gから選択可能
   

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }
}

/**
* @brief      Printf 関数は vsnprintf を使用し、Arduino Serial を介して出力
*
* @param[in]  format     可変引数リスト
*/
void ei_printf(const char *format, ...) {
   static char print_buf[1024] = { 0 };

   va_list args;
   va_start(args, format);
   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
   va_end(args);

   if (r > 0) {
       Serial.write(print_buf);
   }
}

/**
* @brief      データを取得して推論を実行
*
* @param[in]  debug  true の場合デバッグ情報を取得
*/
void loop()
{

    ei_printf("Sampling...\n");

    // IMU から読み取る値のためのバッファをここで割り当て
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 次の tick を決定（後でスリープ）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 生のバッファを信号に変換し、それを分類
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // 分類器を実行
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // 予測を出力
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);

  if (result.anomaly > ANOMALY_THRESHOLD)
  {       
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Anomaly detected", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
  }
    
#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

もちろん、実際のアプリケーションでは、この種の通知はあまり実用的ではありません。なぜなら、常に監視する人がいるわけではないからです。

## 新しい Blynk IoT プラットフォームの活用

このデモを実用的なものにするために、Blynk IoT プラットフォームを使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

Blynk IoT プラットフォームには、デバイスを監視するためのウェブダッシュボード、データへのアクセスを管理する機能、簡単なセットアップ手順を可能にする Wi-Fi マネージャー、新しいデバイスモデル作成のアプローチなどの機能が含まれています。

blynk.cloud にアクセスし、アカウントを登録するか新しいアカウントを作成してください。その後、新しいテンプレートを作成します。テンプレートは、類似の機能を持つ複数のデバイスで継承できるデバイスのデジタルモデルです。テンプレートの利点は、デバイス群の規模に関係なく、デバイスデータモデルを即座に更新できる点です。

ハードウェアとして Arduino Uno を選択し、接続タイプとして Wi-Fi を選択します。その後、以下のスクリーンショットのように Datastreams タブと Dashboard タブを設定し、変更を保存します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

このプロジェクトでは Metadata や Events タブは使用しません。デバイステンプレートの主なコンポーネントの目的は以下の通りです：

- Metadata – デバイスに関する追加データを設定できます。
- Datastreams – デバイスから入出力されるデータを定義するエンティティです。全体的には Virtual Pins に非常に似ています（Virtual Pins も使用可能です）。
- Events – 重要なアラートや通知のリストです。
- Web Dashboard – Web アプリ内のウィジェットのセットです。
- Mobile Dashboard – モバイルアプリ内のウィジェットのセットです。

My Devices タブで新しいデバイスを作成し、作成したテンプレートを選択して一意の名前を付けます。

これで、ウェブインターフェースがデバイスからのデータを受信する準備が整いました。Seeed の Wio Terminal 用のサンプルスケッチリポジトリからサンプルスケッチをダウンロードしてください。このスケッチにはメインスケッチファイルの他に、Wi-Fi マネージャーコードが含まれるヘルパーファイルも含まれています。メインスケッチファイルでは、LCD 画面でテストしたデータ収集/データ処理/推論コードが run_inference() 関数に移動されています。最も高い信頼度を持つクラスのクラス ID（信頼度が設定された閾値を超える場合）は、best_result グローバル変数に保存され、光センサーと音センサーのデータと共に定期的に Blynk サーバーに送信されます。BLYNK_TEMPLATE_ID と BLYNK_DEVICE_NAME をデバイステンプレートから取得したものに変更することを忘れないでください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

コードを Wio Terminal にアップロードすると、ホットスポットが作成されます。これにスマートフォンで接続すると、自動的に簡単な設定ページにリダイレクトされます。ここで Wi-Fi の認証情報、API トークン（My Devices タブでデバイスをクリックし、Device Info に移動すると見つかります）を入力し、Connect をクリックします。その後、Wio Terminal は Wi-Fi ネットワークと Blynk クラウドサーバーに接続し、データの送信を開始します。My Devices タブでデバイスをクリックすると、美しいグラフやステータスメッセージを見ることができます。テスト結果はビデオの最後の方で確認できます。

明らかに、同じアプローチを他の機械の動作異常検出にも適用できます。加速度センサーを使用すれば、可動部品を持つほぼすべてのものに対応できます。これらは振動を生じ、それを測定することができます。デバイスが可聴音を発する場合、マイクを使用することも可能です。センサーの組み合わせはさらに効果的かもしれません。予知保全が活用できる他の良いアプリケーションはありますか？コメントでアイデアを教えてください！この記事とビデオが役に立ったことを願っています！

## 参考文献

- [Edge Impulse 公開プロジェクト](https://studio.edgeimpulse.com/public/31205/latest)

- [プロジェクトのGithub](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)