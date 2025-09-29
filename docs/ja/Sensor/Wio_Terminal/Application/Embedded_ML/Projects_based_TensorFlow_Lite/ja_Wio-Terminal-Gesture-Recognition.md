---
description: Wio Terminal を使用したジェスチャー認識
title: Wio Terminal を使用したジェスチャー認識
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Gesture-Recognition
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal を使用した機械学習 - ジェスチャー認識

このチュートリアルでは、**TensorFlow Lite** を使用して Wio Terminal を使った簡単なジェスチャー認識の機械学習デモをセットアップする方法を説明します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif"/></div>

この例は、Arduino チームと TensorFlow Lite チームによる公式デモを基に改良されたものです。詳細情報や参考資料については、[Arduino で機械学習を始める](https://blog.arduino.cc/2019/10/15/get-started-with-machine-learning-on-arduino/) をご覧ください。このデモは Wio Terminal に対応するように一部変更されています。

*参考:* [Arduino で機械学習を始める方法](https://medium.com/tensorflow/how-to-get-started-with-machine-learning-on-arduino-7daf95b4157)

## 必要な部品

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal バッテリーチャーシス](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## 特徴

- Wio Terminal 上での機械学習

- ジェスチャー認識

- TensorFlow Lite

## 必要な Arduino ライブラリ

- オンボード加速度センサーライブラリ `Seeed_Arduino_LIS3DHTR` をインストールしてください。詳細については [Wio Terminal IMU](https://wiki.seeedstudio.com/ja/Wio-Terminal-IMU-Overview/) をご覧ください。

- **Arduino TensorFlow Lite** ライブラリをインストールしてください。詳細については [Wio Terminal TensorFlow Lite](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-TFLM-1) をご覧ください。

## Wio Terminal から IMU データを収集してトレーニング

他の機械学習プロジェクトと同様に、後でモデルをトレーニングするために使用するセンサーデータを取得します。まず、簡単な Arduino プログラムを実行して Wio Terminal からセンサーデータをストリーミングします。

以下のコードをコピーして Wio Terminal にアップロードしてください：

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

const float accelerationThreshold = 2; // 重要な加速度の閾値 (G単位)
const int numSamples = 119;

int samplesRead = numSamples;

void setup() {
  Serial.begin(9600);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("エラー");
    while(1);
  }
  
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // データ出力レート
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // スケール範囲を2gに設定

  Serial.println("加速度 (G単位)");
  Serial.println("X\tY\tZ");
}

void loop() {
  float x, y, z;
  
  while (samplesRead == numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();

    float aSum = fabs(x) + fabs(y) + fabs(z);

    // 閾値を超えているか確認
    if (aSum >= accelerationThreshold) {
      // サンプル読み取りカウントをリセット
      samplesRead = 0;
      break;
    }
  }

  while (samplesRead < numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();

    samplesRead++;

    Serial.print(x, 3);
    Serial.print(',');
    Serial.print(y, 3);
    Serial.print(',');
    Serial.print(z, 3);
    Serial.println();

    if (samplesRead == numSamples) {
      Serial.println();
    }
  }
}
```

または、コードを [**こちら**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU.zip) からダウンロードして Wio Terminal にアップロードしてください。シリアルモニターを開くと、IMU データが表示されるはずです。

## ジェスチャーのトレーニングデータの収集

**IMUデータをCSV形式でキャプチャ**し、TensorFlowで使用します：

- シリアルモニタを開き、Wio Terminalを選択します。

- パンチジェスチャーを行い、キャプチャがトリガーされたことを確認します。

- 同じ動作を少なくとも10回繰り返します。トレーニングデータが多いほど良いです。

- シリアルモニタからデータをコピーして、新しいテキストファイルに貼り付け、**`punch.csv`**という名前で保存します。

- Wio Terminalをクリアしてリセットし、今度はフレックスジェスチャーを繰り返し、**`flex.csv`**として保存します。

**注意:** LinuxまたはMacを使用している場合、以下のコマンドを使用してWio Terminalからセンサーデータを直接`.csv`ファイルに出力できます：

```sh
 cat /dev/cu.usbmodem[nnnnn] > punch.csv
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-data.png"/></div>

## `.csv`ファイルの確認

`punch.csv`と`flex.csv`を開き、CSVファイルの最初の行が**aX,aY,aZ**であることを確認してください。以下を参考にしてください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-csv.png"/></div>

## TensorFlowでのトレーニングデータ

ここでは、Arduinoチームが作成した**Google Colabプロジェクト**を使用します。Colabは、ウェブブラウザでTensorFlowトレーニングを実行できるJupyterノートブックを提供します。このColabは環境を設定し、モデルをトレーニングし、モデルをTensorFlow Lite形式に変換し、Arduinoヘッダーファイルにエンコードします。

[**こちらをクリック**](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb)して**Google Colabプロジェクト**にアクセスしてください。

## Google Colabプロジェクトの変更

Wio Terminalに適応するために、Google Colabプロジェクトにいくつかの変更が必要です：

- **Python環境のセットアップ**には変更は必要ありません。

- **データのアップロード**には変更は必要ありません。

- **データのグラフ化**では、以下のようにジャイロスコープデータセクションをすべてコメントアウトします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step1.png"/></div>

- **データの解析と準備**では、以下のようにジャイロスコープデータセクションをすべてコメントアウトします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step2.png"/></div>

- **入力と出力ペアのランダム化と分割**には変更は必要ありません。

- **モデルの構築とトレーニング**には変更は必要ありません。

- **損失のグラフ化**には変更は必要ありません。

- **開始部分をスキップして損失を再度グラフ化**には変更は必要ありません。

- **平均絶対誤差のグラフ化**には変更は必要ありません。

- **テストデータでの実行**には変更は必要ありません。

- **トレーニング済みモデルをTensorFlow Liteに変換**には変更は必要ありません。

- **モデルをArduinoヘッダーファイルにエンコード**には変更は必要ありません。

左側のパネルから**`model.h`**ファイルをダウンロードしてください。

## Wio Terminalへのコードのアップロード

- モデルヘッダーファイルをダウンロードしたら、[IMU_Classifier.ino](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU_Classifier.zip)を開くか、以下のコードをArduino IDEにコピーしてください：

```cpp
/*
  IMU Classifier
  この例では、オンボードIMUを使用して加速度とジャイロスコープデータを読み取り、
  十分なサンプルが読み取られると、TensorFlow Lite (Micro) モデルを使用して
  動きを既知のジェスチャーとして分類しようとします。
  注意: C/C++ポインタ、名前空間、動的メモリの直接使用は一般的にArduinoの例では推奨されません。
        将来的にTensorFlowLiteライブラリが変更され、スケッチが簡単になる可能性があります。
  回路:
  - Arduino Nano 33 BLEまたはArduino Nano 33 BLE Senseボード。
  作成者: Don Coleman, Sandeep Mistry
  修正者: Dominic Pajak, Sandeep Mistry
  この例コードはパブリックドメインです。

  Wio Terminalに適応するために修正 - Anson (Seeed Studio)
*/

#undef min
#undef max
#include <TensorFlowLite.h>
#include <tensorflow/lite/experimental/micro/kernels/all_ops_resolver.h>
#include <tensorflow/lite/experimental/micro/micro_error_reporter.h>
#include <tensorflow/lite/experimental/micro/micro_interpreter.h>
#include <tensorflow/lite/schema/schema_generated.h>
#include <tensorflow/lite/version.h>

#include "model.h"
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;


const float accelerationThreshold = 2; // G単位での重要な閾値
const int numSamples = 119;

int samplesRead = numSamples;

// TensorFlow Lite (Micro) 用のグローバル変数
tflite::MicroErrorReporter tflErrorReporter;

// TFLMのすべてのオペレーションを取り込む。コンパイルサイズを減らしたい場合は、
// 必要なオペレーションのみを取り込むことができます。
tflite::ops::micro::AllOpsResolver tflOpsResolver;

const tflite::Model* tflModel = nullptr;
tflite::MicroInterpreter* tflInterpreter = nullptr;
TfLiteTensor* tflInputTensor = nullptr;
TfLiteTensor* tflOutputTensor = nullptr;

// TFLM用の静的メモリバッファを作成。使用するモデルに応じてサイズを調整する必要がある場合があります。
constexpr int tensorArenaSize = 8 * 1024;
byte tensorArena[tensorArenaSize];

// ジェスチャーインデックスを名前にマッピングする配列
const char* GESTURES[] = {
  "punch",
  "flex"
};


#define NUM_GESTURES (sizeof(GESTURES) / sizeof(GESTURES[0]))

void setup() {
  Serial.begin(9600);
//  while (!Serial);

  lis.begin(Wire1);
  
  // IMUを初期化
  if (!lis) {
    Serial.println("IMUの初期化に失敗しました！");
    while (1);
  }


  // モデルバイト配列のTFL表現を取得
  tflModel = tflite::GetModel(model);
  if (tflModel->version() != TFLITE_SCHEMA_VERSION) {
    Serial.println("モデルスキーマの不一致！");
    while (1);
  }

  // モデルを実行するためのインタープリターを作成
  tflInterpreter = new tflite::MicroInterpreter(tflModel, tflOpsResolver, tensorArena, tensorArenaSize, &tflErrorReporter);

  // モデルの入力および出力テンソルのメモリを割り当て
  tflInterpreter->AllocateTensors();

  // モデルの入力および出力テンソルのポインタを取得
  tflInputTensor = tflInterpreter->input(0);
  tflOutputTensor = tflInterpreter->output(0);
}

void loop() {
  float x, y, z;

  // 重要な動きを待機
  while (samplesRead == numSamples) {
    x=lis.getAccelerationX();
    y=lis.getAccelerationY();
    z=lis.getAccelerationZ();

    float aSum = fabs(x) + fabs(y) + fabs(z);

      // 閾値を超えているか確認
      if (aSum >= accelerationThreshold) {
        // サンプル読み取りカウントをリセット
        samplesRead = 0;
        break;
      }
  }

  // 前回の重要な動きが検出されてから必要なサンプルがすべて読み取られているか確認
  while (samplesRead < numSamples) {
    // 新しい加速度およびジャイロスコープデータが利用可能か確認
      // 加速度およびジャイロスコープデータを読み取る
      x=lis.getAccelerationX();
      y=lis.getAccelerationY();
      z=lis.getAccelerationZ();



      // IMUデータを0から1の間に正規化し、モデルの入力テンソルに格納
      tflInputTensor->data.f[samplesRead * 6 + 0] = (x + 4.0) / 8.0;
      tflInputTensor->data.f[samplesRead * 6 + 1] = (y + 4.0) / 8.0;
      tflInputTensor->data.f[samplesRead * 6 + 2] = (z + 4.0) / 8.0;

      samplesRead++;

      if (samplesRead == numSamples) {
        // 推論を実行
        TfLiteStatus invokeStatus = tflInterpreter->Invoke();
        if (invokeStatus != kTfLiteOk) {
          Serial.println("推論に失敗しました！");
          while (1);
          return;
        }

        // モデルの出力テンソル値をループして出力
        for (int i = 0; i < NUM_GESTURES; i++) {
          Serial.print(GESTURES[i]);
          Serial.print(": ");
          Serial.println(tflOutputTensor->data.f[i], 6);
        }
        Serial.println();
      }
  }
}
```

- トレーニング済みの `model.h` ヘッダーファイルを IMU_Classifier.ino ファイルと同じフォルダに配置し、コードを Wio Terminal にアップロードしてください。

- 次に、シリアルモニターを開いてジェスチャーを実行してください！各ジェスチャーの信頼度が表示されるはずです（0 = 信頼度が低い、1 = 信頼度が高い）。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step3.png"/></div>

## モデルファイルの例

参考として、トレーニング済みモデルの [model.h](https://files.seeedstudio.com/wiki/Wio-Terminal/res/model.h) ファイルをダウンロードできるように添付しました。このファイルを IMU_Classifier.ino と一緒に使用してテストしてください。

## さらなる開発

さらなる開発として、IMU を使用して Wio Terminal 上でより多くのジェスチャーをトレーニングし、異なる出力をトリガーすることができます！TensorFlow Lite を使用してマイクロコントローラー上で機械学習を探求してください！