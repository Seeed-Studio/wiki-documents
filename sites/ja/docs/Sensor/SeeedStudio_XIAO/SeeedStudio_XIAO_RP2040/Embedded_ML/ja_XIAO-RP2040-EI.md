---
description: Edge Impulseに基づくモーション認識
title: Edge Impulseに基づくモーション認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-RP2040-EI
last_update:
  date: 04/17/2023
  author: Citric
---

# SEEED XIAO RP2040でのTinyML（モーション認識）

このwikiでは、Seeed Studio XIAO RP2040の加速度センサーとEdge Impulseを組み合わせて、モーション認識を実現する方法を紹介します。ここで紹介するコードは、最新バージョンのXIAO RP2040ボードでサポートされています。

## 必要な材料

### ハードウェア

このwikiでは、以下の材料を準備する必要があります：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield for Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 3-Axis Digital Accelerometer(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**ハードウェアセットアップ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### ソフトウェア

必要なライブラリは以下の通りです。ハードウェアが正常に動作しているかどうかを確認するために、ここのコードを使用することを強く推奨します。ライブラリのインストールに問題がある場合は、[こちら](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## はじめに

まず、ボードとディスプレイ画面が正常に動作しているかどうかを確認するために、いくつかのデモを実行します。問題がなければ、次の手順に進むことができます。

### 回路接続と加速度センサーの確認

Arduino IDEを開き、Sketch -> Include Library -> Manage Libraries...に移動し、Library Managerで`U8g2 library`を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

インストール後、以下のコードをコピーして実行してください。

```cpp
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}

 
void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);
    
}

```

コードをアップロードしてSeeed Studio XIAO RP2040を取り外した後、
シリアルモニターを開くと、次のような出力が表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

すべて正常であれば、次に進んでSeeed Studio XIAO RP2040をEdge Impulseに接続できます。

## Edge Impulseとの接続

トレーニングモデルの精度は最終結果にとって非常に重要です。出力されるトレーニング結果が65%未満と低い場合は、より多くのトレーニングを行うか、より多くのデータを追加することを強く推奨します。

- **ステップ 1.** [Edge Impulse](https://studio.edgeimpulse.com/)で新しいプロジェクトを作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 2.** "Accelerometer data"を選択し、"Let's get started!"をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** コンピューターに[Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation)をインストールします。

- **ステップ 4.** `terminal`または`cmd`または`powershell`でコマンドを実行して開始します。

```bash
sudo edge-impulse-data-forwarder
```

- **ステップ 5.** CLIを使用してSeeed Studio XIAO RP2040をEdge Impulseに接続する必要があります。まず、アカウントにログインしてプロジェクトを選択します

加速度計とデバイスに名前を付けます。

Edge Impulseの「Data acquisition」ページに戻ると、接続が成功した場合の結果は次のようになります。ページの右側に「XIAO RP2040」のデバイスが表示されているのが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 6.** センサーを「3 axes」として選択します。ラベルを`up`と`down`として名前を付け、Sample length (ms.)を20000に変更してstart samplingをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 7.** [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)を上下に振り、20秒間その動作を続けます。取得結果は次のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 8.** 生データの右上をクリックして「Split Sample」を選択し、データを分割します。+Add Segmentをクリックしてからグラフをクリックします。これを20回以上繰り返してセグメントを追加します。Splitをクリックすると、それぞれ1秒間のサンプルデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 9.** **ステップ 7.**と**ステップ 8.**を繰り返し、`circle`や`line`など異なる名前でデータにラベルを付けて、異なる動作データをクリックします。提供されている例では、上下、左右、円の分類を行っています。ここで必要に応じて変更することができます。

:::note
ステップ 8.では分割時間が1秒です。これは、ステップ 7.で1秒間に少なくとも1回の上下の振りを行う必要があることを意味します。そうでなければ、結果は正確になりません。同時に、自分の動作速度に応じて分割時間を調整することができます。
:::

- **ステップ 10.** Impulseを作成

**Create impulse**をクリック -> Add a processing blockをクリック -> **Spectral Analysis**を選択 -> Add a learning blockをクリック -> **Classification (Keras)**を選択 -> Save Impulseをクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 11.** スペクトル特徴

クリックしてSet up

**Spectral features**をクリック -> ページを下にスクロールしてSave parametersをクリック -> **Generate features**をクリック

出力ページは次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 12.** モデルのトレーニング

NN Classifierをクリック -> Start trainingをクリック -> Unoptimized (float32)を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 13.** モデルテスト

Model testingをクリック -> Classify allをクリック

**精度が低い場合は、トレーニングセットを増やしてサンプル時間を延長することでデータセットを確認できます**

モデルをダウンロードする際に評価も取得できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 14.** Arduinoライブラリをビルド

Deploymentをクリック -> Arduino Libraryをクリック -> **Build**をクリック -> .ZIPファイルをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 15.** .ZIPファイルの名前は非常に重要で、デフォルトでEdge Impulseプロジェクトの名前として設定されます。ここではプロジェクト名が「RP2040」です。ファイルを選択して「.ZIPファイル」をArduinoライブラリに追加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 16.** Arduinoを開く -> Sketchをクリック -> **Include Library**をクリック ->
 **ADD .ZIP Library**をクリック

以下のコードをコピーします。edgeimpulseのプロジェクト名がカスタマイズされている場合、zipアーカイブのテキストは同じ名前になります。includeの最初の行をヘッダーファイルに変更できます。

```c
#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 17.** Seeed Studio XIAO RP2040 を動かしたり持ったりして結果を確認します：

Arduino の右上角にあるモニターをクリックします。

Seeed Studio XIAO RP2040 を**円と線**の方向に動かすと：

モニターは次のような出力を表示します：

```bash
15:45:45.434 -> 
15:45:45.434 -> Starting inferencing in 2 seconds...
15:45:47.414 -> Sampling...
15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

おめでとうございます！プロジェクトの終了を達成しました。より多くの方向性を試して、どれが最高の出力を実行するかを確認することをお勧めします。

## リソース

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
