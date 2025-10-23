---
sidebar_position: 11
description: この記事では、XIAO で SSCMACore ライブラリを使用する方法について説明します。
title: SSCMACore ライブラリを使用してモデル情報を出力する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library
aliases:
  - /ja/sensecraft_ai_sscmacore_library
last_update:
  date: 12/12/2024
  author: Citric
---

# SSCMACore ライブラリを使用した XIAO ESP32S3 Sense 向け SenseCraft AI でのモデル出力設定

この wiki では、SSCMACore（Seeed SenseCraft Model Assistant Core）ライブラリを使用して、XIAO ESP32S3 Sense ボード向け SenseCraft AI でモデル出力を設定する方法について、ステップバイステップのガイドを提供します。これらの手順に従うことで、事前訓練されたモデルと連携するように XIAO ESP32S3 Sense を設定し、SSCMACore ライブラリを利用してモデルの出力を処理できるようになります。

## 前提条件

作業を進める前に、以下のものが揃っていることを確認してください：

- XIAO ESP32S3 Sense
- XIAO ESP32S3 Sense をコンピュータに接続するための USB-C データケーブル
- [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) ライブラリがインストールされた Arduino IDE

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

## ステップ1. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

続行する前に、XIAO ESP32S3 Senseボードに訓練済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、デバイスにモデルを訓練してデプロイする方法について、SenseCraft AIのドキュメントを参照してください。

