---
description: この記事では、XIAOでSSCMACoreライブラリを使用する方法について説明します。
title: SSCMACoreライブラリを使用してモデル情報を出力する
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /ja/sensecraft_ai_sscmacore_library
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SSCMACoreライブラリを使用してXIAO ESP32S3 SenseのSenseCraft AIでモデル出力を設定する

このWikiでは、SSCMACore（Seeed SenseCraft Model Assistant Core）ライブラリを使用して、XIAO ESP32S3 Senseボード上でSenseCraft AIのモデル出力を設定する手順を説明します。この手順に従うことで、XIAO ESP32S3 Senseを事前トレーニング済みモデルと連携させ、SSCMACoreライブラリを使用してモデルの出力を処理できるようになります。

## 前提条件

以下のものを準備してください：

- XIAO ESP32S3 Sense
- XIAO ESP32S3 Senseをコンピュータに接続するためのUSB-Cデータケーブル
- Arduino IDE（[Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore)ライブラリがインストールされていること）

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ1. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

作業を進める前に、XIAO ESP32S3 Senseボードにトレーニング済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AIのドキュメントを参照して、デバイスにモデルをトレーニングおよびデプロイする方法を確認してください。

- [XIAO ESP32S3 Senseでモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自にトレーニングしたモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [トレーニングタイプ - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングタイプ - オブジェクト検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ2. SSCMAライブラリをセットアップする

[Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore)ライブラリをGitHubリポジトリからダウンロードしてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ダウンロードしたライブラリをArduino環境に追加するには、以下の手順に従ってください：

   - Arduino IDEを開きます。
   - **スケッチ -> ライブラリをインクルード -> .ZIP形式のライブラリを追加**を選択します。
   - ダウンロードした**Seeed_Arduino_SSCMACore**ライブラリを選択します。
   - **開く**をクリックして、ライブラリをArduino環境に追加します。

## ステップ 3. サンプルコードの選択と設定

SSCMAライブラリは、XIAO ESP32S3 Senseボード上でモデルの出力を操作する方法を示す2つのサンプルコードを提供しています。要件に応じて以下の例のいずれかを選択してください。

### 例 1: 推論

1. [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino) サンプルコードを開きます。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // シリアルポートの初期化
    Serial.begin(115200);

    // ビデオキャプチャの初期化
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // SSCMA Micro Coreの初期化
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("初期化完了");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("ボックス: x=%f, y=%f, w=%f, h=%f, スコア=%f, ターゲット=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("クラス: ターゲット=%d, スコア=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("ポイント: x=%f, y=%f, z=%f, スコア=%f, ターゲット=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("キーポイント: ボックス: x=%f, y=%f, w=%f, h=%f, スコア=%f, ターゲット=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("キーポイント: x=%f, y=%f, z=%f, スコア=%f, ターゲット=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("パフォーマンス: 前処理=%dms, 推論=%dms, 後処理=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

このサンプルコードは、SSCMAライブラリを使用して推論を実行し、モデルの出力（バウンディングボックス、クラス、ポイント、キーポイントなど）を取得する方法を示しています。このコードはビデオキャプチャとSSCMA Micro Coreを初期化し、カメラでキャプチャされた各フレームに対して推論を実行します。モデルの出力（バウンディングボックス、クラス、ポイント、キーポイントなど）はシリアルモニターに出力されます。

:::note
`loop()`関数は推論プロセスが行われる場所です。`capture.getManagedFrame()`を使用してフレームをキャプチャし、`instance.invoke(frame)`を使用してキャプチャされたフレームに対して推論を実行します。

推論後、コードはモデルからのさまざまな出力を取得して出力します：

- **バウンディングボックス**: `instance.getBoxes()`関数はバウンディングボックスのベクターを返します。各バウンディングボックスには、座標（x, y, w, h）、スコア、ターゲットクラスなどの情報が含まれます。
- **クラス**: `instance.getClasses()`関数は検出されたクラスのベクターを返します。各クラスにはターゲットクラスと対応するスコアの情報が含まれます。
- **ポイント**: `instance.getPoints()`関数は検出されたポイントのベクターを返します。各ポイントには座標（x, y, z）、スコア、ターゲットクラスなどの情報が含まれます。
- **キーポイント**: `instance.getKeypoints()`関数は検出されたキーポイントのベクターを返します。各キーポイントにはバウンディングボックスと関連するポイントのベクターが含まれます。コードはバウンディングボックス情報を出力し、ポイントを反復処理して座標、スコア、ターゲットクラスを出力します。

最後に、コードは`instance.getPerf()`を使用してパフォーマンスメトリクスを取得し、前処理、推論、後処理の時間をミリ秒単位で出力します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### 例 2: コールバックを使用した推論

1. [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino) サンプルコードを開きます。

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // シリアルポートの初期化
    Serial.begin(115200);

    // ビデオキャプチャの初期化
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // SSCMA Micro Coreの初期化
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("初期化完了");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));
    
}
```

このサンプルコードは、SSCMAライブラリを使用して推論を実行し、モデルの出力を処理するためのコールバック関数を登録する方法を示しています。このコードはビデオキャプチャとSSCMA Micro Coreを初期化し、パフォーマンスメトリクス、バウンディングボックス、クラス、ポイント、キーポイントのためのコールバック関数を登録します。推論プロセス中に登録されたコールバック関数が呼び出され、モデルの出力の処理をカスタマイズできます。

:::note
コードでは以下のコールバック関数が定義されています：

- `perfCb`: パフォーマンスメトリクスが利用可能になったときに呼び出されます。この関数は`SSCMAMicroCore::PerfMetrics`のインスタンスを受け取り、前処理、推論、後処理の時間を出力します。
- `boxCb`: 検出された各バウンディングボックスに対して呼び出されます。この関数は`SSCMAMicroCore::Box`のインスタンスを受け取り、ボックスの座標、スコア、ターゲットクラスを出力します。
- `classCb`: 検出された各クラスに対して呼び出されます。この関数は`SSCMAMicroCore::Class`のインスタンスを受け取り、ターゲットクラスとスコアを出力します。
- `pointCb`: 検出された各ポイントに対して呼び出されます。この関数は`SSCMAMicroCore::Point3D`のインスタンスを受け取り、ポイントの座標、スコア、ターゲットクラスを出力します。
- `keypointsCb`: 検出された各キーポイントに対して呼び出されます。この関数は`SSCMAMicroCore::Keypoints`のインスタンスを受け取り、バウンディングボックスと関連するポイントの情報を出力します。関数はバウンディングボックス情報を出力し、ポイントを反復処理して座標、スコア、ターゲットクラスを出力します。
:::

`setup()` 関数では、シリアル通信がボーレート115200で初期化されます。その後、`capture.begin()` 関数を使用して、XIAO ESP32S3 Sense用のデフォルトカメラ設定でビデオキャプチャが初期化されます。SSCMA Micro Coreは、`instance.begin()` 関数を使用してデフォルト設定で初期化されます。

初期化後、コードはSSCMA Micro Coreインスタンスが提供する適切なメソッドを使用してコールバック関数を登録します：

- `instance.setPerfCallback(perfCb)`：perfCb関数をパフォーマンスメトリクスのコールバックとして登録します。
- `instance.setBoxCallback(boxCb)`：boxCb関数をバウンディングボックスのコールバックとして登録します。
- `instance.setClassCallback(classCb)`：classCb関数を検出されたクラスのコールバックとして登録します。
- `instance.setPointCallback(pointCb)`：pointCb関数を検出されたポイントのコールバックとして登録します。
- `instance.setKeypointsCallback(keypointsCb)`：keypointsCb関数を検出されたキーポイントのコールバックとして登録します。

`loop()` 関数では、`capture.getManagedFrame()` を使用してフレームをキャプチャし、`instance.invoke(frame)` を使用してキャプチャしたフレームに対して推論を実行します。推論プロセス中に、対応する出力データが利用可能になると、登録されたコールバック関数が呼び出されます。

コールバック関数を変更して、アプリケーションの要件に基づいて特定のアクションを実行したり、受信データをさらに処理したりすることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. コードのアップロードと実行

USB-Cデータケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。Arduino IDEで選択したサンプルコード（`inference.ino` または `inference_cb.ino`）を開きます。

Arduino IDEで適切なボードとポートを選択します：
   - **ツール -> ボード** に移動し、"XIAO ESP32S3 Sense" を選択します。
   - **ツール -> ポート** に移動し、XIAO ESP32S3 Senseが接続されているポートを選択します。
   - **ツール -> PSRAM -> OPI PSRAM** に移動し、PSRAMを有効にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

Arduino IDEで「アップロード」ボタンをクリックして、コードをコンパイルしてXIAO ESP32S3 Senseボードにアップロードします。アップロードが完了したら、Arduino IDEのシリアルモニタを開いて、モデルの出力を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## 結論

このステップバイステップガイドに従うことで、SSCMAライブラリを使用してXIAO ESP32S3 Senseボード上でSenseCraft AIのモデル出力を設定できるようになったはずです。選択したサンプルコードに応じて、モデルの出力を直接取得するか、コールバック関数を使用して出力の処理をカスタマイズすることができます。

サンプルコードを自由に探索し、特定の要件に合わせて変更してください。SSCMAライブラリは、XIAO ESP32S3 Senseボード上でコンピュータビジョンや機械学習モデルを操作するための強力なツールと機能を提供します。

問題が発生した場合やさらに質問がある場合は、SenseCraft AIのドキュメントを参照するか、Seeed Studio コミュニティフォーラムでサポートを求めてください。

コンピュータビジョンと機械学習の世界をXIAO ESP32S3 Senseボードで楽しんでください！

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>