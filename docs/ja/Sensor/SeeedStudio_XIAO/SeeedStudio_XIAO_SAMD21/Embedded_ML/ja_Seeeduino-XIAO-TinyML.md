---
description: Seeed Studio XIAO SAMD21 での TinyML
title: Seeed Studio XIAO SAMD21 での TinyML
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO-TinyML
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# Seeed Studio XIAO シリーズでの TinyML

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


モデル最適化の最近の改善と、マイクロコントローラー上で機械学習モデル推論を実行するために特別に作成されたフレームワークの出現により、これらの小さなデバイスにより多くのインテリジェンスを与えることが可能になりました。現在、音声シーン認識（例：象の活動やガラスの破砕音）、ホットワード検出（特定のフレーズでデバイスを起動）、さらには簡単な画像認識タスクのためにマイクロコントローラーにニューラルネットワークを展開できます。組み込みマイクロコントローラーを搭載したデバイスは、古いセンサーに新しい生命と意味を与えるために使用できます。例えば、異常検出と予知保全のためにメカニズムに設置された加速度計を使用したり、[このデモ](https://wiki.seeedstudio.com/ja/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)のように様々な種類の酒類を区別したりできます！
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**TinyML の可能性は本当に巨大です。**

私たちは、Seeed studio の別の製品であるプラスチックケースに入ったコンパクトな開発ボード、Wio Terminal に[小さな機械学習モデルを展開する全シリーズ](https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML/)を作成しました。しかし、さらに小さくして、ARM Cortex M0+ とそれを中心に構築された小さな [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) ボードに同様のモデルを展開することが可能です。このボードは親指ほど小さく（21×17.8mm）、わずか 1.33 mAh の電力しか消費せず（150 mA バッテリーで約112時間動作可能、ディープスリープに入れればさらに長時間）、価格はわずか 4.3 USD です。

このプロジェクトでは、Seeed Studio XIAO SAMD21 と Seeed Studio XIAO RP2040 開発ボードへのモデルの訓練と展開について説明します。追加情報については、対応するビデオをご覧ください！

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## データ取得とモデル訓練

ソフトウェアエンジニアは椅子に座って光る画面の前で多くの時間を過ごします。そして一日の後半になると、適切な姿勢を維持することが困難になります。もし適切な姿勢と間違った姿勢に対する特定の体位を学習し、猫背になりすぎたり「Python ポーズ」になったりしたときに警告してくれるデバイスを作る方法があったら…ちょっと待って、あります！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


機械学習モデルのデータを提供するタスクに最適なセンサーは、明らかに加速度計です。元の Seeed Studio XIAO SAMD21 と Seeed Studio XIAO RP2040 は非常に小さいため加速度計センサーを搭載していませんが、新しい Seeed Studio XIAO nRF52840 Sense には内蔵加速度計が付属しています。

元の Seeed Studio XIAO SAMD21 と Seeed Studio XIAO RP2040 を使用する場合は、[Grove LIS3DH 加速度計](https://wiki.seeedstudio.com/ja/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/)モジュールを [Seeed Studio XIAO 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)に接続してデータ収集を開始できます。各姿勢について 3 つのデータサンプルを収集し、それぞれ 60 秒間、デバイスを背中の T シャツに取り付けて行います。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


各サンプルについて、同じポーズを維持しますが、通常の活動をシミュレートするために腕、頭、胴体の動きを含めます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

非常にゆっくりと動くデータを扱っているため、ウィンドウシフト 1 秒の 5 秒時間ウィンドウと Flatten 処理ブロックを選択します。非常にシンプルな全結合ネットワークが良好な精度を提供しました。記事の下部の参考セクションで、Edge Impulse プロジェクトの公開版へのリンクを見つけることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

より多くのデータを収集し、衣服上のデバイス位置にいくらかの変動があっても適切な姿勢と不適切な姿勢を認識できるようにすることで、いくつかの改善を行うことができます。デバイスは個人使用デバイスと考えられているため、異なる人の姿勢に汎化する必要がなく、簡単に再訓練できます。訓練後にライブ分類タブで姿勢をどの程度よく検出するかを確認できます。

## モデル展開

精度に満足したら、結果のモデルを Arduino ライブラリとしてダウンロードし、Arduino sketches/libraries フォルダにコピーします。記事の下部の参考セクションでサンプルコードを見つけることができます。サンプルコードは 5 秒のサンプルを収集し、推論を実行し、不適切なポーズの 1 つが検出された場合にブザーをオンにします。

```cpp
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
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
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

比較的ゆっくりと変化するデータであり、高速な応答時間を必要としないため、通常の順次推論パイプラインがこのアプリケーションに適しています。

さらに一歩進んで、最新のSeeed Studio XIAO nRF52840を使用してデバイスをユーザーのスマートフォンに接続することで、より良いアラート、統計などを実現できるでしょう。

楽しく作業し、良い姿勢を保つことを忘れずに！

## 参考資料

- [Edge Impulse パブリックプロジェクト](https://studio.edgeimpulse.com/public/20025/latest)

- [プロジェクト Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)