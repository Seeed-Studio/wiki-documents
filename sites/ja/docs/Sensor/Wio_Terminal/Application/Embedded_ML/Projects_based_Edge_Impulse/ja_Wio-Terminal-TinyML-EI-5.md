---
description: 飲料の識別
title: 飲料の識別
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-EI-5
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal Edge Impulse とマルチチャンネルガスセンサーを使用した飲料の識別

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

このウィキでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) と [**Edge Impulse**](http://edgeimpulse.com/) を使用して、機械学習プロジェクトを簡単に展開する方法を紹介します。Wio Terminal と [**Grove システム**](https://www.seeedstudio.com/category/Grove-c-1003.html) を組み合わせることで、数百種類のセンサーデータを分析し、さまざまなシナリオを評価する可能性を秘めた強力なツールとなります！

このプロジェクトは、[Benjamin Cabé の人工鼻プロジェクト](https://twitter.com/kartben/status/1258791793073815552) に触発されています。このガイドを通じて、Wio Terminal を使用した Edge Impulse のワークフローを理解することができます。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - マルチチャンネルガスセンサー v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- アルコール、コーヒー、コーラなど

## 始めましょう

それでは、Wio Terminal を使用した Edge Impulse のワークフローを説明します。

### 1. Edge Impulse への接続

#### ① Wio Terminal に最新のデバイスファームウェアをロードする

Wio Terminal をコンピュータに接続します。電源スイッチを素早く2回スライドさせてブートローダーモードに入ります。詳細については[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq)も参照してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

PC に `Arduino` という名前の外部ドライブが表示されます。ダウンロードした [**Edge Impulse uf2 ファームウェアファイル**](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) を `Arduino` ドライブにドラッグします。これで、Edge Impulse が Seeeduino Wio Terminal にロードされました！

**注意:** [Wio Terminal Edge Impulse ソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse) はこちらにあります。ここからファームウェアをビルドすることもできます。

#### ② WebUSB を使用して接続する

Edge Impulse プロジェクトに移動し、**データ取得**タブをクリックします。右上に `Connect using WebUSB` の選択肢が表示されますので、クリックします。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg" /></div>
次に、ポップアップが表示されますので、ペアリングされたシリアルポートを選択し、「Connect」をクリックします。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg" /></div>
これで、Wio Terminal が Edge Impulse に正常に接続されました。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg" /></div>

### 2. データの収集

**Grove - マルチチャンネルガスセンサー v2 を Wio Terminal の Grove I2C ポート**に接続します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

Grove - マルチチャンネルガスセンサー v2 をテストする飲料の上に置きます。ここでは最初にコーラを使用します。注意点として、**Grove - マルチチャンネルガスセンサー v2 は周囲の影響を受けやすいため、テスト対象のみを感知するようにカバーを使用することをお勧めします**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

**Edge Impulse ダッシュボード**で、**データ取得**に移動し、デバイスを選択して**ラベル**を命名します。ラベルはテスト内容に応じて命名する必要があるため、ここでは **cola** とします。

**サンプル長 (ms.)** はサンプリング時間の長さをミリ秒単位で指定し、**センサー**は **外部マルチチャンネルガス** を選択し、**周波数**は **10Hz** を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"/></div>

**サンプリング開始**をクリックすると、データ収集が開始されます。

私のテストでは、**10秒間**のコーラデータを**9回**取得し、それぞれの結果は似たようなものでした。データセットは互いにかなり似ている必要があります。

:::note
    データが大きく変動する場合、これは周囲の影響による可能性があります。
:::

1つのラベルに十分なデータが収集できたら、他のラベルについても同じ手順を実行します！私のテストでは、空気、コーヒー、アルコールの3つのデータセットを追加しました：

- **空気データセット:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"/></div>

- **コーヒーデータセット:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"/></div>

- **アルコールデータセット:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"/></div>

異なる飲料が異なるガス値を持つことがわかるはずで、これは機械学習に最適です！さらに、後でトレーニングするためにデータが多いほど良いので、ぜひ多くのデータを収集してください！

:::note
    アルコールのカテゴリをもっと増やしてみてください！
:::

### 3. インパルスの設計

次に、**インパルス設計** -> **インパルス作成** をクリックしてインパルスを設計します。インパルスは生データを取り込み、信号処理を使用して特徴を抽出し、その後学習ブロックを使用して新しいデータを分類します。この例では、すべての入力軸を含む **生データ** の処理ブロックを追加し、**ニューラルネットワーク (Keras)** の学習ブロックを追加しました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"/></div>

**インパルスを保存**をクリックし、インパルス設計の下で **生データ** をクリックすると、データセットの生の特徴が表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"/></div>

**Save parameters** をクリックすると別のページに移動します。その後、**Generate Features** をクリックしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"/></div>

これにより、以前のデータセットから特徴が生成され、右側にグラフが表示されます。データセットが互いに分離されている場合、つまりデータセットが互いに固有である場合、機械学習において違いを学習するのに適しています。

### 4. トレーニングデータ

**Impulse Design** の下で、**NN Classifier** をクリックしてニューラルネットワークの設定を構成します。以下は私の設定です：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg" /></div>

これらの設定を必要に応じて調整し、**Neural network architecture** を構成してください。その後、**Start training** をクリックします！これによりトレーニングが実行され、少し時間がかかる場合があります。

トレーニングが完了すると、トレーニングパフォーマンスの表が表示されます。データセットが互いに固有である場合、かなり良い結果が得られるはずです！以下は私のパフォーマンスです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"/></div>

これを見ると、精度は悪くないことがわかります。これはケースが4つしかないためです。この例にさらに多くのケースやテストを追加することを検討してください。

### 5. ライブ分類

モデルがトレーニングされたので、新しいデータでモデルをテストできます。**Live classification** に移動し、テスト用の新しいデータセットをサンプリングします。

- テスト例 1:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"/></div>

- テスト例 2:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"/></div>

結果からわかるように、Grove - Multichannel Gas Sensor v2 と Edge Impulse を使用してアルコールを区別することができる、非常に良い結果が得られています！

## Wio Terminal へのデプロイ

次のステップはデバイスへのデプロイです。**Deployment** タブをクリックした後、Arduino ライブラリを選択してダウンロードしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

アーカイブを解凍し、Arduino のライブラリフォルダに配置します。Arduino IDE を開き、静的バッファスケッチを選択します（File -> Examples -> プロジェクト名 -> static_buffer）。このスケッチには、モデルを使用した分類のためのすべてのボイラープレートコードがすでに含まれています。便利ですね！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg" /></div>

ユーザーが記入する必要がある唯一の部分は、関数 `raw_feature_get_data(size_t offset, size_t length, float *out_ptr)` です。

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0] = gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2] = gas.getGM502B();
    features[3] = gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