- [XIAO ESP32S3 Sense用のモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自の訓練済みモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [訓練の種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [訓練の種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ2. SSCMAライブラリをセットアップする

GitHubリポジトリから[Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore)ライブラリをダウンロードしてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下の手順に従って、ダウンロードしたライブラリをArduino環境に追加してください：

- Arduino IDEを開きます。
- **スケッチ -> ライブラリをインクルード -> .ZIP形式のライブラリをインストール**に移動します。
- ダウンロードした**Seeed_Arduino_SSCMACore**ライブラリに移動して選択します。
- **開く**をクリックして、ライブラリをArduino環境に追加します。

## ステップ3. サンプルコードを選択して設定する

SSCMAライブラリは、XIAO ESP32S3 Senseボード上でモデル出力を操作する方法を示す2つのサンプルコードを提供しています。要件に基づいて、以下のサンプルの1つを選択してください：

### サンプル1: 推論

1. [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino)サンプルコードを開きます。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("Box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("Class: target=%d, score=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("Point: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("Keypoints: box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("Keypoint: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("Perf: preprocess=%dms, inference=%dms, postprocess=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

この例のコードは、SSCMAライブラリを使用して推論を実行し、バウンディングボックス、クラス、ポイント、キーポイントを含むモデルの出力を取得する方法を示しています。このコードは、ビデオキャプチャ、SSCMA Micro Core を初期化し、カメラによってキャプチャされた各フレームに対して推論を実行します。バウンディングボックス、クラス、ポイント、キーポイントなどのモデルの出力は、シリアルモニターに出力されます。

:::note
`loop()` 関数は推論プロセスが実行される場所です。`capture.getManagedFrame()` を使用してフレームをキャプチャし、`instance.invoke(frame)` を使用してキャプチャされたフレームに対して推論を呼び出すことから始まります。

推論後、コードはモデルからさまざまな出力を取得して出力します：

- **バウンディングボックス**: `instance.getBoxes()` 関数はバウンディングボックスのベクターを返します。各バウンディングボックスには、座標（x、y、w、h）、スコア、ターゲットクラスなどの情報が含まれています。
- **クラス**: `instance.getClasses()` 関数は検出されたクラスのベクターを返します。各クラスには、ターゲットクラスとその対応するスコアに関する情報が含まれています。
- **ポイント**: `instance.getPoints()` 関数は検出されたポイントのベクターを返します。各ポイントには、座標（x、y、z）、スコア、ターゲットクラスなどの情報が含まれています。
- **キーポイント**: `instance.getKeypoints()` 関数は検出されたキーポイントのベクターを返します。各キーポイントには、バウンディングボックスと関連するポイントのベクターが含まれています。コードはバウンディングボックス情報を出力し、ポイントを反復処理して、その座標、スコア、ターゲットクラスを出力します。

最後に、コードは `instance.getPerf()` を使用してパフォーマンスメトリクスを取得し、前処理、推論、後処理の時間をミリ秒単位で出力します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### 例 2: コールバックを使用した推論

1. [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino) の例のコードを開きます。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));
    
}
```

この例のコードは、SSCMAライブラリを使用して推論を実行し、モデルの出力を処理するためのコールバック関数を登録する方法を示しています。このコードは、ビデオキャプチャ、SSCMA Micro Core を初期化し、パフォーマンスメトリクス、バウンディングボックス、クラス、ポイント、キーポイントを処理するためのコールバック関数を登録します。推論プロセス中に、登録されたコールバック関数が呼び出され、モデルの出力の処理をカスタマイズできます。

:::note
このコードは、いくつかのコールバック関数を定義しています：

- `perfCb`: この関数は、パフォーマンスメトリクスが利用可能になったときに呼び出されます。`SSCMAMicroCore::PerfMetrics` のインスタンスを受け取り、前処理、推論、後処理の時間を出力します。
- `boxCb`: この関数は、検出された各バウンディングボックスに対して呼び出されます。`SSCMAMicroCore::Box` のインスタンスを受け取り、ボックスの座標、スコア、ターゲットクラスを出力します。
- `classCb`: この関数は、検出された各クラスに対して呼び出されます。`SSCMAMicroCore::Class` のインスタンスを受け取り、ターゲットクラスとスコアを出力します。
- `pointCb`: この関数は、検出された各ポイントに対して呼び出されます。`SSCMAMicroCore::Point3D` のインスタンスを受け取り、ポイントの座標、スコア、ターゲットクラスを出力します。
- `keypointsCb`: この関数は、検出された各キーポイントに対して呼び出されます。`SSCMAMicroCore::Keypoints` のインスタンスを受け取り、これにはバウンディングボックスと関連するポイントのベクターが含まれています。この関数は、バウンディングボックス情報を出力し、ポイントを反復処理して、それらの座標、スコア、ターゲットクラスを出力します。

`setup()` 関数では、シリアル通信がボーレート115200で初期化されます。その後、ビデオキャプチャが XIAO ESP32S3 Sense のデフォルトカメラ設定で `capture.begin()` 関数を使用して初期化されます。SSCMA Micro Core は、デフォルト設定で `instance.begin()` 関数を使用して初期化されます。

初期化後、コードは SSCMAMicroCore インスタンスによって提供される適切なメソッドを使用してコールバック関数を登録します：

- `instance.setPerfCallback(perfCb)`: perfCb 関数をパフォーマンスメトリクスのコールバックとして登録します。
- `instance.setBoxCallback(boxCb)`: boxCb 関数をバウンディングボックスのコールバックとして登録します。
- `instance.setClassCallback(classCb)`: classCb 関数を検出されたクラスのコールバックとして登録します。
- `instance.setPointCallback(pointCb)`: pointCb 関数を検出されたポイントのコールバックとして登録します。
- `instance.setKeypointsCallback(keypointsCb)`: keypointsCb 関数を検出されたキーポイントのコールバックとして登録します。

`loop()` 関数は、`capture.getManagedFrame()` を使用してフレームをキャプチャし、`instance.invoke(frame)` を使用してキャプチャされたフレームで推論を実行します。推論プロセス中に、対応する出力データが利用可能になるたびに、登録されたコールバック関数が呼び出されます。

アプリケーションの要件に基づいて、特定のアクションを実行したり、受信したデータをさらに処理したりするために、コールバック関数を変更できます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. コードのアップロードと実行

USB-C データケーブルを使用して、XIAO ESP32S3 Sense ボードをコンピューターに接続します。Arduino IDE で選択したサンプルコード（`inference.ino` または `inference_cb.ino`）を開きます。

Arduino IDE で適切なボードとポートを選択します：

- **Tools -> Board** に移動し、「XIAO ESP32S3 Sense」を選択します。
- **Tools -> Port** に移動し、XIAO ESP32S3 Sense が接続されているポートを選択します。
- **Tools -> PSRAM -> OPI PSRAM** に移動します。必ず PSRAM をオンにしてください！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

Arduino IDE の「Upload」ボタンをクリックして、コードをコンパイルし、XIAO ESP32S3 Sense ボードにアップロードします。アップロードが完了したら、Arduino IDE でシリアルモニターを開いて、モデルの出力を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## 結論

このステップバイステップガイドに従うことで、SSCMA ライブラリを使用して XIAO ESP32S3 Sense ボード用の SenseCraft AI でモデル出力を設定できるようになります。選択したサンプルコードに応じて、モデルの出力を直接取得するか、コールバック関数を使用して出力の処理をカスタマイズできます。

特定の要件に合わせてサンプルコードを自由に探索し、変更してください。SSCMA ライブラリは、XIAO ESP32S3 Sense ボードでコンピュータビジョンと機械学習モデルを操作するための強力なツールと機能のセットを提供します。

問題が発生したり、さらに質問がある場合は、SenseCraft AI ドキュメントを参照するか、Seeed Studio コミュニティフォーラムからサポートを求めてください。

XIAO ESP32S3 Sense ボードでコンピュータビジョンと機械学習の世界を探索し、コーディングを楽しんでください！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