## 完全なコード

```cpp
#include <coffee_cola_alcohol_big_inferencing.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];

    features[0] = gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2] = gas.getGM502B();
    features[3] = gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}

void setup()
{
    // 初回実行時にセットアップコードを記述
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // ハードウェアI2Cを使用
    Serial.println("Edge Impulse Inferencing Demo");
}

void loop()
{
    ei_printf("Edge Impulse standalone inferencing (Arduino)\n");

    ei_impulse_result_t result = { 0 };

    // 特徴量はフラッシュメモリに保存されており、すべてをRAMにロードしたくない
    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    // インパルスを実行
    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* デバッグ */);
    ei_printf("run_classifier returned: %d\n", res);

    if (res != 0) return;

    // 予測結果を出力
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    ei_printf("[");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("%.5f", result.classification[ix].value);
#if EI_CLASSIFIER_HAS_ANOMALY == 1
        ei_printf(", ");
#else
        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {
            ei_printf(", ");
        }
#endif
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("%.3f", result.anomaly);
#endif
    ei_printf("]\n");

    // 人間が読みやすい形式で予測結果を出力
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

    delay(1);
}

/**
 * @brief      Printf関数はvsnprintfを使用し、ArduinoのSerialで出力します
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
```

## 参考文献

- [Benjamin Cabéの人工鼻プロジェクト](https://twitter.com/kartben/status/1258791793073815552)

- [Edge Impulse 公開プロジェクト](https://studio.edgeimpulse.com/public/37392/latest)

- [プロジェクトのGithub](https://wiki.seeedstudio.com/ja/Wio-Terminal-Edge-Impulse)